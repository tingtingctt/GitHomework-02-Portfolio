import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/style.css";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" >
          <p id="name">TINGTING CHEN</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          <p className={location.pathname === "/" ? "navActive" : "navText"}>HOME</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
        >
          <p className={location.pathname === "/about" ? "navActive" : "navText"}>BIO</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
        >
          <p className={location.pathname === "/portfolio" ? "navActive" : "navText"}>PORTFOLIO</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
        >
          <p className={location.pathname === "/resume" ? "navActive" : "navText"}>RESUME</p>
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li> */}
    </ul>


  );
}

export default NavTabs;
