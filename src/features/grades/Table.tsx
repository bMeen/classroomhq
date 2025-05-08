import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import { getAverageScore } from "../../lib/utils";
import { Grade } from "../../types";
import { columns } from "./columns";

function Table() {
  const {
    state: { mockStudents: data },
  } = useStudentsContext();

  const totalGrades: Grade[] = data.map((stud, index) => {
    return {
      sn: index + 1,
      id: stud.id,
      name: stud.fullName,
      average_score: getAverageScore(Object.values(stud.grades)),
      ...stud.grades,
    };
  });

  return (
    <div>
      <DataTable columns={columns} data={totalGrades} />
    </div>
  );
}

export default Table;
