import React from "react";
import download from "../Images/download.png";
import WideShot from "../Images/wideShot.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <p> A Bit Into who I am and what I'm about</p>
      </div>
      <div className="about-content">
        <div className="about-picture">
          <img src={WideShot} alt="Wide Shot" />
        </div>
        <div className="about-information">
          <p>
            As a current student at Cal State San Marcos, I find myself immersed
            in the vibrant academic atmosphere of Southern California, driven by
            my aspirations to become a proficient software engineer and frontend
            developer. Being part of this dynamic community provides me with
            invaluable opportunities to hone my skills and explore the depths of
            technology.Moreover, software engineering is a field that constantly
            evolves, presenting new challenges and opportunities for growth. The
            dynamic nature of technology ensures that there is always something
            new to learn and explore, from emerging programming languages to
            cutting-edge frameworks and tools.
          </p>
          <button>
            <img src={download} alt="download Icon" /> Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
