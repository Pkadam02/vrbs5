import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs/promises';

export async function POST(request: Request) {
  const { name, contact, email, caseStudyId } = await request.json();

  // Basic validation
  if (!name || !contact || !email || !caseStudyId) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services or SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let caseStudyFilePath = '';
  let caseStudyFileName = '';

  switch (caseStudyId) {
    case 'cs1':
      caseStudyFileName = 'Case_Study_1.docx';
      caseStudyFilePath = path.join(process.cwd(), 'public', caseStudyFileName);
      break;
    case 'cs2':
      caseStudyFileName = 'Case_Study_2.docx';
      caseStudyFilePath = path.join(process.cwd(), 'public', caseStudyFileName);
      break;
    case 'cs3':
      caseStudyFileName = 'Case_Study_3.docx';
      caseStudyFilePath = path.join(process.cwd(), 'public', caseStudyFileName);
      break;
    default:
      return NextResponse.json({ message: 'Invalid case study ID' }, { status: 400 });
  }

  try {
    // Check if the file exists
    await fs.access(caseStudyFilePath);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Your ${caseStudyFileName} from VR Business Solutions`,
      html: `<p>Dear ${name},</p>
             <p>Thank you for your interest in our case study. Please find your requested file attached.</p>
             <p>Best regards,<br/>VR Business Solutions Team</p>`,
      attachments: [
        {
          filename: caseStudyFileName,
          path: caseStudyFilePath,
          contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Case study sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email or accessing file:', error);
    return NextResponse.json({ message: 'Failed to send case study.' }, { status: 500 });
  }
}
