import { LayoutPanelLeft, LogOut } from "lucide-react";

function Header() {
  return (
    <div className="border-b-[1px] border-gray-900 p-1.5 md:col-span-2 md:col-start-2 md:row-start-1 md:p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LayoutPanelLeft />
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl">Welcome Admin</h2>
        </div>

        <div className="rounded-full p-1.5 hover:bg-gray-100 md:hidden md:p-3">
          <LogOut className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
