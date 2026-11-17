/**
 * Distribution Intelligence renderings for /carriers (2026-11-17).
 * Sample views only: Lakeshore Mutual is a fictional carrier (see the carrier
 * film rule, decisions 2026-11-03) and every agency name and number is invented.
 * No carrier portal or brief email exists in the product yet.
 */

const LINES = [
  { line: "Homeowners", seen: 1420, quoted: 512, bound: 171 },
  { line: "Personal auto", seen: 1180, quoted: 398, bound: 142 },
  { line: "BOP", seen: 640, quoted: 164, bound: 49 },
  { line: "Commercial auto", seen: 390, quoted: 92, bound: 25 },
  { line: "Umbrella", seen: 230, quoted: 44, bound: 15 },
];

const GAPS = [
  { q: "Roofs over 20 years", n: 214, note: "Guide declines; 61% placed elsewhere" },
  { q: "Short-term rentals", n: 88, note: "No answer found in your guide" },
  { q: "Restaurants open past midnight", n: 57, note: "Guide unclear on hours" },
];

const AGENCIES = [
  { a: "Northfield Insurance Group", g: "+34%", d: "BOP quoting up, 3 of 46 sent to you" },
  { a: "Prairie Gate Agency", g: "+22%", d: "New producer, homeowners heavy" },
  { a: "Two Rivers Insurance", g: "+17%", d: "Opened a second office" },
];

const LOSSES = [
  { why: "Price", pct: 46 },
  { why: "Appetite", pct: 31 },
  { why: "Speed to quote", pct: 23 },
];

