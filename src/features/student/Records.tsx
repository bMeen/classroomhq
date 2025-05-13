import { useParams } from "react-router-dom";
import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import { columns } from "../attendance/columns";

function Records() {
  const { id } = useParams();
  const { totalAttendance } = useStudentsContext();

  const currentStudentRecords = totalAttendance.find(
    (grade) => grade.id === id,
  );

  if (!currentStudentRecords) return <p>Student Id not available</p>;
  return (
    <div className="w-full max-w-6xl">
      <p>Grade {id}</p>

      <DataTable columns={columns} data={[currentStudentRecords]} />
    </div>
  );
}

export default Records;
