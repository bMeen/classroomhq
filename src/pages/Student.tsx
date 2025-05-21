import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../features/student/Navigation";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";

function Student() {
  const navigate = useNavigate();

  return (
    <div className="space-y-5 py-2">
      <Navigation />

      <Outlet />

      <Button
        type="outline"
        className="group"
        onClick={() => navigate("/students")}
      >
        <ArrowLeft
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        Back
      </Button>
    </div>
  );
}

export default Student;
