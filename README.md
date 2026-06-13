# Personal Portfolio Website

A modern personal portfolio built with Next.js 15, showcasing full-stack development and design skills. Features project case studies, an MDX blog, contact form with email delivery, and dark/light theme support.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Blog:** MDX via `next-mdx-remote`
- **Contact:** Supabase storage with optional Resend email and mailto fallback
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Site URL for metadata and sitemap |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes (contact) | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes (contact) | Service role key for server-side inserts (keep secret) |
| `RESEND_API_KEY` | No | Resend API key for contact form email notifications |
| `CONTACT_EMAIL` | No | Destination email when Resend is enabled |

### Supabase setup

1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Run the migration in `supabase/migrations/001_contact_submissions.sql` via the Supabase SQL editor (or Supabase CLI).
3. Copy your project URL and **service role** key into `.env.local`.

Submissions are stored in the `contact_submissions` table. Row Level Security is enabled with no public policies — only the server API route writes data using the service role key.

Without Supabase or Resend configured, the contact form logs submissions server-side and shows a mailto fallback.

## Project Structure

```
app/                  # Next.js App Router pages
components/ui/        # Reusable UI components
components/sections/    # Page sections (Hero, Nav, etc.)
content/projects/     # Project data (JSON)
content/blog/         # Blog posts (MDX)
lib/                  # Data helpers and utilities
public/               # Static assets (resume.pdf, images)
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization

1. **Personal info:** Edit `lib/utils.ts` (`siteConfig`)
2. **Projects:** Add/edit JSON files in `content/projects/`
3. **Blog posts:** Add MDX files to `content/blog/`
4. **Resume:** Replace `public/resume.pdf`
5. **Images:** Add screenshots to `public/images/`
6. **Accent color:** Update indigo tokens in `app/globals.css` and components

## Deployment

This repo uses GitHub Actions (`.github/workflows/deploy.yml`) to lint, build, and deploy to Vercel on pushes to `master` or `main`.

### GitHub setup

Repository: [github.com/vanshaj7-hub/test](https://github.com/vanshaj7-hub/test)

1. Create a Vercel project linked to this repo (or import it in the [Vercel dashboard](https://vercel.com)).
2. Add **Actions secrets** in GitHub (**Settings → Secrets and variables → Actions**):
   - `VERCEL_TOKEN` — from [Vercel account tokens](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID` — from Vercel project **Settings → General**
   - `VERCEL_PROJECT_ID` — from Vercel project **Settings → General**
3. Add **Actions variable**:
   - `NEXT_PUBLIC_SITE_URL` — your production URL (e.g. `https://your-app.vercel.app`)
4. Add production env vars in Vercel (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, etc.).

Pushes to `master` run CI on every commit and deploy to Vercel production when checks pass.

### Manual deploy

```bash
npx vercel
```

Set environment variables in the Vercel dashboard. Update `NEXT_PUBLIC_SITE_URL` to your Vercel subdomain or custom domain.

## License

Private — all rights reserved.
