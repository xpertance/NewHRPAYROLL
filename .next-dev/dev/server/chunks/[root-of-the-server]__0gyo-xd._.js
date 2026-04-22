module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/db/connect.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
//sample
console.log('🔧 MongoDB URI found:', MONGODB_URI ? 'Yes' : 'No');
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    console.log('🔄 dbConnect() called');
    if (cached.conn) {
        console.log('✅ Using cached MongoDB connection');
        return cached.conn;
    }
    if (!cached.promise) {
        console.log('🔌 Creating new MongoDB connection...');
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            console.log('🎉 MongoDB connected successfully!');
            console.log('📊 Database name:', mongoose.connection.db?.databaseName);
            console.log('👤 Connection state:', mongoose.connection.readyState);
            return mongoose;
        }).catch((error)=>{
            console.error('💥 MongoDB connection failed:', error);
            console.error('🔍 Error details:', error.message);
            cached.promise = null;
            throw error;
        });
    }
    try {
        console.log('⏳ Waiting for MongoDB connection...');
        cached.conn = await cached.promise;
        console.log('🚀 MongoDB connection ready');
    } catch (e) {
        console.error('❌ Error in dbConnect:', e);
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = dbConnect;
}),
"[project]/src/lib/db/models/recruitment/Candidate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const candidateSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: [
            true,
            'Candidate name is required'
        ],
        trim: true
    },
    email: {
        type: String,
        required: [
            true,
            'Email is required'
        ],
        lowercase: true,
        trim: true
    },
    phone: String,
    resumeUrl: String,
    resumeText: String,
    resumeParseStatus: {
        type: String,
        enum: [
            'queued',
            'processing',
            'done',
            'failed',
            null
        ],
        default: null
    },
    resumeParseRequestedAt: Date,
    resumeParsedAt: Date,
    resumeParseAttempts: {
        type: Number,
        default: 0
    },
    resumeParseError: String,
    jobRequisition: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'JobRequisition',
        required: false
    },
    appliedRole: String,
    status: {
        type: String,
        enum: [
            'Applied',
            'Screening',
            'Technical Interview',
            'Managerial Interview',
            'HR Interview',
            'Offer Sent',
            'Hired',
            'Confirmed',
            'Declined',
            'Rejected',
            'Withdrawn',
            'On Hold',
            'Draft'
        ],
        default: 'Applied'
    },
    interviews: [
        {
            round: String,
            interviewer: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
                ref: 'Employee'
            },
            date: Date,
            mode: {
                type: String,
                enum: [
                    'Online',
                    'Offline'
                ],
                default: 'Online'
            },
            location: String,
            meetingLink: String,
            rawNotes: String,
            structuredFeedback: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.Mixed,
            decision: {
                type: String,
                enum: [
                    'Promoted',
                    'Rejected',
                    'Hired',
                    'Offer Sent',
                    'On Hold',
                    'Saved',
                    null
                ],
                default: null
            },
            feedback: String,
            rating: {
                type: Number,
                min: 1,
                max: 5
            },
            status: {
                type: String,
                enum: [
                    'Scheduled',
                    'Completed',
                    'Cancelled'
                ],
                default: 'Scheduled'
            }
        }
    ],
    source: {
        type: String,
        enum: [
            'LinkedIn',
            'Indeed',
            'Referral',
            'Website',
            'Careers Portal',
            'Other'
        ],
        default: 'Website'
    },
    notes: String,
    parsedResume: {
        skills: [
            String
        ],
        experience: [
            {
                company: String,
                role: String,
                duration: String,
                years: Number,
                highlights: [
                    String
                ]
            }
        ],
        education: [
            {
                institution: String,
                degree: String,
                year: String
            }
        ],
        summary: String,
        totalExperienceYears: Number,
        currentRole: String,
        currentCompany: String
    },
    fitScore: {
        type: Number,
        min: 0,
        max: 100,
        default: null
    },
    fitAnalysis: String,
    fitRecommendation: {
        type: String,
        enum: [
            'Strong Hire',
            'Potential Fit',
            'Weak Match',
            'Not Recommended',
            'Pending Review',
            'Needs Review',
            null
        ],
        default: 'Pending Review'
    },
    fitStrengths: [
        String
    ],
    fitGaps: [
        String
    ],
    appliedDate: {
        type: Date,
        default: Date.now
    },
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Organization',
        default: null
    }
}, {
    timestamps: true
});
// Gap Fix #9: Prevent duplicate candidates by email within same organization for the SAME role
candidateSchema.index({
    email: 1,
    organizationId: 1,
    jobRequisition: 1
}, {
    unique: true
});
const Candidate = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Candidate || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Candidate', candidateSchema);
const __TURBOPACK__default__export__ = Candidate;
}),
"[project]/src/lib/db/models/recruitment/JobRequisition.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const jobRequisitionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    title: {
        type: String,
        required: [
            true,
            'Job title is required'
        ],
        trim: true
    },
    department: {
        type: String,
        required: [
            true,
            'Department is required'
        ]
    },
    location: {
        type: String,
        required: [
            true,
            'Location is required'
        ]
    },
    type: {
        type: String,
        enum: [
            'Full-time',
            'Part-time',
            'Contract',
            'Internship'
        ],
        default: 'Full-time'
    },
    headcount: {
        type: Number,
        default: 1,
        min: 1
    },
    workplaceType: {
        type: String,
        enum: [
            'On-site',
            'Remote',
            'Hybrid'
        ],
        default: 'On-site'
    },
    experienceLevel: {
        type: String,
        enum: [
            'Entry',
            'Mid',
            'Senior',
            'Executive',
            'Fresher',
            '1-3 years',
            '3-5 years',
            '5-10 years',
            '10+ years'
        ],
        default: null
    },
    status: {
        type: String,
        enum: [
            'Draft',
            'Pending Approval',
            'Open',
            'Closed',
            'On Hold',
            'Rejected'
        ],
        default: 'Pending Approval'
    },
    priority: {
        type: String,
        enum: [
            'Low',
            'Medium',
            'High',
            'Urgent'
        ],
        default: 'Medium'
    },
    description: {
        type: String,
        required: [
            true,
            'Job description is required'
        ]
    },
    requirements: [
        String
    ],
    skillsRequired: [
        String
    ],
    aiGenerated: {
        type: Boolean,
        default: false
    },
    salaryRange: {
        min: Number,
        max: Number,
        currency: {
            type: String,
            default: 'INR'
        }
    },
    hiringManagerName: {
        type: String,
        trim: true
    },
    hiringManager: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Employee'
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    targetDate: Date,
    organizationId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Organization',
        default: null
    },
    approvalChain: [
        {
            role: {
                type: String,
                required: true
            },
            status: {
                type: String,
                enum: [
                    'Pending',
                    'Approved',
                    'Rejected'
                ],
                default: 'Pending'
            },
            approvedBy: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
                ref: 'User'
            },
            approvedAt: Date,
            remarks: String
        }
    ]
}, {
    timestamps: true
});
const JobRequisition = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.JobRequisition || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('JobRequisition', jobRequisitionSchema);
const __TURBOPACK__default__export__ = JobRequisition;
}),
"[project]/src/lib/ai/gemini.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateFitScore",
    ()=>calculateFitScore,
    "generateInterviewQuestions",
    ()=>generateInterviewQuestions,
    "generateJD",
    ()=>generateJD,
    "generateOfferLetter",
    ()=>generateOfferLetter,
    "generateOnboardingTasks",
    ()=>generateOnboardingTasks,
    "parseResume",
    ()=>parseResume,
    "parseResumeFromPDF",
    ()=>parseResumeFromPDF,
    "summarizeFeedback",
    ()=>summarizeFeedback
]);
// src/lib/ai/gemini.js — Central AI Service Layer (Google Gemini)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
let genAI = null;
let model = null;
function getAIModel() {
    if (!model) {
        const apiKey = process.env.GOOGLE_API_KEY || '';
        if (!apiKey) {
            console.warn("⚠️ GOOGLE_API_KEY is missing from environment variables.");
        }
        genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey);
        // Using the high-performance model found in your authorized list
        model = genAI.getGenerativeModel({
            model: 'models/gemini-2.5-flash'
        });
    }
    return model;
}
/**
 * Enhanced: Generate content with automatic model fallback
 */ async function generateWithFallback(prompt, inlineData = null, retryCount = 0) {
    const aiModel = getAIModel();
    try {
        const payload = inlineData ? [
            prompt,
            {
                inlineData
            }
        ] : prompt;
        const result = await aiModel.generateContent(payload);
        return result.response.text();
    } catch (e) {
        // Handle 503 Service Unavailable (High Demand) with a retry
        if (e.message.includes('503') || e.message.includes('Service Unavailable')) {
            if (retryCount < 2) {
                console.warn(`⚠️ Gemini 503 (High Demand). Retrying in 2 seconds... (Attempt ${retryCount + 1})`);
                await new Promise((resolve)=>setTimeout(resolve, 2000));
                return generateWithFallback(prompt, inlineData, retryCount + 1);
            }
        }
        // If 404 or model error, try the next best model in your list: gemini-2.0-flash
        if (e.message.includes('404') || e.message.includes('not found') || e.message.includes('not supported')) {
            console.warn("🔄 Switching to fallback model (models/gemini-2.0-flash)...");
            const fallbackModel = genAI.getGenerativeModel({
                model: 'models/gemini-2.0-flash'
            });
            const payloadFallback = inlineData ? [
                prompt,
                {
                    inlineData
                }
            ] : prompt;
            const result = await fallbackModel.generateContent(payloadFallback);
            return result.response.text();
        }
        throw e;
    }
}
/**
 * Core: Generate content from Gemini
 */ async function generateContent(prompt) {
    return generateWithFallback(prompt);
}
async function generateJD({ title, department, type, location, seniority }) {
    const prompt = `You are an expert HR recruiter. Generate a professional job description for the following position.

Role: ${title}
Department: ${department}
Employment Type: ${type || 'Full-time'}
Location: ${location || 'Remote'}
Seniority: ${seniority || 'Mid-Level'}

Return your response STRICTLY as valid JSON (no markdown, no code blocks) with this exact structure:
{
  "description": "A compelling 3-4 paragraph job description covering role overview, responsibilities, what the candidate will do, and why they should join",
  "requirements": ["requirement 1", "requirement 2", "...up to 8 key requirements"],
  "skillsRequired": ["skill1", "skill2", "...up to 10 core technical/functional skills"],
  "salaryInsight": "A brief note about typical salary range for this role in India (INR)"
}

Make it professional, compelling, and suitable for job boards like LinkedIn/Naukri.`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI JD parse error:', e);
        return {
            description: text,
            requirements: [],
            skillsRequired: [],
            salaryInsight: ''
        };
    }
}
async function parseResume(resumeText) {
    const prompt = `You are an expert HR resume analyst. Parse the following resume text and extract structured data.

RESUME TEXT:
---
${resumeText.substring(0, 5000)}
---

Return your response STRICTLY as valid JSON (no markdown, no code blocks) with this exact structure:
{
  "name": "Full name of the candidate",
  "email": "Email address if found, or empty string",
  "phone": "Phone number if found, or empty string",
  "summary": "A 2-3 sentence professional summary of the candidate",
  "skills": ["skill1", "skill2", "...all technical and soft skills found"],
  "experience": [
    {
      "company": "Company name",
      "role": "Job title",
      "duration": "e.g. Jan 2020 - Dec 2023",
      "years": 3,
      "highlights": ["key achievement 1", "key achievement 2"]
    }
  ],
  "education": [
    {
      "institution": "University/College name",
      "degree": "Degree name",
      "year": "Graduation year"
    }
  ],
  "totalExperienceYears": 5,
  "currentRole": "Most recent job title",
  "currentCompany": "Most recent company"
}`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Resume parse error:', e);
        return {
            name: '',
            email: '',
            phone: '',
            summary: text,
            skills: [],
            experience: [],
            education: [],
            totalExperienceYears: 0
        };
    }
}
async function parseResumeFromPDF(buffer, mimeType = 'application/pdf') {
    const prompt = `You are an expert HR resume analyst. Read the attached resume document and extract structured data.

Return your response STRICTLY as valid JSON (no markdown, no code blocks) with this exact structure:
{
  "name": "Full name of the candidate",
  "email": "Email address if found, or empty string",
  "phone": "Phone number if found, or empty string",
  "summary": "A 2-3 sentence professional summary of the candidate",
  "skills": ["skill1", "skill2", "...all technical and soft skills found"],
  "experience": [
    {
      "company": "Company name",
      "role": "Job title",
      "duration": "e.g. Jan 2020 - Dec 2023",
      "years": 3,
      "highlights": ["key achievement 1", "key achievement 2"]
    }
  ],
  "education": [
    {
      "institution": "University/College name",
      "degree": "Degree name",
      "year": "Graduation year"
    }
  ],
  "totalExperienceYears": 5,
  "currentRole": "Most recent job title",
  "currentCompany": "Most recent company",
  "rawText": "Return a complete plain-text dump of the entire resume content here so we can display it for human readability"
}`;
    const inlineData = {
        data: buffer.toString('base64'),
        mimeType
    };
    try {
        const text = await generateWithFallback(prompt, inlineData);
        if (!text) return null;
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Resume parse (PDF native) error:', e);
        return null;
    }
}
async function calculateFitScore(candidateProfile, jobRequirements) {
    const prompt = `You are an AI recruitment analyst. Calculate how well this candidate matches the job requirements.

CANDIDATE PROFILE:
- Skills: ${(candidateProfile.skills || []).join(', ')}
- Experience: ${candidateProfile.totalExperienceYears || 0} years
- Current Role: ${candidateProfile.currentRole || 'N/A'}
- Education: ${(candidateProfile.education || []).map((e)=>`${e.degree} from ${e.institution}`).join(', ') || 'N/A'}
- Summary: ${candidateProfile.summary || 'N/A'}

JOB REQUIREMENTS:
- Title: ${jobRequirements.title || 'N/A'}
- Department: ${jobRequirements.department || 'N/A'}
- Required Skills: ${(jobRequirements.skillsRequired || jobRequirements.requirements || []).join(', ')}
- Description: ${(jobRequirements.description || '').substring(0, 500)}

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "fitScore": 78,
  "analysis": "2-3 sentence explanation of the match quality",
  "strengths": ["strength 1", "strength 2", "strength 3"],
  "gaps": ["gap 1", "gap 2"],
  "recommendation": "Strong Hire" or "Potential Fit" or "Weak Match" or "Not Recommended"
}

Score from 0-100 where:
- 90-100: Perfect match
- 75-89: Strong match
- 60-74: Decent match
- 40-59: Weak match
- 0-39: Poor match`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Fit Score parse error:', e);
        return {
            fitScore: 0,
            analysis: 'Unable to calculate',
            strengths: [],
            gaps: [],
            recommendation: 'Pending Review'
        };
    }
}
async function generateOfferLetter({ candidateName, jobTitle, department, salary, joiningDate, companyName }) {
    const prompt = `You are a professional HR manager. Generate a formal offer letter for the following candidate.

Candidate: ${candidateName}
Position: ${jobTitle}
Department: ${department || 'General'}
Annual CTC: ₹${(salary || 0).toLocaleString('en-IN')}
Joining Date: ${joiningDate}
Company: ${companyName || 'Bizmate Technologies'}

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "subject": "Offer letter email subject line",
  "content": "Full professional offer letter in HTML format with proper styling. Include: greeting, position details, compensation, joining date, terms, and closing. Use inline CSS for styling with a clean, professional look.",
  "terms": ["term 1", "term 2", "term 3", "term 4", "term 5"]
}

Make the letter professional and warm. The HTML should be email-safe with inline styles.`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Offer letter parse error:', e);
        return {
            subject: `Offer Letter - ${jobTitle}`,
            content: text,
            terms: []
        };
    }
}
async function generateInterviewQuestions({ jobTitle, requirements, round, candidateSummary }) {
    const roundConfig = {
        'Screening': 'basic screening questions to assess communication, motivation, and salary expectations',
        'Technical Interview': 'in-depth technical questions to assess hands-on skills and problem-solving',
        'Managerial Interview': 'leadership, project management, and situational judgment questions',
        'HR Interview': 'culture fit, behavioral, career aspirations, and salary negotiation questions',
        'Final Round': 'strategic thinking, company alignment, and vision questions'
    };
    const prompt = `You are a senior interviewer. Generate ${round || 'Technical Interview'} questions for this role.

Role: ${jobTitle}
Requirements: ${(requirements || []).join(', ')}
Round Type: ${round || 'Technical Interview'}
Focus: ${roundConfig[round] || roundConfig['Technical Interview']}
${candidateSummary ? `Candidate Background: ${candidateSummary}` : ''}

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "questions": [
    {
      "question": "The interview question",
      "category": "Technical" or "Behavioral" or "Situational" or "Culture Fit",
      "difficulty": "Easy" or "Medium" or "Hard",
      "expectedAnswer": "Brief guidance on what a good answer looks like",
      "timeMinutes": 5
    }
  ],
  "totalTimeMinutes": 45,
  "tips": "Brief interviewer tips for this round"
}

Generate 8-10 questions with a good mix of difficulties.`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Questions parse error:', e);
        return {
            questions: [],
            totalTimeMinutes: 0,
            tips: text
        };
    }
}
async function summarizeFeedback(rawNotes, candidateName, round) {
    const prompt = `You are an HR analyst. Summarize the following interviewer feedback into a structured assessment.

Candidate: ${candidateName || 'Unknown'}
Interview Round: ${round || 'Technical Interview'}

RAW FEEDBACK NOTES:
---
${rawNotes}
---

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "technicalSkills": { "rating": 4, "notes": "Brief assessment of technical ability" },
  "communication": { "rating": 3, "notes": "Brief assessment of communication skills" },
  "problemSolving": { "rating": 4, "notes": "Brief assessment of problem-solving ability" },
  "cultureFit": { "rating": 5, "notes": "Brief assessment of culture alignment" },
  "overallRating": 4,
  "summary": "2-3 sentence overall assessment",
  "recommendation": "Strong Hire" or "Hire" or "Maybe" or "No Hire",
  "strengths": ["strength 1", "strength 2"],
  "concerns": ["concern 1", "concern 2"]
}

Rate each category from 1 (Poor) to 5 (Excellent).`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Feedback parse error:', e);
        return {
            overallRating: 0,
            summary: text,
            recommendation: 'Needs Review'
        };
    }
}
async function generateOnboardingTasks({ department, role, location }) {
    const prompt = `You are an HR onboarding specialist. Generate a customized onboarding checklist for a new employee.

Department: ${department || 'General'}
Role: ${role || 'New Joiner'}
Location: ${location || 'Office'}

Return your response STRICTLY as valid JSON (no markdown, no code blocks):
{
  "tasks": [
    {
      "category": "Documentation",
      "task": "Task description",
      "priority": "High" or "Medium" or "Low"
    }
  ]
}

Categories must be one of: "Documentation", "IT Setup", "Training", "Orientation", "Finance".
Generate 8-12 tasks tailored to the department and role. Include department-specific items.
For example: Engineering roles need GitHub/CI-CD access, Finance roles need ERP access, etc.`;
    const text = await generateContent(prompt);
    try {
        const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Onboarding parse error:', e);
        return {
            tasks: [
                {
                    category: 'Documentation',
                    task: 'Submit Personal Documents (ID/Address Proof)'
                },
                {
                    category: 'Documentation',
                    task: 'Sign Employment Agreement & Policies'
                },
                {
                    category: 'IT Setup',
                    task: 'Set up System & Corporate Email'
                },
                {
                    category: 'Orientation',
                    task: 'Company Culture & Values Introduction'
                },
                {
                    category: 'Finance',
                    task: 'Submit Bank Details & Tax Declaration'
                }
            ]
        };
    }
}
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/lib/recruitment/resume-processing.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "processCandidateResumeInBackground",
    ()=>processCandidateResumeInBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/connect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/recruitment/Candidate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$JobRequisition$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/recruitment/JobRequisition.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$gemini$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ai/gemini.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
