import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/piyush-k-ba3a67134/" target="_blank" rel="noreferrer">
        <div className="circle linkedin">
          <BsLinkedin className="header_social_icon" />
        </div>
      </a>
      <a href="https://github.com/KeshariPiyush24" target="_blank" rel="noreferrer">
        <div className="circle github">
          <BsGithub className="header_social_icon" />
        </div>
      </a>
      <a href="https://twitter.com/KeshariPiyush24" target="_blank" rel="noreferrer">
        <div className="circle twitter">
          <BsTwitter className="header_social_icon" />
        </div>
      </a>
    </div>
  )
}

export default HeaderSocials
