import React from 'react'
import './skill.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'Python', 'SQL']
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Redux Toolkit', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Responsive Web Design']
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'Java Spring Boot', 'RESTful APIs', 'Microservices', 'WebSockets', 'Kafka']
  },
  {
    title: 'Data & Search',
    skills: ['MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Neo4j', 'Elasticsearch']
  },
  {
    title: 'Cloud & Quality',
    skills: ['AWS', 'Amazon S3', 'API Gateway', 'Docker', 'GitHub Actions', 'CI/CD', 'Mocha', 'Chai', 'Sinon']
  },
  {
    title: 'Security & Automation',
    skills: ['JWT', 'OAuth 2.0', 'OTP Verification', 'API Security', 'n8n', 'LLMs', 'Prompt Engineering', 'Sentry', 'Kibana']
  }
]

const Skill = () => {
  return (
    <section id='skill' className="section-container">
      <div className="skill_heading">
        <h5>What I work with</h5>
        <h1>Technical Skills</h1>
      </div>

      <div className="container skill_container">
        {skillGroups.map((group) => (
          <div className="skill_card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill_content">
              {group.skills.map((skill) => (
                <article className="skill_details" key={skill}>
                  <BsPatchCheckFill className="skill_details-icon" />
                  <div className="skill_name">
                    <h4>{skill}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill
