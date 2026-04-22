module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/db/connect.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
//sample
console.log('🔧 MongoDB URI found:', MONGODB_URI ? 'Yes' : 'No');
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    console.log('🔄 dbConnect() called');
    if (cached.conn) {
        console.log('✅ Using cached MongoDB connection');
        return cached.conn;
    }
    if (!cached.promise) {
        console.log('🔌 Creating new MongoDB connection...');
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            console.log('🎉 MongoDB connected successfully!');
            console.log('📊 Database name:', mongoose.connection.db?.databaseName);
            console.log('👤 Connection state:', mongoose.connection.readyState);
            return mongoose;
        }).catch((error)=>{
            console.error('💥 MongoDB connection failed:', error);
            console.error('🔍 Error details:', error.message);
            cached.promise = null;
            throw error;
        });
    }
    try {
        console.log('⏳ Waiting for MongoDB connection...');
        cached.conn = await cached.promise;
        console.log('🚀 MongoDB connection ready');
    } catch (e) {
        console.error('❌ Error in dbConnect:', e);
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = dbConnect;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/src/lib/db/models/payroll/StatutoryConfig.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const ptSlabSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    minSalary: {
        type: Number,
        required: true
    },
    maxSalary: {
        type: Number,
        required: true
    },
    taxAmount: {
        type: Number,
        required: true
    },
    // Some states have different tax for specific months (e.g., Feb/March)
    exceptionMonth: {
        type: Number,
        default: null
    },
    exceptionTaxAmount: {
        type: Number,
        default: null
    }
}, {
    _id: false
});
const lwfRuleSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    employeeContribution: {
        type: Number,
        required: true
    },
    employerContribution: {
        type: Number,
        required: true
    },
    deductionCycle: {
        type: String,
        enum: [
            'monthly',
            'half-yearly',
            'yearly'
        ],
        default: 'monthly'
    },
    deductionMonths: [
        Number
    ] // e.g., [6, 12] for June and Dec
}, {
    _id: false
});
const statutoryConfigSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    state: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    isEnabled: {
        type: Boolean,
        default: true
    },
    ptApplicable: {
        type: Boolean,
        default: true
    },
    ptSlabs: [
        ptSlabSchema
    ],
    lwfApplicable: {
        type: Boolean,
        default: false
    },
    lwfRules: lwfRuleSchema,
    // Metadata
    lastUpdatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.StatutoryConfig || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('StatutoryConfig', statutoryConfigSchema);
}),
"[project]/src/lib/utils/statutoryCalculations.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatutoryCalculator",
    ()=>StatutoryCalculator
]);
class StatutoryCalculator {
    static calculatePF(basicSalary, da = 0, isVoluntaryPF = false) {
        const grossSalary = basicSalary + da;
        const pfWageLimit = 15000; // Current PF wage limit
        let employeeContribution = 0;
        let employerContribution = 0;
        let pensionContribution = 0;
        if (isVoluntaryPF) {
            // Voluntary PF - 12% of actual basic + DA
            employeeContribution = grossSalary * 0.12;
            employerContribution = grossSalary * 0.12;
            pensionContribution = grossSalary * 0.0833;
        } else {
            // Standard PF - 12% of gross salary or limit, whichever is lower
            const pfBase = Math.min(grossSalary, pfWageLimit);
            employeeContribution = pfBase * 0.12;
            employerContribution = pfBase * 0.12;
            pensionContribution = pfBase * 0.0833;
        }
        // EDLI Charges (0.5% of PF base)
        const edliContribution = Math.min(grossSalary, pfWageLimit) * 0.005;
        // Admin Charges (0.5% of PF base)
        const adminCharges = Math.min(grossSalary, pfWageLimit) * 0.005;
        return {
            employeeContribution: Math.round(employeeContribution),
            employerContribution: Math.round(employerContribution),
            pensionContribution: Math.round(pensionContribution),
            edliContribution: Math.round(edliContribution),
            adminCharges: Math.round(adminCharges),
            totalEmployerContribution: Math.round(employerContribution + pensionContribution + edliContribution + adminCharges)
        };
    }
    static calculateESIC(grossSalary) {
        const esicWageLimit = 21000; // Current ESIC wage limit
        if (grossSalary <= esicWageLimit) {
            const employeeContribution = grossSalary * 0.0075; // 0.75%
            const employerContribution = grossSalary * 0.0325; // 3.25%
            return {
                employeeContribution: Math.round(employeeContribution),
                employerContribution: Math.round(employerContribution),
                totalContribution: Math.round(employeeContribution + employerContribution),
                isApplicable: true
            };
        }
        return {
            employeeContribution: 0,
            employerContribution: 0,
            totalContribution: 0,
            isApplicable: false
        };
    }
    static calculateProfessionalTax(grossSalary, state = 'Maharashtra', ptConfig = null) {
        // If dynamic config is provided, use it
        if (ptConfig && Array.isArray(ptConfig.ptSlabs) && ptConfig.ptSlabs.length > 0) {
            const currentMonth = ptConfig.month || new Date().getMonth() + 1;
            const applicableSlab = ptConfig.ptSlabs.find((slab)=>grossSalary >= slab.minSalary && grossSalary <= slab.maxSalary);
            if (applicableSlab) {
                // Handle monthly exceptions (e.g., Maharashtra Feb: 300)
                if (applicableSlab.exceptionMonth === currentMonth && applicableSlab.exceptionTaxAmount !== null) {
                    return applicableSlab.exceptionTaxAmount;
                }
                return applicableSlab.taxAmount;
            }
            return 0;
        }
        // Fallback to hardcoded rates if no config provided
        // Professional tax rates vary by state
        const stateRates = {
            'Maharashtra': [
                {
                    min: 0,
                    max: 7500,
                    tax: 0
                },
                {
                    min: 7501,
                    max: 10000,
                    tax: 175
                },
                {
                    min: 10001,
                    max: Infinity,
                    tax: 200
                }
            ],
            'Karnataka': [
                {
                    min: 0,
                    max: 15000,
                    tax: 0
                },
                {
                    min: 15001,
                    max: Infinity,
                    tax: 200
                }
            ],
            'Tamil Nadu': [
                {
                    min: 0,
                    max: 21000,
                    tax: 0
                },
                {
                    min: 21001,
                    max: 30000,
                    tax: 135
                },
                {
                    min: 30001,
                    max: 45000,
                    tax: 315
                },
                {
                    min: 45001,
                    max: 60000,
                    tax: 690
                },
                {
                    min: 60001,
                    max: 75000,
                    tax: 1025
                },
                {
                    min: 75001,
                    max: Infinity,
                    tax: 1250
                }
            ]
        };
        const rates = stateRates[state] || stateRates['Maharashtra'];
        const applicableRate = rates.find((rate)=>grossSalary >= rate.min && grossSalary <= rate.max);
        if (applicableRate) {
            // Hardcoded Fallback for Maharashtra Feb exception if ptConfig.month is passed or if current month is Feb
            const currentMonth = ptConfig && ptConfig.month || new Date().getMonth() + 1;
            if (state === 'Maharashtra' && currentMonth === 2 && applicableRate.tax === 200) {
                return 300;
            }
            return applicableRate.tax;
        }
        return 0;
    }
    static calculateGratuity(basicSalary) {
        // Gratuity Calculation Formula: (Basic Salary * 15 / 26)
        // This is the amount for one year of service.
        // To get the monthly provision: ((Basic Salary * 15 / 26) / 12)
        if (!basicSalary || basicSalary <= 0) return 0;
        const yearlyGratuity = basicSalary * 15 / 26;
        const monthlyGratuity = yearlyGratuity / 12;
        return Math.round(monthlyGratuity);
    }
    static calculateFor31Days(basicSalary, daysInMonth = 31, presentDays) {
        const dailyWage = basicSalary / daysInMonth;
        const payableAmount = dailyWage * presentDays;
        return {
            dailyWage: Math.round(dailyWage),
            payableAmount: Math.round(payableAmount),
            lopAmount: Math.round(basicSalary - payableAmount)
        };
    }
}
}),
"[project]/src/lib/db/models/payroll/Employee.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$StatutoryConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/payroll/StatutoryConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$statutoryCalculations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/statutoryCalculations.js [app-route] (ecmascript)");
;
;
;
;
;
const DEFAULT_USER_ID = "674e92d8ce08af0109923297"; // Default admin ID for system actions.
// Salary Structure Schemas (from Template)
const earningComponentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: true
    },
    editable: {
        type: Boolean,
        default: true
    },
    calculationType: {
        type: String,
        enum: [
            'percentage',
            'fixed'
        ],
        default: 'percentage'
    },
    percentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    fixedAmount: {
        type: Number,
        default: 0,
        min: 0
    }
}, {
    _id: false
});
const deductionComponentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: true
    },
    editable: {
        type: Boolean,
        default: true
    },
    calculationType: {
        type: String,
        enum: [
            'percentage',
            'fixed'
        ],
        default: 'percentage'
    },
    percentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    fixedAmount: {
        type: Number,
        default: 0,
        min: 0
    }
}, {
    _id: false
});
const payslipFieldSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: true
    }
}, {
    _id: false
});
// Employee's Personal Payslip Structure
const employeePayslipStructureSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    salaryType: {
        type: String,
        enum: [
            'monthly',
            'perday'
        ],
        default: 'monthly'
    },
    basicSalary: {
        type: Number,
        required: true,
        min: 0
    },
    earnings: [
        earningComponentSchema
    ],
    deductions: [
        deductionComponentSchema
    ],
    additionalFields: [
        payslipFieldSchema
    ],
    // Computed fields
    totalEarnings: {
        type: Number,
        default: 0
    },
    totalDeductions: {
        type: Number,
        default: 0
    },
    netSalary: {
        type: Number,
        default: 0
    },
    perDaySalary: {
        type: Number,
        default: 0
    },
    grossSalary: {
        type: Number,
        default: 0
    }
}, {
    _id: false
});
const bankAccountSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    accountNumber: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    },
    branch: String,
    branchAddress: String
});
const documentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: String,
    name: String,
    type: String,
    size: Number,
    category: String,
    categoryName: String,
    uploadDate: Date,
    url: String,
    cloudinaryId: String,
    cloudinaryUrl: String,
    thumbnail: String
});
const attendanceApprovalSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    required: {
        type: String,
        enum: [
            "yes",
            "no"
        ],
        default: "no"
    },
    shift1Supervisor: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        default: null,
        required: false
    },
    shift2Supervisor: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        default: null,
        required: false
    }
});
const employeeSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    // NEW FIELD: Password for login
    password: {
        type: String,
        select: false
    },
    // NEW FIELD: Role (Resticted Access)
    role: {
        type: String,
        enum: [
            "employee",
            "attendance_only",
            "admin"
        ],
        default: "employee"
    },
    // NEW FIELD: Compliance Status
    isCompliant: {
        type: Boolean,
        default: false
    },
    // NEW FIELD: TDS Applicable
    isTDSApplicable: {
        type: Boolean,
        default: false
    },
    // NEW FIELD: Tax Regime Selection (Keka Standard)
    taxRegime: {
        type: String,
        enum: [
            'old',
            'new'
        ],
        default: 'new'
    },
    personalDetails: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        // NEW FIELD: Blood Group
        bloodGroup: String,
        // NEW FIELDS: Addresses
        address: {
            street: String,
            city: String,
            state: String,
            zipCode: String
        },
        temporaryAddress: {
            street: String,
            city: String,
            state: String,
            zipCode: String
        },
        permanentAddress: {
            street: String,
            city: String,
            state: String,
            zipCode: String
        },
        dateOfJoining: {
            type: Date,
            required: true
        },
        dateOfBirth: Date,
        gender: {
            type: String,
            enum: [
                "Male",
                "Female",
                "Other"
            ]
        },
        emergencyContact: {
            name: String,
            relationship: String,
            phone: String,
            address: String
        }
    },
    jobDetails: {
        department: {
            type: String,
            required: true
        },
        departmentId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "Department",
            required: false,
            default: null
        },
        employeeType: String,
        employeeTypeId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "EmployeeType",
            required: false,
            default: null
        },
        category: String,
        categoryId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "EmployeeCategory",
            required: false,
            default: null
        },
        organization: String,
        organizationId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "Organization",
            required: false,
            default: null
        },
        businessUnitId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "BusinessUnit",
            required: false,
            default: null
        },
        teamId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "Team",
            required: false,
            default: null
        },
        costCenterId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "CostCenter",
            required: false,
            default: null
        },
        designation: {
            type: String,
            required: true
        },
        reportingManager: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "Employee",
            default: null,
            required: false
        },
        // NEW FIELDS: Team Lead and Supervisor
        teamLead: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "Employee",
            default: null
        },
        workLocation: String,
        assignedOfficeId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "OfficeLocation",
            default: null
        },
        biometricDeviceId: {
            type: String,
            trim: true,
            default: null
        },
        defaultShift: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "WorkingShift",
            default: null
        },
        attendanceSettings: {
            allowedModes: {
                type: [
                    String
                ],
                enum: [
                    "Web",
                    "Mobile",
                    "Biometric"
                ],
                default: [
                    "Web",
                    "Mobile"
                ]
            },
            requireGeofencing: {
                type: Boolean,
                default: true
            },
            requireIPWhitelisting: {
                type: Boolean,
                default: false
            }
        },
        workState: {
            type: String,
            default: 'Maharashtra' // Fallback
        },
        holidayListId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: 'HolidayList',
            default: null
        }
    },
    salaryDetails: {
        bankAccount: {
            accountNumber: {
                type: String,
                required: true
            },
            bankName: {
                type: String,
                required: true
            },
            ifscCode: {
                type: String,
                required: true
            },
            branch: String,
            branchAddress: String
        },
        panNumber: String,
        aadharNumber: String
    },
    // Employee's Personal Payslip Structure
    payslipStructure: {
        type: employeePayslipStructureSchema,
        required: true
    },
    // NEW FIELD: Variable Pay Structure (Target Amounts)
    variablePayStructure: [
        {
            componentId: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
                ref: 'VariablePayConfig',
                required: true
            },
            targetAmount: {
                type: Number,
                required: true,
                min: 0
            },
            frequency: {
                type: String,
                enum: [
                    'Monthly',
                    'Quarterly',
                    'Half-Yearly',
                    'Annually'
                ],
                default: 'Monthly'
            }
        }
    ],
    workingHr: {
        type: Number,
        required: true
    },
    otApplicable: {
        type: String,
        enum: [
            "yes",
            "no"
        ],
        default: "no"
    },
    esicApplicable: {
        type: String,
        enum: [
            "yes",
            "no"
        ],
        default: "no"
    },
    pfApplicable: {
        type: String,
        enum: [
            "yes",
            "no"
        ],
        default: "no"
    },
    probation: {
        type: String,
        enum: [
            "yes",
            "no"
        ],
        default: "no"
    },
    probationDuration: {
        type: Number,
        default: 0
    },
    isAttending: {
        type: String,
        enum: [
            "yes",
            "no"
        ],
        default: "no"
    },
    gratuityApplicable: {
        type: String,
        enum: [
            "yes",
            "no"
        ],
        default: "no"
    },
    attendanceApproval: {
        type: attendanceApprovalSchema,
        default: ()=>({
                required: "no",
                shift1Supervisor: null,
                shift2Supervisor: null
            })
    },
    documents: {
        type: [
            documentSchema
        ],
        default: []
    },
    compOffBalance: {
        type: Number,
        default: 0,
        min: 0
    },
    status: {
        type: String,
        enum: [
            "Active",
            "Inactive",
            "Suspended",
            "Terminated"
        ],
        default: "Active"
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User"
    },
    sessionToken: {
        type: String
    },
    forgotPasswordToken: {
        type: String,
        default: null
    },
    forgotPasswordExpires: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});
