"use client";

import { useEffect, useRef, useState } from "react";
import { PRINCIPLES } from "./principles";

export function ManifestoPrinciples() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [litSet, setLitSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function onScroll() {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height - viewport;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? scrolled / total : rect.top < viewport ? 1 : 0);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setLitSet((prev) => (prev.has(idx) ? prev : new Set(prev).add(idx)));
            setCurrent((prev) => Math.max(prev, idx + 1));
          }
        });
      },
      { rootMargin: "0px 0px -35% 0px", threshold: 0.4 }
    );

    section.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const inSection = progress > 0 && progress < 1;

  return (
    <div ref={sectionRef}>
      {/* Reading progress bar, sits just below the sticky nav */}
      <div
        className="fixed top-16 left-0 right-0 h-[3px] z-40 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-copper origin-left transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Live counter */}
      <div
        className={`fixed top-20 right-6 z-40 text-[13px] font-medium tracking-wider text-stone tabular-nums transition-opacity duration-300 pointer-events-none ${
          inSection ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        {String(Math.max(current, 1)).padStart(2, "0")} / {String(PRINCIPLES.length).padStart(2, "0")}
      </div>

      <div className="max-w-3xl space-y-16">
        {PRINCIPLES.map((p, i) => {
          const id = String(i + 1).padStart(2, "0");
          const lit = litSet.has(i);
          return (
            <article
              key={id}
              id={id}
              data-index={i}
              className="relative pl-[108px] max-sm:pl-0 max-sm:pt-14 scroll-mt-28"
            >
              <span
                className={`absolute left-0 top-[-8px] max-sm:top-[-4px] text-[76px] max-sm:text-[56px] font-medium leading-none select-none transition-all duration-700 ease-out ${
                  lit ? "text-interactive" : "text-interactive/25"
                }`}
                aria-hidden="true"
              >
                {id}
              </span>
              <h2 className="text-[22px] font-medium text-ink tracking-tight leading-snug">
                <a href={`#${id}`} className="hover:text-interactive transition-colors">
                  {p.title}
                </a>
              </h2>
              <p className="mt-2.5 text-[17px] text-charcoal leading-[1.68]">{p.body}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
