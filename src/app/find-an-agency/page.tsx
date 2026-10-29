import type { Metadata } from "next";
import { AgencySearch } from "./AgencySearch";
import { Arrow, CtaLink, TextCta } from "@/components/iq/Blocks";
import { EXAMPLE_PROFILES } from "@/lib/marketplace";
import { LAUNCH, LIST_AGENCY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Find an independent insurance agency | HarborIQ Marketplace",
  description:
    "Find an independent insurance agency by what you need to insure and where you live. See each agency's specialties, then get in touch directly.",
  alternates: { canonical: "/find-an-agency" },
  // Example profiles only: never indexed until real, verified listings exist.
  robots: LAUNCH.marketplaceIndexed ? undefined : { index: false, follow: true },
  openGraph: {
    title: "Who near you insures what you need? | HarborIQ",
    url: "/find-an-agency",
    images: [{ url: "/og/marketplace.png", width: 1200, height: 630 }],
  },
};

export default function MarketplacePage() {
  return (
    <>
      <section className="bg-anchor pb-20">
        <div className="mx-auto max-w-6xl px-6 pt-14 text-center md:pt-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-paper">
            HarborIQ Marketplace · Independent insurance agencies
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-paper md:text-[52px]">
            Who near you insures <span className="text-slate">what you&nbsp;need?</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-mist md:text-[19px]">
            Find an agency by the insurance you need and the area it serves. See its specialties, then get in touch
            directly.
          </p>
          <p className="mx-auto mt-6 inline-block rounded-full border border-copper/60 bg-midnight/40 px-4 py-2 text-[13.5px] text-paper">
            The three agencies below are fictional examples that show how profiles work. They are not real listings.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-14 md:pb-20" aria-label="Agency search">
        <div className="mx-auto max-w-5xl px-6">
          <AgencySearch profiles={EXAMPLE_PROFILES} />
        </div>
      </section>

      <section className="scroll-mt-16 bg-midnight py-14 md:py-20" id="list-agency" aria-labelledby="list-agency-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:gap-14">
          <div>
            <p className="iq-eyebrow mb-4 !text-slate">For agency owners · Free to list</p>
            <h2 id="list-agency-title" className="text-2xl font-medium leading-tight tracking-tight text-paper md:text-3xl">
              Make it easier to find the work you want.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-mist">
              Describe your specialties, the communities you serve, and the best way to reach your team. Give people
              looking for an agency a useful page to find and share.
            </p>
            <CtaLink href={LIST_AGENCY_URL} className="mt-7">
              Create your free agency profile
            </CtaLink>
            <p className="mt-3 text-[13px] text-mist">No Intelligence subscription required.</p>
          </div>
          <div className="rounded-xl border border-harbor/40 bg-anchor/40 p-7">
            <h3 className="text-[20px] font-medium tracking-tight text-paper">A profile that answers real questions.</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                "What businesses, people, or risks do you help insure?",
                "Which communities and states do you serve?",
                "How should someone reach you?",
              ].map((q) => (
                <li key={q} className="flex gap-3 text-[15px] leading-relaxed text-mist">
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-interactive" aria-hidden="true" />
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] leading-relaxed text-mist">
              You choose the public information and keep it current. Your private guides, book, and client records stay
              separate.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-slate">
              A public profile can be found by search engines and AI search tools. Rankings, recommendations, and leads
              are not guaranteed.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-[17px] font-medium text-ink">Looking for carrier answers for your agency?</p>
        <TextCta href="/intelligence">Explore HarborIQ Intelligence <Arrow /></TextCta>
      </section>
    </>
  );
}
