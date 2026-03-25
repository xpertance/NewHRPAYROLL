'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  CheckSquare, TrendingUp, Target, Zap, Activity, Calendar, FileText, ArrowUp, ArrowDown,
  ChevronRight, Plus, RefreshCw, Settings, PieChart, LineChart, Building2, Container, Timer,
  Boxes, CheckCircle2, AlertCircle, Star, Award, List, Users, Truck, Package, AlertTriangle,
  Clock, ShoppingCart, DollarSign, Globe, MapPin, Shield, Factory, Warehouse, BarChart3,
  UserCheck, ClipboardList, BarChart, Users2, Eye, Filter, Briefcase, Banknote
} from 'lucide-react';
import ResourceUtilization from '@/components/tasks/ResourceUtilization';
import { Badge } from '@/components/ui/badge';
import { useSession } from '@/context/SessionContext';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, loading: sessionLoading } = useSession();
  const { t } = useLanguage();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    totalTasks: 0,
    completedTasks: 0,
    totalEmployees: 0,
    pendingTimesheets: 0,
    averageProgress: 0,
    topProjects: [],
    topContributors: [],
    recentActivity: []
  });
  const router = useRouter();

  useEffect(() => {
    if (sessionLoading) return;

    try {
      if (user && user.role) {
        const userRole = user.role.toLowerCase();
        setRole(userRole);

        // Redirect specific roles to their dedicated dashboards
        if (userRole === 'attendance_only') {
          router.push('/attendance');
        } else if (userRole === 'supervisor') {
          // If a supervisor lands on the general dashboard, 
          // they might prefer their dedicated dashboard or the ESS portal
          // For now, we allow them to stay but ensure the state is set.
        }
      } else {
        setRole(null);
        router.push('/login');
      }
    } catch (err) {
      console.error('Failed to read user role from session', err);
      setRole(null);
    } finally {
      if (user?.role?.toLowerCase() === 'admin') {
        fetchStats();
      } else {
        setLoading(false);
      }
    }
  }, [user, sessionLoading]);

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/v1/admin/dashboard/stats');
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (err) {
      console.error('Failed to fetch dashboard stats', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-slate-700 font-semibold">{t("loadingDashboard")}</div>
      </div>
    );
  }

  // Employee Dashboard
  if (role === 'employee') {

    const recentTaskActivities = [
      {
        id: 1,
        type: 'task',
        title: 'Task #T-2025-045 completed',
        description: 'Review Q4 project deliverables - marked as done',
        time: '2 minutes ago',
        status: 'success',
        icon: CheckCircle2,
        color: 'text-green-600',
        href: '/tasks/my-tasks'
      },
      {
        id: 2,
        type: 'alert',
        title: 'Overdue task reminder',
        description: 'Client feedback report due yesterday - prioritize',
        time: '15 minutes ago',
        status: 'warning',
        icon: AlertCircle,
        color: 'text-indigo-600',
        href: '/tasks/my-tasks'
      },
      {
        id: 3,
        type: 'assignment',
        title: 'New task assigned',
        description: 'Prepare presentation for team meeting - due Friday',
        time: '32 minutes ago',
        status: 'info',
        icon: Target,
        color: 'text-blue-600',
        href: '/tasks/my-tasks'
      }
    ];


    return (
      <div className="min-h-screen bg-slate-50">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 bg-indigo-500 rounded-xl flex items-center justify-center shadow-sm">
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">{t("taskManagementDashboard")}</h1>
                  <p className="text-slate-600 text-sm mt-0.5">{t("dashboardDescription")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  <RefreshCw className="h-5 w-5" />
                </button>
                <button className="p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* ESS Quick Portal */}
          <Link href="/admin/profile">
            <div className="group bg-gradient-to-r from-indigo-600 to-violet-700 rounded-2xl p-8 text-white shadow-xl shadow-indigo-200 hover:scale-[1.01] transition-all cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Shield className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase opacity-80">{t("employeePortal")}</span>
                  </div>
                  <h2 className="text-3xl font-black mb-2 tracking-tight">{t("accessPayTaxDashboard")}</h2>
                  <p className="text-indigo-100 max-w-md">{t("essDashboardDesc")}</p>
                </div>
                <div className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-xl backdrop-blur-md transition-all flex items-center gap-3 font-bold group-hover:gap-5">
                  {t("launchPortal")} <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-600" />
                {t("recentActivity")}
              </h2>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {recentTaskActivities.map((activity) => (
                  <Link href={activity.href || '/'} key={activity.id} className="block group">
                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.color} bg-opacity-10`}>
                        <activity.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">{activity.title}</h4>
                        <p className="text-xs text-slate-600 mt-1">{activity.description}</p>
                        <span className="text-xs text-slate-500">{activity.time}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Supervisor Dashboard
  if (role === 'supervisor') {
    const teamStats = [
      {
        title: t("teamMembers"),
        value: '15',
        change: '+2',
        trend: 'up',
        icon: Users2,
        color: 'text-blue-600',
        bgColor: 'bg-slate-50',
        borderColor: 'border-blue-200',
        href: '/team'
      },
      {
        title: t("pendingApprovals"),
        value: '8',
        change: '+3',
        trend: 'up',
        icon: ClipboardList,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200',
        href: '/approvals'
      },
      {
        title: t("teamTasksCompleted"),
        value: '45',
        change: '+12%',
        trend: 'up',
        icon: CheckSquare,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        href: '/tasks/team'
      },
      {
        title: t("overdueTeamTasks"),
        value: '5',
        change: '-2',
        trend: 'down',
        icon: AlertCircle,
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        href: '/tasks/team'
      }
    ];

    const supervisorStats = [
      {
        title: t("teamProductivity"),
        value: '78%',
        change: '+5%',
        trend: 'up',
        icon: TrendingUp,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        href: '/analytics'
      },
      {
        title: t("qualityScore"),
        value: '92%',
        change: '+2%',
        trend: 'up',
        icon: Award,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200',
        href: '/quality'
      },
      {
        title: t("attendanceRate"),
        value: '95%',
        change: '+1%',
        trend: 'up',
        icon: UserCheck,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        href: '/attendance'
      },
      {
        title: t("trainingRequired"),
        value: '3',
        change: '-1',
        trend: 'down',
        icon: Clock,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        href: '/training'
      }
    ];

    const teamActivities = [
      {
        id: 1,
        type: 'completion',
        title: 'Sarah completed Task #T-2025-067',
        description: 'Monthly inventory audit - marked as done',
        time: '15 minutes ago',
        status: 'success',
        icon: CheckCircle2,
        color: 'text-green-600'
      },
      {
        id: 2,
        type: 'delay',
        title: 'Mike delayed Task #T-2025-045',
        description: 'Client report submission - requires extension',
        time: '1 hour ago',
        status: 'warning',
        icon: Clock,
        color: 'text-indigo-600'
      },
      {
        id: 3,
        type: 'submission',
        title: 'New timesheet submitted',
        description: 'Emily submitted weekly timesheet for approval',
        time: '2 hours ago',
        status: 'info',
        icon: FileText,
        color: 'text-blue-600'
      },
      {
        id: 4,
        type: 'issue',
        title: 'Quality issue reported',
        description: 'John reported quality issue in batch #B-234',
        time: '3 hours ago',
        status: 'error',
        icon: AlertTriangle,
        color: 'text-red-600'
      }
    ];

    const quickSupervisorActions = [
      {
        title: t("teamPerformance"),
        description: t("teamPerformanceDesc"),
        icon: BarChart,
        href: '/analytics/team',
        color: 'bg-slate-50 hover:bg-blue-100 border-blue-200'
      },
      {
        title: t("taskAssignment"),
        description: t("taskAssignmentDesc"),
        icon: ClipboardList,
        href: '/tasks/assign',
        color: 'bg-green-50 hover:bg-green-100 border-green-200'
      },
      {
        title: t("approvalQueue"),
        description: t("approvalQueueDesc"),
        icon: UserCheck,
        href: '/approvals',
        color: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
      },
      {
        title: t("teamSchedule"),
        description: t("teamScheduleDesc"),
        icon: Calendar,
        href: '/schedule',
        color: 'bg-orange-50 hover:bg-orange-100 border-orange-200'
      }
    ];

    const teamAlerts = [
      {
        title: t("pendingApprovals"),
        message: `8 ${t("pendingApprovals")}`,
        severity: 'medium',
        count: 8,
        action: t("reviewNow"),
        href: '/approvals'
      },
      {
        title: t("trainingRequired"),
        message: `3 ${t("trainingRequired")}`,
        severity: 'low',
        count: 3,
        action: t("scheduleTraining"),
        href: '/training'
      }
    ];

    const topPerformers = [
      {
        name: 'Sarah Johnson',
        role: 'Senior Operator',
        tasksCompleted: 23,
        efficiency: '98%',
        rating: 'Excellent'
      },
      {
        name: 'Mike Chen',
        role: 'Quality Analyst',
        tasksCompleted: 19,
        efficiency: '95%',
        rating: 'Very Good'
      },
      {
        name: 'Emily Davis',
        role: 'Inventory Specialist',
        tasksCompleted: 21,
        efficiency: '96%',
        rating: 'Excellent'
      }
    ];

    return (
      <div className="min-h-screen bg-slate-50">
        {/* Supervisor Header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 bg-indigo-500 rounded-xl flex items-center justify-center shadow-sm">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">{t("supervisorDashboard")}</h1>
                  <p className="text-slate-600 text-sm mt-0.5">{t("supervisorDashboardDesc")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  <RefreshCw className="h-5 w-5" />
                </button>
                <button className="p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  <Settings className="h-5 w-5" />
                </button>

              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* Personal ESS Portal */}
          <Link href="/admin/profile">
            <div className="group bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-6 text-white shadow-lg hover:scale-[1.005] transition-all cursor-pointer relative overflow-hidden">
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{t("yourPersonalPayTax")}</h2>
                    <p className="text-indigo-100 text-sm">{t("accessPersonalPayslips")}</p>
                  </div>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-sm font-bold flex items-center gap-2">
                  {t("openMyPortal")} <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Team Overview KPIs */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center border border-blue-100">
                  <Users2 className="w-4 h-4 text-blue-600" />
                </div>
                {t("teamOverview")}
              </h2>
              <p className="text-slate-600 text-sm mt-1">{t("teamOverviewDesc")}</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamStats.map((stat, index) => (
                  <Link key={index} href={stat.href}>
                    <div className={`group bg-white rounded-xl border ${stat.borderColor} p-6 hover:shadow-lg transition-all duration-200 ${stat.bgColor} hover:scale-105`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-3 rounded-xl ${stat.bgColor} border ${stat.borderColor}`}>
                          <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          {stat.trend === 'up' ? (
                            <ArrowUp className="h-3 w-3 text-green-600" />
                          ) : (
                            <ArrowDown className="h-3 w-3 text-red-600" />
                          )}
                          <span className={`font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Supervisor KPIs */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100">
                  <BarChart className="w-4 h-4 text-purple-600" />
                </div>
                {t("performanceMetrics")}
              </h2>
              <p className="text-slate-600 text-sm mt-1">{t("performanceMetricsDesc")}</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supervisorStats.map((stat, index) => (
                  <Link key={index} href={stat.href}>
                    <div className={`group bg-white rounded-xl border ${stat.borderColor} p-6 hover:shadow-lg transition-all duration-200 ${stat.bgColor} hover:scale-105`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-3 rounded-xl ${stat.bgColor} border ${stat.borderColor}`}>
                          <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          {stat.trend === 'up' ? (
                            <ArrowUp className="h-3 w-3 text-green-600" />
                          ) : (
                            <ArrowDown className="h-3 w-3 text-red-600" />
                          )}
                          <span className={`font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Team Alerts */}
          {teamAlerts.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center border border-indigo-100">
                    <AlertCircle className="w-4 h-4 text-indigo-600" />
                  </div>
                  {t("teamAlerts")}
                  <Badge className="bg-indigo-100 text-indigo-700 border-indigo-300">{teamAlerts.length}</Badge>
                </h2>
                <p className="text-slate-600 text-sm mt-1">{t("teamAlertsDesc")}</p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {teamAlerts.map((alert, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${alert.severity === 'medium' ? 'bg-indigo-50 border-indigo-400' : 'bg-slate-50 border-blue-400'
                      }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-900">{alert.title}</h3>
                          <p className="text-sm text-slate-600 mt-1">{alert.message}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${alert.severity === 'medium' ? 'bg-indigo-100 text-indigo-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                            {alert.count} {t("items")}
                          </span>
                          <Link href={alert.href}>
                            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors">
                              {alert.action}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Supervisor Actions */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center border border-green-100">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  {t("supervisorActions")}
                </h2>
                <p className="text-slate-600 text-sm mt-1">{t("supervisorActionsDesc")}</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickSupervisorActions.map((action, index) => (
                    <Link key={index} href={action.href}>
                      <div className={`group p-4 border border-slate-200 rounded-lg transition-all duration-200 cursor-pointer ${action.color}`}>
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            <action.icon className="h-5 w-5 text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {action.title}
                            </h3>
                            <p className="text-sm text-slate-600 mt-1">{action.description}</p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  {t("topPerformers")}
                </h2>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {topPerformers.map((performer, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {performer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 text-sm">{performer.name}</h4>
                        <p className="text-xs text-slate-600">{performer.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-500">{performer.tasksCompleted} {t("tasks")}</span>
                          <span className="text-xs text-slate-500">•</span>
                          <span className="text-xs text-slate-500">{performer.efficiency} {t("efficiency")}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${performer.rating === 'Excellent' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                        {performer.rating}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href="/team/performance">
                  <button className="w-full mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors">
                    {t("viewFullTeamReport")}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Team Activity Feed */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100">
                    <Activity className="w-4 h-4 text-purple-600" />
                  </div>
                  {t("teamActivityFeed")}
                </h2>
                <Link href="/team/activity" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  {t("viewAllActivity")}
                </Link>
              </div>
              <p className="text-slate-600 text-sm mt-1">{t("teamActivityFeedDesc")}</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {teamActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.status === 'success' ? 'bg-green-100 text-green-600' :
                      activity.status === 'warning' ? 'bg-indigo-100 text-indigo-600' :
                        activity.status === 'error' ? 'bg-red-100 text-red-600' :
                          'bg-blue-100 text-blue-600'
                      }`}>
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900">{activity.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{activity.description}</p>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  if (role === 'admin') {
    const adminStats = [
      {
        title: t("totalEmployees"),
        value: stats.totalEmployees.toString(),
        icon: Users,
        color: 'text-blue-600',
        bgColor: 'bg-slate-50',
        borderColor: 'border-blue-200',
        href: '/admin/employees'
      },
      {
        title: t("activeProjects"),
        value: stats.activeProjects.toString(),
        icon: Briefcase,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200',
        href: '/admin/tasks/projects'
      },
      {
        title: t("activeTasks"),
        value: (stats.totalTasks - stats.completedTasks).toString(),
        icon: CheckSquare,
        color: 'text-rose-600',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200',
        href: '/admin/tasks'
      },
      {
        title: t("pendingApprovals"),
        value: stats.pendingTimesheets.toString(),
        icon: Clock,
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        href: '/admin/tasks/approvals'
      }
    ];

    const quickActions = [
      {
        title: t("createNewProject"),
        icon: Plus,
        href: "/admin/tasks/projects",
        color: "bg-indigo-500"
      },
      {
        title: t("employeeDirectory"),
        icon: Users,
        href: "/admin/employees",
        color: "bg-blue-500"
      },
      {
        title: t("payrollRun"),
        icon: Banknote,
        href: "/admin/payroll/run",
        color: "bg-emerald-500"
      }
    ];

    return (
      <div className="min-h-screen bg-slate-50">
        {/* Enhanced Header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 bg-indigo-500 rounded-xl flex items-center justify-center shadow-sm">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">{t("adminDashboard")}</h1>
                  <p className="text-slate-600 text-sm mt-0.5">{t("hrDashboardDesc")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={fetchStats}
                  className="p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  <RefreshCw className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* Admin KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminStats.map((stat, index) => (
              <Link key={index} href={stat.href}>
                <div className={`group bg-white rounded-2xl border ${stat.borderColor} p-6 hover:shadow-xl transition-all duration-300 ${stat.bgColor} hover:-translate-y-1`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.bgColor} border ${stat.borderColor} shadow-sm group-hover:bg-white transition-colors`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 mb-1">{stat.title}</p>
                    <p className="text-3xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  {t("quickActions")}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action, i) => (
                    <Link key={i} href={action.href}>
                      <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all group cursor-pointer shadow-sm hover:shadow-md">
                        <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white`}>
                          <action.icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-700 group-hover:text-indigo-700">{action.title}</span>
                        <ChevronRight className="w-4 h-4 ml-auto text-slate-400 group-hover:text-indigo-500" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-lg overflow-hidden relative group cursor-pointer" onClick={() => router.push('/admin/tasks/projects')}>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-32 h-32" />
                </div>
                <h4 className="text-xl font-black mb-1">{t("projectTracking")}</h4>
                <p className="text-indigo-100 text-sm mb-4 leading-relaxed">{t("hrDashboardDesc")}</p>
                <div className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-md text-sm font-bold border border-white/20 transition-all">
                  {t("viewDetails")} <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-indigo-600" />
                  {t("recentActivity")}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                  {stats.recentActivity.length > 0 ? (
                    stats.recentActivity.map((log, i) => (
                      <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border-l-4 border-indigo-500 bg-indigo-50/10">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          log.action === 'created' ? 'bg-green-100 text-green-600' :
                          log.action === 'updated' ? 'bg-blue-100 text-blue-600' :
                          log.action === 'deleted' ? 'bg-red-100 text-red-600' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          <Zap className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-bold text-slate-900 capitalize">{log.entity} {log.action}</p>
                            <span className="text-[10px] text-slate-400 font-medium">{new Date(log.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-1">{log.description}</p>
                          <p className="text-[10px] text-slate-500 mt-1">By {log.performedBy.name || 'System'}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle2 className="w-8 h-8 text-slate-300" />
                      </div>
                      <p className="text-slate-500 font-medium">No recent activity found.</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-slate-800">{t("activeProjects")}</h4>
                    <Link href="/admin/tasks/projects" className="text-xs font-bold text-indigo-600 hover:underline">{t("viewAll")}</Link>
                  </div>
                  <div className="space-y-3">
                    {stats.topProjects.map((project, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-xl p-4 flex items-center justify-between hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <Briefcase className="w-5 h-5 text-indigo-500" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{project.name}</p>
                            <p className="text-xs text-slate-500">In-Charge: {project.projectManager ? `${project.projectManager.personalDetails.firstName} ${project.projectManager.personalDetails.lastName}` : 'N/A'}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 w-1/3">
                          <div className="flex justify-between w-full text-[10px] font-bold text-slate-600">
                            <span>Process</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${project.progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {stats.topProjects.length === 0 && (
                      <p className="text-center py-4 text-sm text-slate-400">No active projects found.</p>
                    )}
                  </div>
                </div>

                <div className="mb-8 p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
                  <ResourceUtilization />
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-4">Team Contributions (Top 5)</h4>
                  <div className="space-y-3">
                    {stats.topContributors.map((contributor, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                            {contributor.name.charAt(0)}
                          </div>
                          <span className="text-slate-600 font-medium">{contributor.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-900 font-bold">{contributor.hours.toFixed(1)}h</span>
                          <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className="bg-blue-500 h-full rounded-full" 
                              style={{ width: `${Math.min((contributor.hours / 160) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Unauthorized or no role
  return (
    <div className="p-6">
      <div className="text-center text-slate-500">{t("accessRestricted")}</div>
    </div>
  );
}