module.exports = [
"[project]/src/instrumentation.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/instrumentation.js
// This file runs once when the server starts (Next.js 15+)
__turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
    // Only run on server side
    if ("TURBOPACK compile-time truthy", 1) {
        const { initializeCronJobs } = await __turbopack_context__.A("[project]/src/lib/cron/init.js [instrumentation] (ecmascript, async loader)");
        initializeCronJobs();
    }
}
}),
];

//# sourceMappingURL=src_instrumentation_0km3rv~.js.map