import React from "react";

import "./style.scss";

const ProjectCard = ({ image, description, title }) => {
  return (
    <div className="project-card-container">
      <div className="image-container">
        <img
          src={image}
          alt={`This is an image of the homepage taken from ${title}.`}
        />
      </div>
      <div className="card-title-container">
        <h3>{title}</h3>
      </div>
      <div className="description-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
