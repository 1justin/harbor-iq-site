import { CardShell } from "./CardShell";
import { ListVisual } from "./visuals/ListVisual";

// Same disclosed-fictional exchanges used in AskDemo.tsx (real answers,
// carrier names swapped pending signed agreements — see the data policy
// note there). Keep in sync rather than inventing new claims here.
const QUESTION = "Will Meridian Mutual write a home with a 1978 roof?";
const CITATION = "Homeowners underwriting guide, p. 14 · updated May 2026";

const RECENTLY_ANSWERED = [
  { primary: "Lakeshore P&C appetite for late-night restaurants?", secondary: "Limited" },
  { primary: "Granite Shore prior coverage for preferred auto?", secondary: "6 months" },
  { primary: "Northbridge Casualty umbrella minimum underlying?", secondary: "$1M / $1M" },
  { primary: "Cardinal Point builder's risk max project length?", secondary: "18 months" },
  { primary: "Silverwood Mutual roof age limit on replacement cost?", secondary: "20 years" },
];

export const ProofCardContent: React.FC = () => (
  <CardShell
    label="Carrier Ask"
    headline={QUESTION}
    subhead="Answered from the carrier's own guide, cited and dated."
  >
    <div className="rounded-lg border border-ash/60 bg-linen/40 px-6 py-5">
      <div className="flex items-center justify-between">
        <span className="text-[17px] font-medium uppercase tracking-wider text-stone">
          Answer
        </span>
        <span className="rounded-full bg-success px-4 py-2 text-[15px] font-semibold uppercase tracking-wider text-white">
          High confidence
        </span>
      </div>
      <p className="mt-3.5 text-[24px] leading-relaxed text-charcoal">
        Not without an inspection. Meridian requires roofs{" "}
        <strong className="font-semibold text-ink">20 years or older</strong> to
        pass inspection before binding, and asphalt shingle roofs over{" "}
        <strong className="font-semibold text-ink">25 years</strong> are not
        eligible for replacement-cost coverage.
      </p>
      <div className="mt-4 inline-flex items-center gap-2.5 rounded-md border border-ash bg-paper px-4 py-2.5 text-[17px] text-charcoal">
        <span className="font-medium text-interactive">Source</span>
        <span>{CITATION}</span>
      </div>
    </div>

    <div className="mt-7">
      <p className="mb-3 text-[17px] font-medium uppercase tracking-wider text-stone">
        Recently answered
      </p>
      <ListVisual rows={RECENTLY_ANSWERED} />
    </div>
  </CardShell>
);
