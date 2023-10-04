import Navbar from "./Navbar";
import "../css/login.css";
import googleLogo from "../images/gmail-logo.png";
import twitterLogo from "../images/twitter.png";
import facebookLogo from "../images/facebook-logo.png";

import Dashboard from "./Dashboard";

import { useRef, useState } from "react";
import { Navigate, Link } from "react-router-dom";

function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [loggedin, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5231/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      if (response.ok) {
        // Login successful
        setLoggedIn(true);
      } else {
        // Login failed
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  if (loggedin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-container">
      <Navbar showLogin="showMain" />
      <form className={"login-menu"} onSubmit={handleLogin}>
        <h1 className="login-header">Prisijungti</h1>
        <div className="login-inputs">
          <label htmlFor="username">
            <b>Vardas</b>
          </label>
          <input
            maxLength={12}
            type="text"
            placeholder="Įveskite vartotojo vardą"
            name="username"
            required
            ref={usernameRef}
          />

          <label htmlFor="password">
            <b>Slaptažodis</b>
          </label>
          <input
            type="password"
            placeholder="Įveskite vartotojo slaptažodį"
            name="password"
            required
            ref={passwordRef}
          />
          <a href="#" className="forgot-password">
            Pamiršote slaptažodį?
          </a>
          <button className="submit-login" type="submit">
            Prisijungti
          </button>
          <div className="separate-login-ways">Prisijungti kitais būdais</div>
          <ul className="different-login-ways">
            <li>
              <img
                src={facebookLogo}
                alt="facebook-logo"
                className="custom-login"
              />
            </li>
            <li>
              <img
                src={twitterLogo}
                alt="twitter-logo"
                className="custom-login"
              />
            </li>
            <li>
              <img
                src={googleLogo}
                alt="google-logo"
                className="custom-login"
              />
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Login;
