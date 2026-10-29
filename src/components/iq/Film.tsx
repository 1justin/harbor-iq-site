"use client";

import { useRef, useState } from "react";
import { findClip, formatDuration, posterUrl, videoUrl } from "@/lib/watch/clips";

/**
 * A product film from the /watch library (Vercel Blob). Poster first, nothing
 * downloads until the visitor presses play (preload="none"), so the homepage
 * stays light even with two films on it.
 */
export function Film({
  slug,
  caption,
  label,
  id,
  dark = false,
}: {
  slug: string;
  caption: string;
  /** Short name on the cover, e.g. "Carrier Ask". Defaults to the clip title. */
  label?: string;
  /** Lets another button on the page start this film (see PlayFilmButton). */
  id?: string;
  /** Caption colors for a navy section. */
  dark?: boolean;
}) {
  const clip = findClip(slug);
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  if (!clip) return null;
  const length = formatDuration(clip.seconds);

  const play = () => {
    setStarted(true);
    void ref.current?.play();
  };

  return (
    <figure className="m-0 min-w-0">
      <div className={`relative overflow-hidden aspect-video rounded-xl border bg-midnight shadow-lg ${dark ? "border-white/15" : "border-ash"}`}>
        <video
          ref={ref}
          id={id}
          className="block h-full w-full object-contain"
          controls={started}
          playsInline
          preload="none"
          poster={posterUrl(clip)}
          aria-label={`${clip.title}, product walkthrough`}
          onPlay={() => setStarted(true)}
        >
          <source src={videoUrl(clip)} type="video/mp4" />
        </video>
        {!started && (
          <button
            type="button"
            onClick={play}
            className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#0B223F]/45 to-transparent to-75% text-white"
            aria-label={`Play ${clip.title}`}
          >
            <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white text-anchor shadow-[0_5px_25px_rgba(0,0,0,0.2)] transition group-hover:scale-105 group-hover:bg-interactive group-hover:text-white">
              <svg width="21" height="24" viewBox="0 0 21 24" fill="currentColor" aria-hidden="true">
                <path d="M4 2v20l16-10z" />
              </svg>
            </span>
            <span className="absolute bottom-4 left-5 text-[13px] font-medium">
              Watch {label ?? clip.title} · {length}
            </span>
          </button>
        )}
      </div>
      <figcaption className={`flex items-start justify-between gap-5 pt-3 text-[13px] ${dark ? "text-mist" : "text-stone"}`}>
        <strong className={`font-medium ${dark ? "text-paper" : "text-ink"}`}>{caption}</strong>
        <span className="shrink-0">{length} · Sound on</span>
      </figcaption>
    </figure>
  );
}

/** Scrolls to a Film and starts it. For "Watch the demo" buttons elsewhere on the page. */
export function PlayFilmButton({
  target,
  className,
  children,
}: {
  target: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const v = document.getElementById(target) as HTMLVideoElement | null;
        if (!v) return;
        v.scrollIntoView({ behavior: "smooth", block: "center" });
        void v.play();
      }}
    >
      {children}
    </button>
  );
}
