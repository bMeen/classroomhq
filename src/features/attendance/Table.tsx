import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import { columns } from "./columns";

function Table() {
  const { totalAttendance } = useStudentsContext();

  return (
    <div>
      <DataTable columns={columns} data={totalAttendance} />
    </div>
  );
}

export default Table;
