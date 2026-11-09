"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/components/site/useReducedMotion";

/**
 * The HarborIQ loop (mock, 2026-11-08). One diagram the whole site reuses:
 * what goes in (left), HarborIQ (center), what comes out (right), and who
 * wins under each output, carriers and clients included. Autoplay cycles
 * one path at a time; `slice` pins a single path for the feature sections.
 * Reduced motion: no travelling dots, the first slice stays lit.
 */

import { SLICES, type SliceId } from "@/components/site/slices";
export { SLICES, type SliceId };

const W = 1120;
const H = 530;
const BW = 290;
const BH = 50;
const HUB = { x: 560, y: 262, r: 92 };
const ROWS = [86, 204, 322, 440];
const LX = 16;
const RX = W - BW - 16;

function inPath(i: number) {
  const y = ROWS[i];
  const x0 = LX + BW;
  const x1 = HUB.x - HUB.r;
  return `M${x0},${y} C${x0 + 110},${y} ${x1 - 90},${HUB.y} ${x1},${HUB.y}`;
}
function outPath(i: number) {
  const y = ROWS[i];
  const x0 = HUB.x + HUB.r;
  const x1 = RX;
  return `M${x0},${HUB.y} C${x0 + 90},${HUB.y} ${x1 - 110},${y} ${x1},${y}`;
}

