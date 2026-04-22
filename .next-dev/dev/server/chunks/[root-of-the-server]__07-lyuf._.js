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
"[project]/src/lib/db/models/recruitment/Candidate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const candidateSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: [
            true,
            'Candidate name is required'
        ],
        trim: true
    },
    email: {
        type: String,
        required: [
            true,
            'Email is required'
        ],
        lowercase: true,
        trim: true
    },
    phone: String,
    resumeUrl: String,
    resumeText: String,
    resumeParseStatus: {
        type: String,
        enum: [
            'queued',
            'processing',
            'done',
            'failed',
            null
        ],
        default: null
    },
    resumeParseRequestedAt: Date,
    resumeParsedAt: Date,
    resumeParseAttempts: {
        type: Number,
        default: 0
    },
    resumeParseError: String,
    jobRequisition: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'JobRequisition',
        required: false
    },
    appliedRole: String,
    status: {
        type: String,
        enum: [
            'Applied',
            'Screening',
            'Technical Interview',
            'Managerial Interview',
            'HR Interview',
            'Offer Sent',
            'Hired',
            'Confirmed',
            'Declined',
            'Rejected',
            'Withdrawn',
            'On Hold',
            'Draft'
        ],
        default: 'Applied'
    },
    interviews: [
        {
            round: String,
            interviewer: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
                ref: 'Employee'
            },
            date: Date,
            mode: {
                type: String,
                enum: [
                    'Online',
                    'Offline'
                ],
                default: 'Online'
            },
            location: String,
            meetingLink: String,
            rawNotes: String,
            structuredFeedback: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.Mixed,
            decision: {
                type: String,
                enum: [
                    'Promoted',
                    'Rejected',
                    'Hired',
                    'Offer Sent',
                    'On Hold',
                    'Saved',
                    null
                ],
                default: null
            },
            feedback: String,
            rating: {
                type: Number,
                min: 1,
                max: 5
            },
            status: {
                type: String,
                enum: [
                    'Scheduled',
                    'Completed',
                    'Cancelled'
                ],
                default: 'Scheduled'
            }
        }
    ],
    source: {
        type: String,
        enum: [
            'LinkedIn',
            'Indeed',
            'Referral',
            'Website',
            'Careers Portal',
            'Other'
        ],
        default: 'Website'
    },
    notes: String,
    parsedResume: {
        skills: [
            String
        ],
        experience: [
            {
                company: String,
                role: String,
                duration: String,
                years: Number,
                highlights: [
                    String
                ]
            }
        ],
        education: [
            {
                institution: String,
                degree: String,
                year: String
            }
        ],
        summary: String,
        totalExperienceYears: Number,
        currentRole: String,
        currentCompany: String
    },
    fitScore: {
        type: Number,
        min: 0,
        max: 100,
        default: null
    },
    fitAnalysis: String,
    fitRecommendation: {
        type: String,
        enum: [
            'Strong Hire',
            'Potential Fit',
            'Weak Match',
            'Not Recommended',
            'Pending Review',
            'Needs Review',
            null
        ],
        default: 'Pending Review'
    },
    fitStrengths: [
        String
    ],
    fitGaps: [
        String
    ],
    appliedDate: {
        type: Date,
        default: Date.now
    },
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Organization',
        default: null
    }
}, {
    timestamps: true
});
// Gap Fix #9: Prevent duplicate candidates by email within same organization for the SAME role
candidateSchema.index({
    email: 1,
    organizationId: 1,
    jobRequisition: 1
}, {
    unique: true
});
const Candidate = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Candidate || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Candidate', candidateSchema);
const __TURBOPACK__default__export__ = Candidate;
}),
"[project]/src/lib/db/models/recruitment/JobRequisition.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const jobRequisitionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    title: {
        type: String,
        required: [
            true,
            'Job title is required'
        ],
        trim: true
    },
    department: {
        type: String,
        required: [
            true,
            'Department is required'
        ]
    },
    location: {
        type: String,
        required: [
            true,
            'Location is required'
        ]
    },
    type: {
        type: String,
        enum: [
            'Full-time',
            'Part-time',
            'Contract',
            'Internship'
        ],
        default: 'Full-time'
    },
    headcount: {
        type: Number,
        default: 1,
        min: 1
    },
    workplaceType: {
        type: String,
        enum: [
            'On-site',
            'Remote',
            'Hybrid'
        ],
        default: 'On-site'
    },
    experienceLevel: {
        type: String,
        enum: [
            'Entry',
            'Mid',
            'Senior',
            'Executive',
            'Fresher',
            '1-3 years',
            '3-5 years',
            '5-10 years',
            '10+ years'
        ],
        default: null
    },
    status: {
        type: String,
        enum: [
            'Draft',
            'Pending Approval',
            'Open',
            'Closed',
            'On Hold',
            'Rejected'
        ],
        default: 'Pending Approval'
    },
    priority: {
        type: String,
        enum: [
            'Low',
            'Medium',
            'High',
            'Urgent'
        ],
        default: 'Medium'
    },
    description: {
        type: String,
        required: [
            true,
            'Job description is required'
        ]
    },
    requirements: [
        String
    ],
    skillsRequired: [
        String
    ],
    aiGenerated: {
        type: Boolean,
        default: false
    },
    salaryRange: {
        min: Number,
        max: Number,
        currency: {
            type: String,
            default: 'INR'
        }
    },
    hiringManagerName: {
        type: String,
        trim: true
    },
    hiringManager: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Employee'
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    targetDate: Date,
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Organization',
        default: null
    },
    approvalChain: [
        {
            role: {
                type: String,
                required: true
            },
            status: {
                type: String,
                enum: [
                    'Pending',
                    'Approved',
                    'Rejected'
                ],
                default: 'Pending'
            },
            approvedBy: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
                ref: 'User'
            },
            approvedAt: Date,
            remarks: String
        }
    ]
}, {
    timestamps: true
});
const JobRequisition = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.JobRequisition || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('JobRequisition', jobRequisitionSchema);
const __TURBOPACK__default__export__ = JobRequisition;
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
"[project]/src/lib/db/models/recruitment/OnboardingChecklist.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const onboardingChecklistSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    employee: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    tasks: [
        {
            category: {
                type: String,
                enum: [
                    'Documentation',
                    'IT Setup',
                    'Training',
                    'Orientation',
                    'Finance'
                ],
                default: 'Documentation'
            },
            task: {
                type: String,
                required: true
            },
            status: {
                type: String,
                enum: [
                    'Pending',
                    'In Progress',
                    'Completed',
                    'Skipped'
                ],
                default: 'Pending'
            },
            dueDate: Date,
            completedAt: Date,
            assignedTo: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
                ref: 'Employee' // Person responsible (e.g., IT Admin, HR)
            },
            notes: String
        }
    ],
    status: {
        type: String,
        enum: [
            'Not Started',
            'In Progress',
            'Completed'
        ],
        default: 'Not Started'
    },
    startedAt: {
        type: Date,
        default: Date.now
    },
    completedAt: Date,
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Organization',
        default: null
    }
}, {
    timestamps: true
});
const OnboardingChecklist = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.OnboardingChecklist || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('OnboardingChecklist', onboardingChecklistSchema);
const __TURBOPACK__default__export__ = OnboardingChecklist;
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
"[project]/src/lib/email/service.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__ = __turbopack_context__.i("[externals]/nodemailer [external] (nodemailer, cjs, [project]/node_modules/nodemailer)");
;
const transporter = __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__["default"].createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
const sendEmail = async ({ to, subject, html, attachments = [] })=>{
    try {
        const info = await transporter.sendMail({
            from: `"HR Portal" <${process.env.EMAIL_USER}>`,
            to,
            bcc: process.env.EMAIL_USER,
            subject,
            html,
            attachments
        });
        console.log("Email sent successfully: %s", info.messageId);
        return {
            success: true,
            messageId: info.messageId
        };
    } catch (error) {
        console.error("CRITICAL EMAIL FAILURE:", error);
        return {
            success: false,
            error: error.message
        };
    }
};
}),
"[project]/src/lib/email/templates/recruitment.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Recruitment email templates — Gap Fix #7
__turbopack_context__.s([
    "getApplicationReceivedTemplate",
    ()=>getApplicationReceivedTemplate,
    "getInterviewInviteTemplate",
    ()=>getInterviewInviteTemplate,
    "getManualCommunicationTemplate",
    ()=>getManualCommunicationTemplate,
    "getOfferLetterEmailTemplate",
    ()=>getOfferLetterEmailTemplate,
    "getOnboardingWelcomeTemplate",
    ()=>getOnboardingWelcomeTemplate,
    "getRejectionEmailTemplate",
    ()=>getRejectionEmailTemplate
]);
const getApplicationReceivedTemplate = (candidateName, jobTitle, dashboardUrl)=>`
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 40px 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Application Received ✓</h1>
  </div>
  <div style="padding: 30px;">
    <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Dear <strong>${candidateName}</strong>,</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">Thank you for applying for the position of <strong>${jobTitle}</strong>. Your application has been received and added to our recruitment pipeline.</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">Our talent acquisition team will review your profile and get back to you shortly. You can expect to hear from us within 5-7 business days.</p>
    <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 25px 0; border-left: 4px solid #4f46e5;">
      <p style="color: #64748b; font-size: 13px; margin: 0;"><strong>What's Next?</strong></p>
      <p style="color: #64748b; font-size: 13px; margin: 8px 0 0 0;">Your application will go through: Screening → Technical → Managerial → HR Interview → Offer</p>
    </div>
  </div>
  <div style="background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">© 2026 Bizmate Technologies. All rights reserved.</p>
  </div>
</div>
`;
const getInterviewInviteTemplate = (candidateName, round, date, meetingLink, interviewerName, mode = 'Online', location = '')=>`
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, ${mode === 'Online' ? '#0ea5e9 0%, #6366f1 100%' : '#1e293b 0%, #475569 100%'}); padding: 40px 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">📅 Interview Invitation</h1>
    <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: bold;">${mode} Session</p>
  </div>
  <div style="padding: 30px;">
    <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Dear <strong>${candidateName}</strong>,</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">We're pleased to invite you for the next round of interviews.</p>
    <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 25px 0; border: 1px solid #e2e8f0;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Round:</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: bold;">${round}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Date & Time:</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: bold;">${date}</td></tr>
        ${interviewerName ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Interviewer:</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: bold;">${interviewerName}</td></tr>` : ''}
        ${mode === 'Offline' ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">📍 Location:</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: bold;">${location || 'Company Corporate Office'}</td></tr>` : ''}
      </table>
    </div>
    ${mode === 'Online' && meetingLink ? `<div style="text-align: center; margin: 30px 0;"><a href="${meetingLink}" style="background: #4f46e5; color: white; padding: 14px 32px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 15px; display: inline-block;">Join Meeting</a></div>` : ''}
    <p style="color: #475569; font-size: 14px; line-height: 1.8;">Please confirm your availability by replying to this email. We look forward to speaking with you!</p>
  </div>
  <div style="background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">© 2026 Bizmate Technologies. All rights reserved.</p>
  </div>
</div>
`;
const getOfferLetterEmailTemplate = (candidateName, jobTitle, offerContent, candidateId = '', candidateEmail = '')=>{
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || 'http://localhost:3000';
    const acceptUrl = `${baseUrl}/careers/offer?id=${candidateId}&email=${encodeURIComponent(candidateEmail)}&action=accept`;
    const declineUrl = `${baseUrl}/careers/offer?id=${candidateId}&email=${encodeURIComponent(candidateEmail)}&action=decline`;
    const statusUrl = `${baseUrl}/careers/status`;
    return `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">🎉 Offer Letter — ${jobTitle}</h1>
  </div>
  <div style="padding: 30px;">
    <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Dear <strong>${candidateName}</strong>,</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">We are delighted to extend you an offer for the position of <strong>${jobTitle}</strong>.</p>
    <div style="margin: 25px 0; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
      ${offerContent || 'Please find the detailed offer letter attached.'}
    </div>
    
    ${candidateId ? `
    <div style="margin: 30px 0; text-align: center;">
      <p style="color: #1e293b; font-size: 15px; font-weight: bold; margin-bottom: 20px;">Ready to respond? Click below:</p>
      <div style="display: inline-block;">
        <a href="${acceptUrl}" style="background: #059669; color: white; padding: 16px 40px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 15px; display: inline-block; margin: 0 8px;">✅ Accept Offer</a>
        <a href="${declineUrl}" style="background: #f1f5f9; color: #64748b; padding: 16px 40px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 15px; display: inline-block; margin: 0 8px; border: 1px solid #e2e8f0;">Decline</a>
      </div>
    </div>
    <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 10px;">Or track your application at: <a href="${statusUrl}" style="color: #4f46e5;">${statusUrl}</a></p>
    ` : ''}
    
    <p style="color: #475569; font-size: 14px; line-height: 1.8;">Please review and respond at your earliest convenience. We're excited to welcome you to the team!</p>
  </div>
  <div style="background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">© 2026 Bizmate Technologies. All rights reserved.</p>
  </div>
</div>
`;
};
const getRejectionEmailTemplate = (candidateName, jobTitle)=>`
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #475569 0%, #64748b 100%); padding: 40px 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Application Update</h1>
  </div>
  <div style="padding: 30px;">
    <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Dear <strong>${candidateName}</strong>,</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">Thank you for your interest in the <strong>${jobTitle}</strong> position and for the time you invested in the interview process.</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">After careful consideration, we have decided to move forward with another candidate whose experience more closely aligns with our current requirements.</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">This decision does not diminish the value of your qualifications. We encourage you to apply for future openings that match your profile.</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">We genuinely appreciate your interest and wish you the very best in your career journey.</p>
  </div>
  <div style="background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">© 2026 Bizmate Technologies. All rights reserved.</p>
  </div>
</div>
`;
const getOnboardingWelcomeTemplate = (employeeName, joiningDate, roleName)=>`
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%); padding: 40px 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">🚀 Welcome Aboard!</h1>
  </div>
  <div style="padding: 30px;">
    <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Dear <strong>${employeeName}</strong>,</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">Welcome to the team! We're thrilled to have you join us as <strong>${roleName || 'a valued team member'}</strong>.</p>
    <div style="background: #faf5ff; border-radius: 12px; padding: 20px; margin: 25px 0; border-left: 4px solid #8b5cf6;">
      <p style="color: #6b21a8; font-size: 14px; margin: 0; font-weight: bold;">📋 Joining Date: ${joiningDate}</p>
    </div>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">Your onboarding checklist has been created. Our HR team will guide you through the documentation, IT setup, and orientation process.</p>
    <p style="color: #475569; font-size: 15px; line-height: 1.8;">If you have any questions before your start date, don't hesitate to reach out!</p>
  </div>
  <div style="background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">© 2026 Bizmate Technologies. All rights reserved.</p>
  </div>
</div>
`;
const getManualCommunicationTemplate = (candidateName, subject, message)=>`
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 40px 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Message from HR Department</h1>
  </div>
  <div style="padding: 30px;">
    <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Dear <strong>${candidateName}</strong>,</p>
    <div style="color: #475569; font-size: 15px; line-height: 1.8; margin-top: 20px;">
      ${message.replace(/\n/g, '<br/>')}
    </div>
    <p style="color: #475569; font-size: 14px; line-height: 1.8; margin-top: 30px;">Best regards,<br/><strong>Human Resources Team</strong></p>
  </div>
  <div style="background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">© 2026 Bizmate Technologies. All rights reserved.</p>
  </div>
</div>
`;
}),
"[project]/src/lib/email/templates/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getApplicationReceivedTemplate",
    ()=>getApplicationReceivedTemplate,
    "getCandidateStatusChangeTemplate",
    ()=>getCandidateStatusChangeTemplate,
    "getShoutOutTemplate",
    ()=>getShoutOutTemplate,
    "getSurveyTemplate",
    ()=>getSurveyTemplate
]);
const getSurveyTemplate = (surveyTitle, dashboardUrl)=>`
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <div style="display: inline-block; width: 40px; height: 40px; background-color: #4f46e5; border-radius: 8px; line-height: 40px; color: white; font-weight: bold; font-size: 20px;">H</div>
    <h2 style="color: #1e293b; margin-top: 10px;">New Pulse Survey</h2>
  </div>
  <p style="color: #475569; font-size: 16px; line-height: 1.6;">Hello,</p>
  <p style="color: #475569; font-size: 16px; line-height: 1.6;">A new pulse survey "<strong>${surveyTitle}</strong>" has been published. We value your feedback!</p>
  <div style="text-align: center; margin: 40px 0;">
    <a href="${dashboardUrl}/engagement/surveys" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">Take Survey</a>
  </div>
  <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 40px;">&copy; 2026 HR Portal. All rights reserved.</p>
</div>
`;
const getShoutOutTemplate = (authorName, content, dashboardUrl)=>`
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <div style="display: inline-block; width: 40px; height: 40px; background-color: #f59e0b; border-radius: 8px; line-height: 40px; color: white; font-weight: bold; font-size: 20px;">S</div>
    <h2 style="color: #1e293b; margin-top: 10px;">You received a Shout-Out!</h2>
  </div>
  <p style="color: #475569; font-size: 16px; line-height: 1.6;">Hi there,</p>
  <p style="color: #475569; font-size: 16px; line-height: 1.6;"><strong>${authorName}</strong> just gave you a public shout-out on the social feed:</p>
  <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; margin: 25px 0; font-style: italic; color: #92400e; border-radius: 4px;">
    "${content}"
  </div>
  <div style="text-align: center; margin: 30px 0;">
    <a href="${dashboardUrl}/engagement/feed" style="background-color: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">View on Social Feed</a>
  </div>
  <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 40px;">&copy; 2026 HR Portal. All rights reserved.</p>
</div>
`;
const getApplicationReceivedTemplate = ({ candidateName, jobTitle, applicationId })=>{
    return {
        subject: `Application Received: ${jobTitle}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <div style="border-bottom: 2px solid #4f46e5; padding-bottom: 10px; margin-bottom: 20px;">
                <h1 style="color: #4f46e5; margin: 0;">Application Received</h1>
            </div>
            <p>Hi <strong>${candidateName}</strong>,</p>
            <p>Thank you for applying for the <strong>${jobTitle}</strong> position. We have safely received your application and resume.</p>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase;">Your Application Tracking ID</p>
                <p style="margin: 10px 0 0; font-size: 20px; font-weight: bold; letter-spacing: 2px; color: #4f46e5;">${applicationId}</p>
            </div>
            <p>Best regards,<br/><strong>Team Xpertance</strong></p>
        </div>
        `
    };
};
const getCandidateStatusChangeTemplate = ({ candidateName, jobTitle, newStatus })=>{
    const statusMessages = {
        'Screening': {
            subject: `Profile Under Review: ${jobTitle}`,
            heading: 'Your Profile is Being Reviewed',
            body: `We are pleased to inform you that your application for <strong>${jobTitle}</strong> has advanced to the screening stage.`,
            color: '#6366f1'
        },
        'Technical Interview': {
            subject: `Interview Invitation: ${jobTitle}`,
            heading: 'Interview Scheduled',
            body: `Congratulations! Your application for <strong>${jobTitle}</strong> has been shortlisted. We will schedule a Technical Interview with you shortly.`,
            color: '#0ea5e9'
        },
        'Managerial Interview': {
            subject: `Next Round: ${jobTitle}`,
            heading: 'Moving to the Next Round',
            body: `Great news! You have cleared the previous round for <strong>${jobTitle}</strong>. A Managerial Interview will be scheduled soon.`,
            color: '#8b5cf6'
        },
        'HR Interview': {
            subject: `Final Round: ${jobTitle}`,
            heading: 'Final Interview Round',
            body: `Excellent progress! You are now in the final interview stage for <strong>${jobTitle}</strong>.`,
            color: '#10b981'
        },
        'Offer Sent': {
            subject: `Offer Letter: ${jobTitle}`,
            heading: 'Your Offer is Ready!',
            body: `We are thrilled to extend an offer for the <strong>${jobTitle}</strong> position. Details will follow shortly.`,
            color: '#10b981'
        },
        'Rejected': {
            subject: `Application Update: ${jobTitle}`,
            heading: 'Application Update',
            body: `Thank you for your interest in <strong>${jobTitle}</strong>. After careful review, we have decided to move forward with other candidates. We encourage you to apply for future openings.`,
            color: '#64748b'
        }
    };
    const config = statusMessages[newStatus];
    if (!config) return null;
    return {
        subject: config.subject,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <div style="border-bottom: 3px solid ${config.color}; padding-bottom: 12px; margin-bottom: 24px;">
                <h1 style="color: ${config.color}; margin: 0; font-size: 22px;">${config.heading}</h1>
            </div>
            <p>Hi <strong>${candidateName}</strong>,</p>
            <p style="line-height: 1.6;">${config.body}</p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 24px 0; border-left: 4px solid ${config.color};">
                <p style="margin: 0; font-size: 13px; color: #64748b;">Current Stage: <strong style="color: ${config.color};">${newStatus}</strong></p>
            </div>
            <p>Best regards,<br/><strong>Team Xpertance</strong></p>
        </div>
        `
    };
};
}),
"[project]/src/lib/ai/gemini.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateFitScore",
    ()=>calculateFitScore,
    "generateInterviewQuestions",
    ()=>generateInterviewQuestions,
    "generateJD",
    ()=>generateJD,
    "generateOfferLetter",
    ()=>generateOfferLetter,
    "generateOnboardingTasks",
    ()=>generateOnboardingTasks,
    "parseResume",
    ()=>parseResume,
    "parseResumeFromPDF",
    ()=>parseResumeFromPDF,
    "summarizeFeedback",
    ()=>summarizeFeedback
]);
// src/lib/ai/gemini.js — Central AI Service Layer (Google Gemini)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
let genAI = null;
let model = null;
function getAIModel() {
    if (!model) {
        const apiKey = process.env.GOOGLE_API_KEY || '';
        if (!apiKey) {
            console.warn("⚠️ GOOGLE_API_KEY is missing from environment variables.");
        }
        genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey);
        // Using the high-performance model found in your authorized list
        model = genAI.getGenerativeModel({
            model: 'models/gemini-2.5-flash'
        });
    }
    return model;
}
/**
 * Enhanced: Generate content with automatic model fallback
 */ async function generateWithFallback(prompt, inlineData = null, retryCount = 0) {
    const aiModel = getAIModel();
    try {
        const payload = inlineData ? [
            prompt,
            {
                inlineData
            }
        ] : prompt;
        const result = await aiModel.generateContent(payload);
        return result.response.text();
    } catch (e) {
        // Handle 503 Service Unavailable (High Demand) with a retry
        if (e.message.includes('503') || e.message.includes('Service Unavailable')) {
            if (retryCount < 2) {
                console.warn(`⚠️ Gemini 503 (High Demand). Retrying in 2 seconds... (Attempt ${retryCount + 1})`);
                await new Promise((resolve)=>setTimeout(resolve, 2000));
                return generateWithFallback(prompt, inlineData, retryCount + 1);
            }
        }
        // If 404 or model error, try the next best model in your list: gemini-2.0-flash
        if (e.message.includes('404') || e.message.includes('not found') || e.message.includes('not supported')) {
            console.warn("🔄 Switching to fallback model (models/gemini-2.0-flash)...");
            const fallbackModel = genAI.getGenerativeModel({
                model: 'models/gemini-2.0-flash'
            });
            const payloadFallback = inlineData ? [
                prompt,
                {
                    inlineData
                }
            ] : prompt;
            const result = await fallbackModel.generateContent(payloadFallback);
            return result.response.text();
        }
        throw e;
    }
}
/**
 * Core: Generate content from Gemini
 */ async function generateContent(prompt) {
    return generateWithFallback(prompt);
}
async function generateJD({ title, department, type, location, seniority }) {
    const prompt = `You are an expert HR recruiter. Generate a professional job description for the following position.

Role: ${title}
Department: ${department}
Employment Type: ${type || 'Full-time'}
Location: ${location || 'Remote'}
Seniority: ${seniority || 'Mid-Level'}

Return your response STRICTLY as valid JSON (no markdown, no code blocks) with this exact structure:
{
  "description": "A compelling 3-4 paragraph job description covering role overview, responsibilities, what the candidate will do, and why they should join",
  "requirements": ["requirement 1", "requirement 2", "...up to 8 key requirements"],
  "skillsRequired": ["skill1", "skill2", "...up to 10 core technical/functional skills"],
  "salaryInsight": "A brief note about typical salary range for this role in India (INR)"
}

Make it professional, compelling, and suitable for job boards like LinkedIn/Naukri.`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI JD parse error:', e);
        return {
            description: text,
            requirements: [],
            skillsRequired: [],
            salaryInsight: ''
        };
    }
}
async function parseResume(resumeText) {
    const prompt = `You are an expert HR resume analyst. Parse the following resume text and extract structured data.

RESUME TEXT:
---
${resumeText.substring(0, 5000)}
---

Return your response STRICTLY as valid JSON (no markdown, no code blocks) with this exact structure:
{
  "name": "Full name of the candidate",
  "email": "Email address if found, or empty string",
  "phone": "Phone number if found, or empty string",
  "summary": "A 2-3 sentence professional summary of the candidate",
  "skills": ["skill1", "skill2", "...all technical and soft skills found"],
  "experience": [
    {
      "company": "Company name",
      "role": "Job title",
      "duration": "e.g. Jan 2020 - Dec 2023",
      "years": 3,
      "highlights": ["key achievement 1", "key achievement 2"]
    }
  ],
  "education": [
    {
      "institution": "University/College name",
      "degree": "Degree name",
      "year": "Graduation year"
    }
  ],
  "totalExperienceYears": 5,
  "currentRole": "Most recent job title",
  "currentCompany": "Most recent company"
}`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Resume parse error:', e);
        return {
            name: '',
            email: '',
            phone: '',
            summary: text,
            skills: [],
            experience: [],
            education: [],
            totalExperienceYears: 0
        };
    }
}
async function parseResumeFromPDF(buffer, mimeType = 'application/pdf') {
    const prompt = `You are an expert HR resume analyst. Read the attached resume document and extract structured data.

Return your response STRICTLY as valid JSON (no markdown, no code blocks) with this exact structure:
{
  "name": "Full name of the candidate",
  "email": "Email address if found, or empty string",
  "phone": "Phone number if found, or empty string",
  "summary": "A 2-3 sentence professional summary of the candidate",
  "skills": ["skill1", "skill2", "...all technical and soft skills found"],
  "experience": [
    {
      "company": "Company name",
      "role": "Job title",
      "duration": "e.g. Jan 2020 - Dec 2023",
      "years": 3,
      "highlights": ["key achievement 1", "key achievement 2"]
    }
  ],
  "education": [
    {
      "institution": "University/College name",
      "degree": "Degree name",
      "year": "Graduation year"
    }
  ],
  "totalExperienceYears": 5,
  "currentRole": "Most recent job title",
  "currentCompany": "Most recent company",
  "rawText": "Return a complete plain-text dump of the entire resume content here so we can display it for human readability"
}`;
    const inlineData = {
        data: buffer.toString('base64'),
        mimeType
    };
    try {
        const text = await generateWithFallback(prompt, inlineData);
        if (!text) return null;
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Resume parse (PDF native) error:', e);
        return null;
    }
}
async function calculateFitScore(candidateProfile, jobRequirements) {
    const prompt = `You are an AI recruitment analyst. Calculate how well this candidate matches the job requirements.

CANDIDATE PROFILE:
- Skills: ${(candidateProfile.skills || []).join(', ')}
- Experience: ${candidateProfile.totalExperienceYears || 0} years
- Current Role: ${candidateProfile.currentRole || 'N/A'}
- Education: ${(candidateProfile.education || []).map((e)=>`${e.degree} from ${e.institution}`).join(', ') || 'N/A'}
- Summary: ${candidateProfile.summary || 'N/A'}

JOB REQUIREMENTS:
- Title: ${jobRequirements.title || 'N/A'}
- Department: ${jobRequirements.department || 'N/A'}
- Required Skills: ${(jobRequirements.skillsRequired || jobRequirements.requirements || []).join(', ')}
- Description: ${(jobRequirements.description || '').substring(0, 500)}

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "fitScore": 78,
  "analysis": "2-3 sentence explanation of the match quality",
  "strengths": ["strength 1", "strength 2", "strength 3"],
  "gaps": ["gap 1", "gap 2"],
  "recommendation": "Strong Hire" or "Potential Fit" or "Weak Match" or "Not Recommended"
}

Score from 0-100 where:
- 90-100: Perfect match
- 75-89: Strong match
- 60-74: Decent match
- 40-59: Weak match
- 0-39: Poor match`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Fit Score parse error:', e);
        return {
            fitScore: 0,
            analysis: 'Unable to calculate',
            strengths: [],
            gaps: [],
            recommendation: 'Pending Review'
        };
    }
}
async function generateOfferLetter({ candidateName, jobTitle, department, salary, joiningDate, companyName }) {
    const prompt = `You are a professional HR manager. Generate a formal offer letter for the following candidate.

Candidate: ${candidateName}
Position: ${jobTitle}
Department: ${department || 'General'}
Annual CTC: ₹${(salary || 0).toLocaleString('en-IN')}
Joining Date: ${joiningDate}
Company: ${companyName || 'Bizmate Technologies'}

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "subject": "Offer letter email subject line",
  "content": "Full professional offer letter in HTML format with proper styling. Include: greeting, position details, compensation, joining date, terms, and closing. Use inline CSS for styling with a clean, professional look.",
  "terms": ["term 1", "term 2", "term 3", "term 4", "term 5"]
}

