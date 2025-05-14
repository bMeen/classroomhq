import { UserPlus } from "lucide-react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import SubHeading from "../components/SubHeading";
import StudentForm from "../features/students/StudentForm";
import Table from "../features/students/Table";

function Students() {
  return (
    <div>
      <SubHeading
        heading="Student Directory"
        paragraph="Easily manage your student roster from this page. You can view, add, edit, or remove student profiles and keep track of key information like enrollment status and contact details."
      />

      <div>
        <Modal>
          <Modal.Open opens="form">
            <Button>
              <UserPlus />
              <p>Add New Student</p>
            </Button>
          </Modal.Open>
          <Modal.Window name="form">
            <StudentForm />
          </Modal.Window>
        </Modal>
      </div>

      <Table />
    </div>
  );
}

export default Students;
