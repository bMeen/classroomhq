import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../features/student/Navigation";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";

function Student() {
  const navigate = useNavigate();

  return (
    <div className="space-y-3 py-2">
      <Button className="group gap-1" onClick={() => navigate("/students")}>
        <ArrowLeft
          size={20}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        Back
      </Button>

      <Navigation />

      <Outlet />
    </div>
  );
}

export default Student;
