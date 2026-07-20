"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { DEMO_URL, MARKETS_START_URL, PRICING } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, SplitText);
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-bg-grain",
            ".hero-eyebrow",
            ".hero-h1",
            ".hero-sub",
            ".hero-ctas",
            ".hero-disclaimer",
            ".hero-stats",
            ".hero-video",
          ],
          { opacity: 1, clearProps: "transform,filter,clipPath" },
        );
      });

      mm.add(
        {
          isDesktop: "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
          isMobile: "(max-width: 768px) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { isMobile } = ctx.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          const headline = rootRef.current?.querySelector<HTMLElement>(".hero-h1");
          const headlineSplit = headline
            ? new SplitText(headline, {
                type: "words",
                wordsClass: "hero-h1-word inline-block overflow-hidden",
              })
            : null;

          gsap.set(".hero-bg-grain", { opacity: 0 });
          gsap.set(".hero-eyebrow", { opacity: 0, y: 8 });
          gsap.set(".hero-h1-word", { yPercent: 110, opacity: 0 });
          gsap.set(".hero-sub", { opacity: 0, filter: "blur(6px)" });
          gsap.set(".hero-ctas > *", { scale: 0.9, opacity: 0, y: 8 });
          gsap.set(".hero-disclaimer", { opacity: 0 });
          gsap.set(".hero-stats > *", { opacity: 0, y: 8 });
          gsap.set(".hero-video", {
            opacity: 0,
            scale: 1.04,
            clipPath: "inset(8% round 14px)",
            webkitClipPath: "inset(8% round 14px)",
          });

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.to(".hero-bg-grain", { opacity: 1, duration: 0.5 }, 0)
            .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.5 }, 0.2)
            .to(
              ".hero-h1-word",
              { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.055 },
              0.25,
            )
            .to(".hero-sub", { opacity: 1, filter: "blur(0px)", duration: 0.55 }, 0.85)
            .to(
              ".hero-ctas > *",
              {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out(1.4)",
                stagger: 0.08,
              },
              1.05,
            )
            .to(".hero-disclaimer", { opacity: 1, duration: 0.35 }, 1.25)
            .to(
              ".hero-stats > *",
              { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
              1.4,
            )
            .to(
              ".hero-video",
              {
                opacity: 1,
                scale: 1,
                clipPath: "inset(0% round 14px)",
                webkitClipPath: "inset(0% round 14px)",
                duration: isMobile ? 0.7 : 1.0,
                ease: "expo.out",
              },
              isMobile ? 0.5 : 0.65,
            );

          return () => {
            headlineSplit?.revert();
          };
        },
      );

      mm.add(
        "(hover: hover) and (prefers-reduced-motion: no-preference)",
        () => {
          const buttons = [primaryBtnRef.current].filter(
            (b): b is HTMLAnchorElement => !!b,
          );

          const cleanups: Array<() => void> = [];

          buttons.forEach((btn) => {
            const xTo = gsap.quickTo(btn, "x", { duration: 0.35, ease: "power3" });
            const yTo = gsap.quickTo(btn, "y", { duration: 0.35, ease: "power3" });
            const onMove = (e: MouseEvent) => {
              const rect = btn.getBoundingClientRect();
              const cx = rect.left + rect.width / 2;
              const cy = rect.top + rect.height / 2;
              const dx = Math.max(-8, Math.min(8, (e.clientX - cx) * 0.22));
              const dy = Math.max(-8, Math.min(8, (e.clientY - cy) * 0.22));
              xTo(dx);
              yTo(dy);
            };
            const onLeave = () => {
              xTo(0);
              yTo(0);
            };
            const onDown = () => gsap.to(btn, { scale: 0.96, duration: 0.1 });
            const onUp = () =>
              gsap.to(btn, { scale: 1, duration: 0.25, ease: "back.out(2)" });

            btn.addEventListener("mousemove", onMove);
            btn.addEventListener("mouseleave", onLeave);
            btn.addEventListener("mousedown", onDown);
            btn.addEventListener("mouseup", onUp);
            cleanups.push(() => {
              btn.removeEventListener("mousemove", onMove);
              btn.removeEventListener("mouseleave", onLeave);
              btn.removeEventListener("mousedown", onDown);
              btn.removeEventListener("mouseup", onUp);
            });
          });

          const video = videoWrapRef.current;
          if (video) {
            const rxTo = gsap.quickTo(video, "rotationY", {
              duration: 0.45,
              ease: "power3",
            });
            const ryTo = gsap.quickTo(video, "rotationX", {
              duration: 0.45,
              ease: "power3",
            });
            const onMove = (e: MouseEvent) => {
              const rect = video.getBoundingClientRect();
              const cx = rect.left + rect.width / 2;
              const cy = rect.top + rect.height / 2;
              rxTo(((e.clientX - cx) / rect.width) * 5);
              ryTo(-((e.clientY - cy) / rect.height) * 5);
            };
            const onLeave = () => {
              rxTo(0);
              ryTo(0);
            };
            video.addEventListener("mousemove", onMove);
            video.addEventListener("mouseleave", onLeave);
            cleanups.push(() => {
              video.removeEventListener("mousemove", onMove);
              video.removeEventListener("mouseleave", onLeave);
            });
          }

          return () => cleanups.forEach((fn) => fn());
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-anchor"
    >
      <div
        className="hero-bg-grain pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.45'/></svg>\")",
        }}
      />

      <div
        className="relative grid items-center gap-10 md:grid-cols-2 md:gap-0"
        style={{ perspective: 1200 }}
      >
        <div className="px-6 pt-16 md:py-24 md:pl-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] md:pr-12 text-center md:text-left">
          <p className="hero-eyebrow text-[13px] font-medium uppercase tracking-[0.12em] text-paper">
            Built for independent insurance agencies
          </p>
          <h1 className="hero-h1 mt-4 text-[36px] font-medium leading-[1.06] tracking-[-0.02em] text-paper md:text-[56px]">
            Manage your markets.{" "}
            <span className="text-interactive">Then run your agency.</span>
          </h1>
          <p className="hero-sub mt-5 text-[17px] leading-relaxed text-mist md:text-[19px]">
            HarborIQ starts as the carrier intelligence your whole team uses every
            day: cited appetite answers, logins, documents, and news for every
            carrier you work with. ${PRICING.markets.monthly} a month, any size,
            live the same day, no migration. When you are ready to move the book,
            the same login runs the whole&nbsp;agency.
          </p>
          <div className="hero-ctas mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              ref={primaryBtnRef}
              href={MARKETS_START_URL}
              className="cta-primary btn-radius bg-copper px-7 py-3.5 text-center text-[16px] font-medium text-white hover:bg-bronze"
            >
              Start with Markets
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary btn-radius border border-mist/40 px-7 py-3.5 text-center text-[16px] font-medium text-paper hover:border-paper"
            >
              Book an Agency demo
            </a>
          </div>
          <p className="hero-disclaimer mt-3 text-center text-[13px] text-mist md:text-left">
            14-day free trial on Markets. Published pricing. Month to month.
          </p>
        </div>

        <div
          ref={videoWrapRef}
          className="hero-video relative flex items-center justify-center px-6 pb-16 md:px-0 md:py-12"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src="/images/harboriq-command-center-hero-no-shadow.webp"
            alt="HarborIQ command center, an AI-native AMS and CRM for independent insurance agencies"
            className="block h-auto w-full max-w-[720px] md:max-w-none md:w-[112%] md:-translate-x-[2%]"
            width={1280}
            height={800}
            decoding="async"
          />
        </div>
      </div>

      <div className="relative border-t border-white/10 mt-2 md:mt-0">
        <div className="hero-stats mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3 md:gap-12 md:py-12">
          <div>
            <p className="text-[18px] md:text-[20px] font-medium text-paper leading-snug tracking-tight">
              Cited answers across 75 carriers.
            </p>
            <p className="mt-2 text-[14px] text-mist leading-relaxed">
              Ask any appetite question. Get the source, with a date on it.
            </p>
          </div>
          <div>
            <p className="text-[18px] md:text-[20px] font-medium text-paper leading-snug tracking-tight">
              One price for the whole team.
            </p>
            <p className="mt-2 text-[14px] text-mist leading-relaxed">
              Never a fee per person. Hiring never raises your bill.
            </p>
          </div>
          <div>
            <p className="text-[18px] md:text-[20px] font-medium text-paper leading-snug tracking-tight">
              Live the same day.
            </p>
            <p className="mt-2 text-[14px] text-mist leading-relaxed">
              Markets needs no migration. The book moves when you are ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
