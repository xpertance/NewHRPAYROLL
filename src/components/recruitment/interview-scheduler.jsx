"use client";

import { useState, useEffect, useCallback } from "react";
import {
    Calendar, Clock, Video, Users,
    MoreHorizontal, CheckCircle2, XCircle,
    Plus, Search, Filter, Mail,
    Phone, ChevronRight, MessageSquare,
    Star, ArrowUpRight, Loader2, Link as LinkIcon,
    Briefcase, Building2, MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format, isToday, isTomorrow, isPast } from "date-fns";
import toast from "react-hot-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export default function InterviewScheduler() {
    const [interviews, setInterviews] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [interviewers, setInterviewers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [showScheduleModal, setShowScheduleModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const [intRes, candRes] = await Promise.all([
                fetch('/api/v1/admin/recruitment/interviews'),
                fetch('/api/v1/admin/recruitment/candidates')
            ]);

            const intData = await intRes.json();
            const candData = await candRes.json();

            setInterviews(intData.interviews || []);
            setInterviewers(intData.interviewers || []);
            setCandidates(candData.candidates || []);
        } catch (error) {
            toast.error("Failed to sync interview pipeline");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const updateStatus = async (candidateId, interviewId, newStatus) => {
        try {
            const res = await fetch('/api/v1/admin/recruitment/interviews', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    candidateId,
                    interviewId,
                    updateData: { status: newStatus }
                })
            });

            if (!res.ok) throw new Error("Update failed");
            toast.success(`Interview marked as ${newStatus}`);
            fetchData();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const filteredInterviews = interviews.filter(i =>
        i.candidateName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.role?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const upcomingInterviews = filteredInterviews.filter(i => !isPast(new Date(i.date)) && i.status !== 'Cancelled');
    const pastInterviews = filteredInterviews.filter(i => isPast(new Date(i.date)) || i.status === 'Completed' || i.status === 'Cancelled');

    return (
        <div className="pt-16 pb-20 px-10 space-y-12">
            {/* Ultra-Premium Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-indigo-600 text-white p-1 rounded-lg">
                            <Calendar className="w-4 h-4" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">Unified Interview Management</span>
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
                        Schedule <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Precision.</span>
                    </h1>
                    <p className="text-slate-500 font-medium max-w-xl text-lg leading-relaxed">
                        Manage candidate assessments and panel collaborations from a central, high-performance command center.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-white border-2 border-slate-100 p-2 rounded-[24px] shadow-sm flex items-center gap-2">
                        <div className="flex -space-x-3 px-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center font-bold text-xs">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <div className="pr-4 border-l-2 border-slate-50 pl-4 py-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Panels</p>
                            <p className="text-sm font-bold text-slate-900">12 Interviewers</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => setShowScheduleModal(true)}
                        className="bg-indigo-600 hover:bg-indigo-700 h-16 rounded-[24px] px-8 text-white shadow-2xl shadow-indigo-200 font-black uppercase tracking-widest group transition-all"
                    >
                        <Plus className="w-5 h-5 mr-3 group-hover:rotate-90 transition-transform duration-500" />
                        Book Round
                    </Button>
                </div>
            </div>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { label: "Today's Agenda", value: interviews.filter(i => isToday(new Date(i.date))).length, icon: Clock, color: "blue", gradient: "from-blue-600 to-indigo-600" },
                    { label: "Pending Feedback", value: interviews.filter(i => isPast(new Date(i.date)) && i.status === 'Scheduled').length, icon: MessageSquare, color: "orange", gradient: "from-orange-500 to-amber-500" },
                    { label: "Success Rate", value: "68%", icon: Star, color: "emerald", gradient: "from-emerald-500 to-teal-500" },
                    { label: "Active Rounds", value: upcomingInterviews.length, icon: Users, color: "purple", gradient: "from-purple-600 to-violet-600" }
                ].map((stat, i) => (
                    <Card key={i} className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[40px] overflow-hidden group hover:scale-[1.03] transition-all duration-700 bg-white relative">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-[0.03] -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-1000`}></div>
                        <CardContent className="pt-14 pb-10 px-10">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-[12px] font-black text-slate-400 uppercase tracking-[0.25em] mb-4">{stat.label}</p>
                                    <h4 className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</h4>
                                </div>
                                <div className={`w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-700 shadow-sm`}>
                                    <stat.icon className="w-7 h-7" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                {/* Search & Filter Component */}
                <div className="xl:col-span-12">
                    <div className="bg-white/60 backdrop-blur-xl border border-white p-4 rounded-[40px] shadow-2xl shadow-slate-200/50 mb-8 flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 group w-full">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                            <Input
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                placeholder="Search by candidate, role or interviewer..."
                                className="h-16 pl-14 pr-8 border-none bg-slate-50/50 focus:bg-white rounded-[24px] text-base font-bold transition-all shadow-inner"
                            />
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <Button variant="outline" className="h-16 rounded-[24px] border-slate-100 hover:bg-slate-50 px-8 font-black uppercase tracking-widest text-[10px] text-slate-600">
                                <Filter className="w-4 h-4 mr-2" /> All Stages
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Left Column: Agenda View */}
                <div className="xl:col-span-8 space-y-8">
                    <div className="flex items-center justify-between px-4">
                        <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
                            <Clock className="w-5 h-5 text-indigo-500" />
                            Priority Agenda
                        </h3>
                        <Badge className="bg-slate-100 text-slate-600 border-none font-bold py-1.5 px-4 rounded-full">
                            {upcomingInterviews.length} Scheduled
                        </Badge>
                    </div>

                    <div className="space-y-4">
                        <AnimatePresence mode="popLayout">
                            {upcomingInterviews.length > 0 ? (
                                upcomingInterviews.map((int, index) => (
                                    <motion.div
                                        key={int.interviewId}
                                        initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <InterviewCard
                                            interview={int}
                                            onStatusUpdate={updateStatus}
                                        />
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="py-20 flex flex-col items-center justify-center grayscale opacity-50 bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-[40px]"
                                >
                                    <div className="w-20 h-20 rounded-[32px] bg-white shadow-xl flex items-center justify-center mb-6">
                                        <Calendar className="w-10 h-10 text-slate-200" />
                                    </div>
                                    <p className="font-black text-slate-400 uppercase tracking-widest text-sm">Clear Horizon</p>
                                    <p className="text-slate-400 text-xs mt-2 font-medium">No interviews scheduled in this pipeline</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Past/Completed Section */}
                    {pastInterviews.length > 0 && (
                        <div className="pt-8 space-y-6">
                            <div className="flex items-center gap-3 px-4">
                                <div className="h-px flex-1 bg-slate-100"></div>
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Historical Archives</span>
                                <div className="h-px flex-1 bg-slate-100"></div>
                            </div>
                            <div className="space-y-4 opacity-70 hover:opacity-100 transition-opacity">
                                {pastInterviews.slice(0, 3).map((int) => (
                                    <InterviewCard
                                        key={int.interviewId}
                                        interview={int}
                                        onStatusUpdate={updateStatus}
                                        minimal
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Insights & Quick Actions */}
                <div className="xl:col-span-4 space-y-8">

                    <Card className="rounded-[40px] border-slate-100 shadow-xl shadow-slate-100 bg-white">
                        <CardContent className="pt-12 pb-8 px-8">
                            <h5 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2">
                                <Users className="w-4 h-4 text-indigo-500" /> Top Interviewers
                            </h5>
                            <div className="space-y-6">
                                {interviewers.slice(0, 4).map((emp, i) => (
                                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center font-black text-slate-400 text-xs border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all">
                                                {emp.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-800">{emp.name}</p>
                                                <p className="text-[10px] font-medium text-slate-400">{emp.designation}</p>
                                            </div>
                                        </div>
                                        <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold">Available</Badge>
                                    </div>
                                ))}
                            </div>
                            <Button variant="ghost" className="w-full mt-8 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-indigo-600">
                                View Panel Directory <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Modals */}
            <AnimatePresence>
                {showScheduleModal && (
                    <ScheduleModal
                        onClose={() => setShowScheduleModal(false)}
                        candidates={candidates}
                        interviewers={interviewers}
                        onSuccess={() => {
                            setShowScheduleModal(false);
                            fetchData();
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

function InterviewCard({ interview, onStatusUpdate, minimal = false }) {
    const isComp = interview.status === 'Completed';
    const isCanc = interview.status === 'Cancelled';
    const date = new Date(interview.date);

    return (
        <div className={`group relative bg-white rounded-[40px] border shadow-sm ${isComp ? 'border-emerald-100' : isCanc ? 'border-slate-100 grayscale' : 'border-slate-100'} hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-700 overflow-hidden min-h-[140px] flex items-stretch`}>
            {/* Status Indicator Strip */}
            <div className={`absolute left-0 top-0 bottom-0 w-2.5 ${isComp ? 'bg-emerald-500' : isCanc ? 'bg-slate-300' : 'bg-indigo-600'} group-hover:w-4 transition-all duration-700`}></div>

            <div className={`p-6 pl-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6 w-full`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    {/* Time/Date Block */}
                    <div className={`flex flex-col items-center justify-center min-w-[80px] h-[80px] rounded-[28px] bg-slate-50 border border-slate-100 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-700 shadow-sm group-hover:shadow-[0_12px_24px_rgba(79,70,229,0.3)] shrink-0`}>
                        <p className="text-[9px] font-black text-slate-400 group-hover:text-indigo-200 uppercase tracking-[0.2em] transition-colors">{format(date, 'MMM')}</p>
                        <p className="text-2xl font-black text-slate-900 group-hover:text-white leading-none py-1 transition-colors">{format(date, 'dd')}</p>
                        <p className="text-[10px] font-black text-indigo-600 group-hover:text-white mt-0.5 uppercase transition-colors">{format(date, 'HH:mm')}</p>
                    </div>

                    {/* Info Block */}
                    <div className="space-y-2.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                            <h4 className="text-xl font-black text-slate-900 tracking-tighter leading-none truncate">{interview.candidateName}</h4>
                            <Badge className={`${isComp ? 'bg-emerald-50 text-emerald-600 shadow-emerald-100' : isCanc ? 'bg-slate-50 text-slate-400' : 'bg-indigo-600 text-white shadow-indigo-100'} border-none font-black text-[9px] uppercase py-1.5 px-4 rounded-xl shadow-lg shrink-0`}>
                                {interview.round || "Assessment Round"}
                            </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-slate-500">
                            <span className="flex items-center gap-2 text-slate-400 uppercase tracking-[0.15em] text-[9px] font-black">
                                <Briefcase className="w-3.5 h-3.5 text-indigo-500" /> {interview.role}
                            </span>
                            <span className="flex items-center gap-2.5 px-4 py-1.5 bg-slate-50 rounded-[14px] border border-slate-100 group-hover:bg-white group-hover:border-indigo-100 transition-all">
                                <Users className="w-3.5 h-3.5 text-indigo-500 group-hover:scale-110 transition-transform" />
                                <div className="flex flex-col">
                                    <span className="text-slate-400 font-black uppercase text-[7px] tracking-widest leading-none mb-0.5">Panelist</span>
                                    <span className="text-slate-800 text-[11px] font-black uppercase leading-tight">{interview.interviewer?.name || "Pending"}</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0">
                    {!minimal && !isComp && !isCanc && (
                        <>
                            <Button
                                className="h-14 rounded-[20px] bg-slate-900 text-white hover:bg-slate-800 font-black uppercase tracking-widest text-[10px] px-6 shadow-xl shadow-slate-200/50 flex items-center gap-2.5 group/btn"
                                onClick={() => window.open(interview.meetingLink || '#', '_blank')}
                            >
                                <Video className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                                Join Session
                            </Button>
                            <div className="h-10 w-px bg-slate-100 mx-1 hidden lg:block"></div>
                            <Button
                                variant="ghost"
                                className="h-14 rounded-[20px] bg-emerald-50 text-emerald-600 hover:bg-emerald-100 font-black uppercase tracking-widest text-[10px] px-6"
                                onClick={() => onStatusUpdate(interview.candidateId, interview.interviewId, 'Completed')}
                            >
                                <CheckCircle2 className="w-4 h-4 mr-1.5" /> Done
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-14 h-14 rounded-[20px] hover:bg-rose-50 hover:text-rose-600 transition-all shadow-sm hover:shadow-rose-100/50"
                                onClick={() => onStatusUpdate(interview.candidateId, interview.interviewId, 'Cancelled')}
                            >
                                <XCircle className="w-5 h-5 outline-none" />
                            </Button>
                        </>
                    )}
                    {(isComp || isCanc) && (
                        <div className="flex items-center gap-4 pr-4">
                            <div className="text-right">
                                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isComp ? 'text-emerald-500' : 'text-slate-400'}`}>
                                    Result {isComp ? 'Validated' : 'Voided'}
                                </p>
                                <p className="text-[9px] text-slate-400 font-medium">Ref: #{interview.interviewId?.substring(0, 6)}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-[18px] flex items-center justify-center ${isComp ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-100 text-slate-300'}`}>
                                {isComp ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function ScheduleModal({ onClose, candidates, interviewers, onSuccess }) {
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        candidateId: '',
        round: 'Technical Interview',
        interviewer: '',
        date: '',
        meetingLink: '',
        notes: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.candidateId || !formData.date || !formData.interviewer) {
            toast.error("Required infrastructure data missing");
            return;
        }

        try {
            setSubmitting(true);
            const res = await fetch('/api/v1/admin/recruitment/interviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    candidateId: formData.candidateId,
                    interview: {
                        round: formData.round,
                        interviewer: formData.interviewer,
                        date: formData.date,
                        meetingLink: formData.meetingLink,
                        status: 'Scheduled'
                    }
                })
            });

            if (!res.ok) throw new Error("Scheduling operation failed");
            toast.success("Interview Round Synchronized!");
            onSuccess();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-[12px]"
                onClick={onClose}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="bg-white rounded-[48px] w-full max-w-3xl shadow-4xl border border-white/20 overflow-hidden relative z-10 p-12"
            >
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-[28px] bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-100">
                            <Plus className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none uppercase">Book Session</h2>
                            <p className="text-slate-400 text-sm font-medium mt-2">Initialize a new assessment round in the pipeline</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-3">Target Candidate</label>
                        <Select
                            value={formData.candidateId}
                            onValueChange={val => {
                                console.log("Candidate selected:", val);
                                setFormData({ ...formData, candidateId: val });
                            }}
                        >
                            <SelectTrigger className="h-16 rounded-[24px] border-slate-100 font-bold px-8 text-slate-700 bg-slate-50/50">
                                <SelectValue placeholder="Identify candidate from pipeline...">
                                    {candidates.find(c => c._id === formData.candidateId)?.name}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="rounded-[24px] p-2">
                                {candidates.map(c => (
                                    <SelectItem key={c._id} value={c._id} className="rounded-2xl p-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900">{c.name}</span>
                                            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{c.appliedRole || c.jobRequisition?.title}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-3">Round Specification</label>
                        <Select
                            value={formData.round}
                            onValueChange={val => {
                                console.log("Round selected:", val);
                                setFormData({ ...formData, round: val });
                            }}
                        >
                            <SelectTrigger className="h-16 rounded-[24px] border-slate-100 font-bold px-8 text-slate-700 bg-slate-50/50">
                                <SelectValue placeholder="Select round type...">
                                    {formData.round}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                                {['Screening', 'Technical Interview', 'Managerial Interview', 'HR Interview', 'Final Round'].map(r => (
                                    <SelectItem key={r} value={r} className="rounded-xl p-3">{r}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-3">Session Commander (Interviewer)</label>
                        <Select
                            value={formData.interviewer}
                            onValueChange={val => {
                                console.log("Interviewer selected:", val);
                                setFormData({ ...formData, interviewer: val });
                            }}
                        >
                            <SelectTrigger className="h-16 rounded-[24px] border-slate-100 font-bold px-8 text-slate-700 bg-slate-50/50">
                                <SelectValue placeholder="Select from active panel...">
                                    {interviewers.find(i => i._id === formData.interviewer)?.name}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="rounded-[24px] p-2">
                                {interviewers.map(i => (
                                    <SelectItem key={i._id} value={i._id} className="rounded-2xl p-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900">{i.name}</span>
                                            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{i.designation}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-3">Temporal coordinates</label>
                        <Input
                            type="datetime-local"
                            value={formData.date || ''}
                            className="h-16 rounded-[24px] border-slate-100 font-bold px-8 bg-slate-50/50"
                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-3">Virtual Bridge (Meeting Link)</label>
                        <Input
                            placeholder="Zoom / Meet / Teams URL..."
                            value={formData.meetingLink || ''}
                            className="h-16 rounded-[24px] border-slate-100 font-bold px-8 bg-slate-50/50"
                            onChange={e => setFormData({ ...formData, meetingLink: e.target.value })}
                        />
                    </div>

                    <div className="md:col-span-2 flex gap-4 pt-8">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="flex-1 h-20 rounded-[32px] border-slate-100 text-slate-600 font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all"
                        >
                            Abort Session
                        </Button>
                        <Button
                            type="submit"
                            disabled={submitting}
                            className="flex-3 h-20 rounded-[32px] bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xl shadow-indigo-200 font-black uppercase tracking-widest text-xs transition-all flex-[2]"
                        >
                            {submitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Authorize Scheduling"}
                        </Button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
