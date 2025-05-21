import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import TableContainer from "../../ui/TableContainer";
import { useCustomColumns } from "./columns";

//import { columns } from "./columns";

function Table() {
  const {
    state: { mockStudents },
    totalGrades,
  } = useStudentsContext();

  const subjects = Object.keys(mockStudents[0].grades);

  const columns = useCustomColumns(subjects);

  return (
    <TableContainer>
      <DataTable columns={columns} data={totalGrades} />
    </TableContainer>
  );
}

export default Table;
