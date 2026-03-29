import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/report">Report an Incident</NavLink>
      <NavLink to="/risk">Check Your Vulnerability</NavLink>
      <NavLink to="/track">Track Your Complaints</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}

export default Navbar;