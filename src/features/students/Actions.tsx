import { Eye, Trash2, UserPen } from "lucide-react";
import { useStudentsContext } from "../../context/StudentContext";

function Actions({ id }: { id: string }) {
  const { dispatch } = useStudentsContext();

  const handleRemove = (id: string) => {
    dispatch({ type: "remove-student", payload: { id } });
  };

  return (
    <div className="flex gap-3">
      <div>
        <Eye className="text-green-600" />
      </div>
      <div>
        <UserPen className="text-blue-600" />
      </div>
      <div onClick={() => handleRemove(id)}>
        <Trash2 className="text-red-600" />
      </div>
    </div>
  );
}

export default Actions;
