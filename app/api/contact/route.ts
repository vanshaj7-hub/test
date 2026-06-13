import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { saveContactSubmission } from "@/lib/supabase/server";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) {
    return false;
  }

  entry.count++;
  return true;
}

function isResendConfigured(): boolean {
  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  return Boolean(
    resendKey &&
      contactEmail &&
      !resendKey.startsWith("re_xxxx")
  );
}

async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const resendKey = process.env.RESEND_API_KEY!;
  const contactEmail = process.env.CONTACT_EMAIL!;
  const resend = new Resend(resendKey);

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: contactEmail,
    replyTo: email,
    subject: subject || `Portfolio contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\n${message}`,
  });
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, website } = body;

    if (website) {
      return NextResponse.json({
        message: "Thank you! Your message has been sent.",
      });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim();
    const trimmedSubject = subject ? String(subject).trim() : null;
    const trimmedMessage = String(message).trim();

    const supabaseResult = await saveContactSubmission({
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
      ip_address: ip === "unknown" ? null : ip,
    });

    let emailSent = false;

    if (isResendConfigured()) {
      try {
        await sendContactEmail({
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject || undefined,
          message: trimmedMessage,
        });
        emailSent = true;
      } catch (error) {
        console.error("[Contact Email Error]", error);

        if (!supabaseResult.ok) {
          throw error;
        }
      }
    }

    if (supabaseResult.ok) {
      return NextResponse.json({
        message: emailSent
          ? "Thank you! Your message has been sent successfully."
          : "Thank you! Your message has been received.",
      });
    }

    if (emailSent) {
      return NextResponse.json({
        message: "Thank you! Your message has been sent successfully.",
      });
    }

    console.log("[Contact Form]", {
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
    });

    return NextResponse.json({
      message:
        "Thank you! Your message has been received. Delivery is not configured — please use the mailto link if you need a direct response.",
      fallback: "mailto",
    });
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email directly." },
      { status: 500 }
    );
  }
}
