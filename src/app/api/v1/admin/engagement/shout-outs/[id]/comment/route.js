import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import ShoutOut from '@/lib/db/models/engagement/ShoutOut';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req, { params }) {
    try {
        await dbConnect();
        const { id } = params;

        const token = req.cookies.get('authToken')?.value;
        if (!token) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

        const decoded = jwt.verify(token, JWT_SECRET);
        const { text } = await req.json();

        const post = await ShoutOut.findById(id);
        if (!post) return NextResponse.json({ message: 'Post not found' }, { status: 404 });

        post.comments.push({
            author: decoded.id,
            text: text
        });

        await post.save();
        return NextResponse.json({ success: true, post });
    } catch (error) {
        console.error('Comment error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
