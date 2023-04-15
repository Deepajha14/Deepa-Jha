import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <>
    <div>
      <ProjectCard 
      projectTitle = "My Portfolio V.2.0" 
      projectDesc = "This is the second version of my portfolio website. With this version, I wanted to keep the code as basic as possible but still make the site interactive" 
      btnName = "View Project"
      projectLink = "https://github.com/Deepajha14/Touch-me-not-Card"
      deployedProjectLink = "https://deepajha14.github.io/Touch-me-not-Card/"
      projectImg = {require('../images/projectGlassmorphism.png')}
      />

      <ProjectCard 
      projectTitle = "Animated Card - featuring the latest glassmorphism trend" 
      projectDesc = "React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface" 
      btnName = "View Project"
      projectLink = "https://github.com/Deepajha14/Touch-me-not-Card"
      deployedProjectLink = "https://deepajha14.github.io/Touch-me-not-Card/"
      projectImg = {require('../images/projectGlassmorphism.png')}
      />

      <ProjectCard 
      projectTitle = "Rog-free: accessible anytime, anywhere" 
      projectDesc = "An approach to target and heal specific health conditions by transforming the living room into a yoga studio" 
      btnName = "View Project"
      projectLink = "https://github.com/Deepajha14/Rog-Free"
      deployedProjectLink = "https://deepajha14.github.io/Rog-Free/"
      projectImg = {require('../images/projectRogfree.png')}
      />
    </div>
    </>
  )
}
