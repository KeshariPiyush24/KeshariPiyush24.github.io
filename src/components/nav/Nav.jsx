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
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Find the section that is currently in view
      const sections = document.querySelectorAll('.section-container');
      let activeSectionId = '#';

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          if (section.classList.contains('home') && scrollPosition + window.innerHeight === document.body.clientHeight) {
            // Check if the home section is completely in view
            activeSectionId = `#${section.id}`;
          } else if (!section.classList.contains('home')) {
            // Exclude the home section from being considered as active
            activeSectionId = `#${section.id}`;
          }
        }
      });

      // Update the activeNav state
      setActiveNav(activeSectionId);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
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
