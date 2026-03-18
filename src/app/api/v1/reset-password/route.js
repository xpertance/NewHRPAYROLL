// src/app/api/v1/reset-password/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db/connect';
import User from '@/lib/db/models/User';

export async function POST(request) {
  try {
    await dbConnect();
    const { token, newPassword } = await request.json();

    if (!token || !newPassword) {
      return NextResponse.json({ error: 'Token and new password are required' }, { status: 400 });
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters long' }, { status: 400 });
    }

    // Hash the incoming raw token to compare with stored hashed token
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    // Find user with matching token that hasn't expired
    const user = await User.findOne({
      forgotPasswordToken: hashedToken,
      forgotPasswordExpires: { $gt: new Date() }, // token must not be expired
    });

    if (!user) {
      return NextResponse.json({
        error: 'Password reset link is invalid or has expired. Please request a new one.',
      }, { status: 400 });
    }

    // Hash the new password and save
    user.password = await bcrypt.hash(newPassword, 12);
    user.forgotPasswordToken = null;
    user.forgotPasswordExpires = null;
    // invalidate any existing sessions
    user.sessionToken = null;
    await user.save({ validateBeforeSave: false });

    return NextResponse.json({ message: 'Password reset successfully. You can now log in.' });
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json({ error: 'An error occurred. Please try again.' }, { status: 500 });
  }
}
