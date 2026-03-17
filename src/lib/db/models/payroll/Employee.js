import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import StatutoryConfig from "./StatutoryConfig";
import { StatutoryCalculator } from "@/lib/utils/statutoryCalculations";

const DEFAULT_USER_ID = "674e92d8ce08af0109923297"; // Default admin ID for system actions.

// Salary Structure Schemas (from Template)
const earningComponentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  calculationType: {
    type: String,
    enum: ['percentage', 'fixed'],
    default: 'percentage',
  },
  percentage: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  fixedAmount: {
    type: Number,
    default: 0,
    min: 0,
  },
}, { _id: false });

const deductionComponentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  calculationType: {
    type: String,
    enum: ['percentage', 'fixed'],
    default: 'percentage',
  },
  percentage: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  fixedAmount: {
    type: Number,
    default: 0,
    min: 0,
  },
}, { _id: false });

const payslipFieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
}, { _id: false });

// Employee's Personal Payslip Structure
const employeePayslipStructureSchema = new mongoose.Schema({
  salaryType: {
    type: String,
    enum: ['monthly', 'perday'],
    default: 'monthly',
  },
  basicSalary: {
    type: Number,
    required: true,
    min: 0,
  },
  earnings: [earningComponentSchema],
  deductions: [deductionComponentSchema],
  additionalFields: [payslipFieldSchema],
  // Computed fields
  totalEarnings: {
    type: Number,
    default: 0,
  },
  totalDeductions: {
    type: Number,
    default: 0,
  },
  netSalary: {
    type: Number,
    default: 0,
  },
  perDaySalary: {
    type: Number,
    default: 0,
  },
  grossSalary: {
    type: Number,
    default: 0,
  },
}, { _id: false });

const bankAccountSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  ifscCode: {
    type: String,
    required: true,
  },
  branch: String,
  branchAddress: String, // NEW FIELD
});

const documentSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  size: Number,
  category: String,
  categoryName: String,
  uploadDate: Date,
  url: String,
  cloudinaryId: String,
  cloudinaryUrl: String,
  thumbnail: String,
});

