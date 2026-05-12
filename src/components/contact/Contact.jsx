import React from 'react'
import './contact.css'
import { BsEnvelope, BsGithub, BsLinkedin, BsStackOverflow, BsTwitter } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const contactLinks = [
  {
    label: 'Email',
    value: 'piyushkeshari24@gmail.com',
    url: 'mailto:piyushkeshari24@gmail.com',
    className: 'email',
    Icon: BsEnvelope
  },
  {
    label: 'LinkedIn',
    value: 'Piyush Keshari',
    url: 'https://www.linkedin.com/in/piyush-k-ba3a67134/',
    className: 'linkedin',
    Icon: BsLinkedin
  },
  {
    label: 'GitHub',
    value: '@KeshariPiyush24',
    url: 'https://github.com/KeshariPiyush24',
    className: 'github',
    Icon: BsGithub
  },
  {
    label: 'Twitter',
    value: '@KeshariPiyush24',
    url: 'https://twitter.com/KeshariPiyush24',
    className: 'twitter',
    Icon: BsTwitter
  },
  {
    label: 'LeetCode',
    value: 'insaneBanda',
    url: 'https://leetcode.com/insaneBanda/',
    className: 'leetcode',
    Icon: SiLeetcode
  },
  {
    label: 'Stack Overflow',
    value: 'Piyush Keshari',
    url: 'https://stackoverflow.com/users/13509950/piyush-keshari',
    className: 'stackoverflow',
    Icon: BsStackOverflow
  }
]

const Contact = () => {
  return (
    <section id='contact' className="section-container">
      <div className="section_heading">
        <h5>Open to meaningful engineering work</h5>
        <h1>Let's Connect</h1>
      </div>

      <div className="container contact_container">
        {contactLinks.map(({ label, value, url, className, Icon }) => (
          <div className="contact_card" key={label}>
            <a href={url} target={url.startsWith('mailto:') ? undefined : '_blank'} rel={url.startsWith('mailto:') ? undefined : 'noreferrer'}>
              <div className="contact_name">
                <div className={`circle ${className}`}>
                  <Icon className='contact_icon' />
                </div>
                <h2>{label}</h2>
                <span className="contact_username">{value}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact
