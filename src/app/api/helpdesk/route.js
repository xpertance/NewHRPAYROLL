import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import HelpdeskTicket from "@/lib/db/models/HelpdeskTicket";
import Employee from "@/lib/db/models/payroll/Employee"; // Import Employee model
import User from "@/lib/db/models/User"; // To verify user

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const employeeId = searchParams.get("employeeId"); // Filter by employee
        const status = searchParams.get("status");

        let query = {};
        if (employeeId) {
            // If employeeId is string "EMP...", we need to find the ObjectId
            if (!employeeId.match(/^[0-9a-fA-F]{24}$/)) {
                const emp = await Employee.findOne({ employeeId: employeeId });
                if (emp) query.employee = emp._id;
            } else {
                query.employee = employeeId;
            }
        }
        if (status) query.status = status;

        const tickets = await HelpdeskTicket.find(query)
            .populate("employee", "personalDetails.firstName personalDetails.lastName")
            .populate("assignedTo", "name")
            .sort({ createdAt: -1 });

        return NextResponse.json(tickets);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        console.log("Helpdesk POST Body:", body);

        // Simple validation
        if (!body.subject || !body.description || !body.employee) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        let employeeObjectId = body.employee;

        // Try to find the employee to get the correct ObjectId
        // Check if it's already a valid ObjectId
        let emp = null;
        if (employeeObjectId.match(/^[0-9a-fA-F]{24}$/)) {
            emp = await Employee.findById(employeeObjectId);
        }

        // If not found by ID or not an ID, try by employeeId string
        if (!emp) {
            emp = await Employee.findOne({ employeeId: employeeObjectId });
        }

        // If still not found, and the user is an admin sending their User ID, 
        // they might not have an Employee record.
        // For now, we require an Employee record.
        if (!emp) {
            console.log("Employee not found for ID:", employeeObjectId);
            return NextResponse.json({ error: "Employee record not found. Please ensure you have an active Employee profile." }, { status: 404 });
        }

        employeeObjectId = emp._id; // Use the resolved ObjectId

        const newTicket = await HelpdeskTicket.create({
            ...body,
            employee: employeeObjectId
        });

        return NextResponse.json(newTicket, { status: 201 });
    } catch (error) {
        console.error("Helpdesk Create Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
