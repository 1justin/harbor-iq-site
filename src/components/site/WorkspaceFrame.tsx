/**
 * The free workspace as it works today, shown as product UI: carrier contacts,
 * license and CE reminders, and a cited carrier answer. Demo data, labelled as
 * such. This is the Free visual while LAUNCH.freeCrm is false; CrmFrame takes
 * over when the app opens clients, pipeline and renewals to the free rung.
 * Decorative, so hidden from assistive tech.
 */

const NAV = ["Command Center", "Ask", "Carriers", "Compliance", "Team"];

const CONTACTS: [string, string, string][] = [
  ["Lakeshore Mutual", "Underwriter: J. Moreno", "Portal link saved"],
  ["Harbor Casualty", "Underwriter: R. Patel", "Appointment active"],
  ["Granite State", "Underwriter: D. Ortiz", "Portal link saved"],
];

const DEADLINES: [string, string, string, boolean][] = [
  ["Resident license, IL", "Dana", "21 days", true],
  ["CE credits, P&C", "Luis", "64 days", false],
  ["Surplus lines license, WI", "Priya", "88 days", false],
];

export function WorkspaceFrame({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`overflow-hidden rounded-[14px] border border-ash bg-paper text-[12.5px] text-charcoal shadow-[0_24px_60px_-34px_rgba(15,36,64,0.45)] ${className}`}>
      <div className="flex justify-between border-b border-ash bg-linen/60 px-4 py-2.5 text-[12px] text-stone"><span>Carriers</span><span>Demo data</span></div>
      <div className="grid md:grid-cols-[128px_1fr]">
        <div className="hidden content-start gap-0.5 border-r border-ash bg-linen/60 p-2 md:grid">
          {NAV.map((n) => (
            <span key={n} className={`rounded-[7px] px-2.5 py-[7px] text-[13px] ${n === "Carriers" ? "bg-ice font-semibold text-deep" : ""}`}>{n}</span>
          ))}
        </div>
        <div className="grid gap-4 p-4">
          <div className="rounded-lg border border-ash bg-linen/50 p-3">
            <p className="text-[12.5px] font-semibold text-ink">Who writes a 1978 frame dwelling with a newer roof, two claims in five years?</p>
            <p className="mt-1.5 text-[12.5px]">Lakeshore Mutual will look at it: roof under 15 years, no more than one claim in three.</p>
            <p className="mt-1.5 text-[11.5px] font-medium text-interactive">Lakeshore Mutual appetite guide, p. 14, dated Oct 2026</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-stone">Carrier contacts</p>
              {CONTACTS.map(([n, who, note], i) => (
                <div key={n} className={`py-[7px] ${i ? "border-t border-ash/70" : ""}`}>
                  <b className="block text-[12.5px] font-semibold text-ink">{n}</b>
                  <span className="text-[11.5px] text-stone">{who} &middot; {note}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-stone">License and CE reminders</p>
              {DEADLINES.map(([t, who, days, soon], i) => (
                <div key={t} className={`flex items-center justify-between gap-2 py-[7px] ${i ? "border-t border-ash/70" : ""}`}>
                  <div>{t}<i className="block text-[11.5px] not-italic text-stone">{who}</i></div>
                  <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold ${soon ? "bg-[#FFF1DC] text-bronze" : "bg-ice text-interactive"}`}>{days}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
