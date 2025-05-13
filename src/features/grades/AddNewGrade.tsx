import { useStudentsContext } from "../../context/StudentContext";

function AddNewGrade() {
  const { dispatch } = useStudentsContext();

  return (
    <div className="border">
      <input />
      <button
        onClick={() =>
          dispatch({ type: "new-subject", payload: { subject: "Biology" } })
        }
      >
        Add
      </button>
    </div>
  );
}

export default AddNewGrade;
