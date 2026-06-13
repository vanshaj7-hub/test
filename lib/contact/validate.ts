const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormPayload = {
  name: string;
  email: string;
  subject: string | null;
  message: string;
};

type ValidationResult =
  | { ok: true; data: ContactFormPayload; honeypot: boolean }
  | { ok: false; status: number; error: string };

export function validateContactBody(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, status: 400, error: "Invalid request body." };
  }

  const { name, email, subject, message, website } = body as Record<string, unknown>;

  if (website) {
    return {
      ok: true,
      honeypot: true,
      data: { name: "", email: "", subject: null, message: "" },
    };
  }

  if (!name || !email || !message) {
    return {
      ok: false,
      status: 400,
      error: "Name, email, and message are required.",
    };
  }

  const trimmedEmail = String(email).trim();
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return {
      ok: false,
      status: 400,
      error: "Please provide a valid email address.",
    };
  }

  return {
    ok: true,
    honeypot: false,
    data: {
      name: String(name).trim(),
      email: trimmedEmail,
      subject: subject ? String(subject).trim() : null,
      message: String(message).trim(),
    },
  };
}
