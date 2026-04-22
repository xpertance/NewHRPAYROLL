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
"[project]/src/lib/db/models/tasks/Project.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const projectSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    client: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    projectManager: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    members: [
        {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "Employee"
        }
    ],
    leads: [
        {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "Employee"
        }
    ],
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    status: {
        type: String,
        enum: [
            "Active",
            "Completed",
            "On Hold",
            "Pipeline"
        ],
        default: "Active"
    },
    budget: {
        type: Number,
        default: 0
    },
    currency: {
        type: String,
        default: "INR"
    },
    isInternal: {
        type: Boolean,
        default: false
    },
    billingType: {
        type: String,
        enum: [
            "Fixed",
            "Time & Material"
        ],
        default: "Fixed"
    },
    isBillable: {
        type: Boolean,
        default: true
    },
    boardColumns: {
        type: [
            String
        ],
        default: [
            "Pending",
            "In Progress",
            "Completed",
            "Blocked"
        ]
    },
    prefix: {
        type: String,
        uppercase: true,
        trim: true,
        default: "PROJ"
    },
    taskCounter: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
// Indexes
projectSchema.index({
    name: 1
});
projectSchema.index({
    client: 1
});
projectSchema.index({
    status: 1
});
projectSchema.index({
    projectManager: 1
});
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Project) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Project;
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Project", projectSchema);
}),
"[project]/src/lib/db/models/tasks/Task.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// lib/db/models/Task.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const progressCommentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    comment: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    date: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User"
    }
});
const subTaskSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: null
    }
});
const commentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    user: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    attachments: [
        {
            filename: String,
            url: String,
            uploadedAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true
});
const taskSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    assignedTo: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        required: false
    },
    assignedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        refPath: "assignedByModel",
        required: true
    },
    assignedByModel: {
        type: String,
        enum: [
            "User",
            "Employee"
        ],
        required: true,
        default: "User"
    },
    status: {
        type: String,
        enum: [
            "Pending",
            "In Progress",
            "Completed",
            "Blocked",
            "Deferred"
        ],
        default: "Pending"
    },
    priority: {
        type: String,
        enum: [
            "Low",
            "Medium",
            "High",
            "Urgent"
        ],
        default: "Medium"
    },
    dueDate: {
        type: Date,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    completedAt: Date,
    estimatedHours: {
        type: Number,
        min: 0
    },
    actualHours: {
        type: Number,
        min: 0
    },
    progress: {
        type: Number,
        min: 0,
        max: 100,
        default: 0,
        validate: {
            validator: function(v) {
                return v >= 0 && v <= 100;
            },
            message: 'Progress must be between 0 and 100'
        }
    },
    progressComments: [
        progressCommentSchema
    ],
    tags: [
        String
    ],
    category: {
        type: String,
        enum: [
            "Development",
            "Design",
            "Testing",
            "Documentation",
            "Meeting",
            "Support",
            "Other"
        ],
        default: "Other"
    },
    project: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Project"
    },
    dependencies: [
        {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
            ref: "Task"
        }
    ],
    boardOrder: {
        type: Number,
        default: 0,
        index: true
    },
    labels: [
        {
            name: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: "#6366f1"
            }
        }
    ],
    sprintLabel: {
        type: String,
        trim: true
    },
    subTasks: [
        subTaskSchema
    ],
    comments: [
        commentSchema
    ],
    attachments: [
        {
            filename: String,
            url: String,
            uploadedBy: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
                ref: "User"
            },
            uploadedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    isRecurring: {
        type: Boolean,
        default: false
    },
    recurrencePattern: {
        type: String,
        enum: [
            "Daily",
            "Weekly",
            "Monthly",
            "Yearly"
        ]
    },
    nextRecurrenceDate: Date
}, {
    timestamps: true
});
// Virtual for progress status
taskSchema.virtual('progressStatus').get(function() {
    if (this.progress === 0) return 'Not Started';
    if (this.progress < 25) return 'Getting Started';
    if (this.progress < 50) return 'In Progress';
    if (this.progress < 75) return 'Halfway There';
    if (this.progress < 100) return 'Almost Done';
    return 'Completed';
});
// Indexes
taskSchema.index({
    assignedTo: 1,
    status: 1
});
taskSchema.index({
    dueDate: 1
});
taskSchema.index({
    priority: 1
});
taskSchema.index({
    progress: 1
});
taskSchema.index({
    "progressComments.date": 1
});
// Middleware to update status based on progress
taskSchema.pre('save', function(next) {
    if (this.progress === 100 && this.status !== 'Completed') {
        this.status = 'Completed';
        this.completedAt = new Date();
    } else if (this.progress > 0 && this.progress < 100 && this.status === 'Pending') {
        this.status = 'In Progress';
    } else if (this.progress === 0 && this.status === 'In Progress') {
        this.status = 'Pending';
    }
    next();
});
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Task) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Task;
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Task", taskSchema);
}),
"[project]/src/lib/db/models/tasks/Timesheet.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const timesheetSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    employee: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    weekStartDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: [
            "Draft",
            "Submitted",
            "Approved",
            "Rejected"
        ],
        default: "Draft"
    },
    totalHours: {
        type: Number,
        default: 0
    },
    submittedAt: {
        type: Date
    },
    approvedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "User"
    },
    approvedAt: {
        type: Date
    },
    adminNotes: {
        type: String
    }
}, {
    timestamps: true
});
// Unique index to prevent multiple timesheets for same employee/week
timesheetSchema.index({
    employee: 1,
    weekStartDate: 1
}, {
    unique: true
});
timesheetSchema.index({
    status: 1
});
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Timesheet) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Timesheet;
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Timesheet", timesheetSchema);
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
"[project]/src/lib/db/models/tasks/TimesheetEntry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const timesheetEntrySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    timesheet: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Timesheet",
        required: true
    },
    employee: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    project: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    task: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Task"
    },
    date: {
        type: Date,
        required: true
    },
    hours: {
        type: Number,
        required: true,
        min: 0,
        max: 24
    },
    description: {
        type: String,
        trim: true
    },
    isBillable: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
