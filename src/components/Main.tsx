import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="md:col-start-2 md:row-start-2">
      Main
      <Outlet />
    </div>
  );
}

export default Main;