Make the letter professional and warm. The HTML should be email-safe with inline styles.`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Offer letter parse error:', e);
        return {
            subject: `Offer Letter - ${jobTitle}`,
            content: text,
            terms: []
        };
    }
}
async function generateInterviewQuestions({ jobTitle, requirements, round, candidateSummary }) {
    const roundConfig = {
        'Screening': 'basic screening questions to assess communication, motivation, and salary expectations',
        'Technical Interview': 'in-depth technical questions to assess hands-on skills and problem-solving',
        'Managerial Interview': 'leadership, project management, and situational judgment questions',
        'HR Interview': 'culture fit, behavioral, career aspirations, and salary negotiation questions',
        'Final Round': 'strategic thinking, company alignment, and vision questions'
    };
    const prompt = `You are a senior interviewer. Generate ${round || 'Technical Interview'} questions for this role.

Role: ${jobTitle}
Requirements: ${(requirements || []).join(', ')}
Round Type: ${round || 'Technical Interview'}
Focus: ${roundConfig[round] || roundConfig['Technical Interview']}
${candidateSummary ? `Candidate Background: ${candidateSummary}` : ''}

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "questions": [
    {
      "question": "The interview question",
      "category": "Technical" or "Behavioral" or "Situational" or "Culture Fit",
      "difficulty": "Easy" or "Medium" or "Hard",
      "expectedAnswer": "Brief guidance on what a good answer looks like",
      "timeMinutes": 5
    }
  ],
  "totalTimeMinutes": 45,
  "tips": "Brief interviewer tips for this round"
}

Generate 8-10 questions with a good mix of difficulties.`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Questions parse error:', e);
        return {
            questions: [],
            totalTimeMinutes: 0,
            tips: text
        };
    }
}
async function summarizeFeedback(rawNotes, candidateName, round) {
    const prompt = `You are an HR analyst. Summarize the following interviewer feedback into a structured assessment.

Candidate: ${candidateName || 'Unknown'}
Interview Round: ${round || 'Technical Interview'}

RAW FEEDBACK NOTES:
---
${rawNotes}
---

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "technicalSkills": { "rating": 4, "notes": "Brief assessment of technical ability" },
  "communication": { "rating": 3, "notes": "Brief assessment of communication skills" },
  "problemSolving": { "rating": 4, "notes": "Brief assessment of problem-solving ability" },
  "cultureFit": { "rating": 5, "notes": "Brief assessment of culture alignment" },
  "overallRating": 4,
  "summary": "2-3 sentence overall assessment",
  "recommendation": "Strong Hire" or "Hire" or "Maybe" or "No Hire",
  "strengths": ["strength 1", "strength 2"],
  "concerns": ["concern 1", "concern 2"]
}

Rate each category from 1 (Poor) to 5 (Excellent).`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Feedback parse error:', e);
        return {
            overallRating: 0,
            summary: text,
            recommendation: 'Needs Review'
        };
    }
}
async function generateOnboardingTasks({ department, role, location }) {
    const prompt = `You are an HR onboarding specialist. Generate a customized onboarding checklist for a new employee.

