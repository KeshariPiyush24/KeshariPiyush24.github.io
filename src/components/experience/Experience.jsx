import React from 'react'
import './experience.css'
import { MdWorkOutline } from 'react-icons/md'

const Experience = () => {
  return (
    <section id='experience' className="section-container">
      <h5>What Experience I have</h5>
      <h1 style={{ marginBottom: '2.5rem' }}>My Experience</h1>

      <div className="container experience_container">
        <div className="experience_card">
          <div className="company_name">
            <MdWorkOutline className="work_icon" />
            <h2>Springworks</h2>
          </div>
          <div className="experience_position">
            <p>SDE 1 (BE Dev)</p>
            <p className="experience_duration">March 2023 - Present</p>
          </div>
          <div className="experience_content">
            <ul>
              <li>Migrated legacy code logic from PHP to Node.js, ensuring a seamless transition and improved performance.</li>
              <li>Deployed multiple sales on ecommerce platform, including SKU addition, price configuration, and discount coupon integration.</li>
              <li>Developed new APIs on ecommerce platform for a user type, enabling profile management, order creation, and dashboard APIs for search, sorting, and filtering.</li>
            </ul>
          </div>
        </div>
        <div className="experience_card">
          <div className="company_name">
            <MdWorkOutline className="work_icon" />
            <h2>Springworks</h2>
          </div>
          <div className="experience_position">
            <p>SDE Intern (BE Dev)</p>
            <p className="experience_duration">March 2022 - March 2023</p>
          </div>
          <div className="experience_content">
            <ul>
              <li>Developed a Node.js API triggered by Lambda to automate monthly birthday gift card distribution to thousands of users.</li>
              <li>Refactored and optimized the codebase, improving performance in key areas.</li>
              <li>Successfully resolved multiple bugs and addressed code smells reported by QA and identified through Sentry.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience