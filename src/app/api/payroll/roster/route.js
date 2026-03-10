import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import ShiftRoster from "@/lib/db/models/payroll/ShiftRoster";
import WorkingShift from "@/lib/db/models/payroll/WorkingShift";
import Employee from "@/lib/db/models/payroll/Employee";

export async function GET(req) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const organizationId = searchParams.get("organizationId");
        const employeeId = searchParams.get("employeeId");
        const startDate = searchParams.get("startDate"); // ISO String
        const endDate = searchParams.get("endDate"); // ISO String

        const filter = {};
        if (organizationId) filter.organizationId = organizationId;
        if (employeeId) filter.employeeId = employeeId;

        if (startDate || endDate) {
            filter.date = {};
            if (startDate) filter.date.$gte = new Date(startDate);
            if (endDate) filter.date.$lte = new Date(endDate);
        }

        const roster = await ShiftRoster.find(filter)
            .populate("shiftId")
            .populate("employeeId", "personalDetails employeeId")
            .sort({ date: 1 });

        return NextResponse.json({ success: true, roster });
    } catch (error) {
        console.error("GET Roster Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await dbConnect();
        const { assignments, organizationId, assignedBy } = await req.json();

        if (!assignments || !Array.isArray(assignments)) {
            return NextResponse.json({ success: false, error: "Assignments array is required" }, { status: 400 });
        }

        // Assignments structure: [{ employeeId, date, shiftId }]
        const results = [];
        for (const assignment of assignments) {
            const { employeeId, date, shiftId } = assignment;

            // Upsert: Create or update assignment for this employee on this date
            const updated = await ShiftRoster.findOneAndUpdate(
                { employeeId, date: new Date(date) },
                {
                    shiftId,
                    organizationId,
                    assignedBy,
                    status: "Published"
                },
                { upsert: true, new: true }
            );
            results.push(updated);
        }

        return NextResponse.json({ success: true, count: results.length, roster: results });
    } catch (error) {
        console.error("POST Roster Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id"); // Single assignment ID
        const employeeId = searchParams.get("employeeId");
        const date = searchParams.get("date");

        if (id) {
            await ShiftRoster.findByIdAndDelete(id);
        } else if (employeeId && date) {
            await ShiftRoster.findOneAndDelete({ employeeId, date: new Date(date) });
        } else {
            return NextResponse.json({ success: false, error: "ID or EmployeeId & Date required" }, { status: 400 });
        }

        return NextResponse.json({ success: true, message: "Assignment removed" });
    } catch (error) {
        console.error("DELETE Roster Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
