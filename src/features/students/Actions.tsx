import { Eye, Trash2, UserPen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import DeleteStudent from "./DeleteStudent";
import StudentForm from "./StudentForm";

function Actions({ id }: { id: string }) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-1">
      <div onClick={() => navigate(`/student/${id}`)}>
        <Eye className="text-color-present" />
      </div>

      <div>
        <Modal>
          <Modal.Open opens="edit">
            <UserPen className="text-color-late" />
          </Modal.Open>
          <Modal.Window name="edit">
            <StudentForm id={id} />
          </Modal.Window>
        </Modal>
      </div>

      <div>
        <Modal>
          <Modal.Open opens="delete">
            <Trash2 className="text-color-absent" />
          </Modal.Open>
          <Modal.Window name="delete">
            <DeleteStudent id={id} />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Actions;
/* 
<Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

*/
