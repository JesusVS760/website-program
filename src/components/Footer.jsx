import React from "react";
import github from "../Images/GitHubIcon.png";
import linkedin from "../Images/linkedinIcon.png";
import instagram from "../Images/InstagramIcon.png";
import email from "../Images/email.png";
import phone from "../Images/phone.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <a href="">Home</a>
        <a href="">About Me</a>
        <a href="">Experience</a>
        <a href="">Contact Me</a>
        <a href="">Hire Me</a>
      </div>
      <div className="footer-links">
        <a href="https://github.com/JesusVS760" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jesus-vazquez-7313042b8/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/jesus_v760" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
      <div className="footer-contact">
        <p>
          <img src={email} alt="email" />
          jesusvazquezama760@gmail.com
        </p>
        <p>
          {" "}
          <img src={phone} alt="phone number" />
          760 840 8258
        </p>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>
          Programmed/Designed by Jesus Vazquez Aspiring Web Developer/Software
          Engineer
        </p>
      </div>
    </div>
  );
};

export default Footer;
