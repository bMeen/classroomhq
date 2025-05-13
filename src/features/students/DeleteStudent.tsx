import { useStudentsContext } from "../../context/StudentContext";

function DeleteStudent({
  id,
  onCloseModal,
}: {
  id: string;
  onCloseModal?: () => void;
}) {
  const { dispatch } = useStudentsContext();

  const handleRemove = () => {
    dispatch({ type: "remove-student", payload: { id } });
    onCloseModal?.();
  };

  return (
    <div className="border">
      <h3>Delete?</h3>
      <p>Are you sure you want to delete this student</p>

      <div>
        <button onClick={() => onCloseModal?.()}>Cancel</button>
        <button onClick={handleRemove}>Delete</button>
      </div>
    </div>
  );
}

export default DeleteStudent;
