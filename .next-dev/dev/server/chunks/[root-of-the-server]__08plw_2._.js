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
"[project]/src/lib/db/models/finance/JournalEntry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const journalEntrySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    referenceNumber: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        enum: [
            'Payroll',
            'Expense',
            'Vendor Invoice',
            'Manual'
        ],
        required: true
    },
    sourceId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        required: false // Link to record like PayrollRun or Expense
    },
    status: {
        type: String,
        enum: [
            'Draft',
            'Posted',
            'Cancelled'
        ],
        default: 'Posted'
    },
    lines: [
        {
            accountName: {
                type: String,
                required: true
            },
            accountType: {
                type: String,
                enum: [
                    'Asset',
                    'Liability',
                    'Equity',
                    'Revenue',
                    'Expense'
                ],
                required: true
            },
            debit: {
                type: Number,
                default: 0
            },
            credit: {
                type: Number,
                default: 0
            },
            costCenter: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
                ref: 'CostCenter'
            },
            description: String
        }
    ],
    totalDebit: {
        type: Number,
        required: true
    },
    totalCredit: {
        type: Number,
        required: true
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
// Middleware to ensure debits and credits balance
journalEntrySchema.pre('save', function(next) {
    const totalDebit = this.lines.reduce((sum, line)=>sum + (line.debit || 0), 0);
    const totalCredit = this.lines.reduce((sum, line)=>sum + (line.credit || 0), 0);
    if (Math.abs(totalDebit - totalCredit) > 0.01) {
        return next(new Error('Journal entry must be balanced (Total Debit must equal Total Credit)'));
    }
    this.totalDebit = totalDebit;
    this.totalCredit = totalCredit;
    next();
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.JournalEntry || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('JournalEntry', journalEntrySchema);
}),
"[project]/src/lib/db/models/finance/Expense.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const expenseSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    employee: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    title: {
        type: String,
        required: [
            true,
            'Expense title is required'
        ],
        trim: true
    },
    category: {
        type: String,
        enum: [
            'Travel',
            'Food',
            'Accommodation',
            'Equipment',
            'Software',
            'Utilities',
            'Other'
        ],
        required: true
    },
    amount: {
        type: Number,
        required: [
            true,
            'Amount is required'
        ],
        min: 0
    },
    currency: {
        type: String,
        default: 'INR'
    },
    date: {
        type: Date,
        required: [
            true,
            'Expense date is required'
        ]
    },
    description: String,
    receiptUrl: String,
    status: {
        type: String,
        enum: [
            'Draft',
            'Pending',
            'Approved',
            'Rejected',
            'Paid'
        ],
        default: 'Pending'
    },
    costCenter: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'CostCenter'
    },
    approvedBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    approvedAt: Date,
    rejectionReason: String,
    paymentDetails: {
        referenceNumber: String,
        paymentDate: Date,
        paymentMode: {
            type: String,
            enum: [
                'Bank Transfer',
                'Cash',
                'UPI'
            ]
        }
    },
    gstDetails: {
        gstNumber: String,
        gstAmount: Number,
        isGstIncluded: {
            type: Boolean,
            default: true
        }
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Expense || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Expense', expenseSchema);
}),
"[project]/src/lib/db/models/finance/Vendor.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Vendor",
    ()=>Vendor,
    "VendorInvoice",
    ()=>VendorInvoice
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const vendorSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true
    },
    phone: String,
    address: String,
    gstin: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        enum: [
            'IT Services',
            'Office Supplies',
            'Benefits Provider',
            'Consultant',
            'Travel',
            'Software',
            'Other'
        ],
        default: 'Other'
    },
    bankDetails: {
        accountName: String,
        accountNumber: String,
        ifsc: String,
        bankName: String
    },
    status: {
        type: String,
        enum: [
            'Active',
            'Inactive'
        ],
        default: 'Active'
    }
}, {
    timestamps: true
});
const Vendor = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Vendor || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Vendor', vendorSchema);
const vendorInvoiceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    vendor: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    invoiceNumber: {
        type: String,
        required: true
    },
    invoiceDate: {
        type: Date,
        required: true
    },
    dueDate: Date,
    title: String,
    items: [
        {
            description: String,
            quantity: Number,
            rate: Number,
            amount: Number,
            taxPercent: {
                type: Number,
                default: 18
            },
            taxAmount: Number
        }
    ],
    subTotal: Number,
    totalTax: Number,
    totalAmount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'INR'
    },
    status: {
        type: String,
        enum: [
            'Pending',
            'Approved',
            'Paid',
            'Cancelled'
        ],
        default: 'Pending'
    },
    costCenter: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'CostCenter'
    },
    paymentDetails: {
        referenceNumber: String,
        paymentDate: Date,
        paymentMode: String
    }
}, {
    timestamps: true
});
const VendorInvoice = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.VendorInvoice || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('VendorInvoice', vendorInvoiceSchema);
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
"[project]/src/app/api/v1/admin/finance/stats/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/connect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$JournalEntry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/finance/JournalEntry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$Expense$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/finance/Expense.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$Vendor$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/finance/Vendor.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$CostCenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/finance/CostCenter.js [app-route] (ecmascript)");
;
;
;
;
;
;
async function GET() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // 1. Total Revenue (Revenue accounts in Journal Entries)
        const revenueData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$JournalEntry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].aggregate([
            {
                $match: {
                    status: 'Posted'
                }
            },
            {
                $unwind: '$lines'
            },
            {
                $match: {
                    'lines.accountType': 'Revenue'
                }
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: '$lines.credit'
                    }
                }
            }
        ]);
        // 2. Total Operating Expenses (Expense accounts in Journal Entries)
        const expenseData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$JournalEntry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].aggregate([
            {
                $match: {
                    status: 'Posted'
                }
            },
            {
                $unwind: '$lines'
            },
            {
                $match: {
                    'lines.accountType': 'Expense'
                }
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: '$lines.debit'
                    }
                }
            }
        ]);
        // 3. Current Liabilities (Liability accounts)
        const liabilityData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$JournalEntry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].aggregate([
            {
                $match: {
                    status: 'Posted'
                }
            },
            {
                $unwind: '$lines'
            },
            {
                $match: {
                    'lines.accountType': 'Liability'
                }
            },
            {
                $group: {
                    _id: null,
                    balance: {
                        $sum: {
                            $subtract: [
                                '$lines.credit',
                                '$lines.debit'
                            ]
                        }
                    }
                }
            }
        ]);
        // 4. Vendor Pipeline (Pending Payments)
        const pendingPayments = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$Expense$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].aggregate([
            {
                $match: {
                    status: 'Approved'
                }
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: '$amount'
                    }
                }
            }
        ]);
        // 5. Budget Utilization Overview
        const costCenterStats = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$finance$2f$CostCenter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].aggregate([
            {
                $group: {
                    _id: null,
                    totalBudget: {
                        $sum: '$budget'
                    }
                }
            }
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            stats: {
                totalRevenue: revenueData[0]?.total || 0,
                operatingExpenses: expenseData[0]?.total || 0,
                liabilities: liabilityData[0]?.balance || 0,
                pendingPayments: pendingPayments[0]?.total || 0,
                budgetAllocation: costCenterStats[0]?.totalBudget || 0
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08plw_2._.js.map