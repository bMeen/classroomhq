import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="overflow-y-scroll p-1.5 md:col-start-2 md:row-start-3 md:px-3">
      <Outlet />
    </div>
  );
}

export default Main;
