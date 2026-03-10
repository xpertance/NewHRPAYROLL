import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import ShoutOut from '@/lib/db/models/engagement/ShoutOut';
import Employee from '@/lib/db/models/payroll/Employee';
import jwt from 'jsonwebtoken';
import { sendEmail } from '@/lib/email/service';
import { getShoutOutTemplate } from '@/lib/email/templates/index';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
    try {
        await dbConnect();

        const token = req.cookies.get('authToken')?.value;
        if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

        const decoded = jwt.verify(token, JWT_SECRET);

        // Fetch posts, populate author and shoutoutTo details
        const posts = await ShoutOut.find({})
            .sort({ createdAt: -1 })
            .populate('author', 'personalDetails.firstName personalDetails.lastName')
            .populate('shoutoutTo', 'personalDetails.firstName personalDetails.lastName')
            .populate('comments.author', 'personalDetails.firstName personalDetails.lastName');

        return NextResponse.json({ success: true, posts });
    } catch (error) {
        console.error('Fetch shoutouts error:', error);
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

        const post = await ShoutOut.create({
            ...body,
            author: decoded.id,
            announcementByAdmin: decoded.role === 'admin' && body.type === 'announcement'
        });

        // Trigger email notification for Shout-Outs
        if (post.type === 'shoutout' && post.shoutoutTo) {
            const dashboardUrl = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL;
            const [recipient, author] = await Promise.all([
                Employee.findById(post.shoutoutTo).select('email personalDetails.firstName'),
                Employee.findById(decoded.id).select('personalDetails.firstName personalDetails.lastName')
            ]);

            if (recipient?.email) {
                const authorName = `${author.personalDetails.firstName} ${author.personalDetails.lastName}`;
                const emailHtml = getShoutOutTemplate(authorName, post.content, dashboardUrl);

                await sendEmail({
                    to: recipient.email,
                    subject: `You received a Shout-Out from ${authorName}!`,
                    html: emailHtml
                });
            }
        }

        return NextResponse.json({ success: true, post }, { status: 201 });
    } catch (error) {
        console.error('Create shoutout error:', error);
        return NextResponse.json({ message: 'Server error: ' + error.message }, { status: 500 });
    }
}
