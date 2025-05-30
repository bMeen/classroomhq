import { LogOut } from "lucide-react";
import SearchQuery from "./SearchQuery";
import { useAuthContext } from "../context/AuthContext";

function Header() {
  const { logout } = useAuthContext();

  return (
    <div className="border p-1.5 md:col-span-2 md:col-start-2 md:row-start-2 md:p-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-primary md:text-2xl">
          Welcome Admin
        </h2>

        <SearchQuery />

        <div
          className="rounded-full p-1.5 hover:bg-gray-100 md:hidden md:p-3"
          onClick={logout}
        >
          <LogOut className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
