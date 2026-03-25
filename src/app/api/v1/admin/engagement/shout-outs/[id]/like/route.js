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

        const post = await ShoutOut.findById(id);
        if (!post) return NextResponse.json({ message: 'Post not found' }, { status: 404 });

        const likedIndex = post.likes.indexOf(decoded.id);
        if (likedIndex > -1) {
            // Unlike
            post.likes.splice(likedIndex, 1);
        } else {
            // Like
            post.likes.push(decoded.id);
        }

        await post.save();
        return NextResponse.json({ success: true, likesCount: post.likes.length });
    } catch (error) {
        console.error('Like error:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
