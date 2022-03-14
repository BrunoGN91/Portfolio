import React, {useState, useEffect} from 'react'
import GithubIcon from '/assets/img/github.png'
import LinkedinIcon from '/assets/img/linkedin(1).png'
import EmailIcon from '/assets/img/gmail-logo.png'


const Contact = () => {


const [icons, setIcons] = useState(false);
const [github, setGithub] = useState(false);
const [linkedin, setLinkedin] = useState(false);
const [email, setEmail] = useState(false)

const handleIcons = () => {
    setIcons(true)

    setTimeout(() => {
    setGithub(true)
  }, 100)
  setTimeout(() => {
    setLinkedin(true)
  }, 200)
  setTimeout(() => {
    setEmail(true)
  }, 300)
}

const handleNotIcons = () => {

 
    setIcons(false)
 
 
  setTimeout(() => {
    setGithub(false)
  }, 100)
  setTimeout(() => {
    setLinkedin(false)
  }, 200)
  setTimeout(() => {
    setEmail(false)
  }, 300)
}




  return (
      <>
    <div className='contact'>
        <h2
        onClick={!icons ? handleIcons : handleNotIcons}
        >Contact Me</h2>
    </div>
   {
     icons ? (
      <>
      <div className="contact-icons">
        <a href="https://github.com/BrunoGN91">
      <img 
      className={github ? "contact-icon-animation" : 'no'}
      src={GithubIcon} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/bruno-gazzera/">
      <img 
      className={linkedin ? "contact-icon-animation" : 'no'}
      src={LinkedinIcon} alt="" />
      </a>
      <a href="mailto:bruno.gazzera.nicolas@gmail.com">
      <img 
      className={email ? "contact-icon-animation" : 'no'}
      src={EmailIcon} alt="" />
       </a>
      </div>
      
    </>
  
     ) : 
     <>
     <div className="contact-icons">
     <img 
     className={!github ? "contact-icon-animation-fade" : 'pad'}
     src={GithubIcon} alt="" />
     <img 
     className={!linkedin ? "contact-icon-animation-fade" : 'pad'}
     src={LinkedinIcon} alt="" />
     <img 
     className={!email ? "contact-icon-animation-fade" : 'pad'}
     src={EmailIcon} alt="" />
     </div>
   </>
   }
    </>
  )
}

export default Contact