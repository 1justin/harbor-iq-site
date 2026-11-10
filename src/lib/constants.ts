/** TidyCal booking page (the calendar itself). Used by the /demo embed and reschedule links. */
export const DEMO_URL = "https://tidycal.com/cjmayer/harboriq-demo";
export const TIDYCAL_PATH = "cjmayer/harboriq-demo";

/**
 * Where every "Book a demo" button points (2026-09-02). The on-site page
 * captures name and email before the calendar, so a prospect who drops off
 * before picking a time is still a lead. Booking still happens on TidyCal.
 */
export const DEMO_PAGE = "/demo";
// Carrier track (2026-11-03): where the carrier watch page sends a rep to book.
// The 15-minute carrier TidyCal type (created 2026-11-03).
export const CARRIER_BOOKING_URL = "https://tidycal.com/cjmayer/harboriq-intro-for-carriers";

export const SITE_URL = "https://harboriq.co";

/**
 * Markets ($199 flat) was retired on the site 2026-10-28 for Intelligence.
 * Its Creem checkout products still exist and are no longer linked anywhere:
 * monthly prod_2N5qJIZuziOzFUnuhqh3lH, annual prod_6dbVKduZTPA4CwnqCaeM8o.
 * What happens to existing Markets subscribers is an open decision
 * (agency-os docs/decisions.md, 2026-10-28).
 */

/**
 * Agency OS pricing (two-rung ladder ratified 2026-07-16; Markets rung retired
 * 2026-10-28). Same product at every price, priced by agency size only. No
 * per-seat fees, no feature gates between bands. Above 50: custom.
 */
export const PRICING = {
  agency: {
    /** Agency annual = 11 x monthly, plus the book import free. */
    solo: { monthly: 199, annual: 2189, seats: "Solo" },
    team: { monthly: 399, annual: 4389, seats: "2 to 5 people" },
    os: { monthly: 599, annual: 6589, seats: "6 to 15 people" },
  },
  /**
   * 16-50 bands published 2026-08-09 (decisions.md). Demo-gated: prices are
   * public, checkout links come after the demo (Creem products to follow).
   * Above 50: custom, quoted live.
   */
  large: [
    { monthly: 899, annual: 9889, seats: "16 to 25 people" },
    { monthly: 1199, annual: 13189, seats: "26 to 35 people" },
    { monthly: 1499, annual: 16489, seats: "36 to 50 people" },
  ],
} as const;

/**
 * HarborIQ Intelligence. Per agency, not per person. One check is one ordinary
 * carrier question and its source-backed answer. Annual keeps the same 300
 * checks each month; it does not front-load 3,600.
 *
 * `monthly` and `annual` are the STANDARD price ($49 and $490, set 2026-11-10;
 * $29 and $290 before that, ratified 2026-10-28). Evergreen copy, schema and
 * comparisons use the standard price, because that is the price that lasts.
 * The introductory offer lives in `intro` and is shown only where `introActive()`
 * is true: agencies that start a paid subscription by `intro.until` pay
 * `intro.monthly` (or `intro.annual` for the first year) for their first
 * `intro.months` months. A price guarantee, not a contract: cancel any time.
 * Annual is 10x monthly (two months free) at both prices.
 */
export const INTELLIGENCE = {
  monthly: 49,
  annual: 490,
  /** 12 x $49 minus $490. */
  annualSavings: 98,
  checksPerMonth: 300,
  pack: { price: 10, checks: 100 },
  intro: {
    monthly: 29,
    annual: 290,
    /** 12 x $29 minus $290. */
    annualSavings: 58,
    months: 12,
    /** Last day to start a paid subscription at the introductory price. */
    until: "2026-12-31",
    /** Human-readable form for copy. */
    untilLabel: "December 31, 2026",
  },
} as const;

/**
 * True through the end of INTELLIGENCE.intro.until, Central time. Pages that
 * call this must revalidate (see `INTRO_REVALIDATE_SECONDS`) so the offer
 * disappears on its own instead of waiting for the next deploy.
 */
export function introActive(now: Date = new Date()): boolean {
  const end = new Date(`${INTELLIGENCE.intro.until}T23:59:59-06:00`);
  return now.getTime() <= end.getTime();
}

/** Pages showing the introductory offer re-render at least this often. */
export const INTRO_REVALIDATE_SECONDS = 3600;

/** The price a visitor would pay today: introductory while the offer lasts, else standard. */
export function currentIntelligenceMonthly(now: Date = new Date()): number {
  return introActive(now) ? INTELLIGENCE.intro.monthly : INTELLIGENCE.monthly;
}

/**
 * What is live. Flip a flag only when the product path behind it exists.
 * Until then, free and Intelligence CTAs go to the /demo capture page with a
 * source tag, so every click is still a lead.
 */
export const LAUNCH = {
  /** ChatGPT connection: no present-tense claim until it ships. */
  chatgpt: false,
  /**
   * Free CRM (clients, pipeline, renewals, follow-ups) open to the free rung in
   * the app. Until the app gate split ships, free agencies cannot open those
   * routes, so no page may say "free CRM". Flip only when the app session
   * "Ship the free CRM in the app" is merged and verified in production.
   */
  freeCrm: false,
  /** Free workspace and marketplace pages: noindex and out of the sitemap until live. */
  freeWorkspaceIndexed: true,
  marketplaceIndexed: false,
} as const;

export const SIGNUP_PAGE = "/start";
export const START_FREE_URL = SIGNUP_PAGE;
export const START_INTELLIGENCE_URL = `${SIGNUP_PAGE}?plan=intelligence`;
export const AGENCY_OS_DEMO_URL = `${DEMO_PAGE}?src=agency-os`;
/** Self-serve free signup in the app. No personal data in the URL; src is attribution only. */
export const APP_FREE_SIGNUP_URL = "https://app.harboriq.co/signup?plan=free&src=start";
export const LIST_AGENCY_URL = `${SIGNUP_PAGE}?goal=profile`;

/** Book import: the upgrade moment, not an onboarding SKU. */
export const IMPORT_TERMS = {
  annual: "Annual prepay: a month free, and the book import free",
  monthly: "One month's fee for the import on monthly",
} as const;

/** Returns the honest Agency band for a given team size (1-15). */
export function agencyBandFor(size: number) {
  if (size <= 1) return PRICING.agency.solo;
  if (size <= 5) return PRICING.agency.team;
  return PRICING.agency.os;
}

/**
 * CRM overlays the ICP actually pays for today, alongside their AMS.
 * Agencies typically run ONE of these, not both. GoHighLevel base plans are
 * $97/$297/mo plus usage fees for SMS, email, and AI (gohighlevel.com/pricing,
 * checked 2026-07-18). AgencyZoom from its published starting price.
 */
export const OVERLAY_COSTS = {
  none: { label: "No CRM overlay", monthly: 0 },
  agencyzoom: { label: "AgencyZoom", monthly: 99 }, // single-location plan, seven seats, published 2026-11-09
  gohighlevel: { label: "GoHighLevel", monthly: 197 },
} as const;

/**
 * Retired 2026-07-18 with the founding-partner grid (decisions.md).
 * Kept only so any straggling reference fails loudly in review, not silently.
 * Existing founding commitments are honored at their locked rates.
 */
export const CREEM_RESERVE =
  "https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV";
