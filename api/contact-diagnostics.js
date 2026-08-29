export default async function handler(req, res) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
  const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME;
  const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL;

  const configStatus = {
    brevoApiKeyConfigured: !!BREVO_API_KEY,
    senderEmailConfigured: !!BREVO_SENDER_EMAIL,
    senderNameConfigured: !!BREVO_SENDER_NAME,
    recipientEmailConfigured: !!CONTACT_RECEIVER_EMAIL
  };

  if (!BREVO_API_KEY) {
    return res.status(200).json({ configStatus, error: 'API key is missing, skipping API test' });
  }

  try {
    // Step 1: Test account
    const accountResponse = await fetch('https://api.brevo.com/v3/account', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY
      }
    });

    const accountStatus = accountResponse.status;
    const accountData = await accountResponse.json().catch(() => ({}));

    // Step 2: Test smtp email
    let smtpStatus = null;
    let smtpData = null;

    if (accountResponse.ok) {
      const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY
        },
        body: JSON.stringify({
          sender: {
            name: BREVO_SENDER_NAME || 'Hari Prasath | Freelance Software Developer',
            email: BREVO_SENDER_EMAIL || 'test@example.com' // Fallback for test if not set
          },
          to: [
            { email: CONTACT_RECEIVER_EMAIL || 'recipient@example.com' }
          ],
          replyTo: { email: 'visitor@example.com' },
          subject: 'Portfolio Email Delivery Test',
          htmlContent: '<p>This is a production email delivery test.</p>'
        })
      });

      smtpStatus = emailResponse.status;
      smtpData = await emailResponse.json().catch(() => ({}));
    }

    return res.status(200).json({
      configStatus,
      brevoAccount: { status: accountStatus, response: accountData },
      brevoSmtp: { status: smtpStatus, response: smtpData }
    });
  } catch (error) {
    return res.status(500).json({ configStatus, error: error.message });
  }
}
