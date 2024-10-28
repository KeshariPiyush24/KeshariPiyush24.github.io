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
        <h5 className="text-light">Full Stack Developer with 2.5+ years of experience specializing in JavaScript-based web applications and
          microservices. Proven expertise in React.js, Node.js, and modern DevOps practices. Demonstrated success in optimizing
          application performance, implementing automated testing, and maintaining high-quality codebases. Strong background in
          developing RESTful APIs and integrating third-party services. Skilled at analyzing application logs and implementing
          structured error handling systems.</h5>
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