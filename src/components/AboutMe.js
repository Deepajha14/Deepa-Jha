import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/myProfile.png";

export default function AboutMe() {
  return (
    <div className="about-window">
      <div className="about-container">
        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img>
          <div className="name">Deepa</div>
        </div>
        <div className="aboutMe-text">
          <h3>Hi there</h3>
          I'm Deepa, a self-taught Frontend Developer based in New Delhi, India. I build websites with a focus on responsivenes, accessibility and pleasing aesthetics. Being well versed in all the key languages allows me to rapidly design, code and deploy in an organized and efficient manner.
          <br /> <br /> 
          I really enjoy being creative, so I like to spend my free time drawing, sketching, and painting. It's a great way for me to unwind and tap into my creative side.
          <br/> <br/>
          <a className='resume' href="https://docs.google.com/document/d/17uPR_bFRj_hxVt6KnqrzkocAchNJRBTfuOJ3GlikR6A/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Here is my Resume</a>
        </div>
      </div>
    </div>
  );
}
