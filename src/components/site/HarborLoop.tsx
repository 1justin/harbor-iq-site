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

import { SLICES, type LoopItem, type SliceId } from "@/components/site/slices";
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

/** Phone diagram: one path at a time, top to bottom, in its own coordinate space. */
const MW = 340;
const MH = 332;
const MHUB = { x: 170, y: 166, r: 54 };
const M_IN = `M170,64 L170,${MHUB.y - MHUB.r}`;
const M_OUT = `M170,${MHUB.y + MHUB.r} L170,268`;

/** The hub: pulsing rings, the small knowledge graph, the name. Shared by both layouts. */
function Hub({ x, y, r }: { x: number; y: number; r: number }) {
  const pts = [[-0.5, -0.45], [0.15, -0.62], [0.58, -0.25], [0.5, 0.35], [-0.05, 0.58], [-0.58, 0.28], [0, 0]].map(
    ([a, b]) => [x + a * r * 0.78, y + b * r * 0.78 - r * 0.09],
  );
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [6, 0], [6, 2], [6, 4], [6, 1], [6, 3], [6, 5]];
  const small = r < 70;
  return (
    <g>
      <circle cx={x} cy={y} r={r} className="hl-ring" />
      <circle cx={x} cy={y} r={r} className="hl-ring" />
      <circle cx={x} cy={y} r={r} className="hl-ring" />
      <circle cx={x} cy={y} r={r} className="hl-hub" />
      {edges.map(([a, b], i) => (
        <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} className="hl-ge" style={{ animationDelay: `${i * 0.21}s` }} />
      ))}
      {pts.map((pt, i) => (
        <circle key={i} cx={pt[0]} cy={pt[1]} r={(i === 6 ? 4.5 : 3.2) * (small ? 0.8 : 1)} className="hl-gn" style={{ animationDelay: `${i * 0.3}s` }} />
      ))}
      <text x={x} y={y + r - (small ? 17 : 14)} textAnchor="middle" style={{ font: `600 ${small ? 13 : 15}px "DM Sans", system-ui, sans-serif`, fill: "#1A1A18" }}>
        HarborIQ
      </text>
    </g>
  );
}

const STYLE = `
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
  .hl-swap { animation: hlswap .45s ease-out; }
  @keyframes hlswap { from { opacity:.45; transform:translateY(3px) } to { opacity:1; transform:none } }
  @media (prefers-reduced-motion: reduce) { .hl-ring, .hl-ge, .hl-gn, .hl-swap { animation:none } }
`;

