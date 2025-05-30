import SubHeading from "../components/SubHeading";
import Table from "../features/attendance/Table";
import TableOperations from "../features/attendance/TableOperations";

function Attendance() {
  return (
    <div>
      <SubHeading
        heading="Manage Class Attendance"
        paragraph="Record, view, and analyze grades across all subjects. Edit existing scores, add new subjects, and gain insights into student progress with clear, actionable performance data."
      />

      <TableOperations />

      <Table />
    </div>
  );
}

export default Attendance;
