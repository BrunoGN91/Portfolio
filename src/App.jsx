import { useState } from 'react'

import BackgroundImg from '/assets/img/LAST2.png'
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
    <div className="background_image">
      <img src={BackgroundImg} alt="" />
      <div className='code_text'>
        <h2>Fullstack</h2>
        <h2>Developer</h2>
      </div>
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
