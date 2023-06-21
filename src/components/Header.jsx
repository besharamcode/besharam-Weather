import React from "react";
import { NavLink } from "react-router-dom";

function header() {
  const togglenav = () => {
    const navbar = document.getElementById("navbar");
    const barIcon = document.getElementById("bars");
    navbar.classList.toggle("opened");
    if (barIcon.classList.contains("fa-xmark")) {
      barIcon.classList.replace("fa-xmark", "fa-bars");
    } else {
      barIcon.classList.replace("fa-bars", "fa-xmark");
    }
  };

  return (
    <header className="padding-inline space-between-container">
      <div className="logo | flex">
        <i className="fa-solid fa-temperature-half"></i>
        <p>Besharam-Weather</p>
      </div>

      <button onClick={togglenav} className="nav-toggle-btn"> <i id="bars" className="bars fa-solid fa-bars"></i></button>
      <nav
        id="navbar"
        className="primery-nav"
        aria-label="primery-nav"
        aria-controls="navigation"
      >
        <ul className="" aria-label="navlist">
          <li>
            <NavLink className="primery-nav-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="primery-nav-link" to="/weather">Weather</NavLink>
          </li>
          <li>
            <NavLink className="primery-nav-link" to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
