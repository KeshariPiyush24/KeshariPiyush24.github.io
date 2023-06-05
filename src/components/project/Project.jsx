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
              <li>Migrated legacy code logic from PHP to Node.js, ensuring a seamless transition and improved performance.</li>
              <li>Deployed multiple sales on ecommerce platform, including SKU addition, price configuration, and discount coupon integration.</li>
              <li>Developed new APIs on ecommerce platform for a user type, enabling profile management, order creation, and dashboard APIs for search, sorting, and filtering.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project