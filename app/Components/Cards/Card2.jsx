import React from 'react'

import cv from '../../Styles/Card1.module.css'; 




function Card2(props) {
  return (
    <div id={cv.mainCardContainer}>
    
    <div id={cv.backgroundContainer} >

    
    <div id={cv.textContainer} >
    
    Toy Offering 
    
    {props.title}
    
    </div>
    
    
    </div>
    
    
    
    </div>
  )
}

export default Card2