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
 * Markets self-serve checkout (Creem, live 2026-07-19). Fulfillment is
 * founder-touched per the lifecycle playbook: /welcome sets the one-business-
 * day expectation, so this does not depend on the app signup launch gate.
 * When billing linkage lands in the app, checkout hands off to signup instead.
 */
export const MARKETS_START_URL =
  "https://www.creem.io/payment/prod_2N5qJIZuziOzFUnuhqh3lH";

/** Markets annual: 12 months for the price of 10. */
export const MARKETS_ANNUAL_URL =
  "https://www.creem.io/payment/prod_6dbVKduZTPA4CwnqCaeM8o";

/**
 * Canonical two-rung ladder, ratified 2026-07-16 (agency-os docs/decisions.md).
 * Markets: $199 flat for 1 to 15, self-serve; published bands above 15
 * (2026-09-02). Agency: same product at every price, priced by agency size
 * only. No per-seat fees, no feature gates between bands. Above 50: custom.
 */
export const PRICING = {
  markets: {
    monthly: 199,
    /** 12 months for the price of 10 (ratified 2026-07-19). */
    annual: 1990,
    seats: "1 to 15 people",
    /**
     * Markets above 15 people (ratified 2026-09-02, Justin's pricing
     * analysis). Published, demo-first at this size, no self-serve checkout.
     * Above 50: custom, quoted live. Annual terms for these bands are not
     * yet ratified, so the site shows monthly only.
     */
    large: [
      { monthly: 399, seats: "16 to 25 people" },
      { monthly: 599, seats: "26 to 35 people" },
      { monthly: 799, seats: "36 to 50 people" },
    ],
  },
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
