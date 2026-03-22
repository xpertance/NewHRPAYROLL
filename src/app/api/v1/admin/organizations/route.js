import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import Organization from "@/lib/db/models/crm/organization/Organization";
import { getAuthUser, authorize } from "@/lib/auth-util";

export async function GET(request) {
  try {
    const authUser = await getAuthUser();
    authorize(authUser, ["admin", "hr", "company_admin", "super_admin"]);
    
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const skip = (page - 1) * limit;
    const filter = {};

    if (status && status !== "all") filter.status = status;

    // SaaS PROTECTION: Restrict admin/hr to their own org if they have one assigned
    if (authUser.role !== "super_admin" && authUser.organizationId) {
      filter._id = authUser.organizationId;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const organizations = await Organization.find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Organization.countDocuments(filter);

    return NextResponse.json({
      success: true,
      organizations,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET ORGANIZATIONS ERROR:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: error.status || 500 });
  }
}
