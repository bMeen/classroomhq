import {
  Users,
  BookCheck,
  TrendingUp,
  TrendingDown,
  ChartNoAxesCombined,
  ChartBarDecreasing,
} from "lucide-react";
import StatsCard from "../../ui/StatsCard";
import useDashboardStats from "./useDashboardStats";
import TableContainer from "../../ui/TableContainer";
import DataTable from "../../components/DataTable";
import { useCustomColumns } from "../grades/columns";
import AttendanceChart from "./AttendanceChart";
import AveragePerSubjectChart from "./AveragePerSubjectChart";

function DashboardMain() {
  const {
    totalStudents,
    totalSubjects,
    overallAverage,
    belowThreshold,
    subjects,
    lowPerformingSubject: { name: lowSubject },
    topPerformingSubject: { name: topSubject },
  } = useDashboardStats();

  const columns = useCustomColumns(subjects);

  return (
    <div className="space-y-10 lg:space-y-16">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
        <StatsCard icon={Users} title="Total Students" value={totalStudents} />
        <StatsCard
          icon={BookCheck}
          title="Total Subjects"
          value={totalSubjects}
        />

        <StatsCard
          icon={TrendingUp}
          title="Top Performing Subject"
          value={topSubject}
        />
        <StatsCard
          icon={TrendingDown}
          title="Low Performing Subject"
          value={lowSubject}
        />
        <StatsCard
          icon={ChartNoAxesCombined}
          title="Overall Average"
          value={overallAverage}
        />
        <StatsCard
          icon={ChartBarDecreasing}
          title="Student Under 50%"
          value={belowThreshold.length}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-3">
        <AttendanceChart />
        <AveragePerSubjectChart />
      </div>

      <TableContainer className="col-span-2 md:col-span-3">
        <h3 className="mb-1 text-base">
          Students with average score below threshold (50%)
        </h3>
        <DataTable
          columns={columns}
          data={belowThreshold}
          hideColumns={{ actions: false }}
        />
      </TableContainer>
    </div>
  );
}

export default DashboardMain;

//<Users className="h-4 w-4 md:h-5 md:w-5" />
{
  /* <StatsCard
        type="select"
        icon={Users}
        title="Average Per Subject"
        options={subjectAverages}
      />
      <StatsCard
        icon={Users}
        title="Attentance Rate"
        options={attendanceRates}
        type="select"
      /> */
}
