import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { AiOutlineCode } from 'react-icons/ai'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about' className="section-container">
      <div className="section_heading">
        <h5>Get To Know Me</h5>
        <h1>Engineer With Product Ownership</h1>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdOutlineWorkOutline className='about_icon' />
              <h5>Experience</h5>
              <small>4+ years in production systems</small>
            </article>

            <article className="about_card">
              <AiOutlineCode className='about_icon' />
              <h5>Stack</h5>
              <small>React, Node.js, Spring Boot</small>
            </article>

            <article className="about_card">
              <AiOutlineFundProjectionScreen className='about_icon' />
              <h5>Delivery</h5>
              <small>APIs, integrations, CI/CD</small>
            </article>
          </div>

          <p className="about_description">
            Full Stack Software Engineer with 4+ years of experience building production web applications, backend APIs, microservices, and automation workflows. I am strongest where frontend craft meets backend reliability: REST APIs, SQL and NoSQL databases, authentication, third-party integrations, performance work, testing, and production debugging.
          </p>
          <div className="about_tags" aria-label="Core strengths">
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Java Spring Boot</span>
            <span>AWS</span>
            <span>Docker</span>
            <span>AI Workflow Automation</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
