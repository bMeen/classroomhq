import { Eye, Trash2, UserPen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import DeleteStudent from "./DeleteStudent";

function Actions({ id }: { id: string }) {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3">
      <div onClick={() => navigate(`/student/${id}`)}>
        <Eye className="text-green-600" />
      </div>
      <div>
        <UserPen className="text-blue-600" />
      </div>

      <div>
        <Modal>
          <Modal.Open opens="delete">
            <Trash2 className="text-red-600" />
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
