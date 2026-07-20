/**
 * Side-by-side: a composite "legacy AMS" screen vs the HarborIQ command
 * center. The left side is deliberately an unbranded archetype (dense
 * menu rows, cramped grid, gray chrome), not a recreation of any vendor's
 * UI: recognizable to anyone who has lived in one, actionable by no one's
 * legal team. Disclosure line included below the panels.
 */

import Image from "next/image";

const LEGACY_MENUS = [
  "File",
  "Edit",
  "Clients",
  "Policies",
  "Forms",
  "Reports",
  "Downloads",
  "Letters",
  "Tools",
  "Help",
];

const LEGACY_COLS = [22, 12, 10, 14, 12, 10, 12, 8];

function LegacyRow({ shade }: { shade: string }) {
  return (
    <div className={`flex gap-[3px] px-2 py-[5px] ${shade}`}>
      {LEGACY_COLS.map((w, i) => (
        <span
          key={i}
          className="h-[7px] rounded-[1px] bg-[#b9b6ab]"
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

export function ThenVsNow() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* THE LEGACY COMPOSITE */}
        <figure className="flex flex-col">
          <figcaption className="text-[12px] font-medium text-stone uppercase tracking-[0.1em] text-center mb-4">
            The screen your team tolerates
          </figcaption>
          <div className="flex-1 rounded-lg border border-[#c9c6bb] bg-[#efeeea] overflow-hidden shadow-sm select-none" aria-hidden="true">
            {/* Title bar */}
            <div className="flex items-center gap-2 bg-[#d5d2c8] px-3 py-2 border-b border-[#c9c6bb]">
              <span className="h-3.5 w-3.5 rounded-sm bg-[#a39f92]" />
              <span className="h-2.5 w-28 rounded-[1px] bg-[#a39f92]" />
              <span className="ml-auto flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-[1px] bg-[#b9b6ab]" />
                <span className="h-2.5 w-2.5 rounded-[1px] bg-[#b9b6ab]" />
                <span className="h-2.5 w-2.5 rounded-[1px] bg-[#b9b6ab]" />
              </span>
            </div>
            {/* Menu row */}
            <div className="flex gap-3 px-3 py-1.5 bg-[#e6e4dd] border-b border-[#c9c6bb] text-[10px] text-[#6f6c62] whitespace-nowrap overflow-hidden">
              {LEGACY_MENUS.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            {/* Toolbar row of tiny buttons */}
            <div className="flex gap-1 px-3 py-1.5 bg-[#efeeea] border-b border-[#c9c6bb]">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className="h-4 w-6 rounded-[2px] border border-[#c9c6bb] bg-[#e6e4dd]" />
              ))}
            </div>
            {/* Split: sidebar + dense grid */}
            <div className="flex">
              <div className="w-[26%] border-r border-[#c9c6bb] bg-[#e9e7e0] px-2 py-2 space-y-[7px]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-[1px] bg-[#c1beb2]" />
                    <span className="h-[7px] rounded-[1px] bg-[#b9b6ab]" style={{ width: `${55 + ((i * 13) % 35)}%` }} />
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {/* Column headers */}
                <div className="flex gap-[3px] px-2 py-[6px] bg-[#dcd9cf] border-b border-[#c9c6bb]">
                  {LEGACY_COLS.map((w, i) => (
                    <span key={i} className="h-[8px] rounded-[1px] bg-[#a39f92]" style={{ width: `${w}%` }} />
                  ))}
                </div>
                {Array.from({ length: 13 }).map((_, i) => (
                  <LegacyRow key={i} shade={i % 2 ? "bg-[#efeeea]" : "bg-[#e9e7e0]"} />
                ))}
              </div>
            </div>
          </div>
          <p className="text-[13px] text-mist leading-relaxed mt-4 text-center">
            Fourteen buttons, ten menus, every row the same gray. When
            everything looks equally important, nothing is. So you hunt.
            Every time.
          </p>
        </figure>

        {/* HARBORIQ */}
        <figure className="flex flex-col">
          <figcaption className="text-[12px] font-medium text-copper uppercase tracking-[0.1em] text-center mb-4">
            HarborIQ, this morning
          </figcaption>
          <div className="flex-1 rounded-lg overflow-hidden border-2 border-copper/40 shadow-[0_0_40px_rgba(196,147,90,0.18)] bg-anchor">
            <Image
              src="/images/harboriq-command-center-hero-no-shadow.webp"
              alt="The HarborIQ command center: one calm screen with today's priorities, renewals, and pipeline"
              width={1280}
              height={800}
              className="w-full h-full object-cover object-left-top"
            />
          </div>
          <p className="text-[13px] text-mist leading-relaxed mt-4 text-center">
            This screen already decided what matters before you sat down:
            today&rsquo;s three priorities, the renewals at risk, and a search
            box that answers carrier questions with sources.
          </p>
        </figure>
      </div>

      <p className="mt-8 text-[13px] text-slate leading-relaxed text-center max-w-2xl mx-auto">
        That gray screen is not any one vendor. It is all of them. If you
        recognized it instantly, you just proved the point.
      </p>
    </div>
  );
}
