import React from 'react'
import './education.css'
import { BsBook } from 'react-icons/bs'

const Education = () => {
  return (
    <section id='education' className="section-container">
      <h5>What education I have</h5>
      <h1 style={{ marginBottom: '2.5rem' }}>My education</h1>

      <div className="container education_container">
        <div className="education_card">
          <div className="institution_name">
            <BsBook className="book_icon" />
            <h2>GLA University, Mathura</h2>
          </div>
          <div className="education_position">
            <p>B.Tech CS</p>
            <p>8.23 CPI</p>
            <p className="education_duration">2019 - 2023</p>
          </div>
        </div>
        <div className="education_card">
          <div className="institution_name">
            <BsBook className="book_icon" />
            <h2>Sant Atulanand Convent School, Varanasi</h2>
          </div>
          <div className="education_position">
            <p>PCM & CS</p>
            <p>82.8%</p>
            <p className="education_duration">2016 - 2018</p>
          </div>
        </div>
        <div className="education_card">
          <div className="institution_name">
            <BsBook className="book_icon" />
            <h2>St Joseph's Convent School</h2>
          </div>
          <div className="education_position">
            <p>PCMB & CS</p>
            <p>78.5%</p>
            <p className="education_duration">2014 - 2016</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education