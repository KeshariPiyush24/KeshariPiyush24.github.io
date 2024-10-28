import React from 'react'
import './project.css'
import { BiAtom } from 'react-icons/bi'

const Project = () => {
  return (
    <section id='project' className="section-container">
      <h5>What Projects I have</h5>
      <h1 style={{ marginBottom: '2.5rem' }}>My Projects</h1>

      <div className="container project_container">
        <div className="project_card">
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
        </div>

        <div className="project_card">
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
        </div>

        <div className="project_card">
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
        </div>
      </div>
    </section>
  )
}

export default Project
