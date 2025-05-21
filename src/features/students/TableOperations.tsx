import { UserPlus } from "lucide-react";
import Button from "../../components/Button";
import Filter from "../../components/Filter";
import Modal from "../../components/Modal";
import StudentForm from "./StudentForm";

function TableOperations() {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div>
        <Modal>
          <Modal.Open opens="form">
            <Button>
              <UserPlus size={18} />
              <p>Add New Student</p>
            </Button>
          </Modal.Open>
          <Modal.Window name="form">
            <StudentForm />
          </Modal.Window>
        </Modal>
      </div>

      <Filter
        field="gender"
        options={[
          { label: "All", value: "all" },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
      />
    </div>
  );
}

export default TableOperations;
