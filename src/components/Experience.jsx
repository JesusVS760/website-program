import React from "react";
import "./Experience.css";
import htmlImage from "../Images/htmlpngimage.png";
import javascriptImg from "../Images/javascript.webp";
import cplusplus from "../Images/c++.png";
import cssImage from "../Images/react.png";
import reactImage from "../Images/css.png";

import nodejsImage from "../Images/nodejs.png";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2>Tech Stack/Experience</h2>
        <p>The following represents my skills sets and experience thus far.</p>
      </div>
      <div className="experience-content">
        <div className="stack-container">
          <img src={htmlImage} alt="html" />
          <img src={javascriptImg} alt="javascript" />
          <img src={cssImage} alt="c++" />
        </div>
        <div className="stack-container">
          <img src={cssImage} alt="c++" />
          <img src={reactImage} alt="react" />
          <img src={nodejsImage} alt="nodejs" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
