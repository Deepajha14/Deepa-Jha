import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Projects from '../routes/Projects'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div>
      <div id='HomeBanner'><HomeBanner/></div>
      <div id='Projects'><Projects/></div>
      <div id='AboutMe'><AboutMe/></div>
    </div>
  )
}
