import React from 'react'
import './contact.css'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact' className="section-container">
      <h5>Social media? I got it</h5>
      <h1 style={{ marginBottom: '2.5rem' }}>Let's Connect</h1>

      <div className="container contact_container">
        <a href="https://twitter.com/KeshariPiyush24" className="contact_card" target='_blank'>
          <div className="circle twitter">
            <BsTwitter className='contact_icon' />
          </div>
          <p className='username'>KeshariPiyush24</p>
        </a>
        <a href="https://www.instagram.com/kesharipiyush24/" className="contact_card" target='_blank'>
          <div className="circle instagram">
            <BsInstagram className='contact_icon' />
          </div>
          <p className='username'>KeshariPiyush24</p>
        </a>
        <a href="https://github.com/KeshariPiyush24" className="contact_card" target='_blank'>
          <div className="circle github">
            <BsGithub className='contact_icon' />
          </div>
          <p className='username'>KeshariPiyush24</p>
        </a>
        <a href="https://www.linkedin.com/in/piyush-k-ba3a67134/" className="contact_card" target='_blank'>
          <div className="circle linkedin">
            <BsLinkedin className='contact_icon' />
          </div>
          <p className='username'>Piyush Keshari</p>
        </a>
        <a href="https://leetcode.com/insaneBanda/" className="contact_card" target='_blank'>
          <div className="circle leetcode">
            <SiLeetcode className='contact_icon' />
          </div>
          <p className='username'>KeshariPiyush24</p>
        </a>
        <a href="https://stackoverflow.com/users/13509950/piyush-keshari" className="contact_card" target='_blank'>
          <div className="circle stackoverflow">
            <BsStackOverflow className='contact_icon' />
          </div>
          <p className='username'>KeshariPiyush24</p>
        </a>
      </div>
    </section>
  )
}

export default Contact