import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import JournalEntry from "@/lib/db/models/finance/JournalEntry";
import Expense from "@/lib/db/models/finance/Expense";
import Vendor from "@/lib/db/models/finance/Vendor";
import CostCenter from "@/lib/db/models/finance/CostCenter";

export async function GET() {
    try {
        await dbConnect();

        // 1. Total Revenue (Revenue accounts in Journal Entries)
        const revenueData = await JournalEntry.aggregate([
            { $match: { status: 'Posted' } },
            { $unwind: '$lines' },
            { $match: { 'lines.accountType': 'Revenue' } },
            { $group: { _id: null, total: { $sum: '$lines.credit' } } }
        ]);

        // 2. Total Operating Expenses (Expense accounts in Journal Entries)
        const expenseData = await JournalEntry.aggregate([
            { $match: { status: 'Posted' } },
            { $unwind: '$lines' },
            { $match: { 'lines.accountType': 'Expense' } },
            { $group: { _id: null, total: { $sum: '$lines.debit' } } }
        ]);

        // 3. Current Liabilities (Liability accounts)
        const liabilityData = await JournalEntry.aggregate([
            { $match: { status: 'Posted' } },
            { $unwind: '$lines' },
            { $match: { 'lines.accountType': 'Liability' } },
            { $group: { _id: null, balance: { $sum: { $subtract: ['$lines.credit', '$lines.debit'] } } } }
        ]);

        // 4. Vendor Pipeline (Pending Payments)
        const pendingPayments = await Expense.aggregate([
            { $match: { status: 'Approved' } }, // Approved but not Paid
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        // 5. Budget Utilization Overview
        const costCenterStats = await CostCenter.aggregate([
            { $group: { _id: null, totalBudget: { $sum: '$budget' } } }
        ]);

        return NextResponse.json({
            stats: {
                totalRevenue: revenueData[0]?.total || 0,
                operatingExpenses: expenseData[0]?.total || 0,
                liabilities: liabilityData[0]?.balance || 0,
                pendingPayments: pendingPayments[0]?.total || 0,
                budgetAllocation: costCenterStats[0]?.totalBudget || 0
            }
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
