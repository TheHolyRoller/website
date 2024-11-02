'use client'



import Image from 'next/image';
import React from 'react'

import BluePrints from '../assets/PrayerNight/BluePrints.jpg'; 
import { Typography } from '@mui/material';
import '../Styles/RightTextImage.css'; 





function RightImage({image, title, text}) {
  return (

    <div id='right-background-container' >
    

    <div id='right-component-container' >
    
    <div id='right-component-sub-container' >
    
    {/* Add in the list to organise and arrange the component */}
    <ul id='right-component-section-list'>
      
   
    <li id='right-list-component-item' >


    <div id='right-image-section-container' >
      
      
    <div id='right-image-sub-container'  >

      
      
    <Image
    src={image}
    id='right-image'
    width={600}
    
    height={1200} 
    alt='alt'
    style={{borderRadius: '25px'}}
    
    
    /> 

    
    </div>
        
    </div>
        

    </li>
    
    
    <li id='right-text-list-item'  >
    
    {/* Add in the text section container here  */}
    <div id='right-text-section-container'  >
     
    <div id='right-text-section-sub-container' >
    
    
    
    {/* Add in the Text container here  */}
    <div id='right-text-section-block-container' >
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id='right-text-section-container' > 
    <Typography id='right-text-section-typography' >
    <h1 id='right-text-section-header'>

    </h1>
    </Typography>
    <div id='right-top-text-container'  >
    
    {/* Add in some extra text here  */}
    <div id='right-lorem-container' >
    

    {text}
    For a Christian, prayer is a powerful, personal connection with God. It brings comfort, guidance, and strength, deepening faith and trust. Through prayer, believers seek God's wisdom, ask for blessings, and find peace amidst struggles. Prayer cultivates gratitude, aligns hearts with God’s will, and fuels hope in His promises
    
    </div>
    
    
    
    {/* Renewal’s values are what we do alongside what we believe.  */}
    {/* <div id='right-bottom-text-container' >
    Read more about our values here.
    </div> */}
    </div>

    </div>  

    </div>
    
    {/* Text Sub Container  */}
    </div>

    {/* Text Section Main Container */}
    </div>

        
    </li> 
    
    
    <li id='right-text-list-item-backup'  >
    
    {/* Add in the text section container here  */}
    <div id='right-text-section-container'  >
     
    <div id='right-text-section-sub-container' >
    
    
    
    {/* Add in the Text container here  */}
    <div id='right-text-section-block-container-backup' >
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id='right-text-section-container' > 
    
    <Typography id='right-text-section-typography' >
    <h1 id='right-text-section-header-backup' style={{outline: '0px solid lime'}} >

        {/* Our Values  */}
        {/* {title} */}
        
        
    </h1>




    </Typography>



    <div id='right-top-text-container-backup'  >
    
    <div id='top-right-text-backup' >
    
     {/* are what we do alongside what we believe.  */}
    </div>
    <div id='right-bottom-text-container' >
    {/* Read more about our values here. */}
    </div>
    </div>

        
    </div>  
        
    </div>
    {/* Text Sub Container  */}
    </div>

    {/* Text Section Main Container */}
    </div>

        
    </li>
    
    
   
        
    {/* Component Section list  */}
    </ul>
        
    {/* Add in the main Image container here  */}
 


    
    {/* Component Sub Container   */}
    </div>
    
    
    {/* Component Container  */}
    </div>

      
      {/* Background Container  */}
    </div>
  );
  
}

export default RightImage
