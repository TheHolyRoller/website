'use client'


import React from 'react'

import kc from '../Styles/KidsCards.module.css'; 
import Image from 'next/image';

function KidsCards({image, title, text}) {
  return (
  
    <div id={kc.cardMainContainer}>
    
    
    
    <div id={kc.cardContainer}>
    
    
    {/*  */}
    
    <div id={kc.imageContainer}>
    <div id={kc.cardImage}>

    <Image id={kc.cardImage}  src={image} alt='camp'/>
    
    
    </div>
    </div>
    
    
    {/* Add in the text container here  */}
    
    <div id={kc.cardTextContainer}>
    
    <div id={kc.cardHeadlineContainer}>
    
    <div id={kc.cardHeadline}>
    
    {/* Groups  */}
    {title}

    </div>
    
    </div>
    
    {/* Add in the text sub container here  */}
    
    <div id={kc.cardTextSubContainer}>
    
    <div id={kc.cardText}>
    
    Our group of small networks that meet regularly across the midlands 

  {text}    
        
    </div>
        
    </div>
        
    </div>
    
    

    </div>
    



    </div>
  )
}

export default KidsCards

