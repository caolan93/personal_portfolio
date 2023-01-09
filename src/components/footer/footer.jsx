import React from "react";

//Assets
import github from "../../assets/logos/github.png";
import linkedIn from "../../assets/logos/linkedIn.png";

// Style
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer-container-container">
      <div className="footer-container">
        <a href="https://github.com/caolan93" target="_blank">
          <img src={github} alt="Github logo icon" />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/caolan-fanning-1a7229157/"
          target="_blank"
        >
          <img src={linkedIn} alt="LinkedIn logo icon" />
          LinkedIn
        </a>
        <p>All Rights Reserved &copy;</p>
      </div>
    </div>
  );
};

export default Footer;
