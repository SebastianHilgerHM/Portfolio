/**
 * Email Service
 * Author: Sebastian Hilger
 * Course: ID3 / WS 2025/26
 * Assignment: P07 - Portfolio Backend
 * 
 * Service for sending emails using nodemailer.
 * Supports Gmail SMTP configuration.
 */

import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

/**
 * Create email transporter
 * Requires EMAIL_USER and EMAIL_PASS environment variables
 */
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.warn('Email credentials not configured. Emails will not be sent.');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

/**
 * Send a generic email
 */
export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  const transporter = createTransporter();

  if (!transporter) {
    console.log('Email not sent - transporter not configured');
    return false;
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', options.to);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

/**
 * Send contact form notification email
 */
export const sendContactFormEmail = async (
  data: ContactEmailData,
  recipientEmail: string
): Promise<boolean> => {
  const subject = `Portfolio Contact Form: Message from ${data.name}`;
  
  const text = `
You have received a new contact form submission from your portfolio website.

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to ${data.name}.
  `.trim();

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p>You have received a new message from your portfolio website.</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        
        <div style="margin-top: 20px;">
          <strong>Message:</strong>
          <p style="white-space: pre-wrap; margin-top: 10px;">${data.message}</p>
        </div>
      </div>
      
      <p style="color: #666; font-size: 14px;">
        This email was sent from your portfolio contact form. 
        Reply directly to this email to respond to ${data.name}.
      </p>
    </div>
  `;

  return sendEmail({
    to: recipientEmail,
    subject,
    text,
    html,
  });
};
