import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/db/connect';
import Employee from '@/lib/db/models/payroll/Employee';
// Ensure Team model is registered
import '@/lib/db/models/crm/organization/Team'; 
import { getAuthUser } from '@/lib/auth-util';

export async function GET(request) {
    try {
        const authUser = await getAuthUser();
        await dbConnect();

        // Get current employee's team information
        const currentEmployee = await Employee.findById(authUser.id).select('jobDetails.teamId');
        const teamId = currentEmployee?.jobDetails?.teamId;

        const { searchParams } = new URL(request.url);
        const search = (searchParams.get('search') || '').trim();

        // STRICT FILTER: Only show people from the same team
        let query = {
            _id: { $ne: authUser.id },
            status: 'Active'
        };

        if (teamId) {
            query['jobDetails.teamId'] = teamId;
        } else {
            // If user has no team, they can't see team approvers. 
            // We could allow global HR here, but user asked for strict team.
            return NextResponse.json({ success: true, data: [] });
        }

        const leadershipDesignations = [
            { 'jobDetails.designation': { $regex: 'Manager', $options: 'i' } },
            { 'jobDetails.designation': { $regex: 'HR', $options: 'i' } },
            { 'jobDetails.designation': { $regex: 'Lead', $options: 'i' } },
            { 'jobDetails.designation': { $regex: 'Admin', $options: 'i' } },
            { 'jobDetails.designation': { $regex: 'Director', $options: 'i' } }
        ];

        // Combined filter: Must be in the team AND (Designation is Manager/Lead OR they are the Team Lead)
        const leadershipFilter = {
            $or: leadershipDesignations
        };

        if (search && search.length >= 2) {
            const searchRegex = new RegExp(search, 'i');
            const searchParts = search.split(/\s+/);
            const searchRegexes = searchParts.map(p => new RegExp(p, 'i'));

            query.$and = [
                {
                    $or: [
                        { employeeId: searchRegex },
                        {
                            $and: searchRegexes.map(regex => ({
                                $or: [
                                    { 'personalDetails.firstName': regex },
                                    { 'personalDetails.lastName': regex }
                                ]
                            }))
                        },
                        { 'jobDetails.designation': searchRegex }
                    ]
                },
                leadershipFilter
            ];
        } else {
            // Default suggestions: All leaders in the same team
            query.$or = leadershipDesignations;
        }

        const employees = await Employee.find(query)
            .select('_id employeeId personalDetails.firstName personalDetails.lastName personalDetails.thumbnail jobDetails.designation')
            .limit(20);

        return NextResponse.json({
            success: true,
            data: employees
        });
    } catch (error) {
        console.error('Error searching approvers:', error);
        return NextResponse.json({ success: false, error: 'Failed to search employees' }, { status: 500 });
    }
}
