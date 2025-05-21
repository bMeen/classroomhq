import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import useFilter from "../../lib/useFilter";
import { getAge } from "../../lib/utils";
import { Student } from "../../types";
import TableContainer from "../../ui/TableContainer";
import { columns } from "./columns";

function Table() {
  const {
    state: { mockStudents: data },
  } = useStudentsContext();

  const students: Student[] = data.map((stud) => {
    return {
      age: getAge(stud.dateOfBirth),
      ...stud,
    };
  });

  const { filtered } = useFilter(students, "gender");

  return (
    <TableContainer>
      <DataTable columns={columns} data={filtered} />
    </TableContainer>
  );
}

export default Table;
