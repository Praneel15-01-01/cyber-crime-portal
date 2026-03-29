 import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title">Cyber Crime Reporting Portal</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/report">Report an Incident</Link>
        <Link to="/risk">Check Your Vulnerability</Link>
        <Link to="/track">Track Your Complaints</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;