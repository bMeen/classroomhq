import toast from "react-hot-toast";
import Button from "../../components/Button";
import { useStudentsContext } from "../../context/StudentContext";
import { Status } from "../../types";
import CustomToast from "./CustomToast";

type ActionType = {
  type: Status;
  class: string;
};

const ActionTypes: ActionType[] = [
  {
    type: "present",
    class: "bg-color-present hover:bg-color-present/85",
  },
  {
    type: "late",
    class: "bg-color-late hover:bg-color-late/85",
  },
  {
    type: "absent",
    class: "bg-color-absent hover:bg-color-absent/85",
  },
];

function Actions({ id }: { id: string }) {
  const { dispatch } = useStudentsContext();

  const handleChangeStatus = (type: Status) => {
    dispatch({
      type: "change-status",
      payload: { id, status: type },
    });
    toast.custom((t) => <CustomToast t={t} type={type} />);
  };

  return (
    <div className="flex gap-3">
      {ActionTypes.map((action) => {
        return (
          <Button
            type="action"
            key={action.type}
            className={`capitalize ${action.class}`}
            onClick={() => handleChangeStatus(action.type)}
          >
            {action.type}
          </Button>
        );
      })}
    </div>
  );
}

export default Actions;
