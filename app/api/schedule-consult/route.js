import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      organization,
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      location,
      preferredTime,
      comments,
    } = await req.json();

    if (
      !organization ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !preferredContact ||
      !location ||
      !preferredTime
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Schedule Consult" <${process.env.SMTP_USER}>`,
      to: "waitlist@thegivexchange.com",
      subject: "New Schedule a Consult Request",
      html: `
        <h2>New Consult Request</h2>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <p><strong>Additional Comments:</strong></p>
        <p>${comments || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Consult request sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
