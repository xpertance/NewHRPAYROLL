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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
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
"[project]/src/app/api/v1/admin/crm/departments/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "GET_SINGLE",
    ()=>GET_SINGLE,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/connect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/Department/department.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$organization$2f$Organization$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/crm/organization/Organization.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/User.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/logger.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-util.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
async function POST(request) {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authorize"])(authUser, [
            "admin",
            "super_admin"
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const body = await request.json();
        // SaaS PROTECTION: Admin must use their assigned organizationId
        if (authUser.role === "admin") {
            body.organizationId = authUser.organizationId;
        }
        console.log(body);
        // Validate required fields
        if (!body.organizationId || !body.departmentName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Organization ID and department name are required"
            }, {
                status: 400
            });
        }
        // Check if organization exists
        const organization = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$organization$2f$Organization$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(body.organizationId);
        console.log(organization);
        if (!organization) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Organization not found"
            }, {
                status: 404
            });
        }
        // Check if department name already exists IN THE SAME ORGANIZATION
        const existingDepartment = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            departmentName: body.departmentName.trim(),
            organizationId: body.organizationId // Add this condition
        });
        console.log(existingDepartment);
        if (existingDepartment) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Department name already exists in this organization"
            }, {
                status: 400
            });
        }
        const department = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(body);
        console.log(department);
        // Populate organization details for response
        const populatedDepartment = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(department._id).populate('organizationId', 'name').populate('createdBy', 'name email role').populate('updatedBy', 'name email role');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logActivity"])({
            action: "created",
            entity: "Department",
            entityId: department._id,
            description: `Created department: ${department.departmentName} in ${populatedDepartment.organizationId?.name}`,
            performedBy: {
                userId: populatedDepartment.createdBy?._id,
                name: populatedDepartment.createdBy?.name || "Admin/User",
                email: populatedDepartment.createdBy?.email,
                role: populatedDepartment.createdBy?.role
            },
            details: {
                organization: populatedDepartment.organizationId?.name
            },
            req: request
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Department created successfully",
            department: populatedDepartment
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Create department error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 400
        });
    }
}
async function GET(request) {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const page = Number(searchParams.get("page")) || 1;
        const limit = Number(searchParams.get("limit")) || 9;
        const search = searchParams.get("search") || "";
        const status = searchParams.get("status") || "";
        const organizationId = searchParams.get("organizationId") || "";
        // Build query
        let query = {};
        if (search) {
            query.departmentName = {
                $regex: search,
                $options: "i"
            };
        }
        if (status && status !== "all") {
            query.status = status;
        }
        if (authUser.role === "admin" && authUser.organizationId) {
            query.organizationId = authUser.organizationId;
        } else if (organizationId) {
            query.organizationId = organizationId;
        }
        const departments = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(query).populate('organizationId', 'name').populate('createdBy', 'name').populate('updatedBy', 'name').skip((page - 1) * limit).limit(limit).sort({
            createdAt: -1
        });
        const total = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments(query);
        // Transform data for frontend
        const transformedDepartments = departments.map((dept)=>({
                _id: dept._id,
                departmentName: dept.departmentName,
                status: dept.status,
                organizationId: dept.organizationId?._id,
                organizationName: dept.organizationId?.name,
                createdBy: dept.createdBy?.name,
                updatedBy: dept.updatedBy?.name,
                permissions: dept.permissions,
                createdAt: dept.createdAt,
                updatedAt: dept.updatedAt
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: transformedDepartments,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error("Get departments error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
            "super_admin"
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Department ID is required"
            }, {
                status: 400
            });
        }
        const body = await request.json();
        // Validate required fields
        if (!body.organizationId || !body.departmentName || !body.departmentName.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Organization and department name are required"
            }, {
                status: 400
            });
        }
        // Check if department exists
        const existingDepartment = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id);
        if (!existingDepartment) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Department not found"
            }, {
                status: 404
            });
        }
        // SaaS PROTECTION: Admin can only update their own org's departments
        if (authUser.role === 'admin' && existingDepartment.organizationId?.toString() !== authUser.organizationId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Forbidden: This department does not belong to your organization"
            }, {
                status: 403
            });
        }
        const duplicateDepartment = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            departmentName: body.departmentName.trim(),
            organizationId: body.organizationId,
            _id: {
                $ne: id
            } // Exclude the current department being updated
        });
        if (duplicateDepartment) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Department name already exists in this organization"
            }, {
                status: 400
            });
        }
        // Update department
        const updatedDepartment = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, {
            organizationId: body.organizationId,
            departmentName: body.departmentName.trim(),
            status: body.status,
            permissions: body.permissions,
            updatedBy: body.updatedBy || null,
            updatedAt: new Date()
        }, {
            new: true
        }).populate('organizationId', 'name').populate('createdBy', 'name email role').populate('updatedBy', 'name email role');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logActivity"])({
            action: "updated",
            entity: "Department",
            entityId: updatedDepartment._id,
            description: `Updated department: ${updatedDepartment.departmentName}`,
            performedBy: {
                userId: updatedDepartment.updatedBy?._id,
                name: updatedDepartment.updatedBy?.name || "Admin/User",
                email: updatedDepartment.updatedBy?.email,
                role: updatedDepartment.updatedBy?.role
            },
            req: request
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Department updated successfully",
            department: updatedDepartment
        });
    } catch (error) {
        console.error("Update department error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authorize"])(authUser, [
            "admin",
            "super_admin"
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Department ID is required"
            }, {
                status: 400
            });
        }
        const department = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id);
        if (!department) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Department not found"
            }, {
                status: 404
            });
        }
        // SaaS PROTECTION: Admin can only delete their own org's departments
        if (authUser.role === 'admin' && department.organizationId?.toString() !== authUser.organizationId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Forbidden: This department does not belong to your organization"
            }, {
                status: 403
            });
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logActivity"])({
            action: "deleted",
            entity: "Department",
            entityId: id,
            description: `Deleted department: ${department.departmentName}`,
            req: request
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Department deleted successfully"
        });
    } catch (error) {
        console.error("Delete department error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
async function GET_SINGLE(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Department ID is required"
            }, {
                status: 400
            });
        }
        const department = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$crm$2f$Department$2f$department$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).populate('organizationId', 'name').populate('createdBy', 'name').populate('updatedBy', 'name');
        if (!department) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Department not found"
            }, {
                status: 404
            });
        }
        // Transform data for frontend
        const transformedDepartment = {
            _id: department._id,
            departmentName: department.departmentName,
            status: department.status,
            organizationId: department.organizationId?._id,
            organizationName: department.organizationId?.name,
            createdBy: department.createdBy?.name,
            updatedBy: department.updatedBy?.name,
            createdAt: department.createdAt,
            updatedAt: department.updatedAt
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(transformedDepartment);
    } catch (error) {
        console.error("Get single department error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0hd7p5~._.js.map