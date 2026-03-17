// src/app/api/v1/forgot-password/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import dbConnect from '@/lib/db/connect';
import User from '@/lib/db/models/User';
import nodemailer from 'nodemailer';

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

export async function POST(request) {
  try {
    await dbConnect();
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });

    // Always return success even if user not found (security: prevents email enumeration)
    if (!user) {
      return NextResponse.json({
        message: 'If an account with that email exists, a reset link has been sent.',
      });
    }

    // Generate a secure random token
    const rawToken = crypto.randomBytes(32).toString('hex');
    // Store a hashed version
    const hashedToken = crypto.createHash('sha256').update(rawToken).digest('hex');

    user.forgotPasswordToken = hashedToken;
    user.forgotPasswordExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    await user.save({ validateBeforeSave: false });

    // Build reset link using the RAW token (not hashed)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const resetLink = `${appUrl}/reset-password?token=${rawToken}`;

    // Send email
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"HR & Payroll System" <${process.env.SMTP_USER}>`,
      to: user.email,
      subject: '🔑 Password Reset Request',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px; }
            .content { background: #f8f9fa; padding: 25px; border-radius: 8px; }
            .btn { display: inline-block; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 20px 0; }
            .warning { background: #fff3cd; border: 1px solid #ffc107; border-radius: 8px; padding: 12px 15px; margin-top: 20px; font-size: 14px; color: #856404; }
            .footer { text-align: center; margin-top: 25px; color: #888; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🔑 Password Reset</h1>
            <p>You requested to reset your password</p>
          </div>
          <div class="content">
            <p>Hi <strong>${user.name}</strong>,</p>
            <p>We received a request to reset the password for your account. Click the button below to set a new password:</p>
            <div style="text-align: center;">
              <a href="${resetLink}" class="btn">Reset My Password</a>
            </div>
            <p>Or copy and paste this link in your browser:</p>
            <p style="word-break: break-all; font-size: 12px; color: #555;">${resetLink}</p>
            <div class="warning">
              ⚠️ This link is valid for <strong>1 hour</strong> only. If you did not request a password reset, please ignore this email — your password will remain unchanged.
            </div>
          </div>
          <div class="footer">
            <p>This is an automated message from the HR & Payroll Management System.</p>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      message: 'If an account with that email exists, a reset link has been sent.',
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ error: 'Failed to send reset email. Please try again later.' }, { status: 500 });
  }
}
