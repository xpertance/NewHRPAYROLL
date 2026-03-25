import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Candidate from '@/lib/db/models/recruitment/Candidate';
import JobRequisition from '@/lib/db/models/recruitment/JobRequisition';
import Employee from '@/lib/db/models/payroll/Employee';
import OnboardingChecklist from '@/lib/db/models/recruitment/OnboardingChecklist';
import { getAuthUser, authorize } from '@/lib/auth-util';
import { z } from 'zod';

const candidateSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional(),
    resumeUrl: z.string().url().optional(),
    jobRequisition: z.string().optional(),
    appliedRole: z.string().optional(),
    source: z.enum(['LinkedIn', 'Indeed', 'Referral', 'Website', 'Other']).default('Website'),
    notes: z.string().optional()
});

export async function GET(request) {
    try {
        const authUser = await getAuthUser();
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const jobId = searchParams.get('jobId');
        const status = searchParams.get('status');

        let query = {};
        
        // SaaS PROTECTION: Scope to org
        if (authUser.role === 'admin') {
            query.organizationId = authUser.organizationId;
        } else if (authUser.role === 'super_admin') {
            const orgId = searchParams.get('organizationId');
            if (orgId) query.organizationId = orgId;
        }

        if (jobId) query.jobRequisition = jobId;
        if (status) query.status = status;

        const candidates = await Candidate.find(query)
            .populate('jobRequisition', 'title department')
            .sort({ createdAt: -1 });

        return NextResponse.json({ candidates });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const authUser = await getAuthUser();
        // Removed strict authorization
        
        await dbConnect();
        const body = await request.json();
        const validatedData = candidateSchema.parse(body);

        // SaaS PROTECTION: Attach org to candidate record
        const orgId = authUser.role === 'admin' ? authUser.organizationId : body.organizationId;

        const candidate = await Candidate.create({ ...validatedData, organizationId: orgId });
        return NextResponse.json({ candidate, message: "Candidate application received" }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { id, ...updateData } = body;

        if (!id) return NextResponse.json({ error: "Candidate ID is required" }, { status: 400 });

        const candidate = await Candidate.findById(id).populate('jobRequisition');
        if (!candidate) return NextResponse.json({ error: "Candidate not found" }, { status: 404 });

        const prevStatus = candidate.status;
        const newStatus = updateData.status;

        // Perform the update
        Object.assign(candidate, updateData);
        await candidate.save();

        // 🚀 AUTO-ONBOARDING TRIGGER
        if (newStatus === 'Hired' && prevStatus !== 'Hired') {
            try {
                // 1. Check if employee already exists by email
                let employee = await Employee.findOne({ 'personalDetails.email': candidate.email });

                if (!employee) {
                    const nameParts = candidate.name.split(' ');
                    const firstName = nameParts[0];
                    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'Hired';

                    // 2. Create basic Employee record
                    employee = await Employee.create({
                        employeeId: `EMP-${Date.now().toString().slice(-6)}`,
                        password: 'welcome_to_team', // Default password
                        personalDetails: {
                            firstName,
                            lastName,
                            email: candidate.email,
                            phone: candidate.phone || 'N/A',
                            dateOfJoining: new Date(),
                        },
                        jobDetails: {
                            department: candidate.jobRequisition?.department || "General",
                            designation: candidate.appliedRole || candidate.jobRequisition?.title || "New Joiner",
                            workLocation: "Remote / Office"
                        },
                        payslipStructure: {
                            salaryType: 'monthly',
                            basicSalary: 30000, // Placeholder
                            earnings: [],
                            deductions: []
                        },
                        workingHr: 9,
                        status: 'Active'
                    });
                }

                // 3. Check if Checklist already exists
                const existingChecklist = await OnboardingChecklist.findOne({ employee: employee._id });

                if (!existingChecklist) {
                    // 4. Create Onboarding Checklist with default tasks
                    await OnboardingChecklist.create({
                        employee: employee._id,
                        tasks: [
                            { category: 'Documentation', task: 'Submit Personal Documents (ID/Address Proof)', status: 'Pending' },
                            { category: 'Documentation', task: 'Sign Employment Agreement & Policies', status: 'Pending' },
                            { category: 'IT Setup', task: 'Set up System & Corporate Email', status: 'Pending' },
                            { category: 'IT Setup', task: 'Configure Access to Project Tools (GitHub/Jira)', status: 'Pending' },
                            { category: 'Orientation', task: 'Company Culture & Values Introduction', status: 'Pending' },
                            { category: 'Orientation', task: 'Team Introduction & Department Briefing', status: 'Pending' },
                            { category: 'Finance', task: 'Submit Bank Details & Tax Declaration', status: 'Pending' }
                        ],
                        status: 'Not Started'
                    });
                }
            } catch (triggerError) {
                console.error("Auto-onboarding trigger failed:", triggerError);
                // We don't fail the main candidate update if the trigger fails, 
                // but we should log it or handle it.
            }
        }

        return NextResponse.json({
            candidate,
            message: newStatus === 'Hired' ? "Candidate Hired & Onboarding Initiated!" : "Candidate updated successfully"
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
