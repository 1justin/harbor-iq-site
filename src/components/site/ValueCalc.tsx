"use client";

import { useState } from "react";
import { INTELLIGENCE as I, OVERLAY_COSTS } from "@/lib/constants";

/**
 * Beside-your-AMS value math (mock). HarborIQ no longer replaces the AMS on
 * the site, so the old ROI calculator's "AMS cost avoided" framing is gone.
 * This one prices the time the team spends hunting carrier answers and
 * rebuilding renewal lists, which is what Intelligence takes over.
 */
export function ValueCalc() {
  const [staff, setStaff] = useState(5);
  const [questions, setQuestions] = useState(6);
  const [minutes, setMinutes] = useState(20);
  const [rate, setRate] = useState(30);

  const hoursPerMonth = (staff * questions * minutes * 4.33) / 60;
  const dollarsPerMonth = hoursPerMonth * rate;
  const ghl = OVERLAY_COSTS.gohighlevel.monthly;

  const field = "mt-1 w-full rounded-md border border-ash bg-paper px-3 py-2 text-[16px] text-ink focus:border-interactive focus:outline-none";
  const label = "block text-[14px] text-charcoal";
  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div className="grid gap-8 rounded-xl border border-ash bg-paper p-7 md:grid-cols-12">
      <div className="grid gap-4 sm:grid-cols-2 md:col-span-7">
        <label className={label}>People who look things up
          <input type="number" min={1} max={50} value={staff} onChange={(e) => setStaff(Number(e.target.value) || 1)} className={field} />
        </label>
        <label className={label}>Carrier questions each, per week
          <input type="number" min={1} max={100} value={questions} onChange={(e) => setQuestions(Number(e.target.value) || 1)} className={field} />
        </label>
        <label className={label}>Minutes to find the answer today
          <input type="number" min={1} max={120} value={minutes} onChange={(e) => setMinutes(Number(e.target.value) || 1)} className={field} />
        </label>
        <label className={label}>Loaded hourly cost
          <input type="number" min={10} max={200} value={rate} onChange={(e) => setRate(Number(e.target.value) || 10)} className={field} />
        </label>
        <p className="text-[13px] text-stone sm:col-span-2">Edit any number. Defaults are what a 5-person agency told us. HarborIQ answers in seconds, so the time above is what comes back.</p>
      </div>
      <div className="md:col-span-5 md:border-l md:border-ash md:pl-8">
        <p className="text-[14px] text-charcoal">Hours back each month</p>
        <p className="text-[40px] font-medium leading-none tracking-tight text-ink">{fmt(hoursPerMonth)}</p>
        <p className="mt-5 text-[14px] text-charcoal">Worth, each month</p>
        <p className="text-[40px] font-medium leading-none tracking-tight text-ink">${fmt(dollarsPerMonth)}</p>
        <p className="mt-5 text-[14px] text-charcoal">Intelligence, each month</p>
        <p className="text-[28px] font-medium leading-none tracking-tight text-ink">${I.monthly}</p>
        <p className="mt-5 text-[13px] leading-relaxed text-stone">For comparison, a generic CRM like GoHighLevel is ${ghl} a month and does not know what a carrier is.</p>
      </div>
    </div>
  );
}
