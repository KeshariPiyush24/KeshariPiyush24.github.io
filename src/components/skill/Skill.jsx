import React from 'react'
import './skill.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skill = () => {
  return (
    <section id='skill' className="section-container">
      <div className="skill_heading">
        <h5>What Skills I Have</h5>
        <h1>My Skills</h1>
      </div>

      <div className="container skill_container">
        {/* Languages Card */}
        <div className="skill_card">
          <h3>Programming Languages</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>JavaScript (ES6+)</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Java</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>OOP</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Frontend Card */}
        <div className="skill_card">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>React.js</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Redux</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>HTML5</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>CSS3</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Material UI</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Responsive Design</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Figma</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Backend Card */}
        <div className="skill_card">
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Express.js</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>REST APIs</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Microservices</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Databases Card */}
        <div className="skill_card">
          <h3>Databases</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Redis</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Query Optimization</h4>
              </div>
            </article>
          </div>
        </div>

        {/* DevOps & Tools Card */}
        <div className="skill_card">
          <h3>DevOps & Tools</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Docker</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>AWS</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Git & GitHub</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Linux</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Nginx</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Cloudflare</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Additional Skills Card */}
        <div className="skill_card">
          <h3>Additional Skills</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Testing (Mocha, Chai)</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Security (JWT, OAuth)</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Payment Gateway</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>SEO</h4>
              </div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div className="skill_name">
                <h4>Agile/Scrum</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
