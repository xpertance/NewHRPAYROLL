(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/skeleton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Skeleton({ className = "", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `animate-pulse rounded-md bg-slate-100 dark:bg-slate-800 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/validation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/validation.js
__turbopack_context__.s([
    "calculateAge",
    ()=>calculateAge,
    "calculateESIC",
    ()=>calculateESIC,
    "calculatePF",
    ()=>calculatePF,
    "calculateProfessionalTax",
    ()=>calculateProfessionalTax,
    "formatAadharNumber",
    ()=>formatAadharNumber,
    "formatPanNumber",
    ()=>formatPanNumber,
    "formatPhoneNumber",
    ()=>formatPhoneNumber,
    "validators",
    ()=>validators
]);
const validators = {
    // Alphabets + spaces only (1-40 chars)
    name: (v)=>/^[A-Za-z\s]{1,40}$/.test(v?.trim() || ''),
    // Required (non-empty string)
    required: (v)=>!!v && v.toString().trim().length > 0,
    // Email (RFC-like)
    email: (v)=>/^\S+@\S+\.\S+$/.test(v || ''),
    // Indian mobile – 10 digits starting with 6-9
    phone: (v)=>/^[6-9]\d{9}$/.test(v?.replace(/\D/g, '') || ''),
    // Positive number (including decimals) - for basic salary and amounts
    positiveNumber: (v)=>/^\d+(\.\d+)?$/.test(v) && parseFloat(v) > 0,
    // Account number – 9-18 digits
    accountNumber: (v)=>/^\d{9,18}$/.test(v),
    // IFSC – 11 alphanumeric characters
    ifsc: (v)=>/^[A-Z0-9]{11}$/.test((v || '').toUpperCase()),
    // PAN – 5 letters + 4 digits + 1 letter
    pan: (v)=>/^[A-Z]{5}\d{4}[A-Z]$/.test((v || '').toUpperCase()),
    // Aadhar – exactly 12 digits
    aadhar: (v)=>/^\d{12}$/.test(v),
    // ZIP – 6 digits
    zip: (v)=>!v || /^\d{6}$/.test(v),
    // Website URL (simple validator)
    website: (v)=>!v || /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v)
};
const formatPhoneNumber = (value)=>{
    const phone = value.replace(/\D/g, '');
    if (phone.length <= 3) return phone;
    if (phone.length <= 7) return `${phone.slice(0, 3)} ${phone.slice(3)}`;
    return `${phone.slice(0, 3)} ${phone.slice(3, 7)} ${phone.slice(7, 10)}`;
};
const formatPanNumber = (value)=>{
    const pan = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    if (pan.length <= 5) return pan;
    if (pan.length <= 9) return `${pan.slice(0, 5)} ${pan.slice(5)}`;
    return `${pan.slice(0, 5)} ${pan.slice(5, 9)} ${pan.slice(9, 10)}`;
};
const formatAadharNumber = (value)=>{
    const aadhar = value.replace(/\D/g, '');
    if (aadhar.length <= 4) return aadhar;
    if (aadhar.length <= 8) return `${aadhar.slice(0, 4)} ${aadhar.slice(4)}`;
    return `${aadhar.slice(0, 4)} ${aadhar.slice(4, 8)} ${aadhar.slice(8, 12)}`;
};
const calculateProfessionalTax = (grossSalary, gender, month)=>{
    // Determine if it's February (handles both numeric 2 and string "February"/"2")
    const isFebruary = month === 2 || month === "2" || typeof month === 'string' && month.toLowerCase() === 'february';
    // Maharashtra PT Rules:
    // Men:
    //   Up to ₹7,500: Nil
    //   ₹7,501 to ₹10,000: ₹175
    //   Above ₹10,000: ₹200 (₹300 in February)
    // Women:
    //   Up to ₹10,000: Nil
    //   Above ₹10,000: ₹200 (₹300 in February)
    if (gender === "Female") {
        if (grossSalary <= 10000) return 0;
        return isFebruary ? 300 : 200;
    } else {
        // Default to Male logic for "Male" or other genders as per Maharashtra slabs
        if (grossSalary <= 7500) return 0;
        if (grossSalary <= 10000) return 175;
        return isFebruary ? 300 : 200;
    }
};
const calculateAge = (dob)=>{
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
};
const calculatePF = (basicSalary)=>{
    // Ensure basicSalary is a number
    const basic = parseFloat(basicSalary) || 0;
    // Cap wages at 15,000 for PF calculation
    const pfWages = Math.min(basic, 15000);
    // Calculate PF (12% Employee, 13% Employer)
    // Rounding to nearest rupee as per standard practice
    const employeePF = Math.round(pfWages * 12 / 100);
    const employerPF = Math.round(pfWages * 13 / 100);
    return {
        employeePF,
        employerPF,
        wages: pfWages
    };
};
const calculateESIC = (grossSalary)=>{
    const gross = parseFloat(grossSalary) || 0;
    // ESIC ceiling is 21000
    // Note: Once covered, usually covered for contribution period even if salary exceeds, 
    // but for simple calculation we check 21000 limit.
    // Actually, if > 21000, ESIC is 0.
    // However, often users want to force ESIC. The flag esicApplicable handles that check externally.
    // This helper just calculates values assuming it IS applicable.
    const employeeESIC = Math.ceil(gross * 0.0075);
    const employerESIC = Math.ceil(gross * 0.0325);
    return {
        employeeESIC,
        employerESIC
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useValidation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useValidation",
    ()=>useValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/validation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useValidation = (initialState = {}, validationSchema = {})=>{
    _s();
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    /**
   * Validate a single field
   * @param {string} name - Field name
   * @param {any} value - Field value
   */ const validateField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useValidation.useCallback[validateField]": (name, value)=>{
            // Check if a validator exists for this field
            // It can be a direct function or a reference to the 'validators' object keys
            let validator = validationSchema[name];
            // If schema maps to a known validator string key (e.g. 'email'), use that
            if (typeof validator === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validators"][validator]) {
                validator = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validators"][validator];
            }
            if (!validator && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validators"][name]) {
                validator = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validators"][name];
            }
            // If nested field path (e.g. 'personalDetails.email'), finding validator might need custom logic
            // For now, simpler is better. Pass explicit validator name if needed.
            if (typeof validator === 'function') {
                const isValid = validator(value);
                setErrors({
                    "useValidation.useCallback[validateField]": (prev)=>{
                        const newErrors = {
                            ...prev
                        };
                        if (!isValid) {
                            // Default error messages based on field type
                            let message = "Invalid value";
                            if (name.includes('email')) message = "Invalid email address";
                            if (name.includes('phone') || name.includes('mobile')) message = "Invalid phone number (10 digits)";
                            if (name.includes('pan')) message = "Invalid PAN format";
                            if (name.includes('aadhar')) message = "Invalid Aadhar (12 digits)";
                            if (name.includes('zip') || name.includes('pin')) message = "Invalid Zip Code";
                            newErrors[name] = message;
                        } else {
                            delete newErrors[name];
                        }
                        return newErrors;
                    }
                }["useValidation.useCallback[validateField]"]);
                return isValid;
            }
            return true;
        }
    }["useValidation.useCallback[validateField]"], [
        validationSchema
    ]);
    /**
   * Handle onBlur event for instant validation feedback
   */ const handleBlur = (name, value)=>{
        setTouched((prev)=>({
                ...prev,
                [name]: true
            }));
        validateField(name, value);
    };
    /**
   * Setup for input elements
   * Use spread syntax: {...register('email', emailValue)}
   */ const register = (name, value, customValidatorName)=>{
        // Determine invalid state
        const isInvalid = !!errors[name];
        const isTouched = !!touched[name];
        return {
            name,
            value: value || '',
            onBlur: (e)=>handleBlur(name, e.target.value),
            onChange: (e)=>{
                // We don't control state here, just validation triggers if needed
                // Typically user updates state in their own onChange, then calls this? 
                // Actually, usually we prefer controlled components. 
                // This helper might be better as just getting the className.
                if (isTouched) {
                    validateField(name, e.target.value);
                }
            },
            className: `w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${isInvalid ? 'border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50' : 'border-slate-300 focus:ring-yellow-500 focus:border-yellow-500'}`
        };
    };
    // Return helper to get error message
    const getError = (name)=>errors[name];
    // Manual trigger
    const triggerValidation = (data)=>{
        const newErrors = {};
        let isValid = true;
        Object.keys(data).forEach((key)=>{
        // Logic to validate all...
        // For now, simpler: user calls validateField manually or we iterate schema
        });
        // ... implementation detail for full submit validation
        return isValid;
    };
    return {
        errors,
        touched,
        validateField,
        handleBlur,
        getError,
        setErrors
    };
};
_s(useValidation, "vk4kpFFTC3rfXwHxqashmErkwQM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/CreateEmployeeTypeModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateEmployeeTypeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$SessionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/SessionContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useValidation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const validationSchema = {
    organizationName: 'required',
    departmentName: 'required',
    employeeType: 'required'
};
function CreateEmployeeTypeModal({ isOpen, onClose, onSuccess, organizations }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        organizationName: "",
        departmentName: "",
        employeeType: ""
    });
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingDepartments, setIsLoadingDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [duplicateError, setDuplicateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$SessionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { errors, validateField, handleBlur, touched, setErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"])(formData, validationSchema);
    // Fetch departments when organization changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateEmployeeTypeModal.useEffect": ()=>{
            const fetchDepartments = {
                "CreateEmployeeTypeModal.useEffect.fetchDepartments": async ()=>{
                    if (!formData.organizationName) {
                        setDepartments([]);
                        setFormData({
                            "CreateEmployeeTypeModal.useEffect.fetchDepartments": (prev)=>({
                                    ...prev,
                                    departmentName: ""
                                })
                        }["CreateEmployeeTypeModal.useEffect.fetchDepartments"]);
                        return;
                    }
                    try {
                        setIsLoadingDepartments(true);
                        setError("");
                        const selectedOrg = organizations.find({
                            "CreateEmployeeTypeModal.useEffect.fetchDepartments.selectedOrg": (org)=>org.name === formData.organizationName
                        }["CreateEmployeeTypeModal.useEffect.fetchDepartments.selectedOrg"]);
                        if (!selectedOrg) {
                            setDepartments([]);
                            return;
                        }
                        // Fetch departments for this organization using organizationId
                        const response = await fetch(`/api/v1/admin/crm/departments?organizationId=${selectedOrg._id}`);
                        if (response.ok) {
                            const data = await response.json();
                            setDepartments(data.data || []);
                        } else {
                            const errorData = await response.json();
                            setError(errorData.error || "Failed to fetch departments");
                            setDepartments([]);
                        }
                    } catch (err) {
                        console.error("Error fetching departments:", err);
                        setError("Failed to fetch departments");
                        setDepartments([]);
                    } finally{
                        setIsLoadingDepartments(false);
                    }
                }
            }["CreateEmployeeTypeModal.useEffect.fetchDepartments"];
            fetchDepartments();
        }
    }["CreateEmployeeTypeModal.useEffect"], [
        formData.organizationName,
        organizations
    ]);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        validateField(name, value);
        // Clear department and employee type when organization changes
        if (name === "organizationName") {
            setFormData((prev)=>({
                    ...prev,
                    departmentName: "",
                    employeeType: ""
                }));
        }
        // Clear employee type when department changes
        if (name === "departmentName") {
            setFormData((prev)=>({
                    ...prev,
                    employeeType: ""
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setIsSubmitting(true);
            setError("");
            setDuplicateError("");
            // Validate form data
            let isValid = true;
            for(const key in validationSchema){
                if (!validateField(key, formData[key])) isValid = false;
            }
            if (!isValid) {
                setError("All fields are required");
                setIsSubmitting(false);
                return;
            }
            const payload = {
                organizationName: formData.organizationName.trim(),
                departmentName: formData.departmentName.trim(),
                employeeType: formData.employeeType.trim(),
                createdBy: user.id
            };
            console.log("Submitting employee type:", payload);
            const res = await fetch("/api/v1/admin/crm/employeetype", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok) {
                if (res.status === 409) {
                    setDuplicateError(data.error || "Employee type already exists for this department.");
                    return;
                }
                throw new Error(data.error || "Failed to create employee type");
            }
            onSuccess(data.employeeType);
            resetForm();
            onClose();
        } catch (err) {
            console.error("Error creating employee type:", err);
            setError(err.message || "Something went wrong while creating employee type.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const resetForm = ()=>{
        setFormData({
            organizationName: "",
            departmentName: "",
            employeeType: ""
        });
        setDepartments([]);
        setDepartments([]);
        setError("");
        setDuplicateError("");
        setErrors({});
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    const submitDisabled = isSubmitting || !formData.organizationName.trim() || !formData.departmentName.trim() || !formData.employeeType.trim();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 sticky top-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-slate-900",
                                                children: "Create Employee Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm",
                                                children: "Define a new employee category for your organization"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "p-2 hover:bg-slate-200 rounded-lg transition-colors",
                                disabled: isSubmitting,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                (error || duplicateError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-red-800",
                                        children: "Error"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-700 mt-1",
                                        children: error || duplicateError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                    lineNumber: 219,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-yellow-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-900",
                                                    children: "Organization Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-700",
                                                    children: [
                                                        "Organization ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                            lineNumber: 244,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "organizationName",
                                                            value: formData.organizationName,
                                                            onChange: handleInputChange,
                                                            onBlur: (e)=>handleBlur('organizationName', e.target.value),
                                                            className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all appearance-none bg-white ${errors.organizationName ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select an organization"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 21
                                                                }, this),
                                                                organizations.map((org)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: org.name,
                                                                        children: org.name
                                                                    }, org._id, false, {
                                                                        fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                            lineNumber: 247,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                            lineNumber: 263,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-yellow-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-900",
                                                    children: "Employee Type Configuration"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                    lineNumber: 272,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-slate-700",
                                                            children: [
                                                                "Department ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 32
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    name: "departmentName",
                                                                    value: formData.departmentName,
                                                                    onChange: handleInputChange,
                                                                    onBlur: (e)=>handleBlur('departmentName', e.target.value),
                                                                    disabled: !formData.organizationName || isLoadingDepartments,
                                                                    className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed ${errors.departmentName ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Select a department"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                                            lineNumber: 294,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: dept.departmentName,
                                                                                children: dept.departmentName
                                                                            }, dept._id, false, {
                                                                                fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                                                lineNumber: 296,
                                                                                columnNumber: 25
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 21
                                                                }, this),
                                                                isLoadingDepartments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 23
                                                                }, this),
                                                                !isLoadingDepartments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                            lineNumber: 283,
                                                            columnNumber: 19
                                                        }, this),
                                                        !formData.organizationName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "Please select an organization first"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                            lineNumber: 309,
                                                            columnNumber: 21
                                                        }, this),
                                                        formData.organizationName && departments.length === 0 && !isLoadingDepartments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "No departments found for this organization"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                            lineNumber: 312,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-slate-700",
                                                            children: [
                                                                "Employee Type ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "employeeType",
                                                            value: formData.employeeType,
                                                            onChange: handleInputChange,
                                                            onBlur: (e)=>handleBlur('employeeType', e.target.value),
                                                            className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all ${errors.employeeType ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                            placeholder: "e.g., Full-time, Contractor, Intern"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                    lineNumber: 317,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 p-6 border-t border-slate-200 sticky bottom-0 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: "px-5 py-2.5 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-all font-medium",
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: submitDisabled,
                                    className: "inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                lineNumber: 354,
                                                columnNumber: 19
                                            }, this),
                                            "Creating..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this),
                                            "Create Employee Type"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
            lineNumber: 190,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/CreateEmployeeTypeModal.jsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s(CreateEmployeeTypeModal, "zpRdHEio9nXECgpNxKfckFKZgKk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$SessionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"]
    ];
});
_c = CreateEmployeeTypeModal;
var _c;
__turbopack_context__.k.register(_c, "CreateEmployeeTypeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/CreateCategoryModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateCategoryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useValidation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// // components/modals/CreateCategoryModal.jsx
// "use client"
// import { useState, useEffect } from "react";
// import {
//   X,
//   Save,
//   Tag,
//   ChevronDown,
//   AlertCircle,
//   Loader2,
// } from "lucide-react";
// export default function CreateCategoryModal({ 
//   isOpen, 
//   onClose, 
//   onSuccess,
//   organizations 
// }) {
//   const [formData, setFormData] = useState({
//     organizationName: "",
//     departmentName: "",
//     employeeType: "",
//     employeeCategory: "",
//   });
//   const [availableDepts, setAvailableDepts] = useState([]);
//   const [availableEmployeeTypes, setAvailableEmployeeTypes] = useState([]);
//   const [isLoadingDepts, setIsLoadingDepts] = useState(false);
//   const [isLoadingEmployeeTypes, setIsLoadingEmployeeTypes] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [duplicateError, setDuplicateError] = useState("");
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // Reset dependent fields when organization or department changes
//     if (name === "organizationName") {
//       setFormData(prev => ({
//         ...prev,
//         departmentName: "",
//         employeeType: "",
//         employeeCategory: ""
//       }));
//       setAvailableDepts([]);
//       setAvailableEmployeeTypes([]);
//     } else if (name === "departmentName") {
//       setFormData(prev => ({
//         ...prev,
//         employeeType: "",
//         employeeCategory: ""
//       }));
//       setAvailableEmployeeTypes([]);
//     }
//   };
//   // Load departments when organization changes
//   useEffect(() => {
//     if (formData.organizationName) {
//       loadDepartments(formData.organizationName);
//     } else {
//       setAvailableDepts([]);
//       setFormData(prev => ({ ...prev, departmentName: "" }));
//     }
//   }, [formData.organizationName]);
//   // Load employee types when department changes
//   useEffect(() => {
//     if (formData.organizationName && formData.departmentName) {
//       loadEmployeeTypes(formData.organizationName, formData.departmentName);
//     } else {
//       setAvailableEmployeeTypes([]);
//       setFormData(prev => ({ ...prev, employeeType: "" }));
//     }
//   }, [formData.organizationName, formData.departmentName]);
//   async function loadDepartments(orgName) {
//     try {
//       setIsLoadingDepts(true);
//       setError("");
//       // Find the selected organization to get its ID
//       const selectedOrg = organizations.find(org => org.name === orgName);
//       if (!selectedOrg) {
//         setAvailableDepts([]);
//         return;
//       }
//       // Fetch departments for this organization
//       const response = await fetch(`/api/v1/admin/crm/departments?organizationId=${selectedOrg._id}&limit=100`);
//       if (response.ok) {
//         const data = await response.json();
//         console.log("Departments:", data);
//         const dept = data.data.filter((dept) => dept.organizationId === selectedOrg._id);
//         console.log("Filtered departments:", dept);
//         setAvailableDepts(dept || []);
//       } else {
//         const errorData = await response.json();
//         setError(errorData.error || "Failed to fetch departments");
//         setAvailableDepts([]);
//       }
//     } catch (err) {
//       console.error("Error loading departments:", err);
//       setError("Failed to fetch departments");
//       setAvailableDepts([]);
//     } finally {
//       setIsLoadingDepts(false);
//     }
//   }
//   async function loadEmployeeTypes(orgName, deptName) {
//     try {
//       setIsLoadingEmployeeTypes(true);
//       setError("");
//       // Find organization ID
//       const selectedOrg = organizations.find(org => org.name === orgName);
//       if (!selectedOrg) {
//         setAvailableEmployeeTypes([]);
//         return;
//       }
//       // Find department ID
//       const selectedDept = availableDepts.find(dept => dept.departmentName === deptName);
//       if (!selectedDept) {
//         setAvailableEmployeeTypes([]);
//         return;
//       }
//       // Fetch employee types for this organization and department
//       const response = await fetch(
//         `/api/v1/admin/crm/employeetype?organizationId=${selectedOrg._id}&departmentId=${selectedDept._id}&limit=1000`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         console.log("Employee types:", data);
//         // Extract unique employee types
//         const employeeTypes = [
//           ...new Set(
//             data.data.map(item => item.employeeType).filter(Boolean)
//           )
//         ].sort();
//         console.log("Filtered employee types:", employeeTypes);
//         setAvailableEmployeeTypes(employeeTypes);
//       } else {
//         const errorData = await response.json();
//         setError(errorData.error || "Failed to fetch employee types");
//         setAvailableEmployeeTypes([]);
//       }
//     } catch (err) {
//       console.error("Error loading employee types:", err);
//       setError("Failed to fetch employee types");
//       setAvailableEmployeeTypes([]);
//     } finally {
//       setIsLoadingEmployeeTypes(false);
//     }
//   }
//   const handleSubmit = async () => {
//     try {
//       setIsSubmitting(true);
//       setError("");
//       setDuplicateError("");
//       const res = await fetch("/api/v1/admin/crm/employeecategory", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         if (res.status === 409) {
//           setDuplicateError(data.error || "Category already exists for this organization and department.");
//           return;
//         }
//         throw new Error(data.error || "Failed to create employee category");
//       }
//       onSuccess();
//       resetForm();
//       onClose();
//     } catch (err) {
//       setError(err.message || "Something went wrong while creating employee category.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   const resetForm = () => {
//     setFormData({
//       organizationName: "",
//       departmentName: "",
//       employeeType: "",
//       employeeCategory: "",
//     });
//     setAvailableDepts([]);
//     setAvailableEmployeeTypes([]);
//     setError("");
//     setDuplicateError("");
//   };
//   const handleClose = () => {
//     resetForm();
//     onClose();
//   };
//   const submitDisabled = isSubmitting ||
//     !formData.organizationName ||
//     !formData.departmentName ||
//     !formData.employeeType ||
//     !formData.employeeCategory.trim();
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 sticky top-0">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
//                 <Tag className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold text-slate-900">
//                   Add New Category
//                 </h2>
//                 <p className="text-slate-600 text-sm">
//                   Create a new employee category for selected organization and department
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={handleClose}
//               className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//         {/* Error Messages */}
//         {(error || duplicateError) && (
//           <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
//             <div className="flex items-start space-x-3">
//               <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
//               <div>
//                 <h4 className="text-sm font-semibold text-red-800">Error</h4>
//                 <p className="text-sm text-red-700 mt-1">{error || duplicateError}</p>
//               </div>
//             </div>
//           </div>
//         )}
//         {/* Form Content */}
//         <div className="p-6 space-y-6">
//           {/* Organization Selection */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//               <h3 className="text-lg font-semibold text-slate-900">
//                 Organization Details
//               </h3>
//             </div>
//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-slate-700">
//                 Organization <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <select
//                   name="organizationName"
//                   value={formData.organizationName}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white"
//                 >
//                   <option value="">Select an organization</option>
//                   {organizations.map((org) => (
//                     <option key={org._id} value={org.name}>
//                       {org.name}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//               </div>
//             </div>
//           </div>
//           {/* Department Selection */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//               <h3 className="text-lg font-semibold text-slate-900">
//                 Department Selection
//               </h3>
//             </div>
//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-slate-700">
//                 Department <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <select
//                   name="departmentName"
//                   value={formData.departmentName}
//                   onChange={handleInputChange}
//                   disabled={!formData.organizationName || isLoadingDepts}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed"
//                 >
//                   <option value="">Select a department</option>
//                   {availableDepts.map((dept) => (
//                     <option key={dept._id} value={dept.departmentName}>
//                       {dept.departmentName}
//                     </option>
//                   ))}
//                 </select>
//                 {isLoadingDepts ? (
//                   <Loader2 className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin" />
//                 ) : (
//                   <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                 )}
//               </div>
//               {!formData.organizationName && (
//                 <p className="text-xs text-slate-500">Please select an organization first</p>
//               )}
//               {formData.organizationName && availableDepts.length === 0 && !isLoadingDepts && (
//                 <p className="text-xs text-slate-500">No departments found for this organization</p>
//               )}
//             </div>
//           </div>
//           {/* Category Configuration */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//               <h3 className="text-lg font-semibold text-slate-900">
//                 Category Configuration
//               </h3>
//             </div>
//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label className="block text-sm font-semibold text-slate-700">
//                   Employee Type <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <select
//                     name="employeeType"
//                     value={formData.employeeType}
//                     onChange={handleInputChange}
//                     disabled={!formData.departmentName || isLoadingEmployeeTypes}
//                     className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed"
//                   >
//                     <option value="">Select employee type</option>
//                     {availableEmployeeTypes.map((type) => (
//                       <option key={type} value={type}>
//                         {type}
//                       </option>
//                     ))}
//                   </select>
//                   {isLoadingEmployeeTypes ? (
//                     <Loader2 className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin" />
//                   ) : (
//                     <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                   )}
//                 </div>
//                 {!formData.departmentName && (
//                   <p className="text-xs text-slate-500">Please select a department first</p>
//                 )}
//                 {formData.departmentName && availableEmployeeTypes.length === 0 && !isLoadingEmployeeTypes && (
//                   <p className="text-xs text-slate-500">No employee types found for this department</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <label className="block text-sm font-semibold text-slate-700">
//                   Employee Category <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   name="employeeCategory"
//                   value={formData.employeeCategory}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
//                   placeholder="e.g., Senior Developer, Team Lead"
//                 />
//                 <p className="text-xs text-slate-500">
//                   New category name to create
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Form Actions */}
//         <div className="flex justify-end gap-3 p-6 border-t border-slate-200 sticky bottom-0 bg-white">
//           <button
//             onClick={handleClose}
//             className="px-5 py-2.5 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-all font-medium"
//             disabled={isSubmitting}
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             disabled={submitDisabled}
//             className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? (
//               <>
//                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                 Creating...
//               </>
//             ) : (
//               <>
//                 <Save className="w-4 h-4" />
//                 Create Category
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// components/modals/CreateCategoryModal.jsx
"use client";
;
;
;
const validationSchema = {
    organizationName: 'required',
    departmentName: 'required',
    employeeType: 'required',
    employeeCategory: 'required'
};
function CreateCategoryModal({ isOpen, onClose, onSuccess, organizations }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        organizationName: "",
        departmentName: "",
        employeeType: "",
        employeeCategory: "",
        supportedDocuments: []
    });
    const [availableDepts, setAvailableDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableEmployeeTypes, setAvailableEmployeeTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableDocuments, setAvailableDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredDocuments, setFilteredDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingDepts, setIsLoadingDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingEmployeeTypes, setIsLoadingEmployeeTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingDocuments, setIsLoadingDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [duplicateError, setDuplicateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { errors, validateField, handleBlur, touched, setErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"])(formData, validationSchema);
    // Handle outside click to close dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCategoryModal.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsDropdownOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "CreateCategoryModal.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["CreateCategoryModal.useEffect"];
        }
    }["CreateCategoryModal.useEffect"], []);
    // Filter documents based on search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCategoryModal.useEffect": ()=>{
            if (searchQuery.trim() === "") {
                setFilteredDocuments(availableDocuments);
            } else {
                const filtered = availableDocuments.filter({
                    "CreateCategoryModal.useEffect.filtered": (doc)=>doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.description?.toLowerCase().includes(searchQuery.toLowerCase()) || doc.category?.toLowerCase().includes(searchQuery.toLowerCase())
                }["CreateCategoryModal.useEffect.filtered"]);
                setFilteredDocuments(filtered);
            }
        }
    }["CreateCategoryModal.useEffect"], [
        searchQuery,
        availableDocuments
    ]);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        validateField(name, value);
        // Reset dependent fields when organization or department changes
        if (name === "organizationName") {
            setFormData((prev)=>({
                    ...prev,
                    departmentName: "",
                    employeeType: "",
                    employeeCategory: "",
                    supportedDocuments: []
                }));
            setAvailableDepts([]);
            setAvailableEmployeeTypes([]);
        } else if (name === "departmentName") {
            setFormData((prev)=>({
                    ...prev,
                    employeeType: "",
                    employeeCategory: "",
                    supportedDocuments: []
                }));
            setAvailableEmployeeTypes([]);
        }
    };
    // Enhanced document selection handlers
    const toggleDocument = (docId)=>{
        setFormData((prev)=>{
            if (prev.supportedDocuments.includes(docId)) {
                return {
                    ...prev,
                    supportedDocuments: prev.supportedDocuments.filter((id)=>id !== docId)
                };
            } else {
                return {
                    ...prev,
                    supportedDocuments: [
                        ...prev.supportedDocuments,
                        docId
                    ]
                };
            }
        });
    };
    const removeDocument = (docId)=>{
        setFormData((prev)=>({
                ...prev,
                supportedDocuments: prev.supportedDocuments.filter((id)=>id !== docId)
            }));
    };
    const getSelectedDocumentNames = ()=>{
        return formData.supportedDocuments.map((docId)=>{
            const doc = availableDocuments.find((d)=>d._id === docId);
            return doc ? doc.name : docId;
        });
    };
    const clearAllDocuments = ()=>{
        setFormData((prev)=>({
                ...prev,
                supportedDocuments: []
            }));
    };
    // Load departments when organization changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCategoryModal.useEffect": ()=>{
            if (formData.organizationName) {
                loadDepartments(formData.organizationName);
            } else {
                setAvailableDepts([]);
                setFormData({
                    "CreateCategoryModal.useEffect": (prev)=>({
                            ...prev,
                            departmentName: ""
                        })
                }["CreateCategoryModal.useEffect"]);
            }
        }
    }["CreateCategoryModal.useEffect"], [
        formData.organizationName
    ]);
    // Load employee types when department changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCategoryModal.useEffect": ()=>{
            if (formData.organizationName && formData.departmentName) {
                loadEmployeeTypes(formData.organizationName, formData.departmentName);
            } else {
                setAvailableEmployeeTypes([]);
                setFormData({
                    "CreateCategoryModal.useEffect": (prev)=>({
                            ...prev,
                            employeeType: ""
                        })
                }["CreateCategoryModal.useEffect"]);
            }
        }
    }["CreateCategoryModal.useEffect"], [
        formData.organizationName,
        formData.departmentName
    ]);
    // Load documents when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCategoryModal.useEffect": ()=>{
            loadDocuments();
        }
    }["CreateCategoryModal.useEffect"], []);
    async function loadDepartments(orgName) {
        try {
            setIsLoadingDepts(true);
            setError("");
            const selectedOrg = organizations.find((org)=>org.name === orgName);
            if (!selectedOrg) {
                setAvailableDepts([]);
                return;
            }
            const response = await fetch(`/api/v1/admin/crm/departments?organizationId=${selectedOrg._id}&limit=100`);
            if (response.ok) {
                const data = await response.json();
                const dept = data.data.filter((dept)=>dept.organizationId === selectedOrg._id);
                setAvailableDepts(dept || []);
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to fetch departments");
                setAvailableDepts([]);
            }
        } catch (err) {
            console.error("Error loading departments:", err);
            setError("Failed to fetch departments");
            setAvailableDepts([]);
        } finally{
            setIsLoadingDepts(false);
        }
    }
    async function loadEmployeeTypes(orgName, deptName) {
        try {
            setIsLoadingEmployeeTypes(true);
            setError("");
            const selectedOrg = organizations.find((org)=>org.name === orgName);
            if (!selectedOrg) {
                setAvailableEmployeeTypes([]);
                return;
            }
            const selectedDept = availableDepts.find((dept)=>dept.departmentName === deptName);
            if (!selectedDept) {
                setAvailableEmployeeTypes([]);
                return;
            }
            const response = await fetch(`/api/v1/admin/crm/employeetype?organizationId=${selectedOrg._id}&departmentId=${selectedDept._id}&limit=1000`);
            if (response.ok) {
                const data = await response.json();
                const employeeTypes = [
                    ...new Set(data.data.map((item)=>item.employeeType).filter(Boolean))
                ].sort();
                setAvailableEmployeeTypes(employeeTypes);
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to fetch employee types");
                setAvailableEmployeeTypes([]);
            }
        } catch (err) {
            console.error("Error loading employee types:", err);
            setError("Failed to fetch employee types");
            setAvailableEmployeeTypes([]);
        } finally{
            setIsLoadingEmployeeTypes(false);
        }
    }
    async function loadDocuments() {
        try {
            setIsLoadingDocuments(true);
            setError("");
            const response = await fetch(`/api/v1/admin/crm/documents?limit=1000`);
            if (response.ok) {
                const data = await response.json();
                console.log("Documents:", data);
                // Add any additional document metadata here if needed
                const enhancedDocs = (data.data || []).map((doc)=>({
                        ...doc,
                        category: doc.category || "Uncategorized",
                        isMandatory: doc.isMandatory || false,
                        fileType: doc.fileType || "document"
                    }));
                setAvailableDocuments(enhancedDocs);
                setFilteredDocuments(enhancedDocs);
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to fetch documents");
                setAvailableDocuments([]);
                setFilteredDocuments([]);
            }
        } catch (err) {
            console.error("Error loading documents:", err);
            setError("Failed to fetch documents");
            setAvailableDocuments([]);
            setFilteredDocuments([]);
        } finally{
            setIsLoadingDocuments(false);
        }
    }
    console.log(filteredDocuments);
    const handleSubmit = async ()=>{
        try {
            setIsSubmitting(true);
            setError("");
            setDuplicateError("");
            // Validate all fields
            let isValid = true;
            for(const key in validationSchema){
                if (!validateField(key, formData[key])) isValid = false;
            }
            if (!isValid) {
                setError("Please fill in all required fields.");
                setIsSubmitting(false);
                return;
            }
            const res = await fetch("/api/v1/admin/crm/employeecategory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) {
                if (res.status === 409) {
                    setDuplicateError(data.error || "Category already exists for this organization and department.");
                    return;
                }
                throw new Error(data.error || "Failed to create employee category");
            }
            onSuccess();
            resetForm();
            onClose();
        } catch (err) {
            setError(err.message || "Something went wrong while creating employee category.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const resetForm = ()=>{
        setFormData({
            organizationName: "",
            departmentName: "",
            employeeType: "",
            employeeCategory: "",
            supportedDocuments: []
        });
        setAvailableDepts([]);
        setAvailableEmployeeTypes([]);
        setSearchQuery("");
        setIsDropdownOpen(false);
        setAvailableEmployeeTypes([]);
        setError("");
        setDuplicateError("");
        setErrors({});
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    const submitDisabled = isSubmitting || !formData.organizationName || !formData.departmentName || !formData.employeeType || !formData.employeeCategory.trim();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 sticky top-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 810,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                        lineNumber: 809,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-slate-900",
                                                children: "Add New Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                lineNumber: 813,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm",
                                                children: "Create a new employee category for selected organization and department"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                lineNumber: 816,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                        lineNumber: 812,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                lineNumber: 808,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "p-2 hover:bg-slate-200 rounded-lg transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 825,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                lineNumber: 821,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                        lineNumber: 807,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                    lineNumber: 806,
                    columnNumber: 9
                }, this),
                (error || duplicateError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                lineNumber: 834,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-red-800",
                                        children: "Error"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                        lineNumber: 836,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-700 mt-1",
                                        children: error || duplicateError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                        lineNumber: 837,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                lineNumber: 835,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                        lineNumber: 833,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                    lineNumber: 832,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 848,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Organization Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 849,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 847,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Organization ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 856,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 855,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-4 top-1/2 transform -translate-y-1/2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                        className: "w-4 h-4 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                        lineNumber: 860,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 859,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "organizationName",
                                                    value: formData.organizationName,
                                                    onChange: handleInputChange,
                                                    onBlur: (e)=>handleBlur('organizationName', e.target.value),
                                                    className: `w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white ${errors.organizationName ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select an organization"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 871,
                                                            columnNumber: 19
                                                        }, this),
                                                        organizations.map((org)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: org.name,
                                                                children: org.name
                                                            }, org._id, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 873,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 862,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 878,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 858,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 854,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                            lineNumber: 846,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 886,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Department Selection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 887,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 885,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Department ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 894,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 893,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-4 top-1/2 transform -translate-y-1/2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        className: "w-4 h-4 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                        lineNumber: 898,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 897,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "departmentName",
                                                    value: formData.departmentName,
                                                    onChange: handleInputChange,
                                                    onBlur: (e)=>handleBlur('departmentName', e.target.value),
                                                    disabled: !formData.organizationName || isLoadingDepts,
                                                    className: `w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed ${errors.departmentName ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select a department"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 910,
                                                            columnNumber: 19
                                                        }, this),
                                                        availableDepts.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: dept.departmentName,
                                                                children: dept.departmentName
                                                            }, dept._id, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 912,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 900,
                                                    columnNumber: 17
                                                }, this),
                                                isLoadingDepts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 918,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 920,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 896,
                                            columnNumber: 15
                                        }, this),
                                        !formData.organizationName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Please select an organization first"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 924,
                                            columnNumber: 17
                                        }, this),
                                        formData.organizationName && availableDepts.length === 0 && !isLoadingDepts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "No departments found for this organization"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 927,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 892,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                            lineNumber: 884,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 935,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Category Configuration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 936,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 934,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-700",
                                                    children: [
                                                        "Employee Type ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 944,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 943,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-4 top-1/2 transform -translate-y-1/2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 948,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 947,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "employeeType",
                                                            value: formData.employeeType,
                                                            onChange: handleInputChange,
                                                            onBlur: (e)=>handleBlur('employeeType', e.target.value),
                                                            disabled: !formData.departmentName || isLoadingEmployeeTypes,
                                                            className: `w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed ${errors.employeeType ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select employee type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                    lineNumber: 960,
                                                                    columnNumber: 21
                                                                }, this),
                                                                availableEmployeeTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: type,
                                                                        children: type
                                                                    }, type, false, {
                                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                        lineNumber: 962,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 950,
                                                            columnNumber: 19
                                                        }, this),
                                                        isLoadingEmployeeTypes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 968,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 970,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 946,
                                                    columnNumber: 17
                                                }, this),
                                                !formData.departmentName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Please select a department first"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 974,
                                                    columnNumber: 19
                                                }, this),
                                                formData.departmentName && availableEmployeeTypes.length === 0 && !isLoadingEmployeeTypes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "No employee types found for this department"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 977,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 942,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-700",
                                                    children: [
                                                        "Employee Category ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 983,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 982,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-4 top-1/2 transform -translate-y-1/2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 987,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 986,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "employeeCategory",
                                                            value: formData.employeeCategory,
                                                            onChange: handleInputChange,
                                                            onBlur: (e)=>handleBlur('employeeCategory', e.target.value),
                                                            className: `w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${errors.employeeCategory ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                            placeholder: "e.g., Senior Developer, Team Lead"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 989,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 985,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "New category name to create"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1000,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 981,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 941,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                            lineNumber: 933,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-green-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1011,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-900",
                                                    children: "Supported Documents"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1012,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 1010,
                                            columnNumber: 15
                                        }, this),
                                        formData.supportedDocuments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: clearAllDocuments,
                                            className: "text-sm text-red-600 hover:text-red-800 flex items-center gap-1 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 19
                                                }, this),
                                                "Clear All"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 1017,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 1009,
                                    columnNumber: 13
                                }, this),
                                formData.supportedDocuments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 border border-slate-200 rounded-xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1031,
                                                    columnNumber: 19
                                                }, this),
                                                "Selected Documents (",
                                                formData.supportedDocuments.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 1030,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: getSelectedDocumentNames().map((docName, index)=>{
                                                const docId = formData.supportedDocuments[index];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 bg-white border border-green-200 rounded-lg px-3 py-1.5 hover:border-green-300 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-3 h-3 text-green-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 1042,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-slate-800",
                                                            children: docName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 1043,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeDocument(docId),
                                                            className: "text-slate-400 hover:text-red-500 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 1048,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 1044,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, docId, true, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1038,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 1034,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 1029,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Select Documents ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 font-normal",
                                                    children: "(Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 1059,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            ref: dropdownRef,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 px-4 py-3 border border-slate-300 rounded-xl cursor-pointer hover:border-slate-400 transition-colors",
                                                    onClick: ()=>setIsDropdownOpen(!isDropdownOpen),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            className: "w-4 h-4 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 1069,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Search documents...",
                                                            value: searchQuery,
                                                            onChange: (e)=>setSearchQuery(e.target.value),
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "flex-1 bg-transparent outline-none placeholder-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 1070,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 1078,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1065,
                                                    columnNumber: 17
                                                }, this),
                                                isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-80 overflow-y-auto",
                                                    children: isLoadingDocuments ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center p-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "w-6 h-6 text-slate-400 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 1087,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-slate-600",
                                                                children: "Loading documents..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 1088,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                        lineNumber: 1086,
                                                        columnNumber: 23
                                                    }, this) : filteredDocuments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6 text-center text-slate-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "w-8 h-8 mx-auto mb-2 text-slate-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 1092,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "No documents found"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 1093,
                                                                columnNumber: 25
                                                            }, this),
                                                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm mt-1",
                                                                children: "Try a different search term"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 1095,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                        lineNumber: 1091,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "divide-y divide-slate-100",
                                                        children: filteredDocuments.map((doc)=>{
                                                            const isSelected = formData.supportedDocuments.includes(doc._id);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center justify-between p-3 hover:bg-slate-50 cursor-pointer transition-colors ${isSelected ? 'bg-green-50 border-l-4 border-l-green-500' : ''}`,
                                                                onClick: ()=>toggleDocument(doc._id),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-5 h-5 border rounded flex items-center justify-center mt-0.5 ${isSelected ? 'bg-green-500 border-green-500' : 'border-slate-300'}`,
                                                                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    className: "w-3 h-3 text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                    lineNumber: 1116,
                                                                                    columnNumber: 50
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                lineNumber: 1111,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "font-medium text-slate-900",
                                                                                                children: doc.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                                lineNumber: 1120,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            doc.isMandatory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded",
                                                                                                children: "Required"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                                lineNumber: 1124,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                        lineNumber: 1119,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    doc.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-slate-600 mt-1",
                                                                                        children: doc.description
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                        lineNumber: 1130,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2 mt-1",
                                                                                        children: [
                                                                                            doc.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "inline-block text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded",
                                                                                                children: doc.category
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                                lineNumber: 1136,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            doc.fileType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "inline-block text-xs text-blue-600 bg-slate-50 px-2 py-0.5 rounded",
                                                                                                children: doc.fileType
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                                lineNumber: 1141,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                        lineNumber: 1134,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                                lineNumber: 1118,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                        lineNumber: 1110,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-4 h-4 text-green-600 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                        lineNumber: 1149,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, doc._id, true, {
                                                                fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                lineNumber: 1103,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                        lineNumber: 1099,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1083,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 1063,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Select documents that are required for this employee category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1162,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 text-xs text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-2 h-2 bg-green-500 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                    lineNumber: 1167,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Click to select/deselect"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 1166,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-2 h-2 bg-red-100 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                    lineNumber: 1171,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-800 font-medium",
                                                                    children: "Required"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                                    lineNumber: 1172,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " documents are mandatory"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                            lineNumber: 1170,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                                    lineNumber: 1165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                            lineNumber: 1161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                    lineNumber: 1058,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                            lineNumber: 1008,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                    lineNumber: 844,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3 p-6 border-t border-slate-200 sticky bottom-0 bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "px-5 py-2.5 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-all font-medium",
                            disabled: isSubmitting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                            lineNumber: 1182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: submitDisabled,
                            className: "inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                        lineNumber: 1196,
                                        columnNumber: 17
                                    }, this),
                                    "Creating..."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                                        lineNumber: 1201,
                                        columnNumber: 17
                                    }, this),
                                    "Create Category"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                            lineNumber: 1189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
                    lineNumber: 1181,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
            lineNumber: 804,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/CreateCategoryModal.jsx",
        lineNumber: 803,
        columnNumber: 5
    }, this);
}
_s(CreateCategoryModal, "2MYcJjN7G0tF/Vi1cMCM4vGZS80=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"]
    ];
});
_c = CreateCategoryModal;
var _c;
__turbopack_context__.k.register(_c, "CreateCategoryModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/CreateSubCategoryModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateSubCategoryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useValidation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/modals/CreateSubCategoryModal.jsx
"use client";
;
;
;
const validationSchema = {
    organizationName: 'required',
    departmentName: 'required',
    employeeType: 'required',
    employeeCategory: 'required',
    employeeSubCategory: 'required'
};
function CreateSubCategoryModal({ isOpen, onClose, onSuccess, organizations }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        organizationName: "",
        departmentName: "",
        employeeType: "",
        employeeCategory: "",
        employeeSubCategory: ""
    });
    const [availableDepts, setAvailableDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableEmployeeTypes, setAvailableEmployeeTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableCats, setAvailableCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingDepts, setIsLoadingDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingEmployeeTypes, setIsLoadingEmployeeTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingCats, setIsLoadingCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [duplicateError, setDuplicateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { errors, validateField, handleBlur, touched, setErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"])(formData, validationSchema);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        validateField(name, value);
        // Reset dependent fields
        if (name === "organizationName") {
            setFormData((prev)=>({
                    ...prev,
                    departmentName: "",
                    employeeType: "",
                    employeeCategory: "",
                    employeeSubCategory: ""
                }));
            setAvailableDepts([]);
            setAvailableEmployeeTypes([]);
            setAvailableCats([]);
        } else if (name === "departmentName") {
            setFormData((prev)=>({
                    ...prev,
                    employeeType: "",
                    employeeCategory: "",
                    employeeSubCategory: ""
                }));
            setAvailableEmployeeTypes([]);
            setAvailableCats([]);
        } else if (name === "employeeType") {
            setFormData((prev)=>({
                    ...prev,
                    employeeCategory: "",
                    employeeSubCategory: ""
                }));
            setAvailableCats([]);
        }
    };
    // Load departments when organization changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateSubCategoryModal.useEffect": ()=>{
            if (formData.organizationName) {
                loadDepartments(formData.organizationName);
            } else {
                setAvailableDepts([]);
            }
        }
    }["CreateSubCategoryModal.useEffect"], [
        formData.organizationName
    ]);
    // Load employee types when department changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateSubCategoryModal.useEffect": ()=>{
            if (formData.organizationName && formData.departmentName) {
                loadEmployeeTypes(formData.organizationName, formData.departmentName);
            } else {
                setAvailableEmployeeTypes([]);
            }
        }
    }["CreateSubCategoryModal.useEffect"], [
        formData.organizationName,
        formData.departmentName
    ]);
    // Load categories when employee type changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateSubCategoryModal.useEffect": ()=>{
            if (formData.organizationName && formData.departmentName && formData.employeeType) {
                loadCategories(formData.organizationName, formData.departmentName, formData.employeeType);
            } else {
                setAvailableCats([]);
            }
        }
    }["CreateSubCategoryModal.useEffect"], [
        formData.organizationName,
        formData.departmentName,
        formData.employeeType
    ]);
    async function loadDepartments(orgName) {
        try {
            setIsLoadingDepts(true);
            setError("");
            const selectedOrg = organizations.find((org)=>org.name === orgName);
            if (!selectedOrg) {
                setAvailableDepts([]);
                return;
            }
            const response = await fetch(`/api/v1/admin/crm/departments?organizationId=${selectedOrg._id}&limit=100`);
            if (response.ok) {
                const data = await response.json();
                setAvailableDepts(data.data || []);
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to fetch departments");
                setAvailableDepts([]);
            }
        } catch (err) {
            console.error("Error loading departments:", err);
            setError("Failed to fetch departments");
            setAvailableDepts([]);
        } finally{
            setIsLoadingDepts(false);
        }
    }
    async function loadEmployeeTypes(orgName, deptName) {
        try {
            setIsLoadingEmployeeTypes(true);
            setError("");
            const selectedOrg = organizations.find((org)=>org.name === orgName);
            if (!selectedOrg) {
                setAvailableEmployeeTypes([]);
                return;
            }
            const selectedDept = availableDepts.find((dept)=>dept.departmentName === deptName);
            if (!selectedDept) {
                setAvailableEmployeeTypes([]);
                return;
            }
            const response = await fetch(`/api/v1/admin/crm/employeetype?organizationId=${selectedOrg._id}&departmentId=${selectedDept._id}&limit=1000`);
            if (response.ok) {
                const data = await response.json();
                const employeeTypes = [
                    ...new Set(data.data.map((item)=>item.employeeType).filter(Boolean))
                ].sort();
                setAvailableEmployeeTypes(employeeTypes);
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to fetch employee types");
                setAvailableEmployeeTypes([]);
            }
        } catch (err) {
            console.error("Error loading employee types:", err);
            setError("Failed to fetch employee types");
            setAvailableEmployeeTypes([]);
        } finally{
            setIsLoadingEmployeeTypes(false);
        }
    }
    async function loadCategories(orgName, deptName, empType) {
        try {
            setIsLoadingCats(true);
            setError("");
            const selectedOrg = organizations.find((org)=>org.name === orgName);
            if (!selectedOrg) {
                setAvailableCats([]);
                return;
            }
            const selectedDept = availableDepts.find((dept)=>dept.departmentName === deptName);
            if (!selectedDept) {
                setAvailableCats([]);
                return;
            }
            // First get the employee type ID
            const empTypeResponse = await fetch(`/api/v1/admin/crm/employeetype?organizationId=${selectedOrg._id}&departmentId=${selectedDept._id}&limit=1000`);
            if (!empTypeResponse.ok) {
                setAvailableCats([]);
                return;
            }
            const empTypeData = await empTypeResponse.json();
            const employeeTypeDoc = empTypeData.data.find((item)=>item.employeeType === empType);
            if (!employeeTypeDoc) {
                setAvailableCats([]);
                return;
            }
            // Now fetch categories for this employee type
            const response = await fetch(`/api/v1/admin/crm/employeecategory?organizationId=${selectedOrg._id}&departmentId=${selectedDept._id}&employeeTypeId=${employeeTypeDoc._id}&limit=1000`);
            if (response.ok) {
                const data = await response.json();
                const categories = [
                    ...new Set(data.data.map((item)=>item.employeeCategory).filter(Boolean))
                ].sort();
                setAvailableCats(categories);
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to fetch categories");
                setAvailableCats([]);
            }
        } catch (err) {
            console.error("Error loading categories:", err);
            setError("Failed to fetch categories");
            setAvailableCats([]);
        } finally{
            setIsLoadingCats(false);
        }
    }
    const handleSubmit = async ()=>{
        try {
            setIsSubmitting(true);
            setError("");
            setDuplicateError("");
            // Validate all fields
            let isValid = true;
            for(const key in validationSchema){
                if (!validateField(key, formData[key])) isValid = false;
            }
            if (!isValid) {
                setError("Please fill in all required fields.");
                setIsSubmitting(false);
                return;
            }
            const res = await fetch("/api/v1/admin/crm/employeesubcategory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) {
                if (res.status === 409) {
                    setDuplicateError(data.error || "Sub category already exists for this category.");
                    return;
                }
                throw new Error(data.error || "Failed to create employee sub category");
            }
            onSuccess();
            resetForm();
            onClose();
        } catch (err) {
            setError(err.message || "Something went wrong while creating employee sub category.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const resetForm = ()=>{
        setFormData({
            organizationName: "",
            departmentName: "",
            employeeType: "",
            employeeCategory: "",
            employeeSubCategory: ""
        });
        setAvailableDepts([]);
        setAvailableEmployeeTypes([]);
        setAvailableCats([]);
        setError("");
        setDuplicateError("");
        setErrors({});
    };
    const submitDisabled = isSubmitting || !formData.organizationName || !formData.departmentName || !formData.employeeType || !formData.employeeCategory || !formData.employeeSubCategory.trim();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 sticky top-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-slate-500 rounded-xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-slate-900",
                                                children: "Add Sub Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm",
                                                children: "Add a sub category to an existing employee category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-slate-200 rounded-lg transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, this),
                (error || duplicateError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                lineNumber: 347,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-red-800",
                                        children: "Error"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                        lineNumber: 349,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-700 mt-1",
                                        children: error || duplicateError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                        lineNumber: 350,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                        lineNumber: 346,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                    lineNumber: 345,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-slate-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Organization Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Organization ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 369,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "organizationName",
                                                    value: formData.organizationName,
                                                    onChange: handleInputChange,
                                                    onBlur: (e)=>handleBlur('organizationName', e.target.value),
                                                    className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white ${errors.organizationName ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select an organization"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 381,
                                                            columnNumber: 19
                                                        }, this),
                                                        organizations.map((org)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: org.name,
                                                                children: org.name
                                                            }, org._id, false, {
                                                                fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                                lineNumber: 383,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 372,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 388,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-slate-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Department & Employee Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-700",
                                                    children: [
                                                        "Department ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 405,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "departmentName",
                                                            value: formData.departmentName,
                                                            onChange: handleInputChange,
                                                            onBlur: (e)=>handleBlur('departmentName', e.target.value),
                                                            disabled: !formData.organizationName || isLoadingDepts,
                                                            className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed ${errors.departmentName ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select department"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 21
                                                                }, this),
                                                                availableDepts.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: dept.departmentName,
                                                                        children: dept.departmentName
                                                                    }, dept._id, false, {
                                                                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                                        lineNumber: 420,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 408,
                                                            columnNumber: 19
                                                        }, this),
                                                        isLoadingDepts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 426,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 428,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-700",
                                                    children: [
                                                        "Employee Type ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 435,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 434,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "employeeType",
                                                            value: formData.employeeType,
                                                            onChange: handleInputChange,
                                                            onBlur: (e)=>handleBlur('employeeType', e.target.value),
                                                            disabled: !formData.departmentName || isLoadingEmployeeTypes,
                                                            className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed ${errors.employeeType ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select employee type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                                    lineNumber: 448,
                                                                    columnNumber: 21
                                                                }, this),
                                                                availableEmployeeTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: type,
                                                                        children: type
                                                                    }, type, false, {
                                                                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                                        lineNumber: 450,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 438,
                                                            columnNumber: 19
                                                        }, this),
                                                        isLoadingEmployeeTypes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 456,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 458,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 437,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                            lineNumber: 394,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-slate-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Category Selection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 469,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Employee Category ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 476,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 475,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "employeeCategory",
                                                    value: formData.employeeCategory,
                                                    onChange: handleInputChange,
                                                    onBlur: (e)=>handleBlur('employeeCategory', e.target.value),
                                                    disabled: !formData.employeeType || isLoadingCats,
                                                    className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed ${errors.employeeCategory ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                            lineNumber: 489,
                                                            columnNumber: 19
                                                        }, this),
                                                        availableCats.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: cat,
                                                                children: cat
                                                            }, cat, false, {
                                                                fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                                lineNumber: 491,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 479,
                                                    columnNumber: 17
                                                }, this),
                                                isLoadingCats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 497,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 499,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 478,
                                            columnNumber: 15
                                        }, this),
                                        !formData.employeeType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Please select employee type first"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 503,
                                            columnNumber: 17
                                        }, this),
                                        formData.employeeType && availableCats.length === 0 && !isLoadingCats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "No categories found for this employee type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 506,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                    lineNumber: 474,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-slate-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 514,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Sub Category Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Employee Sub Category ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                                    lineNumber: 522,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 521,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "employeeSubCategory",
                                            value: formData.employeeSubCategory,
                                            onChange: handleInputChange,
                                            onBlur: (e)=>handleBlur('employeeSubCategory', e.target.value),
                                            className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${errors.employeeSubCategory ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                            placeholder: "e.g., Senior Developer, Junior Analyst"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "New sub category name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3 p-6 border-t border-slate-200 sticky bottom-0 bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-5 py-2.5 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-all font-medium",
                            disabled: isSubmitting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                            lineNumber: 543,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: submitDisabled,
                            className: "inline-flex items-center gap-2 px-5 py-2.5 bg-slate-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                        lineNumber: 557,
                                        columnNumber: 17
                                    }, this),
                                    "Creating..."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                                        lineNumber: 562,
                                        columnNumber: 17
                                    }, this),
                                    "Create Sub Category"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                            lineNumber: 550,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
                    lineNumber: 542,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
            lineNumber: 317,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/CreateSubCategoryModal.jsx",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
_s(CreateSubCategoryModal, "DCOTOVSU2onAPtXmw1cU8TjNvZo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"]
    ];
});
_c = CreateSubCategoryModal;
var _c;
__turbopack_context__.k.register(_c, "CreateSubCategoryModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/EditCategoryModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditCategoryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useValidation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const validationSchema = {
    organizationName: 'required',
    departmentName: 'required',
    employeeType: 'required',
    employeeCategory: 'required'
};
function EditCategoryModal({ isOpen, onClose, onSuccess, organizations, category }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        organizationName: "",
        departmentName: "",
        employeeType: "",
        employeeCategory: "",
        supportedDocuments: []
    });
    const [availableDepts, setAvailableDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableEmployeeTypes, setAvailableEmployeeTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableDocuments, setAvailableDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredDocuments, setFilteredDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingDepts, setIsLoadingDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingEmployeeTypes, setIsLoadingEmployeeTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingDocuments, setIsLoadingDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [duplicateError, setDuplicateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { errors, validateField, handleBlur, touched, setErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"])(formData, validationSchema);
    // Handle outside click to close dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCategoryModal.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsDropdownOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "EditCategoryModal.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["EditCategoryModal.useEffect"];
        }
    }["EditCategoryModal.useEffect"], []);
    // Filter documents based on search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCategoryModal.useEffect": ()=>{
            if (searchQuery.trim() === "") {
                setFilteredDocuments(availableDocuments);
            } else {
                const filtered = availableDocuments.filter({
                    "EditCategoryModal.useEffect.filtered": (doc)=>doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.description?.toLowerCase().includes(searchQuery.toLowerCase()) || doc.category?.toLowerCase().includes(searchQuery.toLowerCase())
                }["EditCategoryModal.useEffect.filtered"]);
                setFilteredDocuments(filtered);
            }
        }
    }["EditCategoryModal.useEffect"], [
        searchQuery,
        availableDocuments
    ]);
    // Initialize form with category data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCategoryModal.useEffect": ()=>{
            if (category) {
                setFormData({
                    organizationName: category.organizationId?.name || "",
                    departmentName: category.departmentId?.departmentName || "",
                    employeeType: category.employeeTypeId?.employeeType || "",
                    employeeCategory: category.employeeCategory || "",
                    supportedDocuments: category.supportedDocuments?.map({
                        "EditCategoryModal.useEffect": (doc)=>doc._id
                    }["EditCategoryModal.useEffect"]) || []
                });
            }
        }
    }["EditCategoryModal.useEffect"], [
        category
    ]);
    // Load departments when organization is set
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCategoryModal.useEffect": ()=>{
            if (formData.organizationName) {
                loadDepartments(formData.organizationName);
            } else {
                setAvailableDepts([]);
            // Only clear dependent fields if we are NOT in the initial load phase (simplification: if user changes org)
            // Actually, if organizationName changes, we should clear dependents. 
            // But on initial load, we don't want to clear them.
            }
        }
    }["EditCategoryModal.useEffect"], [
        formData.organizationName
    ]);
    // Load employee types when department is set
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCategoryModal.useEffect": ()=>{
            if (formData.organizationName && formData.departmentName && availableDepts.length > 0) {
                loadEmployeeTypes(formData.organizationName, formData.departmentName);
            } else {
                setAvailableEmployeeTypes([]);
            }
        }
    }["EditCategoryModal.useEffect"], [
        formData.organizationName,
        formData.departmentName,
        availableDepts
    ]);
    // Load documents on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCategoryModal.useEffect": ()=>{
            loadDocuments();
        }
    }["EditCategoryModal.useEffect"], []);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        validateField(name, value);
        // Reset dependent fields only on user interaction (not initial load)
        if (name === "organizationName") {
            setFormData((prev)=>({
                    ...prev,
                    departmentName: "",
                    employeeType: "",
                    employeeCategory: prev.employeeCategory,
                    supportedDocuments: []
                }));
            setAvailableDepts([]);
            setAvailableEmployeeTypes([]);
        } else if (name === "departmentName") {
            setFormData((prev)=>({
                    ...prev,
                    employeeType: "",
                    employeeCategory: prev.employeeCategory,
                    supportedDocuments: []
                }));
            setAvailableEmployeeTypes([]);
        }
    };
    // Enhanced document selection handlers
    const toggleDocument = (docId)=>{
        setFormData((prev)=>{
            if (prev.supportedDocuments.includes(docId)) {
                return {
                    ...prev,
                    supportedDocuments: prev.supportedDocuments.filter((id)=>id !== docId)
                };
            } else {
                return {
                    ...prev,
                    supportedDocuments: [
                        ...prev.supportedDocuments,
                        docId
                    ]
                };
            }
        });
    };
    const removeDocument = (docId)=>{
        setFormData((prev)=>({
                ...prev,
                supportedDocuments: prev.supportedDocuments.filter((id)=>id !== docId)
            }));
    };
    const getSelectedDocumentNames = ()=>{
        return formData.supportedDocuments.map((docId)=>{
            const doc = availableDocuments.find((d)=>d._id === docId);
            return doc ? doc.name : docId; // Fallback to ID if not found
        });
    };
    const clearAllDocuments = ()=>{
        setFormData((prev)=>({
                ...prev,
                supportedDocuments: []
            }));
    };
    async function loadDepartments(orgName) {
        try {
            setIsLoadingDepts(true);
            setError("");
            const selectedOrg = organizations.find((org)=>org.name === orgName);
            if (!selectedOrg) {
                setAvailableDepts([]);
                return;
            }
            const response = await fetch(`/api/v1/admin/crm/departments?organizationId=${selectedOrg._id}&limit=100`);
            if (response.ok) {
                const data = await response.json();
                const dept = data.data.filter((dept)=>dept.organizationId === selectedOrg._id);
                setAvailableDepts(dept || []);
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to fetch departments");
                setAvailableDepts([]);
            }
        } catch (err) {
            console.error("Error loading departments:", err);
            setError("Failed to fetch departments");
            setAvailableDepts([]);
        } finally{
            setIsLoadingDepts(false);
        }
    }
    async function loadEmployeeTypes(orgName, deptName) {
        try {
            setIsLoadingEmployeeTypes(true);
            setError("");
            const selectedOrg = organizations.find((org)=>org.name === orgName);
            if (!selectedOrg) {
                setAvailableEmployeeTypes([]);
                return;
            }
            const selectedDept = availableDepts.find((dept)=>dept.departmentName === deptName);
            if (!selectedDept) {
                // This might happen if depts are not loaded yet.
                console.warn("Department not found in availableDepts:", deptName);
                setAvailableEmployeeTypes([]);
                return;
            }
            const response = await fetch(`/api/v1/admin/crm/employeetype?organizationId=${selectedOrg._id}&departmentId=${selectedDept._id}&limit=1000`);
            if (response.ok) {
                const data = await response.json();
                if (!data.data || !Array.isArray(data.data)) {
                    console.warn("Invalid data format for employee types:", data);
                    setAvailableEmployeeTypes([]);
                    return;
                }
                const employeeTypes = [
                    ...new Set(data.data.map((item)=>item.employeeType).filter(Boolean))
                ].sort();
                setAvailableEmployeeTypes(employeeTypes);
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to fetch employee types");
                setAvailableEmployeeTypes([]);
            }
        } catch (err) {
            console.error("Error loading employee types:", err);
            setError("Failed to fetch employee types");
            setAvailableEmployeeTypes([]);
        } finally{
            setIsLoadingEmployeeTypes(false);
        }
    }
    async function loadDocuments() {
        try {
            setIsLoadingDocuments(true);
            setError("");
            const response = await fetch(`/api/v1/admin/crm/documents?limit=1000`);
            if (response.ok) {
                const data = await response.json();
                // Add metadata
                const enhancedDocs = (data.data || []).map((doc)=>({
                        ...doc,
                        category: doc.category || "Uncategorized",
                        isMandatory: doc.isMandatory || false,
                        fileType: doc.fileType || "document"
                    }));
                setAvailableDocuments(enhancedDocs);
                setFilteredDocuments(enhancedDocs);
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to fetch documents");
                setAvailableDocuments([]);
            }
        } catch (err) {
            console.error("Error loading documents:", err);
            setError("Failed to fetch documents");
            setAvailableDocuments([]);
        } finally{
            setIsLoadingDocuments(false);
        }
    }
    const handleSubmit = async ()=>{
        try {
            setIsSubmitting(true);
            setError("");
            setDuplicateError("");
            // Validate all fields
            let isValid = true;
            for(const key in validationSchema){
                if (!validateField(key, formData[key])) isValid = false;
            }
            if (!isValid) {
                setError("Please fill in all required fields.");
                setIsSubmitting(false);
                return;
            }
            const res = await fetch(`/api/v1/admin/crm/employeecategory/${category._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) {
                if (res.status === 409) {
                    setDuplicateError(data.error || "Category already exists for this organization and department.");
                    return;
                }
                throw new Error(data.error || "Failed to update employee category");
            }
            onSuccess();
            resetForm();
            onClose();
        } catch (err) {
            setError(err.message || "Something went wrong while updating employee category.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const resetForm = ()=>{
        // We don't fully reset to empty here to avoid flickering if modal is kept open, 
        // but typically onClose handles the unmount/remount or parent state clearing.
        // For safety:
        setFormData({
            organizationName: "",
            departmentName: "",
            employeeType: "",
            employeeCategory: "",
            supportedDocuments: []
        });
        setAvailableDepts([]);
        setAvailableEmployeeTypes([]);
        setSearchQuery("");
        setIsDropdownOpen(false);
        setError("");
        setDuplicateError("");
        setErrors({});
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    const submitDisabled = isSubmitting || !formData.organizationName || !formData.departmentName || !formData.employeeType || !formData.employeeCategory.trim();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 sticky top-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-slate-900",
                                                children: "Edit Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm",
                                                children: "Update employee category details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                lineNumber: 385,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "p-2 hover:bg-slate-200 rounded-lg transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                lineNumber: 390,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this),
                (error || duplicateError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-red-800",
                                        children: "Error"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                        lineNumber: 405,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-700 mt-1",
                                        children: error || duplicateError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                        lineNumber: 406,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                lineNumber: 404,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                        lineNumber: 402,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                    lineNumber: 401,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Organization Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Organization ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 424,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-4 top-1/2 transform -translate-y-1/2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                        className: "w-4 h-4 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                        lineNumber: 428,
                                                        columnNumber: 20
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 427,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "organizationName",
                                                    value: formData.organizationName,
                                                    onChange: handleInputChange,
                                                    className: "w-full pl-11 pr-10 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select an organization"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 436,
                                                            columnNumber: 19
                                                        }, this),
                                                        organizations.map((org)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: org.name,
                                                                children: org.name
                                                            }, org._id, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 438,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 430,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 443,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Department Selection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Department ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 458,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-4 top-1/2 transform -translate-y-1/2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        className: "w-4 h-4 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                        lineNumber: 462,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 461,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "departmentName",
                                                    value: formData.departmentName,
                                                    onChange: handleInputChange,
                                                    disabled: !formData.organizationName || isLoadingDepts,
                                                    className: "w-full pl-11 pr-10 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select a department"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 471,
                                                            columnNumber: 19
                                                        }, this),
                                                        availableDepts.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: dept.departmentName,
                                                                children: dept.departmentName
                                                            }, dept._id, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 473,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 464,
                                                    columnNumber: 17
                                                }, this),
                                                isLoadingDepts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 481,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 460,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Category Configuration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-700",
                                                    children: [
                                                        "Employee Type ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 498,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-4 top-1/2 transform -translate-y-1/2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 502,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 501,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "employeeType",
                                                            value: formData.employeeType,
                                                            onChange: handleInputChange,
                                                            disabled: !formData.departmentName || isLoadingEmployeeTypes,
                                                            className: "w-full pl-11 pr-10 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select employee type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 21
                                                                }, this),
                                                                availableEmployeeTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: type,
                                                                        children: type
                                                                    }, type, false, {
                                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                        lineNumber: 513,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 504,
                                                            columnNumber: 19
                                                        }, this),
                                                        isLoadingEmployeeTypes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 519,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 521,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 500,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 496,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-700",
                                                    children: [
                                                        "Employee Category ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 527,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 526,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-4 top-1/2 transform -translate-y-1/2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 531,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 530,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "employeeCategory",
                                                            value: formData.employeeCategory,
                                                            onChange: handleInputChange,
                                                            className: "w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all",
                                                            placeholder: "e.g., Senior Developer, Team Lead"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 533,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 529,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Update category name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 541,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 525,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                            lineNumber: 488,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-green-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 552,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-900",
                                                    children: "Supported Documents"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 553,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 551,
                                            columnNumber: 15
                                        }, this),
                                        formData.supportedDocuments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: clearAllDocuments,
                                            className: "text-sm text-red-600 hover:text-red-800 flex items-center gap-1 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 562,
                                                    columnNumber: 19
                                                }, this),
                                                "Clear All"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 558,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 550,
                                    columnNumber: 13
                                }, this),
                                formData.supportedDocuments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 border border-slate-200 rounded-xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 572,
                                                    columnNumber: 19
                                                }, this),
                                                "Selected Documents (",
                                                formData.supportedDocuments.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 571,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: getSelectedDocumentNames().map((docName, index)=>{
                                                const docId = formData.supportedDocuments[index];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 bg-white border border-green-200 rounded-lg px-3 py-1.5 hover:border-green-300 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-3 h-3 text-green-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 583,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-slate-800",
                                                            children: docName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 584,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeDocument(docId),
                                                            className: "text-slate-400 hover:text-red-500 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 589,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 585,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, docId, true, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 579,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 570,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Select Documents ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 font-normal",
                                                    children: "(Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 601,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 600,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            ref: dropdownRef,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 px-4 py-3 border border-slate-300 rounded-xl cursor-pointer hover:border-slate-400 transition-colors",
                                                    onClick: ()=>setIsDropdownOpen(!isDropdownOpen),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            className: "w-4 h-4 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 610,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Search documents...",
                                                            value: searchQuery,
                                                            onChange: (e)=>setSearchQuery(e.target.value),
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "flex-1 bg-transparent outline-none placeholder-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 611,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 619,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 606,
                                                    columnNumber: 17
                                                }, this),
                                                isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-80 overflow-y-auto",
                                                    children: isLoadingDocuments ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center p-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "w-6 h-6 text-slate-400 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 628,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-slate-600",
                                                                children: "Loading documents..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 629,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                        lineNumber: 627,
                                                        columnNumber: 23
                                                    }, this) : filteredDocuments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6 text-center text-slate-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "w-8 h-8 mx-auto mb-2 text-slate-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 633,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "No documents found"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 634,
                                                                columnNumber: 25
                                                            }, this),
                                                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm mt-1",
                                                                children: "Try a different search term"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 636,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                        lineNumber: 632,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "divide-y divide-slate-100",
                                                        children: filteredDocuments.map((doc)=>{
                                                            const isSelected = formData.supportedDocuments.includes(doc._id);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center justify-between p-3 hover:bg-slate-50 cursor-pointer transition-colors ${isSelected ? 'bg-green-50 border-l-4 border-l-green-500' : ''}`,
                                                                onClick: ()=>toggleDocument(doc._id),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-5 h-5 border rounded flex items-center justify-center mt-0.5 ${isSelected ? 'bg-green-500 border-green-500' : 'border-slate-300'}`,
                                                                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    className: "w-3 h-3 text-white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                    lineNumber: 657,
                                                                                    columnNumber: 50
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                lineNumber: 652,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "font-medium text-slate-900",
                                                                                                children: doc.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                                lineNumber: 661,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            doc.isMandatory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded",
                                                                                                children: "Required"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                                lineNumber: 665,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                        lineNumber: 660,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    doc.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-slate-600 mt-1",
                                                                                        children: doc.description
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                        lineNumber: 671,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2 mt-1",
                                                                                        children: [
                                                                                            doc.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "inline-block text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded",
                                                                                                children: doc.category
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                                lineNumber: 677,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            doc.fileType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "inline-block text-xs text-blue-600 bg-slate-50 px-2 py-0.5 rounded",
                                                                                                children: doc.fileType
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                                lineNumber: 682,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                        lineNumber: 675,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                                lineNumber: 659,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                        lineNumber: 651,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-4 h-4 text-green-600 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                        lineNumber: 690,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, doc._id, true, {
                                                                fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                lineNumber: 644,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                        lineNumber: 640,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 624,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 604,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Select documents that are required for this employee category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 703,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 text-xs text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-2 h-2 bg-green-500 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                    lineNumber: 708,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Click to select/deselect"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 707,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-2 h-2 bg-red-100 rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                    lineNumber: 712,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-800 font-medium",
                                                                    children: "Required"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                                    lineNumber: 713,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " documents are mandatory"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                            lineNumber: 711,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                                    lineNumber: 706,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                            lineNumber: 702,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3 p-6 border-t border-slate-200 sticky bottom-0 bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "px-5 py-2.5 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-all font-medium",
                            disabled: isSubmitting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                            lineNumber: 723,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: submitDisabled,
                            className: "inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                        lineNumber: 737,
                                        columnNumber: 17
                                    }, this),
                                    "Updating..."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                                        lineNumber: 742,
                                        columnNumber: 17
                                    }, this),
                                    "Update Category"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                            lineNumber: 730,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
                    lineNumber: 722,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
            lineNumber: 373,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/EditCategoryModal.jsx",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}
