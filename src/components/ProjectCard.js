import React from 'react';
import "./ProjectCardStyle.css";
import {FaArrowRight} from "react-icons/fa";

export default function ProjectCard(props) {
  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  }

  return (
    <div className='project-window' id = {props?.id}>
      <div className="project-wrapper">
        <div className="about-project">
          <div className="project-title">{props.projectTitle}</div>
          <div className="desc">{props.projectDesc}</div>
          <button className='btn' onClick={handleOnClick}><span>{props.btnName}</span><FaArrowRight className='btn-arrow' size={22} style={{marginLeft: "1rem"}}/></button>
        </div>
        <div className="project-img">
          <a href={props.deployedProjectLink} target= "_blank" rel="noopener noreferrer"><img src={props.projectImg} alt="Displaying Project" /></a>
        </div>
      </div>
    </div>
  )
}