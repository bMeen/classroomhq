import { Outlet, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { Suspense } from "react";
import AnimatePage from "../ui/AnimatePage";

import { yAnimations } from "../lib/constants";

function Main() {
  const location = useLocation();
  return (
    <Suspense fallback={<Loading />}>
      <AnimatePage
        key={location.pathname}
        animations={yAnimations}
        className="overflow-y-scroll p-1.5 md:col-start-2 md:row-start-3 md:px-3"
      >
        <Outlet />
      </AnimatePage>
    </Suspense>
  );
}

export default Main;
