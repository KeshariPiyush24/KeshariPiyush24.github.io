import React from 'react'
import './experience.css'
import { MdWorkOutline } from 'react-icons/md'

const Experience = () => {
  return (
    <section id='experience' className="section-container">
      <div className="section_heading">
        <h5>What Experience I have</h5>
        <h1>My Experience</h1>
      </div>

      <div className="container experience_container">
        <div className="experience_card">
          <div className="company_name">
            <MdWorkOutline className="work_icon" />
            <h2>Sevenloop</h2>
            <span className="experience_duration duration_pill">Dec, 2024 - Present</span>
          </div>
          <div className="experience_position">
            <p>Software Development Engineer 1</p>
          </div>
          <div className="experience_content">
            <h4>Revind.ai (ERP Solutions)</h4>
            <ul>
              <li>Developed a dynamic form builder enabling non-technical teams to create custom onboarding flows, eliminating developer dependencies.</li>
              <li>Architected an internal email template builder tool, eliminating dependencies on developers.</li>
              <li>Rectified 20+ bugs, resulting in 40% fewer user-reported issues and elevated application stability</li>
            </ul>
          </div>
        </div>

        <div className="experience_card">
          <div className="company_name">
            <MdWorkOutline className="work_icon" />
            <h2>Springworks</h2>
            <span className="experience_duration duration_pill">March, 2022 - Dec, 2024</span>
          </div>
          <div className="experience_position">
            <p>Software Development Engineer Intern</p>
          </div>
          <div className="experience_content">
            <h4>Burst (E-commerce Platform)</h4>
            <ul>
              <li>Built scalable REST APIs serving 10K+ daily users, handling profile management and CRM features.</li>
              <li>Optimized DB queries and implemented Redis caching, reducing average API response time from 500ms to 400ms.</li>
              <li>Led migration of legacy PHP codebase to Node.js microservices, reducing latency by 45%.</li>
              <li>Engineered React/Redux features for seasonal campaigns, driving 25% revenue growth.</li>
              <li>Integrated Sentry error tracking and resolved 100+ critical bugs, improving application stability.</li>
            </ul>
          </div>
          <div className="experience_content">
            <h4>Albus (AI-powered Integration Platform)</h4>
            <ul>
              <li>Collaborated with team of 12 developers to develop and maintain Node.js microservices architecting integrations with JIRA, Slack, Notion, Google Drive etc.</li>
              <li>Engineered efficient file parsers to validate content and password protection across multiple formats, reducing Python backend load by 20% and optimizing S3 storage costs.</li>
              <li>Achieved 80% test coverage through Mocha, Chai.js and Sinon, reducing production bugs by 30%.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
