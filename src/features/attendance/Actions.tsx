import { useStudentsContext } from "../../context/StudentContext";
import { Status } from "../../types";
import Button from "./Button";

type ActionType = {
  type: Status;
  class: string;
};

const ActionTypes: ActionType[] = [
  {
    type: "present",
    class: "bg-green-500 hover:bg-green-600",
  },
  {
    type: "late",
    class: "bg-orange-500 hover:bg-orange-600",
  },
  {
    type: "absent",
    class: "bg-red-500 hover:bg-red-600",
  },
];

function Actions({ id }: { id: string }) {
  const { dispatch } = useStudentsContext();

  return (
    <div className="flex gap-3">
      {ActionTypes.map((action) => {
        return (
          <Button
            key={action.type}
            className={`capitalize ${action.class}`}
            onClick={() =>
              dispatch({
                type: "change-status",
                payload: { id, status: action.type },
              })
            }
          >
            {action.type}
          </Button>
        );
      })}
    </div>
  );
}

export default Actions;
