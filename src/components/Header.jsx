import React from "react";
import Github from "../Images/GitHubIcon.png";
import linkedin from "../Images/linkedinIcon.png";
import instagram from "../Images/InstagramIcon.png";
import profile from "../Images/file.png";
import Resume from "../Images/Jesus Vazquez Resume 2024.pdf";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h3>
          Hi I am <span className="name">Jesus Vazquez</span>
        </h3>
        <h1>Frontend Developer</h1>
        <div className="header-links">
          <a href="https://www.instagram.com/jesus_v760" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/jesus-vazquez-7313042b8/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/JesusVS760" target="_blank">
            <img src={Github} alt="github" />
          </a>
        </div>
        <div className="header-buttons">
          <a
            href="mailto: jesusvazquezama760@gmail.com"
            className="hire-button"
          >
            Hire Me
          </a>
          <a href={Resume} download>
            Download CV
          </a>
        </div>
      </div>
      <div className="header-hero">
        <img className="profile-image" src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
