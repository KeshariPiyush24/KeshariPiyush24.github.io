import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/result.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className="section-container">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Piyush Keshari</h1>
        <h5 className="text-light">Full Stack Web Developer with 2.5+ years of experience specializing in JavaScript, Node.js, and React.js.
          Proven track record of developing and optimizing web applications, can quickly learn new technologies
          and collaborate in fast-paced environments.</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header