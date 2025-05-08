import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import { getAge } from "../../lib/utils";
import { Student } from "../../types";
import { columns } from "./columns";

function Table() {
  const {
    state: { mockStudents: data },
  } = useStudentsContext();

  const students: Student[] = data.map((stud, index) => {
    return {
      sn: index + 1,
      age: getAge(stud.dateOfBirth),
      ...stud,
    };
  });

  return (
    <div>
      <DataTable columns={columns} data={students} />
    </div>
  );
}

export default Table;
