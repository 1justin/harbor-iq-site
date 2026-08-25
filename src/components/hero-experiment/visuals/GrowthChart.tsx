// Relative shape read from Justin's Executive Dashboard screenshot
// ("New Business Premium, Trailing 12 Months") -- Oct and Feb peaks near
// $1M, a March dip near $220K -- not invented.
const MONTHS = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const VALUES = [520, 980, 620, 720, 780, 950, 220, 520, 380, 800, 460, 700];

const W = 640;
const H = 230;
const PAD_LEFT = 56;
const PAD_RIGHT = 12;
const PAD_TOP = 12;
const PAD_BOTTOM = 28;
const PLOT_W = W - PAD_LEFT - PAD_RIGHT;
const PLOT_H = H - PAD_TOP - PAD_BOTTOM;
const MAX_VALUE = 1000;

const x = (i: number) => PAD_LEFT + (i / (VALUES.length - 1)) * PLOT_W;
const y = (v: number) => PAD_TOP + (1 - v / MAX_VALUE) * PLOT_H;

const LINE_POINTS = VALUES.map((v, i) => `${x(i)},${y(v)}`).join(" ");
const GRID_VALUES = [0, 250, 500, 750, 1000];

export const GrowthChart: React.FC = () => (
  <div>
    <p className="mb-3 text-[17px] font-medium uppercase tracking-wider text-stone">
      New business premium, trailing 12 months
    </p>
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
      {GRID_VALUES.map((v) => (
        <g key={v}>
          <line
            x1={PAD_LEFT}
            x2={W - PAD_RIGHT}
            y1={y(v)}
            y2={y(v)}
            stroke="var(--color-ash)"
            strokeWidth={1}
            strokeDasharray="3 4"
          />
          <text x={PAD_LEFT - 10} y={y(v) + 4} textAnchor="end" fontSize={13} fill="var(--color-stone)">
            {v === 0 ? "$0" : v === 1000 ? "$1M" : `$${v}K`}
          </text>
        </g>
      ))}

      <polyline
        points={LINE_POINTS}
        fill="none"
        stroke="var(--color-success)"
        strokeWidth={3}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {VALUES.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r={4} fill="var(--color-success)" />
      ))}

      {MONTHS.map((m, i) => (
        <text
          key={m}
          x={x(i)}
          y={H - 6}
          textAnchor="middle"
          fontSize={13}
          fill="var(--color-stone)"
        >
          {m}
        </text>
      ))}
    </svg>
  </div>
);
