import { Outlet } from "react-router-dom";
import Loading from "./Loading";
import { Suspense } from "react";

function Main() {
  return (
    <div className="overflow-y-scroll p-1.5 md:col-start-2 md:row-start-3 md:px-3">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Main;
