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
      <button href="page-4" className="hire-button">
        <a href="mailto: jesusvazquezama760@gmail.com" className="hire-anchor">
          {" "}
          Hire Me
        </a>
      </button>
    </div>
  );
};

export default Navbar;
