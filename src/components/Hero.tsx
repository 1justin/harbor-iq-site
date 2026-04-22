"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CREEM_RESERVE, DEMO_URL, FOUNDING_CLOSE_DATE } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, SplitText);
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-bg-grain",
            ".hero-watch-demo",
            ".hero-eyebrow",
            ".hero-h1",
            ".hero-sub",
            ".hero-ctas",
            ".hero-disclaimer",
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
          gsap.set(".hero-watch-demo", { opacity: 0, y: 6 });
          gsap.set(".hero-eyebrow", { opacity: 0, y: 8 });
          gsap.set(".hero-h1-word", { yPercent: 110, opacity: 0 });
          gsap.set(".hero-sub", { opacity: 0, filter: "blur(6px)" });
          gsap.set(".hero-ctas > *", { scale: 0.9, opacity: 0, y: 8 });
          gsap.set(".hero-disclaimer", { opacity: 0 });
          gsap.set(".hero-video", {
            opacity: 0,
            scale: 1.04,
            clipPath: "inset(8% round 14px)",
            webkitClipPath: "inset(8% round 14px)",
          });

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.to(".hero-bg-grain", { opacity: 1, duration: 0.5 }, 0)
            .to(".hero-watch-demo", { opacity: 1, y: 0, duration: 0.45 }, 0.05)
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
      className="relative overflow-hidden bg-anchor py-16 md:py-24"
    >
      <div
        className="hero-bg-grain pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.45'/></svg>\")",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6" style={{ perspective: 1200 }}>
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
          <div className="flex-1 text-center md:max-w-[520px] md:text-left">
            <a
              ref={secondaryBtnRef}
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-watch-demo group inline-flex items-center gap-2 text-[14px] font-medium text-mist transition-colors hover:text-paper"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white/20">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                  aria-hidden="true"
                  className="translate-x-[1px] text-paper"
                >
                  <path d="M2 1.5v7l6-3.5-6-3.5z" />
                </svg>
              </span>
              Watch a demo
            </a>
            <p className="hero-eyebrow mt-6 text-[13px] font-medium uppercase tracking-[0.12em] text-interactive">
              The AI-native AMS + CRM for independent insurance agencies
            </p>
            <h1 className="hero-h1 mt-4 text-[36px] font-medium leading-[1.06] tracking-[-0.02em] text-paper md:text-[56px]">
              Run your agency from{" "}
              <span className="text-interactive">one smarter command center.</span>
            </h1>
            <p className="hero-sub mt-5 text-[17px] leading-relaxed text-mist md:text-[19px]">
              Pipeline, clients, quoting, and follow-ups in one platform. One login.
              Zero per-user&nbsp;fees.
            </p>
            <div className="hero-ctas mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <a
                ref={primaryBtnRef}
                href={CREEM_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary btn-radius bg-copper px-7 py-3.5 text-center text-[16px] font-medium text-white hover:bg-bronze"
              >
                Reserve Your Founding Spot
              </a>
            </div>
            <p className="hero-disclaimer mt-3 text-center text-[13px] text-mist md:text-left">
              Founding Partner pricing. 33% off locked for life. Offer closes {FOUNDING_CLOSE_DATE}.
            </p>
          </div>

          <div
            ref={videoWrapRef}
            className="hero-video flex-1 md:max-w-[580px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="overflow-hidden rounded-xl bg-anchor shadow-2xl shadow-midnight/50 ring-1 ring-white/10">
              <img
                src="/images/harboriq-command-center-hero-no-shadow.webp"
                alt="HarborIQ command center, an AI-native AMS and CRM for independent insurance agencies"
                className="h-auto w-full"
                width={1280}
                height={800}
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
