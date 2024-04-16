import React from "react";
import "./Experience.css";
import htmlImage from "../Images/htmlpngimage.png";
import javascriptImg from "../Images/javascript.webp";
import cplusplus from "../Images/c++.png";
import reactImage from "../Images/react.png";
import cssImage from "../Images/css.png";

import nodejsImage from "../Images/nodejs.png";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2 id="page-2">Tech Stack/Experience</h2>
        <p>The following represents my skills sets and experience thus far.</p>
      </div>
      <div className="experience-content">
        <div className="stack-container">
          <div className="stack-background html-image">
            <img src={htmlImage} alt="html" />
          </div>
          <div className="stack-background js-image">
            <img src={javascriptImg} alt="javascript" />
          </div>
          <div className="stack-background css-image">
            <img src={cssImage} alt="css" />
          </div>
        </div>
        <div className="stack-container">
          <div className="stack-background cplusplus-image">
            <img src={cplusplus} alt="c++" />
          </div>
          <div className="stack-background react-image">
            <img src={reactImage} alt="react" />
          </div>
          <div className="stack-background node-js">
            <img src={nodejsImage} alt="node-background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
