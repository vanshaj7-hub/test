# Personal Portfolio Website

A modern personal portfolio built with Next.js 15, showcasing full-stack development and design skills. Features project case studies, an MDX blog, contact form with Supabase storage, and dark/light theme support.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Blog:** MDX via `next-mdx-remote`
- **Contact:** Supabase storage with optional Resend email and mailto fallback
- **Deployment:** Vercel via GitHub Actions

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
2. Run the migration in `supabase/migrations/001_contact_submissions.sql` via the Supabase SQL editor.
3. Copy your project URL and **service role** key into `.env.local`.

Without Supabase or Resend configured, the contact form logs submissions server-side and shows a mailto fallback.

## Project Structure

```
app/                    # Next.js App Router pages
components/ui/          # Reusable UI components
components/sections/      # Page sections (Hero, Nav, etc.)
content/projects/         # Project data (JSON)
content/blog/             # Blog posts (MDX)
docs/PRD.md               # Archived product spec
lib/                      # Data helpers and utilities
public/                   # Static assets (resume.pdf, images)
supabase/migrations/      # Database migrations
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization

1. **Personal info:** Edit `lib/site.ts` (`siteConfig`)
2. **Skills:** Edit `lib/skills.ts`
3. **Projects:** Add/edit JSON files in `content/projects/`
4. **Blog posts:** Add MDX files to `content/blog/`
5. **Resume:** Replace `public/resume.pdf`
6. **Images:** Add screenshots to `public/images/`
7. **Accent color:** Update indigo tokens in `app/globals.css`

## Deployment

Pushes to `master` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — CI (lint + build) then production deploy to Vercel.

Repository: [github.com/vanshaj7-hub/test](https://github.com/vanshaj7-hub/test)

For secrets, env vars, and Vercel setup details, see the Cursor rule [`.cursor/rules/github-deployment.mdc`](.cursor/rules/github-deployment.mdc).

Manual deploy:

```bash
npx vercel
```

## License

Private — all rights reserved.
