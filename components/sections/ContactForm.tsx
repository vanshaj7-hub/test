"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/lib/utils";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [usedMailto, setUsedMailto] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage(data.message);
      setUsedMailto(data.fallback === "mailto");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Failed to send message");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <Input name="name" label="Name" required autoComplete="name" />
        <Input
          name="email"
          label="Email"
          type="email"
          required
          autoComplete="email"
        />
        <Input name="subject" label="Subject" autoComplete="off" />
        <Textarea name="message" label="Message" required />

        <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {status === "success" && (
        <div
          className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-200"
          role="status"
        >
          <p>{message}</p>
          {usedMailto && (
            <p className="mt-2">
              Or email directly:{" "}
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="font-medium underline"
              >
                {siteConfig.links.email}
              </a>
            </p>
          )}
        </div>
      )}

      {status === "error" && (
        <div
          className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
          role="alert"
        >
          <p>{message}</p>
          <p className="mt-2">
            You can also reach me at{" "}
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="font-medium underline"
            >
              {siteConfig.links.email}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
