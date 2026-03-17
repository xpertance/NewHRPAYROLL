import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import OfferLetter from '@/lib/db/models/recruitment/OfferLetter';
import { getAuthUser, authorize } from '@/lib/auth-util';

export async function GET(request) {
    try {
        const authUser = await getAuthUser();
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const candidateId = searchParams.get('candidateId');

        let query = {};
        
        // SaaS PROTECTION
        if (authUser.role === 'admin') {
            query.organizationId = authUser.organizationId;
        }

        if (candidateId) query.candidate = candidateId;

        const offers = await OfferLetter.find(query).populate('candidate', 'name email');
        return NextResponse.json({ offers });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const authUser = await getAuthUser();
        authorize(authUser, ['admin', 'super_admin']);
        
        await dbConnect();
        const body = await request.json();
        const orgId = authUser.role === 'admin' ? authUser.organizationId : body.organizationId;
        const offer = await OfferLetter.create({ ...body, organizationId: orgId, sentBy: authUser.id });
        return NextResponse.json({ offer, message: "Offer letter generated successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { id, ...updateData } = body;

        const offer = await OfferLetter.findByIdAndUpdate(id, updateData, { new: true });
        return NextResponse.json({ offer, message: "Offer status updated" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
