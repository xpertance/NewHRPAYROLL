// src/middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;
const secret = new TextEncoder().encode(JWT_SECRET);

// Public routes
const publicRoutes = ['/login', '/auth/register', '/register'];

// Role-based protected routes
const protectedRoutes = [
  { path: '/super-admin', roles: ['super_admin'] },
  { path: '/dashboard', roles: ['super_admin', 'admin', 'employee', 'supervisor', 'attendance_only'] },
  { path: '/dashboard/payroll', roles: ['admin', 'super_admin'] },
  { path: '/dashboard/crm', roles: ['admin', 'super_admin', 'employee'] },
  { path: '/dashboard/tasks', roles: ['admin', 'super_admin', 'employee', 'supervisor'] },
  { path: '/dashboard/projects', roles: ['admin', 'super_admin', 'employee', 'supervisor'] },
];

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow public routes
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Find protected route config
  const routeConfig = protectedRoutes.find(route =>
    pathname.startsWith(route.path)
  );

  if (!routeConfig) return NextResponse.next(); // Route not protected

  // Check for token in cookies (support both system-wide and employee-specific tokens)
  const token = req.cookies.get('authToken')?.value || req.cookies.get('employee_token')?.value;

  if (!token) {
    console.log(`Middleware: Redirecting to login - No token found for ${pathname}`);
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('message', 'Please login first');
    return NextResponse.redirect(url);
  }

  try {
    const { payload } = await jwtVerify(token, secret);

    // Role-based access check
    if (!routeConfig.roles.includes(payload.role)) {
      console.warn(`Middleware: Unauthorized access attempt for ${pathname} (Role: ${payload.role})`);
      const url = req.nextUrl.clone();
      url.pathname = '/unauthorized';
      url.searchParams.set('message', 'You do not have access to this page');
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (error) {
    console.error(`Middleware: Token verification failed for ${pathname}:`, error.message);
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('message', 'Session expired. Please login again.');
    return NextResponse.redirect(url);
  }
}

// Apply middleware to all routes except static & API
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
