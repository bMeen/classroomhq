import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../features/student/Navigation";
import { ArrowLeft } from "lucide-react";

function Student() {
  const navigate = useNavigate();

  return (
    <div className="space-y-3 py-2">
      <button
        className="group flex items-center gap-0.5 rounded border border-black bg-white px-6 py-1 text-sm text-black hover:bg-black hover:text-white"
        onClick={() => navigate("/students")}
      >
        <ArrowLeft
          size={20}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        Back
      </button>

      <Navigation />

      <Outlet />
    </div>
  );
}

export default Student;
