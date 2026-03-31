import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Candidate from '@/lib/db/models/recruitment/Candidate';
import JobRequisition from '@/lib/db/models/recruitment/JobRequisition';
import { parseResume } from '@/lib/ai/gemini';
import { sendEmail } from '@/lib/email/service';
import { getApplicationReceivedTemplate } from '@/lib/email/templates';

// Polyfill missing DOM APIs expected by pdf-parse internal engine
if (typeof global !== 'undefined') {
    global.DOMMatrix = global.DOMMatrix || class DOMMatrix {};
    global.ImageData = global.ImageData || class ImageData {};
    global.Path2D = global.Path2D || class Path2D {};
}
const pdfParseModule = require('pdf-parse');
const pdfParse = pdfParseModule.default || pdfParseModule;

export async function POST(request) {
    try {
        await dbConnect();
        
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const jobId = formData.get('jobId');
        const resumeFile = formData.get('resume');
        const source = formData.get('source');
        
        if (!name || !email || !jobId) return NextResponse.json({ success: false, error: 'Name, email, and Job ID are required' }, { status: 400 });
        
        const job = await JobRequisition.findById(jobId);
        if (!job) return NextResponse.json({ success: false, error: 'Job not found' }, { status: 404 });
        
        const existing = await Candidate.findOne({ email, organizationId: job.organizationId });
        if (existing) {
            return NextResponse.json({ success: false, error: 'You have already applied.' }, { status: 400 });
        }
        
        let parsedResume = {};
        let resumeText = '';

        if (resumeFile && typeof resumeFile.arrayBuffer === 'function') {
            try {
                const buffer = Buffer.from(await resumeFile.arrayBuffer());
                const pdfData = await pdfParse(buffer);
                resumeText = pdfData.text;
            } catch (err) {
                console.error("Local PDF Extraction failed", err);
            }
        }

        if (resumeText && resumeText.length > 50) {
            try {
                parsedResume = await parseResume(resumeText);
            } catch (e) {
                console.error("AI Parse failed on public apply", e);
            }
        }
        
        const candidate = await Candidate.create({
            name, email, phone,
            jobRequisition: jobId,
            organizationId: job.organizationId,
            source: source || 'Website',
            status: 'Applied',
            resumeUrl: 'pending',
            parsedResume: parsedResume
        });
        
        try {
            const template = getApplicationReceivedTemplate({
                candidateName: name,
                jobTitle: job.title,
                applicationId: candidate._id.toString()
            });
            await sendEmail({ to: email, subject: template.subject, html: template.html });
        } catch (emErr) {
            console.error("Email failed on apply", emErr);
        }
        
        return NextResponse.json({ 
            success: true, 
            applicationId: candidate._id,
            message: 'Application submitted successfully. Check your email for tracking details.' 
        }, { status: 201 });
    } catch (error) {
        console.error("PUBLIC APPLY ERROR:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