;
;
function resumeUrlToAbsolutePath(resumeUrl) {
    if (!resumeUrl || typeof resumeUrl !== 'string') return null;
    const clean = resumeUrl.replace(/^[\\/]+/, '');
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', clean);
}
async function processCandidateResumeInBackground(candidateId) {
    if (!candidateId) return;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(candidateId);
        if (!candidate) return;
        if (candidate.resumeParseStatus === 'processing' || candidate.resumeParseStatus === 'done') {
            return;
        }
        candidate.resumeParseStatus = 'processing';
        candidate.resumeParseError = null;
        candidate.resumeParseAttempts = (candidate.resumeParseAttempts || 0) + 1;
        await candidate.save();
        const resumePath = resumeUrlToAbsolutePath(candidate.resumeUrl);
        if (!resumePath) {
            throw new Error('Missing resumeUrl for candidate');
        }
        const buffer = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(resumePath);
        if (!buffer || buffer.length === 0) {
            throw new Error('Resume file is empty');
        }
        const aiResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$gemini$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseResumeFromPDF"])(buffer, 'application/pdf');
        if (!aiResult) {
            throw new Error('AI resume parsing returned empty result');
        }
        const resumeText = aiResult.rawText || '';
        delete aiResult.rawText;
        let fitScore = candidate.fitScore ?? 0;
        let fitAnalysis = candidate.fitAnalysis || 'Analysis pending...';
        let fitRecommendation = candidate.fitRecommendation || 'Pending Review';
        let fitStrengths = candidate.fitStrengths || [];
        let fitGaps = candidate.fitGaps || [];
        if (candidate.jobRequisition) {
            const job = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$JobRequisition$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(candidate.jobRequisition);
            if (job) {
                const candidateProfile = {
                    skills: aiResult.skills || [],
                    totalExperienceYears: aiResult.totalExperienceYears || 0,
                    currentRole: aiResult.currentRole || '',
                    education: aiResult.education || [],
                    summary: aiResult.summary || '',
                    rawText: resumeText
                };
                const jobRequirements = {
                    title: job.title || 'N/A',
                    department: job.department || 'N/A',
                    description: job.description || 'N/A',
                    requirements: job.requirements || [],
                    skillsRequired: job.skillsRequired || []
                };
                const fitResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$gemini$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateFitScore"])(candidateProfile, jobRequirements);
                if (fitResult) {
                    fitScore = fitResult.fitScore || 0;
                    fitAnalysis = fitResult.analysis || '';
                    fitRecommendation = fitResult.recommendation || 'Weak Match';
                    fitStrengths = fitResult.strengths || [];
                    fitGaps = fitResult.gaps || [];
                }
            }
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(candidateId, {
            parsedResume: aiResult,
            resumeText,
            fitScore,
            fitAnalysis,
            fitRecommendation,
            fitStrengths,
            fitGaps,
            resumeParseStatus: 'done',
            resumeParsedAt: new Date(),
            resumeParseError: null
        });
    } catch (err) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(candidateId, {
                resumeParseStatus: 'failed',
                resumeParseError: err?.message || String(err)
            });
        } catch  {
        // best-effort only
        }
    }
}
}),
"[project]/src/app/api/v1/public/careers/apply/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/connect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/recruitment/Candidate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$JobRequisition$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/models/recruitment/JobRequisition.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruitment$2f$resume$2d$processing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/recruitment/resume-processing.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
;
;
;
async function scheduleAfterResponse(fn) {
    try {
        const mod = await __turbopack_context__.A("[project]/node_modules/next/server.js [app-route] (ecmascript, async loader)");
        const afterFn = mod.after || mod.unstable_after;
        if (typeof afterFn === 'function') {
            afterFn(fn);
            return;
        }
    } catch  {
    // ignore
    }
    setTimeout(()=>{
        try {
            fn();
        } catch  {
        // ignore
        }
    }, 0);
}
async function POST(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const jobId = formData.get('jobId');
        const resumeFile = formData.get('resume');
        if (!name || !email || !jobId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Name, email, and Job ID are required'
            }, {
                status: 400
            });
        }
        const job = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$JobRequisition$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(jobId);
        if (!job) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Job not found'
        }, {
            status: 404
        });
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            email: String(email).toLowerCase(),
            organizationId: job.organizationId,
            jobRequisition: jobId
        });
        if (existing) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Email already exists for this position'
            }, {
                status: 400
            });
        }
        let resumeUrl = null;
        // 1) Save the PDF file to public/uploads/resumes (fast)
        if (resumeFile && typeof resumeFile.arrayBuffer === 'function') {
            const buffer = Buffer.from(await resumeFile.arrayBuffer());
            const fileName = `resume_${Date.now()}_${String(name).replace(/\s+/g, '_').toLowerCase()}.pdf`;
            const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads', 'resumes');
            const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, fileName);
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(uploadDir, {
                    recursive: true
                });
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, buffer);
                resumeUrl = `/uploads/resumes/${fileName}`;
            } catch (fsErr) {
                console.error('Failed to save resume locally:', fsErr?.message || fsErr);
            }
        }
        // 2) Create candidate immediately (no AI work here)
        const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$models$2f$recruitment$2f$Candidate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            name,
            email,
            phone,
            jobRequisition: jobId,
            organizationId: job.organizationId,
            source: 'Careers Portal',
            status: 'Applied',
            resumeUrl,
            resumeParseStatus: resumeUrl ? 'queued' : 'failed',
            resumeParseRequestedAt: resumeUrl ? new Date() : null,
            resumeParseError: resumeUrl ? null : 'Resume file missing or failed to save'
        });
        const candidateId = String(candidate._id);
        // 3) Background tasks (won't block the user)
        if (resumeUrl) {
            void scheduleAfterResponse(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruitment$2f$resume$2d$processing$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processCandidateResumeInBackground"])(candidateId));
        }
        void scheduleAfterResponse(async ()=>{
            try {
                const { sendEmail } = await __turbopack_context__.A("[project]/src/lib/email/service.js [app-route] (ecmascript, async loader)");
                const { getApplicationReceivedTemplate } = await __turbopack_context__.A("[project]/src/lib/email/templates/recruitment.js [app-route] (ecmascript, async loader)");
                await sendEmail({
                    to: email,
                    subject: `Application Received — ${job?.title || 'the open position'}`,
                    html: getApplicationReceivedTemplate(name, job?.title || 'the open position')
                });
            } catch (emailErr) {
                console.warn('Email skipping (SMTP not configured):', emailErr?.message || emailErr);
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Application submitted successfully',
            candidateId,
            applicationId: candidateId
        }, {
            status: 201
        });
    } catch (error) {
        console.error('APPLY API ERROR:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gyo-xd._.js.map