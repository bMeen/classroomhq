import SubHeading from "../components/SubHeading";
import Table from "../features/attendance/Table";
import TableOperations from "../features/attendance/TableOperations";

function Attendance() {
  return (
    <div>
      <SubHeading
        heading="Manage Class Attendance"
        paragraph=" This section provides comprehensive tools to efficiently monitor and
          manage student attendance. You can view historical attendance records,
          accurately mark daily attendance, and make updates to ensure records
          remain current and reliable."
      />

      <TableOperations />

      <Table />
    </div>
  );
}

export default Attendance;
