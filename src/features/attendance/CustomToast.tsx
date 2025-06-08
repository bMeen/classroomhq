import type { Toast } from "react-hot-toast";
import { Status } from "../../types";
import CurrentStatus from "./CurrentStatus";

function CustomToast({ t, type }: { t: Toast; type: Status }) {
  return (
    <div
      className={`${
        t.visible ? "animate-slide-in" : "animate-slide-out"
      } pointer-events-auto rounded-lg bg-white shadow ring-1 ring-black ring-opacity-5`}
    >
      <div className="p-3">
        <div className="flex items-center gap-2">
          <CurrentStatus status={type} />

          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              Student marked as {type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomToast;
