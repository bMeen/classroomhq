import { NavLink } from "react-router-dom";

const navs: { label: string; to: string }[] = [
  { label: "Details", to: "details" },
  { label: "Grades", to: "grade" },
  { label: "Attendance", to: "records" },
];

function Navigation() {
  return (
    <div className="grid w-full max-w-md grid-cols-3">
      {navs.map((nav, index) => (
        <NavLink
          key={index}
          to={nav.to}
          className={({ isActive }) =>
            `pb-1 text-center text-base ${isActive ? "border-b border-primary" : ""}`
          }
        >
          {nav.label}
        </NavLink>
      ))}
    </div>
  );
}

export default Navigation;
