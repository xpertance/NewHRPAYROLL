import dbConnect from "@/lib/db/connect";
import Asset from "@/lib/db/models/Asset";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const assignedTo = searchParams.get("assignedTo");
        const status = searchParams.get("status");

        let query = {};
        if (assignedTo) query.assignedTo = assignedTo;
        if (status) query.status = status;

        const assets = await Asset.find(query)
            .sort({ createdAt: -1 });

        return NextResponse.json(assets);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.assetId || !body.category) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const asset = await Asset.create(body);
        return NextResponse.json(asset, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
