import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import Loan from "@/lib/db/models/payroll/Loan";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

// Helper to get user from token
async function getUserFromRequest(req) {
    const token =
        req.cookies.get("authToken")?.value ||
        req.cookies.get("employee_token")?.value;

    if (!token) return null;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}

export async function GET(req) {
    await dbConnect();
    const user = await getUserFromRequest(req);

    if (!user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        let query = {};

        if (user.role === "employee") {
            query = { employee: user.id };
        } else if (user.role === "admin") {
            const { searchParams } = new URL(req.url);
            const status = searchParams.get("status");
            const employeeId = searchParams.get("employeeId");

            if (status) query.status = status;
            if (employeeId) query.employee = employeeId;
        }

        const rawLoans = await Loan.find(query)
            .populate({
                path: "employee",
                select:
                    "name email personalDetails.firstName personalDetails.lastName personalDetails.email",
            })
            .populate("approvedBy", "name")
            .sort({ createdAt: -1 })
            .lean();

        const formattedLoans = rawLoans.map((loan) => {
            const emp = loan.employee;

            if (!emp) {
                return {
                    ...loan,
                    employee: {
                        _id: null,
                        name: "Unknown",
                        email: "",
                    },
                };
            }

            // Detect model by available fields instead of relying on onModel
            const isEmployeeModel =
                emp.personalDetails &&
                (emp.personalDetails.firstName ||
                    emp.personalDetails.lastName);

            let name = "Unknown";
            let email = "";

            if (isEmployeeModel) {
                name =
                    `${emp.personalDetails?.firstName || ""} ${emp.personalDetails?.lastName || ""
                        }`.trim() || "Unknown";

                email = emp.personalDetails?.email || "";
            } else {
                name = emp.name || "Unknown";
                email = emp.email || "";
            }

            return {
                ...loan,
                employee: {
                    _id: emp._id,
                    name,
                    email,
                },
            };
        });

        return NextResponse.json({ loans: formattedLoans });
    } catch (error) {
        console.error("Error fetching loans:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    await dbConnect();
    const user = await getUserFromRequest(req);

    if (!user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { amount, reason, type, installments } = body;

        if (!amount || !reason || amount <= 0) {
            return NextResponse.json(
                { message: "Invalid input" },
                { status: 400 }
            );
        }

        const onModel = user.role === "admin" ? "User" : "Employee";

        const newLoan = await Loan.create({
            employee: user.id,
            onModel,
            amount,
            reason,
            type: type || "Advance",
            installments: installments || 1,
            status: "Pending",
        });

        return NextResponse.json({
            message: "Loan requested successfully",
            loan: newLoan,
        });
    } catch (error) {
        console.error("Error creating loan:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
