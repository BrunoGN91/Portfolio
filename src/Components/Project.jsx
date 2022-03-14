import React from 'react'


const Project = ({ proyectImg, proyectUrl}) => {
  return (
   <>
        <a 
            className='project_img'
            target="_blank"
            href={proyectUrl}>
                <img src={proyectImg} alt="" />
        </a>
     </>
  )
}

export default Project