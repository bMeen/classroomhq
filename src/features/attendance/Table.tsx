import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import useFilter from "../../lib/useFilter";
import TableContainer from "../../ui/TableContainer";
import { columns } from "./columns";

function Table() {
  const { totalAttendance } = useStudentsContext();

  const { filtered } = useFilter(totalAttendance, "status");

  return (
    <TableContainer>
      <DataTable columns={columns} data={filtered} />
    </TableContainer>
  );
}

export default Table;
