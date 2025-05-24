import { Users } from "lucide-react";
import StatsCard from "../../ui/StatsCard";
import useDashboardStats from "./useDashboardStats";

function DashboardMain() {
  const {
    totalStudents,
    totalSubjects,
    subjectAverages,
    overallAverage,
    attendanceRates,
    topPerformingSubject: { label: topSubject },
  } = useDashboardStats();

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
      <StatsCard
        icon={Users}
        title="Total Students"
        value={totalStudents}
        type="value"
      />
      <StatsCard
        icon={Users}
        title="Total Subjects"
        value={totalSubjects}
        type="value"
      />

      <StatsCard
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
      />
      <StatsCard
        icon={Users}
        title="Top Performing Subject"
        value={topSubject}
        type="value"
      />
      <StatsCard
        icon={Users}
        title="Overall Average"
        value={overallAverage}
        type="value"
      />
    </div>
  );
}

export default DashboardMain;

//<Users className="h-4 w-4 md:h-5 md:w-5" />
