"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MockChrome } from "./mocks/MockChrome";
import { TaskListMock } from "./mocks/TaskListMock";
import { CarrierNewsMock } from "./mocks/CarrierNewsMock";
import { RenewalNudgeMock } from "./mocks/RenewalNudgeMock";
import { CarrierSearchMock } from "./mocks/CarrierSearchMock";
import { CarrierQuotesMock } from "./mocks/CarrierQuotesMock";
import { BirthdayDraftsMock } from "./mocks/BirthdayDraftsMock";
import { EndOfDayMock } from "./mocks/EndOfDayMock";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// Keep MockChrome referenced so the import isn't tree-shaken by tooling; the
// mock components below each render their own MockChrome internally.
void MockChrome;

// ─── Icons (small, uniform 16px glyphs for the timeline rail) ──────────────

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconList = (
  <Icon>
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </Icon>
);

const IconMegaphone = (
  <Icon>
    <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" />
    <path d="M15 8a4 4 0 0 1 0 8" />
  </Icon>
);

const IconShield = (
  <Icon>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Icon>
);

const IconSearch = (
  <Icon>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </Icon>
);

const IconBolt = (
  <Icon>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Icon>
);

const IconHeart = (
  <Icon>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </Icon>
);

const IconMoon = (
  <Icon>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </Icon>
);

// ─── Day moments ───────────────────────────────────────────────────────────

type DayMoment = {
  time: string;
  featNum: string;
  icon: ReactNode;
  eyebrow: string;
  headline: string;
  lead: string;
  body: string;
  mock: ReactNode;
};

