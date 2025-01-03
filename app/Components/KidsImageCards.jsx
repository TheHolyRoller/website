'use client'

/** 


*/


import React from 'react'

import mm from '../Styles/KidsImageCards.module.css'; 
import Image from 'next/image';

function KidsImageCards({image, title, text}) {
  return (
    <div id={mm.cardMainContainer}>
    
    
    <div id={mm.cardContainer}>
      
    
    
    <div id={mm.imageContainer}>
    <div id={mm.cardImage}>
    
    <Image id={mm.cardImage}  src={image} alt='alt' />



    </div>
    </div>
    
    
    {/* Add in the text container here  */}
    
    <div id={mm.cardTextContainer}>
    
    <div id={mm.cardHeadlineContainer}>
    
    <div id={mm.cardHeadline}>
    
    {title}
    {/* Groups  */}
    
    
    </div>
    
    </div>
    
    {/* Add in the text sub container here  */}
    
    <div id={mm.cardTextSubContainer}>
    
    <div id={mm.cardText}>
    
    {/* Our group of small networks that meet regularly   */}
    
    {/* {props.text} */}
        
    </div>
        
    </div>
        
    </div>
    

    </div>
    

    </div>
  )
}


export default KidsImageCards