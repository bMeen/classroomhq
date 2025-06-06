import SubHeading from "../components/SubHeading";

import Table from "../features/grades/Table";
import TableOperations from "../features/grades/TableOperations";

function Grades() {
  return (
    <div>
      <SubHeading
        heading="Track Student Performance"
        paragraph="Record, view, and analyze grades across all subjects. This section helps you evaluate student progress, identify trends, and support academic success with clear performance data."
      />

      <TableOperations />

      <Table />
    </div>
  );
}

export default Grades;
