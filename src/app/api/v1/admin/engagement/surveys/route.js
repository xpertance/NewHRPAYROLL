import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import PulseSurvey from '@/lib/db/models/engagement/PulseSurvey';
import Employee from '@/lib/db/models/payroll/Employee';
import jwt from 'jsonwebtoken';
import { sendEmail } from '@/lib/email/service';
import { getSurveyTemplate } from '@/lib/email/templates/index';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
    try {
        await dbConnect();

        // Check for admin/supervisor token
        const token = req.cookies.get('authToken')?.value;
        if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

        const decoded = jwt.verify(token, JWT_SECRET);

        let query = {};
        if (decoded.role !== 'admin') {
            // For non-admins, only show published surveys
            query.status = 'Published';
            // Also optional: filter out surveys that have already been responded to by this employee
            // But usually, it's fine to show them and handle "completed" state in UI
        }

        const surveys = await PulseSurvey.find(query).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, surveys });
    } catch (error) {
        console.error('Fetch surveys error:', error);
        return NextResponse.json({ message: 'Server error: ' + error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await dbConnect();

        const token = req.cookies.get('authToken')?.value;
        if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.role !== 'admin') {
            return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
        }

        const body = await req.json();
        const survey = await PulseSurvey.create({
            ...body,
            createdBy: decoded.id
        });

        // Trigger email notification if survey is published
        if (survey.status === 'Published') {
            const dashboardUrl = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL;
            const employees = await Employee.find({ email: { $exists: true } }).select('email');
            const emails = employees.map(emp => emp.email).filter(Boolean);

            if (emails.length > 0) {
                const emailHtml = getSurveyTemplate(survey.title, dashboardUrl);
                // In production, you might want to send this in batches or via a queue
                // For now, we'll send to all recipients in BCC to keep it simple and efficient
                await sendEmail({
                    to: emails, // sendEmail utility handles array
                    subject: `New Pulse Survey: ${survey.title}`,
                    html: emailHtml
                });
            }
        }

        return NextResponse.json({ success: true, survey }, { status: 201 });
    } catch (error) {
        console.error('Create survey error:', error);
        return NextResponse.json({ message: 'Server error: ' + error.message }, { status: 500 });
    }
}
