import React from "react";
import github from "../Images/GitHubIcon.png";
import linkedin from "../Images/linkedin.png";
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
        <a href="">
          <img src={github} alt="github" />
        </a>
        <a href="">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="">
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
          Programed/Designed by Jesus Vazquez Aspiring Web Developer/Software
          Engineer
        </p>
      </div>
    </div>
  );
};

export default Footer;
