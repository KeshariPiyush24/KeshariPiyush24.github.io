import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineFundProjectionScreen, AiOutlineMessage } from 'react-icons/ai'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { GiAchievement } from 'react-icons/gi'
import { BsStarHalf } from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}><BsStarHalf /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline /></a>
      <a href="#achievement" onClick={() => setActiveNav('#achievement')} className={activeNav === '#achievement' ? 'active' : ''}><GiAchievement /></a>
      <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav