import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Candidate from '@/lib/db/models/recruitment/Candidate';
import JobRequisition from '@/lib/db/models/recruitment/JobRequisition';
import Employee from '@/lib/db/models/payroll/Employee';
import { getAuthUser, authorize } from '@/lib/auth-util';

export async function GET(request) {
    try {
        const authUser = await getAuthUser();
        authorize(authUser, ["admin", "hr", "company_admin", "super_admin"]);
        await dbConnect();

        // SaaS PROTECTION: Scope to org
        let query = {};
        if (authUser.role !== "super_admin" && authUser.organizationId) {
            query.organizationId = authUser.organizationId;
        }

        // Fetch candidates with interviews
        const candidates = await Candidate.find(query)
            .populate('jobRequisition', 'title department')
            .populate('interviews.interviewer', 'personalDetails jobDetails')
            .lean();

        // Also fetch active employees to be used as interviewers
        const interviewerQuery = { status: 'Active' };
        if (authUser.role !== "super_admin" && authUser.organizationId) {
            interviewerQuery['jobDetails.organizationId'] = authUser.organizationId;
        }

        const interviewers = await Employee.find(interviewerQuery)
            .select('personalDetails jobDetails')
            .lean();

        // Flatten interviews for easy consumption by the UI
        const allInterviews = candidates.flatMap(candidate =>
            (candidate.interviews || []).map(interview => ({
                ...interview,
                candidateId: candidate._id,
                candidateName: candidate.name,
                candidateEmail: candidate.email,
                role: candidate.appliedRole || candidate.jobRequisition?.title || "N/A",
                interviewId: interview._id
            }))
        ).sort((a, b) => new Date(a.date) - new Date(b.date));

        return NextResponse.json({
            success: true,
            interviews: allInterviews,
            interviewers: interviewers.map(emp => ({
                _id: emp._id,
                name: `${emp.personalDetails.firstName} ${emp.personalDetails.lastName}`,
                designation: emp.jobDetails?.designation,
                department: emp.jobDetails?.department
            }))
        });
    } catch (error) {
        console.error("GET INTERVIEWS ERROR:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const authUser = await getAuthUser();
        authorize(authUser, ["admin", "hr", "company_admin", "super_admin"]);
        await dbConnect();
        const body = await request.json();
        const { candidateId, interview } = body;

        if (!candidateId || !interview) {
            return NextResponse.json({ error: "Candidate ID and interview details are required" }, { status: 400 });
        }

        const candidate = await Candidate.findById(candidateId);
        if (!candidate) return NextResponse.json({ error: "Candidate not found" }, { status: 404 });

        // Logic to sync status with the round type
        const roundToStageMap = {
            'Screening': 'Screening',
            'Technical Interview': 'Technical Interview',
            'Managerial Interview': 'Managerial Interview',
            'HR Interview': 'HR Interview'
        };

        if (roundToStageMap[interview.round]) {
            candidate.status = roundToStageMap[interview.round];
        }

        // Add to interviews array
        candidate.interviews.push(interview);
        await candidate.save();

        // 🚀 Gap Fix #10: Send Interview Invitation Email
        try {
            const { sendEmail } = await import('@/lib/email/service');
            const { getInterviewInviteTemplate } = await import('@/lib/email/templates/recruitment');
            
            // Resolve interviewer name
            const interviewer = await Employee.findById(interview.interviewer).lean();
            const interviewerName = interviewer ? `${interviewer.personalDetails.firstName} ${interviewer.personalDetails.lastName}` : 'an HR Representative';
            
            // Format date for email
            const formattedDate = new Date(interview.date).toLocaleString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            await sendEmail({
                to: candidate.email,
                subject: `Interview Invitation: ${interview.round} — ${candidate.appliedRole || 'the position'}`,
                html: getInterviewInviteTemplate(
                    candidate.name, 
                    interview.round, 
                    formattedDate, 
                    interview.meetingLink, 
                    interviewerName
                )
            });
        } catch (emailErr) {
            console.warn("📧 Interview email skipped:", emailErr.message);
        }

        return NextResponse.json({ success: true, message: "Interview scheduled successfully", candidate });
    } catch (error) {
        console.error("POST INTERVIEW ERROR:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const authUser = await getAuthUser();
        authorize(authUser, ["admin", "hr", "company_admin", "super_admin"]);
        await dbConnect();
        const body = await request.json();
        const { candidateId, interviewId, updateData } = body;

        if (!candidateId || !interviewId) {
            return NextResponse.json({ error: "Missing required identifiers" }, { status: 400 });
        }

        const candidate = await Candidate.findById(candidateId);
        if (!candidate) return NextResponse.json({ error: "Candidate not found" }, { status: 404 });

        // Update the specific interview in the array
        const interviewIndex = candidate.interviews.findIndex(i => i._id.toString() === interviewId);
        if (interviewIndex === -1) return NextResponse.json({ error: "Interview not found" }, { status: 404 });

        candidate.interviews[interviewIndex] = {
            ...candidate.interviews[interviewIndex].toObject(),
            ...updateData
        };

        await candidate.save();
        return NextResponse.json({ success: true, message: "Interview updated successfully" });
    } catch (error) {
        console.error("PUT INTERVIEW ERROR:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
