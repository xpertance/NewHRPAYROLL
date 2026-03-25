
import React, { useState } from 'react';
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

export default function BankPayoutModal({ isOpen, onClose, payrollRun, onUpdate }) {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState('generate'); // generate | review | confirm

    if (!payrollRun) return null;

    const handleGenerateAdvice = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/v1/admin/payroll/payout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    payrollRunId: payrollRun._id,
                    action: 'generate_advice'
                })
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to generate advice');

            // Trigger download
            const blob = new Blob([data.csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = data.fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            toast.success("Bank advice generated!");
            setStep('confirm');
            onUpdate(); // refresh parent
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkPaid = async () => {
        if (!confirm("This will mark the payroll as PAID and send notifications to all employees. Continue?")) return;

        try {
            setLoading(true);
            const res = await fetch('/api/v1/admin/payroll/payout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    payrollRunId: payrollRun._id,
                    action: 'mark_paid'
                })
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to mark as paid');

            toast.success("Payroll marked as paid & notifications sent!");
            onUpdate();
            onClose();
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Bank Transfer Payout</DialogTitle>
                    <DialogDescription>
                        Manage salary disbursement for {payrollRun.month}/{payrollRun.year}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-slate-700">Total Net Payable</p>
                            <p className="text-2xl font-bold text-indigo-600">
                                ₹{(payrollRun.totalNetSalary || 0).toLocaleString()}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-500">Employees</p>
                            <p className="text-sm font-semibold">{payrollRun.processedEmployees}</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className={`p-4 rounded-lg border transition-all ${step === 'generate' ? 'bg-white border-indigo-200 shadow-sm' : 'bg-slate-50 border-slate-200 opacity-60'}`}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-sm flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">1</div>
                                    Generate Bank Advice
                                </span>
                                {payrollRun.payoutStatus === 'Processing' && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                            </div>
                            <p className="text-xs text-slate-500 mb-3 ml-8">
                                Download CSV file compatible with HDFC/ICICI bulk salary upload.
                            </p>
                            <Button
                                onClick={handleGenerateAdvice}
                                size="sm"
                                className="w-full ml-8 max-w-[calc(100%-2rem)]"
                                variant="outline"
                                disabled={loading}
                            >
                                {loading && step === 'generate' ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Download className="w-4 h-4 mr-2" />}
                                Download CSV
                            </Button>
                        </div>

                        <div className={`p-4 rounded-lg border transition-all ${step === 'confirm' ? 'bg-white border-indigo-200 shadow-sm' : 'bg-slate-50 border-slate-200 opacity-60'}`}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-sm flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">2</div>
                                    Confirm Payment
                                </span>
                                {payrollRun.payoutStatus === 'Completed' && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                            </div>
                            <p className="text-xs text-slate-500 mb-3 ml-8">
                                Mark as paid after successful bank upload. triggering employee notifications.
                            </p>
                            <Button
                                onClick={handleMarkPaid}
                                size="sm"
                                className="w-full ml-8 max-w-[calc(100%-2rem)] bg-emerald-600 hover:bg-emerald-700 text-white"
                                disabled={loading || step !== 'confirm'}
                            >
                                {loading && step === 'confirm' ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <CheckCircle className="w-4 h-4 mr-2" />}
                                Mark as Paid & Notify
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
