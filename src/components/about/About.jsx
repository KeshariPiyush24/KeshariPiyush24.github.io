import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { AiOutlineCode } from 'react-icons/ai'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about' className="section-container">
      <div className="about_heading">
        <h5>Get To Know Me</h5>
        <h1>About Me</h1>
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
              <small>2.5+ Years Working</small>
            </article>

            <article className="about_card">
              <AiOutlineCode className='about_icon' />
              <h5>DSA</h5>
              <small>650+ on LeetCode</small>
            </article>

            <article className="about_card">
              <AiOutlineFundProjectionScreen className='about_icon' />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p className="about_description">
            Full Stack Developer with 2.5+ years of experience specializing in JavaScript-based web applications and
            microservices. Proven expertise in React.js, Node.js, and modern DevOps practices. Demonstrated success in optimizing
            application performance, implementing automated testing, and maintaining high-quality codebases. Strong background in
            developing RESTful APIs and integrating third-party services. Skilled at analyzing application logs and implementing
            structured error handling systems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
