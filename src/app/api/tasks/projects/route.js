import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Project from '@/lib/db/models/tasks/Project';
import { logActivity } from '@/lib/logger';

export async function GET(request) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const memberId = searchParams.get('memberId');

        let query = {};
        if (status) query.status = status;
        if (memberId) query.members = memberId;

        const projects = await Project.find(query)
            .populate('projectManager', 'personalDetails.firstName personalDetails.lastName')
            .populate('members', 'personalDetails.firstName personalDetails.lastName')
            .sort({ createdAt: -1 });

        return NextResponse.json({ success: true, projects });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();

        const project = await Project.create(body);

        await logActivity({
            action: "created",
            entity: "Project",
            entityId: project._id,
            description: `Created project: ${project.name}`,
            details: project,
            req: request
        });

        return NextResponse.json({ success: true, project }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
