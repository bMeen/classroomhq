import { useState } from "react";
import Button from "../../components/Button";
import { useStudentsContext } from "../../context/StudentContext";

function AddNewSubject() {
  const [subject, setSubject] = useState("");
  const { dispatch } = useStudentsContext();

  const handleAddSubject = () => {
    dispatch({ type: "new-subject", payload: { subject } });
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
      <Button
        className="absolute right-2 top-1/2 -translate-y-1/2 px-[12px] py-[3px] font-normal"
        onClick={handleAddSubject}
      >
        Add
      </Button>
    </div>
  );
}

export default AddNewSubject;
