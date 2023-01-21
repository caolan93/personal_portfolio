import React from "react";

// Assets
import bootstrap from "../../assets/logos/bootstrap.png";
import figma from "../../assets/logos/figma.webp";
import gitHub from "../../assets/logos/gitHub.png";
import javascript from "../../assets/logos/javascript.jpg";
import mysql from "../../assets/logos/mysql.jpg";
import nodejs from "../../assets/logos/nodejs.png";
import postman from "../../assets/logos/postman.svg";
import tailwind from "../../assets/logos/tailwind.svg";
import react from "../../assets/logos/react.svg";
import materialUI from "../../assets/logos/materialUI.png";
import mongodb from "../../assets/logos/mongodb.png";

// Style
import "./style.scss";

const Technologies = () => {
  return (
    <div className="technologies-container">
      <div className="title-container">
        <h2>Technologies</h2>
      </div>
      <div className="left-container">
        <div className="technology-icons">
          <img src={bootstrap} alt="A bootstrap icon" />
          <img src={materialUI} alt="A materialUI icon" />
          <img src={tailwind} alt="A tailwind icon" />
          <img src={javascript} alt="A javascript icon" />
          <img src={postman} alt="A postman icon" />
          <img src={nodejs} alt="A nodejs icon" />
          <img src={react} alt="A react icon" />
          <img src={mongodb} alt="A mongodb icon" />
          <img src={figma} alt="A figma icon" />
          <img src={mysql} alt="A mysql icon" />
        </div>
      </div>
      <div className="right-container">
        <p className="text-information">
          While working as a Software Engineer I have been fortunate enough to
          work on a wide range of Web Applications which have encorporated a
          wide number of technologies.
          <br />
          <br />
          Some of the main technologies I have used both in a professional and
          personal setting can be found on the left hand side
        </p>
      </div>
    </div>
  );
};

export default Technologies;
