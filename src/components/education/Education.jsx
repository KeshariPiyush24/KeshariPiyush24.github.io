import React from 'react'
import './education.css'
import { BsBook } from 'react-icons/bs'

const Education = () => {
  return (
    <section id='education' className="section-container">
      <div className="education_heading">
        <h5>What education I have</h5>
        <h1>My Education</h1>
      </div>

      <div className="container education_container">
        <div className="education_card">
          <div className="institution_name">
            <BsBook className="book_icon" />
            <div className="institution_details">
              <h2>GLA University, Mathura</h2>
              <div className="education_position">
                <span className="degree">B.Tech CS</span>
                <span className="score">8.23 CPI</span>
                <span className="education_duration">2019 - 2023</span>
              </div>
            </div>
          </div>
        </div>

        <div className="education_card">
          <div className="institution_name">
            <BsBook className="book_icon" />
            <div className="institution_details">
              <h2>Sant Atulanand Convent School, Varanasi</h2>
              <div className="education_position">
                <span className="degree">PCM & CS</span>
                <span className="score">82.8%</span>
                <span className="education_duration">2016 - 2018</span>
              </div>
            </div>
          </div>
        </div>

        <div className="education_card">
          <div className="institution_name">
            <BsBook className="book_icon" />
            <div className="institution_details">
              <h2>St Joseph's Convent School</h2>
              <div className="education_position">
                <span className="degree">PCMB & CS</span>
                <span className="score">78.5%</span>
                <span className="education_duration">2014 - 2016</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
