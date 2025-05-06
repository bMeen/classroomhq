import { LogOut } from "lucide-react";

function Header() {
  return (
    <div className="border p-1.5 md:col-span-2 md:col-start-2 md:row-start-2 md:p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-primary text-lg font-bold md:text-2xl">
          Welcome Admin
        </h2>

        <div className="rounded-full p-1.5 hover:bg-gray-100 md:hidden md:p-3">
          <LogOut className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
