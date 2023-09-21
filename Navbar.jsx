import "../css/navbar.css"
import logo from "../images/kitm-logo.png"

function Navbar() {
    return (
        <nav>
            <img className="navbar-logo" src={logo} alt="logo" />

            <button className="login-button">Prisijungti</button>
        </nav>
    )
}

export default Navbar
