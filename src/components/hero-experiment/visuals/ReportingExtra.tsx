import { StatGrid } from "./StatGrid";
import { BarChart } from "./BarChart";

export const ReportingExtra: React.FC = () => (
  <div>
    <StatGrid />
    <div className="mt-6">
      <BarChart />
    </div>
  </div>
);
