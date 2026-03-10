import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import OvertimeRequest from "@/lib/db/models/payroll/OvertimeRequest";
import Attendance from "@/lib/db/models/payroll/Attendance";

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const employeeId = searchParams.get("employeeId");
        const status = searchParams.get("status");

        let query = {};
        if (employeeId) query.employee = employeeId;
        if (status) query.status = status;

        const requests = await OvertimeRequest.find(query)
            .populate("employee", "personalDetails employeeId")
            .populate("approvedBy", "name")
            .sort({ date: -1 });

        return NextResponse.json({ success: true, requests });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { employee, date, hours, reason } = body;

        if (!employee || !date || !hours || !reason) {
            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
        }

        const newRequest = await OvertimeRequest.create({
            employee,
            date: new Date(date),
            hours,
            reason,
            status: 'Pending'
        });

        return NextResponse.json({ success: true, request: newRequest }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
