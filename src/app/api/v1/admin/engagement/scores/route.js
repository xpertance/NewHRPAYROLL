import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import PulseResponse from '@/lib/db/models/engagement/PulseResponse';
import PulseSurvey from '@/lib/db/models/engagement/PulseSurvey';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
    try {
        await dbConnect();

        const token = req.cookies.get('authToken')?.value;
        if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.role !== 'admin') {
            return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
        }

        // Aggregate engagement scores
        const stats = await PulseResponse.aggregate([
            {
                $group: {
                    _id: "$surveyId",
                    averageScore: { $avg: "$engagementScore" },
                    totalResponses: { $sum: 1 }
                }
            },
            {
                $lookup: {
                    from: "pulsesurveys",
                    localField: "_id",
                    foreignField: "_id",
                    as: "survey"
                }
            },
            { $unwind: "$survey" }
        ]);

        return NextResponse.json({ success: true, stats });
    } catch (error) {
        console.error('Engagement stats error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