const DAY: DayMoment[] = [
  {
    time: "8:15 AM",
    featNum: "01",
    icon: IconList,
    eyebrow: "Guides your day",
    headline: "Start every day knowing what matters",
    lead: "Linda opens her laptop. HarborIQ has her day laid out.",
    body: "The three things that actually move the business today. Surfaced, in order, with one tap to act.",
    mock: <TaskListMock />,
  },
  {
    time: "8:45 AM",
    featNum: "02",
    icon: IconMegaphone,
    eyebrow: "Tracks carrier moves",
    headline: "Know what every carrier did overnight",
    lead: "Appetite updates, new products, and guideline changes. Summarized before coffee.",
    body: "No more inbox archaeology. HarborIQ reads carrier bulletins so your team doesn't have to.",
    mock: <CarrierNewsMock />,
  },
  {
    time: "9:30 AM",
    featNum: "03",
    icon: IconShield,
    eyebrow: "Protects your book",
    headline: "Never leave a renewal on the table",
    lead: "A nudge: Whitfield Roofing renews in 14 days. Draft already written.",
    body: "Lost renewals are lost income. We flag the ones at risk weeks ahead, draft the outreach, and track replies.",
    mock: <RenewalNudgeMock />,
  },
  {
    time: "10:30 AM",
    featNum: "04",
    icon: IconSearch,
    eyebrow: "Knows every carrier",
    headline: "Answer any carrier question in seconds",
    lead: "A client asks if Travelers writes roofers in FL. Linda asks HarborIQ. Answer in 4 seconds.",
    body: "Searchable, cited, up-to-date. Every appetite guide, addendum, and worksheet your team has ever uploaded.",
    mock: <CarrierSearchMock />,
  },
  {
    time: "1:30 PM",
    featNum: "05",
    icon: IconBolt,
    eyebrow: "Quotes every carrier",
    headline: "Six carrier quotes in minutes, not hours",
    lead: "New prospect. Six carrier quotes come back while she pours coffee.",
    body: "Hours of re-keying become minutes. Send your client options ranked by fit, with coverage notes in plain English.",
    mock: <CarrierQuotesMock />,
  },
  {
    time: "3:30 PM",
    featNum: "06",
    icon: IconHeart,
    eyebrow: "Keeps clients close",
    headline: "Stay in front of clients without thinking about it",
    lead: "3 birthday SMS drafts sit in her approval queue. Tap, tap, tap, sent.",
    body: "Retention lives and dies on the small touches. We draft them; you approve them in one tap.",
    mock: <BirthdayDraftsMock />,
  },
  {
    time: "5:00 PM",
    featNum: "07",
    icon: IconMoon,
    eyebrow: "Keeps the business tight",
    headline: "Compliance, team snapshot, tomorrow ready",
    lead: "Before the laptop shuts: CEU hours, license renewals, who's winning, who's stuck. All in one glance.",
    body: "No spreadsheets. No surprises. Tomorrow's top three are already drafted.",
    mock: <EndOfDayMock />,
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export function DayInLife() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".dl-row", ".dl-icon", ".dl-header", ".dl-footer", ".dl-mock", ".dl-beat", ".dl-beat-best", ".dl-beat-highlight"],
          { opacity: 1, clearProps: "transform" },
        );
        // Rail rendered fully drawn
        gsap.set(".dl-rail-line", { strokeDashoffset: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Header fades/slides in once when section enters
        gsap.set(".dl-header > *", { opacity: 0, y: 16 });
        gsap.to(".dl-header > *", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".dl-header",
            start: "top 85%",
            once: true,
          },
        });

        // Timeline rail draws down tied to scroll (desktop only; rail is hidden below md)
        const rail = rootRef.current?.querySelector<SVGPathElement>(".dl-rail-line");
        if (rail) {
          const len = rail.getTotalLength();
          gsap.set(rail, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(rail, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".dl-rows",
              start: "top 75%",
              end: "bottom 80%",
              scrub: true,
            },
          });
        }

        // Each row fades + slides in; icon pops
        gsap.set(".dl-row", { opacity: 0, y: 24 });
        gsap.set(".dl-icon", { scale: 0, opacity: 0 });

        ScrollTrigger.batch(".dl-row", {
          start: "top 85%",
          once: true,
          onEnter: (batch) => {
            batch.forEach((row) => {
              const icon = row.querySelector(".dl-icon");
              const beats = row.querySelectorAll(".dl-beat, .dl-beat-best, .dl-beat-highlight");

              const tl = gsap.timeline();
              tl.to(row, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
              })
                .to(
                  icon,
                  { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2)" },
                  "-=0.4",
                )
                .from(
                  beats,
                  {
                    opacity: 0,
                    y: 6,
                    duration: 0.35,
                    stagger: 0.05,
                    ease: "power2.out",
                  },
                  "-=0.25",
                );
            });
          },
        });

        // Footer band
        gsap.set(".dl-footer", { opacity: 0, y: 20 });
        gsap.to(".dl-footer", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".dl-footer",
            start: "top 90%",
            once: true,
          },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="day-in-life"
      className="bg-paper py-14 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="dl-header max-w-3xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-interactive">
            A day in the life
          </p>
          <h2 className="mt-4 font-serif text-[34px] leading-[1.08] tracking-tight text-ink md:text-[52px]">
            Tuesday, 8:15 AM.{" "}
            <em className="font-serif italic text-anchor">
              Here&rsquo;s what HarborIQ does
            </em>{" "}
            before lunch.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-charcoal md:text-[17px]">
            Seven moments, one real day. Meet Linda, owner of a 4-person
            agency in Jacksonville. This is what her first 8 hours look like.
          </p>
        </div>

        {/* Timeline rail (SVG path, desktop only) + rows */}
        <div className="dl-rows relative mt-14 md:mt-20">
          {/* The SVG rail runs the full height of the rows. Hidden below md. */}
          <svg
            className="pointer-events-none absolute left-[78px] top-0 hidden h-full w-[2px] md:block"
            preserveAspectRatio="none"
            viewBox="0 0 2 100"
            aria-hidden="true"
          >
            <line
              className="dl-rail-line"
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="rgba(196, 147, 90, 0.35)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="space-y-10 md:space-y-14">
            {DAY.map((m) => (
              <li
                key={m.featNum}
                className="dl-row grid grid-cols-1 gap-4 md:grid-cols-[160px_1fr_1.15fr] md:items-start md:gap-8"
              >
                {/* Rail column (desktop) / chip (mobile) */}
                <div className="flex items-center gap-3 md:block">
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                    <div className="md:flex md:items-baseline md:gap-2">
                      <span className="font-serif text-[18px] font-medium text-ink md:text-[22px]">
                        {m.time}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-stone">
                      Feat {m.featNum}
                    </span>
                  </div>
                  <div className="dl-icon ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-copper/50 bg-paper text-copper shadow-sm md:ml-0 md:mt-3">
                    {m.icon}
                  </div>
                </div>

                {/* Copy card */}
                <div className="dl-copy rounded-2xl border border-ash/60 bg-linen/40 p-5 md:p-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-stone">
                    {m.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-[22px] italic leading-tight tracking-tight text-ink md:text-[28px]">
                    {m.headline}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-charcoal md:text-[15px]">
                    {m.lead}
                  </p>
                  <p className="mt-2 text-[13px] italic leading-relaxed text-stone md:text-[14px]">
                    {m.body}
                  </p>
                </div>

                {/* Mock card */}
                <div aria-hidden="true">{m.mock}</div>
              </li>
            ))}
          </ol>
        </div>

        {/* Footer band — narrative payoff, no CTA (Bottom CTA handles conversion) */}
        <div className="dl-footer mt-14 overflow-hidden rounded-2xl bg-anchor px-6 py-10 md:mt-20 md:px-12 md:py-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-copper/80">
            5:00 PM &middot; Linda shuts the laptop
          </p>
          <p className="mt-4 max-w-2xl font-serif text-[30px] italic leading-[1.1] tracking-tight text-paper md:text-[42px]">
            Four renewals saved. Six quotes sent. Zero tabs open.
          </p>
        </div>
      </div>
    </section>
  );
}
