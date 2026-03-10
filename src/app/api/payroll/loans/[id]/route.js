import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import Loan from "@/lib/db/models/payroll/Loan";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
async function getUserFromRequest(req) {
    const token = req.cookies.get("authToken")?.value || req.cookies.get("employee_token")?.value;
    if (!token) return null;
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

export async function PUT(req, { params }) {
    await dbConnect();
    const user = await getUserFromRequest(req);
    if (!user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;
        const body = await req.json();
        const { status, repayment } = body;

        const loan = await Loan.findById(id);
        if (!loan) {
            return NextResponse.json({ message: "Loan not found" }, { status: 404 });
        }

        // Admin Operations: Approve/Reject
        if (user.role === "admin") {
            if (status) {
                loan.status = status;
                if (status === "Approved") {
                    loan.approvedBy = user.id;
                    loan.approvalDate = new Date();
                    // Generate simple repayment schedule?
                    // Future: Implement schedule generation based on installments
                } else if (status === "Rejected") {
                    loan.rejectionReason = body.rejectionReason;
                }
            }
        } else {
            // Employees cannot update status directly usually
            return NextResponse.json({ message: "Unauthorized to update status" }, { status: 403 });
        }

        await loan.save();

        return NextResponse.json({ message: "Loan updated", loan });
    } catch (error) {
        console.error("Error updating loan:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    await dbConnect();
    const user = await getUserFromRequest(req);
    if (!user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;
        const loan = await Loan.findById(id);
        if (!loan) {
            return NextResponse.json({ message: "Loan not found" }, { status: 404 });
        }

        // Only allow delete if Pending
        if (loan.status !== "Pending") {
            return NextResponse.json({ message: "Cannot delete processed loan" }, { status: 400 });
        }

        // Start delete
        if (user.role === 'admin' || (user.role === 'employee' && loan.employee.toString() === user.id)) {
            await Loan.findByIdAndDelete(id);
            return NextResponse.json({ message: "Loan request deleted" });
        }

        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });

    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
