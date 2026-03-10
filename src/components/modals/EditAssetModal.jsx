"use client";
import { useState, useEffect, useRef } from "react";
import { X, Save, Box, AlertCircle, Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function EditAssetModal({ isOpen, onClose, onSuccess, asset }) {
    const isMounted = useRef(false);
    const [formData, setFormData] = useState({
        name: "",
        assetId: "",
        category: "",
        value: "",
        purchaseDate: "",
        description: "",
        status: "",
        assignedTo: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        isMounted.current = true;
        if (asset) {
            setFormData({
                name: asset.name || "",
                assetId: asset.assetId || "",
                category: asset.category || "",
                value: asset.value || "",
                purchaseDate: asset.purchaseDate ? new Date(asset.purchaseDate).toISOString().split('T')[0] : "",
                description: asset.description || "",
                status: asset.status || "",
                assignedTo: asset.assignedTo?._id || asset.assignedTo || "",
            });
        }
        return () => { isMounted.current = false; };
    }, [asset]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        console.log("Submit started", formData);
        try {
            setIsSubmitting(true);
            setError("");

            console.log(`Sending PUT to /api/assets/${asset._id}`);
            const res = await fetch(`/api/assets/${asset._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            console.log("Response received", res.status);

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to update asset");
            }

            console.log("Update success");
            onClose(); // Close modal first
            onSuccess(); // Trigger refresh
            toast.success("Asset updated successfully");
        } catch (err) {
            console.error("Update error", err);
            if (isMounted.current) setError(err.message);
        } finally {
            console.log("Finally block - stopping loading");
            if (isMounted.current) setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this asset?")) return;
        try {
            setIsSubmitting(true);
            const res = await fetch(`/api/assets/${asset._id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete asset");

            onSuccess();
            onClose();
            toast.success("Asset deleted successfully");
        } catch (err) {
            setError(err.message);
            setIsSubmitting(false);
        }
    };

    if (!isOpen || !asset) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl transform transition-all">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                            <Box size={24} />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Edit Asset</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    {error && (
                        <div className="p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 text-sm">
                            <AlertCircle size={16} />
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Asset Name</label>
                            <input name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Asset ID</label>
                            <input name="assetId" value={formData.assetId} disabled className="w-full px-3 py-2 border rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Category</label>
                            <select name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white">
                                <option value="Laptop">Laptop</option>
                                <option value="Desktop">Desktop</option>
                                <option value="Monitor">Monitor</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Peripheral">Peripheral</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Status</label>
                            <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white">
                                <option value="Available">Available</option>
                                <option value="Assigned">Assigned</option>
                                <option value="In Repair">In Repair</option>
                                <option value="Damaged">Damaged</option>
                                <option value="Lost">Lost</option>
                                <option value="Retired">Retired</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Purchase Date</label>
                            <input type="date" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Value</label>
                            <input type="number" name="value" value={formData.value} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none h-24" />
                    </div>

                    {/* Simple Assignment - Ideally this would be a searchable dropdown */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Assigned To (Employee ID)</label>
                        <input name="assignedTo" value={formData.assignedTo} onChange={handleChange} placeholder="Enter Employee MongoDB ID" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
                        <p className="text-xs text-gray-500">Leave empty to unassign</p>
                    </div>

                </div>

                <div className="p-6 border-t border-gray-100 flex justify-between gap-3">
                    <button onClick={handleDelete} type="button" className="px-4 py-2 text-red-600 font-medium hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                        <Trash2 size={18} />
                        Delete
                    </button>
                    <div className="flex gap-3">
                        <button onClick={onClose} className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors">
                            Cancel
                        </button>
                        <button onClick={handleSubmit} disabled={isSubmitting} className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                            Update Asset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
