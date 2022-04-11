import React, {useState, useEffect} from 'react'
import Project from './Project'

// Projects

import SearchProyectImg from '/assets/img/search.png'
import RedditBotImg from '/assets/img/images.jpg'
import MercadoLiebreImg from '/assets/img/ml.png'
import ViridisImg from '/assets/img/viridis.png'
import CitasImg from '/assets/img/citas.png'
import GastosImg from '/assets/img/gastos.png'
import CriptoImg from '/assets/img/Cripto.png'
import GuitarLa from '/assets/img/guitarLa.png'







// Icons

import CssIcon from '/assets/img/css-3.png'
import JsIcon from '/assets/img/js.png'
import JestIcon from '/assets/img/jest-logo.png'
import HtmlIcon from '/assets/img/html-5.png'
import MysqlIcon from '/assets/img/mysql.png'
import TsIcon from '/assets/img/typescript.png'
import ReactIcon from '/assets/img/physics.png'
import SequelizeIcon from '/assets/img/sequelize4.png'
import NodeJsIcon from '/assets/img/nodejs.png'
import GithubIcon from '/assets/img/github.png'
import StrapiIcon from '/assets/img/strapi.png'



const Projects = () => {

    const [stateSearch, setStateSearch] = useState(false);
    const [stateReddit, setStateReddit] = useState(false);
    const [stateMl, setStateMl] = useState(false);
    const [stateViridis, setStateViridis] = useState(false);
    const [stateCitas, setStateCitas] = useState(false);
    const [stateGastos, setStateGastos] = useState(false);
    const [stateCripto, setStateCripto] = useState(false)
    const [stateGuitar, setStateGuitar] = useState(false)

   
    const handleSearch = () => {
        setStateSearch(true)
      }

      const handleOutSearch = () => {
        setStateSearch(false)
       }
    
       const handleReddit = () => {
        setStateReddit(true)
      }

      const handleOutReddit = () => {
        setStateReddit(false)
       }
    
       const handleMl = () => {
        setStateMl(true)
      }

      const handleOutMl = () => {
        setStateMl(false)
       }
    
       const handleViridis = () => {
        setStateViridis(true)
      }

      const handleOutViridis = () => {
        setStateViridis(false)
       }
       const handleCitas = () => {
        setStateCitas(true)
      }

      const handleOutCitas = () => {
        setStateCitas(false)
       }
       const handleGastos = () => {
        setStateGastos(true)
      }

      const handleOutGastos = () => {
        setStateGastos(false)
       }

       const handleCripto = () => {
        setStateCripto(true)
      }
      const handleOutCripto = () => {
        setStateCripto(false)
      }

      const handleGuitar = () => {
        setStateGuitar(true)
       }
       const handleOutGuitar = () => {
        setStateGuitar(false)
       }
    


  return (
      <>
      <h2 className='projects_title'>Proyects</h2>
    <div className='projects'>
        <ul>
            <li
            onMouseOver={handleSearch}
            onMouseLeave={handleOutSearch}
            >
                <p>Search Engine</p>
                <Project
                proyectImg={SearchProyectImg}
                proyectUrl={`https://search-engine-a4023.web.app/`}
                />
                <div className='proyects_icons_all'>
                <div
                className={stateSearch ? "proyect_icons_animation" : 'no'}>
                    <img src={ReactIcon} alt="" />
                    <img src={TsIcon} alt="" />
                    <img src={JsIcon} alt="" />
                    <img src={JestIcon} alt="" />
                    <img src={CssIcon} alt="" />
                    <img src={HtmlIcon} alt="" />
                    
                </div>
                <div
                className={stateSearch ? "proyect_icons_animation_github" : 'no'}>
                    <a
                    target="_blank"
                    href="https://github.com/BrunoGN91/Search-Api"><img src={GithubIcon} alt="" /></a>
                </div>
                </div>
            </li>
            <li
            onMouseOver={handleReddit}
            onMouseLeave={handleOutReddit}
            >
            <p>Reddit Reply Bot</p>
                <Project 
                proyectImg={RedditBotImg}
                proyectUrl={`https://github.com/BrunoGN91/Reddit-Reply-Bot`}
                />
                <div className='proyects_icons_all'>
                <div className={stateReddit ? "proyect_icons_animation" : 'no'}>
                    <img src={JsIcon} alt="" />
                </div>
                <div
                className={stateReddit ? "proyect_icons_animation_github" : 'no'}>
                    <a
                    target="_blank"
                    href="https://github.com/BrunoGN91/Reddit-Reply-Bot"><img src={GithubIcon} alt="" /></a>
                </div>
                </div>
            </li>
            <li
             onMouseOver={handleMl}
             onMouseLeave={handleOutMl}
            >
            <p>Mercado Libre E-Commerce</p>
                <Project 
                proyectImg={MercadoLiebreImg}
                proyectUrl={`https://mercadoliebre-brunog.herokuapp.com/`}
                />
                <div className='proyects_icons_all'>
                <div className={stateMl ? "proyect_icons_animation" : 'no'}>
                    <img src={JsIcon} alt="" />
                    <img src={CssIcon} alt="" />
                    <img src={HtmlIcon} alt="" />
                    <img src={NodeJsIcon} alt="" />
                </div>
                <div
                className={stateMl ? "proyect_icons_animation_github" : 'no'}>
                    <a
                    target="_blank"
                    href="https://github.com/BrunoGN91/MercadoLiebreBG"><img src={GithubIcon} alt="" /></a>
                </div>
                </div>
            </li>
            <li
            onMouseOver={handleViridis}
            onMouseLeave={handleOutViridis}
            >
            <p>Viridis: E-commerce</p>
                <Project 
                proyectImg={ViridisImg}
                proyectUrl={`https://github.com/FranMon1/Grupo_8_Viridis`}
                />
                <div className='proyects_icons_all'>
                 <div className={stateViridis ? "proyect_icons_animation" : 'no'}>
                    <img src={JsIcon} alt="" />
                    <img src={MysqlIcon} alt="" />
                    <img src={CssIcon} alt="" />
                    <img src={HtmlIcon} alt="" />
                    <img src={SequelizeIcon} alt="" />
                    <img src={NodeJsIcon} alt="" />
                </div>
                <div
                className={stateViridis ? "proyect_icons_animation_github" : 'no'}>
                    <a
                    target="_blank"
                    href="https://github.com/FranMon1/Grupo_8_Viridis"><img src={GithubIcon} alt="" /></a>
                </div>
                </div>
            </li>
            <li
            onMouseOver={handleCitas}
            onMouseLeave={handleOutCitas}
            >
            <p>Seguimiento de Citas / Pacientes</p>
                <Project 
                proyectImg={CitasImg}
                proyectUrl={`https://react-citas-agendar.netlify.app/`}
                />
                <div className='proyects_icons_all'>
                  <div className={stateCitas ? "proyect_icons_animation" : 'no'}>
                    <img src={JsIcon} alt="" />
                    <img src={ReactIcon} alt="" />
                    <img src={CssIcon} alt="" />
                    <img src={HtmlIcon} alt="" />
                </div>
                <div
                className={stateCitas ? "proyect_icons_animation_github" : 'no'}>
                    <a
                    target="_blank"
                    href="https://github.com/BrunoGN91/citas-react"><img src={GithubIcon} alt="" /></a>
                </div>
                </div>
            </li>
            <li
            onMouseOver={handleGastos}
            onMouseLeave={handleOutGastos}
            >
            <p>Agenda de Gastos</p>
                <Project 
                proyectImg={GastosImg}
                proyectUrl={`https://react-citas-agendar.netlify.app/`}
                />
                <div className='proyects_icons_all'>
                <div className={stateGastos ? "proyect_icons_animation" : 'no'}>
                    <img src={JsIcon} alt="" />
                    <img src={ReactIcon} alt="" />
                    <img src={CssIcon} alt="" />
                    <img src={HtmlIcon} alt="" />
                </div>
                <div
                className={stateGastos ? "proyect_icons_animation_github" : 'no'}>
                    <a
                    target="_blank"
                    href="https://github.com/BrunoGN91/Agenda-de-gastos"><img src={GithubIcon} alt="" /></a>
                </div>
                </div>
            </li>
            <li
            onMouseOver={handleCripto}
            onMouseLeave={handleOutCripto}
            >
            <p>Cotizador de Cripto</p>
                <Project 
                proyectImg={CriptoImg}
                proyectUrl={`https://cripto-currency.netlify.app/`}
                />
                <div className='proyects_icons_all'>
                <div className={stateCripto ? "proyect_icons_animation" : 'no'}>
                    <img src={JsIcon} alt="" />
                    <img src={ReactIcon} alt="" />
                    <img src={CssIcon} alt="" />
                    <img src={HtmlIcon} alt="" />
                </div>
                <div
                className={stateCripto ? "proyect_icons_animation_github" : 'no'}>
                    <a
                    target="_blank"
                    href="https://github.com/BrunoGN91/Cripto-currency"><img src={GithubIcon} alt="" /></a>
                </div>
                </div>
            </li>
            <li
            onMouseOver={handleGuitar}
            onMouseLeave={handleOutGuitar}
            >
            <p>Cotizador de Cripto</p>
                <Project 
                proyectImg={GuitarLa}
                proyectUrl={`https://guitarla-nz678g1uo-brunogn91.vercel.app/`}
                />
                <div className='proyects_icons_all'>
                <div className={stateGuitar ? "proyect_icons_animation" : 'no'}>
                    <img src={JsIcon} alt="" />
                    <img src={ReactIcon} alt="" />
                    <img src={CssIcon} alt="" />
                    <img src={HtmlIcon} alt="" />
                    <img src={StrapiIcon} alt="" />

                </div>
                <div
                className={stateGuitar ? "proyect_icons_animation_github" : 'no'}>
                    <a
                    target="_blank"
                    href="https://github.com/BrunoGN91/Guitar_Ecommerce"><img src={GithubIcon} alt="" /></a>
                </div>
                </div>
            </li>
        </ul>
    </div>
    </>
  )
  }

export default Projects