import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import { Attendance } from "../../types";
import { columns } from "./columns";

function Table() {
  const {
    state: { mockStudents: data },
  } = useStudentsContext();

  const totalAttendance: Attendance[] = data.map((stud, index) => {
    return {
      sn: index + 1,
      id: stud.id,
      status: stud.status,
      name: stud.fullName,
      ...stud.attendance,
    };
  });

  return (
    <div>
      <DataTable columns={columns} data={totalAttendance} />
    </div>
  );
}

export default Table;
