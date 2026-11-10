/**
 * The free CRM, shown as product UI (mocked 2026-11-10): a pipeline board,
 * renewals with days-out chips, and follow-ups. Demo data, labelled as such.
 * Decorative, so hidden from assistive tech; the text beside it says the same
 * things. Render only when LAUNCH.freeCrm is true.
 */

const COLS: { name: string; count: number; won?: boolean; cards: [string, string][] }[] = [
  { name: "Prospect", count: 4, cards: [["Brightside Daycare", "Commercial package"], ["Pat Delgado", "Auto and home"]] },
  { name: "Quoting", count: 3, cards: [["Lakeview Dental", "BOP, quote due Thu"], ["R. Mbeki", "Umbrella"]] },
  { name: "Bound", count: 2, won: true, cards: [["Hartwell Roofing LLC", "Workers’ comp"], ["M. and R. Okafor", "Home"]] },
];

const RENEWALS: [string, string, string, boolean][] = [
  ["Hartwell Roofing LLC", "General liability, owner Dana", "12 days", true],
  ["Cole Family Trust", "Homeowners, owner Luis", "19 days", true],
  ["M. and R. Okafor", "Auto, owner Priya", "27 days", false],
];

const TASKS: [string, string, boolean][] = [
  ["Send Hartwell renewal quote", "Dana, today", true],
  ["Call Delgado about auto", "Priya, tomorrow", false],
  ["Request Brightside loss runs", "Dana, Thursday", false],
];

const NAV = ["Clients", "New business", "Renewals", "Tasks", "Carriers"];

export function CrmFrame({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`overflow-hidden rounded-[14px] border border-ash bg-paper text-[12.5px] text-charcoal shadow-[0_24px_60px_-34px_rgba(15,36,64,0.45)] ${className}`}>
      <div className="flex justify-between border-b border-ash bg-linen/60 px-4 py-2.5 text-[12px] text-stone"><span>New business</span><span>Demo data</span></div>
      <div className="grid md:grid-cols-[128px_1fr]">
        <div className="hidden content-start gap-0.5 border-r border-ash bg-linen/60 p-2 md:grid">
          {NAV.map((n) => (
            <span key={n} className={`rounded-[7px] px-2.5 py-[7px] text-[13px] ${n === "New business" ? "bg-ice font-semibold text-deep" : ""}`}>{n}</span>
          ))}
        </div>
        <div className="grid gap-4 p-4">
          <div className="grid gap-2.5 sm:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.name}>
                <p className="mb-2 flex justify-between text-[11px] font-semibold uppercase tracking-wider text-stone"><span>{c.name}</span><span>{c.count}</span></p>
                {c.cards.map(([n, d]) => (
                  <div key={n} className={`mb-[7px] rounded-lg border px-2.5 py-2 ${c.won ? "border-[#BFE0CC] bg-[#F3FAF6]" : "border-ash bg-paper"}`}>
                    <b className="block text-[12.5px] font-semibold text-ink">{n}</b>
                    <span className="text-[11.5px] text-stone">{d}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-stone">Renewals, next 30 days</p>
              {RENEWALS.map(([n, d, days, soon], i) => (
                <div key={n} className={`flex items-center justify-between gap-2 py-[7px] ${i ? "border-t border-ash/70" : ""}`}>
                  <div>{n}<i className="block text-[11.5px] not-italic text-stone">{d}</i></div>
                  <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold ${soon ? "bg-[#FFF1DC] text-bronze" : "bg-ice text-interactive"}`}>{days}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-stone">Follow-ups</p>
              {TASKS.map(([t, who, done], i) => (
                <div key={t} className={`flex items-start gap-2 py-[7px] ${i ? "border-t border-ash/70" : ""}`}>
                  <span className={`mt-0.5 h-3.5 w-3.5 flex-none rounded-[4px] border-[1.5px] ${done ? "border-success bg-success" : "border-fog"}`} />
                  <div>{t}<i className="block text-[11.5px] not-italic text-stone">{who}</i></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
