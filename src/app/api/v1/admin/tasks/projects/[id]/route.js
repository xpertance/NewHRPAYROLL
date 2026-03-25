import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Project from '@/lib/db/models/tasks/Project';
import { logActivity } from '@/lib/logger';

export async function GET(request, { params }) {
    try {
        await dbConnect();
        const project = await Project.findById(params.id)
            .populate('projectManager', 'personalDetails.firstName personalDetails.lastName')
            .populate('members', 'personalDetails.firstName personalDetails.lastName');

        if (!project) return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });

        // Fetch related tasks for statistics
        const [Task, TimesheetEntry] = await Promise.all([
            import('@/lib/db/models/tasks/Task').then(m => m.default),
            import('@/lib/db/models/tasks/TimesheetEntry').then(m => m.default)
        ]);

        const tasks = await Task.find({ project: params.id });
        
        const stats = {
            totalTasks: tasks.length,
            completedTasks: tasks.filter(t => t.status === 'Completed').length,
            pendingTasks: tasks.filter(t => t.status === 'Pending').length,
            inProgressTasks: tasks.filter(t => t.status === 'In Progress').length,
            totalEstimatedHours: tasks.reduce((acc, t) => acc + (t.estimatedHours || 0), 0),
            overallProgress: tasks.length > 0 
                ? Math.round(tasks.reduce((acc, t) => acc + (t.progress || 0), 0) / tasks.length) 
                : 0
        };

        // Fetch total logged hours from timesheets and aggregate per member
        const timeEntries = await TimesheetEntry.find({ project: params.id }).populate('employee', 'personalDetails.firstName personalDetails.lastName');
        
        stats.totalLoggedHours = timeEntries.reduce((acc, e) => acc + (e.hours || 0), 0);
        
        const memberStats = {};
        timeEntries.forEach(entry => {
            const memberId = entry.employee?._id?.toString();
            if (!memberId) return;
            if (!memberStats[memberId]) {
                memberStats[memberId] = {
                    name: `${entry.employee.personalDetails.firstName} ${entry.employee.personalDetails.lastName}`,
                    hours: 0
                };
            }
            memberStats[memberId].hours += (entry.hours || 0);
        });
        stats.memberAggregation = Object.values(memberStats);

        return NextResponse.json({ success: true, project, stats });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        await dbConnect();
        const body = await request.json();

        const project = await Project.findByIdAndUpdate(params.id, body, { new: true });

        if (!project) return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });

        await logActivity({
            action: "updated",
            entity: "Project",
            entityId: project._id,
            description: `Updated project: ${project.name}`,
            details: body,
            req: request
        });

        return NextResponse.json({ success: true, project });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        await dbConnect();
        const project = await Project.findByIdAndDelete(params.id);

        if (!project) return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });

        await logActivity({
            action: "deleted",
            entity: "Project",
            entityId: project._id,
            description: `Deleted project: ${project.name}`,
            req: request
        });

        return NextResponse.json({ success: true, message: 'Project deleted' });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
