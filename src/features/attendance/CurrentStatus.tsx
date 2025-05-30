import { Ban, CircleCheckBig, CircleX, TriangleAlert } from "lucide-react";
import { Status } from "../../types";

type StatusProps = {
  status: Status | "";
};

function CurrentStatus({ status = "" }: StatusProps) {
  return (
    <div>
      {status === "" && <Ban color="#3a3c5a" />}
      {status === "present" && <CircleCheckBig color="#1E8E70" />}
      {status === "late" && <TriangleAlert color="#B8860B" />}
      {status === "absent" && <CircleX color="#C05050" />}
    </div>
  );
}

export default CurrentStatus;
