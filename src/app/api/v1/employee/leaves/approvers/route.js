import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Employee from '@/lib/db/models/payroll/Employee';
import { getAuthUser } from '@/lib/auth-util';

export async function GET(request) {
    try {
        const authUser = await getAuthUser();
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const search = searchParams.get('search');

        let query = {
            _id: { $ne: authUser.id },
            status: 'Active'
        };

        if (search && search.length >= 2) {
            query.$or = [
                { employeeId: { $regex: search, $options: 'i' } },
                { 'personalDetails.firstName': { $regex: search, $options: 'i' } },
                { 'personalDetails.lastName': { $regex: search, $options: 'i' } },
                { 'jobDetails.designation': { $regex: search, $options: 'i' } }
            ];
        }

        const employees = await Employee.find(query)
        .select('_id employeeId personalDetails.firstName personalDetails.lastName personalDetails.thumbnail jobDetails.designation')
        .limit(50);

        return NextResponse.json({
            success: true,
            data: employees
        });
    } catch (error) {
        console.error('Error searching approvers:', error);
        return NextResponse.json({ success: false, error: 'Failed to search employees' }, { status: 500 });
    }
}
