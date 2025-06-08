import { useState } from "react";
import Button from "../../components/Button";
import { useStudentsContext } from "../../context/StudentContext";
import Modal from "../../components/Modal";
import Confirmation from "../../components/Confirmation";
import toast from "react-hot-toast";

function AddNewSubject() {
  const [subject, setSubject] = useState("");
  const { dispatch } = useStudentsContext();

  const handleAddSubject = () => {
    dispatch({ type: "new-subject", payload: { subject } });
    toast.success("New subject added successfully");
    setSubject("");
  };

  return (
    <div className="relative my-3 w-full max-w-80">
      <input
        type="text"
        name="Subject"
        value={subject}
        placeholder="Enter a Subject"
        className="w-full rounded-md border border-slate-500 py-2 pl-2 pr-16"
        onChange={(e) => setSubject(e.target.value)}
      />
      <Modal>
        <Modal.Open opens="new-subject">
          <div className="absolute right-2 top-1/2 -translate-y-1/2 font-normal">
            <Button
              disabled={!subject}
              className="px-[12px] py-[3px] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add
            </Button>
          </div>
        </Modal.Open>

        <Modal.Window name="new-subject">
          <Confirmation
            title="Add Subject"
            description="This subject will be included in your grade tracking."
            type="Add"
            action={handleAddSubject}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddNewSubject;
