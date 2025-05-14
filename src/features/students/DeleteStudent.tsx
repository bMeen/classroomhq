import Button from "../../components/Button";
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
    <div className="text-slate-500">
      <h3 className="text-lg font-medium md:text-xl">Delete</h3>
      <p className="text-sm">Are you sure you want to delete this student?</p>

      <div className="mt-5 flex justify-end gap-3 lg:mt-10">
        <Button type="outline" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button type="danger" onClick={handleRemove}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default DeleteStudent;
