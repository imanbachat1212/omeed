import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  console.log("Navigation Visibility:", isNavVisible);

  return (
    <div className="header">
      <img
        src={require("../images/logo-omeed.png")}
        alt="Omeed"
        className="logo"
      />
      <button
        className="menu-icon"
        onClick={() => setIsNavVisible(!isNavVisible)}
      >
        <img src={require("../images/menu.gif")} alt="Google" />
      </button>
      <ul className={`nav-links ${isNavVisible ? "active" : ""}`}>
        <li className="nav-list">
          <a href="#home">Home</a>
        </li>
        <li className="nav-list">
          <a href="#home">About</a>
        </li>
        <li className="nav-list">
          <a href="#home">Services</a>
        </li>
        <li className="nav-list">
          <a href="#home">Appreciation</a>
        </li>
        <li className="nav-list">
          <a href="#home" id="schedule">
            Schedule a call
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
