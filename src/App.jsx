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
      <Header />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Skill />
      <Project />
      <Achievement />
      <Contact />
    </>
  )
}

export default App
