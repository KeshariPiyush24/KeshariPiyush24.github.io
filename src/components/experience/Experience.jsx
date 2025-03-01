import React, { useState } from 'react'
import './experience.css'
import { MdWorkOutline } from 'react-icons/md'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState(0);
  
  const experienceData = [
    {
      company: "Incred",
      duration: "Feb, 2025 - Present",
      position: "SDE 1",
      projects: [
        {
          name: "SCF (Supply Chain Finance)",
          points: []
        }
      ]
    },
    {
      company: "Sevenloop",
      duration: "Dec, 2024 - Feb, 2025",
      position: "SDE 1",
      projects: [
        {
          name: "Revind.ai (ERP Solutions)",
          points: [
            "Developed a dynamic form builder enabling non-technical teams to create custom onboarding flows, eliminating developer dependencies.",
            "Architected an internal email template builder tool, eliminating dependencies on developers.",
            "Rectified 20+ bugs, resulting in 40% fewer user-reported issues and elevated application stability"
          ]
        }
      ]
    },
    {
      company: "Springworks",
      duration: "March, 2022 - Dec, 2024",
      position: "SDE 1",
      projects: [
        {
          name: "Burst (E-commerce Platform)",
          points: [
            "Built scalable REST APIs serving 10K+ daily users, handling profile management and CRM features.",
            "Optimized DB queries and implemented Redis caching, reducing average API response time from 500ms to 400ms.",
            "Led migration of legacy PHP codebase to Node.js microservices, reducing latency by 45%.",
            "Engineered React/Redux features for seasonal campaigns, driving 25% revenue growth.",
            "Integrated Sentry error tracking and resolved 100+ critical bugs, improving application stability."
          ]
        },
        {
          name: "Albus (AI-powered Integration Platform)",
          points: [
            "Collaborated with team of 12 developers to develop and maintain Node.js microservices architecting integrations with JIRA, Slack, Notion, Google Drive etc.",
            "Engineered efficient file parsers to validate content and password protection across multiple formats, reducing Python backend load by 20% and optimizing S3 storage costs.",
            "Achieved 80% test coverage through Mocha, Chai.js and Sinon, reducing production bugs by 30%."
          ]
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
    );
    setExpandedProject(0); // Reset expanded project when changing slides
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1
    );
    setExpandedProject(0); // Reset expanded project when changing slides
  };

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? -1 : index);
  };

  const currentExperience = experienceData[currentIndex];

  return (
    <section id='experience' className="section-container">
      <div className="section_heading">
        <h5>What Experience I have</h5>
        <h1>My Experience</h1>
      </div>

      <div className="container experience_slider_container">
        <button className="slider_arrow prev_arrow" onClick={prevSlide}>
          <IoIosArrowBack />
        </button>
        
        <div className="experience_card slider_card">
          <div className="company_name">
            <MdWorkOutline className="work_icon" />
            <h2>{currentExperience.company}</h2>
            <span className="experience_duration duration_pill">{currentExperience.duration}</span>
          </div>
          <div className="experience_position">
            <p>{currentExperience.position}</p>
          </div>
          
          {currentExperience.projects.map((project, index) => (
            <div className="experience_content" key={index}>
              <div 
                className="project_header" 
                onClick={() => toggleProject(index)}
              >
                <h4>{project.name}</h4>
                <button className="toggle_btn">
                  {expandedProject === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              
              {expandedProject === index && project.points.length > 0 && (
                <ul className="project_points">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <button className="slider_arrow next_arrow" onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
        
        <div className="slider_indicators">
          {experienceData.map((_, index) => (
            <span 
              key={index} 
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
