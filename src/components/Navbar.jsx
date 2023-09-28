import "../css/navbar.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../images/kitm-logo.png";

function Navbar(showLogin) {
  let loggedIn = false;
  return (
    <nav>
      <img className="navbar-logo" src={logo} alt="logo" />

      <button className="login-button">
        {showLogin["showLogin"] === "showLogin" ? (
          loggedIn ? (
            <Link to="/dashboard">Lentelė</Link>
          ) : (
            <Link to="/login">Prisijungti</Link>
          )
        ) : (
          <Link to="/">Tvarkaraštis</Link>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
