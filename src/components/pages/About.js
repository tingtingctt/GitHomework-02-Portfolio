import React from "react";
import Footer from "../Footer.js"
import "../css/style.css"
import tingting from "../images/tingting.png";


function About() {
  return (
    <div className="container wrap">

      <div className="row">
        <div class="col-md-4">
          <img src={tingting} className="d-block w-100" alt="pic"/>
        </div>
          

        <div class="col-md-8">
            <p> &dagger; Just A Curious Humanoid &dagger; Born in Shanghai and raised between my Chinese hometown and Los Angeles, I have grown into some biological being like a mixture of cultural and philosophical stew. Having conformed to both parental and societal expectations of earning dual Master's Degrees in Art History and Business, I have stir-fried myself for another three years in a flavorfully spicy HotPot, called the "New York Art Scene". The New York HotPot inadvertently shot me into another new territory, called Italy, where practically none of "Chicken Alfredo", "Spaghetti with Meatballs", or "Pizza with Wine" are fitting. Just as I was about to launch myself into this new cultural battle-ground, called Europe, the coronavirus hit all of us like a symbolic moral and ideological query. We are forced to quit abruptly - to be put to sleep, to shut down, or to restart. The question is - under such unprecedented circumstances - do we cease to be? What defines us when the global system is no longer up-to-date? Are we a variable? A string? A number? A boolean? A Matrix? ... Do we actually have something that is undefinable by any codage? Are we sure that we are not just another robot? How far is our consciousness from a series of perfect codes? This is what I am trying to troubleshoot. One step at a time.</p>

        </div>

    </div>
    
    <Footer/>   
  </div>
  );
}

export default About;
