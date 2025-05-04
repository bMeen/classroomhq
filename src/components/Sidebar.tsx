import Logo from "./Logo";
import SideNavigation from "./SideNavigation";

function Sidebar() {
  return (
    <div className="flex flex-col border-r-[1px] border-gray-900 md:col-start-1 md:row-span-2 md:row-start-1">
      <div className="p-3">
        <Logo />
      </div>
      <SideNavigation />
    </div>
  );
}

export default Sidebar;
