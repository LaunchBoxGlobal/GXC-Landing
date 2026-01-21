import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Community Request" <${process.env.SMTP_USER}>`,
      to: "waitlist@thegivexchange.com",
      subject: "New Community Request Submission",
      html: `
        <h2>Community Request Details</h2>
        <p><strong>Organization:</strong> ${data.organizationName}</p>
        <p><strong>Type:</strong> ${data.organizationType}</p>
        <p><strong>Contact:</strong> ${data.contactNameTitle}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Website:</strong> ${data.website || "N/A"}</p>
        <p><strong>Preferred Contact:</strong> ${data.preferredContact}</p>
        <p><strong>Fundraising Goals:</strong> ${data.fundraisingGoals || "N/A"}</p>
        <p><strong>Fundraising Date:</strong> ${data.fundraisingDate}</p>
        <p><strong>Community Size:</strong> ${data.communitySize || "N/A"}</p>
        <p><strong>In-person Kick-off:</strong> ${data.inPersonKickoff}</p>
        <p><strong>Virtual Kick-off:</strong> ${data.virtualKickoff}</p>
        <p><strong>Exchange Method:</strong> ${data.exchangeMethod}</p>
        <p><strong>Comments:</strong> ${data.comments || "N/A"}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
