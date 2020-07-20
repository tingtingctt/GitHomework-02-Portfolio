import React from "react";
import "./css/style.css"

import github from "./images/github.png";
import works from './worksCMS.js';

function Fullpage(props) {
    
    
    return (
        <div>
            <p onClick={props.onClick}><strong>All Works</strong></p>

            <div style={{textAlign: "center"}}>
                <p style={{color:"black", margin: "0 50px 0 50px"}}>{works[props.title].description}</p>
                <a href="https://github.com/tingtingctt/" target="_blank"><img className="artwork" src={works[props.title].img} alt={props.title}/></a>
            </div>


        </div>

    );
  }
  
  export default Fullpage;