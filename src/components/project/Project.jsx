import React from 'react'
import './project.css'
import { BiAtom } from 'react-icons/bi'

const Project = () => {
  return (
    <section id='project' className="section-container">
      <div className="section_heading">
        <h5>What Projects I have</h5>
        <h1>My Projects</h1>
      </div>

      <div className="container project_container">
        <a
          href="https://kesharipiyush24.github.io/FlowBeat/"
          target="_blank"
          rel="noopener noreferrer"
          className="project_card"
        >
          <div className="project_name">
            <div className="project_title">
              <BiAtom className="project_icon" />
              <h2>FlowBeat - Hustle Harder, Lofi Louder!</h2>
            </div>
            <span className="project_duration">2024</span>
          </div>
          <div className="project_about">
            FlowBeat is a time tracker and lofi radio that plays hip hop beats. It's the perfect background music for studying, working, or just relaxing.
          </div>
        </a>

        <a
          href="https://newrajshreesweets.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project_card"
        >
          <div className="project_name">
            <div className="project_title">
              <BiAtom className="project_icon" />
              <h2>New Rajshree Sweets</h2>
            </div>
            <span className="project_duration">2024 - Present</span>
          </div>
          <div className="project_about">
            Full-stack MERN application with microservices architecture for e-commerce and CRM management. Features include secure authentication, optimized database queries with Redis caching, payment gateway integration, and real-time order tracking system.
          </div>
        </a>

        <a
          href="https://github.com/KeshariPiyush24/Huffman-Compressor"
          target="_blank"
          rel="noopener noreferrer"
          className="project_card"
        >
          <div className="project_name">
            <div className="project_title">
              <BiAtom className="project_icon" />
              <h2>Huffman Compressor</h2>
            </div>
            <span className="project_duration">2023</span>
          </div>
          <div className="project_about">
            A JAVA based compression tool which uses huffman encoding scheme for text compression. Implemented using Google Guava library for bi-directional mapping functionality.
          </div>
        </a>

        <a
          href="https://github.com/KeshariPiyush24/COVID-19-LIVE-Tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="project_card"
        >
          <div className="project_name">
            <div className="project_title">
              <BiAtom className="project_icon" />
              <h2>COVID 19 LIVE Tracker</h2>
            </div>
            <span className="project_duration">2022</span>
          </div>
          <div className="project_about">
            A Jupiter Notebook based project which uses python to fetch live COVID-19 data from Government of India API. Features automated data updates through GitHub Actions workflow.
          </div>
        </a>
      </div>
    </section>
  )
}

export default Project
