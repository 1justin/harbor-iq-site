// Same disclosed-fictional exchange used in AskDemo.tsx (real answer, carrier
// name swapped pending signed agreements — see the data policy note there).
// Keep this in sync with that file rather than inventing new claims here.
const QUESTION = "Will Meridian Mutual write a home with a 1978 roof?";
const CITATION = "Homeowners underwriting guide, p. 14 · updated May 2026";

export const ProofCardContent: React.FC = () => {
  return (
    <div className="dl-mock flex h-full w-full flex-col overflow-hidden rounded-2xl border border-ash/70 bg-paper">
      <div className="flex items-center justify-between border-b border-ash/50 px-8 py-6">
        <span className="text-[16px] font-medium uppercase tracking-[0.08em] text-stone">
          Carrier Ask
        </span>
        <span className="rounded-full bg-success px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wider text-white">
          High confidence
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-8 px-8 py-8">
        <p className="text-[27px] font-medium leading-snug text-ink">
          {QUESTION}
        </p>

        <div className="border-t border-ash/50 pt-8">
          <p className="text-[20px] leading-relaxed text-charcoal">
            Not without an inspection. Meridian requires roofs{" "}
            <strong className="font-semibold text-ink">20 years or older</strong>{" "}
            to pass inspection before binding, and asphalt shingle roofs over{" "}
            <strong className="font-semibold text-ink">25 years</strong> are not
            eligible for replacement-cost coverage.
          </p>
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-md border border-ash bg-linen px-3.5 py-2 text-[15px] text-charcoal">
            <span className="font-medium text-interactive">Source</span>
            <span>{CITATION}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
