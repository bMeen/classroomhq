import { BookmarkCheck, Home, LogOut, Notebook, Users } from "lucide-react";
import { NavItems } from "../types";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Modal from "./Modal";
import Confirmation from "./Confirmation";
import toast from "react-hot-toast";

const navigationItems: NavItems[] = [
  {
    icon: <Home />,
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    icon: <Users />,
    label: "Students",
    to: "/students",
  },
  {
    icon: <BookmarkCheck />,
    label: "Attendance",
    to: "/attendance",
  },
  {
    icon: <Notebook />,
    label: "Grades",
    to: "/grades",
  },
];

function SideNavigation() {
  const { logout } = useAuthContext();

  return (
    <div className="text-text-primary flex flex-1 flex-col bg-primary p-2.5 md:p-4 md:pt-8 lg:text-lg">
      <ul className="flex flex-1 justify-center gap-10 md:flex-col md:justify-start md:gap-3">
        {navigationItems.map((item) => (
          <NavLink
            to={item.to}
            key={item.label}
            className={({ isActive }) =>
              `rounded-lg p-1.5 md:p-3 ${isActive ? "bg-primary-hover" : "hover:bg-primary-hover"}`
            }
          >
            <li className="flex gap-3">
              {item.icon}
              <p className="hidden md:block">{item.label}</p>
            </li>
          </NavLink>
        ))}
      </ul>

      <div className="hidden items-center justify-between md:flex">
        <p>Logout</p>
        <div className="rounded-full p-3 hover:bg-primary-hover">
          <Modal>
            <Modal.Open opens="logout">
              <LogOut className="cursor-pointer" />
            </Modal.Open>
            <Modal.Window name="logout">
              <Confirmation
                title="Log Out"
                description="Are you sure you want to log out of your account?"
                type="Logout"
                action={() => {
                  logout();
                  toast.success("Logged out successfully");
                }}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default SideNavigation;
