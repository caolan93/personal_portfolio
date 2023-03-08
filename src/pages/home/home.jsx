import React from "react";

// Style
import "./style.scss";

import Contact from "../../components/contact/contact";
import Hero from "../../components/hero/hero";
import Technologies from "../../components/technologies/technologies";
import Projects from "../../components/projects/projects";
import About from "../../components/about/about";

const Home = () => {
  return (
    <div className="home-container-container">
      <div className="home-container">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
