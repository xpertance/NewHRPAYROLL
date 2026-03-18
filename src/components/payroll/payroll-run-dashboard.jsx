"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/context/SessionContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CalendarDays, PlayCircle, Loader2, AlertCircle, RefreshCw, FileText } from "lucide-react";

export function PayrollRunDashboard() {
  const router = useRouter();
  const { user } = useSession();
  const [loading, setLoading] = useState(false);
  const [fetchingHistory, setFetchingHistory] = useState(true);
  const [payrollHistory, setPayrollHistory] = useState([]);
  const [formData, setFormData] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const fetchPayrollHistory = async () => {
    try {
      setFetchingHistory(true);
      // Fetching all past runs (API filters by org automatically for admins)
      const res = await fetch("/api/payroll/run");
      const data = await res.json();
      if (res.ok) {
        setPayrollHistory(data || []);
      }
    } catch (error) {
      console.error("Error fetching payroll history", error);
    } finally {
      setFetchingHistory(false);
    }
  };

  useEffect(() => {
    fetchPayrollHistory();
  }, []);

  const handleGenerateBatch = async () => {
    // Confirm before running batch
    const confirm = window.confirm(
      `Are you sure you want to run payroll for ${months[formData.month - 1]} ${formData.year}?\n\nThis will generate Draft payslips for ALL active employees.`
    );
    if (!confirm) return;

    setLoading(true);
    const toastId = toast.loading("Processing batch payroll. This may take a moment...");

    try {
      const res = await fetch("/api/payroll/run/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          month: formData.month,
          year: formData.year,
          orgId: user?.organizationId
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to generate payroll batch", { id: toastId });
        return;
      }

      toast.success(data.message || "Batch Payroll Generated Successfully!", { id: toastId });
      
      // Navigate to the Review screen for this new run
      router.push(`/payroll/run/${data.runId}`);

    } catch (error) {
      console.error("Batch error:", error);
      toast.error("Internal Server Error", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Batch Payroll Run</h1>
          <p className="text-sm text-slate-500 mt-1">
            Generate and process payroll for all employees simultaneously
          </p>
        </div>
      </div>

      {/* Main Action Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <PlayCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Start New Payroll Run</h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Select the target month and year. The system will automatically fetch all active employees, 
                calculate their statutory deductions, factor in leaves/attendance, and prepare draft payslips.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row items-end gap-6 max-w-3xl">
            <div className="w-full">
              <label className="block text-sm font-medium text-slate-700 mb-2">Target Month</label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  value={formData.month}
                  onChange={(e) => setFormData({ ...formData, month: parseInt(e.target.value) })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow appearance-none"
                >
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>{month}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium text-slate-700 mb-2">Target Year</label>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow appearance-none"
              >
                {[...Array(5)].map((_, i) => {
                  const y = new Date().getFullYear() - 1 + i;
                  return <option key={y} value={y}>{y}</option>;
                })}
              </select>
            </div>

            <button
              onClick={handleGenerateBatch}
              disabled={loading}
              className="w-full md:w-auto flex-shrink-0 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <PlayCircle className="w-5 h-5" />
                  Run Payroll Batch
                </>
              )}
            </button>
          </div>

          <div className="mt-6 flex gap-2 items-start p-4 bg-amber-50 rounded-lg text-amber-800 text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600" />
            <p>
              <strong>Note:</strong> Generating a batch will create "Draft" payslips. 
              No notifications will be sent to employees and payslips will remain hidden until you explicitly <strong>Lock & Publish</strong> them in the next step.
            </p>
          </div>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900">Recent Payroll Runs</h2>
          <button 
             onClick={fetchPayrollHistory} 
             disabled={fetchingHistory}
             className="text-slate-500 hover:text-indigo-600 transition-colors p-2 rounded-md hover:bg-slate-50"
          >
            <RefreshCw className={`w-4 h-4 ${fetchingHistory ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {fetchingHistory ? (
          <div className="p-12 flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-slate-300" />
          </div>
        ) : payrollHistory.length === 0 ? (
          <div className="p-12 text-center text-slate-500">
            <FileText className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <p>No payroll runs found for your organization yet.</p>
            <p className="text-sm mt-1">Start your first batch run above.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Run ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Period</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Employees</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Net Payout</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {payrollHistory.map((run) => (
                  <tr key={run._id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 border-l-2 border-transparent">
                      {run.runId}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {months[run.month - 1]} {run.year}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {run.employeesProcessed || 0}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 text-right">
                      ₹{(run.totalNetSalary || 0).toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        run.status === 'Locked' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                        run.status === 'Published' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {run.status || 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <button
                        onClick={() => router.push(`/payroll/run/${run._id}`)}
                        className="text-indigo-600 hover:text-indigo-900 hover:underline"
                      >
                        View Summary
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
