import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Components/Header.css";
import logo from "../images/healthcare.png";

function Header() {
  return (
    <>
      <nav id="navBar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="heading">
          <h3>Live Care </h3>
        </div>
        <div className="tagss">
          <ul>
            <li className="items">
              <a href="/Home">Home</a>
            </li>
            <li className="items">
              <a href="/LoginD">Login</a>
            </li>

            <li className="items">
              <a href="/About">About</a>
            </li>
            <li className="items">
              <a href="/Contact">Contact Us</a>
            </li>
            <li className="items">
              <a href="/#">Emergency</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
