import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import PulseSurvey from '@/lib/db/models/engagement/PulseSurvey';
import PulseResponse from '@/lib/db/models/engagement/PulseResponse';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
    try {
        await dbConnect();

        // Check for admin token
        const token = req.cookies.get('authToken')?.value;
        if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.role !== 'admin') {
            return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
        }

        // 1. Find all eNPS enabled surveys
        const enpsSurveys = await PulseSurvey.find({ isEnps: true });
        const surveyIds = enpsSurveys.map(s => s._id);

        if (surveyIds.length === 0) {
            return NextResponse.json({ success: true, enps: 0, totalResponses: 0, breakdown: { promoters: 0, detractors: 0, passives: 0 } });
        }

        // 2. Fetch all responses for these surveys
        const responses = await PulseResponse.find({ surveyId: { $in: surveyIds } });

        if (responses.length === 0) {
            return NextResponse.json({ success: true, enps: 0, totalResponses: 0, breakdown: { promoters: 0, detractors: 0, passives: 0 } });
        }

        // 3. Calculate eNPS
        // Standard NPS uses 0-10 scale. 
        // If our survey uses 1-5, we normalize or assume the admin uses a 0-10 question.
        // For this calculation, we'll look at the engagementScore (which is 1-10 normalized in our model's pre-save)

        let promoters = 0; // 9-10
        let detractors = 0; // 0-6
        let passives = 0; // 7-8

        responses.forEach(resp => {
            const score = resp.engagementScore;
            if (score >= 9) promoters++;
            else if (score <= 6) detractors++;
            else passives++;
        });

        const total = responses.length;
        const promoterPct = (promoters / total) * 100;
        const detractorPct = (detractors / total) * 100;
        const enps = Math.round(promoterPct - detractorPct);

        return NextResponse.json({
            success: true,
            enps,
            totalResponses: total,
            breakdown: {
                promoters,
                detractors,
                passives,
                promoterPct: Math.round(promoterPct),
                detractorPct: Math.round(detractorPct),
                passivePct: Math.round((passives / total) * 100)
            }
        });
    } catch (error) {
        console.error('eNPS calculation error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
