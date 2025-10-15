// api/send-case-study/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { name, contact, email } = await request.json();

    // 1. Validate incoming data
    if (!name || !contact || !email) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 2. Configure Nodemailer (use your email service provider details)
    //    For demonstration, using a ethereal.email (for testing) or a placeholder
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email', // Corrected Ethereal Host
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'ari81@ethereal.email', // Replace with your Ethereal User (e.g., john.doe@ethereal.email)
        pass: 'AffSVhFDjmGCgKS4Xd',    // Replace with your Ethereal Pass
      },
    });

    // 3. Read the case study file
    const filePath = path.join(process.cwd(), 'public', 'Case_Study_3.docx');
    const fileContent = fs.readFileSync(filePath);

    // 4. Create email with attachment
    const mailOptions = {
      from: 'YOUR_ETHEREAL_USER', // Sender address (use your Ethereal User)
      to: email, // Recipient address from form
      subject: 'Your Requested Case Study from VR Business Solutions',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for your interest in our case study. Please find the attached document.</p>
        <p>Best regards,</p>
        <p>VR Business Solutions Team</p>
      `,
      attachments: [
        {
          filename: 'Case_Study_3.docx',
          content: fileContent,
          contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        },
      ],
    };

    // 5. Send email
    await transporter.sendMail(mailOptions);

    // 6. Respond to client
    return NextResponse.json({ message: 'Case study sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending case study:', error);
    return NextResponse.json({ message: 'Failed to send case study.' }, { status: 500 });
  }
}
