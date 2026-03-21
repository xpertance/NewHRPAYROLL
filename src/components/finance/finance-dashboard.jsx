"use client";

import { useState, useEffect } from "react";
import {
    TrendingUp, ArrowDownRight, ArrowUpRight,
    BarChart3, PieChart, Activity, DollarSign,
    Calendar, Filter, Search, Download,
    Building2, Users, FileText, Landmark,
    CheckCircle2, AlertCircle, Clock, Loader2,
    Settings, X, Save, Plus
} from "lucide-react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import VendorManager from "./vendor-manager";
import JournalEntryModal from "./journal-entry-modal"; // Import Modal

export default function FinanceDashboard({ initialTab = "overview" }) {
    const [activeTab, setActiveTab] = useState(initialTab);
    const [isEntryModalOpen, setIsEntryModalOpen] = useState(false); // Modal state
    const [stats, setStats] = useState({
        totalRevenue: 0,
        totalExpenses: 0,
        payrollCost: 0,
        pendingPayments: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/v1/admin/finance/stats');
            const data = await res.json();
            if (data.stats) {
                setStats({
                    totalRevenue: data.stats.totalRevenue,
                    totalExpenses: data.stats.operatingExpenses,
                    liabilities: data.stats.liabilities,
                    budgetAllocation: data.stats.budgetAllocation
                });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleExport = async () => {
        try {
            const res = await fetch('/api/v1/admin/finance/ledger');
            const data = await res.json();

            if (!data.entries || data.entries.length === 0) {
                toast.error("No data to export");
                return;
            }

            // Convert to CSV
            const headers = ["Date", "Reference", "Description", "Source", "TotalDebit", "TotalCredit"];
            const csvRows = [headers.join(',')];

            data.entries.forEach(entry => {
                const row = [
                    format(new Date(entry.date), 'yyyy-MM-dd'),
                    entry.referenceNumber,
                    `"${entry.description.replace(/"/g, '""')}"`, // Escape quotes
                    entry.source,
                    entry.totalDebit,
                    entry.totalCredit
                ];
                csvRows.push(row.join(','));
            });

            const csvContent = csvRows.join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ledger-export-${format(new Date(), 'yyyy-MM-dd')}.csv`;
            a.click();
            window.URL.revokeObjectURL(url);
            toast.success("Report Exported Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Export Failed");
        }
    };

    const tabs = [
        { id: "overview", label: "Overview", icon: Activity },
        { id: "ledger", label: "General Ledger", icon: Landmark },
        { id: "cost-centers", label: "Cost Centers", icon: Building2 },
        { id: "vendors", label: "Vendor Management", icon: Users },
        { id: "reports", label: "Financial Reports", icon: BarChart3 },
    ];

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                <p className="text-slate-500 font-medium animate-pulse">Analyzing financial records...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Finance Command Center</h1>
                    <p className="text-slate-500 text-sm font-medium mt-1">Real-time financial visibility and payroll-accounting integration.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm"
                    >
                        <Download className="w-4 h-4" /> Export Report
                    </button>
                    <button
                        onClick={() => setIsEntryModalOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                    >
                        <DollarSign className="w-4 h-4" /> New Entry
                    </button>
                </div>
            </div>

            {/* Tabbed Interface */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden min-h-[500px]">
                <div className="flex border-b border-slate-100 p-3 gap-2 bg-slate-50/50">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id
                                ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200"
                                : "text-slate-500 hover:bg-white hover:text-indigo-600"
                                }`}
                        >
                            <tab.icon className="w-4 h-4" /> {tab.label}
                        </button>
                    ))}
                </div>

                <div className="p-8">
                    {activeTab === "overview" && (
                        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                            {/* Financial Overview stats - only in overview */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden border-l-4 border-l-indigo-500">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 bg-indigo-100 rounded-[1rem] flex items-center justify-center">
                                                <Users className="w-5 h-5 text-indigo-600" />
                                            </div>
                                            <span className="flex items-center text-[10px] font-black text-emerald-500">
                                                <ArrowUpRight className="w-3 h-3 mr-1" />
                                                +12%
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Revenue (Real-time)</p>
                                        <h3 className="text-2xl font-black text-slate-900 mt-1">₹{stats.totalRevenue.toLocaleString()}</h3>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden border-l-4 border-l-orange-500">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 bg-orange-100 rounded-[1rem] flex items-center justify-center">
                                                <Activity className="w-5 h-5 text-orange-600" />
                                            </div>
                                            <span className="flex items-center text-[10px] font-black text-emerald-500">
                                                <ArrowUpRight className="w-3 h-3 mr-1" />
                                                +5%
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Operating Expenses</p>
                                        <h3 className="text-2xl font-black text-slate-900 mt-1">₹{stats.totalExpenses.toLocaleString()}</h3>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden border-l-4 border-l-emerald-500">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-[1rem] flex items-center justify-center">
                                                <FileText className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <span className="flex items-center text-[10px] font-black text-rose-500">
                                                <ArrowDownRight className="w-3 h-3 mr-1" />
                                                -2%
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Current Liabilities</p>
                                        <h3 className="text-2xl font-black text-slate-900 mt-1">₹{(stats.liabilities || 0).toLocaleString()}</h3>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden border-l-4 border-l-blue-500">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-[1rem] flex items-center justify-center">
                                                <Landmark className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <span className="flex items-center text-[10px] font-black text-emerald-500">
                                                <ArrowUpRight className="w-3 h-3 mr-1" />
                                                +8%
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Budget Allocation</p>
                                        <h3 className="text-2xl font-black text-slate-900 mt-1">₹{stats.budgetAllocation.toLocaleString()}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                    <h4 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                                        <PieChart className="w-5 h-5 text-indigo-600" /> Expense Distribution
                                    </h4>
                                    <div className="h-64 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-[10px] border-2 border-dashed border-slate-200 rounded-3xl">
                                        Charts coming soon
                                    </div>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                    <h4 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5 text-emerald-600" /> Cash Flow Trends
                                    </h4>
                                    <div className="h-64 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-[10px] border-2 border-dashed border-slate-200 rounded-3xl">
                                        Analytics engine loading...
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "ledger" && <LedgerViewer />}
                    {activeTab === "cost-centers" && <CostCenterManager />}
                    {activeTab === "vendors" && <VendorManager />}
                    {activeTab === "reports" && <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest text-lg animate-pulse italic">Compiling advanced financial analytics...</div>}
                </div>
            </div>

            <JournalEntryModal
                isOpen={isEntryModalOpen}
                onClose={() => setIsEntryModalOpen(false)}
                onEntrySaved={() => {
                    if (activeTab === "ledger") {
                        setActiveTab("overview");
                        setTimeout(() => setActiveTab("ledger"), 50);
                    }
                }}
            />
        </div>
    );
}

function LedgerViewer() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLedger();
    }, []);

    const fetchLedger = async () => {
        try {
            const res = await fetch('/api/v1/admin/finance/ledger');
            const data = await res.json();
            setEntries(data.entries || []);
        } catch (error) {
            toast.error("Failed to load ledger");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-600" /></div>;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none" placeholder="Search reference..." />
                </div>
                <div className="flex gap-2">
                    <button className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-500"><Filter className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="space-y-4">
                {entries.length === 0 ? (
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                        <Landmark className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                        <p className="text-slate-400 font-bold">No ledger entries found.</p>
                    </div>
                ) : (
                    entries.map((entry) => (
                        <div key={entry._id} className="border border-slate-100 rounded-[1.5rem] bg-white hover:border-indigo-100 transition-all p-6 group">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-tighter">
                                        {entry.source} • {entry.referenceNumber}
                                    </span>
                                    <h4 className="text-lg font-black text-slate-900 mt-2">{entry.description}</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{format(new Date(entry.date), 'dd MMMM yyyy')}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-black text-indigo-600">₹{entry.totalDebit.toLocaleString()}</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Balanced Entry</p>
                                </div>
                            </div>

                            <div className="bg-slate-50/50 rounded-2xl p-4 space-y-2">
                                {entry.lines.map((line, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-3">
                                            <span className={`w-1.5 h-6 rounded-full ${line.debit > 0 ? 'bg-indigo-500' : 'bg-rose-500'}`}></span>
                                            <div>
                                                <p className="font-bold text-slate-700">{line.accountName}</p>
                                                <p className="text-[9px] text-slate-400 uppercase font-black">{line.accountType}</p>
                                            </div>
                                        </div>
                                        <div className="text-right flex gap-8">
                                            {line.debit > 0 && <span className="font-black text-slate-900 w-24">DR: ₹{line.debit.toLocaleString()}</span>}
                                            {line.credit > 0 && <span className="font-black text-slate-500 w-24">CR: ₹{line.credit.toLocaleString()}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

function CostCenterManager() {
    const [costCenters, setCostCenters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
    const [selectedCC, setSelectedCC] = useState(null);

    useEffect(() => {
        fetchCostCenters();
    }, []);

    const fetchCostCenters = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/v1/admin/finance/cost-centers');
            const data = await res.json();
            setCostCenters(data.data || []);
        } catch (error) {
            toast.error("Failed to load cost centers");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateBudget = async (id, payload) => {
        try {
            const method = id ? 'PUT' : 'POST';
            const url = id ? `/api/v1/admin/finance/cost-centers?id=${id}` : '/api/v1/admin/finance/cost-centers';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Operation failed");
            toast.success(data.message || "Plan updated successfully");
            fetchCostCenters();
            setIsBudgetModalOpen(false);
        } catch (error) {
            toast.error(error.message);
        }
    };

    if (loading) return <div className="py-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-600" /></div>;

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Active Cost Centers</h3>
                    <p className="text-xs text-slate-500 font-medium">Real-time budget utilization and allocation tracking.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => {
                            setSelectedCC(null);
                            setIsBudgetModalOpen(true);
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                    >
                        <Plus className="w-3.5 h-3.5" /> Provision New Center
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {costCenters.map((cc, i) => {
                    const utilization = cc.budget > 0 ? (cc.spent / cc.budget) * 100 : 0;
                    const isOverBudget = utilization > 100;
                    const isNearLimit = utilization > 85;

                    return (
                        <div key={cc._id} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-500/5 transition-all group relative overflow-hidden border-b-4 border-b-transparent hover:border-b-indigo-500">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                                    <Building2 className={`w-6 h-6 text-indigo-600`} />
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{cc.code}</span>
                                    <button
                                        onClick={() => {
                                            setSelectedCC(cc);
                                            setIsBudgetModalOpen(true);
                                        }}
                                        className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                                    >
                                        <Settings className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <h4 className="text-xl font-black text-slate-900 mb-1">{cc.name}</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest truncate">Manager: {cc.manager?.personalDetails?.firstName || 'Universal'} {cc.manager?.personalDetails?.lastName || 'Alloc'}</p>

                            <div className="mt-8 space-y-4">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                    <span className="text-slate-500 italic">Utilization</span>
                                    <span className={isOverBudget ? "text-rose-600 animate-pulse" : isNearLimit ? "text-orange-600" : "text-emerald-600"}>
                                        {utilization.toFixed(1)}%
                                    </span>
                                </div>
                                <div className="h-4 bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ${isOverBudget ? 'bg-rose-500' : isNearLimit ? 'bg-orange-500' : 'bg-indigo-600'}`}
                                        style={{ width: `${Math.min(utilization, 100)}%` }}
                                    ></div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 pt-4">
                                    <div className="bg-slate-50 rounded-2xl p-3 text-center transition-colors group-hover:bg-white border border-transparent group-hover:border-slate-100">
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-tight mb-1">Budget</p>
                                        <p className="text-xs font-black text-slate-900">₹{(cc.budget / 100000).toFixed(1)}L</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-2xl p-3 text-center transition-colors group-hover:bg-white border border-transparent group-hover:border-slate-100">
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-tight mb-1">Spent</p>
                                        <p className="text-xs font-black text-indigo-600">₹{(cc.spent / 100000).toFixed(1)}L</p>
                                    </div>
                                    <div className="bg-slate-50 rounded-2xl p-3 text-center transition-colors group-hover:bg-white border border-transparent group-hover:border-slate-100">
                                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-tight mb-1">Avail</p>
                                        <p className={`text-xs font-black ${cc.budget - cc.spent < 0 ? 'text-rose-600' : 'text-emerald-600'}`}>₹{((cc.budget - cc.spent) / 100000).toFixed(1)}L</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Budget Planner Modal */}
            {isBudgetModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
                    <div className="bg-white rounded-[3rem] w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300 shadow-3xl">
                        <div className="p-10 border-b border-slate-100 bg-slate-50/50 relative">
                            <button onClick={() => setIsBudgetModalOpen(false)} className="absolute top-8 right-8 p-2 text-slate-400 hover:text-slate-900 transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                            <div className="w-16 h-16 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-indigo-100 mb-6">
                                <DollarSign className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">{selectedCC ? "Budget Planner" : "New Cost Center"}</h3>
                            <p className="text-slate-500 font-medium text-sm mt-1">{selectedCC ? `Adjust allocation for ${selectedCC.name}` : "Define a new financial tracking center"}</p>
                        </div>
                        <div className="p-10 space-y-6">
                            {!selectedCC && (
                                <>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Center Name</label>
                                        <input id="cc-name" placeholder="e.g. Research & Dev" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none text-sm font-bold" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Center Code</label>
                                        <input id="cc-code" placeholder="e.g. RD-001" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none text-sm font-bold" />
                                    </div>
                                </>
                            )}
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Planned Budget (₹)</label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-slate-400 text-xl">₹</span>
                                    <input
                                        type="number"
                                        defaultValue={selectedCC?.budget || 0}
                                        id="budget-input"
                                        autoFocus
                                        className="w-full pl-12 pr-8 py-6 bg-slate-50 rounded-3xl border-2 border-slate-100 focus:border-indigo-500 focus:ring-0 text-2xl font-black text-slate-900 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <button
                                    onClick={() => setIsBudgetModalOpen(false)}
                                    className="py-4 rounded-2xl bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        const budget = document.getElementById('budget-input').value;
                                        if (selectedCC) {
                                            handleUpdateBudget(selectedCC._id, { budget });
                                        } else {
                                            const name = document.getElementById('cc-name').value;
                                            const code = document.getElementById('cc-code').value;
                                            handleUpdateBudget(null, { name, code, budget });
                                        }
                                    }}
                                    className="py-4 rounded-2xl bg-indigo-600 text-white text-xs font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-2"
                                >
                                    <Save className="w-4 h-4" /> {selectedCC ? "Save Plan" : "Create Center"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
