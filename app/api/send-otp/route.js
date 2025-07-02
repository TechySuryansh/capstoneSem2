// app/api/send-otp/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  const otp = Math.floor(100000 + Math.random() * 900000);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, otp });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