// Indexes for fast querying
timesheetEntrySchema.index({
    timesheet: 1
});
timesheetEntrySchema.index({
    employee: 1,
    date: 1
});
timesheetEntrySchema.index({
    project: 1
});
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.TimesheetEntry) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.TimesheetEntry;
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("TimesheetEntry", timesheetEntrySchema);
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
"[project]/src/app/api/v1/admin/dashboard/stats/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/connect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Project$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/tasks/Project.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Task$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/tasks/Task.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Timesheet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/tasks/Timesheet.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/payroll/Employee.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$TimesheetEntry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/tasks/TimesheetEntry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$ActivityLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/ActivityLog.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function GET(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])(request);
        if (!authUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const organizationId = authUser.organizationId;
        const [totalProjects, activeProjects, totalTasks, completedTasks, totalEmployees, pendingTimesheets, tasks] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Project$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments({
                organizationId
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Project$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments({
                organizationId,
                status: {
                    $ne: 'Completed'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Task$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments({
                organizationId
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Task$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments({
                organizationId,
                status: 'Completed'
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments({
                'jobDetails.organizationId': organizationId,
                status: 'Active'
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Timesheet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments({
                organizationId,
                status: 'Submitted'
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Task$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                organizationId
            }, 'progress')
        ]);
        const averageProgress = tasks.length > 0 ? Math.round(tasks.reduce((acc, t)=>acc + (t.progress || 0), 0) / tasks.length) : 0;
        // Fetch Detailed Project Data
        const topProjects = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Project$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            organizationId,
            status: {
                $ne: 'Completed'
            }
        }).populate('projectManager', 'personalDetails.firstName personalDetails.lastName').limit(5).lean();
        const projectDetails = await Promise.all(topProjects.map(async (p)=>{
            const projectTasks = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$Task$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                project: p._id
            }, 'progress');
            const progress = projectTasks.length > 0 ? Math.round(projectTasks.reduce((acc, t)=>acc + (t.progress || 0), 0) / projectTasks.length) : 0;
            return {
                ...p,
                progress,
                taskCount: projectTasks.length
            };
        }));
        // Fetch Top Contributors (Past 30 Days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const contributors = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$tasks$2f$TimesheetEntry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].aggregate([
            {
                $match: {
                    date: {
                        $gte: thirtyDaysAgo
                    }
                }
            },
            {
                $group: {
                    _id: '$employee',
                    totalHours: {
                        $sum: '$hours'
                    }
                }
            },
            {
                $sort: {
                    totalHours: -1
                }
            },
            {
                $limit: 5
            }
        ]);
        const populatedContributors = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$payroll$2f$Employee$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].populate(contributors, {
            path: '_id',
            select: 'personalDetails.firstName personalDetails.lastName'
        });
        // Recent Activity
        const recentActivity = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$ActivityLog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find().sort({
            createdAt: -1
        }).limit(5).lean();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            stats: {
                totalProjects,
                activeProjects,
                totalTasks,
                completedTasks,
                totalEmployees,
                pendingTimesheets,
                averageProgress,
                topProjects: projectDetails,
                topContributors: populatedContributors.map((c)=>({
                        name: c._id ? `${c._id.personalDetails.firstName} ${c._id.personalDetails.lastName}` : 'Unknown',
                        hours: c.totalHours
                    })),
                recentActivity
            }
        });
    } catch (error) {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__09oa5ko._.js.map