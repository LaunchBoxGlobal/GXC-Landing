import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message, formType } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }
    if (!name) {
      return new Response(JSON.stringify({ error: "Name is required" }), {
        status: 400,
      });
    }
    if (!phone) {
      return new Response(
        JSON.stringify({ error: "Phone number is required" }),
        { status: 400 }
      );
    }
    if (!message) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
      });
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

    await transporter.sendMail({
      from: `"Website Waitlist" <${process.env.SMTP_USER}>`,
      to: "waitlist@thegivexchange.com",
      subject: "New Message from giveXchange landing page.",
      text: `
      New ${formType} details:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}
      `,
      html: `
        <h2>New ${formType}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
