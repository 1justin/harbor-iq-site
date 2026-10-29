/** TidyCal booking page (the calendar itself). Used by the /demo embed and reschedule links. */
export const DEMO_URL = "https://tidycal.com/cjmayer/harboriq-demo";
export const TIDYCAL_PATH = "cjmayer/harboriq-demo";

/**
 * Where every "Book a demo" button points (2026-09-02). The on-site page
 * captures name and email before the calendar, so a prospect who drops off
 * before picking a time is still a lead. Booking still happens on TidyCal.
 */
export const DEMO_PAGE = "/demo";

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
 * HarborIQ Intelligence, ratified 2026-10-28 (agency-os docs/decisions.md).
 * Replaces Markets on the site. Per agency, not per person. One check is one
 * ordinary carrier question and its source-backed answer. Annual keeps the
 * same 300 checks each month; it does not front-load 3,600.
 */
export const INTELLIGENCE = {
  monthly: 29,
  annual: 290,
  /** 12 x $29 minus $290. */
  annualSavings: 58,
  checksPerMonth: 300,
  pack: { price: 10, checks: 100 },
} as const;

/**
 * What is live. Flip a flag only when the product path behind it exists.
 * Until then, free and Intelligence CTAs go to the /demo capture page with a
 * source tag, so every click is still a lead.
 */
export const LAUNCH = {
  /** ChatGPT connection: no present-tense claim until it ships. */
  chatgpt: false,
  /** Free workspace and marketplace pages: noindex and out of the sitemap until live. */
  freeWorkspaceIndexed: false,
  marketplaceIndexed: false,
} as const;

export const SIGNUP_PAGE = "/start";
export const START_FREE_URL = SIGNUP_PAGE;
export const START_INTELLIGENCE_URL = `${SIGNUP_PAGE}?plan=intelligence`;
export const AGENCY_OS_DEMO_URL = `${DEMO_PAGE}?src=agency-os`;
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
  agencyzoom: { label: "AgencyZoom", monthly: 79 },
  gohighlevel: { label: "GoHighLevel", monthly: 197 },
} as const;

/**
 * Retired 2026-07-18 with the founding-partner grid (decisions.md).
 * Kept only so any straggling reference fails loudly in review, not silently.
 * Existing founding commitments are honored at their locked rates.
 */
export const CREEM_RESERVE =
  "https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV";
