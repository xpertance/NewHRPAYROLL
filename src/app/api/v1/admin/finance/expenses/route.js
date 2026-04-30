import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Expense from '@/lib/db/models/finance/Expense';
import { z } from 'zod';
import mongoose from 'mongoose';

const expenseSchema = z.object({
    employee: z.string().optional(),
    title: z.string().min(1),
    category: z.enum(['Travel', 'Food', 'Accommodation', 'Equipment', 'Software', 'Utilities', 'Other']),
    amount: z.preprocess((val) => (val === "" || val === null ? 0 : Number(val)), z.number().min(0).default(0)),
    maxAmount: z.preprocess((val) => (val === "" || val === null ? 0 : Number(val)), z.number().min(0).default(0)),
    date: z.string().transform(val => new Date(val)).optional(),
    description: z.string().optional(),
    receiptUrl: z.string().optional(),
    claimType: z.enum(['Personal', 'Team', 'Department']).default('Personal'),
    teamMembers: z.string().optional(),
    status: z.enum(['Draft', 'Pending', 'Approved', 'Rejected', 'Paid']).default('Pending'),
    costCenter: z.string().optional(),
    gstDetails: z.object({
        gstNumber: z.string().optional(),
        gstAmount: z.number().optional(),
        isGstIncluded: z.boolean().default(true)
    }).optional()
});

import Employee from '@/lib/db/models/payroll/Employee';

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const employeeId = searchParams.get('employeeId');
        const status = searchParams.get('status');
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        const search = searchParams.get('search');
        const claimType = searchParams.get('claimType');

        let query = {};
        if (employeeId) {
            const employee = await Employee.findById(employeeId).populate('jobDetails.departmentId jobDetails.teamId');
            if (employee) {
                const deptName = employee.jobDetails?.departmentId?.departmentName || employee.jobDetails?.department;
                const teamName = employee.jobDetails?.teamId?.name;

                // When an employee fetches their own data, they should see:
                // 1. Their own personal claims
                // 2. Drafts specifically assigned to them
                // 3. Drafts assigned to their team or department
                // Build the base visibility filter
                const visibilityFilter = {
                    $or: [
                        { employee: new mongoose.Types.ObjectId(employeeId) }
                    ]
                };

                if (deptName) {
                    visibilityFilter.$or.push({ status: 'Draft', claimType: 'Department', teamMembers: deptName });
                }
                if (teamName) {
                    visibilityFilter.$or.push({ status: 'Draft', claimType: 'Team', teamMembers: teamName });
                }

                query.$and = [visibilityFilter];

                // Add additional filters if present
                if (status && status !== 'all') query.$and.push({ status });
                if (claimType && claimType !== 'all') query.$and.push({ claimType });
            } else {
                query.employee = employeeId;
                if (status && status !== 'all') query.status = status;
                if (claimType && claimType !== 'all') query.claimType = claimType;
            }
        } else {
            // Admin/Global view
            if (status && status !== 'all') query.status = status;
            if (claimType && claimType !== 'all') query.claimType = claimType;
        }

        // Search Logic
        if (search) {
            const employees = await Employee.find({
                $or: [
                    { 'personalDetails.firstName': { $regex: search, $options: 'i' } },
                    { 'personalDetails.lastName': { $regex: search, $options: 'i' } }
                ]
            }).select('_id');
            const employeeIds = employees.map(e => e._id);

            const searchFilter = {
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { category: { $regex: search, $options: 'i' } },
                    { employee: { $in: employeeIds } }
                ]
            };

            if (query.$and) {
                query.$and.push(searchFilter);
            } else {
                query.$or = searchFilter.$or;
            }
        }

        // Date Filtering
        if (startDate || endDate) {
            query.date = {};
            if (startDate) query.date.$gte = new Date(startDate);
            if (endDate) query.date.$lte = new Date(endDate);
        }

        const expenses = await Expense.find(query)
            .populate('employee', 'personalDetails employeeId')
            .populate('costCenter', 'name code')
            .sort({ createdAt: -1 });

        return NextResponse.json({ expenses });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const validatedData = expenseSchema.parse(body);

        const expense = await Expense.create(validatedData);
        return NextResponse.json({ expense, message: "Expense claim submitted successfully" }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { id, ...updateData } = body;

        if (!id) return NextResponse.json({ error: "Expense ID is required" }, { status: 400 });

        // If trying to edit expense details, ensure it's still Pending
        const existingExpense = await Expense.findById(id);
        if (!existingExpense) {
            return NextResponse.json({ error: "Expense not found" }, { status: 404 });
        }

        // Only block editing fields if it's not Pending AND the update is trying to change more than just status/payment details
        const isOnlyStatusUpdate = Object.keys(updateData).every(k => ['status', 'paymentDetails', 'adminComments'].includes(k));
        
        if (!['Pending', 'Draft'].includes(existingExpense.status) && !isOnlyStatusUpdate) {
            return NextResponse.json({ error: "Cannot edit expense after it is approved or paid" }, { status: 403 });
        }

        const expense = await Expense.findByIdAndUpdate(id, updateData, { new: true });

        return NextResponse.json({ expense, message: "Expense updated successfully" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: "Expense ID is required" }, { status: 400 });

        const expense = await Expense.findById(id);
        if (!expense) return NextResponse.json({ error: "Expense not found" }, { status: 404 });

        if (expense.status !== 'Pending' && expense.status !== 'Draft') {
            return NextResponse.json({ error: "Only Pending or Draft expenses can be deleted" }, { status: 403 });
        }

        await Expense.findByIdAndDelete(id);

        return NextResponse.json({ message: "Expense deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
