# Email Setup Guide

This guide explains how to configure email notifications for the contact form.

## Overview

When someone submits the contact form on your portfolio website, the backend will:
1. Save the submission to the MongoDB database
2. Send an email notification to your email address (sebastianhilger9@gmail.com by default)

## Gmail Setup Instructions

### Step 1: Enable 2-Step Verification

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to **Security** in the left sidebar
3. Find **2-Step Verification** and enable it if not already enabled
4. Follow the prompts to set up 2-Step Verification

### Step 2: Generate an App Password

1. After enabling 2-Step Verification, go back to **Security**
2. Find the **2-Step Verification** section and click on it
3. Scroll down to **App passwords** at the bottom
4. Click on **App passwords**
5. You may need to sign in again
6. Select **Mail** as the app and **Other** as the device
7. Enter a name like "Portfolio Contact Form"
8. Click **Generate**
9. Google will show you a 16-character password - **copy this immediately** (you won't be able to see it again)

### Step 3: Configure Backend Environment Variables

1. In the `backend` folder, copy `.env.example` to create a `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and update these variables:
   ```env
   # Replace with your Gmail address
   EMAIL_USER=your-email@gmail.com
   
   # Replace with the 16-character app password from Step 2
   EMAIL_PASS=xxxx xxxx xxxx xxxx
   
   # Where contact form emails should be sent (defaults to sebastianhilger9@gmail.com)
   RECIPIENT_EMAIL=sebastianhilger9@gmail.com
   ```

3. Save the `.env` file

### Step 4: Restart the Backend Server

If your backend server is running, restart it so it picks up the new environment variables:

```bash
cd backend
npm run dev
```

## Testing

1. Go to your portfolio website's contact page
2. Fill out and submit the contact form
3. Check your email inbox - you should receive an email notification with the form details

## Troubleshooting

### Email not being sent

- Check that `EMAIL_USER` and `EMAIL_PASS` are correctly set in your `.env` file
- Make sure you're using an **App Password**, not your regular Gmail password
- Check the backend console for error messages
- Verify that 2-Step Verification is enabled on your Google Account

### "Less secure app access" message

- This setting no longer applies for Gmail. You must use App Passwords (as described above)
- Regular passwords won't work even with "Less secure app access" enabled

### Email goes to spam

- The first email might go to spam. Check your spam folder and mark it as "Not spam"
- Add your email address to your contacts to ensure future emails are delivered to your inbox

## Alternative Email Providers

If you're not using Gmail, you can configure other SMTP providers by modifying `backend/src/services/emailService.ts`. Replace the Gmail configuration with your provider's SMTP settings.

Example for Outlook/Hotmail:
```typescript
service: 'hotmail'
```

Example for custom SMTP:
```typescript
host: 'smtp.example.com',
port: 587,
secure: false,
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
}
```

## Security Notes

- **Never commit your `.env` file to version control** (it's already in `.gitignore`)
- App passwords are specific to your app and can be revoked at any time from your Google Account settings
- If you think your app password has been compromised, revoke it immediately and generate a new one
