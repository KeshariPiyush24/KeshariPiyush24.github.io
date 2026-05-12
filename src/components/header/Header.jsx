import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/result.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className="section-container">
      <div className="container header_container">
        <div className="hero_content">
          <div className="hero_eyebrow">Full Stack Software Engineer</div>
          <h1>Piyush Keshari</h1>
          <p className="hero_summary">
            I build production web applications, backend APIs, microservices, and workflow automation across React, Node.js, Java Spring Boot, AWS, Docker, and AI-assisted engineering.
          </p>
          <div className="hero_meta" aria-label="Professional highlights">
            <span>4+ years experience</span>
            <span>Bengaluru, India</span>
            <span>99.95% uptime systems</span>
          </div>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="hero_visual" aria-label="Portrait and professional snapshot">
          <div className="me">
            <img src={ME} alt="Piyush Keshari" />
          </div>
          <div className="hero_status_card">
            <span className="status_dot" aria-hidden="true" />
            <div>
              <strong>SDE I at Incred Finance</strong>
              <small>Loan approval and digital consent workflows</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
