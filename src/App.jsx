// Import dependencies
import React from 'react'

// Import components
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Skill from './components/skill/Skill'
import Project from './components/project/Project'
import Achievement from './components/achievement/Achievement'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <section id="home" className="section-container">
        <Header />
      </section>
      <Nav />
      <section id="about" className="section-container">
        <About />
      </section>
      <section id="education" className="section-container">
        <Education />
      </section>
      <section id="experience" className="section-container">
        <Experience />
      </section>
      <section id="skill" className="section-container">
        <Skill />
      </section>
      <section id="project" className="section-container">
        <Project />
      </section>
      <section id="achievement" className="section-container">
        <Achievement />
      </section>
      <section id="contact" className="section-container">
        <Contact />
      </section>
    </>
  )
}

export default App
