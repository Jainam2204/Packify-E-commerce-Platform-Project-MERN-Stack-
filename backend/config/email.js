import dotenv from 'dotenv';

dotenv.config();
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection failed:', error);
  } else {
    console.log('SMTP server is ready to take messages');
  }
});


export default transporter;
