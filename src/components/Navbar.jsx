import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav nav-pills justify-content-evenly p-3">
      <NavLink
        to={"/"}
        className={({ isActive }) => `nav-link ${isActive && "active"}`}
      >
        Home
      </NavLink>
      <NavLink
        to={"/films"}
        className={({ isActive }) => `nav-link ${isActive && "active"}`}
      >
        Films
      </NavLink>
      <NavLink
        to={"/people"}
        className={({ isActive }) => `nav-link ${isActive && "active"}`}
      >
        People
      </NavLink>
    </nav>
  );
};

export default Navbar;
