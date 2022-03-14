import React from 'react'
import profile from '/assets/img/4x4.jpg'

const About = () => {


  return (
      <>
      <h2 className='about_me'>About me</h2>
      <div className='about'>
            <div className='about_data'>
                
                <h1>Gazzera Bruno</h1>
                <p>Hi! My name is Bruno and I'm a Fullstack Developer with a degree in Industrial design currently looking for my next job in the programming Industry.</p>
            </div>
        <img src={profile} alt="" />
    </div>
    </>
  )
}

export default About