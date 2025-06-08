import useDashboardStats from "./useDashboardStats";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#1E8E70", "#B8860B", "#C05050"];

function AttendanceChart() {
  const { attendanceRates } = useDashboardStats();

  return (
    <div className="">
      <ResponsiveContainer width="100%" height={400} className="">
        <PieChart width={730} height={250}>
          <Pie
            data={attendanceRates}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            style={{ outline: "none" }}
          >
            {attendanceRates.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => value.toFixed(1) + "%"} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <h3 className="my-3 text-center text-sm italic md:text-base">
        Attendance Rate
      </h3>
    </div>
  );
}

export default AttendanceChart;
