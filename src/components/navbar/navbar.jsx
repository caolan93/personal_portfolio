import React from "react";

const Navbar = () => {
  return (
    <div className="flex-1 bg-slate-600 flex-wrap">
      <nav>
        <h1>Caolan Fanning Web Dev</h1>
        <ul className="flex flex-1">
          <li className="flex text-white">Home</li>
          <li className="flex text-white">About</li>
          <li className="flex text-white">Skills</li>
          <li className="flex text-white">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
