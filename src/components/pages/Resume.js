import React from "react";
import resume from "../images/resume.png";
import Footer from "../Footer.js";

function Resume() {
  return (
    <div className="container">
      <img className="artwork" src={resume} alt="resume"/>

    <Footer/>
    </div>
  );
}

export default Resume;
