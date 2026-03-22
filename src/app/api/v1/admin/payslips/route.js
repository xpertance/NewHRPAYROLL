import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import Payslip from "@/lib/db/models/payroll/Payslip";
import Employee from "@/lib/db/models/payroll/Employee";
import { getAuthUser, authorize } from "@/lib/auth-util";

export async function GET(request) {
  try {
    const authUser = await getAuthUser();
    authorize(authUser, ["admin", "hr", "company_admin", "super_admin", "employee"]);
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const month = searchParams.get("month");
    const year = searchParams.get("year");
    const employeeId = searchParams.get("employeeId");

    let filter = {};

    if (authUser.role !== "super_admin") {
      if (authUser.role === "employee") {
        filter.employee = authUser.id;
      } else {
        filter.organizationId = authUser.organizationId;
      }
    }

    if (month) filter.month = parseInt(month);
    if (year) filter.year = parseInt(year);
    if (employeeId) filter.employee = employeeId;

    const payslips = await Payslip.find(filter)
      .populate("employee", "employeeId personalDetails.firstName personalDetails.lastName jobDetails.department")
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, payslips });
  } catch (error) {
    console.error("GET PAYSLIPS ERROR:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const authUser = await getAuthUser();
    authorize(authUser, ["admin", "hr", "company_admin", "super_admin"]);
    await dbConnect();

    const body = await request.json();
    const { employeeId, salary, month, year, deductions, bonuses } = body;

    if (!employeeId || !month || !year) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    // Check for existing payslip
    const existing = await Payslip.findOne({
      employee: employeeId,
      month,
      year,
      status: { $ne: "Cancelled" },
    });

    if (existing) {
      return NextResponse.json({ success: false, error: "Payslip already exists for this period" }, { status: 400 });
    }

    const employeeRecord = await Employee.findById(employeeId);
    if (!employeeRecord) {
      return NextResponse.json({ success: false, error: "Employee not found" }, { status: 404 });
    }

    // Prepare payslip data
    const payslipData = {
      employee: employeeId,
      month,
      year,
      netSalary: salary || 0,
      deductions: deductions || [],
      bonuses: bonuses || [],
      organizationId: employeeRecord.jobDetails?.organizationId || authUser.organizationId,
      status: "Generated",
      generatedBy: authUser.id,
      payslipId: `PSL-${Date.now()}`,
      salaryType: "monthly",
      organizationName: "Company", // Placeholder or fetch from org
    };

    const payslip = await Payslip.create(payslipData);
    return NextResponse.json({ success: true, payslip }, { status: 201 });
  } catch (error) {
    console.error("POST PAYSLIPS ERROR:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
