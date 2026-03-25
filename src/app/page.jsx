'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/context/SessionContext';

export default function RootPage() {
    const router = useRouter();
    const { user, loading } = useSession();

    useEffect(() => {
        if (!loading) {
            if (user) {
                if (user.role === 'super_admin') {
                    router.push('/super-admin/dashboard');
                } else if (['admin', 'company_admin', 'hr'].includes(user.role)) {
                    router.push('/admin/dashboard');
                } else if (['employee', 'supervisor', 'attendance_only'].includes(user.role)) {
                    router.push('/employee/dashboard');
                } else {
                    router.push('/login');
                }
            } else {
                router.push('/login');
            }
        }
    }, [user, loading, router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50">
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                <p className="text-slate-500 font-medium">Redirecting...</p>
            </div>
        </div>
    );
}
