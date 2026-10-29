# HarborIQ marketing site

Marketing/landing site for HarborIQ (harboriq.co — the canonical business domain; getharboriq.com is the cold-email sending domain only, never referenced on the site). Next.js 16, React 19, TypeScript. Deploys via Vercel project `harbor-iq-site`.

## Rules
- ALL copy follows `../../_claude-training/harboriq-brand-voice-guide.md`. Operator voice, not salesperson. Banned: "AI-first", "transform your agency".
- Pricing shown must match canon (see `../agency-os/docs/decisions.md`). Three starting points, ratified 2026-10-28: **Free Agency Workspace $0 per agency** · **Intelligence $29 per agency/month or $290/year billed upfront, 300 carrier checks each month shared across the agency, optional $10 packs of 100 checks, no automatic top-ups** · **Agency OS $199 solo / $399 (2-5) / $599 (6-15) / $899 (16-25) / $1,199 (26-35) / $1,499 (36-50), demo-gated, identical features at every price**. Never apply Intelligence pricing or allowances to Agency OS. Free check and upload quantities, the document-library allowance, and pack rollover are not yet set: never publish a number or a bracketed placeholder for them. Markets ($199 flat) is retired as of 2026-10-28; pages that still say it are wrong. Above 50: custom, quoted live. Agency annual = 11x monthly with free book import; one month's fee for the import on monthly. No founding grid, no per-seat pricing, ever. If the site disagrees with this, the site is wrong; flag it.
- Launch gates live in `LAUNCH` in `src/lib/constants.ts`. Self-serve free signup, Intelligence checkout, and the ChatGPT connection do not exist yet. "Start free" and "Start Intelligence" go to the `/start` signup page (see below), Agency OS CTAs go to `/demo`, and the ChatGPT section stays off until it ships. The free workspace and marketplace pages are noindexed and kept out of the sitemap until their product paths exist. Marketplace profiles are fictional examples, never presented as real agencies.
- Roadmap features are never published as "coming soon" unless Justin explicitly says so (e.g. ACORD forms: verbal on demos until shipped, then present-tense FAQ only). Structural pricing facts may say "never"; behavioral outcome promises are written as present-tense facts (see the Promises section of the voice guide, decisions 2026-08-23).
- This is a HarborIQ asset (sale-clean rule applies): no personal, Sterling, or WRKSTREAM-workspace references.
- Site design/copy working files live in `../../Websites/harboriq/`.

## Context
Product context: `../agency-os/CLAUDE.md` and `../agency-os/docs/harboriq-prd.md`. Strategy: Notion HarborIQ Hub. ICP: independent P&C agency owners, 5-15 staff, skeptical of vendors.

## Demo concierge (/demo-prep, added 2026-08-26)
- Post-booking AI qualification concierge. TidyCal's confirmation redirect points here; optional query params `name`, `email`, `time`, `tz`, `src` (channel attribution), `ref`. Everything degrades gracefully when absent, and a concierge failure never affects the booking.
- Server side: `/api/concierge` (`src/app/api/concierge/route.ts`). Conversation runs on `claude-sonnet-5` with structured outputs; the founder briefing is generated on `claude-haiku-4-5` and emailed via Resend's HTTP API.
- Data lands in the sales database through `concierge_*` RPC functions (service-role only; the schema itself is not exposed to PostgREST). Which Supabase project that is lives in workspace-level docs, not here.
- Required env vars (Vercel): `ANTHROPIC_API_KEY`, `SALES_DB_URL`, `SALES_DB_SERVICE_KEY`, `BRIEFING_EMAIL_TO`. Optional: `RESEND_API_KEY` (briefing email is skipped without it), `BRIEFING_EMAIL_FROM`.
- Static export was retired 2026-08-26 to allow this API route; marketing pages still prerender static and nothing about their output changed.

## Demo booking page (/demo, added 2026-09-02)
- Every "Book a demo" button on the site points at `/demo` (`DEMO_PAGE` in `src/lib/constants.ts`), not at TidyCal directly. The page asks for first name, work email, and an optional agency name, then shows the TidyCal calendar inline with name and email prefilled. Whistle's ask: a prospect who drops off before picking a time is still a lead.
- `/api/demo-intent` (`src/app/api/demo-intent/route.ts`) writes the record through the `concierge_capture_intent` RPC (a person, an optional organization, and a `demo_bookings` row with status `intent`) and emails Justin one line via Resend. It always answers 200 and the client shows the calendar whether or not it succeeded; the capture is never a reason not to book.
- TidyCal's confirmation redirect still lands on `/demo-prep`, so the concierge is unchanged. `DEMO_URL` (the raw TidyCal link) remains for the reschedule link and the "open in a new tab" fallback.
- Optional `?src=` on `/demo` carries channel attribution into the record (lowercase, letters, digits, hyphens; anything else falls back to `site`).

## Signup page (/start, added 2026-10-28)
- `START_FREE_URL` (`/start`), `START_INTELLIGENCE_URL` (`/start?plan=intelligence`), and `LIST_AGENCY_URL` (`/start?goal=profile`) in `src/lib/constants.ts`. Optional `?goal=` (markets, contacts, deadlines, profile) preselects the first task from the `/free` picker.
- Asks for first name, work email, optional agency, optional first task. Signups are set up by hand until self-serve exists, so the confirmation promises an email to set up the workspace, and for Intelligence that nothing is charged until they confirm.
- `/api/signup` (`src/app/api/signup/route.ts`) reuses `concierge_capture_intent`, so a signup lands as a `demo_bookings` row with status `intent`; the source tag tells it apart: `free-workspace`, `free-<goal>`, or `intelligence`. It emails Justin one line via Resend. Unlike `/api/demo-intent` it reports failure, and the form then shows a retry and team@wrkstream.com.
- Duplicate flag: before saving, `/api/signup` calls `concierge_find_prior_signups` (same email, same non-freemail domain, or same agency name after dropping words like Insurance/Agency/LLC) and marks the alert email "[possible duplicate]" with the earlier signups. Visitors never see it. The function is defined in `db/2026-10-28_concierge_find_prior_signups.sql` (applied to the sales database 2026-10-28, service_role only); if the lookup ever fails it is skipped and the signup still saves.
- Noindexed with the free workspace launch gate.
