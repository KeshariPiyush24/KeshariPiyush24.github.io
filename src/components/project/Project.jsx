import React from 'react'
import './project.css'
import { BiAtom } from 'react-icons/bi'

const projects = [
  {
    title: 'New Rajshree Sweets',
    duration: '2024 - Present',
    url: 'https://newrajshreesweets.com',
    summary: 'Production-grade e-commerce and ERP platform built with React.js, Node.js, MySQL, Redis, REST APIs, payment integrations, CRM tooling, and real-time kiosk ordering.',
    tags: ['React', 'Node.js', 'MySQL', 'Redis', 'WebSockets', 'n8n']
  },
  {
    title: 'FlowBeat',
    duration: '2024',
    url: 'https://kesharipiyush24.github.io/FlowBeat/',
    summary: 'A minimalist productivity app pairing a lofi audio experience with a focused countdown timer for work, study, and creative sessions.',
    tags: ['React', 'UI Design', 'Productivity']
  },
  {
    title: 'Huffman Compressor',
    duration: '2023',
    url: 'https://github.com/KeshariPiyush24/Huffman-Compressor',
    summary: 'Java-based compression utility implementing Huffman encoding with Google Guava bi-directional mapping for text compression workflows.',
    tags: ['Java', 'Algorithms', 'Compression']
  },
  {
    title: 'COVID-19 Live Tracker',
    duration: '2022',
    url: 'https://github.com/KeshariPiyush24/COVID-19-LIVE-Tracker',
    summary: 'Python notebook project that fetched live COVID-19 data from Government of India APIs with automated refreshes through GitHub Actions.',
    tags: ['Python', 'Automation', 'GitHub Actions']
  }
]

const Project = () => {
  return (
    <section id='project' className="section-container">
      <div className="section_heading">
        <h5>Selected builds</h5>
        <h1>Featured Projects</h1>
      </div>

      <div className="container project_container">
        {projects.map((project) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project_card"
            key={project.title}
          >
            <div className="project_name">
              <div className="project_title">
                <BiAtom className="project_icon" />
                <h2>{project.title}</h2>
              </div>
              <span className="project_duration">{project.duration}</span>
            </div>
            <p className="project_about">{project.summary}</p>
            <div className="project_tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Project
