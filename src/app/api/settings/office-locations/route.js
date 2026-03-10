import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import OfficeLocation from "@/lib/db/models/crm/organization/OfficeLocation";

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const organizationId = searchParams.get("organizationId");

        const query = {};
        if (organizationId) {
            query.organizationId = organizationId;
        }

        const locations = await OfficeLocation.find(query).sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            locations,
        });
    } catch (error) {
        console.error("Error fetching office locations:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();

        const location = await OfficeLocation.create(body);

        return NextResponse.json({
            success: true,
            location,
        }, { status: 201 });
    } catch (error) {
        console.error("Error creating office location:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { id, ...updateData } = body;

        if (!id) {
            return NextResponse.json(
                { success: false, error: "Location ID is required" },
                { status: 400 }
            );
        }

        const location = await OfficeLocation.findByIdAndUpdate(id, updateData, { new: true });

        if (!location) {
            return NextResponse.json(
                { success: false, error: "Location not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            location
        });

    } catch (error) {
        console.error("Error updating office location:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { success: false, error: "Location ID is required" },
                { status: 400 }
            );
        }

        await OfficeLocation.findByIdAndDelete(id);

        return NextResponse.json({
            success: true,
            message: "Location deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting office location:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
