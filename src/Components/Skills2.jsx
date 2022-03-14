import React, {useState} from 'react'

import CssIcon from '/assets/img/css-3.png'
import JsIcon from '/assets/img/js.png'
import HtmlIcon from '/assets/img/html-5.png'
import MysqlIcon from '/assets/img/mysql.png'
import TsIcon from '/assets/img/typescript.png'
import ReactIcon from '/assets/img/physics.png'
import SequelizeIcon from '/assets/img/sequelize4.png'
import NodeJsIcon from '/assets/img/nodejs.png'



const Skills2 = () => {

    const [allicons, setAllicons] = useState(false)
    const [js, setJs] = useState(false);
    const [css, setCss] = useState(false);
    const [html, setHtml] = useState(false);
    const [mysql, setMysql] = useState(false);
    const [ts, setTs] = useState(false);
    const [react, setReact] = useState(false);
    const [sequelize, setSequelize] = useState(false);
    const [nodejs, setNodeJs] = useState(false);

    
    const handleAllIcons = () => {
        
        setAllicons(true)
        setTimeout(() => {
            setJs(true)
        }, 100)
        setTimeout(() => {
            setNodeJs(true)
        }, 150)
        setTimeout(() => {
            setHtml(true)
        }, 200)
        setTimeout(() => {
            setMysql(true)
        }, 250)
        setTimeout(() => {
            setCss(true)
        }, 300)
        setTimeout(() => {
            setSequelize(true)
        }, 350)
        setTimeout(() => {
            setReact(true)
        }, 400)
        setTimeout(() => {
            setTs(true)
        }, 450)
        
    }

    const handleHideAllIcons = () => {

        setAllicons(false)

        setTimeout(() => {
            setJs(false)
        }, 100)
        setTimeout(() => {
            setHtml(false)
        }, 150)
        setTimeout(() => {
            setMysql(false)
        }, 200)
        setTimeout(() => {
            setCss(false)
        }, 250)
        setTimeout(() => {
            setSequelize(false)
        }, 300)
        setTimeout(() => {
            setReact(false)
        }, 350)
        setTimeout(() => {
            setTs(false)
        }, 400)
        setTimeout(() => {
            setNodeJs(false)
        }, 450)
    }

  return (
      <>
    <div className='skills_center_div'>
        <div
        onClick={!allicons ? handleAllIcons : handleHideAllIcons} 
     className='skills_center'>Skills
     </div>
   {
       allicons ? (
        <div className='skills_icons'>
            <a
            target="_blank" 
            href="https://www.javascript.com/">
            <img className={js ? "img7" : 'no'} src={JsIcon} alt="" />
            </a>
            <a 
            target="_blank" 
            href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <img className={html ? "img6" : 'no'} src={HtmlIcon} alt="" />
            </a>
            <a 
            target="_blank" 
            href="https://www.mysql.com/">
            <img className={mysql ? "img5" : 'no'} src={MysqlIcon} alt="" />
            </a>
            <a 
            target="_blank" 
            href="https://www.typescriptlang.org/">
            <img className={ts ? "img4" : 'no'} src={TsIcon} alt="" />
            </a>
            <a 
            target="_blank" 
            href="https://reactjs.org/">
            <img className={react ? "img3" : 'no'} src={ReactIcon} alt="" />
            </a>
            <a 
            target="_blank" 
            href="https://sequelize.org/">
            <img className={sequelize ? "img2" : 'no'} src={SequelizeIcon} alt="" />
            </a>
            <a 
            target="_blank" 
            href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img className={css ? "img1" : 'no'} src={CssIcon} alt="" />
            </a>
            <a 
            target="_blank" 
            href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img className={nodejs ? "img8" : 'no'} src={NodeJsIcon} alt="" />
            </a>
        </div> 
       ) : 
       <>
        <div className='skills_icons'>
            <img className='imgOut8' src={NodeJsIcon} alt="" />
            <img className='imgOut7' src={JsIcon} alt="" />
            <img className='imgOut6' src={HtmlIcon} alt="" />
            <img className='imgOut5' src={MysqlIcon} alt="" />
            <img className='imgOut4' src={TsIcon} alt="" />
            <img className='imgOut3' src={ReactIcon} alt="" />
            <img className='imgOut2' src={SequelizeIcon} alt="" />
            <img className='imgOut1' src={CssIcon} alt="" />
        </div> 
        </>
   }
   </div>
     </>
  )
}

export default Skills2