_s(EditCategoryModal, "dTceamLNaTtomCaqOnQl91k6kfg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"]
    ];
});
_c = EditCategoryModal;
var _c;
__turbopack_context__.k.register(_c, "EditCategoryModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/EditEmployeeTypeModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditEmployeeTypeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useValidation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const validationSchema = {
    organizationName: 'required',
    departmentName: 'required',
    employeeType: 'required'
};
function EditEmployeeTypeModal({ isOpen, onClose, onSuccess, organizations, employeeTypeData }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        organizationName: "",
        departmentName: "",
        employeeType: ""
    });
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingDepartments, setIsLoadingDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [duplicateError, setDuplicateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { errors, validateField, handleBlur, touched, setErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"])(formData, validationSchema);
    // Initial load of data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditEmployeeTypeModal.useEffect": ()=>{
            if (employeeTypeData) {
                setFormData({
                    organizationName: employeeTypeData.organizationId?.name || "",
                    departmentName: employeeTypeData.departmentId?.departmentName || "",
                    employeeType: employeeTypeData.employeeType || ""
                });
            }
        }
    }["EditEmployeeTypeModal.useEffect"], [
        employeeTypeData
    ]);
    // Fetch departments when organization changes or on initial load if org is present
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditEmployeeTypeModal.useEffect": ()=>{
            const fetchDepartments = {
                "EditEmployeeTypeModal.useEffect.fetchDepartments": async ()=>{
                    if (!formData.organizationName) {
                        setDepartments([]);
                        return;
                    }
                    // Avoid refetching if departments are already loaded for this org (optimization)
                    // But for simplicity and correctness in edit mode, we'll fetch.
                    try {
                        setIsLoadingDepartments(true);
                        setError("");
                        const selectedOrg = organizations.find({
                            "EditEmployeeTypeModal.useEffect.fetchDepartments.selectedOrg": (org)=>org.name === formData.organizationName
                        }["EditEmployeeTypeModal.useEffect.fetchDepartments.selectedOrg"]);
                        if (!selectedOrg) {
                            setDepartments([]);
                            return;
                        }
                        const response = await fetch(`/api/v1/admin/crm/departments?organizationId=${selectedOrg._id}&limit=100`);
                        if (response.ok) {
                            const data = await response.json();
                            setDepartments(data.data || []);
                        } else {
                            setDepartments([]);
                        }
                    } catch (err) {
                        console.error("Error fetching departments:", err);
                        setDepartments([]);
                    } finally{
                        setIsLoadingDepartments(false);
                    }
                }
            }["EditEmployeeTypeModal.useEffect.fetchDepartments"];
            fetchDepartments();
        }
    }["EditEmployeeTypeModal.useEffect"], [
        formData.organizationName,
        organizations
    ]);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        validateField(name, value);
        // Dependent field logic
        if (name === "organizationName") {
            setFormData((prev)=>({
                    ...prev,
                    departmentName: "",
                    employeeType: prev.employeeType // Keep current type if just Org changed (though unlikely user workflow)
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setIsSubmitting(true);
            setError("");
            setDuplicateError("");
            // Validate form data
            let isValid = true;
            for(const key in validationSchema){
                if (!validateField(key, formData[key])) isValid = false;
            }
            if (!isValid) {
                setError("All fields are required");
                setIsSubmitting(false);
                return;
            }
            const payload = {
                organizationName: formData.organizationName.trim(),
                departmentName: formData.departmentName.trim(),
                employeeType: formData.employeeType.trim()
            };
            const res = await fetch(`/api/v1/admin/crm/employeetype/${employeeTypeData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok) {
                if (res.status === 409) {
                    setDuplicateError(data.error || "Employee type already exists for this department.");
                    return;
                }
                throw new Error(data.error || "Failed to update employee type");
            }
            onSuccess(data.employeeType);
            handleClose();
        } catch (err) {
            console.error("Error updating employee type:", err);
            setError(err.message || "Something went wrong while updating employee type.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const resetForm = ()=>{
        setFormData({
            organizationName: "",
            departmentName: "",
            employeeType: ""
        });
        setDepartments([]);
        setError("");
        setDuplicateError("");
        setErrors({});
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    const submitDisabled = isSubmitting || !formData.organizationName.trim() || !formData.departmentName.trim() || !formData.employeeType.trim();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 sticky top-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-slate-900",
                                                children: "Edit Employee Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm",
                                                children: "Update employee type details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "p-2 hover:bg-slate-200 rounded-lg transition-colors",
                                disabled: isSubmitting,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                (error || duplicateError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-semibold text-red-800",
                                        children: "Error"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-700 mt-1",
                                        children: error || duplicateError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                        lineNumber: 218,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                    lineNumber: 217,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-yellow-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-900",
                                                    children: "Organization Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-slate-700",
                                                    children: [
                                                        "Organization ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                            lineNumber: 242,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                    lineNumber: 241,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-4 top-1/2 transform -translate-y-1/2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                                className: "w-4 h-4 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                lineNumber: 246,
                                                                columnNumber: 20
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                            lineNumber: 245,
                                                            columnNumber: 18
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "organizationName",
                                                            value: formData.organizationName,
                                                            onChange: handleInputChange,
                                                            onBlur: (e)=>handleBlur('organizationName', e.target.value),
                                                            className: `w-full pl-11 pr-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all appearance-none bg-white ${errors.organizationName ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select an organization"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 21
                                                                }, this),
                                                                organizations.map((org)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: org.name,
                                                                        children: org.name
                                                                    }, org._id, false, {
                                                                        fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                            lineNumber: 248,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                            lineNumber: 264,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-yellow-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                    lineNumber: 272,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-900",
                                                    children: "Employee Type Configuration"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-slate-700",
                                                            children: [
                                                                "Department ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 32
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                            lineNumber: 281,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    name: "departmentName",
                                                                    value: formData.departmentName,
                                                                    onChange: handleInputChange,
                                                                    onBlur: (e)=>handleBlur('departmentName', e.target.value),
                                                                    disabled: !formData.organizationName || isLoadingDepartments,
                                                                    className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed ${errors.departmentName ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Select a department"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                            lineNumber: 295,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: dept.departmentName,
                                                                                children: dept.departmentName
                                                                            }, dept._id, false, {
                                                                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                                lineNumber: 297,
                                                                                columnNumber: 25
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 21
                                                                }, this),
                                                                isLoadingDepartments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 23
                                                                }, this),
                                                                !isLoadingDepartments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                            lineNumber: 284,
                                                            columnNumber: 19
                                                        }, this),
                                                        !formData.organizationName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500",
                                                            children: "Please select an organization first"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                            lineNumber: 310,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-slate-700",
                                                            children: [
                                                                "Employee Type ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 35
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                            lineNumber: 316,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "employeeType",
                                                            value: formData.employeeType,
                                                            onChange: handleInputChange,
                                                            onBlur: (e)=>handleBlur('employeeType', e.target.value),
                                                            className: `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all ${errors.employeeType ? 'border-red-500 bg-red-50' : 'border-slate-300'}`,
                                                            placeholder: "e.g., Full-time, Contractor, Intern"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                            lineNumber: 319,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                    lineNumber: 315,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 p-6 border-t border-slate-200 sticky bottom-0 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: "px-5 py-2.5 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-all font-medium",
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: submitDisabled,
                                    className: "inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                lineNumber: 352,
                                                columnNumber: 19
                                            }, this),
                                            "Updating..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, this),
                                            "Update Employee Type"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
            lineNumber: 188,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/EditEmployeeTypeModal.jsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(EditEmployeeTypeModal, "JRrx4F07boWKo33b9tHocTFLk18=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useValidation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValidation"]
    ];
});
_c = EditEmployeeTypeModal;
var _c;
__turbopack_context__.k.register(_c, "EditEmployeeTypeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/modals/DocumentsAdd.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentAdd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/modals/DocumentAdd.jsx
"use client";
;
;
;
function DocumentAdd({ isOpen, onClose, onSuccess }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        documentCategory: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [duplicateError, setDuplicateError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Predefined document categories
    const documentCategories = [
        "Personal",
        "Educational",
        "Professional",
        "Other"
    ];
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Clear errors when user types
        setError("");
        setDuplicateError("");
    };
    const handleSubmit = async ()=>{
        try {
            setIsSubmitting(true);
            setError("");
            setDuplicateError("");
            const res = await fetch("/api/v1/admin/crm/documents", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) {
                if (res.status === 409) {
                    setDuplicateError(data.error || "A document with this name already exists.");
                    return;
                }
                throw new Error(data.error || "Failed to create document");
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Documents Created Successfully.");
            onSuccess();
            resetForm();
            onClose();
        } catch (err) {
            setError(err.message || "Something went wrong while creating the document.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const resetForm = ()=>{
        setFormData({
            name: "",
            description: "",
            documentCategory: ""
        });
        setError("");
        setDuplicateError("");
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    const submitDisabled = isSubmitting || !formData.name.trim() || !formData.documentCategory; // Require documentCategory
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 sticky top-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-5 h-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold text-slate-900",
                                                    children: "Add New Document"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-600 text-sm",
                                                    children: "Create a new supported document for employee categories"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleClose,
                                    className: "p-2 hover:bg-slate-200 rounded-lg transition-colors",
                                    disabled: isSubmitting,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    (error || duplicateError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-red-800",
                                            children: "Error"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-700 mt-1",
                                            children: error || duplicateError
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-orange-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "Document Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Document Category ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "documentCategory",
                                                    value: formData.documentCategory,
                                                    onChange: handleInputChange,
                                                    className: "w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all appearance-none bg-white disabled:bg-slate-50 disabled:cursor-not-allowed",
                                                    disabled: isSubmitting,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select a category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                                            lineNumber: 161,
                                                            columnNumber: 19
                                                        }, this),
                                                        documentCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: category,
                                                                children: category
                                                            }, category, false, {
                                                                fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                                                lineNumber: 163,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Select the category for this document"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: [
                                                "Document Name ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                                    lineNumber: 178,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "name",
                                            value: formData.name,
                                            onChange: handleInputChange,
                                            className: "w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all",
                                            placeholder: "e.g., Passport, Work Permit",
                                            disabled: isSubmitting
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Enter a unique name for the document"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-slate-700",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "description",
                                            value: formData.description,
                                            onChange: handleInputChange,
                                            className: "w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-y",
                                            placeholder: "e.g., Official identification document issued by the government",
                                            rows: 4,
                                            disabled: isSubmitting
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "Provide a brief description of the document (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-3 p-6 border-t border-slate-200 sticky bottom-0 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "px-5 py-2.5 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-all font-medium",
                                disabled: isSubmitting,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: submitDisabled,
                                className: "inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        "Creating..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this),
                                        "Create Document"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/modals/DocumentsAdd.jsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(DocumentAdd, "lgV7q9IXH6UjXSFObaBNnnQHLG0=");
_c = DocumentAdd;
var _c;
__turbopack_context__.k.register(_c, "DocumentAdd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/organization/employeeType/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmployeeTypesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel-x.js [app-client] (ecmascript) <export default as FilterX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$CreateEmployeeTypeModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/CreateEmployeeTypeModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$CreateCategoryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/CreateCategoryModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$CreateSubCategoryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/CreateSubCategoryModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$EditCategoryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/EditCategoryModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$EditEmployeeTypeModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/EditEmployeeTypeModal.jsx [app-client] (ecmascript)"); // New import
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$DocumentsAdd$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/DocumentsAdd.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client"
// import { useState, useEffect } from "react";
// import {
//   Plus,
//   Edit2,
//   Trash2,
//   Search,
//   RefreshCw,
//   FilterX,
//   AlertCircle,
//   Users,
//   Tag,
//   Layers,
//   ChevronLeft,
//   ChevronRight,
//   MoreHorizontal,
//   Building,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import CreateEmployeeTypeModal from "@/components/modals/CreateEmployeeTypeModal";
// import CreateCategoryModal from "@/components/modals/CreateCategoryModal";
// import CreateSubCategoryModal from "@/components/modals/CreateSubCategoryModal";
// import DocumentAdd from "@/components/modals/DocumentsAdd";
// export default function EmployeeTypesPage() {
//   const [employeeTypes, setEmployeeTypes] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedOrganization, setSelectedOrganization] = useState("");
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [organizations, setOrganizations] = useState([]);
//   const [departments, setDepartments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState("");
//   const [viewMode, setViewMode] = useState("hierarchy"); // "hierarchy" or "list"
//   // Modal states
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showDocumentsAddModal, setShowDocumentsAddModal] = useState(false);
//   const [showCategoryModal, setShowCategoryModal] = useState(false);
//   const [showSubCategoryModal, setShowSubCategoryModal] = useState(false);
//   // Expanded states for hierarchy view
//   const [expandedTypes, setExpandedTypes] = useState({});
//   const [expandedCategories, setExpandedCategories] = useState({});
//   // Fetch organizations
//   async function fetchOrganizations() {
//     try {
//       const params = new URLSearchParams();
//       params.set("page", "1");
//       params.set("limit", "100");
//       params.set("status", "Active");
//       const res = await fetch(`/api/v1/admin/crm/organizations?${params.toString()}`);
//       const data = await res.json();
//       if (res.ok) {
//         setOrganizations(data.organizations || []);
//       }
//     } catch (err) {
//       console.error("Organizations fetch error:", err);
//     }
//   }
//   // Fetch departments based on selected organization
//   async function fetchDepartments(organizationId) {
//     if (!organizationId) {
//       setDepartments([]);
//       return;
//     }
//     try {
//       const response = await fetch(`/api/v1/admin/crm/departments?organizationId=${organizationId}&limit=100`);
//       const data = await response.json();
//       if (response.ok) {
//         setDepartments(data.data || []);
//       }
//     } catch (err) {
//       console.error("Departments fetch error:", err);
//     }
//   }
//   // Fetch employee types
//   async function fetchEmployeeTypes(organizationId, departmentId) {
//     try {
//       const params = new URLSearchParams();
//       if (organizationId) params.set("organizationId", organizationId);
//       if (departmentId) params.set("departmentId", departmentId);
//       params.set("limit", "1000");
//       const res = await fetch(`/api/v1/admin/crm/employeetype?${params.toString()}`);
//       const data = await res.json();
//       if (res.ok) {
//         setEmployeeTypes(data.data || []);
//       }
//     } catch (err) {
//       console.error("Employee types fetch error:", err);
//     }
//   }
//   // Fetch categories
//   async function fetchCategories(organizationId, departmentId) {
//     try {
//       const params = new URLSearchParams();
//       if (organizationId) params.set("organizationId", organizationId);
//       if (departmentId) params.set("departmentId", departmentId);
//       params.set("limit", "1000");
//       const res = await fetch(`/api/v1/admin/crm/employeecategory?${params.toString()}`);
//       const data = await res.json();
//       if (res.ok) {
//         setCategories(data.data || []);
//       }
//     } catch (err) {
//       console.error("Categories fetch error:", err);
//     }
//   }
//   // Fetch sub-categories
//   async function fetchSubCategories(organizationId, departmentId) {
//     try {
//       const params = new URLSearchParams();
//       if (organizationId) params.set("organizationId", organizationId);
//       if (departmentId) params.set("departmentId", departmentId);
//       params.set("limit", "1000");
//       const res = await fetch(`/api/v1/admin/crm/employeesubcategory?${params.toString()}`);
//       const data = await res.json();
//       if (res.ok) {
//         setSubCategories(data.data || []);
//       }
//     } catch (err) {
//       console.error("Sub-categories fetch error:", err);
//     }
//   }
//   // Fetch all data
//   async function fetchAllData() {
//     try {
//       setLoading(true);
//       setError("");
//       const selectedOrg = organizations.find(org => org.name === selectedOrganization);
//       const orgId = selectedOrg?._id || "";
//       const selectedDept = departments.find(dept => dept.departmentName === selectedDepartment);
//       const deptId = selectedDept?._id || "";
//       await Promise.all([
//         fetchEmployeeTypes(orgId, deptId),
//         fetchCategories(orgId, deptId),
//         fetchSubCategories(orgId, deptId)
//       ]);
//     } catch (err) {
//       setError("Failed to load data");
//       console.error(err);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   }
//   // Initial load
//   useEffect(() => {
//     fetchOrganizations();
//   }, []);
//   // Load departments when organization changes
//   useEffect(() => {
//     if (selectedOrganization) {
//       const selectedOrg = organizations.find(org => org.name === selectedOrganization);
//       if (selectedOrg) {
//         fetchDepartments(selectedOrg._id);
//       }
//     } else {
//       setDepartments([]);
//       setSelectedDepartment("");
//     }
//   }, [selectedOrganization, organizations]);
//   // Fetch data when filters change
//   useEffect(() => {
//     if (organizations.length > 0) {
//       fetchAllData();
//     }
//   }, [selectedOrganization, selectedDepartment, organizations]);
//   // Handle modal success
//   const handleModalSuccess = () => {
//     fetchAllData();
//   };
//   // Clear filters
//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedOrganization("");
//     setSelectedDepartment("");
//   };
//   // Refresh data
//   const refreshData = () => {
//     setRefreshing(true);
//     fetchAllData();
//   };
//   // Toggle expand/collapse
//   const toggleTypeExpand = (typeId) => {
//     setExpandedTypes(prev => ({
//       ...prev,
//       [typeId]: !prev[typeId]
//     }));
//   };
//   const toggleCategoryExpand = (categoryId) => {
//     setExpandedCategories(prev => ({
//       ...prev,
//       [categoryId]: !prev[categoryId]
//     }));
//   };
//   // Build hierarchy structure
//   const buildHierarchy = () => {
//     const hierarchy = [];
//     // Group by employee type
//     employeeTypes.forEach(type => {
//       const typeCategories = categories.filter(cat => 
//         cat.employeeTypeId?._id === type._id
//       );
//       const categoriesWithSubs = typeCategories.map(category => {
//         const categorySubs = subCategories.filter(sub => 
//           sub.employeeCategoryId._id === category._id
//         );
//         return {
//           ...category,
//           subCategories: categorySubs
//         };
//       });
//       hierarchy.push({
//         ...type,
//         categories: categoriesWithSubs
//       });
//     });
//     return hierarchy;
//   };
//   const hierarchy = buildHierarchy();
//   // Filter hierarchy based on search
//   const filteredHierarchy = hierarchy.filter(type => {
//     if (!searchTerm) return true;
//     const searchLower = searchTerm.toLowerCase();
//     // Search in type name
//     if (type.employeeType.toLowerCase().includes(searchLower)) return true;
//     // Search in categories
//     const hasMatchingCategory = type.categories.some(cat => 
//       cat.employeeCategory.toLowerCase().includes(searchLower)
//     );
//     if (hasMatchingCategory) return true;
//     // Search in sub-categories
//     const hasMatchingSubCategory = type.categories.some(cat =>
//       cat.subCategories.some(sub =>
//         sub.employeeSubCategory.toLowerCase().includes(searchLower)
//       )
//     );
//     return hasMatchingSubCategory;
//   });
//   // Statistics
//   const stats = {
//     totalTypes: employeeTypes.length,
//     totalCategories: categories.length,
//     totalSubCategories: subCategories.length,
//     inHouseTypes: employeeTypes.filter(t => t.employeeType === "In House").length,
//     thirdPartyTypes: employeeTypes.filter(t => t.employeeType === "Third Party").length,
//   };
//   // Loading state
//   if (loading && !refreshing) {
//     return (
//       <div className="min-h-screen bg-slate-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//           <p className="mt-4 text-slate-600">Loading employee hierarchy...</p>
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
//                 <Users className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-slate-900">
//                   Employee Hierarchy
//                 </h1>
//                 <p className="text-slate-600 text-sm mt-0.5">
//                   Manage employee types, categories & sub-categories
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setShowDocumentsAddModal(true)}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors shadow-sm"
//               >
//                 <Plus className="w-4 h-4" />
//                 Add Supported Documents
//               </button>
//               <button
//                 onClick={() => setShowCreateModal(true)}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors shadow-sm"
//               >
//                 <Plus className="w-4 h-4" />
//                 Add Employee Type
//               </button>
//               <button
//                 onClick={() => setShowCategoryModal(true)}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors shadow-sm"
//               >
//                 <Tag className="w-4 h-4" />
//                 Add Category
//               </button>
//               <button
//                 onClick={() => setShowSubCategoryModal(true)}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-sm"
//               >
//                 <Layers className="w-4 h-4" />
//                 Add Sub-Category
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-6">
//         {/* Statistics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
//           <div className="bg-white rounded-xl border border-slate-200 p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-slate-600">Employee Types</p>
//                 <p className="text-2xl font-bold text-slate-900 mt-1">{stats.totalTypes}</p>
//               </div>
//               <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
//                 <Users className="w-5 h-5 text-yellow-600" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl border border-slate-200 p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-slate-600">Categories</p>
//                 <p className="text-2xl font-bold text-slate-900 mt-1">{stats.totalCategories}</p>
//               </div>
//               <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
//                 <Tag className="w-5 h-5 text-green-600" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl border border-slate-200 p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-slate-600">Sub-Categories</p>
//                 <p className="text-2xl font-bold text-slate-900 mt-1">{stats.totalSubCategories}</p>
//               </div>
//               <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <Layers className="w-5 h-5 text-blue-600" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl border border-slate-200 p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-slate-600">In-House</p>
//                 <p className="text-2xl font-bold text-slate-900 mt-1">{stats.inHouseTypes}</p>
//               </div>
//               <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
//                 <Building className="w-5 h-5 text-green-600" />
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-xl border border-slate-200 p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-slate-600">Third Party</p>
//                 <p className="text-2xl font-bold text-slate-900 mt-1">{stats.thirdPartyTypes}</p>
//               </div>
//               <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <Building className="w-5 h-5 text-blue-600" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Filters and Search */}
//         <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
//           <div className="flex flex-col gap-4">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               {/* Search Input */}
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="text"
//                   placeholder="Search types, categories..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//               </div>
//               {/* Organization Filter */}
//               <div>
//                 <select
//                   value={selectedOrganization}
//                   onChange={(e) => {
//                     setSelectedOrganization(e.target.value);
//                     setSelectedDepartment("");
//                   }}
//                   className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 appearance-none bg-white"
//                 >
//                   <option value="">All Organizations</option>
//                   {organizations.map((org) => (
//                     <option key={org._id} value={org.name}>
//                       {org.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {/* Department Filter */}
//               <div>
//                 <select
//                   value={selectedDepartment}
//                   onChange={(e) => setSelectedDepartment(e.target.value)}
//                   disabled={!selectedOrganization}
//                   className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 appearance-none bg-white disabled:bg-slate-100 disabled:cursor-not-allowed"
//                 >
//                   <option value="">All Departments</option>
//                   {departments.map((dept) => (
//                     <option key={dept._id} value={dept.departmentName}>
//                       {dept.departmentName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {/* Actions */}
//               <div className="flex items-center gap-2">
//                 {(searchTerm || selectedOrganization || selectedDepartment) && (
//                   <button
//                     onClick={clearFilters}
//                     className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
//                   >
//                     <FilterX className="w-4 h-4" />
//                     Clear
//                   </button>
//                 )}
//                 <button
//                   onClick={refreshData}
//                   disabled={refreshing}
//                   className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50"
//                 >
//                   <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
//                   Refresh
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Error Message */}
//         {error && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
//             <div className="flex items-start space-x-3">
//               <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
//               <div>
//                 <h4 className="text-sm font-semibold text-red-800">Error</h4>
//                 <p className="text-sm text-red-700 mt-1">{error}</p>
//               </div>
//             </div>
//           </div>
//         )}
//         {/* Hierarchy Display */}
//         {filteredHierarchy.length === 0 ? (
//           <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
//             <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-slate-900 mb-2">
//               No employee hierarchy found
//             </h3>
//             <p className="text-slate-600 mb-6">
//               {searchTerm || selectedOrganization || selectedDepartment
//                 ? "Try adjusting your search or filters"
//                 : "Get started by creating your first employee type"}
//             </p>
//             <div className="flex gap-3 justify-center">
//               <button
//                 onClick={() => setShowCreateModal(true)}
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
//               >
//                 <Plus className="w-4 h-4" />
//                 Create Employee Type
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {filteredHierarchy.map((type) => (
//               <div
//                 key={type._id}
//                 className="bg-white rounded-xl border border-slate-200 overflow-hidden"
//               >
//                 {/* Employee Type Header */}
//                 <div className="p-4 bg-gradient-to-r from-yellow-50 to-amber-50 border-b border-slate-200">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <button
//                         onClick={() => toggleTypeExpand(type._id)}
//                         className="p-2 hover:bg-white/50 rounded-lg transition-colors"
//                       >
//                         {expandedTypes[type._id] ? (
//                           <ChevronUp className="w-5 h-5 text-slate-600" />
//                         ) : (
//                           <ChevronDown className="w-5 h-5 text-slate-600" />
//                         )}
//                       </button>
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
//                           <Users className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-slate-900 text-lg">
//                             {type.employeeType}
//                           </h3>
//                           <div className="flex items-center gap-3 mt-1">
//                             <span className="text-sm text-slate-600">
//                               {type.organizationId?.name || "N/A"}
//                             </span>
//                             <span className="text-slate-300">•</span>
//                             <span className="text-sm text-slate-600">
//                               {type.departmentId?.departmentName || "N/A"}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-sm font-medium text-slate-600">
//                         {type.categories.length} {type.categories.length === 1 ? 'category' : 'categories'}
//                       </span>
//                       <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
//                         <Edit2 className="w-4 h-4 text-slate-600" />
//                       </button>
//                       <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
//                         <Trash2 className="w-4 h-4 text-red-600" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Categories */}
//                 {expandedTypes[type._id] && type.categories.length > 0 && (
//                   <div className="p-4">
//                     <div className="space-y-3">
//                       {type.categories.map((category) => (
//                         <div
//                           key={category._id}
//                           className="border border-slate-200 rounded-lg overflow-hidden"
//                         >
//                           {/* Category Header */}
//                           <div className="p-3 bg-green-50 border-b border-slate-200">
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center gap-3">
//                                 <button
//                                   onClick={() => toggleCategoryExpand(category._id)}
//                                   className="p-1 hover:bg-white/50 rounded transition-colors"
//                                 >
//                                   {expandedCategories[category._id] ? (
//                                     <ChevronUp className="w-4 h-4 text-slate-600" />
//                                   ) : (
//                                     <ChevronDown className="w-4 h-4 text-slate-600" />
//                                   )}
//                                 </button>
//                                 <div className="flex items-center gap-2">
//                                   <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
//                                     <Tag className="w-4 h-4 text-white" />
//                                   </div>
//                                   <div>
//                                     <h4 className="font-semibold text-slate-900">
//                                       {category.employeeCategory}
//                                     </h4>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <span className="text-sm text-slate-600">
//                                   {category.subCategories.length} sub-{category.subCategories.length === 1 ? 'category' : 'categories'}
//                                 </span>
//                                 <button className="p-1.5 hover:bg-white rounded transition-colors">
//                                   <Edit2 className="w-3.5 h-3.5 text-slate-600" />
//                                 </button>
//                                 <button className="p-1.5 hover:bg-red-50 rounded transition-colors">
//                                   <Trash2 className="w-3.5 h-3.5 text-red-600" />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                           {/* Sub-Categories */}
//                           {expandedCategories[category._id] && category.subCategories.length > 0 && (
//                             <div className="p-3 bg-white">
//                               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
//                                 {category.subCategories.map((sub) => (
//                                   <div
//                                     key={sub._id}
//                                     className="flex items-center justify-between p-2 bg-slate-50 border border-blue-200 rounded-lg"
//                                   >
//                                     <div className="flex items-center gap-2">
//                                       <div className="w-6 h-6 bg-slate-500 rounded flex items-center justify-center">
//                                         <Layers className="w-3 h-3 text-white" />
//                                       </div>
//                                       <span className="text-sm font-medium text-slate-900">
//                                         {sub.employeeSubCategory}
//                                       </span>
//                                     </div>
//                                     <div className="flex items-center gap-1">
//                                       <button className="p-1 hover:bg-white rounded transition-colors">
//                                         <Edit2 className="w-3 h-3 text-slate-600" />
//                                       </button>
//                                       <button className="p-1 hover:bg-red-50 rounded transition-colors">
//                                         <Trash2 className="w-3 h-3 text-red-600" />
//                                       </button>
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       {/* Modals */}
//       <DocumentAdd
//         isOpen={showDocumentsAddModal}
//         onClose={() => setShowDocumentsAddModal(false)}
//         onSuccess={handleModalSuccess}
//       />
//       <CreateEmployeeTypeModal
//         isOpen={showCreateModal}
//         onClose={() => setShowCreateModal(false)}
//         onSuccess={handleModalSuccess}
//         organizations={organizations}
//       />
//       <CreateCategoryModal
//         isOpen={showCategoryModal}
//         onClose={() => setShowCategoryModal(false)}
//         onSuccess={handleModalSuccess}
//         organizations={organizations}
//       />
//       <CreateSubCategoryModal
//         isOpen={showSubCategoryModal}
//         onClose={() => setShowSubCategoryModal(false)}
//         onSuccess={handleModalSuccess}
//         organizations={organizations}
//       />
//       <EditCategoryModal
//         isOpen={showEditCategoryModal}
//         onClose={() => {
//           setShowEditCategoryModal(false);
//           setSelectedCategory(null);
//         }}
//         onSuccess={handleModalSuccess}
//         organizations={organizations}
//         category={selectedCategory}
//       />
//     </div>
//   );
// }
"use client";
;
;
;
;
;
;
;
;
;
function EmployeeTypesPage() {
    _s();
    const [employeeTypes, setEmployeeTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subCategories, setSubCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedOrganization, setSelectedOrganization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedDepartment, setSelectedDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [organizations, setOrganizations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hierarchy");
    // Modal states
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDocumentsAddModal, setShowDocumentsAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCategoryModal, setShowCategoryModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSubCategoryModal, setShowSubCategoryModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditCategoryModal, setShowEditCategoryModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showEditTypeModal, setShowEditTypeModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // New state for type edit
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // New state for type edit
    // Expanded states for hierarchy view
    const [expandedTypes, setExpandedTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [expandedCategories, setExpandedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Fetch organizations
    async function fetchOrganizations() {
        try {
            const params = new URLSearchParams();
            params.set("page", "1");
            params.set("limit", "100");
            params.set("status", "Active");
            const res = await fetch(`/api/v1/admin/crm/organizations?${params.toString()}`);
            const data = await res.json();
            if (res.ok) {
                setOrganizations(data.organizations || []);
            }
        } catch (err) {
            console.error("Organizations fetch error:", err);
        }
    }
    // Fetch departments based on selected organization
    async function fetchDepartments(organizationId) {
        if (!organizationId) {
            setDepartments([]);
            return;
        }
        try {
            const response = await fetch(`/api/v1/admin/crm/departments?organizationId=${organizationId}&limit=100`);
            const data = await response.json();
            if (response.ok) {
                setDepartments(data.data || []);
            }
        } catch (err) {
            console.error("Departments fetch error:", err);
        }
    }
    // Fetch employee types
    async function fetchEmployeeTypes(organizationId, departmentId) {
        try {
            const params = new URLSearchParams();
            if (organizationId) params.set("organizationId", organizationId);
            if (departmentId) params.set("departmentId", departmentId);
            params.set("limit", "1000");
            const res = await fetch(`/api/v1/admin/crm/employeetype?${params.toString()}`);
            const data = await res.json();
            if (res.ok) {
                setEmployeeTypes(data.data || []);
            }
        } catch (err) {
            console.error("Employee types fetch error:", err);
        }
    }
    // Fetch categories
    async function fetchCategories(organizationId, departmentId) {
        try {
            const params = new URLSearchParams();
            if (organizationId) params.set("organizationId", organizationId);
            if (departmentId) params.set("departmentId", departmentId);
            params.set("limit", "1000");
            const res = await fetch(`/api/v1/admin/crm/employeecategory?${params.toString()}`);
            const data = await res.json();
            if (res.ok) {
                setCategories(data.data || []);
            }
        } catch (err) {
            console.error("Categories fetch error:", err);
        }
    }
    // Fetch sub-categories
    async function fetchSubCategories(organizationId, departmentId) {
        try {
            const params = new URLSearchParams();
            if (organizationId) params.set("organizationId", organizationId);
            if (departmentId) params.set("departmentId", departmentId);
            params.set("limit", "1000");
            const res = await fetch(`/api/v1/admin/crm/employeesubcategory?${params.toString()}`);
            const data = await res.json();
            if (res.ok) {
                setSubCategories(data.data || []);
            }
        } catch (err) {
            console.error("Sub-categories fetch error:", err);
        }
    }
    // Fetch all data
    async function fetchAllData() {
        try {
            setLoading(true);
            setError("");
            const selectedOrg = organizations.find((org)=>org.name === selectedOrganization);
            const orgId = selectedOrg?._id || "";
            const selectedDept = departments.find((dept)=>dept.departmentName === selectedDepartment);
            const deptId = selectedDept?._id || "";
            await Promise.all([
                fetchEmployeeTypes(orgId, deptId),
                fetchCategories(orgId, deptId),
                fetchSubCategories(orgId, deptId)
            ]);
        } catch (err) {
            setError("Failed to load data");
            console.error(err);
        } finally{
            setLoading(false);
            setRefreshing(false);
        }
    }
    // Initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmployeeTypesPage.useEffect": ()=>{
            fetchOrganizations();
        }
    }["EmployeeTypesPage.useEffect"], []);
    // Load departments when organization changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmployeeTypesPage.useEffect": ()=>{
            if (organizations.length === 1 && !selectedOrganization) {
                setSelectedOrganization(organizations[0].name);
            }
            if (selectedOrganization) {
                const selectedOrg = organizations.find({
                    "EmployeeTypesPage.useEffect.selectedOrg": (org)=>org.name === selectedOrganization
                }["EmployeeTypesPage.useEffect.selectedOrg"]);
                if (selectedOrg) {
                    fetchDepartments(selectedOrg._id);
                }
            } else {
                setDepartments([]);
                setSelectedDepartment("");
            }
        }
    }["EmployeeTypesPage.useEffect"], [
        selectedOrganization,
        organizations
    ]);
    // Fetch data when filters change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmployeeTypesPage.useEffect": ()=>{
            if (organizations.length > 0) {
                fetchAllData();
            }
        }
    }["EmployeeTypesPage.useEffect"], [
        selectedOrganization,
        selectedDepartment,
        organizations
    ]);
    // Handle modal success
    const handleModalSuccess = ()=>{
        fetchAllData();
    };
    // Clear filters
    const clearFilters = ()=>{
        setSearchTerm("");
        setSelectedOrganization("");
        setSelectedDepartment("");
    };
    // Refresh data
    const refreshData = ()=>{
        setRefreshing(true);
        fetchAllData();
    };
    // Toggle expand/collapse
    const toggleTypeExpand = (typeId)=>{
        setExpandedTypes((prev)=>({
                ...prev,
                [typeId]: !prev[typeId]
            }));
    };
    const toggleCategoryExpand = (categoryId)=>{
        setExpandedCategories((prev)=>({
                ...prev,
                [categoryId]: !prev[categoryId]
            }));
    };
    // Handle edit category
    const handleEditCategory = (category)=>{
        setSelectedCategory(category);
        setShowEditCategoryModal(true);
    };
    // Handle delete category
    const handleDeleteCategory = async (categoryId)=>{
        if (!confirm("Are you sure you want to delete this category? This action cannot be undone.")) {
            return;
        }
        try {
            const res = await fetch(`/api/v1/admin/crm/employeecategory/${categoryId}`, {
                method: "DELETE"
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to delete category");
            }
            fetchAllData(); // Refresh data after deletion
        } catch (err) {
            setError(err.message || "Failed to delete category");
        }
    };
    // Handle delete employee type
    const handleDeleteType = async (typeId)=>{
        if (!confirm("Are you sure you want to delete this employee type? This will also delete all associated categories and sub-categories.")) {
            return;
        }
        try {
            const res = await fetch(`/api/v1/admin/crm/employeetype/${typeId}`, {
                method: "DELETE"
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to delete employee type");
            }
            fetchAllData();
        } catch (err) {
            setError(err.message || "Failed to delete employee type");
        }
    };
    // Build hierarchy structure
    const buildHierarchy = ()=>{
        const hierarchy = [];
        employeeTypes.forEach((type)=>{
            const typeCategories = categories.filter((cat)=>cat.employeeTypeId?._id === type._id);
            const categoriesWithSubs = typeCategories.map((category)=>{
                const categorySubs = subCategories.filter((sub)=>sub.employeeCategoryId._id === category._id);
                return {
                    ...category,
                    subCategories: categorySubs
                };
            });
            hierarchy.push({
                ...type,
                categories: categoriesWithSubs
            });
        });
        return hierarchy;
    };
    const hierarchy = buildHierarchy();
    // Filter hierarchy based on search
    const filteredHierarchy = hierarchy.filter((type)=>{
        if (!searchTerm) return true;
        const searchLower = searchTerm.toLowerCase();
        if (type.employeeType.toLowerCase().includes(searchLower)) return true;
        const hasMatchingCategory = type.categories.some((cat)=>cat.employeeCategory.toLowerCase().includes(searchLower));
        if (hasMatchingCategory) return true;
        const hasMatchingSubCategory = type.categories.some((cat)=>cat.subCategories.some((sub)=>sub.employeeSubCategory.toLowerCase().includes(searchLower)));
        return hasMatchingSubCategory;
    });
    // Statistics
    const stats = {
        totalTypes: employeeTypes.length,
        totalCategories: categories.length,
        totalSubCategories: subCategories.length,
        inHouseTypes: employeeTypes.filter((t)=>t.employeeType === "In House").length,
        thirdPartyTypes: employeeTypes.filter((t)=>t.employeeType === "Third Party").length
    };
    // Loading state
    if (loading && !refreshing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-b border-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-6 py-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "w-11 h-11 rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1053,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-8 w-48 mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1055,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                    className: "h-4 w-64"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1056,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1054,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1052,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-10 w-32 rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1060,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-10 w-32 rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1061,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                            className: "h-10 w-32 rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1062,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1059,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                            lineNumber: 1051,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                        lineNumber: 1050,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                    lineNumber: 1049,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-6",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl border border-slate-200 p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "h-3 w-20 mb-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1075,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "h-8 w-12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1076,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1074,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "w-10 h-10 rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1078,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1073,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1072,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                            lineNumber: 1070,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-slate-200 p-6 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-10 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1087,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-10 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1088,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "h-10 w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1089,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-10 w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1091,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                className: "h-10 w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1092,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1090,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1086,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                            lineNumber: 1085,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl border border-slate-200 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-slate-50 border-b border-slate-200 flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "w-8 h-8 rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1103,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                                className: "w-10 h-10 rounded-lg"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                                        className: "h-6 w-32 mb-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                        lineNumber: 1107,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                                        className: "h-3 w-40"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                        lineNumber: 1108,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                lineNumber: 1106,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1104,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "h-4 w-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1113,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "h-8 w-8 rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1114,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                        className: "h-8 w-8 rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1115,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1112,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1101,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1100,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                            lineNumber: 1098,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                    lineNumber: 1068,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
            lineNumber: 1047,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-11 bg-indigo-500 rounded-xl flex items-center justify-center shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1134,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold text-slate-900",
                                                children: "Employee Hierarchy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1137,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm mt-0.5",
                                                children: "Manage employee types, categories & sub-categories"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowDocumentsAddModal(true),
                                        className: "inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1150,
                                                columnNumber: 17
                                            }, this),
                                            "Add Supported Documents"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowCreateModal(true),
                                        className: "inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1157,
                                                columnNumber: 17
                                            }, this),
                                            "Add Employee Type"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowCategoryModal(true),
                                        className: "inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1164,
                                                columnNumber: 17
                                            }, this),
                                            "Add Category"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSubCategoryModal(true),
                                        className: "inline-flex items-center gap-2 px-5 py-2.5 bg-slate-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1171,
                                                columnNumber: 17
                                            }, this),
                                            "Add Sub-Category"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                        lineNumber: 1131,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                    lineNumber: 1130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                lineNumber: 1129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-4 border-l-4 border-l-indigo-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600",
                                                    children: "Employee Types"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-slate-900 mt-1",
                                                    children: stats.totalTypes
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1186,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-5 h-5 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1189,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1188,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1183,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-4 border-l-4 border-l-green-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600",
                                                    children: "Categories"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-slate-900 mt-1",
                                                    children: stats.totalCategories
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1197,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                className: "w-5 h-5 text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1200,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1194,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-4 border-l-4 border-l-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600",
                                                    children: "Sub-Categories"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1207,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-slate-900 mt-1",
                                                    children: stats.totalSubCategories
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1208,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1206,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                className: "w-5 h-5 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1211,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1210,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1205,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-4 border-l-4 border-l-green-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600",
                                                    children: "In-House"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1218,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-slate-900 mt-1",
                                                    children: stats.inHouseTypes
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                className: "w-5 h-5 text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1222,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1216,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 p-4 border-l-4 border-l-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600",
                                                    children: "Third Party"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-slate-900 mt-1",
                                                    children: stats.thirdPartyTypes
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                className: "w-5 h-5 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1233,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                        lineNumber: 1181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-6 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1243,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search types, categories...",
                                                value: searchTerm,
                                                onChange: (e)=>setSearchTerm(e.target.value),
                                                className: "w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1244,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1242,
                                        columnNumber: 15
                                    }, this),
                                    organizations.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedOrganization,
                                            onChange: (e)=>{
                                                setSelectedOrganization(e.target.value);
                                                setSelectedDepartment("");
                                            },
                                            className: "w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "All Organizations"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1262,
                                                    columnNumber: 21
                                                }, this),
                                                organizations.map((org)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: org.name,
                                                        children: org.name
                                                    }, org._id, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1264,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1254,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1253,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedDepartment,
                                            onChange: (e)=>setSelectedDepartment(e.target.value),
                                            disabled: !selectedOrganization,
                                            className: "w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white disabled:bg-slate-100 disabled:cursor-not-allowed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "All Departments"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1278,
                                                    columnNumber: 19
                                                }, this),
                                                departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: dept.departmentName,
                                                        children: dept.departmentName
                                                    }, dept._id, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1280,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1272,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1271,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            (searchTerm || selectedOrganization || selectedDepartment) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: clearFilters,
                                                className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterX$3e$__["FilterX"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1292,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Clear"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1288,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: refreshData,
                                                disabled: refreshing,
                                                className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: `w-4 h-4 ${refreshing ? 'animate-spin' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                        lineNumber: 1301,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Refresh"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                lineNumber: 1296,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1286,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1241,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                            lineNumber: 1240,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                        lineNumber: 1239,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-red-800",
                                            children: "Error"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1314,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-700 mt-1",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1315,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                            lineNumber: 1311,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                        lineNumber: 1310,
                        columnNumber: 11
                    }, this),
                    filteredHierarchy.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl border border-slate-200 p-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-16 h-16 text-slate-300 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1323,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-slate-900 mb-2",
                                children: "No employee hierarchy found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1324,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 mb-6",
                                children: searchTerm || selectedOrganization || selectedDepartment ? "Try adjusting your search or filters" : "Get started by creating your first employee type"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCreateModal(true),
                                    className: "inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1337,
                                            columnNumber: 17
                                        }, this),
                                        "Create Employee Type"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                    lineNumber: 1333,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1332,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                        lineNumber: 1322,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: filteredHierarchy.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-200 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-slate-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleTypeExpand(type._id),
                                                            className: "p-2 hover:bg-white/50 rounded-lg transition-colors",
                                                            children: expandedTypes[type._id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                className: "w-5 h-5 text-slate-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                lineNumber: 1358,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "w-5 h-5 text-slate-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                lineNumber: 1360,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                            lineNumber: 1353,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                        className: "w-5 h-5 text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                        lineNumber: 1365,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                    lineNumber: 1364,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-semibold text-slate-900 text-lg",
                                                                            children: type.employeeType
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                            lineNumber: 1368,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-3 mt-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-slate-600",
                                                                                    children: type.organizationId?.name || "N/A"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                    lineNumber: 1372,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-slate-300",
                                                                                    children: "•"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                    lineNumber: 1375,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-slate-600",
                                                                                    children: type.departmentId?.departmentName || "N/A"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                    lineNumber: 1376,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                            lineNumber: 1371,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                    lineNumber: 1367,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                            lineNumber: 1363,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1352,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-slate-600",
                                                            children: [
                                                                type.categories.length,
                                                                " ",
                                                                type.categories.length === 1 ? 'category' : 'categories'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                            lineNumber: 1384,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setSelectedType(type);
                                                                setShowEditTypeModal(true);
                                                            },
                                                            className: "p-2 hover:bg-white/50 rounded-lg transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                className: "w-4 h-4 text-slate-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                lineNumber: 1394,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                            lineNumber: 1387,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteType(type._id),
                                                            className: "p-2 hover:bg-red-50 rounded-lg transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4 text-red-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                lineNumber: 1400,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                            lineNumber: 1396,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1383,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1351,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1350,
                                        columnNumber: 17
                                    }, this),
                                    expandedTypes[type._id] && type.categories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: type.categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-slate-200 rounded-lg overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-green-50 border-b border-slate-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>toggleCategoryExpand(category._id),
                                                                                className: "p-1 hover:bg-white/50 rounded transition-colors",
                                                                                children: expandedCategories[category._id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                                    className: "w-4 h-4 text-slate-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                    lineNumber: 1423,
                                                                                    columnNumber: 37
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                    className: "w-4 h-4 text-slate-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                    lineNumber: 1425,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                lineNumber: 1418,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                                            className: "w-4 h-4 text-white"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                            lineNumber: 1430,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                        lineNumber: 1429,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                            className: "font-semibold text-slate-900",
                                                                                            children: category.employeeCategory
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                            lineNumber: 1433,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                        lineNumber: 1432,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                lineNumber: 1428,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                        lineNumber: 1417,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-slate-600",
                                                                                children: [
                                                                                    category.subCategories.length,
                                                                                    " sub-",
                                                                                    category.subCategories.length === 1 ? 'category' : 'categories'
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                lineNumber: 1440,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleEditCategory(category),
                                                                                className: "p-1.5 hover:bg-white rounded transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                    className: "w-3.5 h-3.5 text-slate-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                    lineNumber: 1447,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                lineNumber: 1443,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeleteCategory(category._id),
                                                                                className: "p-1.5 hover:bg-red-50 rounded transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "w-3.5 h-3.5 text-red-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                    lineNumber: 1453,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                lineNumber: 1449,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                        lineNumber: 1439,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                lineNumber: 1416,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                            lineNumber: 1415,
                                                            columnNumber: 27
                                                        }, this),
                                                        expandedCategories[category._id] && category.subCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",
                                                                children: category.subCategories.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between p-2 bg-slate-50 border border-blue-200 rounded-lg",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-6 h-6 bg-slate-500 rounded flex items-center justify-center",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                                            className: "w-3 h-3 text-white"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                            lineNumber: 1469,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                        lineNumber: 1468,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm font-medium text-slate-900",
                                                                                        children: sub.employeeSubCategory
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                        lineNumber: 1471,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                lineNumber: 1467,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "p-1 hover:bg-white rounded transition-colors",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                            className: "w-3 h-3 text-slate-600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                            lineNumber: 1477,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                        lineNumber: 1476,
                                                                                        columnNumber: 39
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "p-1 hover:bg-red-50 rounded transition-colors",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                            className: "w-3 h-3 text-red-600"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                            lineNumber: 1480,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                        lineNumber: 1479,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                                lineNumber: 1475,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, sub._id, true, {
                                                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                        lineNumber: 1463,
                                                                        columnNumber: 35
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                                lineNumber: 1461,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                            lineNumber: 1460,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, category._id, true, {
                                                    fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                                    lineNumber: 1410,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                            lineNumber: 1408,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                        lineNumber: 1407,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, type._id, true, {
                                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                                lineNumber: 1345,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                        lineNumber: 1343,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                lineNumber: 1179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$DocumentsAdd$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showDocumentsAddModal,
                onClose: ()=>setShowDocumentsAddModal(false),
                onSuccess: handleModalSuccess
            }, void 0, false, {
                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                lineNumber: 1499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$CreateEmployeeTypeModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCreateModal,
                onClose: ()=>setShowCreateModal(false),
                onSuccess: handleModalSuccess,
                organizations: organizations
            }, void 0, false, {
                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                lineNumber: 1504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$CreateCategoryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCategoryModal,
                onClose: ()=>setShowCategoryModal(false),
                onSuccess: handleModalSuccess,
                organizations: organizations
            }, void 0, false, {
                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                lineNumber: 1510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$CreateSubCategoryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showSubCategoryModal,
                onClose: ()=>setShowSubCategoryModal(false),
                onSuccess: handleModalSuccess,
                organizations: organizations
            }, void 0, false, {
                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                lineNumber: 1516,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$EditCategoryModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showEditCategoryModal,
                onClose: ()=>{
                    setShowEditCategoryModal(false);
                    setSelectedCategory(null);
                },
                onSuccess: handleModalSuccess,
                organizations: organizations,
                category: selectedCategory
            }, void 0, false, {
                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                lineNumber: 1522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$EditEmployeeTypeModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showEditTypeModal,
                onClose: ()=>{
                    setShowEditTypeModal(false);
                    setSelectedType(null);
                },
                onSuccess: handleModalSuccess,
                organizations: organizations,
                employeeTypeData: selectedType
            }, void 0, false, {
                fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
                lineNumber: 1533,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/organization/employeeType/page.jsx",
        lineNumber: 1127,
        columnNumber: 5
    }, this);
}
_s(EmployeeTypesPage, "Ip1l9c73qGYHODdnsa/80qIBhCM=");
_c = EmployeeTypesPage;
var _c;
__turbopack_context__.k.register(_c, "EmployeeTypesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0x05i43._.js.map