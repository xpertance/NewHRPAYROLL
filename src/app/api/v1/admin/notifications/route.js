import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connect";
import Notification from "@/lib/db/models/notifications/NotificationConfig";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

async function getUserFromRequest(req) {
    const token = req.cookies.get("authToken")?.value || req.cookies.get("employee_token")?.value;
    if (!token) return null;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}

// GET - Fetch user notifications
export async function GET(req) {
    await dbConnect();
    const user = await getUserFromRequest(req);

    if (!user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        let query = {};

        if (user.role === 'admin') {
            // Admin sees all? Or just theirs? 
            // Usually admin dashboard shows system alerts. 
            // For now, let's keep admin seeing *all* notifications if that was the intent,
            // OR allow admin to see notifications targeted at them if we had admin-specific ones.
            // The previous code fetched ALL. Let's keep that behavior for Admin for now, 
            // or maybe filtered by 'system' or specific admin ID if we had one.
            // Assuming 'All' for admin to monitor system health.
            query = {};
        } else {
            // Employee sees only theirs
            query = { employee: user.id };
        }

        const notifications = await Notification.find(query)
            .populate('organization', 'name')
            // .populate('employee', 'personalDetails') // Optional: populate employee info if needed
            .sort({ createdAt: -1 })
            .limit(50);

        const formattedNotifications = notifications.map(notification => ({
            _id: notification._id,
            type: notification.type,
            title: notification.title,
            message: notification.message,
            priority: notification.priority,
            read: notification.read,
            createdAt: notification.createdAt,
            organization: notification.organization?.name || null,
            details: notification.details
        }));

        return NextResponse.json({
            success: true,
            notifications: formattedNotifications
        });

    } catch (error) {
        console.error("Error fetching notifications:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

// PUT - Mark as read
export async function PUT(req) {
    await dbConnect();
    const user = await getUserFromRequest(req);
    if (!user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const { notificationId } = await req.json();

        // Ensure user owns the notification or is admin
        const notification = await Notification.findById(notificationId);
        if (!notification) {
            return NextResponse.json({ message: "Notification not found" }, { status: 404 });
        }

        if (user.role !== 'admin' && notification.employee?.toString() !== user.id) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
        }

        notification.read = true;
        await notification.save();

        return NextResponse.json({
            success: true,
            message: 'Notification marked as read'
        });

    } catch (error) {
        console.error("Error updating notification:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
