import React from "react";
import ProjectCard from "../cards/projectCard/projectCard";

// Style
import "./style.scss";

// Assets
import { projectContent } from "../../assets/projectContent";

// Components
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="title-container">
        <h2>Projects</h2>
      </div>
      <div className="project-cards-container">
        <p>
          Throughout my time in Digigrow I have been lucky enough to work on
          some great projects, further developing and enchancing my skills as a
          Software Engineer.
          <br />
          Though I initally started as a Frontend Developer I have more recently
          gained experience and exposure working in the server side of fully
          fledged MERN stack web applications.
          <br />
          Below are some of the web applications I have worked on.
        </p>

        <div className="project-cards-carousel">
          {projectContent.map((content, index) => (
            <ProjectCard
              key={index}
              title={content?.title}
              image={content?.image}
              description={content?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