// Indexes
employeeSchema.index({
    'jobDetails.department': 1
});
employeeSchema.index({
    'jobDetails.organizationId': 1
});
employeeSchema.index({
    'jobDetails.departmentId': 1
});
employeeSchema.index({
    status: 1
});
// Virtual for full name
employeeSchema.virtual('fullName').get(function() {
    return `${this.personalDetails.firstName} ${this.personalDetails.lastName}`;
});
// Method to calculate salary components (Async to pull from other modules)
employeeSchema.methods.calculateSalaryComponents = async function(statutoryConfig = null, params = {}) {
    const now = new Date();
    const month = Number(params.month || now.getMonth() + 1);
    const year = Number(params.year || now.getFullYear());
    const workingDaysInMonth = Number(params.workingDaysInMonth || new Date(year, month, 0).getDate());
    const structure = this.payslipStructure;
    if (!structure) {
        throw new Error("Salary structure (payslipStructure) is missing for this employee.");
    }
    // 1. INTEGRATE LEAVES & ATTENDANCE (LOP)
    let lopDays = params.lopDays || 0;
    try {
        const Leave = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Leave || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Leave");
        const Attendance = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Attendance || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Attendance");
        // a. Get Unpaid Leaves
        const leaveRecord = await Leave.findOne({
            employeeId: this._id,
            month: Number(month),
            year: Number(year),
            status: "Approved"
        });
        if (leaveRecord && leaveRecord.summary) {
            lopDays += leaveRecord.summary.unpaidLeaves + (leaveRecord.summary.halfDayUnpaidLeaves || 0) * 0.5;
        }
        // b. Get Absent Days from Attendance (that are not covered by leaves)
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);
        // Explicitly cast to ObjectId for robustness
        const empId = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId(this._id);
        const absentRecords = await Attendance.find({
            employee: empId,
            date: {
                $gte: startDate,
                $lte: endDate
            },
            status: "Absent"
        });
        // c. HOLIDAY-AWARE LOP (Keka Standard): Exclude absent days that fall on holidays
        let effectiveAbsentDays = absentRecords.length;
        try {
            const Holiday = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Holiday || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Holiday");
            const HolidayList = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.HolidayList || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("HolidayList");
            const empOrgId = this.jobDetails?.organizationId;
            const empOfficeId = this.jobDetails?.assignedOfficeId;
            let empHolidayListId = this.jobDetails?.holidayListId;
            // AUTO-RESOLVE: Find holiday list from employee's branch/office location
            if (!empHolidayListId && empOfficeId) {
                const listForOffice = await HolidayList.findOne({
                    applicableLocations: empOfficeId,
                    year: Number(year),
                    status: 'Active'
                }).lean();
                if (listForOffice) empHolidayListId = listForOffice._id;
            }
            // FALLBACK: Use the default holiday list for the org
            if (!empHolidayListId && empOrgId) {
                const defaultList = await HolidayList.findOne({
                    organizationId: empOrgId,
                    year: Number(year),
                    isDefault: true,
                    status: 'Active'
                }).lean();
                if (defaultList) empHolidayListId = defaultList._id;
            }
            let holidayQuery = {
                status: "Active",
                date: {
                    $gte: startDate,
                    $lte: endDate
                },
                isRestricted: {
                    $ne: true
                } // Only mandatory holidays auto-exclude LOP
            };
            if (empHolidayListId) {
                holidayQuery.holidayListId = empHolidayListId;
            } else if (empOrgId) {
                holidayQuery.organizationId = empOrgId;
            }
            const holidays = await Holiday.find(holidayQuery).lean();
            const holidayDates = new Set();
            holidays.forEach((h)=>{
                // Expand multi-day holidays into individual dates
                const start = new Date(h.date);
                const end = h.endDate ? new Date(h.endDate) : start;
                const days = h.numberOfDays || 1;
                for(let i = 0; i < days; i++){
                    const d = new Date(start);
                    d.setDate(d.getDate() + i);
                    if (d <= end) holidayDates.add(d.toDateString());
                }
            });
            // CLAIMED RESTRICTED HOLIDAYS EXCLUSION
            try {
                const RestrictedHolidayClaim = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.RestrictedHolidayClaim || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("RestrictedHolidayClaim");
                const claims = await RestrictedHolidayClaim.find({
                    employeeId: this._id,
                    status: "Approved",
                    date: {
                        $gte: startDate,
                        $lte: endDate
                    }
                }).lean();
                claims.forEach((claim)=>{
                    if (claim.date) holidayDates.add(new Date(claim.date).toDateString());
                });
            } catch (claimErr) {
                console.error(`Error fetching restricted claims for LOP exclusion (${this.employeeId}):`, claimErr);
            }
            // Filter out absent records that fall on a holiday
            const nonHolidayAbsents = absentRecords.filter((rec)=>!holidayDates.has(new Date(rec.date).toDateString()));
            effectiveAbsentDays = nonHolidayAbsents.length;
        } catch (holidayErr) {
            console.error(`Error fetching holidays for LOP exclusion (${this.employeeId}):`, holidayErr);
        }
        console.log(`[Diagnostic] EMP=${this.employeeId} | Month=${month}/${year} | absentCount=${absentRecords.length} | effectiveAbsent=${effectiveAbsentDays}`);
        lopDays += effectiveAbsentDays;
    } catch (err) {
        console.error(`Error fetching leaves/attendance for ${this.employeeId}:`, err);
    }
    // 2. INTEGRATE OVERTIME
    let overtimeHours = 0;
    let payrollConfig = params.payrollConfig || null;
    try {
        // Auto-fetch PayrollConfig if not provided (for individual/preview calculations)
        if (!payrollConfig && this.jobDetails?.organizationId) {
            const PayrollConfig = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.PayrollConfig || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("PayrollConfig");
            payrollConfig = await PayrollConfig.findOne({
                company: this.jobDetails.organizationId
            });
        }
        const OvertimeRequest = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.OvertimeRequest || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("OvertimeRequest");
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);
        const otRequests = await OvertimeRequest.find({
            employee: this._id,
            status: "Approved",
            date: {
                $gte: startDate,
                $lte: endDate
            }
        });
        overtimeHours = otRequests.reduce((sum, req)=>sum + (req.hours || 0), 0);
    } catch (err) {
        console.error("Error fetching overtime for salary calc:", err);
    }
    // 3. INTEGRATE LOANS/ADVANCES (Installments)
    let loanDeductionsAmount = 0;
    const loanDeductionsList = [];
    try {
        const Loan = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Loan || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Loan");
        const activeLoans = await Loan.find({
            employee: this._id,
            status: "Approved"
        });
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);
        for (const loan of activeLoans){
            const pendingInstallment = loan.repaymentSchedule.find((inst)=>inst.status === "Pending" && new Date(inst.dueDate) >= startDate && new Date(inst.dueDate) <= endDate);
            if (pendingInstallment) {
                loanDeductionsAmount += pendingInstallment.amount;
                loanDeductionsList.push({
                    name: `Loan Repayment (${loan.type})`,
                    amount: pendingInstallment.amount,
                    loanId: loan._id,
                    installmentId: pendingInstallment._id
                });
            }
        }
    } catch (err) {
        console.error("Error fetching loans for salary calc:", err);
    }
    // 4. INTEGRATE RETRO ADJUSTMENTS
    let retroEarnings = 0;
    let retroDeductions = 0;
    const retroList = [];
    try {
        const RetroAdjustment = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.RetroAdjustment || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("RetroAdjustment");
        const pendingRetros = await RetroAdjustment.find({
            employeeId: this._id,
            status: "Pending"
        });
        for (const retro of pendingRetros){
            if (retro.type === 'Earning') {
                retroEarnings += retro.amount;
            } else {
                retroDeductions += retro.amount;
            }
            retroList.push({
                name: `${retro.componentName} (${retro.adjustmentType})`,
                amount: retro.amount,
                type: retro.type,
                retroId: retro._id
            });
        }
    } catch (err) {
        console.error("Error fetching retros for salary calc:", err);
    }
    // 5. INTEGRATE VARIABLE PAY
    let variablePayAmount = 0;
    const variablePayList = [];
    try {
        const PayrollVariableInput = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.PayrollVariableInput || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("PayrollVariableInput");
        const VariablePayConfig = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.VariablePayConfig || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("VariablePayConfig");
        const varInputs = await PayrollVariableInput.find({
            employeeId: this._id,
            month,
            year,
            status: "Approved"
        }).populate('componentId');
        for (const input of varInputs){
            variablePayAmount += input.payoutAmount;
            variablePayList.push({
                name: input.componentId?.name || "Variable Pay",
                amount: input.payoutAmount,
                configId: input.componentId?._id
            });
        }
    } catch (err) {
        console.error("Error fetching variable pay for salary calc:", err);
    }
    const standardBasic = structure.basicSalary || 0;
    let basicSalary = standardBasic;
    let lopAmount = 0;
    let proratedDays = workingDaysInMonth; // Default: full month
    // ===== MID-MONTH JOINING PRORATION (Keka Standard) =====
    const joiningDate = this.personalDetails?.dateOfJoining ? new Date(this.personalDetails.dateOfJoining) : null;
    const periodStart = new Date(year, month - 1, 1);
    const periodEnd = new Date(year, month, 0);
    if (joiningDate && joiningDate >= periodStart && joiningDate <= periodEnd) {
        // Employee joined mid-month — prorate salary
        const joiningDay = joiningDate.getDate();
        proratedDays = workingDaysInMonth - joiningDay + 1;
        const prorationFactor = proratedDays / workingDaysInMonth;
        basicSalary = Math.round(standardBasic * prorationFactor);
    }
    // ===== LOP CALCULATION =====
    if (lopDays > 0 && workingDaysInMonth > 0 && standardBasic > 0) {
        lopAmount = Math.round(standardBasic / workingDaysInMonth * lopDays);
        // basicSalary already takes proration into account; LOP is subtracted from that
        basicSalary = Math.max(0, basicSalary - lopAmount);
    }
    // Calculate earnings based on actual basic salary
    const earnings = structure.earnings || [];
    const calculatedEarnings = earnings.filter((e)=>e.enabled).map((earning)=>{
        let amount = 0;
        if (earning.calculationType === 'percentage') {
            amount = basicSalary * (earning.percentage || 0) / 100;
        } else {
            amount = earning.fixedAmount || 0;
        }
        return {
            ...earning.toObject(),
            calculatedAmount: Math.round(amount)
        };
    });
    // Calculate Overtime Amount
    let overtimeRate = this.salaryDetails?.overtimeRate || 0;
    if (!overtimeRate && payrollConfig) {
        if (payrollConfig.overtimeCalculationType === 'Fixed') {
            overtimeRate = payrollConfig.overtimeRate || 0;
        } else {
            // Multiplier Mode: (Basic / WorkingDays / ShiftHours) * Multiplier
            // We use standardBasic (full salary) for calculation, as per most factory laws
            const workingDays = payrollConfig.workingDaysPerMonth || 26;
            const shiftHours = this.workingHr || 9;
            const hourlyRate = standardBasic / workingDays / shiftHours;
            overtimeRate = hourlyRate * (payrollConfig.overtimeRate || 1.5);
        }
    }
    const overtimeAmount = Math.round(overtimeHours * overtimeRate);
    if (overtimeAmount > 0) {
        calculatedEarnings.push({
            name: "Overtime Pay",
            calculatedAmount: overtimeAmount,
            autoCalculated: true,
            hours: overtimeHours
        });
    }
    // Add Variable Pay components to list
    for (const v of variablePayList){
        calculatedEarnings.push({
            name: v.name,
            calculatedAmount: Math.round(v.amount),
            autoCalculated: true,
            configId: v.configId
        });
    }
    // Add Retro Earnings components to list
    for (const r of retroList){
        if (r.type === 'Earning') {
            calculatedEarnings.push({
                name: `${r.name}`,
                calculatedAmount: Math.round(r.amount),
                autoCalculated: true,
                retroId: r.retroId
            });
        }
    }
    // Calculate Gross Salary (Sum of all earnings including basic)
    const grossSalary = basicSalary + calculatedEarnings.reduce((sum, e)=>sum + e.calculatedAmount, 0);
    // Calculate ALL configured deductions first (keep everything)
    const deductions = structure.deductions || [];
    let calculatedDeductions = deductions.filter((d)=>d.enabled).map((deduction)=>{
        let amount = 0;
        if (deduction.calculationType === 'percentage') {
            amount = basicSalary * (deduction.percentage || 0) / 100;
        } else {
            amount = deduction.fixedAmount || 0;
        }
        return {
            ...deduction.toObject(),
            calculatedAmount: Math.round(amount)
        };
    });
    // Add LOP as a deduction
    if (lopAmount > 0) {
        calculatedDeductions.push({
            name: 'Loss of Pay (LOP)',
            calculatedAmount: Math.round(lopAmount),
            autoCalculated: true,
            days: lopDays
        });
    }
    // Add Loan Deductions
    for (const loan of loanDeductionsList){
        calculatedDeductions.push({
            name: loan.name,
            calculatedAmount: Math.round(loan.amount),
            autoCalculated: true,
            loanId: loan.loanId
        });
    }
    // Add Retro Deductions components to list
    for (const r of retroList){
        if (r.type === 'Deduction') {
            calculatedDeductions.push({
                name: `${r.name}`,
                calculatedAmount: Math.round(r.amount),
                autoCalculated: true,
                retroId: r.retroId
            });
        }
    }
    // ========== AUTO-CALCULATED STATUTORY DEDUCTIONS (India Compliance) ==========
    // Strategy: When auto-calculation fires, REPLACE any manually configured entries
    // to avoid duplicates. If auto-calculation doesn't fire, keep manual entries.
    // Helper to remove existing entries by partial name match
    const removeByName = (keywords)=>{
        calculatedDeductions = calculatedDeductions.filter((d)=>!keywords.some((kw)=>d.name?.toLowerCase().includes(kw.toLowerCase())));
    };
    // 1. PF (Provident Fund)
    if (this.pfApplicable === 'yes') {
        // Remove any manually configured PF entries first
        removeByName([
            'Provident Fund',
            'PF'
        ]);
        // Pro-rate the wage ceiling based on present days (Keka/Compliance Standard)
        const pfWageLimit = 15000 * (proratedDays / workingDaysInMonth);
        const pfWage = Math.min(basicSalary, pfWageLimit);
        const pfEmployee = Math.round(pfWage * 0.12);
        const pfEmployer = Math.round(pfWage * 0.13);
        calculatedDeductions.push({
            name: 'Provident Fund (PF)',
            calculatedAmount: pfEmployee,
            autoCalculated: true,
            employerContribution: pfEmployer
        });
    }
    // 2. ESIC (Only if Contracted Gross Salary <= 21,000)
    const contractedGross = this.payslipStructure.grossSalary || 0;
    if (this.esicApplicable === 'yes' && contractedGross <= 21000) {
        // Remove any manually configured ESIC entries first
        removeByName([
            'ESIC',
            'Employee State Insurance'
        ]);
        const esicEmployee = Math.ceil(grossSalary * 0.0075);
        const esicEmployer = Math.ceil(grossSalary * 0.0325);
        calculatedDeductions.push({
            name: 'ESIC',
            calculatedAmount: esicEmployee,
            autoCalculated: true,
            employerContribution: esicEmployer
        });
    }
    // 3. Professional Tax (PT)
    const workState = this.jobDetails?.workState || 'Maharashtra';
    const ptAmount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$statutoryCalculations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StatutoryCalculator"].calculateProfessionalTax(grossSalary, workState, {
        ...statutoryConfig,
        month
    });
    if (ptAmount > 0) {
        // Remove any manually configured PT entries first
        removeByName([
            'Professional Tax',
            'PT'
        ]);
        calculatedDeductions.push({
            name: 'Professional Tax (PT)',
            calculatedAmount: ptAmount,
            autoCalculated: true
        });
    }
    // 4. TDS (Income Tax) — Dual Regime (Keka Standard)
    if (this.isTDSApplicable) {
        const regime = this.taxRegime || 'new';
        const annualGross = grossSalary * 12;
        let annualTax = 0;
        if (regime === 'new') {
            // New Regime FY 2025-26 (Budget 2025)
            // 0-4L: NIL, 4-8L: 5%, 8-12L: 10%, 12-16L: 15%, 16-20L: 20%, 20-24L: 25%, >24L: 30%
            // Standard deduction: ₹75,000
            const taxableIncome = Math.max(0, annualGross - 75000);
            if (taxableIncome <= 400000) annualTax = 0;
            else if (taxableIncome <= 800000) annualTax = (taxableIncome - 400000) * 0.05;
            else if (taxableIncome <= 1200000) annualTax = 20000 + (taxableIncome - 800000) * 0.10;
            else if (taxableIncome <= 1600000) annualTax = 60000 + (taxableIncome - 1200000) * 0.15;
            else if (taxableIncome <= 2000000) annualTax = 120000 + (taxableIncome - 1600000) * 0.20;
            else if (taxableIncome <= 2400000) annualTax = 200000 + (taxableIncome - 2000000) * 0.25;
            else annualTax = 300000 + (taxableIncome - 2400000) * 0.30;
            // Section 87A rebate: Full tax rebate if taxable income <= ₹12L (new budget)
            if (taxableIncome <= 1200000) annualTax = 0;
        } else {
            // Old Regime
            // 0-2.5L: NIL, 2.5-5L: 5%, 5-10L: 20%, >10L: 30%
            // Standard deduction: ₹50,000
            // Note: 80C/80D deductions would further reduce taxable income, but we apply a basic calc here
            const standardDeduction = 50000;
            const section80C = 150000; // Max limit — actual declared amount should come from InvestmentDeclaration
            const taxableIncome = Math.max(0, annualGross - standardDeduction - section80C);
            if (taxableIncome <= 250000) annualTax = 0;
            else if (taxableIncome <= 500000) annualTax = (taxableIncome - 250000) * 0.05;
            else if (taxableIncome <= 1000000) annualTax = 12500 + (taxableIncome - 500000) * 0.20;
            else annualTax = 112500 + (taxableIncome - 1000000) * 0.30;
            // Section 87A rebate: Full tax rebate if taxable income <= ₹5L
            if (taxableIncome <= 500000) annualTax = 0;
        }
        // Add 4% Health & Education Cess
        annualTax = Math.round(annualTax * 1.04);
        const monthlyTDS = Math.round(annualTax / 12);
        if (monthlyTDS > 0) {
            calculatedDeductions.push({
                name: `Income Tax (TDS - ${regime === 'new' ? 'New' : 'Old'} Regime)`,
                calculatedAmount: monthlyTDS,
                autoCalculated: true,
                regime: regime
            });
        }
    }
    // 5. Gratuity (Provision)
    if (this.gratuityApplicable === 'yes') {
        const yearlyGratuity = basicSalary * 15 / 26;
        const monthlyGratuity = Math.round(yearlyGratuity / 12);
        calculatedDeductions.push({
            name: 'Gratuity (Provision)',
            calculatedAmount: 0,
            autoCalculated: true,
            employerContribution: monthlyGratuity,
            isGratuity: true
        });
    }
    const totalEarnings = grossSalary;
    const totalDeductions = calculatedDeductions.reduce((sum, d)=>sum + d.calculatedAmount, 0);
    const netSalary = Math.round(totalEarnings - totalDeductions);
    return {
        basicSalary,
        standardBasic,
        earnings: calculatedEarnings,
        deductions: calculatedDeductions,
        totalEarnings,
        totalDeductions,
        netSalary,
        salaryType: structure.salaryType,
        lopAmount: Math.round(lopAmount),
        lopDays,
        overtimeHours,
        overtimeAmount,
        loanDeductions: loanDeductionsAmount,
        loanDeductionsList,
        retroEarnings,
        retroDeductions,
        retroList,
        variablePayAmount,
        variablePayList
    };
};
// Method to update computed salary fields
employeeSchema.methods.updateComputedSalary = async function(statutoryConfig = null) {
    const calculated = await this.calculateSalaryComponents(statutoryConfig);
    this.payslipStructure.totalEarnings = calculated.totalEarnings;
    // this.payslipStructure.grossSalary remains as the user-entered CTC value
    this.payslipStructure.totalDeductions = calculated.totalDeductions;
    this.payslipStructure.netSalary = calculated.netSalary;
    if (this.payslipStructure.salaryType === 'perday') {
        this.payslipStructure.perDaySalary = this.payslipStructure.basicSalary;
    }
};
// Pre-save middleware
employeeSchema.pre('save', async function(next) {
    if (!this.workingHr) {
        this.workingHr = 9;
    }
    // Update computed salary fields if payslip structure changed
    if (this.isModified('payslipStructure') || this.isModified('jobDetails.workState')) {
        try {
            // Fetch statutory config if workState is defined
            let statutoryConfig = null;
            if (this.jobDetails && this.jobDetails.workState) {
                const StatutoryConfig = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.StatutoryConfig || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('StatutoryConfig');
                statutoryConfig = await StatutoryConfig.findOne({
                    state: {
                        $regex: new RegExp(`^${this.jobDetails.workState}$`, 'i')
                    }
                });
            }
            await this.updateComputedSalary(statutoryConfig);
        } catch (error) {
            console.error("Error fetching statutory config in pre-save:", error);
            // Proceed with default/fallback calculation
            await this.updateComputedSalary(null);
        }
    }
    // Hash password if modified
    if (this.isModified("password") && this.password) {
        this.password = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(this.password, 10);
    }
    next();
});
// Method to compare password
employeeSchema.methods.comparePassword = async function(enteredPassword) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(enteredPassword, this.password);
};
// Method to get JWT token
employeeSchema.methods.getJwtToken = function(role) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign({
        id: this._id,
        role: role || this.role
    }, process.env.JWT_SECRET || "fallback_secret_key_change_me", {
        expiresIn: process.env.JWT_EXPIRE || "30d"
    });
};
// Delete existing model
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Employee) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Employee;
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Employee || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Employee", employeeSchema);
}),
"[project]/src/lib/db/models/User.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
// Force fresh model on hot reload
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User;
}
const userSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [
            "super_admin",
            "admin",
            "manager",
            "employee",
            "supervisor",
            "attendance_only"
        ],
        default: "admin"
    },
    status: {
        type: String,
        enum: [
            "pending",
            "active",
            "rejected",
            "suspended"
        ],
        default: "active"
    },
    // SaaS: which organization this admin manages
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        default: null
    },
    companyName: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
    industry: {
        type: String,
        default: ""
    },
    companySize: {
        type: String,
        default: ""
    },
    // Subscription plan
    plan: {
        type: String,
        enum: [
            "trial",
            "starter",
            "growth",
            "enterprise"
        ],
        default: "trial"
    },
    planExpiresAt: {
        type: Date,
        default: ()=>new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    department: String,
    position: String,
    employeeId: {
        type: String,
        unique: true,
        sparse: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    sessionToken: {
        type: String
    },
    forgotPasswordToken: {
        type: String,
        default: null
    },
    forgotPasswordExpires: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});
