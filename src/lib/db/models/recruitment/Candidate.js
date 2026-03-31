import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Candidate name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true
    },
    phone: String,
    resumeUrl: String,
    jobRequisition: {
        type: mongoose.Schema.Types.ObjectId,
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
            'Rejected',
            'Withdrawn'
        ],
        default: 'Applied'
    },
    interviews: [{
        round: String,
        interviewer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee'
        },
        date: Date,
        meetingLink: String,
        feedback: String,
        rating: { type: Number, min: 1, max: 5 },
        status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' }
    }],
    source: {
        type: String,
        enum: ['LinkedIn', 'Indeed', 'Referral', 'Website', 'Other'],
        default: 'Website'
    },
    notes: String,
    parsedResume: {
        skills: [String],
        experience: [{
            company: String,
            role: String,
            duration: String,
            years: Number,
            highlights: [String]
        }],
        education: [{
            institution: String,
            degree: String,
            year: String
        }],
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
        enum: ['Strong Hire', 'Potential Fit', 'Weak Match', 'Not Recommended', null],
        default: null
    },
    fitStrengths: [String],
    fitGaps: [String],
    appliedDate: {
        type: Date,
        default: Date.now
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        default: null
    }
}, {
    timestamps: true
});

// Gap Fix #9: Prevent duplicate candidates by email within same organization
candidateSchema.index({ email: 1, organizationId: 1 }, { unique: true });

const Candidate = mongoose.models.Candidate || mongoose.model('Candidate', candidateSchema);

export default Candidate;
