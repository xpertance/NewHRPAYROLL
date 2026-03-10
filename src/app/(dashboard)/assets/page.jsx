"use client";

import { useState, useEffect } from "react";
import { Plus, Search, Filter, Box } from "lucide-react";
import CreateAssetModal from "@/components/modals/CreateAssetModal";
import EditAssetModal from "@/components/modals/EditAssetModal";
import { toast } from "sonner";

export default function AssetsPage() {
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [filterStatus, setFilterStatus] = useState("");

    const fetchAssets = async () => {
        try {
            setLoading(true);
            const query = new URLSearchParams();
            if (filterStatus) query.append("status", filterStatus);

            const res = await fetch(`/api/assets?${query.toString()}`);
            if (res.ok) {
                const data = await res.json();
                setAssets(data);
            }
        } catch (error) {
            console.error("Failed to fetch assets", error);
            toast.error("Failed to load assets");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAssets();
    }, [filterStatus]);

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Asset Management</h1>
                    <p className="text-slate-500">Track and manage organization assets</p>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium shadow-sm hover:shadow-indigo-200"
                >
                    <Plus size={18} />
                    Add Asset
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 flex items-center gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="text" placeholder="Search assets..." className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter size={18} className="text-slate-400" />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-transparent font-medium text-slate-700 outline-none cursor-pointer"
                        >
                            <option value="">All Status</option>
                            <option value="Available">Available</option>
                            <option value="Assigned">Assigned</option>
                            <option value="In Repair">In Repair</option>
                            <option value="Retired">Retired</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-3">Asset Details</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Assigned To</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loading ? (
                                <tr><td colSpan="5" className="p-8 text-center text-slate-500">Loading assets...</td></tr>
                            ) : assets.length === 0 ? (
                                <tr><td colSpan="5" className="p-8 text-center text-slate-500">No assets found.</td></tr>
                            ) : (
                                assets.map((asset) => (
                                    <tr key={asset._id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 mt-0.5">
                                                    <Box size={16} />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-900">{asset.name}</div>
                                                    <div className="text-xs text-slate-500">{asset.assetId}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{asset.category}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                                                ${asset.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                                                    asset.status === 'Assigned' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                                        'bg-slate-100 text-slate-700 border-slate-200'}`}>
                                                {asset.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {asset.assignedTo ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">
                                                        {asset.assignedTo.charAt(0).toUpperCase()}
                                                    </div>
                                                    <span className="text-slate-900">{asset.assignedTo}</span>
                                                </div>
                                            ) : (
                                                <span className="text-slate-400 italic">Unassigned</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => {
                                                    setSelectedAsset(asset);
                                                    setIsEditModalOpen(true);
                                                }}
                                                className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
                                            >
                                                Edit / View
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <CreateAssetModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSuccess={() => {
                    fetchAssets();
                    toast.success("Asset added successfully");
                }}
            />

            <EditAssetModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    console.log("AssetsPage: onClose called");
                    setIsEditModalOpen(false);
                    setSelectedAsset(null);
                }}
                onSuccess={() => {
                    console.log("AssetsPage: onSuccess called");
                    fetchAssets();
                }}
                asset={selectedAsset}
            />
        </div>
    );
}