// Hash password before save
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    this.password = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(this.password, 12);
    next();
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("User", userSchema);
}),
"[project]/src/lib/db/models/crm/Template.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const EarningSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: true
    },
    editable: {
        type: Boolean,
        default: true
    },
    isPercentage: {
        type: Boolean,
        default: false
    },
    percentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    fixedAmount: {
        type: Number,
        default: 0,
        min: 0
    },
    calculationType: {
        type: String,
        enum: [
            'percentage',
            'fixed',
            'computed'
        ],
        default: 'percentage'
    }
}, {
    _id: false
});
const DeductionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: true
    },
    editable: {
        type: Boolean,
        default: true
    },
    isPercentage: {
        type: Boolean,
        default: false
    },
    percentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    fixedAmount: {
        type: Number,
        default: 0,
        min: 0
    },
    calculationType: {
        type: String,
        enum: [
            'percentage',
            'fixed',
            'computed'
        ],
        default: 'percentage'
    }
}, {
    _id: false
});
const AdditionalFieldSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        default: true
    }
}, {
    _id: false
});
const StylingSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    primaryColor: {
        type: String,
        default: '#f59e0b'
    },
    secondaryColor: {
        type: String,
        default: '#fffbeb'
    },
    fontFamily: {
        type: String,
        default: 'Inter'
    },
    showWatermark: {
        type: Boolean,
        default: true
    },
    showOrganizationLogo: {
        type: Boolean,
        default: true
    }
}, {
    _id: false
});
const TemplateSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: [
            true,
            'Template name is required'
        ],
        trim: true
    },
    organizationName: {
        type: String,
        required: [
            true,
            'Organization name is required'
        ],
        trim: true
    },
    organizationLogo: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        required: [
            true,
            'Address is required'
        ]
    },
    contact: {
        type: String,
        required: [
            true,
            'Contact information is required'
        ]
    },
    isDefault: {
        type: Boolean,
        default: false
    },
    salaryType: {
        type: String,
        enum: [
            'monthly',
            'perday'
        ],
        default: 'monthly'
    },
    earnings: [
        EarningSchema
    ],
    deductions: [
        DeductionSchema
    ],
    additionalFields: [
        AdditionalFieldSchema
    ],
    styling: {
        type: StylingSchema,
        default: ()=>({})
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
// Index for faster queries
TemplateSchema.index({
    createdBy: 1,
    isDefault: 1
});
TemplateSchema.index({
    createdBy: 1,
    isActive: 1
});
// Ensure only one default template per user
TemplateSchema.pre('save', async function(next) {
    if (this.isDefault && this.isModified('isDefault')) {
        await this.constructor.updateMany({
            _id: {
                $ne: this._id
            },
            createdBy: this.createdBy,
            isDefault: true
        }, {
            $set: {
                isDefault: false
            }
        });
    }
    next();
});
delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Template;
const Template = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Template || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Template', TemplateSchema);
const __TURBOPACK__default__export__ = Template;
}),
"[project]/src/lib/db/models/crm/Department/department.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
//src/lib/db/models/Department/department.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const DEFAULT_USER_ID = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId("66e2f79f3b8d2e1f1a9d9c33");
const departmentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    businessUnitId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "BusinessUnit",
        required: false
    },
    departmentName: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: [
            "Active",
            "Inactive"
        ],
        default: "Active"
    },
    permissions: {
        type: [
            String
        ],
        default: []
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: DEFAULT_USER_ID
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        default: DEFAULT_USER_ID
    }
}, {
    timestamps: true
});
departmentSchema.index({
    organizationId: 1,
    departmentName: 1
}, {
    unique: true
});
// Index for search
departmentSchema.index({
    departmentName: "text"
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Department || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Department", departmentSchema);
}),
"[project]/src/lib/db/models/crm/organization/Organization.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// src/lib/db/models/organization/Organization.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const DEFAULT_USER_ID = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId("66e2f79f3b8d2e1f1a9d9c33"); // same as Employee
const organizationSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    orgId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: String,
    address: {
        street: String
    },
    status: {
        type: String,
        enum: [
            "Active",
            "Inactive"
        ],
        default: "Active"
    },
    website: String,
    memberCount: {
        type: Number,
        default: 0,
        min: 0
    },
    established: {
        type: Date
    },
    logo: String,
    linkedinCompanyId: {
        type: String,
        trim: true,
        default: null
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: DEFAULT_USER_ID
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        default: DEFAULT_USER_ID
    }
}, {
    timestamps: true
});
// Indexes (same as Employee)
organizationSchema.index({
    status: 1
});
organizationSchema.index({
    name: "text",
    email: "text"
});
delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Organization;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Organization || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Organization", organizationSchema);
}),
"[project]/src/lib/db/models/crm/employee/EmployeeType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const DEFAULT_USER_ID = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId("66e2f79f3b8d2e1f1a9d9c33");
const employeeTypeSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    departmentId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Department",
        required: true
    },
    employeeType: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: DEFAULT_USER_ID
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        default: DEFAULT_USER_ID
    }
}, {
    timestamps: true
});
// Avoid duplicate employee type in same department
employeeTypeSchema.index({
    organizationId: 1,
    departmentId: 1,
    employeeType: 1
}, {
    unique: true
});
// Compound index for efficient queries
employeeTypeSchema.index({
    organizationId: 1,
    departmentId: 1
});
delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.EmployeeType;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.EmployeeType || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("EmployeeType", employeeTypeSchema);
}),
"[project]/src/lib/db/models/crm/employee/EmployeeCategory.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const DEFAULT_USER_ID = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId("66e2f79f3b8d2e1f1a9d9c33");
const employeeCategorySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    departmentId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Department",
        required: true
    },
    employeeTypeId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "EmployeeType",
        required: true
    },
    employeeCategory: {
        type: String,
        required: true,
        trim: true
    },
    supportedDocuments: [
        {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "Document",
            default: []
        }
    ],
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: DEFAULT_USER_ID
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        default: DEFAULT_USER_ID
    }
}, {
    timestamps: true
});
// Avoid duplicate category in same employee type
employeeCategorySchema.index({
    organizationId: 1,
    departmentId: 1,
    employeeTypeId: 1,
    employeeCategory: 1
}, {
    unique: true
});
// Compound index for efficient queries
employeeCategorySchema.index({
    organizationId: 1,
    departmentId: 1,
    employeeTypeId: 1
});
// Prevent duplicate document IDs in the array
employeeCategorySchema.pre('save', function(next) {
    if (this.supportedDocuments && this.supportedDocuments.length > 0) {
        this.supportedDocuments = [
            ...new Set(this.supportedDocuments.map((id)=>id.toString()))
        ];
    }
    next();
});
delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.EmployeeCategory;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.EmployeeCategory || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("EmployeeCategory", employeeCategorySchema);
}),
"[project]/src/lib/db/models/crm/employee/EmployeeSubCategory.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const DEFAULT_USER_ID = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId("66e2f79f3b8d2e1f1a9d9c33");
const employeeSubCategorySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    departmentId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Department",
        required: true
    },
    employeeTypeId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "EmployeeType",
        required: true
    },
    employeeCategoryId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "EmployeeCategory",
        required: true
    },
    employeeSubCategory: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: DEFAULT_USER_ID
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        default: DEFAULT_USER_ID
    }
}, {
    timestamps: true
});
// Avoid duplicate sub-category in same category
employeeSubCategorySchema.index({
    organizationId: 1,
    departmentId: 1,
    employeeTypeId: 1,
    employeeCategoryId: 1,
    employeeSubCategory: 1
}, {
    unique: true
});
// Compound index for efficient queries
employeeSubCategorySchema.index({
    organizationId: 1,
    departmentId: 1,
    employeeTypeId: 1,
    employeeCategoryId: 1
});
delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.EmployeeSubCategory;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.EmployeeSubCategory || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("EmployeeSubCategory", employeeSubCategorySchema);
}),
"[project]/src/lib/db/models/payroll/DocumentRequirement.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const documentRequirementSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    documentType: {
        type: String,
        required: true
    },
    isRequired: {
        type: Boolean,
        default: true
    },
    reminderDays: {
        type: Number,
        default: 7
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});
// Index for quick lookup
documentRequirementSchema.index({
    documentType: 1
});
documentRequirementSchema.index({
    isActive: 1
});
const DocumentRequirement = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.DocumentRequirement || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("DocumentRequirement", documentRequirementSchema);
const __TURBOPACK__default__export__ = DocumentRequirement;
}),
"[project]/src/lib/db/models/payroll/DocumentReminder.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const documentReminderSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    employeeId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    missingDocuments: [
        {
            documentType: {
                type: String,
                required: true
            },
            reminderSent: {
                type: Boolean,
                default: false
            },
            reminderDate: {
                type: Date,
                default: Date.now
            },
            nextReminderDate: {
                type: Date,
                required: true
            }
        }
    ],
    status: {
        type: String,
        enum: [
            "pending",
            "completed",
            "cancelled"
        ],
        default: "pending"
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});
// Indexes
documentReminderSchema.index({
    employeeId: 1
});
documentReminderSchema.index({
    "missingDocuments.nextReminderDate": 1
});
documentReminderSchema.index({
    status: 1
});
const DocumentReminder = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.DocumentReminder || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("DocumentReminder", documentReminderSchema);
const __TURBOPACK__default__export__ = DocumentReminder;
}),
"[project]/src/lib/db/models/crm/organization/BusinessUnit.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const DEFAULT_USER_ID = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId("66e2f79f3b8d2e1f1a9d9c33");
const businessUnitSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    headOfUnit: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        default: null
    },
    description: String,
    status: {
        type: String,
        enum: [
            "Active",
            "Inactive"
        ],
        default: "Active"
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: DEFAULT_USER_ID
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        default: DEFAULT_USER_ID
    }
}, {
    timestamps: true
});
businessUnitSchema.index({
    organizationId: 1,
    name: 1
}, {
    unique: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.BusinessUnit || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("BusinessUnit", businessUnitSchema);
}),
"[project]/src/lib/db/models/crm/organization/Team.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const DEFAULT_USER_ID = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId("66e2f79f3b8d2e1f1a9d9c33");
const teamSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    departmentId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Department",
        required: true
    },
    teamLead: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        default: null
    },
    description: String,
    status: {
        type: String,
        enum: [
            "Active",
            "Inactive"
        ],
        default: "Active"
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: DEFAULT_USER_ID
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        default: DEFAULT_USER_ID
    }
}, {
    timestamps: true
});
teamSchema.index({
    departmentId: 1,
    name: 1
}, {
    unique: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Team || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Team", teamSchema);
}),
"[project]/src/lib/db/models/finance/CostCenter.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const DEFAULT_USER_ID = "674e92d8ce08af0109923297";
const costCenterSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    budget: {
        type: Number,
        default: 0
    },
    manager: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        default: null
    },
    status: {
        type: String,
        enum: [
            "Active",
            "Inactive"
        ],
        default: "Active"
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: DEFAULT_USER_ID
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        default: DEFAULT_USER_ID
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.CostCenter || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("CostCenter", costCenterSchema);
}),
"[project]/src/lib/db/models/payroll/WorkingShift.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const workingShiftSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    breakDuration: {
        type: Number,
        default: 60
    },
    workingDays: {
        type: [
            String
        ],
        enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        default: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ]
    },
    color: {
        type: String,
        default: "#4f46e5"
    },
    description: String,
    status: {
        type: String,
        enum: [
            "Active",
            "Inactive"
        ],
        default: "Active"
    },
    isDefault: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User"
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});
// Ensure only one default shift per organization
workingShiftSchema.index({
    organizationId: 1,
    isDefault: 1
}, {
    unique: true,
    partialFilterExpression: {
        isDefault: true
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.WorkingShift || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("WorkingShift", workingShiftSchema);
}),
"[project]/src/lib/db/models/ActivityLog.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const activityLogSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    action: {
        type: String,
        required: true,
        enum: [
            "created",
            "updated",
            "deleted",
            "login",
            "logout",
            "generated",
            "approved",
            "rejected",
            "failed",
            "locked",
            "published",
            "paid"
        ]
    },
    entity: {
        type: String,
        required: true
    },
    entityId: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    performedBy: {
        userId: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "User"
        },
        name: String,
        email: String,
        role: String
    },
    details: {
        type: Object
    },
    status: {
        type: String,
        enum: [
            "success",
            "failed"
        ],
        default: "success"
    },
    ipAddress: String,
    userAgent: String
}, {
    timestamps: true
});
// Indexes for searching and filtering
activityLogSchema.index({
    action: 1
});
activityLogSchema.index({
    entity: 1
});
activityLogSchema.index({
    "performedBy.userId": 1
});
activityLogSchema.index({
    createdAt: -1
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.ActivityLog || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("ActivityLog", activityLogSchema);
}),
"[project]/src/lib/logger.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logActivity",
    ()=>logActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$ActivityLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/ActivityLog.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/connect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