Department: ${department || 'General'}
Role: ${role || 'New Joiner'}
Location: ${location || 'Office'}

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "tasks": [
    {
      "category": "Documentation",
      "task": "Task description",
      "priority": "High" or "Medium" or "Low"
    }
  ]
}

Categories must be one of: "Documentation", "IT Setup", "Training", "Orientation", "Finance".
Generate 8-12 tasks tailored to the department and role. Include department-specific items.
For example: Engineering roles need GitHub/CI-CD access, Finance roles need ERP access, etc.`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Onboarding parse error:', e);
        return {
            tasks: [
                {
                    category: 'Documentation',
                    task: 'Submit Personal Documents (ID/Address Proof)'
                },
                {
                    category: 'Documentation',
                    task: 'Sign Employment Agreement & Policies'
                },
                {
                    category: 'IT Setup',
                    task: 'Set up System & Corporate Email'
                },
                {
                    category: 'Orientation',
                    task: 'Company Culture & Values Introduction'
                },
                {
                    category: 'Finance',
                    task: 'Submit Bank Details & Tax Declaration'
                }
            ]
        };
    }
}
}),
"[project]/src/app/api/v1/admin/recruitment/candidates/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/connect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/recruitment/Candidate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$JobRequisition$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/recruitment/JobRequisition.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/payroll/Employee.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$OnboardingChecklist$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/recruitment/OnboardingChecklist.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email/service.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$templates$2f$recruitment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email/templates/recruitment.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$templates$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email/templates/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$gemini$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ai/gemini.js [app-route] (ecmascript)");
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
const candidateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    resumeUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    jobRequisition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    appliedRole: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'LinkedIn',
        'Indeed',
        'Referral',
        'Website',
        'Careers Portal',
        'Other'
    ]).default('Website'),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    parsedResume: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional()
});
async function GET(request) {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authorize"])(authUser, [
            "admin",
            "hr",
            "company_admin",
            "super_admin"
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const jobId = searchParams.get('jobId');
        const status = searchParams.get('status');
        let query = {};
        // SaaS PROTECTION: Scope to org
        if (authUser.role === 'admin') {
            query.organizationId = authUser.organizationId;
        } else if (authUser.role === 'super_admin') {
            const orgId = searchParams.get('organizationId');
            if (orgId) query.organizationId = orgId;
        }
        if (jobId) query.jobRequisition = jobId;
        if (status) query.status = status;
        const candidates = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(query).populate('jobRequisition', 'title department').sort({
            fitScore: -1,
            createdAt: -1
        }); // Sort by fit score first
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            candidates
        });
    } catch (error) {
        console.error("GET CANDIDATES ERROR:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authorize"])(authUser, [
            "admin",
            "hr",
            "company_admin",
            "super_admin"
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const body = await request.json();
        const validatedData = candidateSchema.parse(body);
        // SaaS PROTECTION: Attach org to candidate record
        const orgId = authUser.role === 'admin' ? authUser.organizationId : body.organizationId;
        // Gap Fix #9: Duplicate detection
        const existingCandidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            email: validatedData.email.toLowerCase(),
            organizationId: orgId
        });
        if (existingCandidate) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: `Candidate with email ${validatedData.email} already exists in the pipeline (Status: ${existingCandidate.status})`,
                existingCandidate: {
                    id: existingCandidate._id,
                    status: existingCandidate.status,
                    name: existingCandidate.name
                }
            }, {
                status: 409
            });
        }
        const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            ...validatedData,
            organizationId: orgId
        });
        // Gap Fix #7: Send application received email (non-blocking)
        try {
            const jobTitle = validatedData.appliedRole || 'the open position';
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                to: candidate.email,
                subject: `Application Received — ${jobTitle}`,
                html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$templates$2f$recruitment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getApplicationReceivedTemplate"])(candidate.name, jobTitle)
            });
        } catch (emailErr) {
            console.log("Email send skipped (no SMTP configured):", emailErr.message);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            candidate,
            message: "Candidate application received"
        }, {
            status: 201
        });
    } catch (error) {
        console.error("POST CANDIDATE ERROR:", error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Validation failed',
                details: error.errors
            }, {
                status: 400
            });
        }
        // Handle MongoDB duplicate key error
        if (error.code === 11000) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'A candidate with this email already exists in your organization'
            }, {
                status: 409
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authorize"])(authUser, [
            "admin",
            "hr",
            "company_admin",
            "super_admin"
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const body = await request.json();
        const { id, ...updateData } = body;
        if (!id) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Candidate ID is required"
        }, {
            status: 400
        });
        const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).populate('jobRequisition');
        if (!candidate) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Candidate not found"
        }, {
            status: 404
        });
        const prevStatus = candidate.status;
        const newStatus = updateData.status;
        // Perform the update
        Object.assign(candidate, updateData);
        await candidate.save();
        // Send status-change email notification for ALL pipeline transitions
        if (newStatus && newStatus !== prevStatus) {
            try {
                const jobTitle = candidate.appliedRole || candidate.jobRequisition?.title || 'the position';
                const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$templates$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCandidateStatusChangeTemplate"])({
                    candidateName: candidate.name,
                    jobTitle,
                    newStatus
                });
                if (template) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                        to: candidate.email,
                        subject: template.subject,
                        html: template.html
                    });
                }
            } catch (emailErr) {
                console.log(`Status email (${newStatus}) skipped:`, emailErr.message);
            }
        }
        // 🚀 AUTO-ONBOARDING TRIGGER with AI-powered smart tasks (Gap #12)
        if (newStatus === 'Hired' && prevStatus !== 'Hired') {
            try {
                // 1. Check if employee already exists by email
                let employee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                    'personalDetails.email': candidate.email
                });
                if (!employee) {
                    const nameParts = candidate.name.split(' ');
                    const firstName = nameParts[0];
                    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'Hired';
                    const department = candidate.jobRequisition?.department || "General";
                    const designation = candidate.appliedRole || candidate.jobRequisition?.title || "New Joiner";
                    // 2. Create basic Employee record
                    employee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                        employeeId: `EMP-${Date.now().toString().slice(-6)}`,
                        password: 'welcome_to_team',
                        personalDetails: {
                            firstName,
                            lastName,
                            email: candidate.email,
                            phone: candidate.phone || 'N/A',
                            dateOfJoining: new Date()
                        },
                        jobDetails: {
                            department,
                            designation,
                            workLocation: "Remote / Office"
                        },
                        payslipStructure: {
                            salaryType: 'monthly',
                            basicSalary: 30000,
                            earnings: [],
                            deductions: []
                        },
                        workingHr: 9,
                        status: 'Active'
                    });
                }
                // 3. Check if Checklist already exists
                const existingChecklist = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$OnboardingChecklist$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                    employee: employee._id
                });
                if (!existingChecklist) {
                    // Gap Fix #12: AI-generated smart onboarding tasks
                    let onboardingTasks;
                    try {
                        const aiResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$gemini$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateOnboardingTasks"])({
                            department: candidate.jobRequisition?.department || 'General',
                            role: candidate.appliedRole || candidate.jobRequisition?.title || 'New Joiner',
                            location: candidate.jobRequisition?.location || 'Office'
                        });
                        onboardingTasks = (aiResult.tasks || []).map((t)=>({
                                category: t.category || 'Documentation',
                                task: t.task,
                                status: 'Pending'
                            }));
                    } catch (aiErr) {
                        console.log("AI onboarding failed, using defaults:", aiErr.message);
                        onboardingTasks = [
                            {
                                category: 'Documentation',
                                task: 'Submit Personal Documents (ID/Address Proof)',
                                status: 'Pending'
                            },
                            {
                                category: 'Documentation',
                                task: 'Sign Employment Agreement & Policies',
                                status: 'Pending'
                            },
                            {
                                category: 'IT Setup',
                                task: 'Set up System & Corporate Email',
                                status: 'Pending'
                            },
                            {
                                category: 'IT Setup',
                                task: 'Configure Access to Project Tools (GitHub/Jira)',
                                status: 'Pending'
                            },
                            {
                                category: 'Orientation',
                                task: 'Company Culture & Values Introduction',
                                status: 'Pending'
                            },
                            {
                                category: 'Orientation',
                                task: 'Team Introduction & Department Briefing',
                                status: 'Pending'
                            },
                            {
                                category: 'Finance',
                                task: 'Submit Bank Details & Tax Declaration',
                                status: 'Pending'
                            }
                        ];
                    }
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$OnboardingChecklist$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                        employee: employee._id,
                        tasks: onboardingTasks,
                        status: 'Not Started'
                    });
                }
                // Gap Fix #7: Send welcome email
                try {
                    const joiningDate = new Date().toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$service$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                        to: candidate.email,
                        subject: `🚀 Welcome Aboard — ${candidate.appliedRole || 'New Role'}`,
                        html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2f$templates$2f$recruitment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getOnboardingWelcomeTemplate"])(candidate.name, joiningDate, candidate.appliedRole)
                    });
                } catch (emailErr) {
                    console.log("Welcome email skipped:", emailErr.message);
                }
            } catch (triggerError) {
                console.error("Auto-onboarding trigger failed:", triggerError);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            candidate,
            message: newStatus === 'Hired' ? "Candidate Hired & AI Onboarding Initiated!" : "Candidate updated successfully"
        });
    } catch (error) {
        console.error("PUT CANDIDATE ERROR:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07-lyuf._.js.map