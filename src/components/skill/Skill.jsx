import React from 'react'
import './skill.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skill = () => {
  return (
    <section id='skill'>
      <h5>What Skills I have</h5>
      <h1 style={{ marginBottom: '2.5rem' }}>My Skills</h1>

      <div className="container skill_container">
        <div className="skill_card">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>HTML5</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>CSS3</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>React</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Tailwind</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Bootstrap</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Webpack</h4></div>
            </article>
          </div>
        </div>
        <div className="skill_card">
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Java</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Javascript</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Typescript</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Node.js</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Express.js</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Docker</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>AWS</h4></div>
            </article>
          </div>
        </div>
        <div className="skill_card">
          <h3>Tools</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>VS Code</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Postman</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Slack</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Jira</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Git and Github</h4></div>
            </article>
            <article className="skill_details">
              <BsPatchCheckFill className="skill_details-icon" />
              <div><h4>Chrome Dev tools</h4></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill