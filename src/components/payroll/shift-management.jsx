'use client';

import { useState, useEffect } from 'react';
import {
    Plus, Clock, Calendar, Edit, Trash2, CheckCircle2,
    AlertCircle, RefreshCw, X, Palette, Info
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function ShiftManagement() {
    const [shifts, setShifts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingShift, setEditingShift] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        startTime: '09:00',
        endTime: '18:00',
        breakDuration: 60,
        workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        color: '#4f46e5',
        description: '',
        isDefault: false
    });

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const colorPresets = ['#4f46e5', '#ecc94b', '#48bb78', '#f56565', '#ed64a6', '#9f7aea', '#4299e1'];

    useEffect(() => {
        fetchShifts();
    }, []);

    const fetchShifts = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/v1/admin/payroll/shifts');
            const data = await response.json();
            if (data.success) {
                setShifts(data.shifts || []);
            }
        } catch (error) {
            toast.error("Failed to load shifts");
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (shift = null) => {
        if (shift) {
            setEditingShift(shift);
            setFormData({
                name: shift.name,
                startTime: shift.startTime,
                endTime: shift.endTime,
                breakDuration: shift.breakDuration,
                workingDays: shift.workingDays,
                color: shift.color,
                description: shift.description || '',
                isDefault: shift.isDefault || false
            });
        } else {
            setEditingShift(null);
            setFormData({
                name: '',
                startTime: '09:00',
                endTime: '18:00',
                breakDuration: 60,
                workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                color: '#4f46e5',
                description: '',
                isDefault: false
            });
        }
        setShowModal(true);
    };

    const handleToggleDay = (day) => {
        setFormData(prev => {
            if (prev.workingDays.includes(day)) {
                return { ...prev, workingDays: prev.workingDays.filter(d => d !== day) };
            } else {
                return { ...prev, workingDays: [...prev.workingDays, day] };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic Validation
        if (!formData.name.trim()) {
            toast.error("Shift name is required");
            return;
        }
        if (formData.workingDays.length === 0) {
            toast.error("Select at least one working day");
            return;
        }

        try {
            const url = '/api/v1/admin/payroll/shifts';
            const method = editingShift ? 'PUT' : 'POST';
            
            // Note: organizationId is now handled by the backend from the JWT session
            const body = editingShift
                ? { ...formData, _id: editingShift._id }
                : { ...formData }; 

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await response.json();
            if (data.success) {
                toast.success(editingShift ? "Shift updated!" : "Shift created!");
                setShowModal(false);
                fetchShifts();
            } else {
                toast.error(data.error || "Operation failed");
            }
        } catch (error) {
            toast.error("An error occurred");
        }
    };

    const formatTime12h = (time24) => {
        if (!time24) return 'N/A';
        const [hours, minutes] = time24.split(':');
        const h = parseInt(hours);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        return `${h12}:${minutes} ${ampm}`;
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this shift?")) return;
        try {
            const response = await fetch(`/api/v1/admin/payroll/shifts?id=${id}`, { method: 'DELETE' });
            const data = await response.json();
            if (data.success) {
                toast.success("Shift deleted");
                fetchShifts();
            }
        } catch (error) {
            toast.error("Failed to delete shift");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <Toaster />
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Shift Management</h1>
                        <p className="text-slate-500 mt-1 font-medium">Define work schedules and timings for your workforce</p>
                    </div>
                    <button
                        onClick={() => handleOpenModal()}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-200 transition-all"
                    >
                        <Plus size={20} /> New Shift
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center p-20">
                        <RefreshCw className="w-10 h-10 text-indigo-600 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {shifts.map((shift) => (
                            <div
                                key={shift._id}
                                className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
                            >
                                <div
                                    className="absolute top-0 left-0 w-full h-2"
                                    style={{ backgroundColor: shift.color }}
                                />

                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900">{shift.name}</h3>
                                        {shift.isDefault && (
                                            <span className="text-[10px] bg-indigo-100 text-indigo-700 font-black px-2 py-0.5 rounded-full uppercase tracking-widest mt-1 inline-block">
                                                Default Shift
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => handleOpenModal(shift)} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                            <Edit size={18} />
                                        </button>
                                        <button onClick={() => handleDelete(shift._id)} className="p-2 text-slate-400 hover:text-rose-600 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-slate-600 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <Clock className="text-indigo-600" size={20} />
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Timings</p>
                                            <p className="font-black text-slate-900">
                                                {formatTime12h(shift.startTime)} - {formatTime12h(shift.endTime)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Work Days</p>
                                        <div className="flex flex-wrap gap-1">
                                            {daysOfWeek.map(day => (
                                                <span
                                                    key={day}
                                                    className={`text-[9px] font-black px-2 py-1 rounded-md ${shift.workingDays.includes(day)
                                                            ? 'bg-indigo-600 text-white'
                                                            : 'bg-white text-slate-300 border border-slate-100'
                                                        }`}
                                                >
                                                    {day.substring(0, 3)}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                        <Info size={14} />
                                        <span>Break: {shift.breakDuration} mins</span>
                                    </div>
                                    <div
                                        className="w-4 h-4 rounded-full shadow-inner"
                                        style={{ backgroundColor: shift.color }}
                                    />
                                </div>
                            </div>
                        ))}
                        {shifts.length === 0 && (
                            <div className="col-span-full bg-white rounded-[3rem] p-20 text-center border-2 border-dashed border-slate-200">
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                    <Calendar size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">No Shifts Defined</h3>
                                <p className="text-slate-500 max-w-sm mx-auto mt-2">Create your first working shift to start organizing your workforce roster.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Modal Form */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-indigo-600 text-white">
                            <h2 className="text-2xl font-black">{editingShift ? 'Edit Shift' : 'New Shift'}</h2>
                            <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto no-scrollbar">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Shift Name <span className="text-rose-500">*</span></label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 outline-none font-bold"
                                    placeholder="e.g. General, Night, Morning Shift"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Start Time <span className="text-rose-500">*</span></label>
                                    <input
                                        type="time"
                                        value={formData.startTime}
                                        onChange={e => setFormData({ ...formData, startTime: e.target.value })}
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 outline-none font-bold"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">End Time <span className="text-rose-500">*</span></label>
                                    <input
                                        type="time"
                                        value={formData.endTime}
                                        onChange={e => setFormData({ ...formData, endTime: e.target.value })}
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 outline-none font-bold"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Break Duration (Minutes)</label>
                                <input
                                    type="number"
                                    value={formData.breakDuration}
                                    onChange={e => setFormData({ ...formData, breakDuration: e.target.value })}
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 outline-none font-bold"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Working Days <span className="text-rose-500">*</span></label>
                                <div className="flex flex-wrap gap-2">
                                    {daysOfWeek.map(day => (
                                        <button
                                            key={day}
                                            type="button"
                                            onClick={() => handleToggleDay(day)}
                                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${formData.workingDays.includes(day)
                                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                                                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                                                }`}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Label Color</label>
                                <div className="flex gap-3">
                                    {colorPresets.map(c => (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, color: c })}
                                            className={`w-10 h-10 rounded-full transition-transform ${formData.color === c ? 'scale-110 ring-4 ring-indigo-100 shadow-lg' : 'hover:scale-105 opacity-60'}`}
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                    <div className="relative">
                                        <Palette className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                        <input
                                            type="color"
                                            value={formData.color}
                                            onChange={e => setFormData({ ...formData, color: e.target.value })}
                                            className="w-10 h-10 p-0 border-none bg-transparent cursor-pointer opacity-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                                <input
                                    type="checkbox"
                                    id="isDefault"
                                    checked={formData.isDefault}
                                    onChange={e => setFormData({ ...formData, isDefault: e.target.checked })}
                                    className="w-5 h-5 accent-indigo-600"
                                />
                                <label htmlFor="isDefault" className="text-sm font-bold text-indigo-900 cursor-pointer">
                                    Set as Default Shift for new employees
                                </label>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 py-4 bg-slate-50 text-slate-600 rounded-[1.5rem] font-bold hover:bg-slate-100 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-[2] py-4 bg-indigo-600 text-white rounded-[1.5rem] font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all"
                                >
                                    {editingShift ? 'Save Changes' : 'Create Shift'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
