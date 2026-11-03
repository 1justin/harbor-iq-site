/**
 * Single source of truth for marketing testimonials.
 * Consumed by src/components/TestimonialCards.tsx today.
 * Reusable for a future /customers page.
 *
 * If a headshot or logo is missing on disk, the card still renders
 * with a neutral placeholder tile. Drop the file at the referenced
 * path and the placeholder swaps out.
 */

export type Testimonial = {
  slug: string;
  name: string;
  role: string;
  agency: string;
  headshot?: string;
  logo?: string;
  /**
   * True when the supplied logo art is white (designed for dark
   * backgrounds). The card renders it inside a small dark badge so it
   * stays legible on the paper card surface.
   */
  logoOnDark?: boolean;
  quote: string;
  callouts?: string[];
  /**
   * True when the quote is a faithful composite drawn from recorded
   * meeting reactions rather than a single verbatim statement.
   * Not surfaced on the site. Visible to code reviewers for provenance.
   */
  composite?: boolean;
  compositeNote?: string;
};

export const testimonials: Testimonial[] = [
  // Amanda Hausman (Pekin) card removed 2026-07-18 pending permission to
  // publish; quote preserved in git history. Restore only with written OK.
  {
    slug: "alex-ricketts",
    name: "Alex Ricketts",
    role: "Office Manager",
    agency: "Sertler and Associates",
    headshot: "/testimonials/alex-ricketts.jpg",
    logo: "/testimonials/sertler-associates-logo-AnuAVpdRp4WqNxvY.avif",
    quote:
      "Finding the right carrier is now as easy as a Google search. Our team spends its time binding policies, not clicking through portals.",
    callouts: ["Hours back every afternoon", "1 login, not 6"],
    composite: true,
    compositeNote:
      "Rewritten 2026-10-29 for the Intelligence positioning under Alex's blanket approval to quote her (Justin). Earlier composite of recorded demo reactions, in git history: \"...the carrier work that used to eat my afternoons is finally somebody else's problem.\"",
  },
  {
    slug: "andy-sertler",
    name: "Andy Sertler",
    role: "Owner and President",
    agency: "Sertler & Associates",
    headshot: "/testimonials/andy-sertler.jpg",
    logo: "/testimonials/sertler-associates-logo.png",
    quote:
      "When our go-to carrier says no, my team used to come find me. Now they ask HarborIQ, read the carrier's own guideline, and know who to call next. One price covers all of us.",
    callouts: ["Carrier answers for the whole team", "One price, not per person"],
    composite: true,
    compositeNote:
      "Written for Andy for the Intelligence positioning (2026-10-28) under his blanket approval to quote him. Earlier quote, in git history: \"We've tried other tools. They all do one thing. This is the first platform that actually works the way our agency works.\" Send him the final text before launch.",
  },
];
