import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EXAMPLE_PROFILES, findProfile } from "@/lib/marketplace";
import { LIST_AGENCY_URL } from "@/lib/constants";

export function generateStaticParams() {
  return EXAMPLE_PROFILES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = findProfile((await params).slug);
  if (!p) return {};
  return {
    title: `${p.name} (example profile) | HarborIQ Marketplace`,
    description: `A fictional example of a HarborIQ Marketplace profile: ${p.specialty.toLowerCase()} in ${p.city}.`,
    // Fictional examples are never indexed.
    robots: { index: false, follow: false },
  };
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = findProfile((await params).slug);
  if (!p) notFound();

  return (
    <>
      <section className="bg-anchor">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Link href="/find-an-agency" className="block w-fit text-[14px] text-mist hover:text-paper hover:underline">
            ← Back to the agency marketplace
          </Link>
          <p className="mt-6 inline-block rounded-full border border-copper/60 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.1em] text-paper">
            Fictional example profile
          </p>
          <h1 className="mt-4 text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-paper md:text-[52px]">{p.name}</h1>
          <p className="mt-3 text-[20px] text-slate">{p.specialty}</p>
          <p className="mt-1 text-[15px] text-mist">
            {p.city}, {p.state}
          </p>
          <p className="mt-5 max-w-[620px] text-[17px] leading-relaxed text-mist">{p.intro}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <span
              aria-disabled="true"
              className="iq-btn iq-btn-copper cursor-not-allowed opacity-60"
              title="Example profile. There is no agency to contact."
            >
              Contact this agency
            </span>
            <span className="text-[14px] text-mist">Contact is turned off on example profiles.</span>
          </div>
          <p className="mt-5 text-[13px] text-slate">
            Example only. This is not a real agency, listing, endorsement, or offer of insurance.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_0.7fr] md:gap-14 md:py-16" aria-label="Agency details">
        <div className="space-y-5">
          {[
            ["What this agency insures", p.lines],
            ["Where it serves clients", p.area],
            ["Before you get in touch", p.beforeContact],
          ].map(([h, d]) => (
            <div key={h} className="iq-card p-6">
              <h2 className="text-[20px] font-medium tracking-tight text-ink">{h}</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-charcoal">{d}</p>
            </div>
          ))}
        </div>
        <aside className="h-fit rounded-xl border border-ash bg-linen p-6">
          <p className="iq-eyebrow">Profile transparency</p>
          <h3 className="mt-2 text-[20px] font-medium tracking-tight text-ink">Know what you&rsquo;re reading.</h3>
          <dl className="mt-4 space-y-3 text-[14px] leading-relaxed text-charcoal">
            {[
              ["Information source", "Illustrative content written for this example"],
              ["Last confirmed", "Not applicable to a fictional example"],
              ["Licensing and appointments", "None supplied for this example"],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-ash pt-3">
                <dt className="font-medium text-ink">{t}</dt>
                <dd className="mt-0.5">{d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[14px] leading-relaxed text-stone">
            On a live profile, confirm licensing, service area, and whether the agency can help with your risk directly.
          </p>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl border-t border-ash px-6 py-10">
        <p className="text-[16px] text-ink">
          Own an agency?{" "}
          <Link href={LIST_AGENCY_URL} className="cta-secondary text-interactive underline underline-offset-4 hover:text-deep">
            Create your free agency profile.
          </Link>
        </p>
      </section>
    </>
  );
}
