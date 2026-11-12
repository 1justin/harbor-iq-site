/**
 * Product screens for the mock pages (2026-11-08). Each one shows only what
 * the shipped app does today: carrier Ask with sources, CSV/XLSX import with
 * column mapping, the renewal list built from policy dates, tasks on the
 * client record with Gmail beside them. No drafts, no quote comparison.
 * Carrier names are fictional, as on AskDemo.
 */

function Chrome({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ash bg-paper shadow-[0_1px_2px_rgba(26,26,24,0.04),0_18px_40px_-24px_rgba(26,26,24,0.18)]">
      <div className="flex items-center gap-2 border-b border-ash/70 bg-linen/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-ash" />
          <span className="h-2 w-2 rounded-full bg-ash" />
          <span className="h-2 w-2 rounded-full bg-ash" />
        </span>
        <span className="ml-1 text-[12px] text-stone">{label}</span>
      </div>
      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}

export function AskScreen() {
  return (
    <Chrome label="HarborIQ · Ask">
      <div className="space-y-3">
        <div className="flex items-center gap-2 rounded-md border border-ash bg-linen/50 px-3 py-2.5 text-[14px] text-ink">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-stone" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
          Who writes roofers in Florida with $3M revenue?
        </div>
        <div className="rounded-md border border-ash px-3 py-3">
          <p className="text-[12px] text-stone">Lakeshore Mutual · Contractors appetite guide 2026 · page 14</p>
          <p className="mt-1.5 text-[14px] leading-snug text-ink">
            Roofing contractors are <span className="rounded-sm bg-ice px-1 font-medium text-deep">in appetite</span> in FL, GA and SC up to $5M revenue. No TPO-only operations. Minimum 3 years in business.
          </p>
        </div>
        <div className="rounded-md border border-ash px-3 py-3">
          <p className="text-[12px] text-stone">Granite State Casualty · Underwriting guidelines · page 7</p>
          <p className="mt-1.5 text-[14px] leading-snug text-ink">
            Roofing is <span className="rounded-sm bg-linen px-1 font-medium text-charcoal">excluded</span> in coastal FL counties. Inland FL referred to underwriting.
          </p>
        </div>
        <p className="flex items-center gap-1.5 text-[12px] text-stone">
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
          Answered in 4 seconds from your agency&rsquo;s own guides. Strong confidence.
        </p>
      </div>
    </Chrome>
  );
}

export function ImportScreen() {
  const rows = [
    ["Insured Name", "Client name", "412"],
    ["Pol #", "Policy number", "412"],
    ["Exp Date", "Expiration date", "409"],
    ["Carrier", "Carrier", "412"],
    ["Prem", "Annual premium", "398"],
  ];
  return (
    <Chrome label="HarborIQ · Import your book">
      <p className="text-[14px] text-ink">book-export-epic.xlsx · 412 rows</p>
      <p className="mt-0.5 text-[12px] text-stone">Columns mapped by HarborIQ. Change any match before you confirm.</p>
      <div className="mt-3 overflow-hidden rounded-md border border-ash text-[13px]">
        <div className="grid grid-cols-[1fr_1fr_64px] bg-linen/60 px-3 py-1.5 text-[12px] text-stone">
          <span>Your column</span><span>Becomes</span><span className="text-right">Filled</span>
        </div>
        {rows.map(([a, b, c]) => (
          <div key={a} className="grid grid-cols-[1fr_1fr_64px] border-t border-ash/70 px-3 py-2">
            <span className="text-charcoal">{a}</span>
            <span className="font-medium text-ink">{b}</span>
            <span className="text-right text-charcoal">{c}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-1.5 text-[12px] text-stone">
        <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
        Nothing rejected. 3 rows without a date kept and flagged for review.
      </p>
    </Chrome>
  );
}

export function RenewalsScreen() {
  const rows = [
    ["Whitfield Roofing", "Commercial package", "Maria", "12 days"],
    ["Delgado Family", "Home and auto", "Tom", "19 days"],
    ["Northside Dental", "BOP", "Maria", "26 days"],
    ["R. Okafor", "Auto", "Tom", "31 days"],
  ];
  return (
    <Chrome label="HarborIQ · Renewals">
      <p className="text-[14px] text-ink">Next 45 days · 23 policies · $212,400 premium</p>
      <div className="mt-3 overflow-hidden rounded-md border border-ash text-[13px]">
        {rows.map(([c, p, o, d], i) => (
          <div key={c} className={`grid grid-cols-[1.3fr_1fr_60px_70px] items-center px-3 py-2 ${i ? "border-t border-ash/70" : ""}`}>
            <span className="font-medium text-ink">{c}</span>
            <span className="hidden text-charcoal sm:block">{p}</span>
            <span className="text-charcoal">{o}</span>
            <span className={`text-right ${i === 0 ? "font-medium text-bronze" : "text-charcoal"}`}>{d}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-stone">Built from the expiration dates in your book. Owner is whoever holds the client.</p>
    </Chrome>
  );
}

/**
 * Tasks on the client record. With `inbox` (the default) the connected Gmail
 * thread sits beside them; the Free CRM page passes inbox={false} and shows the
 * client's notes there, because that page lists only what the free CRM includes.
 */
export function FollowupScreen({ inbox = true }: { inbox?: boolean }) {
  return (
    <Chrome label="HarborIQ · Whitfield Roofing">
      <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
        <div className="rounded-md border border-ash p-3">
          <p className="text-[12px] text-stone">Tasks</p>
          <ul className="mt-2 space-y-2 text-[13px]">
            <li className="flex items-start gap-2 text-ink"><span className="mt-1 h-3 w-3 shrink-0 rounded-sm border border-interactive" aria-hidden="true" />Send renewal options before the 15th · Maria</li>
            <li className="flex items-start gap-2 text-ink"><span className="mt-1 h-3 w-3 shrink-0 rounded-sm border border-interactive" aria-hidden="true" />Confirm roof age with Jim · Maria</li>
            <li className="flex items-start gap-2 text-stone line-through"><span className="mt-1 h-3 w-3 shrink-0 rounded-sm bg-success" aria-hidden="true" />Request loss runs</li>
          </ul>
        </div>
        {inbox ? (
          <div className="rounded-md border border-ash p-3">
            <p className="text-[12px] text-stone">Inbox · Gmail</p>
            <div className="mt-2 space-y-2 text-[13px]">
              <div><p className="font-medium text-ink">Jim Whitfield</p><p className="text-charcoal">Loss runs attached, let me know what else you need.</p></div>
              <div><p className="font-medium text-ink">Lakeshore Mutual UW</p><p className="text-charcoal">Can quote, need updated roof inspection.</p></div>
            </div>
          </div>
        ) : (
          <div className="rounded-md border border-ash p-3">
            <p className="text-[12px] text-stone">Notes</p>
            <div className="mt-2 space-y-2 text-[13px]">
              <div><p className="text-charcoal">Jim sent loss runs. Wants options before the 15th.</p><p className="text-stone">Maria, Nov 4</p></div>
              <div><p className="text-charcoal">Underwriter can quote with an updated roof inspection.</p><p className="text-stone">Tom, Nov 2</p></div>
            </div>
          </div>
        )}
      </div>
      <p className="mt-3 text-[12px] text-stone">One record per client. When staff change, the history stays.</p>
    </Chrome>
  );
}

/** The client list: the plain record every plan ships with. */
export function ClientListScreen() {
  const rows = [
    ["Whitfield Roofing", "Commercial", "3", "Maria", "12 days"],
    ["Delgado Family", "Personal", "2", "Tom", "19 days"],
    ["Northside Dental", "Commercial", "2", "Maria", "26 days"],
    ["R. Okafor", "Personal", "1", "Tom", "31 days"],
    ["Harbor Lane HOA", "Commercial", "4", "Maria", "44 days"],
  ];
  return (
    <Chrome label="HarborIQ · Clients">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-md border border-ash bg-linen/50 px-3 py-2 text-[13px] text-stone">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
          Search 412 clients
        </div>
        <span className="whitespace-nowrap rounded-md bg-anchor px-2.5 py-1.5 text-[12px] font-medium text-paper">New client</span>
      </div>
      <div className="mt-3 overflow-hidden rounded-md border border-ash text-[13px]">
        <div className="grid grid-cols-[1.4fr_60px_72px] bg-linen/60 px-3 py-1.5 text-[12px] text-stone sm:grid-cols-[1.4fr_1fr_56px_60px_72px]">
          <span>Client</span><span className="hidden sm:block">Type</span><span className="hidden sm:block">Policies</span><span>Owner</span><span className="text-right">Renews</span>
        </div>
        {rows.map(([c, t, p, o, d], i) => (
          <div key={c} className={`grid grid-cols-[1.4fr_60px_72px] items-center px-3 py-2 sm:grid-cols-[1.4fr_1fr_56px_60px_72px] ${i ? "border-t border-ash/70" : ""} ${i === 0 ? "bg-ice/40" : ""}`}>
            <span className="font-medium text-ink">{c}</span>
            <span className="hidden text-charcoal sm:block">{t}</span>
            <span className="hidden text-charcoal sm:block">{p}</span>
            <span className="text-charcoal">{o}</span>
            <span className="text-right text-charcoal">{d}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-stone">Imported from your AMS export. Every client, every policy, the whole team sees the same list.</p>
    </Chrome>
  );
}

/** One client page: policies, contacts, notes and tasks on a single record. */
export function ClientPageScreen() {
  return (
    <Chrome label="HarborIQ · Whitfield Roofing">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[16px] font-medium text-ink">Whitfield Roofing</p>
          <p className="text-[12px] text-stone">Commercial · Owner Maria · Client since 2021</p>
        </div>
        <span className="rounded-sm bg-ice px-1.5 py-0.5 text-[11px] font-medium text-deep">Renews in 12 days</span>
      </div>
      <div className="mt-3 overflow-hidden rounded-md border border-ash text-[13px]">
        <div className="bg-linen/60 px-3 py-1.5 text-[12px] text-stone">Policies</div>
        <div className="grid grid-cols-[1.3fr_1fr_80px] border-t border-ash/70 px-3 py-2">
          <span className="font-medium text-ink">Commercial package</span><span className="text-charcoal">Lakeshore Mutual</span><span className="text-right text-charcoal">Dec 3</span>
        </div>
        <div className="grid grid-cols-[1.3fr_1fr_80px] border-t border-ash/70 px-3 py-2">
          <span className="font-medium text-ink">Commercial auto</span><span className="text-charcoal">Granite State</span><span className="text-right text-charcoal">Mar 18</span>
        </div>
        <div className="grid grid-cols-[1.3fr_1fr_80px] border-t border-ash/70 px-3 py-2">
          <span className="font-medium text-ink">Workers comp</span><span className="text-charcoal">Lakeshore Mutual</span><span className="text-right text-charcoal">Mar 18</span>
        </div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 text-[13px]">
        <div className="rounded-md border border-ash p-3">
          <p className="text-[12px] text-stone">Contacts</p>
          <p className="mt-1.5 font-medium text-ink">Jim Whitfield <span className="font-normal text-charcoal">· Owner</span></p>
          <p className="text-charcoal">jim@whitfieldroofing.com</p>
        </div>
        <div className="rounded-md border border-ash p-3">
          <p className="text-[12px] text-stone">Notes</p>
          <p className="mt-1.5 text-charcoal">Added a second crew in June. Wants the auto and WC on one renewal date next year. <span className="text-stone">· Maria, Oct 2</span></p>
        </div>
      </div>
    </Chrome>
  );
}

/**
 * Insights from the book (Intelligence): the priorities for the week, a summary
 * of what happened, and how each person is closing. Mirrors what the app shows
 * today (the daily directive, the activity feed, agent performance with closing
 * ratio). Demo data; names match the other screens.
 */
export function InsightsScreen() {
  const priorities: [string, string][] = [
    ["Send Whitfield Roofing renewal options", "Renews in 12 days, no quote sent yet"],
    ["Follow up with Northside Dental", "Quote delivered 6 days ago, no reply"],
    ["Call Delgado Family about the umbrella", "Home and auto with you, no umbrella"],
  ];
  const team: [string, string, string, string][] = [
    ["Maria", "14", "9", "64%"],
    ["Tom", "11", "5", "45%"],
    ["Priya", "8", "5", "63%"],
  ];
  return (
    <Chrome label="HarborIQ · Insights">
      <p className="text-[12px] text-stone">Your priorities this week</p>
      <ol className="mt-2 overflow-hidden rounded-md border border-ash text-[13px]">
        {priorities.map(([t, why], i) => (
          <li key={t} className={`flex gap-3 px-3 py-2.5 ${i ? "border-t border-ash/70" : "bg-ice/40"}`}>
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ice text-[11px] font-medium text-interactive">{i + 1}</span>
            <span><span className="block font-medium text-ink">{t}</span><span className="text-stone">{why}</span></span>
          </li>
        ))}
      </ol>
      <div className="mt-3 rounded-md border border-ash px-3 py-2.5 text-[13px]">
        <p className="text-[12px] text-stone">Last week, in one paragraph</p>
        <p className="mt-1 leading-snug text-charcoal">19 policies bound and 7 renewals kept. Three quotes are waiting on the client. Two renewals inside 30 days have no owner.</p>
      </div>
      <div className="mt-3 overflow-hidden rounded-md border border-ash text-[13px]">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] bg-linen/60 px-3 py-1.5 text-[12px] text-stone">
          <span>Team, last 30 days</span><span className="text-right">Quoted</span><span className="text-right">Bound</span><span className="text-right">Closing</span>
        </div>
        {team.map(([n, q, b, r]) => (
          <div key={n} className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-t border-ash/70 px-3 py-2">
            <span className="font-medium text-ink">{n}</span>
            <span className="text-right text-charcoal">{q}</span>
            <span className="text-right text-charcoal">{b}</span>
            <span className="text-right font-medium text-ink">{r}</span>
          </div>
        ))}
      </div>
    </Chrome>
  );
}
