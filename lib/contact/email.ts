import { Resend } from "resend";

const RESEND_PLACEHOLDER_PREFIX = "re_xxxx";
const RESEND_FROM = "Portfolio Contact <onboarding@resend.dev>";

export function isResendConfigured(): boolean {
  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  return Boolean(
    resendKey &&
      contactEmail &&
      !resendKey.startsWith(RESEND_PLACEHOLDER_PREFIX)
  );
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject?: string | null;
  message: string;
}) {
  const resendKey = process.env.RESEND_API_KEY!;
  const contactEmail = process.env.CONTACT_EMAIL!;
  const resend = new Resend(resendKey);

  await resend.emails.send({
    from: RESEND_FROM,
    to: contactEmail,
    replyTo: email,
    subject: subject || `Portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\n${message}`,
  });
}
