import React from "react";
import "./css/style.css"
import linkedin from "./images/linkedin.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import github from "./images/github.png";

function Footer() {
    return (

  
        <div style={{textAlign: "center"}}>
          <hr/>
          <p>tingtingctt@gmail.com</p>
          <a href="https://github.com/tingtingctt/" target="_blank"><img className="logo" src={github} alt="github"/></a>
  
          <a href="https://www.facebook.com/tingting.chen.777" target="_blank"><img className="logo" src={facebook} alt="facebook"/></a>
  
          <a href="https://www.instagram.com/ting.ting.c/" target="_blank"><img className="logo" src={instagram} alt="instagram"/></a>
  
          <a href="https://www.linkedin.com/in/tingtingchen10/" target="_blank"><img className="logo" src={linkedin} alt="linkedin"/></a>
        </div>

    );
  }
  
  export default Footer;