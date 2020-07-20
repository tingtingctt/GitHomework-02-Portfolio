import React from "react";
import "./css/style.css"

import github from "./images/github.png";
import works from './worksCMS.js';

function Fullpage(props) {
    
    
    return (
        <div>
            <p onClick={props.onClick} style={{transform: "translate(0, -50px)"}}><strong>  ALL WORKS</strong></p>

            <div style={{textAlign: "center", transform: "translate(0, -30px)"}}>
                <p style={{color:"black", margin: "0 50px 0 50px"}}>{works[props.title].description}</p>
                <img className="artwork" src={works[props.title].img} alt={props.title}/>
                <br/><br/>
                <a href={works[props.title].repo} target="_blank" style={{color: "black"}}><img className="logo" src={github} alt="github"/>Github Repo</a>
                <br/>
                <a href={works[props.title].deploy} target="_blank" style={{color: "black"}}><img className="logo" src={works[props.title].img} alt="github"/>Deployed Link</a>
            </div>


        </div>

    );
  }
  
  export default Fullpage;