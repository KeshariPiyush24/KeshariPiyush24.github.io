import React from 'react'
import './contact.css'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact' className="section-container">
      <div className="section_heading">
        <h5>Social media? I got it</h5>
        <h1>Let's Connect</h1>
      </div>

      <div className="container contact_container">
        <div className="contact_card">
          <a href="https://twitter.com/KeshariPiyush24" target='_blank' rel="noreferrer">
            <div className="contact_name">
              <div className="circle twitter">
                <BsTwitter className='contact_icon' />
              </div>
              <h2>Twitter</h2>
              <span className="contact_username">@KeshariPiyush24</span>
            </div>
          </a>
        </div>

        <div className="contact_card">
          <a href="https://www.instagram.com/kesharipiyush24/" target='_blank' rel="noreferrer">
            <div className="contact_name">
              <div className="circle instagram">
                <BsInstagram className='contact_icon' />
              </div>
              <h2>Instagram</h2>
              <span className="contact_username">@KeshariPiyush24</span>
            </div>
          </a>
        </div>

        <div className="contact_card">
          <a href="https://github.com/KeshariPiyush24" target='_blank' rel="noreferrer">
            <div className="contact_name">
              <div className="circle github">
                <BsGithub className='contact_icon' />
              </div>
              <h2>GitHub</h2>
              <span className="contact_username">@KeshariPiyush24</span>
            </div>
          </a>
        </div>

        <div className="contact_card">
          <a href="https://www.linkedin.com/in/piyush-k-ba3a67134/" target='_blank' rel="noreferrer">
            <div className="contact_name">
              <div className="circle linkedin">
                <BsLinkedin className='contact_icon' />
              </div>
              <h2>LinkedIn</h2>
              <span className="contact_username">Piyush Keshari</span>
            </div>
          </a>
        </div>

        <div className="contact_card">
          <a href="https://leetcode.com/insaneBanda/" target='_blank' rel="noreferrer">
            <div className="contact_name">
              <div className="circle leetcode">
                <SiLeetcode className='contact_icon' />
              </div>
              <h2>LeetCode</h2>
              <span className="contact_username">@KeshariPiyush24</span>
            </div>
          </a>
        </div>

        <div className="contact_card">
          <a href="https://stackoverflow.com/users/13509950/piyush-keshari" target='_blank' rel="noreferrer">
            <div className="contact_name">
              <div className="circle stackoverflow">
                <BsStackOverflow className='contact_icon' />
              </div>
              <h2>Stack Overflow</h2>
              <span className="contact_username">@KeshariPiyush24</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
