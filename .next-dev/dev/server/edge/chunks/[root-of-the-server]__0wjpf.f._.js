(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__0wjpf.f._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/middleware.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
// src/middleware.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [middleware-edge] (ecmascript)");
;
;
const JWT_SECRET = process.env.JWT_SECRET;
const secret = new TextEncoder().encode(JWT_SECRET);
// Public routes
const publicRoutes = [
    '/login',
    '/auth/register',
    '/register'
];
// Role-based protected routes
const protectedRoutes = [
    {
        path: '/super-admin',
        roles: [
            'super_admin'
        ]
    },
    {
        path: '/dashboard',
        roles: [
            'super_admin',
            'admin',
            'employee',
            'supervisor',
            'attendance_only'
        ]
    },
    {
        path: '/dashboard/payroll',
        roles: [
            'admin',
            'super_admin'
        ]
    },
    {
        path: '/dashboard/crm',
        roles: [
            'admin',
            'super_admin',
            'employee'
        ]
    },
    {
        path: '/dashboard/tasks',
        roles: [
            'admin',
            'super_admin',
            'employee',
            'supervisor'
        ]
    },
    {
        path: '/dashboard/projects',
        roles: [
            'admin',
            'super_admin',
            'employee',
            'supervisor'
        ]
    },
    // Enforce rigid SaaS API layer security instead of relying manually on route-level validation
    {
        path: '/api/v1/super-admin',
        roles: [
            'super_admin'
        ],
        isApi: true
    },
    // Specific exceptions allowing any designated employee to approve team requests, evaluated before the broader /api/v1/admin block
    {
        path: '/api/v1/admin/tasks',
        roles: [
            'admin',
            'super_admin',
            'employee',
            'supervisor'
        ],
        isApi: true
    },
    {
        path: '/api/v1/admin/payroll/employees',
        roles: [
            'admin',
            'super_admin',
            'employee',
            'supervisor'
        ],
        isApi: true
    },
    {
        path: '/api/v1/admin/approvals',
        roles: [
            'admin',
            'super_admin',
            'supervisor',
            'employee'
        ],
        isApi: true
    },
    {
        path: '/api/v1/admin/payroll/leave-applications',
        roles: [
            'admin',
            'super_admin',
            'supervisor',
            'employee'
        ],
        isApi: true
    },
    {
        path: '/api/v1/admin/payroll/overtime',
        roles: [
            'admin',
            'super_admin',
            'supervisor',
            'employee'
        ],
        isApi: true
    },
    {
        path: '/api/v1/admin/payroll/comp-off',
        roles: [
            'admin',
            'super_admin',
            'supervisor',
            'employee'
        ],
        isApi: true
    },
    {
        path: '/api/v1/admin',
        roles: [
            'admin',
            'super_admin'
        ],
        isApi: true
    },
    {
        path: '/api/v1/employee',
        roles: [
            'employee',
            'supervisor',
            'attendance_only'
        ],
        isApi: true
    },
    {
        path: '/api/v1/supervisor',
        roles: [
            'supervisor'
        ],
        isApi: true
    }
];
async function middleware(req) {
    const { pathname } = req.nextUrl;
    // Allow public routes
    if (publicRoutes.some((route)=>pathname.startsWith(route))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Find protected route config
    const routeConfig = protectedRoutes.find((route)=>pathname.startsWith(route.path));
    if (!routeConfig) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next(); // Route not protected
    // Check for token in cookies (support both system-wide and employee-specific tokens)
    const token = req.cookies.get('authToken')?.value || req.cookies.get('employee_token')?.value;
    if (!token) {
        if (routeConfig.isApi) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized: No active session"
            }, {
                status: 401
            });
        }
        console.log(`Middleware: Redirecting to login - No token found for ${pathname}`);
        const url = req.nextUrl.clone();
        url.pathname = '/login';
        url.searchParams.set('message', 'Please login first');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["jwtVerify"])(token, secret);
        // Role-based access check
        if (!routeConfig.roles.includes(payload.role)) {
            console.warn(`Middleware: Unauthorized access attempt for ${pathname} (Role: ${payload.role})`);
            if (routeConfig.isApi) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Forbidden: Role ${payload.role} does not have permission for this route.`
                }, {
                    status: 403
                });
            }
            const url = req.nextUrl.clone();
            url.pathname = '/unauthorized';
            url.searchParams.set('message', 'You do not have access to this page');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
        }
        // Pass the payload strictly into isolated Next Request Headers
        // Allows the global database singleton to reliably filter multi-tenancy via x-org-id
        const requestHeaders = new Headers(req.headers);
        if (payload.organizationId) {
            requestHeaders.set("x-organization-id", payload.organizationId);
        }
        requestHeaders.set("x-user-role", payload.role || "");
        requestHeaders.set("x-user-id", payload.id || "");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
            request: {
                headers: requestHeaders
            }
        });
    } catch (error) {
        console.error(`Middleware: Token verification failed for ${pathname}:`, error.message);
        if (routeConfig && routeConfig.isApi) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Session expired or invalid token."
            }, {
                status: 401
            });
        }
        const url = req.nextUrl.clone();
        url.pathname = '/login';
        url.searchParams.set('message', 'Session expired. Please login again.');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
}
const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|_next/data).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0wjpf.f._.js.map