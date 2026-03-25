import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import OfferLetter from '@/lib/db/models/recruitment/OfferLetter';
import { getAuthUser, authorize } from '@/lib/auth-util';

export async function GET(request) {
    try {
        const authUser = await getAuthUser();
        authorize(authUser, ["admin", "hr", "company_admin", "super_admin"]);
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const candidateId = searchParams.get('candidateId');

        let query = {};
        
        // SaaS PROTECTION
        if (authUser.role !== "super_admin" && authUser.organizationId) {
            query.organizationId = authUser.organizationId;
        }

        if (candidateId) query.candidate = candidateId;

        const offers = await OfferLetter.find(query).populate('candidate', 'name email');
        return NextResponse.json({ success: true, offers });
    } catch (error) {
        console.error("GET OFFERS ERROR:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const authUser = await getAuthUser();
        authorize(authUser, ["admin", "hr", "company_admin", "super_admin"]);
        
        await dbConnect();
        const body = await request.json();
        const orgId = authUser.role !== 'super_admin' ? authUser.organizationId : body.organizationId;
        const offer = await OfferLetter.create({ ...body, organizationId: orgId, sentBy: authUser.id });
        return NextResponse.json({ success: true, offer, message: "Offer letter generated successfully" }, { status: 201 });
    } catch (error) {
        console.error("POST OFFER ERROR:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const authUser = await getAuthUser();
        authorize(authUser, ["admin", "hr", "company_admin", "super_admin"]);
        await dbConnect();
        const body = await request.json();
        const { id, ...updateData } = body;

        const offer = await OfferLetter.findByIdAndUpdate(id, updateData, { new: true });
        return NextResponse.json({ success: true, offer, message: "Offer status updated" });
    } catch (error) {
        console.error("PUT OFFER ERROR:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
