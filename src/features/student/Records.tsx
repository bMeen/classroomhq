import { useParams } from "react-router-dom";
import DataTable from "../../components/DataTable";
import { useStudentsContext } from "../../context/StudentContext";
import { columns } from "../attendance/columns";
import TableContainer from "../../ui/TableContainer";
import { motion } from "motion/react";

function Records() {
  const { id } = useParams();
  const { totalAttendance } = useStudentsContext();

  const currentStudentRecords = totalAttendance.find(
    (grade) => grade.id === id,
  );

  if (!currentStudentRecords) return <p>Student Id not available</p>;
  return (
    <motion.div exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }}>
      <TableContainer className="w-full max-w-6xl">
        <DataTable columns={columns} data={[currentStudentRecords]} />
      </TableContainer>
    </motion.div>
  );
}

export default Records;