const attendanceApprovalSchema = new mongoose.Schema({
  required: {
    type: String,
    enum: ["yes", "no"],
    default: "no",
  },
  shift1Supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    default: null,
    required: false,
  },
  shift2Supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    default: null,
    required: false,
  },
});

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
      unique: true,
    },
    // NEW FIELD: Password for login
    password: {
      type: String,
      select: false, // Do not return by default
    },
    // NEW FIELD: Role (Resticted Access)
    role: {
      type: String,
      enum: ["employee", "attendance_only", "admin"],
      default: "employee"
    },
    // NEW FIELD: Compliance Status
    isCompliant: {
      type: Boolean,
      default: false
    },
    // NEW FIELD: TDS Applicable
    isTDSApplicable: {
      type: Boolean,
      default: false
    },
    personalDetails: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        required: true,
      },
      // NEW FIELD: Blood Group
      bloodGroup: String,
      // NEW FIELDS: Addresses
      address: { // Keeping for backward compatibility or as Current Address
        street: String,
        city: String,
        state: String,
        zipCode: String,
      },
      temporaryAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
      },
      permanentAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
      },
      dateOfJoining: {
        type: Date,
        required: true,
      },
      dateOfBirth: Date,
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
      },
      emergencyContact: {
        name: String,
        relationship: String,
        phone: String,
        address: String, // NEW FIELD
      },
    },
    jobDetails: {
      department: {
        type: String,
        required: true,
      },
      departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: false,
        default: null,
      },
      employeeType: String,
      employeeTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeType",
        required: false,
        default: null,
      },
      category: String,
      categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeCategory",
        required: false,
        default: null,
      },
      organization: String,
      organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: false,
        default: null,
      },
      businessUnitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BusinessUnit",
        required: false,
        default: null,
      },
      teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: false,
        default: null,
      },
      costCenterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CostCenter",
        required: false,
        default: null,
      },
      designation: { // Employee Designation
        type: String,
        required: true,
      },
      reportingManager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        default: null,
        required: false,
      },
      // NEW FIELDS: Team Lead and Supervisor
      teamLead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        default: null,
      },
      workLocation: String,
      assignedOfficeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OfficeLocation",
        default: null
      },
      biometricDeviceId: {
        type: String,
        trim: true,
        default: null
      },
      defaultShift: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WorkingShift",
        default: null,
      },
      attendanceSettings: {
        allowedModes: {
          type: [String],
          enum: ["Web", "Mobile", "Biometric"],
          default: ["Web", "Mobile"]
        },
        requireGeofencing: {
          type: Boolean,
          default: true
        },
        requireIPWhitelisting: {
          type: Boolean,
          default: false
        }
      },
      workState: { // For PT and Statutory Compliance
        type: String,
        default: 'Maharashtra' // Fallback
      },
    },
    salaryDetails: {
      bankAccount: {
        accountNumber: { type: String, required: true },
        bankName: { type: String, required: true },
        ifscCode: { type: String, required: true },
        branch: String,
        branchAddress: String, // New Field
      },
      panNumber: String,
      aadharNumber: String,
    },

    // Employee's Personal Payslip Structure
    payslipStructure: {
      type: employeePayslipStructureSchema,
      required: true,
    },

    // NEW FIELD: Variable Pay Structure (Target Amounts)
    variablePayStructure: [{
      componentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VariablePayConfig',
        required: true
      },
      targetAmount: {
        type: Number,
        required: true,
        min: 0
      },
      frequency: {
        type: String,
        enum: ['Monthly', 'Quarterly', 'Half-Yearly', 'Annually'],
        default: 'Monthly'
      }
    }],

    workingHr: {
      type: Number,
      required: true,
    },
    otApplicable: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
    esicApplicable: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
    pfApplicable: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
    probation: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
    probationDuration: {
      type: Number,
      default: 0, // in months
    },
    isAttending: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
    gratuityApplicable: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
    attendanceApproval: {
      type: attendanceApprovalSchema,
      default: () => ({
        required: "no",
        shift1Supervisor: null,
        shift2Supervisor: null,
      }),
    },
    documents: {
      type: [documentSchema],
      default: [],
    },
    compOffBalance: {
      type: Number,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspended", "Terminated"],
      default: "Active",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    sessionToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
employeeSchema.index({ 'jobDetails.department': 1 });
employeeSchema.index({ 'jobDetails.organizationId': 1 });
employeeSchema.index({ 'jobDetails.departmentId': 1 });
employeeSchema.index({ status: 1 });

// Virtual for full name
employeeSchema.virtual('fullName').get(function () {
  return `${this.personalDetails.firstName} ${this.personalDetails.lastName}`;
});

// Method to calculate salary components
employeeSchema.methods.calculateSalaryComponents = function (statutoryConfig = null, params = {}) {
  const { workingDaysInMonth = 26, presentDays = null, lopDays = 0, month = null } = params;

  const structure = this.payslipStructure;
  if (!structure) {
    throw new Error("Salary structure (payslipStructure) is missing for this employee.");
  }

  const standardBasic = structure.basicSalary || 0;

  let basicSalary = standardBasic;
  let lopAmount = 0;

  // Calculate LOP (Loss of Pay) if applicable
  if (lopDays > 0 && workingDaysInMonth > 0 && standardBasic > 0) {
    lopAmount = (standardBasic / workingDaysInMonth) * lopDays;
    basicSalary = Math.max(0, standardBasic - lopAmount);
  }

  // Calculate earnings based on the actual basic salary
  const earnings = structure.earnings || [];
  const calculatedEarnings = earnings
    .filter(e => e.enabled)
    .map(earning => {
      let amount = 0;
      if (earning.calculationType === 'percentage') {
        amount = (basicSalary * (earning.percentage || 0)) / 100;
      } else {
        amount = earning.fixedAmount || 0;
      }
      return {
        ...earning.toObject(),
        calculatedAmount: Math.round(amount)
      };
    });

  // Calculate Gross Salary (Actual Basic + Earnings)
  const grossSalary = basicSalary + calculatedEarnings.reduce((sum, e) => sum + e.calculatedAmount, 0);

  // Calculate configured deductions
  const deductions = structure.deductions || [];
  let calculatedDeductions = deductions
    .filter(d => d.enabled)
    .map(deduction => {
      let amount = 0;
      if (deduction.calculationType === 'percentage') {
        amount = (basicSalary * (deduction.percentage || 0)) / 100;
      } else {
        amount = deduction.fixedAmount || 0;
      }
      return {
        ...deduction.toObject(),
        calculatedAmount: Math.round(amount)
      };
    });

  // Add LOP as a deduction if it was calculated
  if (lopAmount > 0) {
    calculatedDeductions.push({
      name: 'Loss of Pay (LOP)',
      calculatedAmount: lopAmount,
      autoCalculated: true
    });
  }

  // ========== AUTO-CALCULATED STATUTORY DEDUCTIONS (India Compliance) ==========

  // 1. PF (Provident Fund) - 12% of Basic, capped at 15,000 ceiling
  if (this.pfApplicable === 'yes') {
    const pfWage = Math.min(basicSalary, 15000);
    const pfEmployee = Math.round(pfWage * 0.12);
    const pfEmployer = Math.round(pfWage * 0.13); // Includes admin charges usually

    calculatedDeductions.push({
      name: 'Provident Fund (PF)',
      calculatedAmount: pfEmployee,
      autoCalculated: true,
      employerContribution: pfEmployer
    });
  }

  // 2. ESIC - 0.75% of Gross, only if Gross <= 21,000
  if (this.esicApplicable === 'yes' && grossSalary <= 21000) {
    const esicEmployee = Math.ceil(grossSalary * 0.0075);
    const esicEmployer = Math.ceil(grossSalary * 0.0325);

    calculatedDeductions.push({
      name: 'ESIC',
      calculatedAmount: esicEmployee,
      autoCalculated: true,
      employerContribution: esicEmployer
    });
  }

  // 3. Professional Tax (PT) - State specific
  // 3. Professional Tax (PT) - State specific
  // Slabs are now fetched dynamically from StatutoryConfig
  const workState = this.jobDetails?.workState || 'Maharashtra';
  const ptAmount = StatutoryCalculator.calculateProfessionalTax(grossSalary, workState, statutoryConfig);



  if (ptAmount > 0) {
    calculatedDeductions.push({
      name: 'Professional Tax (PT)',
      calculatedAmount: ptAmount,
      autoCalculated: true
    });
  }

  // 4. TDS (Income Tax) - Placeholder logic for now
  // In a real system, this would use investment declarations and annual projections
  if (this.isTDSApplicable) {
    const annualGross = grossSalary * 12;
    let monthlyTDS = 0;
    if (annualGross > 700000) { // Simple 7L exemption logic for New Regime
      monthlyTDS = Math.round(((annualGross - 700000) * 0.1) / 12);
    }

    if (monthlyTDS > 0) {
      calculatedDeductions.push({
        name: 'Income Tax (TDS)',
        calculatedAmount: monthlyTDS,
        autoCalculated: true
      });
    }
  }

  // 5. Gratuity (Provision) - Employer Contribution
  // Formula: (Basic * 15 / 26) / 12
  if (this.gratuityApplicable === 'yes') {
    // We import StatutoryCalculator here to avoid circular dependencies if it's in a utils file
    // Or just inline the logic as it's simple enough and we want to keep model self-contained
    const yearlyGratuity = (basicSalary * 15) / 26;
    const monthlyGratuity = Math.round(yearlyGratuity / 12);

    // We add this as a deduction with 0 employee contribution but with employer contribution
    // This allows it to show up in salary slips/reports as a component without deducting from Net Salary
    // OR we can just track it. Keka usually shows it as part of CTC but not in-hand.

    // OPTION: Add to "Deductions" with 0 amount to show in payslip structure?
    // Better: Add it to a new array or just handle it as a deduction with 0 employee share

    calculatedDeductions.push({
      name: 'Gratuity (Provision)',
      calculatedAmount: 0, // Not deducted from employee
      autoCalculated: true,
      employerContribution: monthlyGratuity,
      isGratuity: true
    });
  }

  // ============================================================================

  const totalEarnings = grossSalary;
  const totalDeductions = calculatedDeductions.reduce((sum, d) => sum + d.calculatedAmount, 0);
  const netSalary = Math.round(totalEarnings - totalDeductions);

  return {
    basicSalary,
    standardBasic,
    earnings: calculatedEarnings,
    deductions: calculatedDeductions,
    totalEarnings,
    totalDeductions,
    netSalary,
    salaryType: structure.salaryType,
    lopAmount
  };
};

// Method to update computed salary fields
employeeSchema.methods.updateComputedSalary = function (statutoryConfig = null) {
  const calculated = this.calculateSalaryComponents(statutoryConfig);
  this.payslipStructure.totalEarnings = calculated.totalEarnings;
  // IMPORTANT: Don't overwrite grossSalary - it represents CTC entered by user
  // grossSalary is set by the form and should be preserved
  // this.payslipStructure.grossSalary remains as the user-entered CTC value
  this.payslipStructure.totalDeductions = calculated.totalDeductions;
  this.payslipStructure.netSalary = calculated.netSalary;
  if (this.payslipStructure.salaryType === 'perday') {
    this.payslipStructure.perDaySalary = this.payslipStructure.basicSalary;
  }
};

// Pre-save middleware
employeeSchema.pre('save', async function (next) {
  if (!this.workingHr) {
    this.workingHr = 9;
  }

  // Update computed salary fields if payslip structure changed
  if (this.isModified('payslipStructure') || this.isModified('jobDetails.workState')) {
    try {
      // Fetch statutory config if workState is defined
      let statutoryConfig = null;
      if (this.jobDetails && this.jobDetails.workState) {
        const StatutoryConfig = mongoose.models.StatutoryConfig || mongoose.model('StatutoryConfig');
        statutoryConfig = await StatutoryConfig.findOne({
          state: { $regex: new RegExp(`^${this.jobDetails.workState}$`, 'i') }
        });
      }
      this.updateComputedSalary(statutoryConfig);
    } catch (error) {
      console.error("Error fetching statutory config in pre-save:", error);
      // Proceed with default/fallback calculation
      this.updateComputedSalary(null);
    }
  }

  // Hash password if modified
  if (this.isModified("password") && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

// Method to compare password
employeeSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to get JWT token
employeeSchema.methods.getJwtToken = function (role) {
  return jwt.sign({ id: this._id, role: role || this.role }, process.env.JWT_SECRET || "fallback_secret_key_change_me", {
    expiresIn: process.env.JWT_EXPIRE || "30d",
  });
};


// Delete existing model
if (mongoose.models.Employee) {
  delete mongoose.models.Employee;
}

export default mongoose.models.Employee || mongoose.model("Employee", employeeSchema);