'use client'


import React from 'react'

import or from '../Styles/OutReachCards.module.css'; 
import stud from '../assets/Give/student.jpg'; 
import student from '../assets/Give/studentSunny.jpg'; 
import stu from '../assets/Give/StudentsBlackPoor.jpg'; 
import Image from 'next/image';


function OutReachCards({image, title, text}) {
  return (
  
    <div id={or.cardMainContainer}>
    
    
    
    <div id={or.cardContainer}>
    
    
    {/*  */}
    
    <div id={or.imageContainer}>
    <div id={or.cardImage}>

    <Image src={image} alt='student'  /> 
    
    
    
    </div>
    </div>
    
    
    {/* Add in the text container here  */}
    
    <div id={or.cardTextContainer}>
    
    <div id={or.cardHeadlineContainer}>
    
    <div id={or.cardHeadline}>
    
    {title}

    </div>
    
    </div>
    
    {/* Add in the text sub container here  */}
    
    <div id={or.cardTextSubContainer}>
    
    <div id={or.cardText}>

      {text}
        
    </div>
        
    </div>
        
    </div>
    
    

    </div>
    



    </div>
  )
}

export default OutReachCards

