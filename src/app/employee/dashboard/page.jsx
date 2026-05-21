"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    ShieldCheck,
    Calculator,
    Download,
    Eye,
    TrendingUp,
    Calendar,
    ArrowUpRight,
    Search,
    ChevronRight,
    CheckCircle2,
    AlertTriangle,
    PlusCircle,
    Info,
    Wallet,
    Percent,
    Trophy,
    Clock,
    CalendarDays,
    Building,
    History,
    FilePlus2,
    X,
    Users,
    Loader2
} from "lucide-react";
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { toast } from "sonner";
import { format } from "date-fns";
import { useSession } from "@/context/SessionContext";
import { useLanguage } from "@/context/LanguageContext";
import ESSLeaveManagement from "@/components/payroll/ess-leave-management";
import ESSTalentDashboard from "@/components/talent/ess-talent-dashboard";
import MyTasks from "@/components/tasks/my-tasks";
import { CheckSquare } from "lucide-react";

const TabButton = ({ active, label, icon: Icon, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border-b-2 ${active
            ? 'border-indigo-600 text-indigo-600'
            : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
    >
        <Icon className={`w-4 h-4 ${active ? 'text-indigo-600' : 'text-slate-400'}`} />
        {label}
    </button>
);

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
        {children}
    </div>
);

const StatCard = ({ title, value, sub, icon: Icon, color = "indigo" }) => {
    const colors = {
        indigo: "bg-indigo-50 text-indigo-600 border-indigo-100 shadow-indigo-100/50",
        emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-100/50",
        amber: "bg-amber-50 text-amber-600 border-amber-100 shadow-amber-100/50",
    };
    return (
        <Card className="p-6 border-none shadow-lg">
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${colors[color]} border`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{title}</h4>
                    <p className="text-2xl font-black text-slate-900 leading-tight mt-0.5">{value}</p>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5">{sub}</p>
                </div>
            </div>
        </Card>
    );
};

function ESSDashboardContent() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");
    const { user, loading: sessionLoading } = useSession();
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState(tabParam || "overview");

    useEffect(() => {
        if (tabParam) {
            setActiveTab(tabParam);
        }
    }, [tabParam]);
    const [loading, setLoading] = useState(true);
    const [employee, setEmployee] = useState(null);
    const [payslips, setPayslips] = useState([]);
    const [investments, setInvestments] = useState(null);
    const [taskStats, setTaskStats] = useState({ total: 0, pending: 0 });
    const [payrollConfig, setPayrollConfig] = useState(null);
    const [attendanceList, setAttendanceList] = useState([]);

    const [showPolicyModal, setShowPolicyModal] = useState(false);
    const [selectedFY, setSelectedFY] = useState("2025-26");
    const [previewSlip, setPreviewSlip] = useState(null);
    const [userRoster, setUserRoster] = useState([]);
    const [otRequests, setOtRequests] = useState([]);
    const [coRequests, setCoRequests] = useState([]);
    const [coBalance, setCoBalance] = useState(0);

    // Timesheet States
    const [projects, setProjects] = useState([]);
    const [timesheet, setTimesheet] = useState(null);
    const [timesheetEntries, setTimesheetEntries] = useState([]);
    const [teamLeaves, setTeamLeaves] = useState([]);
    const [loadingTeamLeaves, setLoadingTeamLeaves] = useState(false);
    const [weekStartDate, setWeekStartDate] = useState(() => {
        const d = new Date();
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday
        const monday = new Date(d.setDate(diff));
        monday.setHours(0, 0, 0, 0);
        return monday;
    });
    const [isSavingTimesheet, setIsSavingTimesheet] = useState(false);


    const fetchRequests = async (empId) => {
        try {
            if (!empId) return;
            const [otRes, coRes] = await Promise.all([
                fetch(`/api/v1/employee/payroll/overtime?employeeId=${empId}`),
                fetch(`/api/v1/employee/payroll/comp-off?employeeId=${empId}`)
            ]);
            if (otRes.ok && otRes.headers.get('content-type')?.includes('application/json')) {
                const otData = await otRes.json();
                if (otData.success) setOtRequests(otData.requests);
            }
            if (coRes.ok && coRes.headers.get('content-type')?.includes('application/json')) {
                const coData = await coRes.json();
                if (coData.success) {
                    setCoRequests(coData.requests);
                    setCoBalance(coData.balance);
                }
            }
        } catch (error) {
            console.error("Error fetching requests:", error);
        }
    };

    const fetchTeamAvailability = async () => {
        try {
            setLoadingTeamLeaves(true);
            const res = await fetch('/api/v1/employee/leaves/team-availability');
            if (res.ok && res.headers.get('content-type')?.includes('application/json')) {
                const data = await res.json();
                if (data.success) setTeamLeaves(data.data || []);
            }
        } catch (error) {
            console.error("Error fetching team leaves:", error);
        } finally {
            setLoadingTeamLeaves(false);
        }
    };

    const fetchProjects = async () => {
        try {
            const res = await fetch('/api/v1/employee/tasks/projects?status=Active');
            if (res.ok) {
                const data = await res.json();
                if (data.success) setProjects(data.projects);
            }
        } catch (error) {
            console.error("Error fetching projects", error);
        }
    };

    const fetchTimesheet = async (empId, weekDate) => {
        try {
            const res = await fetch(`/api/v1/employee/tasks/timesheets?employeeId=${empId}&weekStartDate=${weekDate.toISOString()}`);
            if (res.ok) {
                const data = await res.json();
                if (data.success) {
                    setTimesheet(data.timesheet);
                    setTimesheetEntries(data.entries || []);
                    return;
                }
            }
            setTimesheet(null);
            setTimesheetEntries([]);
        } catch (error) {
            console.error("Error fetching timesheet", error);
        }
    };

    useEffect(() => {
        if (user?.id) {
            fetchDashboardData(user.id);
            fetchUserRoster(user.id);
            fetchRequests(user.id);
            fetchProjects();
            fetchTimesheet(user.id, weekStartDate);
            fetchTeamAvailability();
        } else if (!sessionLoading && !user) {
            setLoading(false);
        }
    }, [user, sessionLoading, weekStartDate]);



    const changeWeek = (offset) => {
        const newDate = new Date(weekStartDate);
        newDate.setDate(newDate.getDate() + (offset * 7));
        setWeekStartDate(newDate);
    };

    const handleSaveTimesheet = async (isSubmit = false) => {
        setIsSavingTimesheet(true);
        try {
            const res = await fetch('/api/v1/employee/tasks/timesheets', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    employee: user.id,
                    weekStartDate: weekStartDate.toISOString(),
                    entries: timesheetEntries,
                    status: isSubmit ? 'Submitted' : 'Draft'
                })
            });
            if (res.ok) {
                const data = await res.json();
                if (data.success) {
                    toast.success(`Timesheet ${isSubmit ? 'Submitted' : 'Saved'}`);
                    fetchTimesheet(user.id, weekStartDate);
                } else {
                    toast.error(data.error || "Failed to save");
                }
            }
        } catch (error) {
            toast.error("Failed to save timesheet");
        } finally {
            setIsSavingTimesheet(false);
        }
    };

    const addTimesheetEntry = () => {
        setTimesheetEntries([...timesheetEntries, {
            project: '',
            task: '',
            date: new Date(weekStartDate).toISOString(),
            hours: 0,
            description: ''
        }]);
    };

    const updateTimesheetEntry = (index, field, value) => {
        const newEntries = [...timesheetEntries];
        newEntries[index][field] = value;
        setTimesheetEntries(newEntries);
    };

    const removeTimesheetEntry = (index) => {
        setTimesheetEntries(timesheetEntries.filter((_, i) => i !== index));
    };

    const fetchUserRoster = async (empId) => {
        try {
            const start = new Date().toISOString();
            const end = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
            const res = await fetch(`/api/v1/employee/payroll/roster?employeeId=${empId}&startDate=${start}&endDate=${end}`);
            if (res.ok) {
                const data = await res.json();
                if (data.success) setUserRoster(data.roster || []);
            }
        } catch (error) {
            console.error("Failed to fetch roster", error);
        }
    };

    const handleDownload = (filename, content) => {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        toast.success(`Downloaded ${filename}`);
    };

    const handleDownloadPDF = async (slip) => {
        try {
            const jsPDF = (await import("jspdf/dist/jspdf.es.min.js")).default;
            const autoTable = (await import("jspdf-autotable")).default;
            const doc = new jsPDF();

            // Header
            doc.setFontSize(18);
            doc.setTextColor(79, 70, 229);
            doc.text("PAYROLL SYSTEM", 105, 15, { align: "center" }); // Generic name if company unknown

            doc.setFontSize(14);
            doc.setTextColor(15, 23, 42);
            doc.text(`Payslip for ${getMonthName(slip.month)} ${slip.year}`, 105, 25, { align: "center" });

            // Employee Info
            autoTable(doc, {
                startY: 35,
                head: [['Employee Details', '']],
                body: [
                    ['Name', `${employee?.personalDetails?.firstName || ''} ${employee?.personalDetails?.lastName || ''}`],
                    ['Employee ID', employee?.employeeId || 'N/A'],
                    ['Designation', employee?.jobDetails?.designation || 'N/A'],
                    ['PAN', employee?.salaryDetails?.panNumber || 'N/A']
                ],
                theme: 'grid',
                headStyles: { fillColor: [79, 70, 229] },
                columnStyles: { 0: { fontStyle: 'bold', cellWidth: 50 } }
            });

            // Salary Breakdown
            autoTable(doc, {
                startY: doc.lastAutoTable.finalY + 10,
                head: [['Earnings', 'Amount', 'Deductions', 'Amount']],
                body: [
                    ['Basic Salary', `Rs. ${slip.basicSalary?.toLocaleString()}`, 'Tax Deducted (TDS)', `Rs. ${slip.taxDeduction?.toLocaleString() || 0}`],
                    ['Allowances', `Rs. ${((slip.grossSalary || 0) - (slip.basicSalary || 0))?.toLocaleString()}`, '', ''],
                    ['Gross Earnings', `Rs. ${slip.grossSalary?.toLocaleString()}`, 'Total Deductions', `Rs. ${slip.taxDeduction?.toLocaleString() || 0}`]
                ],
                theme: 'striped',
                headStyles: { fillColor: [79, 70, 229] }
            });

            // Net Pay
            const finalY = doc.lastAutoTable.finalY + 15;
            doc.setFillColor(240, 253, 244); // Light green bg
            doc.rect(14, finalY, 182, 15, 'F');
            doc.setFontSize(12);
            doc.setTextColor(21, 128, 61); // Green 700
            doc.setFont("helvetica", "bold");
            doc.text(`Net Payable: Rs. ${slip.netSalary?.toLocaleString()}`, 105, finalY + 10, { align: "center" });

            // Footer
            doc.setFontSize(8);
            doc.setTextColor(150);
            doc.setFont("helvetica", "normal");
            doc.text("** This is a computer generated payslip and does not require a signature **", 105, finalY + 30, { align: "center" });

            doc.save(`Payslip_${slip.month}_${slip.year}.pdf`);
            toast.success("Payslip PDF Downloaded");
        } catch (error) {
            console.error("PDF Generation Error:", error);
            toast.error("Failed to generate PDF");
        }
    };

    const fetchDashboardData = async (employeeId) => {
        try {
            setLoading(true);
            const [empRes, slipsRes, invRes] = await Promise.all([
                fetch(`/api/v1/employee/payroll/employees/${employeeId}`),
                fetch(`/api/v1/employee/payroll/payslip?employeeId=${employeeId}`),
                fetch(`/api/v1/employee/payroll/investments?employeeId=${employeeId}&financialYear=2025-26`)
            ]);

            let empData = null;
            if (empRes.ok && empRes.headers.get('content-type')?.includes('application/json')) {
                empData = await empRes.json();
                setEmployee(empData);
            }
            if (slipsRes.ok && slipsRes.headers.get('content-type')?.includes('application/json')) {
                const slipsData = await slipsRes.json();
                setPayslips(slipsData.payslips || []);
            }
            if (invRes.ok && invRes.headers.get('content-type')?.includes('application/json')) {
                const invData = await invRes.json();
                setInvestments(invData);
            }
            
            // Fetch tasks to get count
            const taskRes = await fetch('/api/v1/employee/tasks');
            if (taskRes.ok) {
                const taskData = await taskRes.json();
                if (taskData.success) {
                    const tasks = taskData.data || [];
                    setTaskStats({
                        total: tasks.length,
                        pending: tasks.filter(t => t.status !== 'Completed').length
                    });
                }
            }

            // Fetch Payroll settings using organizationId from employee details or user session
            const orgId = user?.organizationId || empData?.jobDetails?.organizationId;
            if (orgId) {
                const settingsRes = await fetch(`/api/v1/employee/payroll/settings?orgId=${orgId}`);
                if (settingsRes.ok && settingsRes.headers.get('content-type')?.includes('application/json')) {
                    const settingsData = await settingsRes.json();
                    setPayrollConfig(settingsData);
                }
            }

            // Fetch Attendance data for the current month
            const today = new Date();
            const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).toISOString();
            const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999).toISOString();
            const attendanceRes = await fetch(`/api/v1/employee/payroll/attendance?employeeId=${employeeId}&startDate=${firstDay}&endDate=${lastDay}`);
            if (attendanceRes.ok && attendanceRes.headers.get('content-type')?.includes('application/json')) {
                const attData = await attendanceRes.json();
                if (attData.success) {
                    setAttendanceList(attData.attendance || []);
                }
            }
        } catch (error) {
            console.error("Failed to load dashboard data:", error);
            toast.error("Failed to load dashboard data");
        } finally {
            setLoading(false);
        }
    };

    const [form80C, setForm80C] = useState({ ppf: 0, elss: 0, lic: 0, others: 0 });
    const [form80D, setForm80D] = useState({ mediclaimSelf: 0 });
    const [hraData, setHraData] = useState({ annualRent: 0, landlordPan: '' });

    useEffect(() => {
        if (investments?.sections) {
            setForm80C(investments.sections.section80C || { ppf: 0, elss: 0, lic: 0, others: 0 });
            setForm80D(investments.sections.section80D || { mediclaimSelf: 0 });
            setHraData(investments.sections.hra || { annualRent: 0, landlordPan: '' });
        }
    }, [investments]);

    if (loading || sessionLoading) {
        return (
            <div className="flex h-[80vh] items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    const latestPayslip = payslips[0] || null;

    // Calculate Dynamic YTD metrics based on selectedFY
    const activeYearPayslips = payslips.filter(slip => {
        const fyStart = slip.month >= 4 ? slip.year : slip.year - 1;
        const fyString = `${fyStart}-${(fyStart + 1).toString().slice(-2)}`;
        return fyString === selectedFY;
    });
    const totalYTDEarnings = activeYearPayslips.reduce((acc, p) => acc + (p.netSalary || 0), 0);
    const annualCTC = (employee?.payslipStructure?.totalEarnings || employee?.payslipStructure?.basicSalary || 0) * 12;
    const progressPercent = annualCTC > 0 ? Math.min(Math.round((totalYTDEarnings / annualCTC) * 100), 100) : 0;

    // Calculate dynamic Upcoming Payday and Countdown
    const nextPayday = (() => {
        const payDaySetting = payrollConfig?.paymentDay || 1;
        const today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();

        const getLastDay = (y, m) => new Date(y, m + 1, 0).getDate();

        let currentMonthPayday = Math.min(payDaySetting, getLastDay(year, month));
        let paydayDate = new Date(year, month, currentMonthPayday);
        paydayDate.setHours(0, 0, 0, 0);

        let todayZero = new Date(today);
        todayZero.setHours(0, 0, 0, 0);

        if (todayZero >= paydayDate) {
            month += 1;
            if (month > 11) {
                month = 0;
                year += 1;
            }
            let nextMonthPayday = Math.min(payDaySetting, getLastDay(year, month));
            paydayDate = new Date(year, month, nextMonthPayday);
        }
        return paydayDate;
    })();

    const daysRemaining = (() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const diffTime = nextPayday.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return Math.max(0, diffDays);
    })();

    // Calculate month attendance/roster stats
    const presentDays = attendanceList.filter(a => a.status === 'Present').length;
    const absentDays = attendanceList.filter(a => a.status === 'Absent').length;
    const leaveDays = attendanceList.filter(a => a.status === 'Leave' || a.status === 'Half-day').length;
    const totalLoggedDays = attendanceList.filter(a => ['Present', 'Absent', 'Leave', 'Half-day'].includes(a.status)).length;
    const presentRatio = totalLoggedDays > 0 ? Math.round((presentDays / totalLoggedDays) * 100) : 0;

    // Construct dynamic Recent Payroll Events feed
    const dynamicEvents = (() => {
        const list = [];
        
        // 1. Payslips Events
        payslips.forEach(slip => {
            list.push({
                type: 'payslip',
                title: `${getMonthName(slip.month)} ${slip.year} Payslip Generated`,
                date: new Date(slip.paymentDate || slip.createdAt),
                data: slip,
                action: () => handleDownloadPDF(slip),
                badge: slip.status || 'Published'
            });
        });

        // 2. Investment Approvals
        if (investments && (investments.updatedAt || investments.createdAt)) {
            list.push({
                type: 'investment',
                title: `Tax Investment Declaration ${investments.status || 'Submitted'}`,
                date: new Date(investments.updatedAt || investments.createdAt),
                data: investments,
                badge: investments.status || 'Pending'
            });
        }

        return list.sort((a, b) => b.date - a.date).slice(0, 5);
    })();

    const handleSaveDeclaration = async (submit = false) => {
        try {
            const res = await fetch('/api/v1/employee/payroll/investments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    employeeId: user?.id,
                    financialYear: "2025-26",
                    sections: {
                        section80C: form80C,
                        section80D: form80D,
                        hra: hraData
                    },
                    submit
                })
            });

            if (!res.ok) throw new Error("Failed to save");
            toast.success(submit ? "Declaration submitted for review!" : "Draft saved successfully");
            fetchDashboardData(user?.id);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const getMonthName = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('en-US', { month: 'long' });
    };

    const safeFormatDate = (year, month) => {
        if (!year || !month) return 'N/A';
        try {
            const date = new Date(year, month - 1, 1);
            return format(date, 'MMM yyyy');
        } catch (e) {
            return 'N/A';
        }
    };

    const StatusBadge = ({ status, label }) => {
        const styles = {
            'Pending': 'bg-amber-50 text-amber-700 border-amber-200',
            'Approved': 'bg-emerald-50 text-emerald-700 border-emerald-200',
            'Rejected': 'bg-rose-50 text-rose-700 border-rose-200',
            'Earn': 'bg-emerald-50 text-emerald-700 border-emerald-200',
            'Use': 'bg-indigo-50 text-indigo-700 border-indigo-200'
        };
        return (
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${styles[status]}`}>
                {label || status}
            </span>
        );
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Welcome Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                            {t("welcomeBack")}, {employee?.personalDetails?.firstName}! 👋
                        </h1>
                        <p className="text-slate-500 mt-2 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            {t("payrollTaxCompliant") || "Your payroll and tax profile is compliant for FY 2025-26"}
                        </p>
                    </div>
                </div>

                {/* Main Navigation Tabs */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <nav className="flex px-2 overflow-x-auto no-scrollbar">
                        <TabButton
                            active={activeTab === "overview"}
                            label={t("overview")}
                            icon={LayoutDashboard}
                            onClick={() => setActiveTab("overview")}
                        />
                        <TabButton
                            active={activeTab === "payslips"}
                            label={t("payslipsGallery")}
                            icon={FileText}
                            onClick={() => setActiveTab("payslips")}
                        />
                        <TabButton
                            active={activeTab === "tax"}
                            label={t("taxAndInvestments")}
                            icon={ShieldCheck}
                            onClick={() => setActiveTab("tax")}
                        />
                        <TabButton
                            active={activeTab === "projection"}
                            label={t("salaryProjection")}
                            icon={Calculator}
                            onClick={() => setActiveTab("projection")}
                        />
                        <TabButton
                            active={activeTab === "leaves"}
                            label={t("myLeaves")}
                            icon={Calendar}
                            onClick={() => setActiveTab("leaves")}
                        />
                        <TabButton
                            active={activeTab === "talent"}
                            label={t("talentMatrix")}
                            icon={Trophy}
                            onClick={() => setActiveTab("talent")}
                        />
                        <TabButton
                            active={activeTab === 'shifts'}
                            onClick={() => setActiveTab('shifts')}
                            icon={Clock}
                            label={t("myShifts")}
                        />
                        <TabButton
                            active={activeTab === 'ot-coff'}
                            onClick={() => setActiveTab('ot-coff')}
                            icon={History}
                            label={t("otAndCOff")}
                        />
                        <TabButton
                            active={activeTab === 'tasks'}
                            onClick={() => setActiveTab('tasks')}
                            icon={CheckSquare}
                            label={t("myTasks") || "My Tasks"}
                        />
                    </nav>
                </div>

                {activeTab === "overview" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left Column: Key Stats */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Summary Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Card className="p-6 bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-none shadow-indigo-100">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <Wallet className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-1 rounded">{t("latestPay")}</span>
                                    </div>

                                    <h3 className="text-3xl font-black mb-1">₹{latestPayslip?.netSalary?.toLocaleString() || '0'}</h3>
                                    <p className="text-indigo-100 text-sm">{t("disbursedFor")} {latestPayslip ? safeFormatDate(latestPayslip.year, latestPayslip.month) : 'N/A'}</p>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-xs">
                                        <span className="opacity-80">{t("gross")}: ₹{latestPayslip?.grossSalary?.toLocaleString() || '0'}</span>
                                        <button type="button" onClick={() => setActiveTab("payslips")} className="flex items-center gap-1 hover:underline">{t("viewBreakdown")} <ChevronRight className="w-3 h-3" /></button>
                                    </div>
                                </Card>

                                <Card className="p-6">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2 bg-emerald-50 rounded-lg">
                                            <TrendingUp className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{t("totalYTDEarnings")}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-1">₹{totalYTDEarnings.toLocaleString()}</h3>
                                    <p className="text-slate-500 text-sm">{t("forFinancialYear")} {selectedFY}</p>
                                    <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2">
                                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-400">{progressPercent}%</span>
                                    </div>
                                </Card>

                                <Card className="p-6 cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setActiveTab('tasks')}>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-2 bg-rose-50 rounded-lg">
                                            <CheckSquare className="w-5 h-5 text-rose-600" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{t("activeTasks")}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-1">{taskStats.pending}</h3>
                                    <p className="text-slate-500 text-sm">{t("pendingTasks") || "Pending Tasks"}</p>
                                    <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center text-xs">
                                        <span className="opacity-80">{t("totalTasks") || "Total"}: {taskStats.total}</span>
                                        <span className="flex items-center gap-1 text-indigo-600 font-bold">{t("viewAll")} <ChevronRight className="w-3 h-3" /></span>
                                    </div>
                                </Card>
                            </div>

                            {/* Recent Activity / Announcements */}
                            <Card className="p-0 overflow-hidden">
                                <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                                    <h3 className="font-bold text-slate-900">{t("recentPayrollEvents")}</h3>
                                    <button onClick={() => setShowPolicyModal(true)} className="text-xs text-indigo-600 font-semibold hover:underline">{t("checkPolicy")}</button>
                                </div>
                                <div className="divide-y divide-slate-100">
                                    {dynamicEvents.length === 0 ? (
                                        <div className="p-8 text-center text-slate-400">
                                            <History className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                                            <p className="text-xs font-semibold">{t("noRecentEvents") || "No recent payroll events"}</p>
                                        </div>
                                    ) : (
                                        dynamicEvents.map((evt, idx) => (
                                            <div key={idx} className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                                                    evt.type === 'payslip' 
                                                        ? 'bg-blue-50 text-blue-600' 
                                                        : 'bg-emerald-50 text-emerald-600'
                                                }`}>
                                                    {evt.type === 'payslip' ? <FileText className="w-5 h-5" /> : <Percent className="w-5 h-5" />}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold text-slate-900 truncate">{evt.title}</p>
                                                    <p className="text-[10px] text-slate-500">{format(evt.date, 'MMMM dd, yyyy')}</p>
                                                </div>
                                                {evt.type === 'payslip' ? (
                                                    <button onClick={evt.action} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                                        <Download className="w-4 h-4" />
                                                    </button>
                                                ) : (
                                                    <div className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                                                        evt.badge === 'Approved' 
                                                            ? 'bg-emerald-100 text-emerald-700' 
                                                            : evt.badge === 'Rejected' 
                                                                ? 'bg-rose-100 text-rose-700' 
                                                                : 'bg-amber-100 text-amber-700'
                                                    }`}>
                                                        {evt.badge}
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </Card>
                        </div>

                        {/* Right Column: Mini Widgets */}
                        <div className="space-y-8">
                            {/* Upcoming Payday Countdown Card */}
                            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100/50 shadow-sm relative overflow-hidden">
                                <div className="absolute right-0 bottom-0 translate-x-2 translate-y-2 opacity-10">
                                    <Wallet className="w-24 h-24 text-indigo-600" />
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping"></span>
                                        {t("nextPaydayCountdown") || "Next Payday"}
                                    </h4>
                                    <CalendarDays className="w-4 h-4 text-indigo-600" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-black text-indigo-900 tracking-tight">
                                            {daysRemaining}
                                        </span>
                                        <span className="text-sm font-semibold text-indigo-600">
                                            {daysRemaining === 1 ? t("dayRemaining") || "day left" : t("daysRemaining") || "days left"}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-medium leading-none">
                                        {t("expectedOn") || "Expected on"}: <span className="font-bold text-slate-700">{format(nextPayday, 'MMM dd, yyyy')}</span>
                                    </p>
                                    <div className="w-full bg-slate-200/60 h-1.5 rounded-full overflow-hidden">
                                        <div 
                                            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full transition-all duration-500" 
                                            style={{ width: `${Math.min(100, Math.max(0, ((30 - daysRemaining) / 30) * 100))}%` }}
                                        />
                                    </div>
                                </div>
                            </Card>

                            {/* Tax Tip Widget */}
                            <Card className="p-6 bg-blue-50/50">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertTriangle className="w-5 h-5 text-blue-600" />
                                    <h4 className="font-bold text-slate-900 text-sm">{t("taxSeasonReminder")}</h4>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                    {t("taxSeasonReminderSub")}
                                </p>
                                <button
                                    onClick={() => setActiveTab("tax")}
                                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
                                >
                                    {t("uploadProofs")} <ArrowUpRight className="w-3 h-3" />
                                </button>
                            </Card>

                            {/* My Shifts Widget */}
                            <Card className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-bold text-slate-900 text-sm">
                                        {userRoster.length > 0 ? t("myUpcomingShifts") : t("standardSchedule")}
                                    </h4>
                                    <Clock className="w-4 h-4 text-indigo-600" />
                                </div>
                                <div className="space-y-3">
                                    {userRoster.length > 0 ? (
                                        userRoster.slice(0, 3).map((r, i) => (
                                            <div key={i} className="flex items-center gap-3 p-2 rounded-xl border border-slate-50 hover:bg-slate-50 transition-colors">
                                                <div className="w-8 h-8 rounded-lg flex flex-col items-center justify-center bg-slate-100 text-[10px] font-bold">
                                                    <span className="text-slate-400 leading-none">{format(new Date(r.date), 'MMM')}</span>
                                                    <span className="text-slate-700 leading-none mt-0.5">{format(new Date(r.date), 'dd')}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-bold text-slate-900">{r.shiftId?.name}</p>
                                                    <p className="text-[10px] text-slate-500 font-medium">{r.shiftId?.startTime} - {r.shiftId?.endTime}</p>
                                                </div>
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: r.shiftId?.color || '#4f46e5' }} />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                                    <Calendar className="w-5 h-5 text-indigo-600" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-900">{employee?.jobDetails?.defaultShift?.name || t("generalShift")}</p>
                                                    <p className="text-[10px] text-slate-500 font-medium">
                                                        {employee?.jobDetails?.defaultShift?.startTime || "09:00"} - {employee?.jobDetails?.defaultShift?.endTime || "18:00"}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-indigo-600 font-medium mt-3 bg-white/50 p-1.5 rounded-lg text-center">
                                                {employee?.jobDetails?.defaultShift ? t("defaultShiftAssigned") : t("standardWorkingHours")}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Shift Stats Breakdown */}
                                <div className="mt-5 pt-5 border-t border-slate-100 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                                            {format(new Date(), 'MMMM')} Attendance
                                        </h5>
                                        <span className="text-[10px] font-bold text-slate-400">
                                            {totalLoggedDays} {totalLoggedDays === 1 ? 'Day' : 'Days'} Logged
                                        </span>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100/50 text-center">
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tight">Present</p>
                                            <p className="text-lg font-black text-emerald-700 mt-0.5">{presentDays}</p>
                                        </div>
                                        <div className="p-2.5 bg-rose-50/60 rounded-xl border border-rose-100/50 text-center">
                                            <p className="text-[10px] font-bold text-rose-600 uppercase tracking-tight">Absent</p>
                                            <p className="text-lg font-black text-rose-700 mt-0.5">{absentDays}</p>
                                        </div>
                                        <div className="p-2.5 bg-amber-50/60 rounded-xl border border-amber-100/50 text-center">
                                            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-tight">Leaves</p>
                                            <p className="text-lg font-black text-amber-700 mt-0.5">{leaveDays}</p>
                                        </div>
                                    </div>

                                    {/* Attendance Present Ratio Progress Bar */}
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                                            <span>Present Ratio</span>
                                            <span className="text-indigo-600">{presentRatio}%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative">
                                            <div 
                                                className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full rounded-full transition-all duration-700 ease-out" 
                                                style={{ width: `${presentRatio}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[10px] text-slate-400 mt-4 text-center font-medium italic">{t("contactHRChangeRequest")}</p>
                            </Card>


                        </div>
                    </div>
                )}

                {activeTab === 'tasks' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <MyTasks />
                    </div>
                )}

                {activeTab === "payslips" && (
                    <div className="space-y-8">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-slate-900">{t("historicPayslips")}</h2>
                            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-1.5 shadow-sm">
                                <select
                                    value={selectedFY}
                                    onChange={(e) => setSelectedFY(e.target.value)}
                                    className="text-xs bg-transparent border-none focus:ring-0 pr-8"
                                >
                                    <option value="2025-26">2025-26</option>
                                    <option value="2024-25">2024-25</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {payslips.filter(slip => {
                                const fyStart = slip.month >= 4 ? slip.year : slip.year - 1;
                                const fyString = `${fyStart}-${(fyStart + 1).toString().slice(-2)}`;
                                return fyString === selectedFY;
                            }).map((slip, idx) => (
                                <Card key={slip._id} className="p-0 overflow-hidden group">
                                    <div className={`h-2 ${idx === 0 ? 'bg-indigo-600' : 'bg-slate-200'} group-hover:h-3 transition-all duration-300`}></div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="font-bold text-slate-900">{getMonthName(slip.month)} {slip.year}</h4>
                                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mt-1">{slip.payslipId}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-black text-slate-900">₹{slip.netSalary?.toLocaleString()}</p>
                                                <p className="text-[10px] text-emerald-600 font-bold">DISBURSED</p>
                                            </div>
                                        </div>
                                        <div className="py-4 border-y border-slate-50 flex justify-between items-center text-xs">
                                            <span className="text-slate-500">Basic: ₹{slip.basicSalary?.toLocaleString()}</span>
                                            <span className="text-slate-500">Tax Paid: ₹{slip.taxDeduction || 0}</span>
                                        </div>
                                        <div className="mt-5 flex gap-2">
                                            <button
                                                onClick={() => setPreviewSlip(slip)}
                                                className="flex-1 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Eye className="w-3 h-3" /> View
                                            </button>
                                            <button
                                                onClick={() => handleDownloadPDF(slip)}
                                                className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                                            >
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                            {payslips.filter(slip => {
                                const fyStart = slip.month >= 4 ? slip.year : slip.year - 1;
                                const fyString = `${fyStart}-${(fyStart + 1).toString().slice(-2)}`;
                                return fyString === selectedFY;
                            }).length === 0 && (
                                    <div className="col-span-full p-12 text-center text-slate-400">
                                        <p>No payslips found for {selectedFY}</p>
                                    </div>
                                )}
                        </div>
                    </div>
                )}

                {activeTab === "tax" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900">{t("declarationForFY")} 2025-26</h2>
                                    <p className="text-slate-500 text-sm">{t("submitTaxInvestmentsSub")}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Form Left */}
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">Section 80C <span className="text-[10px] font-medium text-slate-400 font-mono">(Max ₹1.5L)</span></h4>
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold text-slate-500 uppercase">Provider Fund (PPF)</label>
                                                <input
                                                    type="number"
                                                    value={form80C.ppf || 0}
                                                    onChange={(e) => setForm80C({ ...form80C, ppf: parseInt(e.target.value) || 0 })}
                                                    placeholder="0"
                                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold text-slate-500 uppercase">ELSS Mutual Funds</label>
                                                <input
                                                    type="number"
                                                    value={form80C.elss || 0}
                                                    onChange={(e) => setForm80C({ ...form80C, elss: parseInt(e.target.value) || 0 })}
                                                    placeholder="0"
                                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold text-slate-500 uppercase">LIC/Life Insurance</label>
                                                <input
                                                    type="number"
                                                    value={form80C.lic || 0}
                                                    onChange={(e) => setForm80C({ ...form80C, lic: parseInt(e.target.value) || 0 })}
                                                    placeholder="0"
                                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">Section 80D <span className="text-[10px] font-medium text-slate-400 font-mono">(Health Ins.)</span></h4>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase">Mediclaim (Self/Family)</label>
                                            <input
                                                type="number"
                                                value={form80D.mediclaimSelf || 0}
                                                onChange={(e) => setForm80D({ ...form80D, mediclaimSelf: parseInt(e.target.value) || 0 })}
                                                placeholder="0"
                                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Form Right */}
                                <div className="space-y-8 border-l border-slate-100 md:pl-12">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">HRA Exemption <span className="text-[10px] font-medium text-slate-400 font-mono">(House Rent)</span></h4>
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold text-slate-500 uppercase">Annual House Rent Paid</label>
                                                <input
                                                    type="number"
                                                    value={hraData.annualRent || 0}
                                                    onChange={(e) => setHraData({ ...hraData, annualRent: parseInt(e.target.value) || 0 })}
                                                    placeholder="0"
                                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-indigo-600 focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold text-slate-500 uppercase">Landlord PAN</label>
                                                <input
                                                    type="text"
                                                    value={hraData.landlordPan || ''}
                                                    onChange={(e) => setHraData({ ...hraData, landlordPan: e.target.value })}
                                                    placeholder="ABCDE1234F"
                                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm uppercase focus:ring-2 focus:ring-indigo-500/20 outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h4 className="font-black text-slate-900 mb-4 text-center">Summary</h4>
                                        <div className="space-y-4">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-slate-500">Total Declared</span>
                                                <span className="font-bold text-slate-900">₹{((form80C.ppf || 0) + (form80C.elss || 0) + (form80C.lic || 0) + (form80C.others || 0) + (form80D.mediclaimSelf || 0) + (hraData.annualRent || 0)).toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-slate-500">Status</span>
                                                <span className={`font-bold ${investments?.status === 'Approved' ? 'text-emerald-600' : 'text-amber-600'}`}>{investments?.status || t("notStarted")}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleSaveDeclaration(false)}
                                                    className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all"
                                                >
                                                    {t("saveDraft")}
                                                </button>
                                                <button
                                                    onClick={() => handleSaveDeclaration(true)}
                                                    className="flex-[2] py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-black shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2"
                                                >
                                                    {t("submit")} <ArrowUpRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "projection" && (
                    <div className="max-w-4xl mx-auto py-12 text-center space-y-6">
                        <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 mx-auto">
                            <Calculator className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 italic">{t("comingSoon")}</h2>
                        <p className="text-slate-500 max-w-md mx-auto">
                            {t("whatIfCalculatorSub")}
                        </p>
                        <div className="flex justify-center gap-4 pt-6">
                            <div className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-bold text-slate-400 flex items-center gap-2">
                                <PlusCircle className="w-4 h-4" /> {t("newTaxRegime")}
                            </div>
                            <div className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-bold text-slate-400 flex items-center gap-2">
                                <PlusCircle className="w-4 h-4" /> {t("oldTaxRegime")}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "leaves" && (
                    <ESSLeaveManagement employeeId={user?.id} />
                )}

                {activeTab === "talent" && (
                    <ESSTalentDashboard employeeId={user?.id} />
                )}

                {activeTab === 'ot-coff' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard
                                title={t("coffBalance")}
                                value={`${employee?.compOffBalance || 0} Days`}
                                sub={t("availableToUse")}
                                icon={Calendar}
                                color="emerald"
                            />
                            <StatCard
                                title={t("pendingOT")}
                                value={otRequests.filter(r => r.status === 'Pending').length}
                                sub={t("requiresApproval")}
                                icon={Clock}
                                color="amber"
                            />
                            <StatCard
                                title={t("approvedOT")}
                                value={`${otRequests.filter(r => r.status === 'Approved').reduce((acc, r) => acc + r.hours, 0)} Hrs`}
                                sub={t("thisMonth")}
                                icon={TrendingUp}
                                color="indigo"
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* OT Requests Section */}
                            <Card className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">{t("overtimeRequests")}</h3>
                                        <p className="text-sm text-slate-500">{t("trackRequestExtraHours")}</p>
                                    </div>
                                    <button
                                        onClick={() => window.openOTModal()}
                                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all"
                                    >
                                        <FilePlus2 size={16} /> {t("requestOT")}
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {otRequests.length > 0 ? otRequests.map((r, i) => (
                                        <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                                                    <Clock className="w-5 h-5 text-indigo-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900">{format(new Date(r.date), 'MMM dd, yyyy')}</p>
                                                    <p className="text-[10px] text-slate-500 font-medium">{r.hours} Hours • {r.reason}</p>
                                                </div>
                                            </div>
                                            <StatusBadge status={r.status === 'Pending' ? 'Half Day' : r.status === 'Approved' ? 'Present' : 'Absent'} label={r.status} />
                                        </div>
                                    )) : (
                                        <div className="text-center py-12 text-slate-400">
                                            <History className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                            <p className="text-sm">{t("noOTFound")}</p>
                                        </div>
                                    )}
                                </div>
                            </Card>

                            {/* C-Off Requests Section */}
                            <Card className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">{t("compensatoryOffs")}</h3>
                                        <p className="text-sm text-slate-500">{t("earnAndUseCOff")}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => window.openCOModal('Earn')}
                                            className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-all"
                                        >
                                            {t("earn")}
                                        </button>
                                        <button
                                            onClick={() => window.openCOModal('Use')}
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all"
                                        >
                                            {t("use")}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {coRequests.length > 0 ? coRequests.map((r, i) => (
                                        <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${r.type === 'Earn' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>
                                                    <Calendar className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900">{format(new Date(r.date), 'MMM dd, yyyy')}</p>
                                                    <p className="text-[10px] text-slate-500 font-medium">
                                                        <span className={`font-bold ${r.type === 'Earn' ? 'text-emerald-600' : 'text-indigo-600'}`}>[{r.type}]</span> {r.days} Day • {r.reason}
                                                    </p>
                                                </div>
                                            </div>
                                            <StatusBadge status={r.status === 'Pending' ? 'Half Day' : r.status === 'Approved' ? 'Present' : 'Absent'} label={r.status} />
                                        </div>
                                    )) : (
                                        <div className="text-center py-12 text-slate-400">
                                            <Calendar className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                            <p className="text-sm">{t("noCOffFound")}</p>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </div>
                    </div>
                )}

                {activeTab === 'shifts' && (
                    <div className="space-y-6">
                        <Card className="p-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-200">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{t("shiftInformation")}</h3>
                                    <p className="text-slate-500">{t("assignedWorkingHoursSub")}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t("defaultShift")}</h4>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                                                <Building className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-slate-900">{employee?.jobDetails?.defaultShift?.name || t("generalShift")}</p>
                                                <p className="text-sm font-medium text-slate-500">
                                                    {employee?.jobDetails?.defaultShift?.startTime || "09:00 AM"} - {employee?.jobDetails?.defaultShift?.endTime || "06:00 PM"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                                        <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">{t("shiftDetails")}</h4>
                                        <div className="space-y-4">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">{t("weeklyOffs")}</span>
                                                <span className="font-bold text-slate-900">Saturday, Sunday</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">{t("workingDays")}</span>
                                                <span className="font-bold text-slate-900">9 Hours / Day</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">{t("gracePeriod")}</span>
                                                <span className="font-bold text-slate-900">15 Minutes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t("upcomingRoster")}</h4>
                                        {userRoster.length > 0 ? (
                                            <div className="space-y-3">
                                                {userRoster.slice(0, 5).map((r, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-50 hover:bg-slate-50 transition-all">
                                                        <div className="w-10 h-10 rounded-lg flex flex-col items-center justify-center bg-indigo-50 text-[10px] font-bold">
                                                            <span className="text-indigo-400 leading-none">{format(new Date(r.date), 'MMM')}</span>
                                                            <span className="text-indigo-700 leading-none mt-0.5">{format(new Date(r.date), 'dd')}</span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-xs font-bold text-slate-900">{r.shiftId?.name}</p>
                                                            <p className="text-[10px] text-slate-500 font-medium">{r.shiftId?.startTime} - {r.shiftId?.endTime}</p>
                                                        </div>
                                                        <div className="px-2 py-1 bg-green-50 text-green-600 rounded text-[10px] font-bold">Confirmed</div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-8">
                                                <CalendarDays className="w-12 h-12 text-slate-200 mx-auto mb-3" />
                                                <p className="text-sm font-medium text-slate-400">{t("noRosterAssigned")}</p>
                                                <p className="text-[10px] text-slate-400 mt-1">{t("followingStandardSchedule")}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}
            </div>

            {/* Policy Modal */}
            {showPolicyModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden scale-in duration-300">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">{t("payrollPolicy")} 2025-26</h3>
                                <p className="text-xs text-slate-500">{t("effectiveFrom")} April 1st, 2025</p>
                            </div>
                            <button onClick={() => setShowPolicyModal(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                                <X className="w-5 h-5 text-slate-500" />
                            </button>
                        </div>
                        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
                            <p><strong className="text-slate-900">1. {t("paymentCycle")}:</strong> Salaries are processed on the last working day of every month. Pay slips are available for download by the 1st of the following month.</p>
                            <p><strong className="text-slate-900">2. {t("taxDeductionsTDS")}:</strong> TDS is deducted based on the investment declaration submitted by the employee. You can switch between Old and New Tax Regimes at the start of the financial year.</p>
                            <p><strong className="text-slate-900">3. {t("reimbursements")}:</strong> All expense claims must be submitted by the 20th of the month to be included in that month's payout. Late submissions will be processed in the subsequent cycle.</p>
                            <p><strong className="text-slate-900">4. {t("leavesAndLOP")}:</strong> Unpaid leaves (Loss of Pay) will be deducted from the gross salary on a pro-rata basis. Leave balances are updated daily.</p>
                            <p><strong className="text-slate-900">5. {t("variablePay")}:</strong> Performance bonuses and incentives are disbursed quarterly based on the company's performance appraisal policy.</p>
                        </div>
                        <div className="p-6 border-t border-slate-100 bg-slate-50 text-right">
                            <button
                                onClick={() => handleDownload('Payroll_Policy_2025.txt', 'Full Payroll Policy Content...')}
                                className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 transition-colors"
                            >
                                {t("downloadPolicy")}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Payslip Preview Modal */}
            {previewSlip && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden scale-in duration-300">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">{t("payslipPreview")}</h3>
                                <p className="text-xs text-slate-500">{getMonthName(previewSlip.month)} {previewSlip.year}</p>
                            </div>
                            <button onClick={() => setPreviewSlip(null)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                                <X className="w-5 h-5 text-slate-500" />
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="text-center p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                                <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1">{t("netPay")}</p>
                                <h2 className="text-3xl font-black text-indigo-900">₹{previewSlip.netSalary?.toLocaleString()}</h2>
                                <p className="text-[10px] text-slate-400 mt-2 font-mono">ID: {previewSlip.payslipId}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm p-3 bg-slate-50 rounded-lg">
                                    <span className="text-slate-600">{t("basicSalary")}</span>
                                    <span className="font-bold text-slate-900">₹{previewSlip.basicSalary?.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm p-3 bg-slate-50 rounded-lg">
                                    <span className="text-slate-600">{t("taxDeduction")}</span>
                                    <span className="font-bold text-rose-600">- ₹{previewSlip.taxDeduction?.toLocaleString() || 0}</span>
                                </div>
                                <div className="flex justify-between text-sm p-3 bg-slate-50 rounded-lg border-t-2 border-slate-200">
                                    <span className="font-bold text-slate-900">{t("grossEarnings")}</span>
                                    <span className="font-bold text-slate-900">₹{((previewSlip.basicSalary || 0)).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3">
                            <button
                                onClick={() => setPreviewSlip(null)}
                                className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-50 transition-colors"
                            >
                                {t("close")}
                            </button>
                            <button
                                onClick={() => handleDownloadPDF(previewSlip)}
                                className="flex-1 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Download className="w-4 h-4" /> {t("download")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Modals for OT and CO */}
            <OTRequestModal employeeId={user?.id} onSuccess={fetchRequests} />
            <CORequestModal employeeId={user?.id} onSuccess={fetchRequests} balance={employee?.compOffBalance || 0} />
        </div>
    );
}

export default function ESSDashboard() {
    return (
        <Suspense fallback={
            <div className="flex h-[80vh] items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        }>
            <ESSDashboardContent />
        </Suspense>
    );
}

function safeFormatDate(y, m) {
    if (!y || !m || isNaN(m)) return 'N/A';
    try {
        return format(new Date(y, m - 1, 1), 'MMMM yyyy');
    } catch (e) {
        return 'N/A';
    }
}

function getMonthName(m) {
    if (!m || isNaN(m)) return '';
    try {
        return format(new Date(2000, m - 1, 1), "MMMM");
    } catch {
        return '';
    }
}

const OTRequestModal = ({ employeeId, onSuccess }) => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ date: format(new Date(), 'yyyy-MM-dd'), hours: 1, reason: '' });

    useEffect(() => {
        window.openOTModal = () => setIsOpen(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/v1/admin/payroll/overtime', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ employee: employeeId, ...formData })
            });
            const data = await res.json();
            if (data.success) {
                toast.success("OT Request Submitted");
                setIsOpen(false);
                onSuccess(employeeId);
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error("Failed to submit request");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in duration-300">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-900">{t("requestOT")}</h3>
                    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Date</label>
                        <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Hours</label>
                        <input
                            type="number"
                            required
                            min="0.5"
                            step="0.5"
                            value={formData.hours}
                            onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Reason</label>
                        <textarea
                            required
                            value={formData.reason}
                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none h-24 resize-none"
                            placeholder={t("whyWorkLate")}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm hover:bg-indigo-700 transition-all disabled:opacity-50"
                    >
                        {loading ? t("submitting") : t("submitRequest")}
                    </button>
                </form>
            </div>
        </div>
    );
};

const CORequestModal = ({ employeeId, onSuccess, balance }) => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState('Earn'); // 'Earn' or 'Use'
    const [formData, setFormData] = useState({ date: format(new Date(), 'yyyy-MM-dd'), days: 1, reason: '' });

    useEffect(() => {
        window.openCOModal = (modalType) => {
            setType(modalType);
            setIsOpen(true);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (type === 'Use' && formData.days > balance) {
            toast.error("Insufficient C-Off balance");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('/api/v1/admin/payroll/comp-off', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ employee: employeeId, type, ...formData })
            });
            const data = await res.json();
            if (data.success) {
                toast.success(`C-Off ${type === 'Earn' ? 'Request' : 'Leave'} Submitted`);
                setIsOpen(false);
                onSuccess(employeeId);
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error("Failed to submit request");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in duration-300">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center text-slate-900">
                    <div>
                        <h3 className="text-lg font-bold">{type === 'Earn' ? t("earnCompOff") : t("useCompOff")}</h3>
                        <p className="text-xs text-slate-500">{type === 'Earn' ? t("workedHolidayWeekend") : `${t("currentBalance")}: ${balance} Days`}</p>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Date</label>
                        <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Days</label>
                        <input
                            type="number"
                            required
                            min="0.5"
                            max={type === 'Use' ? balance : 5}
                            step="0.5"
                            value={formData.days}
                            onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Reason</label>
                        <textarea
                            required
                            value={formData.reason}
                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none h-24 resize-none"
                            placeholder={type === 'Earn' ? t("mentionHolidayWorked") : t("reasonForLeave")}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 text-white font-bold rounded-xl text-sm transition-all disabled:opacity-50 ${type === 'Earn' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                    >
                        {loading ? t("submitting") : t("submitRequest")}
                    </button>
                </form>
            </div>
        </div>
    );
};

