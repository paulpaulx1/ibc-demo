import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Gmail app password
      },
    });

    // Email to Scott
    const mailOptions = {
      from: process.env.SMTP_FROM, // Your controlled email
      to: "scott@smgcpafirm.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}

Message:
${message}
      `,
      html: `
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
            <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #64748b; font-size: 14px;">
            <p>This email was sent from the SMG Accounting & Tax Advisors contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}