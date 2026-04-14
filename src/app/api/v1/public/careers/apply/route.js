import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Candidate from '@/lib/db/models/recruitment/Candidate';
import JobRequisition from '@/lib/db/models/recruitment/JobRequisition';
import { parseResumeFromPDF, calculateFitScore } from '@/lib/ai/gemini';
import { sendEmail } from '@/lib/email/service';
import { getApplicationReceivedTemplate } from '@/lib/email/templates';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
    try {
        await dbConnect();
        
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const jobId = formData.get('jobId');
        const resumeFile = formData.get('resume');
        
        if (!name || !email || !jobId) return NextResponse.json({ success: false, error: 'Name, email, and Job ID are required' }, { status: 400 });
        
        const job = await JobRequisition.findById(jobId);
        if (!job) return NextResponse.json({ success: false, error: 'Job not found' }, { status: 404 });
        
        const existing = await Candidate.findOne({ 
            email: email.toLowerCase(), 
            organizationId: job.organizationId,
            jobRequisition: jobId
        });
        if (existing) {
            return NextResponse.json({ success: false, error: 'Email already exists for this position' }, { status: 400 });
        }
        
        let parsedResume = {};
        let resumeUrl = null;
        let resumeText = '';
        let buffer = null;

        // Step 1: LOCAL STORAGE - Save the PDF file to the public/uploads/resumes folder
        if (resumeFile && typeof resumeFile.arrayBuffer === 'function') {
            buffer = Buffer.from(await resumeFile.arrayBuffer());
            
            // Create a unique filename
            const fileName = `resume_${Date.now()}_${name.replace(/\s+/g, '_').toLowerCase()}.pdf`;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'resumes');
            const filePath = path.join(uploadDir, fileName);

            try {
                // Ensure directory exists
                await fs.mkdir(uploadDir, { recursive: true });
                // Write file to disk
                await fs.writeFile(filePath, buffer);
                // The URL that will be accessible via browser
                resumeUrl = `/uploads/resumes/${fileName}`;
                console.log(`💾 Resume saved locally: ${resumeUrl}`);
            } catch (fsErr) {
                console.error("❌ Failed to save resume locally:", fsErr.message);
            }
        }

        // Step 2: Use Gemini to parse resume + extract text fallback
        if (buffer && buffer.length > 0) {
            try {
                console.log('🤖 Starting AI Analysis for candidate:', name);
                const aiResult = await parseResumeFromPDF(buffer, resumeFile.type || 'application/pdf');
                
                if (aiResult) {
                    resumeText = aiResult.rawText || '';
                    delete aiResult.rawText;
                    parsedResume = aiResult;
                    console.log(`✅ AI success: Parsed ${parsedResume.skills?.length || 0} skills and ${parsedResume.experience?.length || 0} roles.`);
                } else {
                    console.warn("⚠️ AI returned empty result for resume parsing.");
                }
            } catch (err) {
                console.error("❌ AI Parsing Step Failed:", err.message);
            }
        }

        // Step 3: AI Fit Score
        let fitScore = 0; // Default to 0 instead of null
        let fitAnalysis = 'Analysis pending...';
        let fitRecommendation = 'Pending Review';
        let fitStrengths = [];
        let fitGaps = [];

        // We run the fit score if we have any parsed content at all (not just skills)
        if (parsedResume && (Object.keys(parsedResume).length > 0)) {
            try {
                console.log('⚖️ Executing Fit Score calculation for:', name);
                const candidateProfile = {
                    skills: parsedResume.skills || [],
                    totalExperienceYears: parsedResume.totalExperienceYears || 0,
                    currentRole: parsedResume.currentRole || '',
                    education: parsedResume.education || [],
                    summary: parsedResume.summary || '',
                    rawText: resumeText // Added rawText for better AI context
                };
                const jobRequirements = {
                    title: job.title || 'N/A',
                    department: job.department || 'N/A',
                    description: job.description || 'N/A',
                    requirements: job.requirements || [],
                    skillsRequired: job.skillsRequired || []
                };
                const fitResult = await calculateFitScore(candidateProfile, jobRequirements);
                
                if (fitResult) {
                    fitScore = fitResult.fitScore || 0;
                    fitAnalysis = fitResult.analysis || '';
                    fitRecommendation = fitResult.recommendation || 'Weak Match';
                    fitStrengths = fitResult.strengths || [];
                    fitGaps = fitResult.gaps || [];
                    console.log(`🎯 FIT SCORE GENERATED: ${fitScore}/100`);
                }
            } catch (fitErr) {
                console.error("❌ Fit Score Calculation Crashed:", fitErr.message);
            }
        } else {
            console.warn("⏭️ Fit Score skipped: AI could not retrieve any profile data from PDF.");
        }
        
        // Step 4: Create Candidate in MongoDB
        const candidate = await Candidate.create({
            name, email, phone,
            jobRequisition: jobId,
            organizationId: job.organizationId,
            source: 'Careers Portal',
            status: 'Applied',
            resumeUrl, // Local path: /uploads/resumes/...
            resumeText,
            parsedResume,
            fitScore,
            fitAnalysis,
            fitRecommendation,
            fitStrengths,
            fitGaps
        });
        
        // Step 5: Formal Email Confirmation
        try {
            const { sendEmail } = await import('@/lib/email/service');
            const { getApplicationReceivedTemplate } = await import('@/lib/email/templates/recruitment');
            
            await sendEmail({
                to: email,
                subject: `Application Received — ${job?.title || 'the open position'}`,
                html: getApplicationReceivedTemplate(name, job?.title || 'the open position')
            });
        } catch (emailErr) {
            console.warn("📧 Email skipping (SMTP not configured):", emailErr.message);
        }

        return NextResponse.json({ 
            success: true, 
            message: "Application submitted successfully",
            candidateId: candidate._id 
        }, { status: 201 });
    } catch (error) {
        console.error("APPLY API ERROR:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
