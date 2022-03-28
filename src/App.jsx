import { useState } from 'react'

import BackgroundImg from '/assets/img/bg-img2.png'
import ProfileImg from '/assets/img/profile-01.png'
import Header from './Components/Header'
import About from './Components/About'
import Skills2 from './Components/Skills2'
import Projects from './Components/Projects'
import Contact from './Components/Contact'





import './App.css'

const App = () => {


  return (
    <>
    <main>
     
    <Header />
  <div className='title_name'>
    <div className='data_title'>
    <p>--Welcome.</p>
    <span>My name is Bruno Gazzera and I'm a Full stack developer</span>
    
    </div>
  </div>
    <div className="profile_image">
      <img src={ProfileImg} alt="" />
    </div>
    <About />
    <Skills2 />
    <Projects />
    <Contact/>
    </main>
    </>
  )
}

export default App
