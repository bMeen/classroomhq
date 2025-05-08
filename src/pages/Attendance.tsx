/* import { CheckCircle, Clock, XCircle } from "lucide-react"; */
import SubHeading from "../components/SubHeading";
import Table from "../features/attendance/Table";

function Attendance() {
  return (
    <>
      <SubHeading
        heading="Manage Class Attendance"
        paragraph=" This section provides comprehensive tools to efficiently monitor and
          manage student attendance. You can view historical attendance records,
          accurately mark daily attendance, and make updates to ensure records
          remain current and reliable."
      />

      <Table />

      {/*  <div className="flex flex-col gap-0.5 text-sm font-bold">
        <span className="hover:bg-color-present inline-block rounded-sm p-1 hover:text-white">
          <CheckCircle />
          Present
        </span>
        <span className="hover:bg-color-late inline-block rounded-sm p-1 hover:text-white">
          <Clock />
          Late
        </span>
        <span className="hover:bg-color-absent inline-block rounded-sm p-1 hover:text-white">
          <XCircle />
          Absent
        </span>
      </div> */}
    </>
  );
}

export default Attendance;
