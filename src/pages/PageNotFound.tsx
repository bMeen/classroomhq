import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import AnimatePage from "../ui/AnimatePage";

import { xAnimations } from "../lib/constants";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <AnimatePage
      animations={xAnimations}
      className="grid h-screen place-items-center"
    >
      <div className="flex max-w-sm flex-col items-center gap-4">
        <h1 className="text-3xl">Page Not Found</h1>
        <Button type="outline" className="group" onClick={() => navigate("/")}>
          <ArrowLeft
            size={18}
            className="mx-auto transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back
        </Button>
      </div>
    </AnimatePage>
  );
}

export default PageNotFound;
