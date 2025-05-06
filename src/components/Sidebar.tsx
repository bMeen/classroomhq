import SideNavigation from "./SideNavigation";

function Sidebar() {
  return (
    <div className="flex flex-col md:col-start-1 md:row-span-3">
      <SideNavigation />
    </div>
  );
}

export default Sidebar;
