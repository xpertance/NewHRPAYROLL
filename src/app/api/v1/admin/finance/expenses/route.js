import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Expense from '@/lib/db/models/finance/Expense';
import { z } from 'zod';

const expenseSchema = z.object({
    employee: z.string(),
    title: z.string().min(1),
    category: z.enum(['Travel', 'Food', 'Accommodation', 'Equipment', 'Software', 'Utilities', 'Other']),
    amount: z.number().min(0),
    date: z.string().transform(val => new Date(val)),
    description: z.string().optional(),
    receiptUrl: z.string().optional(),
    claimType: z.enum(['Personal', 'Team']).default('Personal'),
    teamMembers: z.string().optional(),
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
        if (employeeId) query.employee = employeeId;
        if (status && status !== 'all') query.status = status;
        if (claimType && claimType !== 'all') query.claimType = claimType;

        // Search Logic
        if (search) {
            const employees = await Employee.find({
                $or: [
                    { 'personalDetails.firstName': { $regex: search, $options: 'i' } },
                    { 'personalDetails.lastName': { $regex: search, $options: 'i' } }
                ]
            }).select('_id');
            const employeeIds = employees.map(e => e._id);

            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
                { employee: { $in: employeeIds } }
            ];
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
        
        if (existingExpense.status !== 'Pending' && !isOnlyStatusUpdate) {
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

        if (expense.status !== 'Pending') {
            return NextResponse.json({ error: "Only Pending expenses can be deleted" }, { status: 403 });
        }

        await Expense.findByIdAndDelete(id);

        return NextResponse.json({ message: "Expense deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
