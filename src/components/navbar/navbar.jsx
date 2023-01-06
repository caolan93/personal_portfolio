import React, { useState } from "react";

//Style
import "./style.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  ("");
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar-container-container">
      <div className="navbar-container">
        <div className="title-container">
          <h1>Caolan Fanning Web Dev</h1>
          <button onClick={handleToggle}>
            <div className={`hamburger-menu ${toggle && "open"}`}>
              <div className="line-top" />
              <div className="line-close-top" />
              <div className="line-mid" />
              <div className="line-close-btm" />
              <div className="line-btm" />
            </div>
          </button>
        </div>
        <nav className={`navbar-list ${toggle && "open"}`}>
          <ul className="menu-list">
            <li className="menu-list-item">Home</li>
            <li className="menu-list-item">About</li>
            <li className="menu-list-item">Skills</li>
            <li className="menu-list-item">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
