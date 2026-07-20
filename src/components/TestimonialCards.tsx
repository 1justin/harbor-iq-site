"use client";

import { useState } from "react";
import { testimonials, type Testimonial } from "@/lib/testimonials";

/**
 * Two wide editorial testimonial cards. On large screens the cards share
 * row tracks via CSS subgrid, so the bands align when you glance left to
 * right: quote row with quote row, tag row with tag row, attribution row
 * with attribution row. Below lg they stack as photo-top cards.
 *
 * Headshot and logo paths gracefully degrade (initials placeholder /
 * hidden block) when a file is missing.
 */
export function TestimonialCards() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr] lg:gap-y-0">
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
    <article className="overflow-hidden rounded-2xl border border-ash bg-paper lg:row-span-3 lg:grid lg:grid-cols-[200px_1fr] lg:grid-rows-subgrid xl:grid-cols-[230px_1fr]">
      {/* Photo panel: spans all three rows on large screens */}
      <div className="relative aspect-[16/10] bg-linen lg:row-span-3 lg:aspect-auto">
        {showHeadshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={t.headshot}
            alt={`${t.name}, ${t.role} at ${t.agency}`}
            className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
            onError={() => setHeadshotFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[28px] font-medium text-stone">
            {initials}
          </div>
        )}
      </div>

      {/* Row 1: quote */}
      <blockquote className="p-6 pb-0 font-serif text-[17px] italic leading-relaxed text-ink md:p-7 md:pb-0 md:text-[18px] lg:col-start-2">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Row 2: callout tags (rendered even when empty so rows stay aligned) */}
      <ul className="flex flex-wrap gap-2 px-6 pt-4 md:px-7 lg:col-start-2">
        {(t.callouts ?? []).map((c) => (
          <li
            key={c}
            className="rounded-full bg-ice px-3 py-1 text-[12px] font-medium text-interactive"
          >
            {c}
          </li>
        ))}
      </ul>

      {/* Row 3: attribution + logo, pinned to the card foot */}
      <div className="mx-6 mb-6 mt-4 flex items-end justify-between gap-4 border-t border-ash pt-4 md:mx-7 md:mb-7 lg:col-start-2 lg:self-end">
        <div className="min-w-0">
          <p className="text-[15px] font-medium leading-tight text-ink">
            {t.name}
          </p>
          <p className="mt-1 text-[13px] leading-tight text-stone">
            {t.role}, {t.agency}
          </p>
        </div>
        {showLogo &&
          (t.logoOnDark ? (
            <div className="inline-flex shrink-0 items-center rounded-md bg-anchor px-3 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.logo}
                alt={`${t.agency} logo`}
                className="h-5 w-auto max-w-[110px] object-contain object-right"
                onError={() => setLogoFailed(true)}
              />
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.logo}
              alt={`${t.agency} logo`}
              className="h-9 w-auto max-w-[120px] shrink-0 object-contain object-right"
              onError={() => setLogoFailed(true)}
            />
          ))}
      </div>
    </article>
  );
}
