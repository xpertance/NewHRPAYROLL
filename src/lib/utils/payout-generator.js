
/**
 * Utility to generate Bank Advice CSV for Salary Payout
 * Matches standard bank upload formats (HDFC, ICICI, SBI, etc.)
 * typically: Account No, Amount, Beneficiary Name, IFSC, Remarks
 */

export const generateBankAdviceCSV = (payslips) => {
    // CSV Header
    const headers = [
        "Beneficiary Name",
        "Account Number",
        "IFSC Code",
        "Amount",
        "Payment Date",
        "Remarks",
        "Email",
        "Mobile"
    ];

    const rows = payslips.map(slip => {
        const bank = slip.employee?.salaryDetails?.bankAccount || {};
        const amount = slip.netSalary || 0;
        const name = `${slip.employee?.personalDetails?.firstName || ''} ${slip.employee?.personalDetails?.lastName || ''}`.trim();
        const remarks = `Salary ${slip.month}/${slip.year}`;

        return [
            name,
            bank.accountNumber || "",
            bank.ifscCode || "",
            amount.toFixed(2),
            new Date().toLocaleDateString('en-GB'), // DD/MM/YYYY
            remarks,
            slip.employee?.personalDetails?.email || "",
            slip.employee?.personalDetails?.phone || ""
        ];
    });

    // Combine header and rows
    const csvContent = [
        headers.join(","),
        ...rows.map(row => row.map(field => `"${field}"`).join(","))
    ].join("\n");

    return csvContent;
};
