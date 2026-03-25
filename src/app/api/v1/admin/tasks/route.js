// File: app/api/tasks/route.js

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import Task from '@/lib/db/models/tasks/Task';
import User from '@/lib/db/models/User';
import mongoose from 'mongoose';
import { logActivity } from '@/lib/logger';
import { getAuthUser, authorize } from '@/lib/auth-util';

export async function GET(request) {
  try {
    const authUser = await getAuthUser();
    authorize(authUser, ["admin", "super_admin", "employee", "supervisor"]);
    
    // Connect to database
    await dbConnect();

    // SaaS PROTECTION: Restrict by organization
    let query = { organizationId: authUser.organizationId };
    
    // Employee-specific filtering
    if (authUser.role === "employee") {
      query.assignedTo = authUser.id; // Only see tasks assigned to them
    }

    // Fetch all tasks from the database matching the org
    const tasks = await Task.find(query)
      .populate('assignedTo', 'name email') // Populate assignedTo with user details (e.g., name, email)
      .populate('assignedBy', 'name email') // Populate assignedBy with user details
      .populate('project', 'name') // Populate project with name (if applicable)
      .populate('dependencies') // Populate dependencies (references to other tasks)
      .lean(); // Convert to plain JavaScript objects for better performance

    console.log('📚 Fetched tasks:', tasks.length);

    console.log(tasks);
    
    return NextResponse.json({ 
      success: true,
      data: tasks,
      count: tasks.length
    }, { status: 200 });

  } catch (error) {
    console.error('❌ Error in tasks API:', error);
    console.error('❌ Error stack:', error.stack);
    
    return NextResponse.json({ 
      success: false,
      error: error.message,
      details: 'Check server logs for more information'
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const authUser = await getAuthUser();
    authorize(authUser, ["admin", "super_admin", "employee", "supervisor"]);
    
    await dbConnect();
    
    const body = await request.json();
    
    // CRITICAL: Remove _id to let MongoDB generate a unique one (fixes E11000 duplicate key)
    const { _id,assignedBy, ...cleanBody } = body;

    // Auto-assign organizationId from the authenticated user
    if (authUser.role === "admin" && authUser.organizationId) {
        cleanBody.organizationId = authUser.organizationId;
    }
    
    // Add timestamps if not present
    const taskData = {
      ...cleanBody,
       assignedBy: assignedBy, 
      assignedByModel: "User",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const newTask = await Task.create(taskData);
    console.log('✅ Task created with new ID:', newTask._id);
    
    // Transform for frontend
    const transformedTask = {
      ...newTask.toObject(),
      _id: newTask._id.toString(),
      dueDate: newTask.dueDate ? new Date(newTask.dueDate).toISOString() : null,
      startDate: newTask.startDate ? new Date(newTask.startDate).toISOString() : null,
      createdAt: newTask.createdAt.toISOString(),
      updatedAt: newTask.updatedAt.toISOString(),
      completedAt: newTask.completedAt ? new Date(newTask.completedAt).toISOString() : null,
      completedAt: newTask.completedAt ? new Date(newTask.completedAt).toISOString() : null,
    };
    
    // Fetch assignedBy user details for logging
    const performer = await User.findById(newTask.assignedBy);

    await logActivity({
      action: "created",
      entity: "Task",
      entityId: newTask._id,
      description: `Created task: ${newTask.title}`,
      performedBy: {
        userId: newTask.assignedBy,
        name: performer?.name || "Admin/User",
        email: performer?.email,
        role: performer?.role
      },
      details: {
        assignedTo: newTask.assignedTo,
        project: newTask.project,
        priority: newTask.priority
      },
      req: request
    });

    return NextResponse.json({ 
      success: true, 
      task: transformedTask 
    });
    
  } catch (error) {
    console.error('💥 Error in task POST API:', error);
    console.error('💥 Error stack:', error.stack);
    
    // Handle duplicate key error specifically
    if (error.code === 11000) {
      return NextResponse.json({ 
        success: false,
        error: 'A task with this ID already exists. Please use a different ID or update the existing task.',
        code: 11000
      }, { status: 409 }); // Conflict
    }
    
    return NextResponse.json({ 
      success: false,
      error: error.message || 'Failed to create task',
      details: 'Check server logs for more information'
    }, { status: 500 });
  }
}