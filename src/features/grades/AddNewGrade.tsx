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
    <div className="relative mb-1 w-full max-w-80">
      <input
        type="text"
        name="Subject"
        value={subject}
        placeholder="Enter a Subject"
        className="w-full rounded-xl border border-slate-500 py-3 pl-4 pr-12"
        onChange={(e) => setSubject(e.target.value)}
      />
      <Button
        className="absolute right-2 top-1/2 -translate-y-1/2 font-normal"
        onClick={handleAddSubject}
      >
        Add
      </Button>
    </div>
  );
}

export default AddNewSubject;
