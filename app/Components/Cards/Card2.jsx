import React from 'react'

import cv from '../../Styles/Card1.module.css'; 
import Image from 'next/image';



function Card2({ image, title, text }) {
  return (
    <div id={cv.mainCardContainer}>
    
    <div id={cv.backgroundContainer}>

    <div id={cv.imageContainer}>

    <Image id={cv.image} src={image} alt='ministry' width={250} height={150}/>
    
    </div>


    
    <div id={cv.textContainer} >
    
    {/* Toy Offering  */}
    
    {title}
    
    </div>
    
    
    </div>
    
    
    
    </div>
  )
}

export default Card2