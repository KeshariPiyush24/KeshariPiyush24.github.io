// Import dependencies
import React from 'react'

// Import components
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Skill from './components/skill/Skill'
import Experience from './components/experience/Experience'
import Achievement from './components/achievement/Achievement'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Project />
      <Achievement />
      <Contact />
    </>
  )
}

export default App