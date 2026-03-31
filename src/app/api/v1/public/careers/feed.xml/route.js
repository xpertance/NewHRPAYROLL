import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/connect';
import JobRequisition from '@/lib/db/models/recruitment/JobRequisition';

export async function GET(request) {
    try {
        await dbConnect();
        
        // Only fetch Open Jobs that have been explicitly approved
        const jobs = await JobRequisition.find({ status: 'Open' }).sort({ createdAt: -1 });
        
        // Base URL estimation (Fallback to localhost for dev)
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        
        // Construct Indeed/LinkedIn standard structured XML Feed
        const generateXML = (jobsList) => {
            let xml = `<?xml version="1.0" encoding="utf-8"?>\n`;
            xml += `<source>\n`;
            xml += `  <publisher>Xpertance</publisher>\n`;
            xml += `  <publisherurl>${baseUrl}</publisherurl>\n`;
            xml += `  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n`;
            
            jobsList.forEach(job => {
                xml += `  <job>\n`;
                xml += `    <title><![CDATA[${job.title}]]></title>\n`;
                xml += `    <date><![CDATA[${new Date(job.createdAt).toUTCString()}]]></date>\n`;
                xml += `    <referencenumber><![CDATA[${job._id}]]></referencenumber>\n`;
                xml += `    <url><![CDATA[${baseUrl}/careers?jobId=${job._id}]]></url>\n`;
                xml += `    <company><![CDATA[Xpertance]]></company>\n`;
                
                // Location splitting (naive approach: "Pune, India")
                const locationParts = job.location.split(',').map(s => s.trim());
                xml += `    <city><![CDATA[${locationParts[0] || job.location}]]></city>\n`;
                xml += `    <country><![CDATA[IN]]></country>\n`;
                
                // Provide the HTML requirements + description inside CDATA
                let descriptionBody = `<h3>Job Description</h3><p>${job.description.replace(/\n/g, '<br/>')}</p>`;
                if (job.requirements && job.requirements.length > 0) {
                    descriptionBody += `<h3>Requirements</h3><ul>`;
                    job.requirements.forEach(req => descriptionBody += `<li>${req}</li>`);
                    descriptionBody += `</ul>`;
                }
                
                xml += `    <description><![CDATA[${descriptionBody}]]></description>\n`;
                
                // Standardization tags
                const normalizedType = job.type === 'Full-time' ? 'fulltime' : job.type === 'Part-time' ? 'parttime' : 'contract';
                xml += `    <jobtype><![CDATA[${normalizedType}]]></jobtype>\n`;
                
                // Salary
                if (job.salaryRange && job.salaryRange.min) {
                    xml += `    <salary><![CDATA[${job.salaryRange.min} - ${job.salaryRange.max || job.salaryRange.min}]]></salary>\n`;
                }
                xml += `  </job>\n`;
            });
            xml += `</source>`;
            return xml;
        };

        const feedXML = generateXML(jobs);

        // Return with specifically crafted XML headers
        return new NextResponse(feedXML, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
                'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' // Cache aggressively for scrapers
            }
        });

    } catch (error) {
        console.error("XML FEED GENERATION ERROR:", error);
        return new NextResponse('Internal Error Creating Feed', { status: 500 });
    }
}
