import SubHeading from "../components/SubHeading";
import Table from "../features/students/Table";

function Students() {
  return (
    <div>
      <SubHeading
        heading="Student Directory"
        paragraph="Easily manage your student roster from this page. You can view, add, edit, or remove student profiles and keep track of key information like enrollment status and contact details."
      />

      <Table />
    </div>
  );
}

export default Students;
