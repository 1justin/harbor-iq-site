/**
 * Agency marketplace profiles.
 *
 * Every entry here is a FICTIONAL EXAMPLE from the 2026-10-28 website handoff.
 * They are not real agencies, listings, endorsements, or testimonials, and the
 * pages that render them are noindexed (LAUNCH.marketplaceIndexed). Real
 * profiles need identity checks, a claim/update process, and public-field
 * consent before any of this goes live.
 */
export type AgencyProfile = {
  slug: string;
  name: string;
  city: string;
  state: string;
  area: string;
  specialty: string;
  lines: string;
  intro: string;
  beforeContact: string;
  /** Lowercase words a search can match. */
  keywords: string;
  example: true;
};

export const EXAMPLE_PROFILES: AgencyProfile[] = [
  {
    slug: "sample-chicago-agency",
    name: "Sample Chicago agency",
    city: "Chicago",
    state: "Illinois",
    area: "Chicago and nearby Illinois communities",
    specialty: "Contractors & small business",
    lines: "Contractors, general liability, commercial auto, home and auto",
    intro:
      "For contractors looking for help with business insurance. This example shows how a profile explains the kinds of work an agency handles before you get in touch.",
    beforeContact:
      "Tell the agency what kind of work you do, where you operate, and what coverage you need. The agency confirms availability, eligibility, and coverage.",
    keywords: "contractor contractors construction trades electrician plumber general liability commercial auto business homeowners home auto",
    example: true,
  },
  {
    slug: "sample-evanston-agency",
    name: "Sample Evanston agency",
    city: "Evanston",
    state: "Illinois",
    area: "Evanston and the North Shore, Illinois",
    specialty: "Restaurants & hospitality",
    lines: "Restaurants, business property, general liability, liquor liability",
    intro:
      "For restaurant and hospitality owners exploring coverage. A useful profile names the businesses served and gives you a direct way to ask about your situation.",
    beforeContact:
      "Tell the agency about your business, premises, opening date, and any existing policies. The agency confirms availability, eligibility, and coverage.",
    keywords: "restaurant restaurants cafe cafes hospitality food business liability liquor property",
    example: true,
  },
  {
    slug: "sample-naperville-agency",
    name: "Sample Naperville agency",
    city: "Naperville",
    state: "Illinois",
    area: "Naperville and DuPage County, Illinois",
    specialty: "Home, auto & small business",
    lines: "Homeowners, personal auto, small business, contractors",
    intro:
      "For households and small businesses looking for a local agency. This example shows how one profile can describe both personal and business specialties.",
    beforeContact:
      "Tell the agency what you need to insure and when you want coverage to start. The agency confirms availability, eligibility, and coverage.",
    keywords: "home homeowners auto car cars business contractors contractor commercial auto",
    example: true,
  },
];

export function findProfile(slug: string) {
  return EXAMPLE_PROFILES.find((p) => p.slug === slug) ?? null;
}
