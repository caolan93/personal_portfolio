import React from "react";

// Style
import "./style.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="welcome-container">
        <div className="title-container">
          <h1>WELCOME TO MY PERSONAL WEBSITE PORTFOLIO</h1>
        </div>
        <div className="paragraph-container">
          <p>
            My name is Caolan Fanning. I am a Web developer with experience with
            both Frontend and Backend development using the MERN stack. Welcome
            to my website.
          </p>
        </div>
      </div>
      <div className="image-container">
        <div className="picture-container">
          <div className="picture"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
