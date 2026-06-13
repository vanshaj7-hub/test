-- Contact form submissions from the portfolio site
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  ip_address text,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

alter table public.contact_submissions enable row level security;

-- No policies for anon/authenticated roles: inserts happen via the server
-- using SUPABASE_SERVICE_ROLE_KEY in the Next.js API route.
