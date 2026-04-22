"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
}

const TOOL_PILLS = [
  "AMS",
  "Rater",
  "CRM",
  "Reviews",
  "Carrier Docs",
  "Spreadsheets",
];

export function PatchworkCollapse() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".pc-tool-pill", ".pc-pill-arrow", ".pc-harbor-pill", ".pc-stat-label"],
          { opacity: 1, clearProps: "transform,filter,boxShadow,borderColor" },
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const label = rootRef.current?.querySelector<HTMLElement>(".pc-stat-label");
        const labelSplit = label
          ? new SplitText(label, {
              type: "words",
              wordsClass: "pc-stat-word inline-block overflow-hidden",
            })
          : null;

        // Stat label reveals once on first scroll-in (not part of the loop).
        gsap.set(".pc-stat-word", { yPercent: 110, opacity: 0 });

        const labelTl = gsap.timeline({ paused: true });
        labelTl.to(".pc-stat-word", {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out",
        });

        // Main looping show: drop in → gold wave → HarborIQ pulse → fade out → pause → loop.
        const loopTl = gsap.timeline({ repeat: -1, paused: true });

        // Phase 1: tool pills drop in (left-to-right by DOM order)
        loopTl.fromTo(
          ".pc-tool-pill",
          { y: -14, opacity: 0, rotate: -1, borderColor: "rgba(148, 163, 184, 0.4)", boxShadow: "0 0 0 rgba(196, 147, 90, 0)" },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
          },
          0,
        );

        // Phase 2: arrow appears
        loopTl.fromTo(
          ".pc-pill-arrow",
          { opacity: 0, scale: 0.7, x: -10 },
          { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "back.out(1.6)" },
          0.55,
        );

        // Phase 3: HarborIQ pill emerges
        loopTl.fromTo(
          ".pc-harbor-pill",
          { opacity: 0, scale: 0.6, x: 12, boxShadow: "0 0 0 rgba(196, 147, 90, 0)" },
          { opacity: 1, scale: 1, x: 0, duration: 0.65, ease: "back.out(1.7)" },
          0.8,
        );

        // Breathing pause — let viewer register the six tools
        loopTl.to({}, { duration: 0.7 });

        // Phase 4: gold wave — border + glow sweeps left-to-right through each pill
        loopTl.to(
          ".pc-tool-pill",
          {
            borderColor: "rgba(196, 147, 90, 1)",
            boxShadow: "0 0 16px rgba(196, 147, 90, 0.55)",
            duration: 0.28,
            stagger: 0.12,
            ease: "sine.out",
            yoyo: true,
            repeat: 1,
          },
          ">",
        );

        // Phase 5: HarborIQ pulses as the wave "arrives"
        loopTl.to(
          ".pc-harbor-pill",
          {
            scale: 1.06,
            boxShadow: "0 0 44px rgba(196, 147, 90, 0.75)",
            duration: 0.35,
            ease: "sine.out",
            yoyo: true,
            repeat: 1,
          },
          "-=0.35",
        );

        // Phase 6: pause at full visibility so the pulse lands
        loopTl.to({}, { duration: 0.5 });

        // Phase 7: everything fades out together
        loopTl.to(
          [".pc-tool-pill", ".pc-pill-arrow", ".pc-harbor-pill"],
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.in",
            stagger: 0.03,
          },
          ">",
        );

        // Phase 8: dark pause before next cycle
        loopTl.to({}, { duration: 0.8 });

        const st = ScrollTrigger.create({
          trigger: rootRef.current!,
          start: "top 85%",
          end: "bottom 10%",
          onEnter: () => {
            labelTl.play();
            loopTl.play(0);
          },
          onEnterBack: () => {
            loopTl.play();
          },
          onLeave: () => loopTl.pause(),
          onLeaveBack: () => loopTl.pause(),
        });

        return () => {
          st.kill();
          loopTl.kill();
          labelTl.kill();
          labelSplit?.revert();
        };
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="mt-10">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-4">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
          {TOOL_PILLS.map((label) => (
            <span
              key={label}
              className="pc-tool-pill inline-flex items-center rounded-full border border-slate/40 bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-slate md:text-[14px]"
            >
              {label}
            </span>
          ))}
        </div>
        <svg
          className="pc-pill-arrow shrink-0"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C4935A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
        <span className="pc-harbor-pill inline-flex items-center rounded-full bg-copper px-6 py-2.5 text-[15px] font-semibold tracking-tight text-white md:text-[16px]">
          HarborIQ
        </span>
      </div>
      <p className="pc-stat-label mt-6 text-center text-[13px] uppercase tracking-[0.1em] text-slate">
        Six tools. One platform. Zero per-user&nbsp;fees.
      </p>
    </div>
  );
}
