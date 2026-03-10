import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import User from '@/lib/db/models/User';
import Employee from '@/lib/db/models/payroll/Employee';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { logActivity } from '@/lib/logger';
import EmployeeType from '@/lib/db/models/crm/employee/EmployeeType';
const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_MAX_AGE = 2 * 60 * 60; // seconds (2 hours)

function checkDobMatch(rawDob, inputPassword) {
  if (!rawDob || !inputPassword) return false;
  const dobDate = new Date(rawDob);
  if (isNaN(dobDate.getTime())) return false;

  const dobStringUTC = dobDate.toISOString().split('T')[0];
  const y = dobDate.getFullYear();
  const m = String(dobDate.getMonth() + 1).padStart(2, '0');
  const d = String(dobDate.getDate()).padStart(2, '0');
  const dobStringLocal = `${y}-${m}-${d}`;

  const checkVariations = (dateStr) => {
    const [yy, mm, dd] = dateStr.split('-');
    return [
      dateStr,
      `${dd}-${mm}-${yy}`,
      `${dd}/${mm}/${yy}`
    ];
  };

  const allValidVariations = [
    ...checkVariations(dobStringUTC),
    ...checkVariations(dobStringLocal)
  ];

  return allValidVariations.includes(inputPassword.trim());
}

export async function POST(req) {
  try {
    const startTime = Date.now();
    console.log(`--- Login API Hit [${new Date().toISOString()}] ---`);

    if (!JWT_SECRET) {
      console.error('JWT_SECRET is not set');
      return NextResponse.json({ message: 'Server configuration error: JWT_SECRET missing' }, { status: 500 });
    }

    try {
      await dbConnect();
    } catch (dbError) {
      console.error('Database connection failed during login:', dbError);
      return NextResponse.json({ message: 'Database connection failed. Please try again later.' }, { status: 503 });
    }

    let body;
    try {
      body = await req.json();
    } catch (e) {
      console.error('Failed to parse request body:', e);
      return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
    }

    const username = (body.username || '').toString().trim();
    const password = (body.password || '').toString().trim();
    const role = (body.role || '').toString().trim().toLowerCase();

    console.log('Login attempt details:', { username, role, time: new Date().toISOString() });

    if (!username || !password || !role) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // --- ADMIN LOGIN ---
    if (role === 'admin') {
      const emailOrUsername = username.toLowerCase();

      // Check both email and employeeId (username) for admin
      const user = await User.findOne({
        $or: [
          { email: { $regex: new RegExp("^" + username + "$", "i") } },
          { employeeId: { $regex: new RegExp("^" + username + "$", "i") } }
        ]
      });

      if (!user) {
        console.log('Admin user not found:', emailOrUsername);
        return NextResponse.json({ message: 'User not registerd' }, { status: 401 });
      }

      console.log('Admin user found:', user.email);

      const isAdminUser = (user.role && user.role.toLowerCase() === 'admin') ||
        (user.department && user.department.toLowerCase() === 'admin');

      if (!isAdminUser) {
        console.log('User found but not admin:', emailOrUsername, 'Role:', user.role);
        return NextResponse.json({ message: 'Unauthorized as admin' }, { status: 403 });
      }

      if (!user.password) {
        console.error('Admin user has no password set:', emailOrUsername);
        return NextResponse.json({ message: 'Account has no password set' }, { status: 500 });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Admin password mismatch for:', emailOrUsername);
        return NextResponse.json({ message: 'Password does not match' }, { status: 401 });
      }
      console.log('Admin password matched');

      const token = jwt.sign(
        { id: user._id.toString(), role: 'admin', department: 'admin' },
        JWT_SECRET,
        { expiresIn: TOKEN_MAX_AGE }
      );

      await User.updateOne(
        { _id: user._id },
        { $set: { sessionToken: token } }
      );

      const res = NextResponse.json({
        user: {
          id: user._id.toString(),
          email: user.email,
          role: 'admin',
          department: 'admin'
        }
      });

      res.cookies.set('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: TOKEN_MAX_AGE
      });

      console.log('Admin login success:', user.email);

      await logActivity({
        action: "login",
        entity: "User",
        entityId: user._id,
        description: `Admin logged in: ${user.email}`,
        performedBy: {
          userId: user._id,
          name: user.name || "Admin",
          email: user.email,
          role: 'admin'
        },
        req: req
      });

      return res;
    }

    // --- SUPERVISOR LOGIN (using Email + DOB) ---
    if (role === 'supervisor') {
      // Normalize email to lowercase
      const email = username.toLowerCase();

      // First, check if user exists with supervisor role
      const user = await User.findOne({
        email: { $regex: new RegExp("^" + username + "$", "i") },
        $or: [
          { role: 'supervisor' },
          { role: 'manager' },
          { role: 'lead' },
          { role: 'super_admin' },
          { isSupervisor: true }
        ]
      });

      console.log('Supervisor lookup result:', user ? 'Found' : 'Not found');

      if (!user) {
        // If no user found, check Employee collection for supervisors
        const employee = await Employee.findOne({
          'personalDetails.email': { $regex: new RegExp("^" + username + "$", "i") },
          $or: [
            { 'jobDetails.designation': { $regex: /supervisor|manager|lead|head/i } },
            { 'jobDetails.isSupervisor': true }
          ]
        });

        console.log('Employee supervisor lookup result:', employee ? 'Found' : 'Not found');

        if (!employee) {
          return NextResponse.json({ message: 'Invalid email or Date of Birth' }, { status: 401 });
        }

        // Verify DOB for employee supervisor
        const rawDob = employee.personalDetails?.dateOfBirth;
        if (!rawDob) {
          return NextResponse.json({ message: 'Date of Birth not available' }, { status: 500 });
        }

        // Compare DOB
        if (!checkDobMatch(rawDob, password)) {
          return NextResponse.json({ message: 'Invalid email or Date of Birth' }, { status: 401 });
        }

        // Create token for employee supervisor
        const token = jwt.sign(
          {
            id: employee._id.toString(),
            role: 'supervisor',
            designation: employee.jobDetails.designation,
            department: employee.jobDetails.department,
            isEmployeeSupervisor: true
          },
          JWT_SECRET,
          { expiresIn: TOKEN_MAX_AGE }
        );

        // Update employee with sessionToken
        await Employee.updateOne(
          { _id: employee._id },
          { $set: { sessionToken: token } }
        );

        const res = NextResponse.json({
          user: {
            id: employee._id.toString(),
            email: employee.personalDetails.email,
            role: 'supervisor',
            designation: employee.jobDetails.designation,
            department: employee.jobDetails.department,
            isEmployeeSupervisor: true,
            personalDetails: {
              firstName: employee.personalDetails.firstName,
              lastName: employee.personalDetails.lastName
            }
          }
        });

        res.cookies.set('authToken', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/',
          maxAge: TOKEN_MAX_AGE
        });

        console.log('Employee supervisor login success:', email);

        await logActivity({
          action: "login",
          entity: "Employee",
          entityId: employee._id,
          description: `Supervisor (Employee) logged in: ${email}`,
          performedBy: {
            userId: employee._id,
            name: `${employee.personalDetails.firstName} ${employee.personalDetails.lastName}`,
            email: employee.personalDetails.email,
            role: 'supervisor'
          },
          req: req
        });

        return res;
      }

      // Handle existing User collection supervisor
      // For User collection, check password (assuming User has password field)
      if (!user.password) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
      }

      const token = jwt.sign(
        {
          id: user._id.toString(),
          role: 'supervisor',
          department: user.department || 'management',
          designation: user.designation || 'Supervisor'
        },
        JWT_SECRET,
        { expiresIn: TOKEN_MAX_AGE }
      );

      await User.updateOne(
        { _id: user._id },
        { $set: { sessionToken: token } }
      );

      const res = NextResponse.json({
        user: {
          id: user._id.toString(),
          email: user.email,
          role: 'supervisor',
          department: user.department || 'management',
          designation: user.designation || 'Supervisor'
        }
      });

      res.cookies.set('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: TOKEN_MAX_AGE
      });

      console.log('User supervisor login success:', email);
      return res;
    }

    // --- EMPLOYEE LOGIN (using Employee ID + Password/DOB) ---
    if (role === 'employee') {
      console.log('Employee lookup for ID/Email:', username);
      const employee = await Employee.findOne({
        $or: [
          { employeeId: { $regex: new RegExp("^" + username + "$", "i") } },
          { 'personalDetails.email': { $regex: new RegExp("^" + username + "$", "i") } }
        ]
      }).select('+password');

      if (!employee) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }

      let isMatch = false;

      // 1. Try password match (if password exists)
      if (employee.password) {
        isMatch = await bcrypt.compare(password, employee.password);
        if (isMatch) console.log('Employee matched via hashed password');
      }

      // 2. Try DOB match only if password didn't match
      if (!isMatch) {
        const rawDob = employee.personalDetails?.dateOfBirth;
        if (rawDob && checkDobMatch(rawDob, password)) {
          isMatch = true;
          console.log('Employee matched via DOB');
        }
      }

      if (!isMatch) {
        console.log('Employee credentials invalid (tried password and DOB)');
        return NextResponse.json({ message: 'Credentials do not match' }, { status: 401 });
      }

      // Check if employee is a supervisor (shouldn't login as regular employee)
      if (employee.jobDetails.designation?.match(/supervisor|manager|lead|head/i)) {
        return NextResponse.json({
          message: 'Supervisors should use Supervisor login with email'
        }, { status: 403 });
      }

      // Create token with role as "employee"
      const token = jwt.sign(
        {
          id: employee._id.toString(),
          role: 'employee',
          designation: employee.jobDetails.designation,
          department: employee.jobDetails.department
        },
        JWT_SECRET,
        { expiresIn: TOKEN_MAX_AGE }
      );

      // Update employee with sessionToken
      await Employee.updateOne(
        { _id: employee._id },
        { $set: { sessionToken: token } }
      );

      const res = NextResponse.json({
        user: {
          id: employee._id.toString(),
          email: employee.personalDetails.email,
          role: 'employee',
          designation: employee.jobDetails.designation,
          department: employee.jobDetails.department,
          personalDetails: {
            firstName: employee.personalDetails.firstName,
            lastName: employee.personalDetails.lastName
          }
        }
      });

      res.cookies.set('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: TOKEN_MAX_AGE
      });

      console.log('Employee login success:', username);

      await logActivity({
        action: "login",
        entity: "Employee",
        entityId: employee._id,
        description: `Employee logged in: ${username}`,
        performedBy: {
          userId: employee._id,
          name: `${employee.personalDetails.firstName} ${employee.personalDetails.lastName}`,
          email: employee.personalDetails.email,
          role: 'employee'
        },
        req: req
      });

      return res;
    }

    // --- ATTENDANCE-ONLY LOGIN (using Employee ID + Password) ---
    if (role === 'attendance_only') {
      // Find employee by employeeId with attendance_only role
      const employee = await Employee.findOne({
        employeeId: { $regex: new RegExp("^" + username + "$", "i") },
        role: 'attendance_only'
      }).select('+password');

      console.log('Attendance-only user lookup:', employee ? 'Found' : 'Not found');

      if (!employee) {
        return NextResponse.json({ message: 'Invalid Employee ID or Password' }, { status: 401 });
      }

      // Check if password is set
      if (!employee.password) {
        return NextResponse.json({ message: 'Password not set. Contact admin.' }, { status: 401 });
      }

      // Compare password
      const isPasswordValid = await bcrypt.compare(password, employee.password);
      if (!isPasswordValid) {
        return NextResponse.json({ message: 'Invalid Employee ID or Password' }, { status: 401 });
      }

      // Create token with attendance_only role
      const token = jwt.sign(
        {
          id: employee._id.toString(),
          role: 'attendance_only',
          department: employee.jobDetails?.department || 'N/A'
        },
        JWT_SECRET,
        { expiresIn: TOKEN_MAX_AGE }
      );

      // Update with sessionToken
      await Employee.updateOne(
        { _id: employee._id },
        { $set: { sessionToken: token } }
      );

      const res = NextResponse.json({
        user: {
          id: employee._id.toString(),
          employeeId: employee.employeeId,
          role: 'attendance_only',
          permissions: ['attendance']
        }
      });

      res.cookies.set('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: TOKEN_MAX_AGE
      });

      console.log('Attendance-only login success:', username);

      await logActivity({
        action: "login",
        entity: "Employee",
        entityId: employee._id,
        description: `Attendance-only user logged in: ${username}`,
        performedBy: {
          userId: employee._id,
          name: employee.employeeId,
          email: '',
          role: 'attendance_only'
        },
        req: req
      });

      return res;
    }

    return NextResponse.json({ message: 'Invalid role' }, { status: 400 });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ message: 'Server error: ' + err.message }, { status: 500 });
  }
}