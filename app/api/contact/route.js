import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

function createTransporter() {
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Missing SMTP_USER or SMTP_PASS");
    throw new Error("Email configuration error");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function POST(request) {
  try {
    const { name, email, phone, company, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    const transporter = createTransporter();
    const DESTINATION = "scott@smgcpafirm.com";

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a5f; border-bottom: 3px solid #d4a574; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p style="margin: 10px 0;"><strong>Company:</strong> ${company || "Not provided"}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #1e3a5f;">Message:</h3>
          <p style="line-height: 1.6; color: #475569;">${(message || "").replace(/\n/g, "<br>")}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #64748b; font-size: 14px;">
          <p>This email was sent from the SMG Accounting & Tax Advisors contact form.</p>
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"SMG Accounting & Tax Advisors" <${SMTP_USER}>`,
      to: DESTINATION,
      replyTo: email,
      subject: `New Contact Form Submission — ${name}`,
      html: emailHtml,
      envelope: {
        from: SMTP_USER,
        to: DESTINATION,
      },
    });

    console.log("SMG contact email sent:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process contact form" },
      { status: 500 },
    );
  }
}
