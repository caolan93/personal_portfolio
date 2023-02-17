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

  return (
    <div className="hero-container">
      {/* <svg
        width="1926"
        height="475"
        viewBox="0 0 1926 475"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector 2"
          d="M1 79.9995C776 1151 1050 -346.5 1925 79.9995"
          stroke="#BFA181"
        />
      </svg> */}

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
