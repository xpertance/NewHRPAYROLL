import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import WorkingShift from "@/lib/db/models/payroll/WorkingShift";

export async function GET(req) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const organizationId = searchParams.get("organizationId");
        const status = searchParams.get("status") || "Active";

        const filter = { status };
        if (organizationId) filter.organizationId = organizationId;

        const shifts = await WorkingShift.find(filter).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, shifts });
    } catch (error) {
        console.error("GET Shifts Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await dbConnect();
        const data = await req.json();

        // If setting as default, unset other default shifts in same organization
        if (data.isDefault) {
            await WorkingShift.updateMany(
                { organizationId: data.organizationId, isDefault: true },
                { $set: { isDefault: false } }
            );
        }

        const shift = await WorkingShift.create(data);
        return NextResponse.json({ success: true, shift });
    } catch (error) {
        console.error("POST Shift Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        await dbConnect();
        const data = await req.json();
        const { _id, ...updateData } = data;

        if (!_id) {
            return NextResponse.json({ success: false, error: "Shift ID is required" }, { status: 400 });
        }

        // If setting as default, unset other default shifts in same organization
        if (updateData.isDefault) {
            const existing = await WorkingShift.findById(_id);
            if (existing) {
                await WorkingShift.updateMany(
                    { organizationId: existing.organizationId, isDefault: true, _id: { $ne: _id } },
                    { $set: { isDefault: false } }
                );
            }
        }

        const shift = await WorkingShift.findByIdAndUpdate(_id, updateData, { new: true });
        return NextResponse.json({ success: true, shift });
    } catch (error) {
        console.error("PUT Shift Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ success: false, error: "Shift ID is required" }, { status: 400 });
        }

        await WorkingShift.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Shift deleted successfully" });
    } catch (error) {
        console.error("DELETE Shift Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
