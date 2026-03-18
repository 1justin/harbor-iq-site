"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const bentoItems = [
  {
    title: "Command Center",
    description: "Your daily directive. What to do first, who to follow up with, what's expiring. One screen, no guessing.",
    image: "/images/harboriq-screen-example-command-center.png",
    span: "col-span-2 row-span-2",
    size: "large",
  },
  {
    title: "Pipeline CRM",
    description: "Track every prospect from first call to bound policy. No more sticky notes.",
    image: "/images/harboriq-screen-example-new-business-pipeline.png",
    span: "col-span-1 row-span-1",
    size: "medium",
  },
  {
    title: "Client Renewals",
    description: "Complete client history, policy details, and document storage in one view.",
    image: "/images/harboriq-screen-example-client-renewals.png",
    span: "col-span-1 row-span-1",
    size: "medium",
  },
  {
    title: "AI-Assisted Quoting",
    description: "Enter client data once. HarborIQ understands carrier differences so you don't have to.",
    image: "/images/harboriq-prototype-ai-quoting-tool.png",
    span: "col-span-1 row-span-1",
    size: "medium",
  },
  {
    title: "Team Performance",
    description: "See who's quoting, who's closing, and where the bottlenecks are.",
    image: "/images/harboriq-screen-example-team-performance.png",
    span: "col-span-1 row-span-1",
    size: "medium",
  },
  {
    title: "Marketing Automation",
    description: "Auto-generated social posts, rate alerts, and campaigns. 10 hours of work in minutes.",
    image: "/images/harboriq-screen-example-marketing-automations.png",
    span: "col-span-1 row-span-1",
    size: "medium",
  },
];

export function BentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".bento-card");
            cards.forEach((card) => card.classList.add("animate-in"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={gridRef}
      className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3"
      style={{ gridAutoRows: "minmax(200px, auto)" }}
    >
      {bentoItems.map((item, i) => (
        <div
          key={item.title}
          className={`bento-card feature-card bg-pure rounded-xl border border-ash overflow-hidden relative group ${
            i === 0 ? "md:col-span-2 md:row-span-2" : ""
          }`}
        >
          {/* Image */}
          <div className="relative w-full h-full min-h-[200px]">
            <Image
              src={item.image}
              alt={`HarborIQ ${item.title}`}
              fill
              className="object-cover object-top"
              sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            />
            {/* Bottom gradient overlay for text */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent pt-16 pb-4 px-5">
              <h3 className="text-[16px] font-medium text-white mb-1">{item.title}</h3>
              {i === 0 && (
                <p className="text-[14px] text-white/80 leading-relaxed">{item.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
