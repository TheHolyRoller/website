'use client'

import Image from 'next/image';
import React from 'react'

import BluePrints from '../assets/PrayerNight/BluePrints.jpg'; 
import { Typography } from '@mui/material';
// import img from '../Styles/ImageText.module.css';
import img from '../Styles/TextImage.module.css'; 
  





function ImageText({image, title, text}) {
  return (

    <div id={img.backgroundcontainer}>
    
    
    {/* Add in the main component container here  */}
    
    <div id={img.componentcontainer} >
    
    <div id={img.componentsubcontainer}>
    
    {/* Add in the list to organise and arrange the component */}
    <ul id={img.componentsectionlist}>
    
    
    <li id={img.textlistitem}>


        
         {/* Add in the text section container here  */}
    <div id={img.textsectioncontainer}>
     
     <div id={img.textsectionsubcontainer}>
     
     
     
     {/* Add in the Text container here  */}
     <div id={img.textsectionblockcontainer}>
     

     <div id={img.textsectioncontainer}> 
     


     <Typography id={img.textsectiontypography}>
     <h1 id={img.textsectionheader}>

      {title}

         
     </h1>
         
         
     </Typography>
 
 
 
 
     <div id={img.toptextcontainer}>

{text}
    
     </div>
     
         
     </div>  
  
         
     </div>
     
     {/* Text Sub Container  */}
     </div>
 
     {/* Text Section Main Container */}
     </div> 

    </li>
    
    
    
    <li id={img.listcomponentitem}>

    
    <div id={img.imagesectioncontainer}>

    <div id={img.imagesubcontainer}>
  
        
      
    <Image
    src={image}
    id={img.image}
    width={700}
    height={700} 
    alt='alt'
    
    /> 

    
    </div>
        
    </div>
  

        
    </li> 
        
    {/* Component Section list  */}
    </ul>
        
    {/* Add in the main Image container here  */}
 

    
    {/* Component Sub Container   */}
    </div>
    
    
    {/* Component Container  */}
    </div>

    {/* <div id={img.visibletext}>


    </div> */}
      
      {/* Background Container  */}
    </div>
  );
  
}

export default ImageText
