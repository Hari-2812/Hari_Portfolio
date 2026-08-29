export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, projectType, budget, message, honeypot } = req.body;

    // Lightweight honeypot
    if (honeypot) {
      // Silently accept spam
      return res.status(200).json({ success: true, message: "Your message has been sent. I'll review your project details and get back to you." });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required parameters.' });
    }

    // Basic email regex
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email syntax.' });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
    const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || 'Hari Prasath | Freelance Software Developer';
    const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL;

    if (!BREVO_API_KEY || !BREVO_SENDER_EMAIL || !CONTACT_RECEIVER_EMAIL) {
      console.error('Server configuration error: Missing Brevo environment variables');
      return res.status(500).json({ success: false, message: 'Server configuration error.' });
    }

    const subject = projectType 
      ? `New Project Enquiry — ${projectType} — ${name}` 
      : `New Freelance Project Enquiry — ${name}`;

    // Clean html content avoiding xss via standard sanitization for emails
    const sanitizeHTML = (str) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    
    const sName = sanitizeHTML(name);
    const sEmail = sanitizeHTML(email);
    const sProjectType = projectType ? sanitizeHTML(projectType) : '';
    const sBudget = budget ? sanitizeHTML(budget) : '';
    const sMessage = sanitizeHTML(message).replace(/\n/g, '<br />');

    const htmlContent = `
      <h2>NEW PROJECT ENQUIRY</h2>
      <p><strong>Name:</strong> ${sName}</p>
      <p><strong>Email:</strong> ${sEmail}</p>
      ${sProjectType ? `<p><strong>Project Type:</strong> ${sProjectType}</p>` : ''}
      ${sBudget ? `<p><strong>Budget Range:</strong> ${sBudget}</p>` : ''}
      <br />
      <p><strong>Message:</strong></p>
      <p>${sMessage}</p>
      <br />
      <p><em>Submitted from: Portfolio Website</em></p>
    `;

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: BREVO_SENDER_NAME,
          email: BREVO_SENDER_EMAIL
        },
        to: [
          {
            email: CONTACT_RECEIVER_EMAIL,
            name: 'Hari Prasath'
          }
        ],
        replyTo: {
          email: sEmail,
          name: sName
        },
        subject: subject,
        htmlContent: htmlContent
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      return res.status(500).json({ success: false, message: 'Unable to send your message right now. Please try again.' });
    }

    return res.status(200).json({ success: true, message: "Your message has been sent. I'll review your project details and get back to you." });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, message: 'Something went wrong while sending your message. Please try again.' });
  }
}
