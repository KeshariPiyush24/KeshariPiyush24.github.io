import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { AiOutlineCode } from 'react-icons/ai'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h1 style={{ marginBottom: '2.5rem' }}>About Me</h1>

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
              <small>1+ Years Working</small>
            </article>

            <article className="about_card">
              <AiOutlineCode className='about_icon' />
              <h5>DSA</h5>
              <small>600+ on LeetCode</small>
            </article>

            <article className="about_card">
              <AiOutlineFundProjectionScreen className='about_icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p style={{ textAlign: "left" }}>
            Hello! I am a final year computer science engineering student at GLA University and am passionate about software development and finding creative solutions to complex problems. I am always looking for new challenges and opportunities to learn and grow in my field. While I am just starting out in my career, I am confident in my ability to adapt to new technologies and work well with others. I am also flexible when it comes to communication and enjoy building relationships with my colleagues. I am excited to continue learning and growing as I progress in my career.
          </p>

          <a href="#contact" className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About