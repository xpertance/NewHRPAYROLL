module.exports = [
"[project]/src/components/ui/skeleton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Skeleton({ className = "", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `animate-pulse rounded-md bg-slate-100 dark:bg-slate-800 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/app/admin/organization/department/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DepartmentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel-x.js [app-ssr] (ecmascript) <export default as FilterX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.jsx [app-ssr] (ecmascript)");
// 'use client';
// import { useState, useEffect } from 'react';
// import {
//   Plus, Edit2, Trash2, Eye, Search, Filter,
//   Building2, Users, MapPin, Phone, Mail, Calendar,
//   X, Save, ArrowLeft, ExternalLink, ChevronDown, Check,
//   RefreshCw, FilterX, AlertCircle, CheckCircle, TrendingUp,
//   ChevronLeft, ChevronRight, MoreHorizontal, FolderOpen, Layers
// } from 'lucide-react';
// const API_URL = '/api/v1/admin/crm/departments';
// const ORGANIZATIONS_API = '/api/v1/admin/crm/organizations';
// const initialFormData = {
//   organizationName: '',
//   departmentName: '',
//   status: 'Active',
// };
// export default function DepartmentsPage() {
//   const [departments, setDepartments] = useState([]);
//   const [organizations, setOrganizations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [view, setView] = useState('list');
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [formData, setFormData] = useState(initialFormData);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [pagination, setPagination] = useState({
//     page: 1,
//     pages: 1,
//     total: 0,
//     limit: 9,
//   });
//   // Fetch organizations and employee types for dropdowns
//   useEffect(() => {
//     const fetchDropdownData = async () => {
//       try {
//         console.log('Fetching dropdown data...');
//         // Fetch organizations
//         const orgsRes = await fetch(`${ORGANIZATIONS_API}?page=1&limit=100`);
//         if (orgsRes.ok) {
//           const orgsData = await orgsRes.json();
//           const orgsList = orgsData.organizations || orgsData.data || [];
//           setOrganizations(orgsList);
//           console.log('Organizations loaded:', orgsList.length);
//         } else {
//           console.error('Failed to fetch organizations:', orgsRes.status);
//           setError('Failed to load organizations');
//         }
//       } catch (err) {
//         console.error('Error fetching dropdown data:', err);
//         setError('Failed to load some dropdown data. Using available options.');
//       }
//     };
//     fetchDropdownData();
//   }, []);
//   async function fetchDepartments(options = {}) {
//     const {
//       page = pagination.page || 1,
//       limit = pagination.limit || 9,
//       search = searchTerm,
//       status = statusFilter,
//     } = options;
//     try {
//       setLoading(!departments.length);
//       setRefreshing(departments.length > 0);
//       setError('');
//       const params = new URLSearchParams();
//       params.set('page', page.toString());
//       params.set('limit', limit.toString());
//       if (search) params.set('search', search);
//       if (status !== 'all') params.set('status', status);
//       const res = await fetch(`${API_URL}?${params.toString()}`);
//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || `Failed to fetch departments: ${res.status}`);
//       }
//       const data = await res.json();
//       // Handle different response structures
//       const departmentsList = data.data || data.departments || [];
//       setDepartments(departmentsList);
//       setPagination(data.pagination || {
//         page,
//         total: data.total || departmentsList.length,
//         pages: Math.ceil((data.total || departmentsList.length) / limit),
//         limit
//       });
//     } catch (err) {
//       console.error('Fetch departments error:', err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   }
//   useEffect(() => {
//     fetchDepartments({ page: 1 });
//   }, []);
//   useEffect(() => {
//     setPagination(prev => ({ ...prev, page: 1 }));
//   }, [searchTerm, statusFilter]);
//   useEffect(() => {
//     fetchDepartments({ page: pagination.page });
//   }, [pagination.page, pagination.limit, searchTerm, statusFilter]);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
//   const resetForm = () => {
//     setFormData(initialFormData);
//     setSelectedDepartment(null);
//     setError('');
//     setSuccess('');
//   };
//   const handleCreate = async () => {
//     try {
//       setIsSubmitting(true);
//       setError('');
//       setSuccess('');
//       if (!formData.organizationName || !formData.departmentName.trim()) {
//         setError('Organization, and Department Name are required');
//         return;
//       }
//       const res = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Failed to create department');
//       setSuccess('Department created successfully');
//       await fetchDepartments({ page: 1 });
//       resetForm();
//       setView('list');
//     } catch (err) {
//       console.error('Create department error:', err);
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   const handleUpdate = async () => {
//     if (!selectedDepartment?._id) return;
//     try {
//       setIsSubmitting(true);
//       setError('');
//       setSuccess('');
//       const res = await fetch(`${API_URL}/${selectedDepartment._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Failed to update department');
//       setSuccess('Department updated successfully');
//       await fetchDepartments({ page: pagination.page });
//       resetForm();
//       setView('list');
//     } catch (err) {
//       console.error('Update department error:', err);
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this department?')) return;
//     try {
//       const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Failed to delete department');
//       const nextPage = departments.length === 1 && pagination.page > 1
//         ? pagination.page - 1
//         : pagination.page;
//       await fetchDepartments({ page: nextPage });
//     } catch (err) {
//       console.error('Delete department error:', err);
//       setError(err.message);
//     }
//   };
//   const handleView = async (dept) => {
//     try {
//       const res = await fetch(`${API_URL}/${dept._id}`);
//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || 'Failed to fetch department details');
//       }
//       const fullDept = await res.json();
//       setSelectedDepartment(fullDept);
//       setView('view');
//     } catch (err) {
//       console.error('View department error:', err);
//       setError(err.message);
//     }
//   };
//   const handleEdit = async (dept) => {
//     try {
//       const res = await fetch(`${API_URL}/${dept._id}`);
//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || 'Failed to fetch department details');
//       }
//       const fullDept = await res.json();
//       setSelectedDepartment(fullDept);
//       setFormData({
//         organizationName: fullDept.organizationName || '',
//         departmentName: fullDept.departmentName || '',
//         status: fullDept.status || 'Active',
//       });
//       setView('edit');
//     } catch (err) {
//       console.error('Edit department error:', err);
//       setError(err.message);
//     }
//   };
//   // Helper function to get organization name
//   const getOrganizationName = (dept) => {
//     return dept?.organizationName || 'Unknown Organization';
//   };
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleStatusFilterChange = (e) => {
//     setStatusFilter(e.target.value);
//   };
//   const handlePageChange = async (newPage) => {
//     if (newPage < 1 || newPage > pagination.pages) return;
//     await fetchDepartments({ page: newPage });
//   };
//   const handleLimitChange = (value) => {
//     setPagination(prev => ({ ...prev, limit: Number(value), page: 1 }));
//   };
//   const hasActiveFilters = searchTerm || statusFilter !== 'all';
//   const StatusPill = ({ status }) => (
//     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${status === 'Active'
//         ? 'bg-green-50 text-green-700 border-green-200'
//         : 'bg-red-50 text-red-700 border-red-200'
//       }`}>
//       <div className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
//       {status}
//     </span>
//   );
//   const Pagination = () => {
//     const { pages, page, total, limit } = pagination;
//     const startIndex = (page - 1) * limit + 1;
//     const endIndex = Math.min(page * limit, total);
//     if (pages <= 1) return null;
//     const getPageNumbers = () => {
//       const delta = 2;
//       const range = [];
//       const rangeWithDots = [];
//       for (let i = 1; i <= pages; i++) {
//         if (i === 1 || i === pages || (i >= page - delta && i <= page + delta)) {
//           range.push(i);
//         }
//       }
//       let prev = 0;
//       for (const i of range) {
//         if (i - prev > 1) {
//           rangeWithDots.push("...");
//         }
//         rangeWithDots.push(i);
//         prev = i;
//       }
//       return rangeWithDots;
//     };
//     const pageNumbers = getPageNumbers();
//     return (
//       <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 p-4 bg-white rounded-lg border border-slate-200">
//         <div className="text-sm text-slate-600">
//           Showing <span className="font-semibold">{startIndex}-{endIndex}</span> of{' '}
//           <span className="font-semibold">{total}</span> departments
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="flex items-center gap-2 mr-4">
//             <span className="text-sm text-slate-600">Show:</span>
//             <select
//               value={limit}
//               onChange={(e) => handleLimitChange(e.target.value)}
//               className="border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
//             >
//               <option value={6}>6</option>
//               <option value={9}>9</option>
//               <option value={12}>12</option>
//               <option value={18}>18</option>
//               <option value={24}>24</option>
//             </select>
//           </div>
//           <button
//             onClick={() => handlePageChange(page - 1)}
//             disabled={page <= 1}
//             className="p-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </button>
//           <div className="flex items-center gap-1">
//             {pageNumbers.map((pageNum, index) => (
//               <div key={index}>
//                 {pageNum === "..." ? (
//                   <span className="flex items-center justify-center h-9 w-9 text-sm text-slate-500">
//                     <MoreHorizontal className="h-4 w-4" />
//                   </span>
//                 ) : (
//                   <button
//                     onClick={() => handlePageChange(pageNum)}
//                     className={`h-9 w-9 flex items-center justify-center text-sm font-medium border transition-colors rounded-md ${page === pageNum
//                         ? "bg-yellow-500 border-yellow-500 text-white hover:bg-yellow-600"
//                         : "border-slate-300 text-slate-600 hover:bg-slate-50"
//                       }`}
//                   >
//                     {pageNum}
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => handlePageChange(page + 1)}
//             disabled={page >= pages}
//             className="p-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//           >
//             <ChevronRight className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     );
//   };
//   if (loading && !refreshing) {
//     return (
//       <div className="min-h-screen bg-slate-50">
//         <div className="flex items-center justify-center h-screen">
//           <div className="text-center space-y-4">
//             <div className="w-12 h-12 border-4 border-slate-200 border-t-yellow-500 rounded-full animate-spin mx-auto"></div>
//             <div>
//               <h3 className="text-lg font-semibold text-slate-900">Loading Departments</h3>
//               <p className="text-sm text-slate-600 mt-1">Please wait while we fetch your data...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Header */}
//       <div className="bg-white border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="w-11 h-11 bg-yellow-500 rounded-xl flex items-center justify-center shadow-sm">
//                 <Layers className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-slate-900">Departments</h1>
//                 <p className="text-slate-600 text-sm mt-0.5">Manage departments, teams, and access</p>
//               </div>
//             </div>
//             {view === 'list' && (
//               <button
//                 onClick={() => {
//                   resetForm();
//                   setView('create');
//                 }}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors shadow-sm"
//               >
//                 <Plus className="w-4 h-4" />
//                 Add Department
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
//         {/* Analytics Overview */}
//         {view === 'list' && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-slate-600">Total Departments</p>
//                   <p className="text-2xl font-bold text-slate-900 mt-2">{pagination.total}</p>
//                   <p className="text-xs text-slate-500 mt-1">All departments</p>
//                 </div>
//                 <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center border border-yellow-100">
//                   <Layers className="w-6 h-6 text-yellow-600" />
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-slate-600">Active</p>
//                   <p className="text-2xl font-bold text-slate-900 mt-2">
//                     {departments.filter(dept => dept.status === 'Active').length}
//                   </p>
//                   <p className="text-xs text-slate-500 mt-1">Operational departments</p>
//                 </div>
//                 <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center border border-green-100">
//                   <CheckCircle className="w-6 h-6 text-green-600" />
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-slate-600">Organizations</p>
//                   <p className="text-2xl font-bold text-slate-900 mt-2">
//                     {new Set(departments.map(dept => dept.organizationName)).size}
//                   </p>
//                   <p className="text-xs text-slate-500 mt-1">Active organizations</p>
//                 </div>
//                 <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-blue-100">
//                   <Building2 className="w-6 h-6 text-blue-600" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {/* Controls Panel */}
//         <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
//           {view === 'list' && (
//             <div className="p-6 border-b border-slate-200">
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
//                 <div className="flex items-center space-x-3">
//                   <h2 className="text-xl font-semibold text-slate-900">
//                     Departments ({pagination.total})
//                   </h2>
//                   {hasActiveFilters && (
//                     <span className="inline-flex items-center px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200">
//                       Filtered Results
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <button
//                     onClick={() => fetchDepartments({ page: pagination.page })}
//                     disabled={refreshing}
//                     className="inline-flex items-center gap-2 px-4 py-2.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 disabled:opacity-50 transition-colors font-medium"
//                   >
//                     <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
//                     Refresh
//                   </button>
//                 </div>
//               </div>
//               {/* Search and Filters */}
//               <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
//                 <div className="lg:col-span-6">
//                   <label className="block text-sm font-medium text-slate-700 mb-2">Search Departments</label>
//                   <div className="relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
//                     <input
//                       type="text"
//                       placeholder="Search by department name "
//                       value={searchTerm}
//                       onChange={handleSearchChange}
//                       className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
//                     />
//                   </div>
//                 </div>
//                 <div className="lg:col-span-4">
//                   <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
//                   <select
//                     value={statusFilter}
//                     onChange={handleStatusFilterChange}
//                     className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-white"
//                   >
//                     <option value="all">All Status</option>
//                     <option value="Active">Active</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>
//                 <div className="lg:col-span-2 flex items-end">
//                   {hasActiveFilters && (
//                     <button
//                       onClick={async () => {
//                         setSearchTerm('');
//                         setStatusFilter('all');
//                         await fetchDepartments({ page: 1 });
//                       }}
//                       className="w-full px-4 py-2.5 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors font-medium"
//                       title="Clear all filters"
//                     >
//                       <FilterX className="w-4 h-4 mr-2" />
//                       Clear
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//           {/* Content */}
//           <div className="p-6">
//             {view === 'list' ? (
//               <>
//                 {error && (
//                   <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//                     <div className="flex items-start space-x-3">
//                       <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <h4 className="text-sm font-semibold text-red-800">Error</h4>
//                         <p className="text-sm text-red-700 mt-1">{error}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 {success && (
//                   <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//                     <div className="flex items-start space-x-3">
//                       <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <h4 className="text-sm font-semibold text-green-800">Success</h4>
//                         <p className="text-sm text-green-700 mt-1">{success}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 {departments.length === 0 ? (
//                   <div className="text-center py-16">
//                     <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                       <Layers className="w-8 h-8 text-slate-400" />
//                     </div>
//                     <h3 className="text-lg font-semibold text-slate-900 mb-2">
//                       {hasActiveFilters ? 'No departments match your criteria' : 'No departments found'}
//                     </h3>
//                     <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
//                       {hasActiveFilters
//                         ? 'Try adjusting your search terms or filters to find what you\'re looking for.'
//                         : 'Get started by adding your first department to manage your teams.'
//                       }
//                     </p>
//                     {hasActiveFilters ? (
//                       <button
//                         onClick={async () => {
//                           setSearchTerm('');
//                           setStatusFilter('all');
//                           await fetchDepartments({ page: 1 });
//                         }}
//                         className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 border border-yellow-200 text-sm font-medium transition-colors"
//                       >
//                         <FilterX className="w-4 h-4" />
//                         Clear All Filters
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => {
//                           resetForm();
//                           setView('create');
//                         }}
//                         className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors shadow-sm"
//                       >
//                         <Plus className="w-4 h-4" />
//                         Add First Department
//                       </button>
//                     )}
//                   </div>
//                 ) : (
//                   <>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {departments.map((dept) => (
//                         <div key={dept._id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
//                           <div className="p-6">
//                             <div className="flex items-start justify-between mb-4">
//                               <div className="flex items-center gap-3">
//                                 <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-sm">
//                                   <Layers className="w-6 h-6 text-white" />
//                                 </div>
//                                 <div className="flex-1">
//                                   <h3 className="font-semibold text-slate-900 text-sm">
//                                     {dept.departmentName}
//                                   </h3>
//                                   <p className="text-xs text-slate-500 mt-0.5">
//                                     {getOrganizationName(dept)}
//                                   </p>
//                                 </div>
//                               </div>
//                               <StatusPill status={dept.status} />
//                             </div>
//                             <div className="flex items-center justify-between pt-4 border-t border-slate-200">
//                               <div className="flex items-center gap-1">
//                                 <button
//                                   onClick={() => handleView(dept)}
//                                   className="p-2 hover:bg-slate-100 text-slate-400 hover:text-blue-600 rounded-lg transition-colors"
//                                   title="View"
//                                 >
//                                   <Eye className="w-4 h-4" />
//                                 </button>
//                                 <button
//                                   onClick={() => handleEdit(dept)}
//                                   className="p-2 hover:bg-slate-100 text-slate-400 hover:text-yellow-600 rounded-lg transition-colors"
//                                   title="Edit"
//                                 >
//                                   <Edit2 className="w-4 h-4" />
//                                 </button>
//                                 <button
//                                   onClick={() => handleDelete(dept._id)}
//                                   className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors"
//                                   title="Delete"
//                                 >
//                                   <Trash2 className="w-4 h-4" />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     <Pagination />
//                   </>
//                 )}
//               </>
//             ) : (
//               /* CREATE / EDIT / VIEW */
//               <>
//                 {(error) && (
//                   <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
//                     <div className="flex items-start space-x-3">
//                       <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <h4 className="text-sm font-semibold text-red-800">Error</h4>
//                         <p className="text-sm text-red-700 mt-1">{error}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 {success && (
//                   <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
//                     <div className="flex items-start space-x-3">
//                       <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <h4 className="text-sm font-semibold text-green-800">Success</h4>
//                         <p className="text-sm text-green-700 mt-1">{success}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <div className="max-w-4xl mx-auto">
//                   {/* Back Button */}
//                   <button
//                     onClick={() => {
//                       resetForm();
//                       setView('list');
//                     }}
//                     className="flex items-center gap-2 text-slate-600 hover:text-yellow-600 transition-colors mb-6 group"
//                   >
//                     <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
//                     <span className="font-medium">Back to List</span>
//                   </button>
//                   {view === 'view' ? (
//                     /* VIEW DETAILS - Simplified */
//                     <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
//                       {/* Header Section */}
//                       <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-8 py-6">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-5">
//                             <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
//                               <Layers className="w-7 h-7 text-white" />
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-3">
//                             <StatusPill status={selectedDepartment?.status} />
//                             <button
//                               onClick={() => handleEdit(selectedDepartment)}
//                               className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-medium transition-all hover:shadow-sm"
//                             >
//                               <Edit2 className="w-4 h-4" />
//                               Edit
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                       {/* Content */}
//                       <div className="p-8">
//                         <div className="grid lg:grid-cols-2 gap-8">
//                           {/* LEFT COLUMN – Basic Info */}
//                           <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
//                               <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                               Basic Information
//                             </h3>
//                             {/* Organization */}
//                             <div className="flex items-center gap-4 p-4 bg-slate-50 border rounded-xl">
//                               <Building2 className="w-4 h-4 text-yellow-600" />
//                               <div>
//                                 <p className="text-xs text-slate-500 uppercase">Organization</p>
//                                 <p className="font-medium">{getOrganizationName(selectedDepartment)}</p>
//                               </div>
//                             </div>
//                             {/* Status */}
//                             <div className="flex items-center gap-4 p-4 bg-slate-50 border rounded-xl">
//                               <CheckCircle className="w-4 h-4 text-yellow-600" />
//                               <div>
//                                 <p className="text-xs text-slate-500 uppercase">Status</p>
//                                 <p className="font-medium">{selectedDepartment?.status}</p>
//                               </div>
//                             </div>
//                           </div>
//                           {/* RIGHT COLUMN – Additional Details */}
//                           <div className="space-y-4">
//                             <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
//                               <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                               Additional Details
//                             </h3>
//                             {/* Created At */}
//                             <div className="flex items-center gap-4 p-4 bg-slate-50 border rounded-xl">
//                               <Calendar className="w-4 h-4 text-yellow-600" />
//                               <div>
//                                 <p className="text-xs text-slate-500 uppercase">Created At</p>
//                                 <p className="font-medium">
//                                   {new Date(selectedDepartment?.createdAt).toLocaleString()}
//                                 </p>
//                               </div>
//                             </div>
//                             {/* Updated At */}
//                             <div className="flex items-center gap-4 p-4 bg-slate-50 border rounded-xl">
//                               <Calendar className="w-4 h-4 text-yellow-600" />
//                               <div>
//                                 <p className="text-xs text-slate-500 uppercase">Updated At</p>
//                                 <p className="font-medium">
//                                   {new Date(selectedDepartment?.updatedAt).toLocaleString()}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     /* CREATE / EDIT FORM - Simplified */
//                     <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
//                       {/* Header */}
//                       <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-8 py-6">
//                         <div className="flex items-center gap-4">
//                           <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
//                             <Layers className="w-6 h-6 text-white" />
//                           </div>
//                           <div>
//                             <h2 className="text-2xl font-bold text-slate-900">
//                               {view === 'create' ? "Create New Department" : "Edit Department"}
//                             </h2>
//                             <p className="text-slate-600 mt-1">
//                               {view === "create"
//                                 ? "Add a new department under an organization"
//                                 : "Update department details"}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="p-8 space-y-8">
//                         {/* Basic Information */}
//                         <div className="space-y-6">
//                           <h3 className="text-lg font-semibold flex items-center gap-2">
//                             <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                             Basic Information
//                           </h3>
//                           {/* Organization Dropdown */}
//                           <div className="space-y-2">
//                             <label className="text-sm font-semibold">Organization *</label>
//                             <div className="flex items-center gap-3 bg-white border border-slate-300 rounded-xl px-4 py-3.5">
//                               <Building2 className="w-5 h-5 text-slate-500" />
//                               <select
//                                 name="organizationName"
//                                 value={formData.organizationName}
//                                 onChange={handleInputChange}
//                                 className="w-full bg-transparent outline-none"
//                               >
//                                 <option value="">-- Select Organization --</option>
//                                 {organizations.map((org) => (
//                                   <option key={org._id} value={org.name}>
//                                     {org.name}
//                                   </option>
//                                 ))}
//                               </select>
//                             </div>
//                             {organizations.length === 0 && (
//                               <p className="text-xs text-red-500">No organizations available. Please create an organization first.</p>
//                             )}
//                           </div>
//                           <div className="grid md:grid-cols-2 gap-6">
//                             <div className="space-y-2">
//                               <label className="text-sm font-semibold">Department Name *</label>
//                               <input
//                                 name="departmentName"
//                                 value={formData.departmentName}
//                                 onChange={handleInputChange}
//                                 className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
//                                 placeholder="Enter department name"
//                               />
//                             </div>
//                             <div className="space-y-2">
//                               <label className="text-sm font-semibold">Status</label>
//                               <select
//                                 name="status"
//                                 value={formData.status}
//                                 onChange={handleInputChange}
//                                 className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
//                               >
//                                 <option value="Active">Active</option>
//                                 <option value="Inactive">Inactive</option>
//                               </select>
//                             </div>
//                           </div>
//                         </div>
//                         {/* Actions */}
//                         <div className="flex justify-end gap-4 pt-8 border-t border-slate-200">
//                           <button
//                             onClick={() => {
//                               resetForm();
//                               setView('list');
//                             }}
//                             className="px-6 py-3 border border-slate-300 rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors font-medium"
//                           >
//                             Cancel
//                           </button>
//                           <button
//                             onClick={view === "create" ? handleCreate : handleUpdate}
//                             disabled={isSubmitting || !formData.organizationName || !formData.departmentName.trim()}
//                             className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2 font-medium"
//                           >
//                             <Save className="w-4 h-4" />
//                             {isSubmitting ? 'Saving...' : view === "create" ? "Create Department" : "Save Changes"}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
;
;
;
;
const API_URL = '/api/v1/admin/crm/departments';
const ORGANIZATIONS_API = '/api/v1/admin/crm/organizations';
const initialFormData = {
    organizationId: '',
    departmentName: '',
    status: 'Active',
    permissions: []
};
function DepartmentsPage() {
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [organizations, setOrganizations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availablePermissions, setAvailablePermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Dynamic permissions
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('list');
    const [selectedDepartment, setSelectedDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFormData);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        page: 1,
        pages: 1,
        total: 0,
        limit: 9
    });
    // Fetch organizations for dropdown
    const fetchOrganizations = async ()=>{
        try {
            const orgsRes = await fetch(`${ORGANIZATIONS_API}?page=1&limit=100`);
            if (orgsRes.ok) {
                const orgsData = await orgsRes.json();
                const orgsList = orgsData.organizations || orgsData.data || [];
                setOrganizations(orgsList);
            } else {
                console.error('Failed to fetch organizations:', orgsRes.status);
                setError('Failed to load organizations');
            }
        } catch (err) {
            console.error('Error fetching organizations:', err);
            setError('Failed to load organizations');
        }
    };
    async function fetchDepartments(options = {}) {
        const { page = pagination.page || 1, limit = pagination.limit || 9, search = searchTerm, status = statusFilter } = options;
        try {
            setLoading(!departments.length);
            setRefreshing(departments.length > 0);
            setError('');
            const params = new URLSearchParams();
            params.set('page', page.toString());
            params.set('limit', limit.toString());
            if (search) params.set('search', search);
            if (status !== 'all') params.set('status', status);
            const res = await fetch(`${API_URL}?${params.toString()}`);
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || `Failed to fetch departments: ${res.status}`);
            }
            const data = await res.json();
            const departmentsList = data.data || data.departments || [];
            setDepartments(departmentsList);
            setPagination(data.pagination || {
                page,
                total: data.total || departmentsList.length,
                pages: Math.ceil((data.total || departmentsList.length) / limit),
                limit
            });
        } catch (err) {
            console.error('Fetch departments error:', err);
            setError(err.message);
        } finally{
            setLoading(false);
            setRefreshing(false);
        }
    }
    const fetchPermissions = async ()=>{
        try {
            const res = await fetch('/api/v1/admin/crm/permissions?limit=-1');
            if (res.ok) {
                const data = await res.json();
                setAvailablePermissions(data.data || []);
            }
        } catch (error) {
            console.error('Error fetching permissions:', error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchDepartments({
            page: 1
        });
        fetchOrganizations();
        fetchPermissions();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPagination((prev)=>({
                ...prev,
                page: 1
            }));
    }, [
        searchTerm,
        statusFilter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchDepartments({
            page: pagination.page
        });
    }, [
        pagination.page,
        pagination.limit,
        searchTerm,
        statusFilter
    ]);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handlePermissionChange = (permission)=>{
        setFormData((prev)=>{
            const currentPermissions = prev.permissions || [];
            if (currentPermissions.includes(permission)) {
                return {
                    ...prev,
                    permissions: currentPermissions.filter((p)=>p !== permission)
                };
            } else {
                return {
                    ...prev,
                    permissions: [
                        ...currentPermissions,
                        permission
                    ]
                };
            }
        });
    };
    const resetForm = ()=>{
        setFormData(initialFormData);
        setSelectedDepartment(null);
        setError('');
        setSuccess('');
    };
    const handleCreate = async ()=>{
        try {
            setIsSubmitting(true);
            setError('');
            setSuccess('');
            if (!formData.organizationId || !formData.departmentName.trim()) {
                setError('Organization and Department Name are required');
                return;
            }
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to create department');
            setSuccess('Department created successfully');
            await fetchDepartments({
                page: 1
            });
            resetForm();
            setView('list');
        } catch (err) {
            console.error('Create department error:', err);
            setError(err.message);
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleUpdate = async ()=>{
        if (!selectedDepartment?._id) return;
        try {
            setIsSubmitting(true);
            setError('');
            setSuccess('');
            const res = await fetch(`${API_URL}/${selectedDepartment._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to update department');
            setSuccess('Department updated successfully');
            await fetchDepartments({
                page: pagination.page
            });
            resetForm();
            setView('list');
        } catch (err) {
            console.error('Update department error:', err);
            setError(err.message);
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleDelete = async (id)=>{
        if (!window.confirm('Are you sure you want to delete this department?')) return;
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to delete department');
            const nextPage = departments.length === 1 && pagination.page > 1 ? pagination.page - 1 : pagination.page;
            await fetchDepartments({
                page: nextPage
            });
        } catch (err) {
            console.error('Delete department error:', err);
            setError(err.message);
        }
    };
    const handleView = async (dept)=>{
        try {
            const res = await fetch(`${API_URL}/${dept._id}`);
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to fetch department details');
            }
            const fullDept = await res.json();
            setSelectedDepartment(fullDept);
            setView('view');
        } catch (err) {
            console.error('View department error:', err);
            setError(err.message);
        }
    };
    const handleEdit = async (dept)=>{
        try {
            const res = await fetch(`${API_URL}/${dept._id}`);
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to fetch department details');
            }
            const fullDept = await res.json();
            setSelectedDepartment(fullDept);
            setFormData({
                organizationId: fullDept.organizationId || '',
                departmentName: fullDept.departmentName || '',
                status: fullDept.status || 'Active',
                permissions: fullDept.permissions || []
            });
            setView('edit');
        } catch (err) {
            console.error('Edit department error:', err);
            setError(err.message);
        }
    };
    // Helper function to get organization name
    const getOrganizationName = (dept)=>{
        return dept?.organizationName || 'Unknown Organization';
    };
    const handleSearchChange = (e)=>{
        setSearchTerm(e.target.value);
    };
    const handleStatusFilterChange = (e)=>{
        setStatusFilter(e.target.value);
    };
    const handlePageChange = async (newPage)=>{
        if (newPage < 1 || newPage > pagination.pages) return;
        await fetchDepartments({
            page: newPage
        });
    };
    const handleLimitChange = (value)=>{
        setPagination((prev)=>({
                ...prev,
                limit: Number(value),
                page: 1
            }));
    };
    const hasActiveFilters = searchTerm || statusFilter !== 'all';
    const StatusPill = ({ status })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                    lineNumber: 1254,
                    columnNumber: 7
                }, this),
                status
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/organization/department/page.jsx",
            lineNumber: 1250,
            columnNumber: 5
        }, this);
    const Pagination = ()=>{
        const { pages, page, total, limit } = pagination;
        const startIndex = (page - 1) * limit + 1;
        const endIndex = Math.min(page * limit, total);
        if (pages <= 1) return null;
        const getPageNumbers = ()=>{
            const delta = 2;
            const range = [];
            const rangeWithDots = [];
            for(let i = 1; i <= pages; i++){
                if (i === 1 || i === pages || i >= page - delta && i <= page + delta) {
                    range.push(i);
                }
            }
            let prev = 0;
            for (const i of range){
                if (i - prev > 1) {
                    rangeWithDots.push("...");
                }
                rangeWithDots.push(i);
                prev = i;
            }
            return rangeWithDots;
        };
        const pageNumbers = getPageNumbers();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 p-4 bg-white rounded-lg border border-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-600",
                    children: [
                        "Showing ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: [
                                startIndex,
                                "-",
                                endIndex
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1287,
                            columnNumber: 19
                        }, this),
                        " of",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: total
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1288,
                            columnNumber: 11
                        }, this),
                        " departments"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                    lineNumber: 1286,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mr-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-slate-600",
                                    children: "Show:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: limit,
                                    onChange: (e)=>handleLimitChange(e.target.value),
                                    className: "border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 6,
                                            children: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1298,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 9,
                                            children: "9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1299,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 12,
                                            children: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 18,
                                            children: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1301,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 24,
                                            children: "24"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1302,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1291,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handlePageChange(page - 1),
                            disabled: page <= 1,
                            className: "p-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                lineNumber: 1310,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: pageNumbers.map((pageNum, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: pageNum === "..." ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center justify-center h-9 w-9 text-sm text-slate-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1317,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                        lineNumber: 1316,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePageChange(pageNum),
                                        className: `h-9 w-9 flex items-center justify-center text-sm font-medium border transition-colors rounded-md ${page === pageNum ? "bg-yellow-500 border-yellow-500 text-white hover:bg-yellow-600" : "border-slate-300 text-slate-600 hover:bg-slate-50"}`,
                                        children: pageNum
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                        lineNumber: 1320,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1314,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handlePageChange(page + 1),
                            disabled: page >= pages,
                            className: "p-2 border border-slate-300 rounded-md text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                lineNumber: 1338,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1333,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                    lineNumber: 1290,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/organization/department/page.jsx",
            lineNumber: 1285,
            columnNumber: 7
        }, this);
    };
    if (loading && !refreshing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-b border-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6 py-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "w-11 h-11 rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1353,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-8 w-48 mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1355,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-4 w-64"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1356,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1354,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1352,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-10 w-40 rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1359,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1351,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                        lineNumber: 1350,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                    lineNumber: 1349,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-xl border border-slate-200 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "h-4 w-32 mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1371,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "h-8 w-16 mb-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1372,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "h-3 w-24"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1373,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1370,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "w-12 h-12 rounded-xl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1375,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                        lineNumber: 1369,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1368,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1366,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-slate-200 shadow-sm p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-8 w-48"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1384,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-10 w-32"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1385,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1383,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-12 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-10 w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1388,
                                                columnNumber: 43
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1388,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-10 w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1389,
                                                columnNumber: 43
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1389,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-10 w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1390,
                                                columnNumber: 43
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1390,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1387,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1382,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                            className: "w-12 h-12 rounded-xl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1400,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                                    className: "h-4 w-32 mb-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                    lineNumber: 1402,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                                    className: "h-3 w-24"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                    lineNumber: 1403,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1401,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1399,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-6 w-16 rounded-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1406,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1398,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-slate-200 flex justify-end gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "w-8 h-8 rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1409,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "w-8 h-8 rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1410,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "w-8 h-8 rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1408,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1397,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                            lineNumber: 1395,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                    lineNumber: 1364,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/organization/department/page.jsx",
            lineNumber: 1347,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-11 bg-indigo-500 rounded-xl flex items-center justify-center shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1429,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                        lineNumber: 1428,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold text-slate-900",
                                                children: "Departments"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1432,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm mt-0.5",
                                                children: "Manage departments, teams, and access"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1433,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                        lineNumber: 1431,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                lineNumber: 1427,
                                columnNumber: 13
                            }, this),
                            view === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    resetForm();
                                    setView('create');
                                },
                                className: "inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                        lineNumber: 1445,
                                        columnNumber: 17
                                    }, this),
                                    "Add Department"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                lineNumber: 1438,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                        lineNumber: 1426,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                    lineNumber: 1425,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                lineNumber: 1424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-6 space-y-6",
                children: [
                    view === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-xl border border-slate-200 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-slate-600",
                                                    children: "Total Departments"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1460,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-slate-900 mt-2",
                                                    children: pagination.total
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1461,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 mt-1",
                                                    children: "All departments"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1462,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                className: "w-6 h-6 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1465,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1464,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1458,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                lineNumber: 1457,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-6 rounded-xl border border-slate-200 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-slate-600",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1473,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-slate-900 mt-2",
                                                    children: departments.filter((dept)=>dept.status === 'Active').length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1474,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 mt-1",
                                                    children: "Operational departments"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1477,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1472,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center border border-green-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-6 h-6 text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1480,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1479,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                    lineNumber: 1471,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                lineNumber: 1470,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                        lineNumber: 1456,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl border border-slate-200 shadow-sm",
                        children: [
                            view === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-semibold text-slate-900",
                                                        children: [
                                                            "Departments (",
                                                            pagination.total,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1510,
                                                        columnNumber: 19
                                                    }, this),
                                                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full border border-indigo-200",
                                                        children: "Filtered Results"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1509,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>fetchDepartments({
                                                            page: pagination.page
                                                        }),
                                                    disabled: refreshing,
                                                    className: "inline-flex items-center gap-2 px-4 py-2.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 disabled:opacity-50 transition-colors font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            className: `w-4 h-4 ${refreshing ? 'animate-spin' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1526,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Refresh"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1521,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1520,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                        lineNumber: 1508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lg:col-span-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-2",
                                                        children: "Search Departments"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1535,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1537,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Search by department name",
                                                                value: searchTerm,
                                                                onChange: handleSearchChange,
                                                                className: "w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1538,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1536,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1534,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lg:col-span-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-2",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1549,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: statusFilter,
                                                        onChange: handleStatusFilterChange,
                                                        className: "w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                children: "All Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1555,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Active",
                                                                children: "Active"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1556,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Inactive",
                                                                children: "Inactive"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1557,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1550,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1548,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lg:col-span-2 flex items-end",
                                                children: hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: async ()=>{
                                                        setSearchTerm('');
                                                        setStatusFilter('all');
                                                        await fetchDepartments({
                                                            page: 1
                                                        });
                                                    },
                                                    className: "w-full px-4 py-2.5 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors font-medium",
                                                    title: "Clear all filters",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterX$3e$__["FilterX"], {
                                                            className: "w-4 h-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1572,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Clear"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1563,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1561,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                        lineNumber: 1533,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                lineNumber: 1507,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: view === 'list' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1588,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-semibold text-red-800",
                                                                children: "Error"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1590,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-red-700 mt-1",
                                                                children: error
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1591,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1589,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1587,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1586,
                                            columnNumber: 19
                                        }, this),
                                        success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 p-4 bg-green-50 border border-green-200 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1600,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-semibold text-green-800",
                                                                children: "Success"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1602,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-green-700 mt-1",
                                                                children: success
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1603,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1601,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1599,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1598,
                                            columnNumber: 19
                                        }, this),
                                        departments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                        className: "w-8 h-8 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1612,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1611,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-900 mb-2",
                                                    children: hasActiveFilters ? 'No departments match your criteria' : 'No departments found'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1614,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 text-sm mb-6 max-w-md mx-auto",
                                                    children: hasActiveFilters ? 'Try adjusting your search terms or filters to find what you\'re looking for.' : 'Get started by adding your first department to manage your teams.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1617,
                                                    columnNumber: 21
                                                }, this),
                                                hasActiveFilters ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: async ()=>{
                                                        setSearchTerm('');
                                                        setStatusFilter('all');
                                                        await fetchDepartments({
                                                            page: 1
                                                        });
                                                    },
                                                    className: "inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 border border-indigo-200 text-sm font-medium transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterX$3e$__["FilterX"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1632,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Clear All Filters"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1624,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        resetForm();
                                                        setView('create');
                                                    },
                                                    className: "inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1643,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Add First Department"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1636,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1610,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                                    children: departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start justify-between mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-sm",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                                            className: "w-6 h-6 text-white"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1657,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1656,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                                className: "font-semibold text-slate-900 text-sm",
                                                                                                children: dept.departmentName
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                lineNumber: 1660,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-xs text-slate-500 mt-0.5",
                                                                                                children: getOrganizationName(dept)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                lineNumber: 1663,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1659,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1655,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                                                                status: dept.status
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1668,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                        lineNumber: 1654,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between pt-4 border-t border-slate-200",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleView(dept),
                                                                                    className: "p-2 hover:bg-slate-100 text-slate-400 hover:text-blue-600 rounded-lg transition-colors",
                                                                                    title: "View",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                        className: "w-4 h-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1678,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1673,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleEdit(dept),
                                                                                    className: "p-2 hover:bg-slate-100 text-slate-400 hover:text-indigo-600 rounded-lg transition-colors",
                                                                                    title: "Edit",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                        className: "w-4 h-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1685,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1680,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDelete(dept._id),
                                                                                    className: "p-2 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors",
                                                                                    title: "Delete",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        className: "w-4 h-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1692,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1687,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1672,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                        lineNumber: 1671,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1653,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, dept._id, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1652,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1650,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pagination, {}, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1700,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true) : /* CREATE / EDIT / VIEW */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1710,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-semibold text-red-800",
                                                                children: "Error"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1712,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-red-700 mt-1",
                                                                children: error
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1713,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1711,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1709,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1708,
                                            columnNumber: 19
                                        }, this),
                                        success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 p-4 bg-green-50 border border-green-200 rounded-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1722,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-semibold text-green-800",
                                                                children: "Success"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1724,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-green-700 mt-1",
                                                                children: success
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1725,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                        lineNumber: 1723,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                lineNumber: 1721,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1720,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-4xl mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        resetForm();
                                                        setView('list');
                                                    },
                                                    className: "flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors mb-6 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                            className: "h-5 w-5 transition-transform group-hover:-translate-x-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1740,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Back to List"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1741,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1733,
                                                    columnNumber: 19
                                                }, this),
                                                view === 'view' ? /* VIEW DETAILS */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-8 py-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                                    className: "w-7 h-7 text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1752,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1751,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                        className: "text-2xl font-bold text-slate-900",
                                                                                        children: selectedDepartment?.departmentName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1755,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-slate-600 mt-1",
                                                                                        children: getOrganizationName(selectedDepartment)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1756,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1754,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                        lineNumber: 1750,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                                                                status: selectedDepartment?.status
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1761,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleEdit(selectedDepartment),
                                                                                className: "inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-medium transition-all hover:shadow-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                        className: "w-4 h-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1766,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    "Edit"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1762,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                        lineNumber: 1760,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1749,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1748,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid lg:grid-cols-2 gap-8",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-lg font-semibold text-slate-900 flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-2 h-2 bg-indigo-500 rounded-full"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1779,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        "Basic Information"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1778,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-4 p-4 bg-slate-50 border rounded-xl",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                                            className: "w-4 h-4 text-indigo-600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1785,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-xs text-slate-500 uppercase",
                                                                                                    children: "Organization"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1787,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "font-medium",
                                                                                                    children: getOrganizationName(selectedDepartment)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1788,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1786,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1784,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-4 p-4 bg-slate-50 border rounded-xl",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                            className: "w-4 h-4 text-indigo-600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1794,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-xs text-slate-500 uppercase",
                                                                                                    children: "Status"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1796,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "font-medium",
                                                                                                    children: selectedDepartment?.status
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1797,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1795,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1793,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1777,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-lg font-semibold text-slate-900 flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-2 h-2 bg-indigo-500 rounded-full"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1805,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        "Additional Details"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1804,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-4 p-4 bg-slate-50 border rounded-xl",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                            className: "w-4 h-4 text-indigo-600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1811,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-xs text-slate-500 uppercase",
                                                                                                    children: "Created At"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1813,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "font-medium",
                                                                                                    children: new Date(selectedDepartment?.createdAt).toLocaleString()
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1814,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1812,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1810,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-4 p-4 bg-slate-50 border rounded-xl",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                            className: "w-4 h-4 text-indigo-600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1822,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-xs text-slate-500 uppercase",
                                                                                                    children: "Updated At"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1824,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "font-medium",
                                                                                                    children: new Date(selectedDepartment?.updatedAt).toLocaleString()
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1825,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1823,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1821,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1803,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                    lineNumber: 1775,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-8 pt-8 border-t border-slate-200",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-span-full",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-lg font-semibold text-slate-900 flex items-center gap-2 mb-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-2 h-2 bg-indigo-500 rounded-full"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1839,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    "Permissions"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1838,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "bg-slate-50 border rounded-xl p-6",
                                                                                children: selectedDepartment?.permissions?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex flex-wrap gap-2",
                                                                                    children: selectedDepartment.permissions.map((permSlug, index)=>{
                                                                                        // Find permission name from available permissions
                                                                                        const permObj = availablePermissions.find((p)=>p.slug === permSlug);
                                                                                        const permLabel = permObj ? permObj.name : permSlug.split('_').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-sm",
                                                                                            children: permLabel
                                                                                        }, index, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1851,
                                                                                            columnNumber: 39
                                                                                        }, this);
                                                                                    })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1844,
                                                                                    columnNumber: 33
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-slate-500 text-sm italic",
                                                                                    children: "No permissions assigned"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1861,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1842,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                        lineNumber: 1837,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                    lineNumber: 1836,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1774,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1746,
                                                    columnNumber: 21
                                                }, this) : /* CREATE / EDIT FORM */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-8 py-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                            className: "w-6 h-6 text-white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1875,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                        lineNumber: 1874,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                className: "text-2xl font-bold text-slate-900",
                                                                                children: view === 'create' ? "Create New Department" : "Edit Department"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1878,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-600 mt-1",
                                                                                children: view === "create" ? "Add a new department under an organization" : "Update department details"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                lineNumber: 1881,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                        lineNumber: 1877,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                lineNumber: 1873,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1872,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-8 space-y-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-2 h-2 bg-indigo-500 rounded-full"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1894,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                "Basic Information"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1893,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-semibold",
                                                                                    children: "Organization *"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1900,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-3 bg-white border border-slate-300 rounded-xl px-4 py-3.5",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                                            className: "w-5 h-5 text-slate-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1902,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                            name: "organizationId",
                                                                                            value: formData.organizationId,
                                                                                            onChange: handleInputChange,
                                                                                            className: "w-full bg-transparent outline-none",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                    value: "",
                                                                                                    children: "-- Select Organization --"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1909,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                organizations.map((org)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                        value: org._id,
                                                                                                        children: org.name
                                                                                                    }, org._id, false, {
                                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                        lineNumber: 1911,
                                                                                                        columnNumber: 35
                                                                                                    }, this))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1903,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1901,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                organizations.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-red-500",
                                                                                    children: "No organizations available. Please create an organization first."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1918,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1899,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid md:grid-cols-2 gap-6",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "text-sm font-semibold",
                                                                                            children: "Department Name *"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1924,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            name: "departmentName",
                                                                                            value: formData.departmentName,
                                                                                            onChange: handleInputChange,
                                                                                            className: "w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors",
                                                                                            placeholder: "Enter department name"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1925,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1923,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "text-sm font-semibold",
                                                                                            children: "Status"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1935,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                            name: "status",
                                                                                            value: formData.status,
                                                                                            onChange: handleInputChange,
                                                                                            className: "w-full px-4 py-3 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                    value: "Active",
                                                                                                    children: "Active"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1942,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                    value: "Inactive",
                                                                                                    children: "Inactive"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                    lineNumber: 1943,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1936,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1934,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1922,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                    lineNumber: 1892,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-2 h-2 bg-indigo-500 rounded-full"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1952,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                "Permissions"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1951,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                                                            children: [
                                                                                availablePermissions.map((permission)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: `
                                  relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all
                                  ${formData.permissions?.includes(permission.slug) ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 bg-white hover:border-slate-300'}
                                `,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 mr-3",
                                                                                                checked: formData.permissions?.includes(permission.slug) || false,
                                                                                                onChange: ()=>handlePermissionChange(permission.slug)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                lineNumber: 1968,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex flex-col",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: `text-sm font-medium ${formData.permissions?.includes(permission.slug) ? 'text-slate-900' : 'text-slate-600'}`,
                                                                                                        children: permission.name
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                        lineNumber: 1975,
                                                                                                        columnNumber: 35
                                                                                                    }, this),
                                                                                                    permission.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-xs text-slate-400",
                                                                                                        children: permission.description
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                        lineNumber: 1980,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                                lineNumber: 1974,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, permission.slug, true, {
                                                                                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                        lineNumber: 1958,
                                                                                        columnNumber: 31
                                                                                    }, this)),
                                                                                availablePermissions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "col-span-full py-8 text-center bg-slate-50 border border-slate-200 border-dashed rounded-xl",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-slate-500",
                                                                                            children: "No permissions found."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1987,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                            href: "/crm/permissions",
                                                                                            className: "text-indigo-600 font-medium hover:underline mt-1 inline-block",
                                                                                            children: "Manage Permissions"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                            lineNumber: 1988,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 1986,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1956,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                    lineNumber: 1950,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-end gap-4 pt-8 border-t border-slate-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                resetForm();
                                                                                setView('list');
                                                                            },
                                                                            className: "px-6 py-3 border border-slate-300 rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors font-medium",
                                                                            children: "Cancel"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 1996,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: view === "create" ? handleCreate : handleUpdate,
                                                                            disabled: isSubmitting || !formData.organizationId || !formData.departmentName.trim(),
                                                                            className: "px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2 font-medium",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                                    lineNumber: 2011,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                isSubmitting ? 'Saving...' : view === "create" ? "Create Department" : "Save Changes"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                            lineNumber: 2006,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                                    lineNumber: 1995,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                            lineNumber: 1890,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                                    lineNumber: 1870,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                            lineNumber: 1731,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                                lineNumber: 1582,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/organization/department/page.jsx",
                        lineNumber: 1505,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/organization/department/page.jsx",
                lineNumber: 1453,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/organization/department/page.jsx",
        lineNumber: 1422,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0gpkdm8._.js.map