import useDashboardStats from "./useDashboardStats";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AveragePerSubjectChart() {
  const { subjectAverages } = useDashboardStats();

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={subjectAverages} desc="Subjects Average">
          <XAxis dataKey="name" tickLine={false} />
          <YAxis tickLine={false} width={30} />
          <Tooltip
            cursor={false}
            formatter={(value: number) => value.toFixed(1)}
          />
          <Bar dataKey="value" fill="#2b2d42" />
        </BarChart>
      </ResponsiveContainer>
      <h3 className="my-3 text-center text-sm italic md:text-base">
        Subjects Average
      </h3>
    </div>
  );
}

export default AveragePerSubjectChart;
