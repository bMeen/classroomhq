import { Ban, CircleCheckBig, CircleX, TriangleAlert } from "lucide-react";
import { Status } from "../../types";

type StatusProps = {
  status: Status | "";
};

function CurrentStatus({ status = "" }: StatusProps) {
  return (
    <div>
      {status === "" && <Ban color="#6B7280" />}
      {status === "present" && <CircleCheckBig color="#36D399" />}
      {status === "late" && <TriangleAlert color="#FBBD23" />}
      {status === "absent" && <CircleX color="#F87272" />}
    </div>
  );
}

export default CurrentStatus;
