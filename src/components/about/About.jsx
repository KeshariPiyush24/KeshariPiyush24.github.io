import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { AiOutlineCode } from 'react-icons/ai'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about' className="section-container">

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
              <small>1.5+ Years Working</small>
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
            I am a computer science engineering graduate from GLA University (Class of 2023). I have a strong passion for software development and enjoy tackling complex problems. I thrive on new challenges and continuously seek opportunities to learn and grow. While I am relatively new to the industry, I am confident in my adaptability to emerging technologies and my ability to collaborate effectively with teammates. I am open to different communication styles and value building strong professional relationships. I am enthusiastic about advancing my skills and knowledge as I embark on my career journey.
          </p>

          <a href="#contact" className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About