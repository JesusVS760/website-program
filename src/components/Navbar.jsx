import React from "react";
import Hero from "../Images/Hero.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <img src={Hero} alt="Hero" />
      <div className="navbar">
        <nav className="navbar-options">
          <li className="home-button">Home</li>
          <li>About Me</li>
          <li>Experience</li>
          <li>Contact Me</li>
        </nav>
      </div>
      <button>Hire Me</button>
    </div>
  );
};

export default Navbar;
