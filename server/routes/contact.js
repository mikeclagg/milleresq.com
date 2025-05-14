const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Environment variables for email configuration
const EMAIL_USER = process.env.EMAIL_USER || 'your-email@example.com';
const EMAIL_PASS = process.env.EMAIL_PASS || '';
const EMAIL_TO = process.env.EMAIL_TO || 'meghan@milleresq.com';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

// Validate contact form data
const validateContactForm = (data) => {
  const errors = {};
  
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  }
  
  if (!data.email || data.email.trim() === '') {
    errors.email = 'Email is required';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
  }
  
  if (!data.phone || data.phone.trim() === '') {
    errors.phone = 'Phone number is required';
  }
  
  if (!data.subject || data.subject.trim() === '') {
    errors.subject = 'Subject is required';
  }
  
  if (!data.message || data.message.trim() === '') {
    errors.message = 'Message is required';
  }
  
  if (!data.agreeToTerms) {
    errors.agreeToTerms = 'You must agree to the terms and conditions';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// POST route to handle form submissions
router.post('/', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate form data
    const { isValid, errors } = validateContactForm(formData);
    
    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }
    
    // Prepare email content
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `Website Contact Form: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        ${formData.caseType ? `<p><strong>Case Type:</strong> ${formData.caseType}</p>` : ''}
        ${formData.howDidYouHear ? `<p><strong>How They Found Us:</strong> ${formData.howDidYouHear}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Send confirmation email to client
    const confirmationMailOptions = {
      from: EMAIL_USER,
      to: formData.email,
      subject: 'Thank you for contacting Meghan A Miller, Esq.',
      html: `
        <h2>Thank You for Contacting Us</h2>
        <p>Dear ${formData.name},</p>
        <p>Thank you for reaching out to the Law Office of Meghan A Miller. We have received your inquiry and will respond as soon as possible, typically within 1-2 business days.</p>
        <p>For urgent matters, please call our office at (415) 815-8915.</p>
        <p><strong>Your Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>This is an automated response. Please do not reply to this email.</p>
        <p>
          <strong>Meghan A Miller, Esq.</strong><br>
          Arizona Family Law Attorney<br>
          Phone: (415) 815-8915<br>
          Email: meghan@milleresq.com<br>
          Website: <a href="https://milleresq.com">milleresq.com</a>
        </p>
      `
    };
    
    await transporter.sendMail(confirmationMailOptions);
    
    // Send success response
    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully'
    });
    
  } catch (error) {
    console.error('Contact Form Error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'production' ? {} : error
    });
  }
});

module.exports = router;
