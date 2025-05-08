import SubHeading from "../components/SubHeading";
import Table from "../features/grades/Table";

function Grades() {
  return (
    <div>
      <SubHeading
        heading="Track Student Performance"
        paragraph="Record, view, and analyze grades across all subjects. This section helps you evaluate student progress, identify trends, and support academic success with clear performance data."
      />

      <Table />
    </div>
  );
}

export default Grades;
