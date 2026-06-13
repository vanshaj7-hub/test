import { createClient, SupabaseClient } from "@supabase/supabase-js";

export type ContactSubmission = {
  name: string;
  email: string;
  subject: string | null;
  message: string;
  ip_address: string | null;
};

let adminClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  if (!adminClient) {
    adminClient = createClient(url, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return adminClient;
}

export async function saveContactSubmission(
  submission: ContactSubmission
): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return { ok: false, error: "Supabase is not configured" };
  }

  const { error } = await supabase.from("contact_submissions").insert(submission);

  if (error) {
    console.error("[Supabase Contact Error]", error);
    return { ok: false, error: error.message };
  }

  return { ok: true };
}
