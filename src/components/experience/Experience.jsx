import React, { useState } from 'react'
import './experience.css'
import { MdWorkOutline } from 'react-icons/md'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const experienceData = [
  {
    company: 'Incred Finance',
    duration: 'February 2024 - Present',
    position: 'Software Development Engineer I',
    location: 'Bengaluru, India',
    focus: 'Loan Approval Platform',
    projects: [
      {
        name: 'Loan approval and digital consent workflows',
        points: [
          'Own production loan approval and digital consent workflows across application intake, verification, and approval journeys.',
          'Coordinate with a 5-member engineering and QA team on planning, code reviews, debugging, and releases, improving execution efficiency by 30%.',
          'Integrated 5+ Spring Boot and Node.js microservices with internal REST APIs and vendor APIs including Perfios and Karza, maintaining 99.95% uptime.',
          'Engineered JWT-secured email and SMS verification workflows for customer consent, achieving 99.7% delivery and improving conversion by 22%.',
          'Standardized quality gates with ESLint, Prettier, Commitlint, and Husky hooks while automating DynamoDB purge and cleanup scripts.'
        ]
      }
    ]
  },
  {
    company: 'Sevenloop Technology',
    duration: 'December 2023 - February 2024',
    position: 'Software Development Engineer I',
    location: 'Bengaluru, India',
    focus: 'ERP Solutions',
    projects: [
      {
        name: 'ERP onboarding builders',
        points: [
          'Built reusable email template and dynamic form builders for ERP onboarding, helping non-technical teams manage workflows independently.',
          'Resolved 20+ production bugs and reduced user-reported issues by 40% through focused debugging and root-cause fixes.'
        ]
      }
    ]
  },
  {
    company: 'Springworks',
    duration: 'March 2022 - December 2023',
    position: 'Software Development Engineer I',
    location: 'Remote',
    focus: 'AI-Powered SaaS Platform',
    projects: [
      {
        name: 'Automation pipelines and file intelligence',
        points: [
          'Architected scalable file parsing and validation for AI-powered SaaS platforms, reducing backend processing load by 20% and optimizing Amazon S3 costs.',
          'Raised automated test coverage to 80% with Mocha, Chai.js, and Sinon, reducing production incidents by 30%.',
          'Maintained 99.9% uptime for customer-facing automation pipelines through monitoring, incident response, and preventive reliability work.'
        ]
      }
    ]
  }
]

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedProject, setExpandedProject] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
    )
    setExpandedProject(0)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1
    )
    setExpandedProject(0)
  }

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? -1 : index)
  }

  const currentExperience = experienceData[currentIndex]

  return (
    <section id='experience' className="section-container">
      <div className="section_heading">
        <h5>Where I have worked</h5>
        <h1>Professional Experience</h1>
      </div>

      <div className="container experience_slider_container">
        <button className="slider_arrow prev_arrow" onClick={prevSlide} aria-label="Previous experience">
          <IoIosArrowBack />
        </button>

        <div className="experience_card slider_card">
          <div className="company_name">
            <MdWorkOutline className="work_icon" />
            <div>
              <h2>{currentExperience.company}</h2>
              <p>{currentExperience.focus}</p>
            </div>
            <span className="experience_duration duration_pill">{currentExperience.duration}</span>
          </div>
          <div className="experience_position">
            <p>{currentExperience.position} · {currentExperience.location}</p>
          </div>

          {currentExperience.projects.map((project, index) => (
            <div className="experience_content" key={project.name}>
              <div
                className="project_header"
                onClick={() => toggleProject(index)}
                role="button"
                tabIndex="0"
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    toggleProject(index)
                  }
                }}
              >
                <h4>{project.name}</h4>
                <button className="toggle_btn" aria-label={expandedProject === index ? 'Collapse project details' : 'Expand project details'}>
                  {expandedProject === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>

              {expandedProject === index && (
                <ul className="project_points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <button className="slider_arrow next_arrow" onClick={nextSlide} aria-label="Next experience">
          <IoIosArrowForward />
        </button>

        <div className="slider_indicators" aria-label="Experience navigation">
          {experienceData.map((item, index) => (
            <button
              key={item.company}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index)
                setExpandedProject(0)
              }}
              aria-label={`Show ${item.company}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
