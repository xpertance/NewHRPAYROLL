import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Candidate from '@/lib/db/models/recruitment/Candidate';
import JobRequisition from '@/lib/db/models/recruitment/JobRequisition';
import Employee from '@/lib/db/models/payroll/Employee';

export async function GET(request) {
    try {
        await dbConnect();

        // Fetch candidates with interviews
        const candidates = await Candidate.find({})
            .populate('jobRequisition', 'title department')
            .populate('interviews.interviewer', 'personalDetails jobDetails')
            .lean();

        // Also fetch active employees to be used as interviewers
        const interviewers = await Employee.find({ status: 'Active' })
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
            interviews: allInterviews,
            interviewers: interviewers.map(emp => ({
                _id: emp._id,
                name: `${emp.personalDetails.firstName} ${emp.personalDetails.lastName}`,
                designation: emp.jobDetails.designation,
                department: emp.jobDetails.department
            }))
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
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

        return NextResponse.json({ message: "Interview scheduled successfully", candidate });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
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
        return NextResponse.json({ message: "Interview updated successfully" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
