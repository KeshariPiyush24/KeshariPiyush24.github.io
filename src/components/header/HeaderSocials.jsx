import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://twitter.com/KeshariPiyush24" target="_blank" rel="noreferrer">
        <div className="circle twitter">
          <BsTwitter className='header_social_icon' />
        </div>
      </a>
      <a href="https://www.instagram.com/kesharipiyush24/" target="_blank" rel="noreferrer">
        <div className="circle instagram">
          <BsInstagram className='header_social_icon' />
        </div>
      </a>
      <a href="https://github.com/KeshariPiyush24" target="_blank" rel="noreferrer">
        <div className="circle github">
          <BsGithub className='header_social_icon' />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/piyush-k-ba3a67134/" target="_blank" rel="noreferrer">
        <div className="circle linkedin">
          <BsLinkedin className='header_social_icon' />
        </div>
      </a>
    </div>
  )
}

export default HeaderSocials
