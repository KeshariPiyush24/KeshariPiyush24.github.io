import React from 'react'
import cv from '../../assets/cv.pdf'
import './cta.css'

function CTA() {
  return (
    <div className="cta">
      <a href={cv} download="Piyush_Keshari_Resume.pdf" className='btn'>Download Resume</a>
      <a href="#project" className="btn btn-primary">View Work</a>
      <a href="#contact" className="btn btn-quiet">Contact</a>
    </div>
  )
}

export default CTA
