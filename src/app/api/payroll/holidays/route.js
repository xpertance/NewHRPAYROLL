import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import Holiday from "@/lib/db/models/payroll/Holiday";

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const organizationId = searchParams.get("organizationId");
        const year = searchParams.get("year");

        let query = { status: 'Active' };
        if (organizationId) {
            query.organizationId = organizationId;
        }

        if (year) {
            const startOfYear = new Date(`${year}-01-01`);
            const endOfYear = new Date(`${year}-12-31`);
            query.date = { $gte: startOfYear, $lte: endOfYear };
        }

        const holidays = await Holiday.find(query).sort({ date: 1 });

        return NextResponse.json({ success: true, holidays });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();

        // In a real app, we'd verify admin role here
        const holiday = await Holiday.create(body);

        return NextResponse.json({ success: true, holiday }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
