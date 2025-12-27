import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name, suggestion } = await request.json();

        // Validate input
        if (!name || !suggestion) {
            return NextResponse.json(
                { error: "Name and suggestion are required" },
                { status: 400 }
            );
        }

        // Get admin email from environment variable
        const adminEmail = process.env.ADMIN_EMAIL;

        if (!adminEmail) {
            console.error("ADMIN_EMAIL environment variable is not set");
            return NextResponse.json(
                { error: "Email configuration missing" },
                { status: 500 }
            );
        }

        // For now, we'll use a simple email service
        // You can integrate with SendGrid, Resend, or Nodemailer
        // Example using Resend (you'll need to install: npm install resend)

        // Uncomment and configure when you have an email service:
        /*
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
    
        await resend.emails.send({
          from: 'ResumeStudio <noreply@yourdomain.com>',
          to: adminEmail,
          subject: `New Suggestion from ${name}`,
          html: `
            <h2>New Suggestion Received</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Suggestion:</strong></p>
            <p>${suggestion}</p>
          `,
        });
        */

        // For now, just log to console (you'll see this in your terminal)
        console.log("=== NEW SUGGESTION ===");
        console.log(`From: ${name}`);
        console.log(`Suggestion: ${suggestion}`);
        console.log(`Admin Email: ${adminEmail}`);
        console.log("=====================");

        return NextResponse.json(
            { message: "Suggestion received successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing suggestion:", error);
        return NextResponse.json(
            { error: "Failed to process suggestion" },
            { status: 500 }
        );
    }
}
