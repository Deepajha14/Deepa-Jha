import React from 'react'
import AboutMe from '../components/AboutMe'
import SkillCard from '../components/SkillCard'
import ScrollToTop from '../components/ScrollToTop'

export default function About() {
  return (
    <div>
      <ScrollToTop/>
      <SkillCard/>
      <AboutMe/>
    </div>
  )
}
