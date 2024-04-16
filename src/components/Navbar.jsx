import React from "react";
import Hero from "../Images/Hero.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <img src={Hero} alt="Hero" />
      <div className="navbar">
        <nav className="navbar-options">
          <a className="home-button">Home</a>
          <a href="#page-1">About Me</a>
          <a href="#page-2">Experience</a>
          <a href="#page-3">Contact Me</a>
        </nav>
      </div>
      <button>Hire Me</button>
    </div>
  );
};

export default Navbar;
