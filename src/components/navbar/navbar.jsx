import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//React router DOM
import { NavLink } from "react-router-dom";

// Style
import "./style.scss";

// Action
import { toggleMobileMenu } from "../../actions/utility";

const Navbar = () => {
  const toggle = useSelector((state) => state?.mobileMenu?.mobileMenu);
  const dispatch = useDispatch();

  console.log("Test toggle", toggle);

  const location = useLocation();

  const navigateTo = () => {
    window?.scrollTo(0, 0);
  };

  const handleToggle = (data) => {
    dispatch(toggleMobileMenu(!data));
  };

  return (
    <div className="navbar-container-container">
      <div className="navbar-container">
        <div className="title-container">
          <h1>CFWebDev</h1>
          <button onClick={() => handleToggle(toggle)}>
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
            <NavLink onClick={navigateTo} to="/" className={`menu-list-item `}>
              Home
            </NavLink>
            <NavLink
              onClick={navigateTo}
              to="/about"
              className={`menu-list-item`}
            >
              About
            </NavLink>
            <NavLink
              onClick={navigateTo}
              to="/technologies"
              className={`menu-list-item`}
            >
              Technologies
            </NavLink>
            <NavLink
              onClick={navigateTo}
              to="/contact"
              className={`menu-list-item`}
            >
              Contact
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
