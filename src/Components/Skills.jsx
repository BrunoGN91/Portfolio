import React, {useState, useEffect} from 'react'

import CssIcon from '/assets/img/css-3.png'
import JsIcon from '/assets/img/js.png'
import HtmlIcon from '/assets/img/html-5.png'
import MysqlIcon from '/assets/img/mysql.png'
import TsIcon from '/assets/img/typescript.png'
import ReactIcon from '/assets/img/physics.png'
import SequelizeIcon from '/assets/img/sequelize4.png'




const Skills = () => {



const handleAnimation  = () => {
  const observer = new IntersectionObserver(entries => {
     // Loop over the entries
  entries.map(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      setTimeout(() => entry.target.classList.add('skills-animation'), 200);
    } else {
      entry.target.classList.remove('skills-animation');
    }
  });
  });
observer.observe(document.querySelector('.skills'))
}


const [js, setJs] = useState(false);
const [css, setCss] = useState(false);
const [html, setHtml] = useState(false);
const [mysql, setMysql] = useState(false);
const [ts, setTs] = useState(false);
const [react, setReact] = useState(false);
const [sequelize, setSequelize] = useState(false);








  return (
      <>
     <div 
      onLoad={handleAnimation}
     className='skills'>
     <h2 
     className='skills_title'>Skills</h2>
        <ul>
              <li
              ><a 
              target="_blank"
              href="https://www.javascript.com/">
                <img src={JsIcon} alt="" />
                </a>
                </li>
              <li><a 
              target="_blank"
              href="https://reactjs.org/">
                <img src={ReactIcon} alt="" />
                </a></li>
              <li><a 
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img src={CssIcon} alt="" />
                </a></li>
              <li><a 
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <img src={HtmlIcon} alt="" />
                </a></li>
              <li><a 
              target="_blank"
              href="https://www.mysql.com/">
                <img src={MysqlIcon} alt="" />
                </a></li>
                <li><a 
              target="_blank"
              href="https://sequelize.org/">
                <img src={SequelizeIcon} alt="" />
                </a></li>
              <li style={{opacity: '0.5'}}><a 
              target="_blank"
              href="https://www.typescriptlang.org/">
                <img src={TsIcon} alt="" />
                </a></li>
                
        </ul>
        </div>
    </>
  )
}

export default Skills