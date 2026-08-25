// Relative proportions read from Justin's Executive Dashboard screenshot
// ("Premium by Line of Business"), not invented.
const DATA = [
  { label: "Commercial Property", value: 100 },
  { label: "General Liability", value: 76 },
  { label: "Cyber", value: 25 },
  { label: "Workers Comp", value: 19 },
  { label: "BOP", value: 8 },
];

export const BarChart: React.FC = () => (
  <div>
    <p className="mb-3 text-[13px] font-medium uppercase tracking-wider text-stone">
      Premium by line of business
    </p>
    <div className="space-y-3">
      {DATA.map((d) => (
        <div key={d.label} className="flex items-center gap-3">
          <span className="w-[150px] shrink-0 truncate text-[14px] text-charcoal">
            {d.label}
          </span>
          <div className="h-3 flex-1 rounded-full bg-ash/50">
            <div
              className="h-full rounded-full bg-anchor"
              style={{ width: `${d.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);
