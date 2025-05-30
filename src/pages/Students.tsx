import SubHeading from "../components/SubHeading";

import Table from "../features/students/Table";
import TableOperations from "../features/students/TableOperations";

function Students() {
  return (
    <div>
      <SubHeading
        heading="Student Directory"
        paragraph="Easily manage your class roster. View, add, edit, or delete student profiles and access key details like enrollment status and contact information."
      />

      <TableOperations />

      <Table />
    </div>
  );
}
export default Students;
