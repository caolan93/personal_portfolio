import { useState } from "react";

// Global Components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Technologies from "./pages/technologies";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Technologies" element={<Technologies />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
