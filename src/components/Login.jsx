import Navbar from "./Navbar";
import "../css/login.css";
import googleLogo from "../images/gmail-logo.png";
import twitterLogo from "../images/twitter.png";
import facebookLogo from "../images/facebook-logo.png";

import { useState, useEffect } from "react";

function Login() {
  return (
    <div className="login-container">
      <Navbar showLogin="showMain" />
      <section className={"login-menu"}>
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
          />

          <label htmlFor="password">
            <b>Slaptažodis</b>
          </label>
          <input
            type="password"
            placeholder="Įveskite vartotojo slaptažodį"
            name="password"
            required
          />
          <a href="#" className="forgot-password">Pamiršote salptažodį?</a>
          <button type="submit">Prisijungtu</button>
          <div className="seperate-login-ways">Prisijungti kitais būdais</div>
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
      </section>
    </div>
  );
}

export default Login;
