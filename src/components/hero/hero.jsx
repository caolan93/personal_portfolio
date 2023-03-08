import React, { useEffect, useState } from "react";

// Assets
import caolan from "../../assets/caolan.jpg";
import { Wave } from "../wave/wave";

// Style
import "./style.scss";

const Hero = () => {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    setWidth(true);
  }, []);

  const handleWave = () => <Wave />;

  const waveDelay = () => {
    setTimeout(() => <Wave />, 5000);
  };

  return (
    <div className="hero-container">
      {window.innerWidth > 1024 && <Wave />}
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
          <div className="picture">
            <img src={caolan} alt="A picture of me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
