import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import { useCustomColumns } from "./columns";

//import { columns } from "./columns";

function Table() {
  const {
    state: { mockStudents },
    totalGrades,
  } = useStudentsContext();

  const subjects = Object.keys(mockStudents[0].grades);
  console.log(subjects, totalGrades);

  const columns = useCustomColumns(subjects);

  return (
    <div>
      <DataTable columns={columns} data={totalGrades} />
    </div>
  );
}

export default Table;
