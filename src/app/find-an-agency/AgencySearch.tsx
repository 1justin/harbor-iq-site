"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { AgencyProfile } from "@/lib/marketplace";

/** Filters the example profiles in the browser. No request leaves the page. */
export function AgencySearch({ profiles }: { profiles: AgencyProfile[] }) {
  const [need, setNeed] = useState("");
  const [city, setCity] = useState("");

  const results = useMemo(() => {
    const words = need.toLowerCase().split(/\s+/).filter(Boolean);
    return profiles.filter(
      (p) =>
        (!city || p.city === city) &&
        words.every((w) => p.keywords.includes(w) || p.specialty.toLowerCase().includes(w)),
    );
  }, [need, city, profiles]);

  const cities = Array.from(new Set(profiles.map((p) => p.city)));
  const reset = () => {
    setNeed("");
    setCity("");
  };

  return (
    <>
      <form
        role="search"
        aria-label="Find an agency"
        onSubmit={(e) => e.preventDefault()}
        className="-mt-10 grid gap-4 rounded-xl border border-ash bg-paper p-5 shadow-lg md:grid-cols-[1.4fr_0.65fr] md:p-6"
      >
        <div>
          <label htmlFor="agency-need" className="mb-2 block text-[14px] font-medium text-ink">
            What do you need to insure?
          </label>
          <input
            id="agency-need"
            type="search"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            placeholder="Try contractors, restaurants, or home"
            autoComplete="off"
            className="btn-radius min-h-[50px] w-full border border-ash bg-paper px-3.5 text-[16px] text-ink focus:border-interactive focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="agency-location" className="mb-2 block text-[14px] font-medium text-ink">
            Area
          </label>
          <select
            id="agency-location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="btn-radius min-h-[50px] w-full border border-ash bg-paper px-3 text-[16px] text-ink focus:border-interactive focus:outline-none"
          >
            <option value="">All example areas</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="mt-12">
        <div className="flex items-baseline justify-between gap-5 pb-5">
          <h2 className="text-[22px] font-medium tracking-tight text-ink">Example agencies</h2>
          <p className="text-[14px] text-stone" role="status" aria-live="polite">
            {results.length} example {results.length === 1 ? "agency" : "agencies"}
          </p>
        </div>
        {results.map((p) => (
          <article
            key={p.slug}
            className="iq-card mb-4 grid gap-3 p-6 transition-shadow hover:shadow-lg md:grid-cols-[0.6fr_1.6fr_auto] md:items-center md:gap-6"
          >
            <div className="text-[15px] text-charcoal">
              {p.city}, IL
              <span className="mt-1.5 block w-fit rounded-full bg-linen px-2.5 py-0.5 text-[11.5px] font-medium uppercase tracking-[0.06em] text-bronze">
                Fictional example
              </span>
            </div>
            <div>
              <h3 className="text-[20px] font-medium tracking-tight text-ink">
                <Link href={`/find-an-agency/${p.slug}`} className="hover:underline underline-offset-4">
                  {p.name}
                </Link>
              </h3>
              <p className="mt-1 text-[15px] font-medium text-interactive">{p.specialty}</p>
              <p className="mt-1 text-[14px] text-charcoal">{p.lines}</p>
            </div>
            <Link href={`/find-an-agency/${p.slug}`} className="iq-link">
              View profile <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
        {results.length === 0 && (
          <div className="iq-card p-8">
            <h3 className="text-[20px] font-medium text-ink">No example agencies match.</h3>
            <p className="mt-2 text-[15px]">Try another specialty or area.</p>
            <button type="button" onClick={reset} className="iq-link mt-4">
              Reset the search
            </button>
          </div>
        )}
        <p className="mt-5 text-[13px] leading-relaxed text-stone">
          Specialties describe what an agency says it handles. A listing does not establish coverage, carrier appetite,
          or a binding quote.
        </p>
      </div>
    </>
  );
}
