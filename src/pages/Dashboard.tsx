import SubHeading from "../components/SubHeading";
import DashboardMain from "../features/dashboard/DashboardMain";

function Dashboard() {
  return (
    <div>
      <SubHeading
        heading="Welcome to ClassroomHQ Dashboard"
        paragraph="Get an overview of your classroom at a glance. This dashboard provides quick insights into student performance, attendance rates, and class activity to help you stay informed and organized."
      />

      <DashboardMain />
    </div>
  );
}

export default Dashboard;
