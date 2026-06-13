import { NextRequest, NextResponse } from "next/server";
import { isResendConfigured, sendContactEmail } from "@/lib/contact/email";
import { checkRateLimit } from "@/lib/contact/rateLimit";
import { validateContactBody } from "@/lib/contact/validate";
import { saveContactSubmission } from "@/lib/supabase/server";

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

    const validation = validateContactBody(await request.json());

    if (!validation.ok) {
      return NextResponse.json(
        { error: validation.error },
        { status: validation.status }
      );
    }

    if (validation.honeypot) {
      return NextResponse.json({
        message: "Thank you! Your message has been sent.",
      });
    }

    const { name, email, subject, message } = validation.data;

    const supabaseResult = await saveContactSubmission({
      name,
      email,
      subject,
      message,
      ip_address: ip === "unknown" ? null : ip,
    });

    let emailSent = false;

    if (isResendConfigured()) {
      try {
        await sendContactEmail({ name, email, subject, message });
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

    console.log("[Contact Form]", { name, email, subject, message });

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
