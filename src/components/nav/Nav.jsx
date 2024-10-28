import React, { useState, useEffect } from 'react';
import './nav.css';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFundProjectionScreen,
  AiOutlineMessage,
} from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { GiAchievement } from 'react-icons/gi';
import { BsStarHalf } from 'react-icons/bs';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll('section');

      // Special handling for home section when at the top
      if (scrollPosition < windowHeight / 2) {
        setActiveNav('#home');
        return;
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - windowHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight - windowHeight / 2
        ) {
          setActiveNav(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Call handleScroll initially to set correct active state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
        <small>Home</small>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
        <small>About</small>
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav('#education')}
        className={activeNav === '#education' ? 'active' : ''}
      >
        <AiOutlineBook />
        <small>Education</small>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <MdOutlineWorkOutline />
        <small>Experience</small>
      </a>
      <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}>
        <BsStarHalf />
        <small>Skills</small>
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav('#project')}
        className={activeNav === '#project' ? 'active' : ''}
      >
        <AiOutlineFundProjectionScreen />
        <small>Projects</small>
      </a>
      <a
        href="#achievement"
        onClick={() => setActiveNav('#achievement')}
        className={activeNav === '#achievement' ? 'active' : ''}
      >
        <GiAchievement />
        <small>Achievements</small>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiOutlineMessage />
        <small>Contact</small>
      </a>
    </nav>
  );
};

export default Nav;
