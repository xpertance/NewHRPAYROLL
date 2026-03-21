"use client";

import { useState, useEffect, useMemo } from "react";
import {
    format,
    startOfMonth,
    endOfMonth,
    isSameMonth,
    subMonths,
    addMonths,
    isToday,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameDay,
    startOfYear,
    endOfYear,
    eachMonthOfInterval,
    isSameYear,
    isBefore,
    addDays,
    isWeekend
} from "date-fns";
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    AlertCircle,
    Briefcase,
    Sun,
    ChevronLeft,
    ChevronRight,
    BarChart3,
    List as ListIcon,
    PieChart,
    Timer,
    Flame,
    Zap,
    Target,
    LayoutDashboard,
    Search,
    Filter,
    ArrowUpRight,
    Play,
    Square,
    Palmtree,
    CalendarDays,
    Building,
    Moon,
    Coffee,
    MoreHorizontal,
    Download,
    Info
} from "lucide-react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { toast } from "react-hot-toast";
import { useSession } from "@/context/SessionContext";
import { useLanguage } from "@/context/LanguageContext";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
);

const TabButton = ({ active, label, icon: Icon, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border-b-2 ${active
            ? 'border-indigo-600 text-indigo-600 bg-indigo-50/30'
            : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
    >
        <Icon className={`w-4 h-4 ${active ? 'text-indigo-600' : 'text-slate-400'}`} />
        {label}
    </button>
);

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
        {children}
    </div>
);

export default function MyAttendancePage() {
    const { user } = useSession();
    const { t } = useLanguage();
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("overview");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [viewMode, setViewMode] = useState('monthly');
    const [isPunchedIn, setIsPunchedIn] = useState(false);
    const [elapsedTime, setElapsedTime] = useState("00:00:00");
    const [holidays, setHolidays] = useState([]);
    const [userShift, setUserShift] = useState(null);

    const fetchAttendance = async () => {
        try {
            if (!user?.id) return;
            setLoading(true);

            // Parallel fetch for better performance
            const [attRes, holRes, shiftRes] = await Promise.all([
                fetch(`/api/v1/admin/payroll/attendance?employeeId=${user.id}`),
                fetch(`/api/v1/admin/payroll/holidays`), // In real app, pass orgId
                fetch(`/api/v1/admin/payroll/shifts`) // For current shift
            ]);

            const [attData, holData, shiftData] = await Promise.all([
                attRes.json(),
                holRes.json(),
                shiftRes.json()
            ]);

            if (attData.success) {
                setAttendance(attData.attendance || []);
                const today = new Date();
                const record = (attData.attendance || []).find(r => isSameDay(new Date(r.date), today));
                if (record && record.checkIn && !record.checkOut) {
                    setIsPunchedIn(true);
                } else {
                    setIsPunchedIn(false);
                }
            }

            if (holData.success) {
                setHolidays(holData.holidays || []);
            }

            if (shiftData.success) {
                // Find default or assigned shift
                setUserShift(shiftData.shifts?.find(s => s.isDefault) || shiftData.shifts?.[0]);
            }
        } catch (err) {
            toast.error("Failed to load records");
        } finally {
            setLoading(false);
        }
    };

    const todayRecord = useMemo(() => {
        return attendance.find(record => isSameDay(new Date(record.date), new Date()));
    }, [attendance]);

    useEffect(() => {
        if (user?.id) {
            fetchAttendance();
        }
    }, [user?.id]);

    // Timer simulation for Punch Widget
    useEffect(() => {
        let interval;
        if (isPunchedIn && todayRecord?.checkIn) {
            const startTime = new Date(todayRecord.checkIn).getTime();
            interval = setInterval(() => {
                const diff = Date.now() - startTime;

                // Ensure diff is positive (handle clock skew)
                const clampedDiff = Math.max(0, diff);

                const h = Math.floor(clampedDiff / 3600000);
                const m = Math.floor((clampedDiff % 3600000) / 60000);
                const s = Math.floor((clampedDiff % 60000) / 1000);
                setElapsedTime(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
            }, 1000);
        } else {
            setElapsedTime("00:00:00");
        }
        return () => clearInterval(interval);
    }, [isPunchedIn, todayRecord?.checkIn]);

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error("Geolocation is not supported by your browser"));
            } else {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            coordinates: [position.coords.longitude, position.coords.latitude],
                            accuracy: position.coords.accuracy,
                        });
                    },
                    (error) => reject(error)
                );
            }
        });
    };

    const handlePunchIn = async () => {
        try {
            setLoading(true);
            const location = await getLocation();
            const res = await fetch("/api/v1/admin/payroll/attendance", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    employee: user.id,
                    date: new Date().toISOString(),
                    status: "Present",
                    checkIn: new Date().toISOString(),
                    location,
                    attendanceMethod: "Web",
                    deviceId: navigator.userAgent
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to punch in");

            if (data.attendance?.isGeofenceVerified === false) {
                toast.error(t("geofenceWarning"), { duration: 5000 });
            } else {
                toast.success(t("punchInSuccess"));
            }

            setIsPunchedIn(true);
            fetchAttendance();
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePunchOut = async () => {
        try {
            setLoading(true);
            const location = await getLocation();
            const res = await fetch("/api/v1/admin/payroll/attendance", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    employee: user.id,
                    date: new Date().toISOString(),
                    checkOut: new Date().toISOString(),
                    status: "Present",
                    location
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to punch out");

            toast.success(t("punchOutSuccess"));
            setIsPunchedIn(false);
            fetchAttendance();
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const stats = useMemo(() => {
        const _currentDate = new Date();
        const navDate = new Date(currentDate);

        const firstDay = viewMode === 'monthly' ? startOfMonth(navDate) : startOfYear(navDate);
        const lastDay = viewMode === 'monthly' ? endOfMonth(navDate) : endOfYear(navDate);

        let present = 0, halfDay = 0, leave = 0, totalHours = 0;

        const filtered = viewMode === 'monthly'
            ? attendance.filter(r => isSameMonth(new Date(r.date), navDate))
            : attendance.filter(r => isSameYear(new Date(r.date), navDate));

        filtered.forEach(r => {
            const status = r.status?.toLowerCase();
            if (status === 'present') present++;
            else if (status === 'absent') {
                // If the system DOES explicitly save absent.
                // It shouldn't count twice if we compute it, we'll just track it here.
            }
            else if (status === 'half-day' || status === 'half day') halfDay++;
            else if (status === 'leave') leave++;
            totalHours += (r.totalHours || 0);
        });

        const endDay = isBefore(_currentDate, lastDay) ? _currentDate : lastDay;

        let workingDaysPast = 0;

        for (let d = firstDay; isBefore(d, endDay) || isSameDay(d, endDay); d = addDays(d, 1)) {
            if (!isWeekend(d)) {
                workingDaysPast++;
            }
        }

        let holidayCount = 0;
        holidays.forEach(h => {
            const hDate = new Date(h.date);
            if ((viewMode === 'monthly' ? isSameMonth(hDate, navDate) : isSameYear(hDate, navDate))
                && !isWeekend(hDate) && (isBefore(hDate, endDay) || isSameDay(hDate, endDay))) {
                holidayCount++;
            }
        });

        workingDaysPast -= holidayCount;

        // Ensure absent doesn't go below 0 if they work on weekends/holidays
        let absent = Math.max(0, workingDaysPast - (present + halfDay + leave));

        // Add back explicit absents from the database records just in case
        absent += filtered.filter(r => r.status?.toLowerCase() === 'absent').length;

        return {
            present,
            absent,
            halfDay,
            leave,
            totalHours,
            streak: 12, // Mocked as before
            punctuality: 95, // Mocked as before
            currentMonthRecords: filtered
        };
    }, [attendance, currentDate, viewMode, holidays]);

    const calendarDays = useMemo(() => {
        const start = startOfWeek(startOfMonth(currentDate));
        const end = endOfWeek(endOfMonth(currentDate));
        return eachDayOfInterval({ start, end });
    }, [currentDate]);

    const getStatusStyle = (status) => {
        switch (status?.toLowerCase()) {
            case 'present': return 'bg-emerald-500 text-white';
            case 'absent': return 'bg-rose-500 text-white';
            case 'half-day': return 'bg-sky-500 text-white';
            case 'leave': return 'bg-amber-500 text-white';
            default: return 'bg-slate-100 text-slate-400';
        }
    };

    const getDayRecord = (day) => {
        return attendance.find(r => isSameDay(new Date(r.date), day));
    };

    const handlePunch = () => {
        if (isPunchedIn) {
            handlePunchOut();
        } else {
            handlePunchIn();
        }
    };

    if (loading) {
        return (
            <div className="flex h-[80vh] items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Hero Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-indigo-600 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <h1 className="text-4xl font-black tracking-tight">{t("attendanceHeroTitle")}</h1>
                                <p className="text-indigo-100 mt-4 max-w-md">{t("attendanceHeroSub")}</p>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-6">
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                                    <div className="p-2 bg-amber-400 rounded-lg shadow-lg">
                                        <Flame className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">{t("streak")}</p>
                                        <p className="text-xl font-black">{stats.streak} {t("days")}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                                    <div className="p-2 bg-emerald-400 rounded-lg shadow-lg">
                                        <Target className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">{t("avgPunctuality")}</p>
                                        <p className="text-xl font-black">{stats.punctuality}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* High-Fidelity Punch Widget */}
                    <Card className="p-8 border-none bg-white shadow-xl shadow-indigo-100/50 flex flex-col items-center justify-between text-center group">
                        <div className="w-full flex justify-between items-center mb-6">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full animate-pulse ${isPunchedIn ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                                {isPunchedIn ? t('systemActive') : t('systemIdle')}
                            </span>
                            <Timer className="w-4 h-4 text-slate-300" />
                        </div>

                        <div className="relative mb-8">
                            <div className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 ${isPunchedIn ? 'bg-indigo-400/30 scale-125' : 'bg-slate-200/0 scale-100'}`}></div>
                            <div className="relative text-5xl font-black text-slate-900 font-mono tracking-tighter">
                                {isPunchedIn ? elapsedTime : "00:00:00"}
                            </div>
                            <p className="text-xs text-slate-400 font-bold mt-2 uppercase tracking-wide">{t("workSessionDuration")}</p>
                        </div>

                        <button
                            onClick={handlePunch}
                            className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 transform active:scale-95 shadow-lg ${isPunchedIn
                                ? 'bg-white border-2 border-rose-500 text-rose-500 hover:bg-rose-50 shadow-rose-100'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'
                                }`}
                        >
                            {isPunchedIn ? <Square className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                            {isPunchedIn ? t("punchOut") : t("punchIn")}
                        </button>

                        <div className="w-full mt-6 pt-6 border-t border-slate-100 flex justify-around">
                            <div className="text-center">
                                <p className="text-[9px] font-bold text-slate-400 uppercase">{t("inTime")}</p>
                                <p className="text-xs font-bold text-slate-700">{todayRecord ? format(new Date(todayRecord.checkIn), 'h:mm a') : '--:--'}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[9px] font-bold text-slate-400 uppercase">{t("status")}</p>
                                <p className="text-xs font-bold text-indigo-600">{todayRecord ? t(todayRecord.status.toLowerCase()) : 'N/A'}</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Main Navigation Tabs */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <nav className="flex px-2 overflow-x-auto no-scrollbar">
                        <TabButton
                            active={activeTab === "overview"}
                            label={t("overview")}
                            icon={LayoutDashboard}
                            onClick={() => setActiveTab("overview")}
                        />
                        <TabButton
                            active={activeTab === "calendar"}
                            label={t("visualCalendar")}
                            icon={Calendar}
                            onClick={() => setActiveTab("calendar")}
                        />
                        <TabButton
                            active={activeTab === "insights"}
                            label={t("trendsAndAnalytics")}
                            icon={BarChart3}
                            onClick={() => setActiveTab("insights")}
                        />
                        <TabButton
                            active={activeTab === "history"}
                            label={t("attendanceLog")}
                            icon={ListIcon}
                            onClick={() => setActiveTab("history")}
                        />
                        <TabButton
                            active={activeTab === "holidays"}
                            label={t("holidayCalendar")}
                            icon={Palmtree}
                            onClick={() => setActiveTab("holidays")}
                        />
                        <TabButton
                            active={activeTab === "schedule"}
                            label={t("workSchedule")}
                            icon={CalendarDays}
                            onClick={() => setActiveTab("schedule")}
                        />
                    </nav>
                </div>

                {/* Tab Content: Overview */}
                {activeTab === "overview" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <StatCard title={t("presentDays")} value={stats.present} sub={t("currentMonth")} icon={CheckCircle2} color="indigo" />
                        <StatCard title={t("leaveBalance")} value={4} sub={t("daysAvailable")} icon={Briefcase} color="amber" />
                        <StatCard title={t("avgWorkHours")} value={`${(stats.totalHours / (stats.present || 1)).toFixed(1)}h`} sub={t("dailyAverage")} icon={Clock} color="sky" />
                        <StatCard title={t("monthlyGoal")} value="85%" sub={t("compliance")} icon={Zap} color="emerald" />
                    </div>
                )}

                {/* Tab Content: Calendar */}
                {activeTab === "calendar" && (
                    <Card className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900">{t("visualAttendanceLog")}</h2>
                                <p className="text-sm text-slate-500">{t("fy")} 2025-26 • {t(format(currentDate, 'MMMM').toLowerCase())}</p>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
                                <button onClick={() => setCurrentDate(subMonths(currentDate, 1))} className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all"><ChevronLeft className="w-5 h-5" /></button>
                                <span className="text-sm font-bold min-w-[120px] text-center">{t(format(currentDate, 'MMMM').toLowerCase())} {format(currentDate, 'yyyy')}</span>
                                <button onClick={() => setCurrentDate(addMonths(currentDate, 1))} className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all"><ChevronRight className="w-5 h-5" /></button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-4">
                            {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map(day => (
                                <div key={day} className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">{t(day)}</div>
                            ))}
                            {calendarDays.map((day, idx) => {
                                const record = getDayRecord(day);
                                const isCurrentMonth = isSameMonth(day, currentDate);
                                return (
                                    <div
                                        key={idx}
                                        className={`relative group aspect-square rounded-2xl p-2 transition-all flex flex-col items-center justify-center border ${isCurrentMonth ? 'bg-white border-slate-100 hover:border-indigo-300' : 'bg-slate-50/50 border-transparent opacity-30 pointer-events-none'
                                            }`}
                                    >
                                        <span className={`text-sm font-bold ${isToday(day) ? 'text-indigo-600' : 'text-slate-700'}`}>
                                            {format(day, 'd')}
                                        </span>
                                        {record && (
                                            <div className={`mt-2 w-2 h-2 rounded-full ${getStatusStyle(record.status)} shadow-lg shadow-indigo-100`}></div>
                                        )}
                                        {isToday(day) && (
                                            <div className="absolute -top-1 -right-1">
                                                <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                                            </div>
                                        )}

                                        {/* Hover Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 p-3 bg-slate-900 text-white rounded-xl text-[10px] invisible group-hover:visible z-30 shadow-xl line-clamp-2">
                                            {record ? (
                                                <>
                                                    <p className="font-black text-indigo-400">{t(record.status.toLowerCase())}</p>
                                                    <p>{t("time")}: {format(new Date(record.checkIn), 'h:mm a')}</p>
                                                    <p>{t("hours")}: {record.totalHours}h</p>
                                                </>
                                            ) : (
                                                <p className="opacity-60">{t("noRecordFound")}</p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-6 pt-8 border-t border-slate-100 justify-center">
                            <LegendItem color="bg-emerald-500" label={t("present")} />
                            <LegendItem color="bg-rose-500" label={t("absent")} />
                            <LegendItem color="bg-sky-500" label={t("halfDay")} />
                            <LegendItem color="bg-amber-500" label={t("leave")} />
                            <LegendItem color="bg-slate-100" label={t("weekendHoliday")} />
                        </div>
                    </Card>
                )}

                {/* Tab Content: Insights */}
                {activeTab === "insights" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-indigo-500" />
                                {t("workHoursTrend")}
                            </h3>
                            <div className="h-[300px]">
                                <Bar
                                    data={{
                                        labels: stats.currentMonthRecords.map(r => format(new Date(r.date), 'dd')),
                                        datasets: [{
                                            label: t('hoursWorked'),
                                            data: stats.currentMonthRecords.map(r => r.totalHours),
                                            backgroundColor: 'rgba(79, 70, 229, 0.4)',
                                            borderColor: 'rgb(79, 70, 229)',
                                            borderWidth: 2,
                                            borderRadius: 8,
                                            barThickness: 12
                                        }]
                                    }}
                                    options={{ maintainAspectRatio: false }}
                                />
                            </div>
                        </Card>
                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <PieChart className="w-5 h-5 text-amber-500" />
                                {t("distribution")}
                            </h3>
                            <div className="h-[300px] w-full relative flex items-center justify-center">
                                <Pie
                                    data={{
                                        labels: [t('present'), t('absent'), t('halfDay'), t('leave')],
                                        datasets: [{
                                            data: [stats.present, stats.absent, stats.halfDay, stats.leave],
                                            backgroundColor: [
                                                '#10b981', '#f43f5e', '#0ea5e9', '#f59e0b'
                                            ],
                                            borderWidth: 0,
                                            hoverOffset: 20
                                        }]
                                    }}
                                    options={{ maintainAspectRatio: false }}
                                />
                            </div>
                        </Card>
                    </div>
                )}

                {/* Tab Content: History */}
                {activeTab === "history" && (
                    <Card className="overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 border-none shadow-xl shadow-indigo-100/30">
                        <div className="p-6 bg-white border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input placeholder={t("searchLogs")} className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-2xl text-xs focus:ring-2 focus:ring-indigo-500/10" />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50">
                                <Filter className="w-3 h-3" /> {t("filterLogs")}
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50/50">
                                    <tr>
                                        <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("dateTimeDay")}</th>
                                        <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("timeLogs")}</th>
                                        <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("duration")}</th>
                                        <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("status")}</th>
                                        <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("action")}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {stats.currentMonthRecords.map((r, i) => (
                                        <tr key={i} className="group hover:bg-indigo-50/20 transition-all duration-300">
                                            <td className="p-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-3 bg-white border border-slate-100 rounded-2xl group-hover:bg-white shadow-sm transition-all">
                                                        <Calendar className="w-5 h-5 text-indigo-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">{t(format(new Date(r.date), 'MMMM').toLowerCase()).substring(0, 3)} {format(new Date(r.date), 'dd, yyyy')}</p>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t(format(new Date(r.date), 'EEEE').toLowerCase())}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6">
                                                <div className="flex flex-col gap-1">
                                                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                        {format(new Date(r.checkIn), 'h:mm a')}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                                        {format(new Date(r.checkOut || r.checkIn), 'h:mm a')}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-6">
                                                <div className="flex items-center gap-2">
                                                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold">{r.totalHours}h</span>
                                                </div>
                                            </td>
                                            <td className="p-6">
                                                <StatusBadge status={r.status} t={t} />
                                            </td>
                                            <td className="p-6">
                                                <button className="p-2 hover:bg-white rounded-lg transition-all text-slate-400 hover:text-indigo-600">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                )}

                {/* Tab Content: Holidays */}
                {activeTab === "holidays" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900">{t("holidayCalendar")} {format(new Date(), 'yyyy')}</h2>
                                <p className="text-sm text-slate-500 font-medium">{t("planFestive")}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {holidays.length > 0 ? holidays.map((holiday, i) => (
                                <Card key={i} className="p-6 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-sm text-center min-w-[60px]">
                                                <p className="text-[10px] font-black uppercase text-indigo-600 tracking-widest">{t(format(new Date(holiday.date), 'MMMM').toLowerCase()).substring(0, 3)}</p>
                                                <p className="text-2xl font-black text-slate-900">{format(new Date(holiday.date), 'dd')}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${holiday.type === 'Public' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                'bg-amber-50 text-amber-600 border-amber-100'
                                                }`}>
                                                {holiday.type}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-black text-slate-900 mb-2 truncate">{holiday.name}</h3>
                                        <p className="text-xs text-slate-500 font-medium line-clamp-2 mb-4">{holiday.description || t('enjoyWellDeservedBreak')}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                                                <Clock className="w-3 h-3" />
                                                {t(format(new Date(holiday.date), 'EEEE').toLowerCase())}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )) : (
                                <div className="col-span-full py-20 bg-white rounded-3xl border border-slate-100 border-dashed flex flex-col items-center justify-center text-center">
                                    <Palmtree className="w-16 h-16 text-slate-200 mb-4" />
                                    <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest">{t("noHolidaysListed")}</h3>
                                    <p className="text-sm text-slate-400">{t("allFestiveDisplayed")}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Tab Content: Work Schedule */}
                {activeTab === "schedule" && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="lg:col-span-2 space-y-8">
                            <Card className="p-8 bg-white overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-8">
                                    <div className="p-4 bg-indigo-50 rounded-2xl">
                                        <CalendarDays className="w-10 h-10 text-indigo-600" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-black text-slate-900 mb-2">{t("defaultWorkingShift")}</h2>
                                    <p className="text-sm text-slate-500 font-medium mb-8">{t("assignedTimingSub")}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                                                <Sun className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("shiftHours")}</p>
                                                <p className="text-lg font-black text-slate-900">{userShift?.startTime || '09:00'} - {userShift?.endTime || '18:00'}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                                                <Coffee className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("breakDuration")}</p>
                                                <p className="text-lg font-black text-slate-900">{userShift?.breakDuration || '60'} {t("minutes")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("workingDays")}</p>
                                        <div className="flex flex-wrap gap-3">
                                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
                                                const isWorking = userShift?.workingDays?.includes(day) ?? true;
                                                const isActualWorking = day !== 'Saturday' && day !== 'Sunday' || (userShift?.workingDays?.includes(day));
                                                return (
                                                    <div
                                                        key={day}
                                                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${isActualWorking
                                                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-100'
                                                            : 'bg-slate-50 text-slate-400 border-slate-100'
                                                            }`}
                                                    >
                                                        {t(day.toLowerCase()).substring(0, 3)}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card className="p-6 bg-slate-50 border-dashed border-slate-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-white rounded-lg border border-slate-200">
                                        <Building className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">{t("locationDetails")}</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">{t("officeBranch")}</p>
                                        <p className="text-xs font-bold text-slate-700">{t("corporateHQ")}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">{t("trackingMethod")}</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                            <p className="text-xs font-bold text-slate-700">{t("geofenceWebLogin")}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6">
                                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-2">
                                    <Info className="w-4 h-4 text-indigo-500" />
                                    {t("importantNotes")}
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{t("geofenceRadiusFlag")}</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{t("shiftChangeRequest")}</p>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function StatCard({ title, value, sub, icon: Icon, color }) {
    const colors = {
        indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        amber: 'bg-amber-50 text-amber-600 border-amber-100',
        sky: 'bg-sky-50 text-sky-600 border-sky-100',
        emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    };
    return (
        <Card className="p-6 hover:scale-105 active:scale-95 transition-all cursor-pointer">
            <div className={`p-3 rounded-2xl w-fit mb-4 ${colors[color]} border`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{value}</h3>
            <p className="text-sm font-bold text-slate-900 mt-1">{title}</p>
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">{sub}</p>
        </Card>
    );
}

const StatusBadge = ({ status, t }) => {
    const styles = {
        'Present': 'bg-emerald-50 text-emerald-700 border-emerald-200',
        'Absent': 'bg-rose-50 text-rose-700 border-rose-200',
        'Half Day': 'bg-sky-50 text-sky-700 border-sky-200',
        'Leave': 'bg-amber-50 text-amber-700 border-amber-200',
        'Holiday': 'bg-purple-50 text-purple-700 border-purple-200'
    };
    return (
        <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${styles[status]}`}>
            {t(status.toLowerCase().replace(" ", ""))}
        </span>
    );
};

const LegendItem = ({ color, label }) => (
    <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
);
