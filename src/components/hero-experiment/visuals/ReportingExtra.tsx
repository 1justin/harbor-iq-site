import { StatGrid } from "./StatGrid";
import { BarChart } from "./BarChart";
import { GrowthChart } from "./GrowthChart";

export const ReportingExtra: React.FC = () => (
  <div>
    <StatGrid />
    <div className="mt-5">
      <BarChart />
    </div>
    <div className="mt-5">
      <GrowthChart />
    </div>
  </div>
);
