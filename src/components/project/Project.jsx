import React from 'react'
import './project.css'
import { BiAtom } from 'react-icons/bi'

const Project = () => {
  return (
    <section id='project'>
      <h5>What Projects I have</h5>
      <h1 style={{ marginBottom: '2.5rem' }}>My Projects</h1>

      <div className="container project_container">
        <div className="project_card">
          <div className="project_name">
            <BiAtom className="project_icon" />
            <h2>Huffman Compressor</h2>
          </div>
          <div className="project_about">
            A JAVA based compression tool which uses huffman encoding scheme for text compression.
          </div>
          <div className="project_content">
            <ul>
              <li>Implemented Huffman compression technique for text based file compression.</li>
              <li>Used Google Guava library for bi directional map which is not native to java.</li>
            </ul>
          </div>
        </div>
        <div className="project_card">
          <div className="project_name">
            <BiAtom className="project_icon" />
            <h2>COVID 19 LIVE Tracker</h2>
          </div>
          <div className="project_about">
            A Jupiter Notebook bases project which uses python to fetch live data from API and display it in a tabular format.
          </div>
          <div className="project_content">
            <ul>
              <li>Fetched live covid 19 data from Govt of India API and displayed it on Jupiter Notebook with some processing.</li>
              <li>Created a workflow on github actions to automate the push and pull of new data every 5 mins.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project