import { Trash } from "lucide-react";
import { DynamicSubject } from "../../types";
import Modal from "../../components/Modal";
import Confirmation from "../../components/Confirmation";
import { useStudentsContext } from "../../context/StudentContext";
import toast from "react-hot-toast";

function GradeHeader({ subject }: { subject: DynamicSubject }) {
  const {
    dispatch,
    state: { mockStudents },
  } = useStudentsContext();

  const subjects = Object.keys(mockStudents[0].grades);

  const handleRemoveSubject = () => {
    if (subjects.length <= 5)
      return toast.error("At least 5 subjects should be recorded");

    dispatch({ type: "remove-subject", payload: { subject } });
    toast.success("Subject removed successfully");
  };

  return (
    <div className="flex items-center gap-1 capitalize">
      <p>{subject}</p>
      {subjects.length > 5 && (
        <Modal>
          <Modal.Open opens="remove-subject">
            <Trash size={14} className="cursor-pointer" />
          </Modal.Open>
          <Modal.Window name="remove-subject">
            <Confirmation
              title="Remove Subject"
              description="Are you sure you want to remove this subject?"
              type="Remove"
              action={handleRemoveSubject}
            />
          </Modal.Window>
        </Modal>
      )}
    </div>
  );
}

export default GradeHeader;
