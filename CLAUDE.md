# HarborIQ marketing site

Marketing/landing site for HarborIQ (harboriq.co — the canonical business domain; getharboriq.com is the cold-email sending domain only, never referenced on the site). Next.js 16, React 19, TypeScript. Deploys via Vercel project `harbor-iq-site`.

## Rules
- ALL copy follows `../../_claude-training/harboriq-brand-voice-guide.md`. Operator voice, not salesperson. Banned: "AI-first", "transform your agency".
- Pricing shown must match the canonical two-rung ladder (ratified 2026-07-16, see `../agency-os/docs/decisions.md`): **Markets $199/mo flat, any size 1-15, self-serve** · **Agency $199 solo / $399 (2-5) / $599 (6-15), demo-gated, identical features at every price**. 16-50 published too (ratified 2026-08-09): **$899 (16-25) / $1,199 (26-35) / $1,499 (36-50), demo-first, no self-serve checkout yet (Creem links pending)**. Above 50: custom, quoted live. Free book import on annual prepay, one month's fee on monthly. No founding grid, no per-seat pricing, ever. If the site disagrees with this, the site is wrong; flag it.
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
