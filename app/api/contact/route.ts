import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to client
    await transporter.sendMail({
      from: `"SMG Accounting Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"Scott Geans, CPA - SMG Accounting" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting SMG Accounting",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 1-2 business days.</p>
        <p>In the meantime, feel free to reach us directly at:</p>
        <ul>
          <li>Email: ${process.env.EMAIL_TO || "scott@smgaccounting.com"}</li>
          <li>Phone: (317) 555-1234</li>
        </ul>
        <p>Best regards,<br>Scott Geans, CPA<br>SMG Accounting & Tax Advisors, LLC</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
