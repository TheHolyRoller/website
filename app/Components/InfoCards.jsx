'use client'
import React from 'react'

import ic from '../Styles/InfoCards.module.css'; 




function InfoCards(props) {
  return (
    <div id={ic.mainContainer} >
    
    <div id={ic.subContainer} >
    
    {/* Add in the card container here  */}
    
    <div id={ic.cardContainer}>
        
            
    <div id={ic.mainCard} >

    
    
    {/* Add in the icon container here  */}
    <div id={ic.iconContainer} >
    
    {/* Add in the icon here  */}
    {/* {props.icon} */}
    
    
    </div>
    
    {/* Add in the text container here  */}
    
    <div id={ic.headlineContainer} >
    {/* {props.addressOne} */}
    Adresa 
        
    </div>
    <div id={ic.textContainer}>
    
    <div id={ic.text} >
    
    
    Rruga “Zef Jubani” 
    {/* {props.addressTwo} */}
    
    <span id={ic.subTextContainer} >
    
    {/* {props.addressThree} */}
    Sheshi Wilson, pas Postës nr.8

        
    </span>
    
    </div>

    
    </div>    

        
    </div>
        
        
    </div>
    
    </div>
    
    
    
    </div>
  )
}

export default InfoCards
