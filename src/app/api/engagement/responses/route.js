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
        const { searchParams } = new URL(req.url);
        const surveyId = searchParams.get('surveyId');

        if (decoded.role === 'admin') {
            const query = surveyId ? { surveyId } : {};
            const responses = await PulseResponse.find(query).populate('employeeId', 'personalDetails.firstName personalDetails.lastName');
            return NextResponse.json({ success: true, responses });
        } else {
            // Employee: Fetch only their responses
            const query = { employeeId: decoded.id };
            if (surveyId) query.surveyId = surveyId;
            const responses = await PulseResponse.find(query);
            return NextResponse.json({ success: true, responses });
        }
    } catch (error) {
        console.error('Fetch responses error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await dbConnect();

        const token = req.cookies.get('authToken')?.value;
        if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

        const decoded = jwt.verify(token, JWT_SECRET);
        const body = await req.json();

        // Prevent duplicate responses for the same survey
        const existing = await PulseResponse.findOne({
            surveyId: body.surveyId,
            employeeId: decoded.id
        });

        if (existing) {
            return NextResponse.json({ message: 'You have already submitted a response for this survey' }, { status: 400 });
        }

        const response = await PulseResponse.create({
            ...body,
            employeeId: decoded.id
        });

        return NextResponse.json({ success: true, response }, { status: 201 });
    } catch (error) {
        console.error('Submit response error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
