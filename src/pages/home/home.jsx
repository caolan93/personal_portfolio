import React from "react";

// Style
import "./style.scss";

import Contact from "../../components/contact/contact";
import Hero from "../../components/hero/hero";

const Home = () => {
  return (
    <div className="home-container-container">
      <div className="home-container">
        <Hero />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
