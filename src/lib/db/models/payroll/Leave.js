// src/lib/db/models/payroll/Leave.js
import mongoose from "mongoose";

// Individual leave entry schema
const leaveEntrySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  leaveType: {
    type: String,
    enum: ["Paid", "Unpaid", "Half-Day Paid", "Half-Day Unpaid"],
    required: true,
  },
  reason: {
    type: String,
    default: "",
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  approvedAt: {
    type: Date,
    default: Date.now,
  },
});

// Monthly leave summary schema
const leaveSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    employeeCode: {
      type: String,
      required: true,
    },
    employeeName: {
      type: String,
      required: true,
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: false,
      default: null,
    },
    organizationType: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    
    // Month and Year tracking
    month: {
      type: Number,
      required: true,
      min: 1,
      max: 12,
    },
    year: {
      type: Number,
      required: true,
    },
    
    // Leave entries for the month
    leaves: [leaveEntrySchema],
    
    // Monthly summary (auto-calculated)
    summary: {
      totalDays: {
        type: Number,
        default: 0,
      },
      paidLeaves: {
        type: Number,
        default: 0,
      },
      unpaidLeaves: {
        type: Number,
        default: 0,
      },
      halfDayPaidLeaves: {
        type: Number,
        default: 0,
      },
      halfDayUnpaidLeaves: {
        type: Number,
        default: 0,
      },
    },
    
    // Annual leave balance - ANNUAL QUOTA SYSTEM (e.g., 31 days for whole year)
    annualLeaveBalance: {
      totalEntitled: {
        type: Number,
        default: 0, // No longer hardcoded to 31
      },
      used: {
        type: Number,
        default: 0, // Total unpaid leaves used from Jan 1st to end of this month
      },
      remaining: {
        type: Number,
        default: 31, // Remaining annual quota at END of this month
      },
      balanceAtMonthStart: {
        type: Number,
        default: 31, // Remaining annual quota at START of this month (before this month's leaves)
      },
      thisMonthUnpaid: {
        type: Number,
        default: 0, // Unpaid leaves taken in this specific month only
      },
    },
    
    status: {
      type: String,
      enum: ["Draft", "Approved", "Rejected"],
      default: "Draft",
    },
    
    notes: {
      type: String,
      default: "",
    },
    
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for unique month-year per employee
leaveSchema.index({ employeeId: 1, month: 1, year: 1 }, { unique: true });
leaveSchema.index({ organizationId: 1 });
leaveSchema.index({ organizationType: 1 });
leaveSchema.index({ month: 1, year: 1 });
leaveSchema.index({ employeeCode: 1 });
leaveSchema.index({ status: 1 });

// Method to calculate monthly summary
leaveSchema.methods.calculateSummary = function () {
  let totalDays = 0;
  let paidLeaves = 0;
  let unpaidLeaves = 0;
  let halfDayPaidLeaves = 0;
  let halfDayUnpaidLeaves = 0;

  this.leaves.forEach((leave) => {
    const type = (leave.leaveType || "").toLowerCase();
    
    if (type.includes("unpaid")) {
      if (type.includes("half")) {
        halfDayUnpaidLeaves += 1;
        totalDays += 0.5;
      } else {
        unpaidLeaves += 1;
        totalDays += 1;
      }
    } else {
      // Treat everything else (Paid, Sick, Casual, etc.) as Paid
      if (type.includes("half")) {
        halfDayPaidLeaves += 1;
        totalDays += 0.5;
      } else {
        paidLeaves += 1;
        totalDays += 1;
      }
    }
  });

  this.summary = {
    totalDays,
    paidLeaves,
    unpaidLeaves,
    halfDayPaidLeaves,
    halfDayUnpaidLeaves,
  };

  // Calculate this month's unpaid leaves
  const thisMonthUnpaid = unpaidLeaves + (halfDayUnpaidLeaves * 0.5);
  this.annualLeaveBalance.thisMonthUnpaid = thisMonthUnpaid;

  return this.summary;
};

// Method to update annual leave balance
// This recalculates balance for ALL records of this employee in this year
leaveSchema.methods.updateAnnualBalance = async function () {
  try {
    // Get employee's total entitled leaves
    const Employee = mongoose.model("Employee");
    const PayrollConfig = mongoose.model("PayrollConfig");
    
    const employee = await Employee.findById(this.employeeId);
    
    // Resolve quota: 
    // 1. Employee Specific Override
    // 2. Organization Policy (PayrollConfig)
    // 3. Legacy/Branch fallback
    let totalEntitled = employee?.totalLeaveEntitled;
    
    if (!totalEntitled) {
      const config = await PayrollConfig.findOne({ company: this.organizationId });
      totalEntitled = config?.annualPaidLeaveQuota || 
                      employee?.annualLeaveBalance || 
                      employee?.payslipStructure?.totalLeaveEntitled || 
                      0;
    }
    
    // Get all leave records for this employee in this year, sorted by month
    const LeaveModel = mongoose.model("Leave");
    const allYearLeaves = await LeaveModel.find({
      employeeId: this.employeeId,
      year: this.year,
    }).sort({ month: 1 }); // Sort by month ascending
    
    console.log(`📊 Recalculating balances for employee ${this.employeeCode} in ${this.year}`);
    console.log(`   Total entitled: ${totalEntitled}`);
    console.log(`   Found ${allYearLeaves.length} month records`);
    
    // Process each month in order
    let cumulativeUsed = 0;
    
    for (const monthRecord of allYearLeaves) {
      // Calculate total leaves used this month (sum of all types)
      const thisMonthUsed = (monthRecord.summary.unpaidLeaves || 0) + 
                           (monthRecord.summary.paidLeaves || 0) +
                           ((monthRecord.summary.halfDayUnpaidLeaves || 0) * 0.5) +
                           ((monthRecord.summary.halfDayPaidLeaves || 0) * 0.5);
      
      // Balance at START of this month (before this month's leaves)
      const balanceAtMonthStart = totalEntitled - cumulativeUsed;
      
      // Add this month's used to cumulative
      cumulativeUsed += thisMonthUsed;
      
      // Balance at END of this month (after this month's leaves)
      const balanceAtMonthEnd = totalEntitled - cumulativeUsed;
      
      // Update this month's record
      monthRecord.annualLeaveBalance = {
        totalEntitled: totalEntitled,
        used: cumulativeUsed, // Total used till end of this month
        remaining: balanceAtMonthEnd, // Balance at END of this month
        balanceAtMonthStart: balanceAtMonthStart,
        thisMonthUnpaid: (monthRecord.summary.unpaidLeaves || 0) + 
                        ((monthRecord.summary.halfDayUnpaidLeaves || 0) * 0.5)
      };
      
      await monthRecord.save();
      
      console.log(`   Month ${monthRecord.month}: Start=${balanceAtMonthStart}, Used=${thisMonthUsed}, End=${balanceAtMonthEnd}`);
    }
    
    console.log(`   ✅ Updated ${allYearLeaves.length} month records`);
    console.log(`   Final cumulative used: ${cumulativeUsed}, Remaining: ${totalEntitled - cumulativeUsed}`);

    return this.annualLeaveBalance;
  } catch (error) {
    console.error("❌ Error updating annual balance:", error);
    throw error;
  }
};

// Pre-save middleware to calculate summary
leaveSchema.pre("save", function (next) {
  this.calculateSummary();
  next();
});

// Delete existing model to avoid conflicts
delete mongoose.models.Leave;

export default mongoose.models.Leave || mongoose.model("Leave", leaveSchema);