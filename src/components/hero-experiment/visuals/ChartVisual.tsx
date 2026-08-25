// Illustrative production data, same convention as the existing
// mocks/ components (fictional names, styled as example UI, never
// presented as real customer data).
const DATA = [
  { label: "Sarah K.", value: 92 },
  { label: "Mike T.", value: 78 },
  { label: "Dana R.", value: 65 },
  { label: "Chris P.", value: 51 },
];

export const ChartVisual: React.FC = () => (
  <div className="space-y-4">
    {DATA.map((d) => (
      <div key={d.label}>
        <div className="flex items-center justify-between text-[15px] text-charcoal">
          <span>{d.label}</span>
          <span className="font-medium text-ink">{d.value}%</span>
        </div>
        <div className="mt-1.5 h-2.5 w-full rounded-full bg-ash/60">
          <div
            className="h-full rounded-full bg-interactive"
            style={{ width: `${d.value}%` }}
          />
        </div>
      </div>
    ))}
  </div>
);
