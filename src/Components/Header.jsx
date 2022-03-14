import React from 'react'

const Header = () => {

  

  const handleAboutScroll = () => {
    window.scrollTo({
      top: 800,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleSkillScroll = () => {
    window.scrollTo({
      top: 1300,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleProyectsScroll = () => {
    window.scrollTo({
      top: 1900,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleContactScroll = () => {
    window.scrollTo({
      top: 2500,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='header'>
        <p
        onClick={handleAboutScroll}
        >About</p>
        <p
        onClick={handleSkillScroll}
        >Skills</p>
        <p
        onClick={handleProyectsScroll}
        >Proyects</p>
        <p
         onClick={handleContactScroll}
        >Contact</p>
        
    </div>
  )
}

export default Header