# Contact Form Setup with Brevo

To enable real email delivery from the portfolio contact form, you must configure the following environment variables in your deployment environment (e.g., Vercel).

## 1. Brevo Account Setup
1. Create or sign in to your [Brevo](https://www.brevo.com/) account.
2. Navigate to **Transactional Email** and verify your sender email or domain.
3. Generate a new API key under **SMTP & API**.

## 2. Environment Variables
Add the following variables to your production environment settings (do **not** commit these to the repository):

- `BREVO_API_KEY`: Your generated Brevo API key.
- `BREVO_SENDER_EMAIL`: The verified email address from which the emails will be sent.
- `BREVO_SENDER_NAME`: The name that will appear as the sender (e.g., "Hari Prasath — Portfolio").
- `CONTACT_RECEIVER_EMAIL`: Your personal or professional email address where you want to receive the contact form submissions.

### Local Development
To test locally, create a `.env` file in the root of the project with the above variables based on the `.env.example` structure.

## 3. Redeploy and Test
1. After adding the variables to your deployment environment, redeploy the application.
2. Go to the portfolio contact section and submit a test enquiry.
3. Check your `CONTACT_RECEIVER_EMAIL` inbox for the email.
4. Verify that the "Reply-To" address matches the visitor's email address.
