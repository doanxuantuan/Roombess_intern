import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Please check and enter a valid email address" },
      { status: 400 }
    );
  }
  const verificationCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SERVER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SERVER,
    to: email,
    subject: "Mã xác minh của bạn",
    text: `Mã xác minh của bạn là: ${verificationCode}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Email sent successfully",
      code: verificationCode,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Email sending failed", error },
      { status: 500 }
    );
  }
}
