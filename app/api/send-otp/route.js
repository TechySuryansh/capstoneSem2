import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: email,
    subject: "Your OTP for Contact Verification",
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, otp });
  } catch (err) {
    console.error("Email error:", err);
    return Response.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
