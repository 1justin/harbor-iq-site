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
  {
    slug: "amanda-hausman",
    name: "Amanda Hausman",
    role: "Carrier perspective",
    agency: "Pekin Insurance",
    headshot: "/testimonials/Amanda_Hausman_Pekin.jpeg",
    logo: "/testimonials/pekin-insurance-logo-color.png",
    quote:
      "I have looked at a lot of tools for independent insurance agencies. This is the most beautiful UI and most thoughtful usage of AI in the category I've seen. I am impressed.",
    // No callouts. Card power is third-party validation from the carrier side.
  },
  {
    slug: "alex-ricketts",
    name: "Alex Ricketts",
    role: "Office Manager",
    agency: "Sertler and Associates",
    headshot: "/testimonials/Alex%20Ricketts%20headshot.avif",
    logo: "/testimonials/sertler-associates-logo-AnuAVpdRp4WqNxvY.avif",
    quote:
      "I have been doing this for years and nothing has come close to how HarborIQ thinks about my day. The screens are clean, the summary catches what I would miss, and the carrier work that used to eat my afternoons is finally somebody else's problem.",
    callouts: ["Hours back every afternoon", "1 login, not 6"],
    composite: true,
    compositeNote:
      "Faithful composite of recorded reactions across multiple demo sessions, approved by Alex. Source notes archived with the founder.",
  },
  {
    slug: "andy-sertler",
    name: "Andy Sertler",
    role: "Principal",
    agency: "Sertler and Associates",
    headshot: "/testimonials/andy%20sertler%20headshot.avif",
    logo: "/testimonials/sertler-associates-logo-AnuAVpdRp4WqNxvY.avif",
    quote:
      "We've tried other tools. They all do one thing. This is the first platform that actually works the way our agency works.",
    callouts: ["Team performance, visible", "Happier employees"],
  },
];
