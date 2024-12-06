import React from 'react'
import cv from '../../assets/cv.pdf'
import { AiFillHeart } from 'react-icons/ai'
import './cta.css'

function CTA() {
  return (
    <div className="cta">
      <a href={cv} download="Piyush's Resume.pdf" className='btn'>Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
      <a
        href="https://github.com/sponsors/KeshariPiyush24"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sponsor"
      >
        <AiFillHeart className="sponsor-heart" /> Sponsor
      </a>
    </div>
  )
}

export default CTA