function SampleTag({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] ${dark ? "bg-paper/10 text-mist" : "bg-linen text-stone"}`}>
      Sample · fictional data
    </span>
  );
}

/** The carrier portal: one screen a distribution leader opens on Monday. */
export function NetworkPulse({ className = "" }: { className?: string }) {
  const max = Math.max(...LINES.map((l) => l.seen));
  return (
    <figure className={`overflow-hidden rounded-xl border border-ash bg-paper text-ink shadow-[0_30px_80px_-30px_rgba(15,36,64,0.45)] ${className}`}>
      {/* Window bar */}
      <div className="flex items-center gap-2 border-b border-ash bg-linen px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-fog" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-fog" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-fog" aria-hidden="true" />
        <span className="ml-3 truncate text-[12px] text-stone">HarborIQ for carriers · Lakeshore Mutual</span>
        <span className="ml-auto"><SampleTag /></span>
      </div>

      <div className="p-5 md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-interactive">Network pulse</p>
            <h3 className="mt-1 text-[20px] font-medium tracking-tight md:text-[22px]">Central territory, last 30 days</h3>
          </div>
          <p className="text-[13px] text-stone">142 agencies sharing with you</p>
        </div>

        {/* Headline numbers */}
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ash bg-ash md:grid-cols-4">
          {[
            { k: "Opportunities your agencies worked", v: "3,860", d: "+12% vs. prior 30 days" },
            { k: "Quoted with Lakeshore", v: "1,210", d: "31% quote share, down 2 pts" },
            { k: "Bound with Lakeshore", v: "402", d: "33% of your quotes" },
            { k: "Questions asked about you", v: "1,947", d: "In Carrier Ask" },
          ].map((x) => (
            <div key={x.k} className="bg-paper p-3.5 md:p-4">
              <dt className="text-[12px] leading-snug text-stone">{x.k}</dt>
              <dd className="mt-1 text-[24px] font-medium leading-none tracking-tight md:text-[26px]">{x.v}</dd>
              <dd className="mt-1.5 text-[12px] text-charcoal">{x.d}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Seen, quoted, bound by line */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-[14px] font-medium">What your agencies saw, quoted with you, and bound</h4>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-stone">
              <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-mist" aria-hidden="true" />Seen by agencies</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-harbor" aria-hidden="true" />Quoted with you</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-3 rounded-sm bg-copper" aria-hidden="true" />Bound with you</span>
            </div>
            <ul className="mt-3 space-y-3">
              {LINES.map((l) => (
                <li key={l.line}>
                  <div className="flex items-baseline justify-between text-[13px]">
                    <span className="text-ink">{l.line}</span>
                    <span className="tabular-nums text-stone">{l.seen.toLocaleString()} · {l.quoted} · {l.bound}</span>
                  </div>
                  <div className="relative mt-1 h-3 overflow-hidden rounded-sm bg-ice" aria-hidden="true">
                    <div className="absolute inset-y-0 left-0 rounded-sm bg-mist" style={{ width: `${(l.seen / max) * 100}%` }} />
                    <div className="absolute inset-y-0 left-0 rounded-sm bg-harbor" style={{ width: `${(l.quoted / max) * 100}%` }} />
                    <div className="absolute inset-y-0 left-0 rounded-sm bg-copper" style={{ width: `${(l.bound / max) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-[14px] font-medium">When an agency placed it elsewhere</h4>
            <div className="mt-2 flex h-3 overflow-hidden rounded-sm" aria-hidden="true">
              {LOSSES.map((x, i) => (
                <div key={x.why} className={i === 0 ? "bg-anchor" : i === 1 ? "bg-harbor" : "bg-slate"} style={{ width: `${x.pct}%` }} />
              ))}
            </div>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-charcoal">
              {LOSSES.map((x) => (
                <li key={x.why}>{x.why} <span className="tabular-nums text-stone">{x.pct}%</span></li>
              ))}
            </ul>
            <p className="mt-1 text-[12px] text-stone">Reasons agencies recorded. Other carriers are not named.</p>
          </div>

          <div className="space-y-6">
            {/* Appetite gaps */}
            <div>
              <h4 className="text-[14px] font-medium">Appetite gaps</h4>
              <ul className="mt-2 divide-y divide-ash border-y border-ash">
                {GAPS.map((g) => (
                  <li key={g.q} className="flex items-start justify-between gap-3 py-2.5">
                    <div>
                      <p className="text-[14px] text-ink">{g.q}</p>
                      <p className="text-[12px] text-stone">{g.note}</p>
                    </div>
                    <span className="shrink-0 text-[13px] tabular-nums text-charcoal">{g.n} asks</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agency growth */}
            <div>
              <h4 className="text-[14px] font-medium">Agencies growing fastest</h4>
              <ul className="mt-2 divide-y divide-ash border-y border-ash">
                {AGENCIES.map((a) => (
                  <li key={a.a} className="flex items-start justify-between gap-3 py-2.5">
                    <div className="min-w-0">
                      <p className="truncate text-[14px] text-ink">{a.a}</p>
                      <p className="text-[12px] text-stone">{a.d}</p>
                    </div>
                    <span className="shrink-0 text-[13px] font-medium tabular-nums text-success">{a.g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Sample carrier portal for the fictional Lakeshore Mutual: opportunities seen, quoted and bound by line, reasons business was placed elsewhere, appetite gaps from agency questions, and the fastest growing agencies.
      </figcaption>
    </figure>
  );
}

const STANDINGS = [
  { a: "Northfield Insurance Group", apps: 14, bound: 9, rep: "Dana K." },
  { a: "Two Rivers Insurance", apps: 12, bound: 8, rep: "Dana K." },
  { a: "Prairie Gate Agency", apps: 11, bound: 5, rep: "Marcus T." },
  { a: "Lakeview Risk Partners", apps: 7, bound: 4, rep: "Marcus T." },
];

/** A growth incentive in flight: the rules, the standings, and who needs a push. */
export function IncentiveTracker({ className = "" }: { className?: string }) {
  const lead = STANDINGS[0].bound;
  return (
    <figure className={`overflow-hidden rounded-xl border border-ash bg-paper text-ink shadow-[0_30px_80px_-30px_rgba(15,36,64,0.35)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-ash bg-linen px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-fog" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-fog" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-fog" aria-hidden="true" />
        <span className="ml-3 truncate text-[12px] text-stone">Incentives · Lakeshore Mutual</span>
        <span className="ml-auto"><SampleTag /></span>
      </div>
      <div className="p-5 md:p-7">
        <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-interactive">Growth incentive</p>
        <h3 className="mt-1 text-[20px] font-medium tracking-tight">Orlando life challenge</h3>
        <p className="mt-1 text-[13px] text-charcoal">Most term life policies bound in 60 days wins a trip for the agency and its Lakeshore rep.</p>

        <div className="mt-4">
          <div className="flex justify-between text-[12px] text-stone">
            <span>Day 38 of 60</span>
            <span>22 days left</span>
          </div>
          <div className="mt-1 h-2 overflow-hidden rounded-full bg-ice" aria-hidden="true">
            <div className="h-full rounded-full bg-interactive" style={{ width: `${(38 / 60) * 100}%` }} />
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-ash bg-ash text-center">
          {[
            { k: "Agencies in", v: "38" },
            { k: "Applications", v: "126" },
            { k: "Bound", v: "71" },
          ].map((x) => (
            <div key={x.k} className="bg-paper p-3">
              <dt className="text-[12px] text-stone">{x.k}</dt>
              <dd className="mt-0.5 text-[22px] font-medium leading-none tracking-tight">{x.v}</dd>
            </div>
          ))}
        </dl>

        <h4 className="mt-5 text-[14px] font-medium">Standings</h4>
        <ol className="mt-2 divide-y divide-ash border-y border-ash">
          {STANDINGS.map((s, i) => (
            <li key={s.a} className="flex items-center gap-3 py-2.5">
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold ${i === 0 ? "bg-copper text-midnight" : "bg-ice text-anchor"}`}>{i + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px]">{s.a}</p>
                <p className="text-[12px] text-stone">{s.apps} apps · rep {s.rep}</p>
              </div>
              <span className="shrink-0 text-[13px] tabular-nums text-charcoal">{s.bound} bound{i > 0 && <span className="text-stone"> · {lead - s.bound} back</span>}</span>
            </li>
          ))}
        </ol>

        <p className="mt-4 rounded-md bg-ice px-3 py-2 text-[13px] leading-relaxed text-anchor">
          <span className="font-semibold">Needs a push.</span> 14 agencies have quoted life but bound nothing yet. Their reps get the list Monday.
        </p>
      </div>
      <figcaption className="sr-only">
        Sample incentive tracker for the fictional Lakeshore Mutual: a 60-day life insurance challenge with progress, totals, agency standings with their reps, and agencies that need a push.
      </figcaption>
    </figure>
  );
}

const BRIEF = [
  {
    tag: "Product demand",
    h: "Homeowners demand is up 18%, and your quote share fell 4 points.",
    p: "214 questions from 31 agencies were about roofs over 20 years. Your guide declines them, and 61% were placed with another carrier.",
    act: "Product team: review the roof age rule. Reps: tell these 31 agencies which older roofs you still write.",
  },
  {
    tag: "Agency to call",
    h: "Northfield Insurance Group quoted 46 BOPs last month and sent you 3.",
    p: "Their producers asked about late night restaurants 9 times. Your guide is unclear on hours, so they quoted elsewhere.",
    act: "Rep: visit Northfield this week with the restaurant appetite sheet.",
  },
  {
    tag: "Appetite gap",
    h: "Short-term rentals came up 88 times, and your guide has no answer.",
    p: "40 agencies asked. Every one of them had to call someone or move on.",
    act: "Product team: decide yes or no, and publish a one-page bulletin.",
  },
];

/** The weekly brief: three insights, each with the next step and who owns it. */
export function DistributionBrief({ className = "" }: { className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-xl border border-ash bg-paper text-ink shadow-[0_30px_80px_-30px_rgba(15,36,64,0.35)] ${className}`}>
      {/* Mail client header */}
      <div className="border-b border-ash bg-linen px-5 py-3.5">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-[14px] font-medium">Your distribution brief, week of November 10</p>
          <SampleTag />
        </div>
        <p className="mt-1 truncate text-[12px] text-stone">HarborIQ to Central territory team, Lakeshore Mutual</p>
      </div>

      <div className="px-5 py-6 md:px-7">
        <p className="text-[15px] leading-relaxed text-charcoal">
          Good morning. 142 agencies in your Central territory worked 3,860 opportunities in the last 30 days. Three things stood out.
        </p>
        <ol className="mt-5 space-y-5">
          {BRIEF.map((b, i) => (
            <li key={b.tag} className="border-l-2 border-interactive pl-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-interactive">{i + 1}. {b.tag}</p>
              <p className="mt-1 text-[16px] font-medium leading-snug">{b.h}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-charcoal">{b.p}</p>
              <p className="mt-2 rounded-md bg-ice px-3 py-2 text-[13px] leading-relaxed text-anchor">
                <span className="font-semibold">Next step.</span> {b.act}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ash pt-5">
          <span className="btn-radius inline-flex items-center bg-anchor px-4 py-2 text-[13px] font-semibold text-paper">Open the network pulse</span>
          <span className="text-[12px] text-stone">Built from agencies that share with Lakeshore. No client details.</span>
        </div>
      </div>
      <figcaption className="sr-only">
        Sample weekly email brief for the fictional Lakeshore Mutual with three insights, each paired with a next step for the product team or a field rep.
      </figcaption>
    </figure>
  );
}
