import React from 'react'
import './achievement.css'
import { SlBadge } from 'react-icons/sl'

const Achievement = () => {
  return (
    <section id='achievement'>
      <h5>What achievements I have</h5>
      <h1 style={{ marginBottom: '2.5rem' }}>My achievements and certificates</h1>

      <div className="container achievement_container">
        <div className="achievement_card">
          <a href="https://leetcode.com/insaneBanda/" target="_blank">
            <div className="achievement_name">
              <SlBadge className="achievement_icon" />
              <h2>650+ questions on Leetcode</h2>
            </div>
          </a>
        </div>
        <div className="achievement_card">
          <a href="https://www.udemy.com/certificate/UC-f392a4b3-9807-4c7b-9840-f42ff96ca863/" target="_blank">
            <div className="achievement_name">
              <SlBadge className="achievement_icon" />
              <h2>Git and Github course from udemy</h2>
            </div>
          </a>
        </div>
        <div className="achievement_card">
          <a href="https://leetcode.com/insaneBanda/" target="_blank">
            <div className="achievement_name">
              <SlBadge className="achievement_icon" />
              <h2>100 days of coding badge on Leetcode</h2>
            </div>
          </a>
        </div>
      </div>
    </section >
  )
}

export default Achievement