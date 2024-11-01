import React from 'react'

import cf from '../../Styles/TextCard1.module.css'; 
import Image from 'next/image';


function TextCard1(props) {
  return (
    <div id={cf.mainCardContainer}>
    
    <div id={cf.backgroundContainer} >
    
    
    
    <div id={cf.backgroundImageContainer} >
    
    <div id={cf.imageBackground} >
    
    <Image scr={props.image} alt='ministry' width={50} height={50}/> 

        
    </div>
        
        
    </div>
    
    <div id={cf.textContainer} >
    
    <div id={cf.textHeadlineContainer} >
    
    <div id={cf.textHeadline} >
        

        {props.title}
    </div>
    
    </div>
    
    <div id={cf.textBlockContainer} >
    
    <div id={cf.textBlock} >
    
    {props.text}

    
    </div>

    
    </div>
    
    Toy Offering 
    
    {/* {props.title} */}
    
    </div>
    
    
    
    
    </div>
    
    
    
    </div>
  )
}

export default TextCard1