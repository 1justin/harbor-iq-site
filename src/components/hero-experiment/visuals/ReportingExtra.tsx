import { StatGrid } from "./StatGrid";
import { BarChart } from "./BarChart";
import { GrowthChart } from "./GrowthChart";

export const ReportingExtra: React.FC = () => (
  <div>
    <StatGrid />
    <div className="mt-7">
      <BarChart />
    </div>
    <div className="mt-7">
      <GrowthChart />
    </div>
  </div>
);
