import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import "../Styles/presentation.css"

function Presentation() {
  return (
    <div className='presentation-container'>
        <Skills  />
        <AboutMe  />
    </div>
  )
}

export default Presentation