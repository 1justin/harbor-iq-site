/**
 * "The questions nobody is asking."
 *
 * The ICP does not question the AMS/CRM split, per-seat pricing, or the
 * incumbent sales process. This section asks for them. Each question is a
 * rule break the incumbents cannot follow without breaking their own
 * economics (see assets/harboriq/docs/strategy/harboriq-rules-we-break.md).
 */

const QUESTIONS = [
  {
    q: "Why are your AMS and your CRM two separate products?",
    a: "Because they were built in different decades by different companies, and merging them would break how those companies charge you. There is no workflow reason. Your client record and your prospect pipeline belong in one place.",
  },
  {
    q: "Why do you pay more every time you hire?",
    a: "Per-seat pricing is a growth tax. The software costs the vendor almost nothing when your new CSR logs in. The fee exists because the contract says it can. HarborIQ prices by agency size, never by seat.",
  },
  {
    q: "Why does new software cost $25,000 before day one?",
    a: "Long implementations are a business model. The setup fee funds a services team, and the sunk cost keeps you from leaving. One agency shared a quote with us: $25,000 and 3 to 4 months to migrate. Our book import is measured in days, and free with annual prepay.",
  },
  {
    q: "Why does your team answer the same carrier question every season?",
    a: "Because the answer lives in a PDF, a portal, or a veteran's head, and it walks out the door when they do. HarborIQ answers from the carrier's own documents and keeps what your team learns, so the agency remembers even when people move on.",
  },
];

export function QuestionsSection() {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-[13px] font-medium uppercase tracking-wider text-interactive">
          The questions nobody is asking
        </p>
        <h2 className="max-w-3xl text-2xl font-medium leading-tight tracking-tight text-ink md:text-3xl">
          The way agency software works is a choice. Just not&nbsp;yours.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {QUESTIONS.map((item) => (
            <div key={item.q} className="border-t border-ash pt-6">
              <h3 className="font-serif text-[19px] italic leading-snug text-ink md:text-[21px]">
                {item.q}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[15px] leading-relaxed text-charcoal">
          <span className="font-medium text-ink">
            Every one of these has the same honest answer:
          </span>{" "}
          the old way is profitable for the vendor. The companies that built it
          cannot give it up without giving up how they get paid. We built
          HarborIQ without those rules, so we never have to defend&nbsp;them.
        </p>
      </div>
    </section>
  );
}
