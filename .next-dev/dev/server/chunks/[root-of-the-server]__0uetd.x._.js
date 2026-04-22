module.exports = [
"[project]/src/lib/cron/attendance-cron.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getCronStatus",
    ()=>getCronStatus,
    "startAttendanceCron",
    ()=>startAttendanceCron,
    "stopAttendanceCron",
    ()=>stopAttendanceCron,
    "triggerAttendanceReportNow",
    ()=>triggerAttendanceReportNow
]);
// src/lib/cron/attendance-cron.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import, [project]/node_modules/node-cron)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
let cronJob = null;
// Function to send attendance report
async function sendAttendanceReport() {
    try {
        console.log('⏰ Running scheduled attendance report at', new Date().toISOString());
        const apiUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const response = await fetch(`${apiUrl}/api/cron/attendance-report`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.CRON_SECRET || 'internal-cron'}`
            }
        });
        const data = await response.json();
        if (data.success) {
            console.log('✅ Attendance report sent successfully');
            console.log('📊 Summary:', data.data?.reportData?.summary);
        } else {
            console.error('❌ Failed to send attendance report:', data.error);
        }
    } catch (error) {
        console.error('❌ Error in scheduled attendance report:', error.message);
    }
}
function startAttendanceCron() {
    // Prevent multiple instances
    if (cronJob) {
        console.log('⚠️  Cron job already running, skipping initialization');
        return;
    }
    // Schedule: Run at 2:00 PM every day
    // Cron format: second minute hour day month weekday
    // '0 14 * * *' = At 14:00 (2 PM) every day
    cronJob = __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__["default"].schedule('5 17 * * *', sendAttendanceReport, {
        scheduled: true,
        timezone: process.env.TIMEZONE || "Asia/Kolkata"
    });
    console.log('🚀 Attendance report cron job started');
    console.log('⏰ Scheduled to run daily at 2:00 PM');
    console.log('🌍 Timezone:', process.env.TIMEZONE || "Asia/Kolkata");
}
function stopAttendanceCron() {
    if (cronJob) {
        cronJob.stop();
        cronJob = null;
        console.log('🛑 Attendance report cron job stopped');
    }
}
async function triggerAttendanceReportNow() {
    console.log('🔧 Manual trigger initiated');
    await sendAttendanceReport();
}
function getCronStatus() {
    return {
        isRunning: cronJob ? true : false,
        nextRun: cronJob ? 'Daily at 2:00 PM' : 'Not scheduled',
        timezone: process.env.TIMEZONE || "Asia/Kolkata"
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/node:http [external] (node:http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}),
"[externals]/node:https [external] (node:https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:https", () => require("node:https"));

module.exports = mod;
}),
"[externals]/node:zlib [external] (node:zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:zlib", () => require("node:zlib"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:stream/web [external] (node:stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/web", () => require("node:stream/web"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:net [external] (node:net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[project]/src/lib/cron/document-reminder-cron.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "manualTriggerDocumentReminders",
    ()=>manualTriggerDocumentReminders,
    "startDocumentReminderCron",
    ()=>startDocumentReminderCron,
    "stopDocumentReminderCron",
    ()=>stopDocumentReminderCron
]);
// src/lib/cron/document-reminder-cron.js
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import, [project]/node_modules/node-cron)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$fetch$2f$src$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/node-fetch/src/index.js [instrumentation] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let documentReminderCronJob = null;
// Function to trigger document reminder processing
async function triggerDocumentReminders() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const cronSecret = process.env.CRON_SECRET || 'your-secret-key';
        console.log('📋 Triggering document reminder check...');
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$fetch$2f$src$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(`${baseUrl}/api/cron/document-reminders`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${cronSecret}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('✅ Document reminder check completed:', result);
    } catch (error) {
        console.error('❌ Error triggering document reminders:', error);
    }
}
function startDocumentReminderCron() {
    // Run every day at 9 AM
    const cronSchedule = '0 9 * * *';
    console.log('📅 Scheduling document reminder cron job:', cronSchedule);
    documentReminderCronJob = __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$node$2d$cron$29$__["default"].schedule(cronSchedule, triggerDocumentReminders, {
        scheduled: false
    });
    documentReminderCronJob.start();
    console.log('✅ Document reminder cron job started');
}
function stopDocumentReminderCron() {
    if (documentReminderCronJob) {
        documentReminderCronJob.stop();
        documentReminderCronJob = null;
        console.log('🛑 Document reminder cron job stopped');
    }
}
async function manualTriggerDocumentReminders() {
    console.log('🔧 Manual trigger for document reminders');
    await triggerDocumentReminders();
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/cron/init.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "initializeCronJobs",
    ()=>initializeCronJobs,
    "shutdownCronJobs",
    ()=>shutdownCronJobs
]);
// src/lib/cron/init.js
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cron$2f$attendance$2d$cron$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cron/attendance-cron.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cron$2f$document$2d$reminder$2d$cron$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cron/document-reminder-cron.js [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cron$2f$attendance$2d$cron$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cron$2f$document$2d$reminder$2d$cron$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cron$2f$attendance$2d$cron$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cron$2f$document$2d$reminder$2d$cron$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let initialized = false;
function initializeCronJobs() {
    // Prevent multiple initializations
    if (initialized) {
        console.log('⚠️  Cron jobs already initialized');
        return;
    }
    // Only run in production or when explicitly enabled
    const shouldRunCron = ("TURBOPACK compile-time value", "development") === 'production' || process.env.ENABLE_CRON === 'true';
    if (!shouldRunCron) {
        console.log('ℹ️  Cron jobs disabled (not in production mode)');
        console.log('ℹ️  Set ENABLE_CRON=true in .env.local to enable in development');
        return;
    }
    console.log('🔄 Initializing cron jobs...');
    try {
        // Start attendance report cron
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cron$2f$attendance$2d$cron$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["startAttendanceCron"])();
        // Start document reminder cron
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cron$2f$document$2d$reminder$2d$cron$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["startDocumentReminderCron"])();
        initialized = true;
        console.log('✅ All cron jobs initialized successfully');
    } catch (error) {
        console.error('❌ Failed to initialize cron jobs:', error);
    }
}
function shutdownCronJobs() {
    const { stopAttendanceCron } = __turbopack_context__.r("[project]/src/lib/cron/attendance-cron.js [instrumentation] (ecmascript)");
    const { stopDocumentReminderCron } = __turbopack_context__.r("[project]/src/lib/cron/document-reminder-cron.js [instrumentation] (ecmascript)");
    console.log('🛑 Shutting down cron jobs...');
    stopAttendanceCron();
    stopDocumentReminderCron();
    initialized = false;
    console.log('✅ Cron jobs shutdown complete');
}
// Handle process termination
if (typeof process !== 'undefined') {
    process.on('SIGTERM', shutdownCronJobs);
    process.on('SIGINT', shutdownCronJobs);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0uetd.x._.js.map