export function HarborLoop({
  slice,
  autoplay = true,
  caption = true,
  className = "",
  items = SLICES,
  hubNote = "your record, your carrier knowledge, one meter",
}: {
  slice?: string;
  autoplay?: boolean;
  caption?: boolean;
  className?: string;
  /** Four paths. Defaults to the whole-product loop; the Intelligence page passes its own (INTEL_SLICES). */
  items?: LoopItem[];
  /** The line under the hub. */
  hubNote?: string;
}) {
  const pinned = slice ? items.findIndex((s) => s.id === slice) : -1;
  const [idx, setIdx] = useState(pinned >= 0 ? pinned : 0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (pinned >= 0 || !autoplay || reduce) return;
    const t = window.setInterval(() => setIdx((i) => (i + 1) % items.length), 4200);
    return () => window.clearInterval(t);
  }, [pinned, autoplay, reduce, items.length]);

  const active = pinned >= 0 ? pinned : idx;
  const S = items[active];

  return (
    <div className={className}>
      {/* Desktop: the diagram */}
      <div className="hidden md:block">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          role="img"
          aria-label={`Diagram of what goes into HarborIQ and what comes out: ${items.map((s) => `${s.input} in, ${s.output.toLowerCase()} out`).join("; ")}.`}
        >
          <defs><style>{STYLE}</style></defs>

          <text x={LX} y={44} className="hl-s">What goes in</text>
          <text x={RX + BW} y={44} textAnchor="end" className="hl-s">What comes out, and who wins</text>

          {/* paths */}
          {items.map((_, i) => (
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
                  <animateMotion dur="2.7s" begin={`-${d}s`} repeatCount="indefinite" path={inPath(active)} />
                </circle>
              ))}
              {[0.3, 1.2, 2.1].map((d) => (
                <circle key={`out${d}`} r="4" className="hl-dot">
                  <animateMotion dur="2.7s" begin={`-${d}s`} repeatCount="indefinite" path={outPath(active)} />
                </circle>
              ))}
            </>
          )}

          {/* hub */}
          <Hub x={HUB.x} y={HUB.y} r={HUB.r} />
          <text x={HUB.x} y={HUB.y + HUB.r + 24} textAnchor="middle" className="hl-s">
            {hubNote}
          </text>

          {/* inputs */}
          {items.map((s, i) => (
            <g key={s.id} className={i === active ? "" : "hl-dim"}>
              <rect x={LX} y={ROWS[i] - BH / 2} width={BW} height={BH} rx="8" className={`hl-box ${i === active ? "on" : ""}`} />
              <text x={LX + 16} y={ROWS[i] + 5} className="hl-t">{s.input}</text>
              <text x={LX + 16} y={ROWS[i] + BH / 2 + 17} className="hl-s">{s.inputSub}</text>
            </g>
          ))}
          {/* outputs + winners */}
          {items.map((s, i) => (
            <g key={s.id} className={i === active ? "" : "hl-dim"}>
              <rect x={RX} y={ROWS[i] - BH / 2} width={BW} height={BH} rx="8" className={`hl-box ${i === active ? "on" : ""}`} />
              <text x={RX + 16} y={ROWS[i] + 5} className="hl-t">{s.output}</text>
              <text x={RX + 16} y={ROWS[i] + BH / 2 + 17} className="hl-w">{s.winners.join(", ")} win</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Phone: the same diagram, one path at a time, then all four as rows you can tap. */}
      <div className="md:hidden">
        <svg
          viewBox={`0 0 ${MW} ${MH}`}
          className="mx-auto block h-auto w-full max-w-[420px]"
          role="img"
          aria-label={`Diagram: ${S.input} in, HarborIQ in the middle, ${S.output.toLowerCase()} out.`}
        >
          <defs><style>{STYLE}</style></defs>
          <path d={M_IN} className="hl-p on" />
          <path d={M_OUT} className="hl-p on" />
          {!reduce && (
            <g key={active}>
              {[0, 0.8].map((d) => (
                <circle key={`min${d}`} r="4" className="hl-dot">
                  <animateMotion dur="1.6s" begin={`-${d}s`} repeatCount="indefinite" path={M_IN} />
                </circle>
              ))}
              {[0.4, 1.2].map((d) => (
                <circle key={`mout${d}`} r="4" className="hl-dot">
                  <animateMotion dur="1.6s" begin={`-${d}s`} repeatCount="indefinite" path={M_OUT} />
                </circle>
              ))}
            </g>
          )}
          <Hub x={MHUB.x} y={MHUB.y} r={MHUB.r} />
          <g key={`in-${active}`} className="hl-swap">
            <rect x="12" y="8" width={MW - 24} height="56" rx="8" className="hl-box on" />
            <text x="28" y="31" className="hl-s">What goes in</text>
            <text x="28" y="51" className="hl-t">{S.input}</text>
          </g>
          <g key={`out-${active}`} className="hl-swap">
            <rect x="12" y="268" width={MW - 24} height="56" rx="8" className="hl-box on" />
            <text x="28" y="291" className="hl-t">{S.output}</text>
            <text x="28" y="310" className="hl-w">{S.winners.join(", ")} win</text>
          </g>
        </svg>
        <ol className="mt-4 divide-y divide-ash border-y border-ash">
          {items.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setIdx(i)}
                disabled={pinned >= 0}
                aria-pressed={i === active}
                className={`grid w-full grid-cols-[1fr_20px_1fr] items-center gap-2 px-1 py-3 text-left text-[14px] ${i === active ? "text-ink" : "text-stone"}`}
              >
                <span>{s.input}</span>
                <span aria-hidden="true" className={i === active ? "text-interactive" : "text-fog"}>→</span>
                <span className={i === active ? "font-medium" : ""}>{s.output}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      {caption && (
        <div className="mt-4 flex items-start gap-3" aria-live="polite">
          {pinned < 0 && (
            <div className="mt-1 hidden gap-1.5 md:flex" aria-hidden="true">
              {items.map((s, i) => (
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
