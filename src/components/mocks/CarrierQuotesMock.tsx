import { MockChrome } from "./MockChrome";

const QUOTES = [
  { carrier: "Hartford", note: "Best fit. Broadest coverage.", price: "$4,120", best: true },
  { carrier: "Travelers", note: "Good. Excludes subcontract work.", price: "$4,380" },
  { carrier: "Liberty Mut.", note: "Cheapest. Narrow definition.", price: "$3,980" },
  { carrier: "Chubb", note: "Premium. Adds cyber.", price: "$4,810" },
];

export function CarrierQuotesMock() {
  return (
    <MockChrome label="ai quoting · results">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-wider text-stone">
          ACME LLC · GL + WC · 6 carriers
        </p>
        <span className="inline-flex items-center rounded-full border border-success/40 bg-success/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-success">
          Done in 4m 12s
        </span>
      </div>

      <div className="space-y-1.5">
        {QUOTES.map((q) => (
          <div
            key={q.carrier}
            className={`dl-beat flex items-center gap-3 rounded-lg border px-3 py-2 ${
              q.best
                ? "dl-beat-best border-copper/40 bg-copper/10"
                : "border-ash/60 bg-paper"
            }`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-anchor text-[11px] font-semibold text-paper">
              {q.carrier[0]}
            </span>
            <div className="min-w-0 flex-1">
              <p
                className={`truncate text-[13px] font-semibold ${
                  q.best ? "text-copper" : "text-ink"
                }`}
              >
                {q.carrier}
              </p>
              <p className="truncate text-[11px] text-stone">{q.note}</p>
            </div>
            <span
              className={`text-[13px] font-semibold tabular-nums ${
                q.best ? "text-copper" : "text-ink"
              }`}
            >
              {q.price}
            </span>
            {q.best ? (
              <span className="inline-flex items-center rounded-full bg-copper px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-paper">
                Best fit
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </MockChrome>
  );
}
