import { useParams } from "react-router-dom";
import { useStudentsContext } from "../../context/StudentContext";
import { useCustomColumns } from "../grades/columns";
import DataTable from "../../components/DataTable";
import TableContainer from "../../ui/TableContainer";
import { motion } from "motion/react";

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
    <motion.div exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }}>
      <TableContainer className="w-full max-w-6xl">
        <DataTable columns={columns} data={[currentStudentGrades]} />
      </TableContainer>
    </motion.div>
  );
}

export default Grade;
