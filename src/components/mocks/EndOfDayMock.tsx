import { MockChrome } from "./MockChrome";

const COMPLIANCE = [
  { label: "CEU credits", value: "8 / 24 hrs", note: "due May 31", tone: "warn" as const },
  { label: "FL license", value: "renews in 42 days", tone: "ok" as const },
  { label: "E&O cert", value: "current", tone: "ok" as const },
];

const TEAM = [
  { name: "A. Kaur", stat: "88%", note: "top producer", tone: "ok" as const },
  { name: "M. Ruiz", stat: "2 stuck", note: "coach moment", tone: "warn" as const },
];

export function EndOfDayMock() {
  return (
    <MockChrome label="end of day · admin">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-wider text-stone">
            Compliance
          </p>
          <div className="space-y-1.5">
            {COMPLIANCE.map((c) => (
              <div
                key={c.label}
                className="flex items-center justify-between rounded-md border border-ash/60 bg-paper px-2.5 py-1.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-ink">
                    {c.label}
                  </p>
                  <p className="truncate text-[10px] text-stone">{c.note ?? c.value}</p>
                </div>
                <span
                  className={`ml-2 shrink-0 text-[11px] font-semibold tabular-nums ${
                    c.tone === "warn" ? "text-copper" : "text-success"
                  }`}
                >
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[10px] uppercase tracking-wider text-stone">
            Team · this week
          </p>
          <div className="space-y-1.5">
            {TEAM.map((t) => (
              <div
                key={t.name}
                className="rounded-md border border-ash/60 bg-paper px-2.5 py-1.5"
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-[11px] font-medium text-ink">{t.name}</p>
                  <p
                    className={`text-[13px] font-semibold tabular-nums ${
                      t.tone === "warn" ? "text-copper" : "text-success"
                    }`}
                  >
                    {t.stat}
                  </p>
                </div>
                <p className="text-[10px] text-stone">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dl-beat mt-3 flex items-center gap-2 rounded-lg border border-anchor/20 bg-anchor/5 px-3 py-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-anchor"
          aria-hidden="true"
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        <span className="text-[11px] font-medium text-anchor">
          Tomorrow&rsquo;s top 3 already drafted
        </span>
      </div>
    </MockChrome>
  );
}
