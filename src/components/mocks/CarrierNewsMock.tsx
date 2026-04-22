import { MockChrome } from "./MockChrome";

const NEWS = [
  {
    carrier: "Travelers",
    kind: "appetite update",
    title: "FL roofing now in appetite up to $5M",
    when: "7 min ago",
    tone: "copper" as const,
  },
  {
    carrier: "Progressive",
    kind: "new BOP rate",
    title: "Effective today across 11 states",
    when: "34 min ago",
    tone: "anchor" as const,
  },
  {
    carrier: "Chubb",
    kind: "guideline change",
    title: "Homes pre-1950 inspection required",
    when: "1 hr ago",
    tone: "stone" as const,
  },
];

const TONE = {
  copper: "bg-copper/10 text-copper border-copper/30",
  anchor: "bg-anchor/10 text-anchor border-anchor/20",
  stone: "bg-stone/10 text-stone border-stone/30",
};

export function CarrierNewsMock() {
  return (
    <MockChrome label="carrier news · today">
      <div className="space-y-2.5">
        {NEWS.map((n) => (
          <div
            key={n.carrier}
            className="dl-beat rounded-lg border border-ash/60 bg-paper px-3 py-2.5"
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${TONE[n.tone]}`}
              >
                {n.carrier} · {n.kind}
              </span>
              <span className="text-[10px] text-stone">{n.when}</span>
            </div>
            <p className="mt-1.5 text-[13px] font-medium text-ink">{n.title}</p>
          </div>
        ))}
      </div>
    </MockChrome>
  );
}
