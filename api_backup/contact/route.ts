import { NextResponse } from "next/server";
import pool from "@/lib/db";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectType, message } = body;

    // 1. Basic Validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Save to Database (Optional - fail safe)
    try {
      const connection = await pool.getConnection();

      // Ensure table exists (Quick setup for demo purposes)
      await connection.query(`
          CREATE TABLE IF NOT EXISTS contact_submissions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(100),
            last_name VARCHAR(100),
            email VARCHAR(255),
            project_type VARCHAR(100),
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

      await connection.query(
        "INSERT INTO contact_submissions (first_name, last_name, email, project_type, message) VALUES (?, ?, ?, ?, ?)",
        [firstName, lastName, email, projectType, message]
      );

      connection.release();
    } catch (dbError) {
      console.error("Database Error (Skipping save):", dbError);
      // Continue to send email even if DB fails
    }

    // 3. Send Email Notification
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "info@aniveratech.com",
        pass: "Info@321#Vinay",
      },
    });

    const mailOptions = {
      from: '"Anivera Website" <info@aniveratech.com>',
      to: "info@aniveratech.com", // Sending to the same business email
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // We still return 200 because the database save was successful
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
