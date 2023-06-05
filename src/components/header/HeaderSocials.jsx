import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/piyush-k-ba3a67134/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/KeshariPiyush24" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/KeshariPiyush24" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials