'use client'


import React from 'react'

import or from '../Styles/OutReachCards.module.css'; 



function OutReachCards(props) {
  return (
  
    <div id={or.cardMainContainer}>
    
    
    
    
    
    <div id={or.cardContainer}>
    
    
    {/*  */}
    
    <div id={or.imageContainer}>
    <div id={or.cardImage}>
    
    {/* {props.image} */}
    
    {/* Try adding in an orage tag here  */}
    
    </div>
    </div>
    
    
    {/* Add in the text container here  */}
    
    <div id={or.cardTextContainer}>
    
    <div id={or.cardHeadlineContainer}>
    
    <div id={or.cardHeadline}>
    
    Groups 
    {/* {props.title} */}

    </div>
    
    </div>
    
    {/* Add in the text sub container here  */}
    
    <div id={or.cardTextSubContainer}>
    
    <div id={or.cardText}>
    
    Our group of small networks that meet regularly across the midlands 
    {/* {props.text} */}
    
        
    </div>
        
    </div>
        
    </div>
    
    

    </div>
    



    </div>
  )
}

export default OutReachCards