;
;
async function logActivity({ action, entity, description, entityId = null, performedBy = null, details = null, status = "success", req = null }) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        let ipAddress = "Unknown";
        let userAgent = "Unknown";
        if (req) {
            ipAddress = req.headers.get("x-forwarded-for") || "Unknown";
            userAgent = req.headers.get("user-agent") || "Unknown";
        }
        // Clean up performedBy.userId if it's not a valid ObjectId (e.g., "System")
        const cleanPerformedBy = performedBy ? {
            ...performedBy
        } : {
            name: "System"
        };
        if (cleanPerformedBy.userId && !__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId.isValid(cleanPerformedBy.userId)) {
            delete cleanPerformedBy.userId;
        }
        const logEntry = {
            action,
            entity,
            entityId,
            description,
            performedBy: cleanPerformedBy,
            details,
            status,
            ipAddress,
            userAgent
        };
        const log = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$ActivityLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(logEntry);
        console.log(`[ActivityLog] ${action} ${entity}: ${description}`);
        return log;
    } catch (error) {
        console.error("[ActivityLog] Failed to save log:", error);
        // Silent fail to not disrupt main flow
        return null;
    }
}
}),
"[project]/src/lib/auth-util.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authorize",
    ()=>authorize,
    "getAuthUser",
    ()=>getAuthUser
]);
// src/lib/auth-util.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
const JWT_SECRET = process.env.JWT_SECRET;
const secret = new TextEncoder().encode(JWT_SECRET);
async function getAuthUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get("authToken")?.value || cookieStore.get("employee_token")?.value;
    if (!token) {
        throw new Error("Unauthorized: No token provided");
    }
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        return payload;
    } catch (error) {
        throw new Error("Unauthorized: Invalid token");
    }
}
function authorize(user, allowedRoles = []) {
    if (allowedRoles.length === 0) return true;
    if (!allowedRoles.includes(user.role)) {
        throw new Error(`Forbidden: Role ${user.role} does not have access`);
    }
    return true;
}
}),
"[project]/src/app/api/v1/admin/payroll/employees/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/connect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/payroll/Employee.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/User.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Template$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/Template.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/Department/department.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$organization$2f$Organization$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/organization/Organization.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$employee$2f$EmployeeType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/employee/EmployeeType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$employee$2f$EmployeeCategory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/employee/EmployeeCategory.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$employee$2f$EmployeeSubCategory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/employee/EmployeeSubCategory.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$DocumentRequirement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/payroll/DocumentRequirement.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$DocumentReminder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/payroll/DocumentReminder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$organization$2f$BusinessUnit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/organization/BusinessUnit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$organization$2f$Team$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/organization/Team.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$CostCenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/finance/CostCenter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$WorkingShift$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/payroll/WorkingShift.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/logger.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-util.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Helper function to convert empty strings to null for ObjectId fields
const cleanObjectIdFields = (data)=>{
    const cleaned = {
        ...data
    };
    if (cleaned.jobDetails) {
        if (cleaned.jobDetails.departmentId === '' || !cleaned.jobDetails.departmentId) {
            cleaned.jobDetails.departmentId = null;
        }
        if (cleaned.jobDetails.organizationId === '' || !cleaned.jobDetails.organizationId) {
            cleaned.jobDetails.organizationId = null;
        }
        if (cleaned.jobDetails.reportingManager === '' || !cleaned.jobDetails.reportingManager) {
            cleaned.jobDetails.reportingManager = null;
        }
        // Clean new ObjectId fields
        if (cleaned.jobDetails.teamLead === '' || !cleaned.jobDetails.teamLead) {
            cleaned.jobDetails.teamLead = null;
        }
        if (cleaned.jobDetails.supervisor === '' || !cleaned.jobDetails.supervisor) {
            cleaned.jobDetails.supervisor = null;
        }
        // Clean nested hierarchy ObjectId fields
        if (cleaned.jobDetails.employeeTypeId === '' || !cleaned.jobDetails.employeeTypeId) {
            cleaned.jobDetails.employeeTypeId = null;
        }
        if (cleaned.jobDetails.categoryId === '' || !cleaned.jobDetails.categoryId) {
            cleaned.jobDetails.categoryId = null;
        }
        if (cleaned.jobDetails.businessUnitId === '' || !cleaned.jobDetails.businessUnitId) {
            cleaned.jobDetails.businessUnitId = null;
        }
        if (cleaned.jobDetails.teamId === '' || !cleaned.jobDetails.teamId) {
            cleaned.jobDetails.teamId = null;
        }
        if (cleaned.jobDetails.costCenterId === '' || !cleaned.jobDetails.costCenterId) {
            cleaned.jobDetails.costCenterId = null;
        }
        if (cleaned.jobDetails.businessUnitId === '' || !cleaned.jobDetails.businessUnitId) {
            cleaned.jobDetails.businessUnitId = null;
        }
        if (cleaned.jobDetails.teamId === '' || !cleaned.jobDetails.teamId) {
            cleaned.jobDetails.teamId = null;
        }
        if (cleaned.jobDetails.assignedOfficeId === '' || !cleaned.jobDetails.assignedOfficeId) {
            cleaned.jobDetails.assignedOfficeId = null;
        }
        if (cleaned.jobDetails.defaultShift === '' || !cleaned.jobDetails.defaultShift) {
            cleaned.jobDetails.defaultShift = null;
        }
    }
    return cleaned;
};
// Helper function to validate required fields
const validateEmployeeData = (data)=>{
    const errors = [];
    // Employee ID is auto-generated if missing during POST, so don't validate it strictly here for new employees.
    // We can skip this check if we expect it to be generated.
    // Password is not required during admin creation as it is usually auto-generated or set later
    // We can skip this check.
    // For attendance_only role, skip all other validations
    if (data.role === 'attendance_only') {
        return errors;
    }
    // Regular employee validation
    // Personal details validation
    if (!data.personalDetails?.firstName) {
        errors.push('First name is required');
    }
    if (!data.personalDetails?.lastName) {
        errors.push('Last name is required');
    }
    if (!data.personalDetails?.email) {
        errors.push('Email is required');
    }
    if (!data.personalDetails?.phone) {
        errors.push('Phone number is required');
    }
    if (!data.personalDetails?.dateOfJoining) {
        errors.push('Date of joining is required');
    }
    if (!data.jobDetails?.organizationId) {
        errors.push('Organization is required');
    }
    if (!data.jobDetails?.departmentId) {
        errors.push('Department is required');
    }
    // Working hours validation
    if (!data.workingHr) {
        errors.push('Working hours are required');
    }
    // Payslip structure validation
    if (!data.payslipStructure) {
        errors.push('Payslip structure is required');
    } else {
        if (!data.payslipStructure.basicSalary || data.payslipStructure.basicSalary <= 0) {
            errors.push('Basic salary must be greater than 0');
        }
        if (!data.payslipStructure.salaryType) {
            errors.push('Salary type is required');
        }
    }
    // Bank details validation
    if (!data.salaryDetails?.bankAccount?.accountNumber) {
        errors.push('Bank account number is required');
    }
    if (!data.salaryDetails?.bankAccount?.bankName) {
        errors.push('Bank name is required');
    }
    if (!data.salaryDetails?.bankAccount?.ifscCode) {
        errors.push('IFSC code is required');
    }
    return errors;
};
async function GET(request) {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const department = searchParams.get('department');
        const status = searchParams.get('status');
        const search = searchParams.get('search');
        const organizationId = searchParams.get('organizationId');
        const experienceType = searchParams.get('experienceType');
        const employeeType = searchParams.get('employeeType');
        const category = searchParams.get('category');
        const otApplicable = searchParams.get('otApplicable');
        const esicApplicable = searchParams.get('esicApplicable');
        const pfApplicable = searchParams.get('pfApplicable');
        const probation = searchParams.get('probation');
        const supervisorUserId = searchParams.get('supervisorUserId');
        const skip = (page - 1) * limit;
        let filter = {};
        // Filter by supervisor (only show employees assigned to this supervisor)
        if (supervisorUserId && supervisorUserId !== 'undefined') {
            let supervisorEmployeeId = null;
            // Try finding as User first
            try {
                const supervisorUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(supervisorUserId);
                if (supervisorUser?.employeeId) {
                    supervisorEmployeeId = supervisorUser.employeeId;
                }
            } catch (e) {
            // Not a User ID, possibly an Employee ID directly
            }
            // If not linked to User, check if supervisorUserId IS the Employee ID (for Employee Supervisors)
            let supervisorEmployee;
            if (supervisorEmployeeId) {
                supervisorEmployee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                    employeeId: supervisorEmployeeId
                });
            } else {
                try {
                    supervisorEmployee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(supervisorUserId);
                } catch (e) {}
            }
            if (supervisorEmployee) {
                const supervisees = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                    $or: [
                        {
                            "attendanceApproval.shift1Supervisor": supervisorEmployee._id
                        },
                        {
                            "attendanceApproval.shift2Supervisor": supervisorEmployee._id
                        }
                    ]
                }).distinct('_id');
                if (supervisees.length > 0) {
                    filter._id = {
                        $in: supervisees
                    };
                } else {
                    filter._id = {
                        $in: []
                    };
                }
            } else {
                // invalid supervisor ID provided
                filter._id = {
                    $in: []
                };
            }
        }
        if (authUser.role === 'admin' && authUser.organizationId) {
            filter['jobDetails.organizationId'] = authUser.organizationId;
        } else if (organizationId) {
            filter['jobDetails.organizationId'] = organizationId;
        }
        if (department) {
            filter['jobDetails.departmentId'] = department;
        }
        if (status) {
            filter.status = status;
        }
        if (experienceType) {
            filter.experienceType = experienceType;
        }
        if (employeeType) {
            filter.employeeType = employeeType;
        }
        if (category) {
            filter.category = category;
        }
        if (otApplicable) {
            filter.otApplicable = otApplicable;
        }
        if (esicApplicable) {
            filter.esicApplicable = esicApplicable;
        }
        if (pfApplicable) {
            filter.pfApplicable = pfApplicable;
        }
        if (probation) {
            filter.probation = probation;
        }
        if (search) {
            filter.$or = [
                {
                    employeeId: {
                        $regex: search,
                        $options: 'i'
                    }
                },
                {
                    'personalDetails.firstName': {
                        $regex: search,
                        $options: 'i'
                    }
                },
                {
                    'personalDetails.lastName': {
                        $regex: search,
                        $options: 'i'
                    }
                },
                {
                    'personalDetails.email': {
                        $regex: search,
                        $options: 'i'
                    }
                },
                {
                    'jobDetails.designation': {
                        $regex: search,
                        $options: 'i'
                    }
                }
            ];
        }
        const employees = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(filter).populate('jobDetails.reportingManager', 'personalDetails.firstName personalDetails.lastName employeeId').populate('jobDetails.departmentId', 'departmentName').populate('jobDetails.organizationId', 'name').populate('jobDetails.businessUnitId', 'name').populate('jobDetails.teamId', 'name').populate('jobDetails.costCenterId', 'name code').populate('attendanceApproval.shift1Supervisor', 'personalDetails.firstName personalDetails.lastName employeeId').populate('attendanceApproval.shift2Supervisor', 'personalDetails.firstName personalDetails.lastName employeeId').populate('jobDetails.employeeTypeId', 'employeeType').populate('jobDetails.categoryId', 'employeeCategory').populate('jobDetails.defaultShift', 'name startTime endTime color').sort({
            createdAt: -1
        }).skip(skip).limit(limit);
        const total = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments(filter);
        // Get counts for filters
        const statusCounts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].aggregate([
            {
                $group: {
                    _id: '$status',
                    count: {
                        $sum: 1
                    }
                }
            }
        ]);
        const categoryCounts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].aggregate([
            {
                $group: {
                    _id: '$category',
                    count: {
                        $sum: 1
                    }
                }
            }
        ]);
        const experienceTypeCounts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].aggregate([
            {
                $group: {
                    _id: '$experienceType',
                    count: {
                        $sum: 1
                    }
                }
            }
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: employees,
            counts: {
                status: statusCounts,
                category: categoryCounts,
                experienceType: experienceTypeCounts
            },
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Error in GET /api/v1/admin/payroll/employees:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
// Function to check document requirements and create reminders
async function checkDocumentRequirements(employee) {
    try {
        console.log("🔍 Checking document requirements for employee:", employee.employeeId);
        // Get all active document requirements
        const requirements = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$DocumentRequirement$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            isActive: true
        });
        if (requirements.length === 0) {
            console.log("ℹ️ No active document requirements found");
            return;
        }
        // Get submitted documents
        const submittedDocs = employee.documents || [];
        const submittedTypes = submittedDocs.map((doc)=>doc.categoryName || doc.name);
        // Find missing documents
        const missingDocuments = [];
        requirements.forEach((requirement)=>{
            if (requirement.isRequired) {
                const isSubmitted = submittedTypes.some((type)=>type.toLowerCase().includes(requirement.documentType.toLowerCase()) || requirement.documentType.toLowerCase().includes(type.toLowerCase()));
                if (!isSubmitted) {
                    missingDocuments.push({
                        documentType: requirement.documentType,
                        reminderSent: false,
                        reminderDate: new Date(),
                        nextReminderDate: new Date(Date.now() + requirement.reminderDays * 24 * 60 * 60 * 1000)
                    });
                }
            }
        });
        if (missingDocuments.length > 0) {
            console.log(`📄 Creating document reminder for ${missingDocuments.length} missing documents`);
            // Create document reminder
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$DocumentReminder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                employeeId: employee._id,
                missingDocuments,
                status: 'pending',
                createdBy: employee.createdBy || employee.updatedBy
            });
        } else {
            console.log("✅ All required documents are submitted");
        }
    } catch (error) {
        console.error("❌ Error checking document requirements:", error);
    // Don't throw error to avoid breaking employee creation
    }
}
async function POST(request) {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authorize"])(authUser, [
            'admin',
            'super_admin'
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const body = await request.json();
        console.log("📥 Received employee data:", JSON.stringify(body, null, 2));
        // Validate required fields
        const validationErrors = validateEmployeeData(body);
        if (validationErrors.length > 0) {
            console.log("🚫 Validation errors:", validationErrors);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Validation failed',
                details: validationErrors
            }, {
                status: 400
            });
        }
        // Clean empty string ObjectId fields
        const cleanedBody = cleanObjectIdFields(body);
        // Check if email already exists (skip for attendance_only users without email)
        if (cleanedBody.personalDetails?.email) {
            const existingEmail = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                'personalDetails.email': cleanedBody.personalDetails.email
            });
            if (existingEmail) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Email already exists'
                }, {
                    status: 400
                });
            }
        }
        // Check if employeeId already exists
        if (cleanedBody.employeeId) {
            const existingEmployeeId = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                employeeId: cleanedBody.employeeId
            });
            if (existingEmployeeId) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Employee ID already exists'
                }, {
                    status: 400
                });
            }
        }
        // Auto-generate Employee ID if not provided
        let employeeId = cleanedBody.employeeId;
        if (!employeeId) {
            // Sort by createdAt descending -— alphabetical sort on employeeId breaks at EMP9 vs EMP10
            const lastEmployee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne().sort({
                createdAt: -1
            });
            let newEmployeeId = "EMP001";
            if (lastEmployee && lastEmployee.employeeId) {
                const lastIdNumber = parseInt(lastEmployee.employeeId.replace(/\D/g, "")) || 0;
                newEmployeeId = `EMP${String(lastIdNumber + 1).padStart(3, "0")}`;
            }
            // Safety check: if generated ID already exists (race condition), find next available gap
            const existingWithId = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                employeeId: newEmployeeId
            });
            if (existingWithId) {
                const allEmployees = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}, "employeeId");
                const usedNumbers = allEmployees.map((e)=>parseInt((e.employeeId || "").replace(/\D/g, "")) || 0).sort((a, b)=>a - b);
                let nextId = 1;
                for (const num of usedNumbers){
                    if (num === nextId) nextId++;
                }
                newEmployeeId = `EMP${String(nextId).padStart(3, "0")}`;
            }
            employeeId = newEmployeeId;
        }
        // Check if this is an attendance-only user
        const isAttendanceOnly = cleanedBody.role === 'attendance_only';
        // Prepare employee data
        // Prepare employee data
        const employeeData = {
            ...cleanedBody,
            employeeId: employeeId,
            // Top Level Fields
            role: cleanedBody.role || 'employee',
            password: cleanedBody.password,
            isCompliant: cleanedBody.isCompliant || false,
            isTDSApplicable: cleanedBody.isTDSApplicable || false,
            experienceType: cleanedBody.experienceType || '',
            workingHr: cleanedBody.workingHr || 9,
            otApplicable: cleanedBody.otApplicable || 'no',
            esicApplicable: cleanedBody.esicApplicable || 'no',
            pfApplicable: cleanedBody.pfApplicable || 'no',
            probation: cleanedBody.probation || 'no',
            isAttending: cleanedBody.isAttending || 'no',
            // Personal Details - provide defaults for attendance-only users
            personalDetails: {
                ...cleanedBody.personalDetails,
                firstName: cleanedBody.personalDetails?.firstName || (isAttendanceOnly ? 'Attendance' : ''),
                lastName: cleanedBody.personalDetails?.lastName || (isAttendanceOnly ? 'User' : ''),
                email: cleanedBody.personalDetails?.email || (isAttendanceOnly ? `${employeeId.toLowerCase()}@attendance.local` : ''),
                phone: cleanedBody.personalDetails?.phone || (isAttendanceOnly ? '0000000000' : ''),
                dateOfJoining: cleanedBody.personalDetails?.dateOfJoining || (isAttendanceOnly ? new Date().toISOString().split('T')[0] : ''),
                gender: cleanedBody.personalDetails?.gender || (isAttendanceOnly ? 'Other' : undefined),
                bloodGroup: cleanedBody.personalDetails?.bloodGroup || '',
                address: cleanedBody.personalDetails?.currentAddress || cleanedBody.personalDetails?.address || {},
                permanentAddress: cleanedBody.personalDetails?.permanentAddress || {},
                temporaryAddress: cleanedBody.personalDetails?.temporaryAddress || {}
            },
            // Job details - provide defaults for attendance-only users
            jobDetails: {
                ...cleanedBody.jobDetails,
                department: cleanedBody.jobDetails?.department || (isAttendanceOnly ? 'Attendance' : ''),
                designation: cleanedBody.jobDetails?.designation || (isAttendanceOnly ? 'Attendance Operator' : ''),
                departmentId: cleanedBody.jobDetails?.departmentId || null,
                organizationId: cleanedBody.jobDetails?.organizationId || null,
                reportingManager: cleanedBody.jobDetails?.reportingManager || null,
                employmentType: cleanedBody.jobDetails?.employmentType || 'Full-Time',
                teamLead: cleanedBody.jobDetails?.teamLead || null,
                supervisor: cleanedBody.jobDetails?.supervisor || null,
                workLocation: cleanedBody.jobDetails?.workLocation || '',
                employeeTypeId: cleanedBody.jobDetails?.employeeTypeId || null,
                categoryId: cleanedBody.jobDetails?.categoryId || null,
                businessUnitId: cleanedBody.jobDetails?.businessUnitId || null,
                teamId: cleanedBody.jobDetails?.teamId || null,
                costCenterId: cleanedBody.jobDetails?.costCenterId || null,
                assignedOfficeId: cleanedBody.jobDetails?.assignedOfficeId || null,
                biometricDeviceId: cleanedBody.jobDetails?.biometricDeviceId || ""
            },
            // Attendance approval
            attendanceApproval: {
                required: cleanedBody.attendanceApproval?.required || 'no',
                shift1Supervisor: cleanedBody.attendanceApproval?.shift1Supervisor || null,
                shift2Supervisor: cleanedBody.attendanceApproval?.shift2Supervisor || null
            },
            // Salary Details - provide defaults for attendance-only users
            salaryDetails: {
                ...cleanedBody.salaryDetails,
                bankAccount: {
                    accountNumber: cleanedBody.salaryDetails?.bankAccount?.accountNumber || (isAttendanceOnly ? '000000000' : ''),
                    bankName: cleanedBody.salaryDetails?.bankAccount?.bankName || (isAttendanceOnly ? 'N/A' : ''),
                    ifscCode: cleanedBody.salaryDetails?.bankAccount?.ifscCode || (isAttendanceOnly ? 'XXXX0000000' : ''),
                    branch: cleanedBody.salaryDetails?.bankAccount?.branch || '',
                    branchAddress: cleanedBody.salaryDetails?.bankAccount?.branchAddress || ''
                },
                panNumber: cleanedBody.salaryDetails?.panNumber || '',
                aadharNumber: cleanedBody.salaryDetails?.aadharNumber || ''
            },
            documents: cleanedBody.documents || [],
            status: cleanedBody.status || 'Active',
            // Payslip Structure - minimal for attendance-only users
            payslipStructure: {
                templateId: cleanedBody.payslipStructure?.templateId || null,
                templateName: cleanedBody.payslipStructure?.templateName || '',
                salaryType: cleanedBody.payslipStructure?.salaryType || 'monthly',
                basicSalary: cleanedBody.payslipStructure?.basicSalary || (isAttendanceOnly ? 0 : 0),
                earnings: cleanedBody.payslipStructure?.earnings || [],
                deductions: cleanedBody.payslipStructure?.deductions || [],
                additionalFields: cleanedBody.payslipStructure?.additionalFields || [],
                grossSalary: cleanedBody.payslipStructure?.grossSalary || 0
            }
        };
        console.log("📝 Creating employee with data:", JSON.stringify(employeeData, null, 2));
        // Create employee
        const employee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(employeeData);
        // Populate references for response
        await employee.populate([
            {
                path: 'jobDetails.reportingManager',
                select: 'personalDetails.firstName personalDetails.lastName employeeId'
            },
            {
                path: 'jobDetails.departmentId',
                select: 'departmentName'
            },
            {
                path: 'jobDetails.organizationId',
                select: 'name'
            },
            {
                path: 'attendanceApproval.shift1Supervisor',
                select: 'personalDetails.firstName personalDetails.lastName employeeId'
            },
            {
                path: 'attendanceApproval.shift2Supervisor',
                select: 'personalDetails.firstName personalDetails.lastName employeeId'
            },
            {
                path: 'jobDetails.employeeTypeId',
                select: 'employeeType'
            },
            {
                path: 'jobDetails.categoryId',
                select: 'employeeCategory'
            },
            {
                path: 'jobDetails.businessUnitId',
                select: 'name'
            },
            {
                path: 'jobDetails.teamId',
                select: 'name'
            },
            {
                path: 'jobDetails.costCenterId',
                select: 'name code'
            }
        ]);
        console.log("✅ Employee created successfully:", employee.employeeId);
        console.log("💰 Payslip structure:", {
            salaryType: employee.payslipStructure.salaryType,
            basicSalary: employee.payslipStructure.basicSalary,
            netSalary: employee.payslipStructure.netSalary,
            earningsCount: employee.payslipStructure.earnings.length,
            deductionsCount: employee.payslipStructure.deductions.length
        });
        // Check document requirements and create reminders asynchronously
        checkDocumentRequirements(employee).catch((error)=>{
            console.error("Error in document requirement check:", error);
        });
        // Fetch createdBy user details
        let performer = null;
        if (body.createdBy) {
            performer = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(body.createdBy);
        }
        // Log activity
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logActivity"])({
            action: "created",
            entity: "Employee",
            entityId: employee.employeeId,
            description: `Created new employee: ${employee.personalDetails.firstName} ${employee.personalDetails.lastName} (${employee.employeeId})`,
            performedBy: {
                userId: employee.createdBy,
                name: performer?.name || "Admin/User",
                email: performer?.email,
                role: performer?.role
            },
            details: {
                employeeId: employee.employeeId
            },
            req: request
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: employee
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Error in POST /api/v1/admin/payroll/employees:', error);
        // Handle Mongoose validation errors gracefully to display on frontend
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map((val)=>val.message);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: messages.join(', '),
                validationErrors: error.errors
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message,
            stack: ("TURBOPACK compile-time truthy", 1) ? error.stack : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__040tfsj._.js.map