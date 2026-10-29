import Link from "next/link";

export type Faq = { q: string; a: string };

/** Centered eyebrow, headline, and lede: the standard section opener on the site. */
export function SectionHead({
  eyebrow,
  heading,
  sub,
  id,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  sub?: React.ReactNode;
  id?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && <p className={`iq-eyebrow mb-4 ${light ? "!text-slate" : ""}`}>{eyebrow}</p>}
      <h2
        id={id}
        className={`mx-auto max-w-3xl text-2xl font-medium leading-tight tracking-tight md:text-3xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {heading}
      </h2>
      {sub && (
        <p className={`mx-auto mt-3 max-w-2xl text-[16px] leading-relaxed ${light ? "text-mist" : "text-charcoal"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

/** FAQ list on native <details>, plus the FAQPage JSON-LD for answer engines. */
export function FaqSection({
  heading = "Frequently asked questions",
  items,
  className = "",
}: {
  heading?: React.ReactNode;
  items: Faq[];
  className?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className={`bg-paper py-14 md:py-20 ${className}`}>
      {/* Static build-time data serialized with JSON.stringify; no user input. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-6 text-center text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
          {heading}
        </h2>
        <div className="iq-faq">
          {items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Navy closing band, centered, as on the rest of the site (CtaSection). */
export function FinalCta({
  heading,
  body,
  action,
  secondary,
  note,
}: {
  heading: React.ReactNode;
  body: string;
  action: React.ReactNode;
  secondary?: React.ReactNode;
  note?: React.ReactNode;
}) {
  return (
    <section className="bg-anchor py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <h2 className="text-2xl font-medium leading-tight tracking-tight text-paper md:text-3xl">{heading}</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-mist">{body}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          {action}
          {secondary}
        </div>
        {note && <p className="mt-5 text-[13px] text-mist">{note}</p>}
      </div>
    </section>
  );
}

export function Arrow({ glyph = "→" }: { glyph?: string }) {
  return (
    <span aria-hidden="true" className="leading-none">
      {glyph}
    </span>
  );
}

/** Primary action: an anchor carrying the cta-primary class EngagementTracker counts. */
export function CtaLink({
  href,
  variant = "copper",
  children,
  className = "",
}: {
  href: string;
  variant?: "navy" | "copper" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`cta-primary iq-btn iq-btn-${variant} ${className}`}>
      {children}
    </Link>
  );
}

/** Secondary text action, tracked as cta-secondary. */
export function TextCta({
  href,
  light = false,
  children,
  className = "",
}: {
  href: string;
  light?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`cta-secondary iq-link ${light ? "iq-link-light" : ""} ${className}`}>
      {children}
    </Link>
  );
}
