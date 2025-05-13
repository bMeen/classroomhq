import { useParams } from "react-router-dom";
import { useStudentsContext } from "../../context/StudentContext";
import { useCustomColumns } from "../grades/columns";
import DataTable from "../../components/DataTable";

function Grade() {
  const { id } = useParams();
  const { totalGrades } = useStudentsContext();

  const currentStudentGrades = totalGrades.find((grade) => grade.id === id);
  const subjects = currentStudentGrades
    ? Object.keys(currentStudentGrades.grades)
    : [];
  const columns = useCustomColumns(subjects);

  if (!currentStudentGrades) return <p>Student data not available</p>;
  return (
    <div className="w-full max-w-6xl">
      <p>Grade {id}</p>

      <DataTable columns={columns} data={[currentStudentGrades]} />
    </div>
  );
}

export default Grade;
