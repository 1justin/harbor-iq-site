import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { DEMO_URL, MARKETS_START_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "HarborIQ vs NowCerts (Momentum) | A Generation Apart, Not a Price War",
  description:
    "NowCerts (rebranding to Momentum) is the cheapest established AMS, and a good one. HarborIQ costs a little more and belongs to a different generation: carrier intelligence, AI, and a CRM built in.",
  alternates: { canonical: "/compare/nowcerts" },
  openGraph: {
    title: "HarborIQ vs NowCerts (Momentum) | A Generation Apart",
    description:
      "NowCerts is the price anchor of the AMS market. Here is exactly what the difference buys.",
    url: "/compare/nowcerts",
  },
};

const contrastCards = [
  {
    label: "AI anywhere in the product",
    harboriq: "In the core",
    competitor: "None",
    detail:
      "Cited carrier answers, overnight bulletin summaries, drafted client outreach. NowCerts automates tasks; it does not think about your book.",
  },
  {
    label: "Carrier intelligence",
    harboriq: "Built in",
    competitor: "Not included",
    detail:
      "Appetite answers with sources and dates, carrier news, login vault, a knowledge base your agency owns.",
  },
  {
    label: "Prospect pipeline",
    harboriq: "Built in",
    competitor: "Another tool to buy",
    detail:
      "NowCerts agencies bolt on AgencyZoom or GoHighLevel for pipeline. Ours shares one client record with the book.",
  },
  {
    label: "Interface",
    harboriq: "Calm by design",
    competitor: "Famously busy",
    detail:
      "The most consistent NowCerts review theme in 2026: cluttered UI and a steep learning curve, despite the fair price.",
  },
];

export default function CompareNowCertsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            HarborIQ vs NowCerts
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-2xl mx-auto">
            NowCerts (soon &ldquo;Momentum&rdquo;) is the cheapest established
            AMS, and a good one. This is not a price war. It is a generation
            gap, and price cannot close it.
          </p>
        </div>
      </section>

      {/* ─── CONTRAST CARDS ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[13px] font-medium text-interactive uppercase tracking-wider mb-4 text-center">
            At a glance
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-12">
            Four places the generation gap shows.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contrastCards.map((c) => (
              <div
                key={c.label}
                className="bg-linen border border-ash rounded-lg p-6 flex flex-col"
              >
                <p className="text-[11px] font-medium text-stone uppercase tracking-[0.1em]">
                  {c.label}
                </p>
                <p className="mt-5 text-[12px] font-medium text-interactive uppercase tracking-[0.1em]">
                  HarborIQ
                </p>
                <p className="mt-1 text-[28px] md:text-[32px] font-medium text-copper leading-[1.05] tracking-tight">
                  {c.harboriq}
                </p>
                <p className="mt-4 text-[14px] text-stone leading-snug">
                  <span className="font-medium text-charcoal">NowCerts:</span>{" "}
                  {c.competitor}
                </p>
                <p className="text-[13px] text-charcoal leading-relaxed mt-auto pt-5 border-t border-ash">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE REAL STACK MATH ─── */}
      <section className="bg-linen py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center max-w-3xl mx-auto mb-3">
            The $349 is never the whole bill.
          </h2>
          <p className="text-[16px] text-charcoal leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Straight up: NowCerts alone is $50 cheaper than HarborIQ for a
            5-person agency, and we will print that. But NowCerts is a system
            of record only, which is why so many of its agencies also pay for
            AgencyZoom or GoHighLevel for pipeline, and still answer carrier
            questions by digging PDFs. Add one overlay and the
            &ldquo;cheaper&rdquo; stack passes HarborIQ&rsquo;s price, with two
            logins and no AI anywhere.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left max-w-3xl mx-auto">
              <thead>
                <tr className="border-b-2 border-ash">
                  <th className="py-3 pr-4 text-[12px] font-medium text-stone uppercase tracking-wider">
                    5-person agency
                  </th>
                  <th className="py-3 px-4 text-[12px] font-medium text-stone uppercase tracking-wider">
                    Monthly
                  </th>
                  <th className="py-3 pl-4 text-[12px] font-medium text-stone uppercase tracking-wider">
                    What you have
                  </th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="border-b border-ash/60">
                  <td className="py-4 pr-4 font-medium text-ink">
                    NowCerts alone
                  </td>
                  <td className="py-4 px-4 text-charcoal">$349</td>
                  <td className="py-4 pl-4 text-charcoal">
                    An AMS. No pipeline discipline, no carrier layer, no AI.
                  </td>
                </tr>
                <tr className="border-b border-ash/60">
                  <td className="py-4 pr-4 font-medium text-ink">
                    NowCerts + AgencyZoom or GHL
                  </td>
                  <td className="py-4 px-4 text-charcoal">$428 to $546+</td>
                  <td className="py-4 pl-4 text-charcoal">
                    Two systems, two logins, an overnight sync, still no
                    carrier intelligence.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-ink">
                    HarborIQ Agency
                  </td>
                  <td className="py-4 px-4 font-medium text-copper">$399</td>
                  <td className="py-4 pl-4 text-charcoal">
                    One login: the book, the pipeline, and the carrier
                    intelligence layer, with AI in the core.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-stone leading-relaxed text-center max-w-2xl mx-auto mt-8">
            Published pricing, July 2026: NowCerts Business $349 for 5 users;
            AgencyZoom from $79/mo; GoHighLevel $97 to $297/mo plus usage fees.
          </p>
        </div>
      </section>

      {/* ─── WHEN EACH IS RIGHT ─── */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight tracking-tight text-center mb-10">
            When each is the right call
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-linen border border-ash rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                NowCerts is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                  Lowest sticker price is the deciding axis, full stop.
                </li>
                <li className="flex gap-3">
                  <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                  You are content bolting on separate tools for pipeline and
                  living without AI.
                </li>
                <li className="flex gap-3">
                  <span className="text-stone mt-0.5 shrink-0">&bull;</span>
                  Their genuinely excellent support matters more to you than
                  the product generation.
                </li>
              </ul>
            </div>
            <div className="bg-pure border-2 border-interactive rounded-lg p-6 md:p-8">
              <h3 className="text-[17px] font-medium text-ink mb-5">
                HarborIQ is right when&hellip;
              </h3>
              <ul className="space-y-3 text-[15px] text-charcoal leading-relaxed">
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You want carrier answers, pipeline, and the book in one login
                  instead of three tools.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  You believe AI in the core will separate agencies over the
                  next five years, and want to be on the right side of it.
                </li>
                <li className="flex gap-3">
                  <svg width="18" height="18" fill="none" stroke="#2E8B57" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  <span>
                    You want to try before switching anything: Markets is $199,
                    runs alongside NowCerts, and moves nothing.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href={MARKETS_START_URL}
              className="cta-primary inline-block bg-copper text-white btn-radius px-7 py-3 text-[15px] font-medium hover:bg-bronze transition-colors"
            >
              Start with Markets
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-3 text-interactive text-[15px] font-medium underline underline-offset-4"
            >
              or book an Agency demo
            </a>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
