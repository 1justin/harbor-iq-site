"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// Heptagonal layout: 7 outcome nodes around the HarborIQ hub.
// Center at (300, 240), radius 180. Angles at 360/7 ≈ 51.43° intervals.
// Ordering follows a loose agency lifecycle clockwise from the top.
const STEP = 360 / 7;
const CAPABILITIES = [
  { label: "Agency Management", angle: -90 + STEP * 0 },
  { label: "New Business", angle: -90 + STEP * 1 },
  { label: "Faster Quotes", angle: -90 + STEP * 2 },
  { label: "Proactive Renewals", angle: -90 + STEP * 3 },
  { label: "Client Loyalty", angle: -90 + STEP * 4 },
  { label: "Team Coaching", angle: -90 + STEP * 5 },
  { label: "Carrier Knowledge", angle: -90 + STEP * 6 },
];

const CX = 300;
const CY = 240;
const R = 180;
// Offset from the geometric node point to where the line should end
// (so it stops at the pill's edge, not behind it).
const LINE_END_OFFSET = 58;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

export function NewCore() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".nc-hub",
            ".nc-node",
            ".nc-spoke",
            ".nc-pulse",
            ".nc-tagline",
          ],
          { opacity: 1, clearProps: "transform" },
        );
        gsap.set(".nc-pulse", { opacity: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".nc-hub", { scale: 0.5, opacity: 0 });
        gsap.set(".nc-node", { scale: 0.6, opacity: 0, y: 10 });
        gsap.set(".nc-spoke", { strokeDashoffset: 200, opacity: 0.8 });
        gsap.set(".nc-pulse", { opacity: 0 });
        gsap.set(".nc-tagline", { opacity: 0, y: 8 });

        // Entrance — triggered once when section comes into view
        const entranceTl = gsap.timeline({ paused: true });

        entranceTl
          .to(".nc-hub", {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          })
          .to(
            ".nc-spoke",
            {
              strokeDashoffset: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.3",
          )
          .to(
            ".nc-node",
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "back.out(1.5)",
            },
            "-=0.45",
          )
          .to(
            ".nc-tagline",
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.2",
          );

        // Continuous pulse loop — gold dots travel from hub out to each node
        const pulseTl = gsap.timeline({ repeat: -1, paused: true });

        CAPABILITIES.forEach((cap, i) => {
          const target = polar(cap.angle, R - LINE_END_OFFSET);
          pulseTl.fromTo(
            `.nc-pulse-${i}`,
            { cx: CX, cy: CY, opacity: 0, r: 3 },
            {
              cx: target.x,
              cy: target.y,
              r: 5,
              opacity: 1,
              duration: 1.3,
              ease: "power1.inOut",
              keyframes: [
                { opacity: 0, r: 3, duration: 0 },
                { opacity: 1, r: 5, duration: 0.4 },
                { opacity: 1, r: 5, duration: 0.5 },
                { opacity: 0, r: 3, duration: 0.4 },
              ],
            },
            i * 0.22,
          );
        });

        // Pad the end so the full wave visibly settles before the next loop.
        pulseTl.to({}, { duration: 0.9 });

        const st = ScrollTrigger.create({
          trigger: rootRef.current!,
          start: "top 80%",
          end: "bottom 10%",
          onEnter: () => {
            entranceTl.play();
            pulseTl.play(0);
          },
          onEnterBack: () => {
            pulseTl.play();
          },
          onLeave: () => pulseTl.pause(),
          onLeaveBack: () => pulseTl.pause(),
        });

        return () => {
          st.kill();
          entranceTl.kill();
          pulseTl.kill();
        };
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="mt-10">
      <div
        className="relative mx-auto w-full"
        style={{ maxWidth: 600, aspectRatio: "600 / 480" }}
      >
        <svg
          viewBox="0 0 600 480"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {/* Spokes */}
          {CAPABILITIES.map((cap, i) => {
            const end = polar(cap.angle, R - LINE_END_OFFSET);
            return (
              <line
                key={`spoke-${i}`}
                className="nc-spoke"
                x1={CX}
                y1={CY}
                x2={end.x}
                y2={end.y}
                stroke="rgba(196, 147, 90, 0.35)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="200"
                strokeDashoffset="200"
              />
            );
          })}
          {/* Pulses — one per spoke, animated by GSAP */}
          {CAPABILITIES.map((_, i) => (
            <circle
              key={`pulse-${i}`}
              className={`nc-pulse nc-pulse-${i}`}
              cx={CX}
              cy={CY}
              r="4"
              fill="#C4935A"
              opacity="0"
            />
          ))}
        </svg>

        {/* HarborIQ hub */}
        <span
          className="nc-hub absolute inline-flex items-center rounded-full bg-copper px-5 py-2.5 text-[15px] font-semibold tracking-tight text-white shadow-[0_0_30px_rgba(196,147,90,0.35)] md:text-[16px]"
          style={{
            left: `${(CX / 600) * 100}%`,
            top: `${(CY / 480) * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          HarborIQ
        </span>

        {/* Capability nodes */}
        {CAPABILITIES.map((cap, i) => {
          const p = polar(cap.angle, R);
          return (
            <span
              key={cap.label}
              className="nc-node absolute inline-flex whitespace-nowrap items-center rounded-full border border-copper/50 bg-anchor/80 px-3.5 py-1.5 text-[12px] font-medium text-paper backdrop-blur md:text-[13px]"
              style={{
                left: `${(p.x / 600) * 100}%`,
                top: `${(p.y / 480) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {cap.label}
            </span>
          );
        })}
      </div>

      <p className="nc-tagline mt-10 text-center text-[13px] uppercase tracking-[0.1em] text-mist">
        One login. Every workflow. Built-in&nbsp;AI.
      </p>
    </div>
  );
}
