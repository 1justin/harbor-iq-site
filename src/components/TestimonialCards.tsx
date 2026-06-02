"use client";

import { useState } from "react";
import { testimonials, type Testimonial } from "@/lib/testimonials";

/**
 * Three-card testimonial grid. Strategically composed per card so each
 * answers a different buyer objection (carrier-side credibility, user
 * voice, principal voice). When more than three quotes accrue, swap to
 * a carousel by mapping over testimonials in a slider component.
 *
 * Headshot and logo paths gracefully degrade to an initials placeholder
 * and a hidden block respectively when the underlying file is missing,
 * so this component is safe to render in dev before assets are dropped
 * into public/testimonials/.
 */
export function TestimonialCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
      {testimonials.map((t) => (
        <TestimonialCard key={t.slug} testimonial={t} />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  const [headshotFailed, setHeadshotFailed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const showHeadshot = !!t.headshot && !headshotFailed;
  const showLogo = !!t.logo && !logoFailed;
  const initials = t.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <article className="flex flex-col rounded-2xl border border-ash bg-paper p-6 md:p-7">
      <div className="flex items-center gap-4">
        <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-linen ring-1 ring-ash">
          {showHeadshot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.headshot}
              alt={`${t.name}, ${t.role} at ${t.agency}`}
              className="h-full w-full object-cover"
              onError={() => setHeadshotFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[20px] font-medium text-stone">
              {initials}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-medium text-ink leading-tight">
            {t.name}
          </p>
          <p className="mt-1 text-[13px] text-stone leading-tight">
            {t.role}, {t.agency}
          </p>
        </div>
      </div>

      <blockquote className="mt-5 text-[15px] leading-relaxed text-charcoal md:text-[16px]">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {t.callouts && t.callouts.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {t.callouts.map((c) => (
            <li
              key={c}
              className="rounded-full bg-ice px-3 py-1 text-[12px] font-medium text-interactive"
            >
              {c}
            </li>
          ))}
        </ul>
      )}

      {showLogo &&
        (t.logoOnDark ? (
          <div className="mt-auto pt-6">
            <div className="inline-flex items-center rounded-md bg-anchor px-3 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.logo}
                alt={`${t.agency} logo`}
                className="h-5 w-auto max-w-[120px] object-contain object-left"
                onError={() => setLogoFailed(true)}
              />
            </div>
          </div>
        ) : (
          <div className="mt-auto pt-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.logo}
              alt={`${t.agency} logo`}
              className="h-10 w-auto max-w-[140px] object-contain object-left"
              onError={() => setLogoFailed(true)}
            />
          </div>
        ))}
    </article>
  );
}