export function HarborLoop({
  slice,
  autoplay = true,
  caption = true,
  className = "",
}: {
  slice?: SliceId;
  autoplay?: boolean;
  caption?: boolean;
  className?: string;
}) {
  const pinned = slice ? SLICES.findIndex((s) => s.id === slice) : -1;
  const [idx, setIdx] = useState(pinned >= 0 ? pinned : 0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (pinned >= 0 || !autoplay || reduce) return;
    const t = window.setInterval(() => setIdx((i) => (i + 1) % SLICES.length), 4200);
    return () => window.clearInterval(t);
  }, [pinned, autoplay, reduce]);

  const active = pinned >= 0 ? pinned : idx;
  const S = SLICES[active];

  return (
    <div className={className}>
      {/* Desktop: the diagram */}
      <div className="hidden md:block">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          role="img"
          aria-label="Diagram: carrier guides, your book, your inbox and your contacts go into HarborIQ; cited answers, renewals, follow-ups and appetite by state come out, for CSRs, producers, owners, clients and carriers."
        >
          <defs>
            <style>{`
              .hl-box { fill:#fff; stroke:#E0DDD6; stroke-width:1.2; transition: stroke .35s, fill .35s; }
              .hl-box.on { stroke:#2E75B6; fill:#E8EEF6; }
              .hl-t { font: 500 15px "DM Sans", system-ui, sans-serif; fill:#1A1A18; }
              .hl-s { font: 400 12px "DM Sans", system-ui, sans-serif; fill:#8A8778; }
              .hl-w { font: 500 12px "DM Sans", system-ui, sans-serif; fill:#3B6FA0; }
              .hl-p { fill:none; stroke:#E0DDD6; stroke-width:1.4; stroke-dasharray:3 5; transition: stroke .35s, opacity .35s; }
              .hl-p.on { stroke:#2E75B6; stroke-dasharray:none; stroke-width:2; }
              .hl-dim { opacity:.45; }
              .hl-hub { fill:#fff; stroke:#2E75B6; stroke-width:2; }
              .hl-ring { fill:none; stroke:#2E75B6; stroke-width:1; transform-box:fill-box; transform-origin:center; animation: hlpulse 3.8s ease-out infinite; }
              .hl-ring:nth-of-type(2){ animation-delay:1.25s } .hl-ring:nth-of-type(3){ animation-delay:2.5s }
              @keyframes hlpulse { 0%{ transform:scale(.85); opacity:.5 } 100%{ transform:scale(1.65); opacity:0 } }
              .hl-ge { stroke:#2E75B6; stroke-width:1; opacity:.18; animation: hledge 2.6s ease-in-out infinite; }
              @keyframes hledge { 0%,100%{ opacity:.12 } 50%{ opacity:.75 } }
              .hl-gn { fill:#2E75B6; animation: hlnode 2.6s ease-in-out infinite; }
              @keyframes hlnode { 0%,100%{ opacity:.35 } 50%{ opacity:1 } }
              .hl-dot { fill:#2E75B6; }
              @media (prefers-reduced-motion: reduce) { .hl-ring, .hl-ge, .hl-gn { animation:none } }
            `}</style>
          </defs>

          <text x={LX} y={44} className="hl-s">What goes in</text>
          <text x={RX + BW} y={44} textAnchor="end" className="hl-s">What comes out, and who wins</text>

          {/* paths */}
          {SLICES.map((_, i) => (
            <g key={`p${i}`} className={i === active ? "" : "hl-dim"}>
              <path d={inPath(i)} className={`hl-p ${i === active ? "on" : ""}`} />
              <path d={outPath(i)} className={`hl-p ${i === active ? "on" : ""}`} />
            </g>
          ))}

          {/* travelling dots on the active path */}
          {!reduce && (
            <>
              {[0, 0.9, 1.8].map((d) => (
                <circle key={`in${d}`} r="4" className="hl-dot">
                  <animateMotion dur="2.7s" begin={`${d}s`} repeatCount="indefinite" path={inPath(active)} />
                </circle>
              ))}
              {[0.3, 1.2, 2.1].map((d) => (
                <circle key={`out${d}`} r="4" className="hl-dot">
                  <animateMotion dur="2.7s" begin={`${d}s`} repeatCount="indefinite" path={outPath(active)} />
                </circle>
              ))}
            </>
          )}

          {/* hub */}
          <circle cx={HUB.x} cy={HUB.y} r={HUB.r} className="hl-ring" />
          <circle cx={HUB.x} cy={HUB.y} r={HUB.r} className="hl-ring" />
          <circle cx={HUB.x} cy={HUB.y} r={HUB.r} className="hl-ring" />
          <circle cx={HUB.x} cy={HUB.y} r={HUB.r} className="hl-hub" />
          {(() => {
            const pts = [[-0.5, -0.45], [0.15, -0.62], [0.58, -0.25], [0.5, 0.35], [-0.05, 0.58], [-0.58, 0.28], [0, 0]].map(
              ([a, b]) => [HUB.x + a * HUB.r * 0.78, HUB.y + b * HUB.r * 0.78 - 8],
            );
            const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [6, 0], [6, 2], [6, 4], [6, 1], [6, 3], [6, 5]];
            return (
              <g>
                {edges.map(([a, b], i) => (
                  <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} className="hl-ge" style={{ animationDelay: `${i * 0.21}s` }} />
                ))}
                {pts.map((p, i) => (
                  <circle key={i} cx={p[0]} cy={p[1]} r={i === 6 ? 4.5 : 3.2} className="hl-gn" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
              </g>
            );
          })()}
          <text x={HUB.x} y={HUB.y + HUB.r - 14} textAnchor="middle" style={{ font: '600 15px "DM Sans", system-ui, sans-serif', fill: "#1A1A18" }}>
            HarborIQ
          </text>
          <text x={HUB.x} y={HUB.y + HUB.r + 24} textAnchor="middle" className="hl-s">
            your record, your carrier knowledge, one meter
          </text>

          {/* inputs */}
          {SLICES.map((s, i) => (
            <g key={s.id} className={i === active ? "" : "hl-dim"}>
              <rect x={LX} y={ROWS[i] - BH / 2} width={BW} height={BH} rx="8" className={`hl-box ${i === active ? "on" : ""}`} />
              <text x={LX + 16} y={ROWS[i] + 5} className="hl-t">{s.input}</text>
              <text x={LX + 16} y={ROWS[i] + BH / 2 + 17} className="hl-s">{s.inputSub}</text>
            </g>
          ))}
          {/* outputs + winners */}
          {SLICES.map((s, i) => (
            <g key={s.id} className={i === active ? "" : "hl-dim"}>
              <rect x={RX} y={ROWS[i] - BH / 2} width={BW} height={BH} rx="8" className={`hl-box ${i === active ? "on" : ""}`} />
              <text x={RX + 16} y={ROWS[i] + 5} className="hl-t">{s.output}</text>
              <text x={RX + 16} y={ROWS[i] + BH / 2 + 17} className="hl-w">{s.winners.join(", ")} win</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Phone: the same loop, stacked */}
      <div className="md:hidden">
        <ol className="space-y-3">
          {SLICES.map((s, i) => (
            <li key={s.id} className={`rounded-lg border p-4 ${i === active ? "border-interactive bg-ice" : "border-ash bg-paper"}`}>
              <p className="text-[12px] text-stone">{s.input}</p>
              <p className="mt-1 text-[16px] font-medium text-ink">{s.output}</p>
              <p className="mt-1 text-[12px] font-medium text-harbor">{s.winners.join(", ")} win</p>
            </li>
          ))}
        </ol>
      </div>

      {caption && (
        <div className="mt-4 flex items-start gap-3" aria-live="polite">
          {pinned < 0 && (
            <div className="mt-1 flex gap-1.5" aria-hidden="true">
              {SLICES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-interactive" : "w-1.5 bg-ash"}`}
                  aria-label={s.output}
                />
              ))}
            </div>
          )}
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-charcoal">{S.caption}</p>
        </div>
      )}
    </div>
  );
}
