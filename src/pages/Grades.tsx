import SubHeading from "../components/SubHeading";
import { useStudentsContext } from "../context/StudentContext";
import Table from "../features/grades/Table";

function Grades() {
  const { dispatch } = useStudentsContext();

  return (
    <div>
      <SubHeading
        heading="Track Student Performance"
        paragraph="Record, view, and analyze grades across all subjects. This section helps you evaluate student progress, identify trends, and support academic success with clear performance data."
      />

      <button
        onClick={() =>
          dispatch({ type: "new-subject", payload: { subject: "Biology" } })
        }
      >
        Add New Subject
      </button>

      <Table />
    </div>
  );
}

export default Grades;
