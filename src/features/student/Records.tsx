import { useParams } from "react-router-dom";
import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import { columns } from "../attendance/columns";
import TableContainer from "../../ui/TableContainer";

function Records() {
  const { id } = useParams();
  const { totalAttendance } = useStudentsContext();

  const currentStudentRecords = totalAttendance.find(
    (grade) => grade.id === id,
  );

  if (!currentStudentRecords) return <p>Student Id not available</p>;
  return (
    <TableContainer className="w-full max-w-6xl">
      <DataTable columns={columns} data={[currentStudentRecords]} />
    </TableContainer>
  );
}

export default Records;
