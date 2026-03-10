import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import Bonus from "@/lib/db/models/payroll/Bonus";
import Department from "@/lib/db/models/crm/Department/department";
import Employee from "@/lib/db/models/payroll/Employee";
import Notification from "@/lib/db/models/notifications/NotificationConfig";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

async function getUserFromRequest(req) {
    const token = req.cookies.get("authToken")?.value || req.cookies.get("employee_token")?.value;
    if (!token) return null;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}

export async function GET(req) {
    await dbConnect();
    const user = await getUserFromRequest(req);
    if (!user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        let query = {};

        if (user.role === 'employee') {
            // Complex query for employees:
            // 1. Target Audience is 'All'
            // 2. Target Audience is 'Individual' and Employee ID is in employees list
            // 3. Target Audience is 'Department' and Employee's department matches

            // First, get full employee details to know their department
            const employee = await Employee.findById(user.id);
            const deptId = employee?.jobDetails?.departmentId;

            query = {
                $or: [
                    { targetAudience: 'All' },
                    { targetAudience: 'Individual', employees: user.id },
                    { targetAudience: 'Department', department: deptId }
                ],
                status: { $ne: 'Cancelled' } // Usually don't show cancelled
            };
        } else {
            // Admin/Supervisor can see all (or filter)
            // Optional: Filter by status via query params
            const { searchParams } = new URL(req.url);
            const status = searchParams.get("status");
            if (status) query.status = status;
        }

        const bonuses = await Bonus.find(query)
            .populate('employees', 'personalDetails.firstName personalDetails.lastName')
            .populate('department', 'departmentName')
            .populate('createdBy', 'name')
            .populate('approvedBy', 'name')
            .sort({ createdAt: -1 });

        return NextResponse.json({ bonuses });

    } catch (error) {
        console.error("Error fetching bonuses:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req) {
    await dbConnect();
    const user = await getUserFromRequest(req);
    if (!user || user.role === 'employee') { // Usually employees don't create bonuses
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    try {
        const body = await req.json();
        const {
            title,
            description,
            type,
            amount,
            issuanceType,
            percentageBasis,
            targetAudience,
            employees,
            department,
            paymentDate
        } = body;

        console.log("Creating bonus with audience:", targetAudience);

        // Validation
        if (!title || !amount || !paymentDate) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        if (targetAudience === 'Individual' && (!employees || employees.length === 0)) {
            return NextResponse.json({ message: "Please select employees for Individual bonus" }, { status: 400 });
        }

        if (targetAudience === 'Department' && !department) {
            return NextResponse.json({ message: "Please select a department" }, { status: 400 });
        }

        const newBonus = await Bonus.create({
            title,
            description,
            type,
            amount,
            issuanceType,
            percentageBasis,
            targetAudience,
            employees: targetAudience === 'Individual' ? employees : [],
            department: targetAudience === 'Department' ? department : null,
            paymentDate,
            status: "Pending",
            createdBy: user.id
        });

        // --- Notification Logic ---
        let targetEmployeeIds = [];

        if (targetAudience === 'Individual') {
            targetEmployeeIds = employees;
        } else if (targetAudience === 'Department') {
            const departmentEmployees = await Employee.find({ 'jobDetails.departmentId': department }).select('_id');
            targetEmployeeIds = departmentEmployees.map(e => e._id);
        } else if (targetAudience === 'All') {
            console.log("Fetching all employees for notification...");
            const allEmployees = await Employee.find({}).select('_id');
            targetEmployeeIds = allEmployees.map(e => e._id);
            console.log(`Found ${targetEmployeeIds.length} employees.`);
        }

        if (targetEmployeeIds.length > 0) {
            console.log("Creating notifications for", targetEmployeeIds.length, "employees.");
            const notifications = targetEmployeeIds.map(empId => ({
                type: 'bonus',
                title: `New Bonus: ${title}`,
                message: `A new ${type} bonus has been initiated. Status: Pending.`,
                priority: 'medium',
                employee: empId,
                details: {
                    bonusId: newBonus._id,
                    amount: issuanceType === 'Fixed' ? amount : `${amount}% of ${percentageBasis}`,
                    paymentDate
                }
            }));

            try {
                await Notification.insertMany(notifications);
                console.log("Notifications inserted successfully.");
            } catch (notifError) {
                console.error("Error inserting notifications:", notifError);
            }
        } else {
            console.log("No result for target audience, skipping notifications.");
        }
        // --------------------------

        return NextResponse.json({ message: "Bonus created successfully", bonus: newBonus });

    } catch (error) {
        console.error("Error creating bonus:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
