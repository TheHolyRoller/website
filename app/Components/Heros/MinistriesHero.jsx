
'use client'  

import React from 'react'
import Image from 'next/image';

import '../../Styles/Giving.css'; 





function MinistriesHero({image, title}) {
  return (
    // Add in the main hero container here 
    
    <div id='giving-hero-main-container' >
    <div id='giving-hero-sub-container' >
    
    
    <div id='giving-hero-image-container' > 

      {/* giving-hero-image */}
    <div id='' style={{maxHeight: '100vh'}} >

    <Image id='giving-hero-image' style={{maxHeight: '100vh'}} className='ministryHeroImage' src={image} alt='ministry' width={50} height={50}/>

    </div>
          
    {/* Add in the text container here  */}
    
    <div id='giving-hero-text-container'>
        
    
    
    <div id='giving-hero-text-sub-container' >
    
    <div id='giving-hero-text' style={{marginTop: '-5rem', marginLeft: '-0rem', outline: '0px solid lime'}} >

    
    {title}
    
    </div>
    </div>
    
    
    </div>
    </div>
    
    
    
    
    </div>
    </div>
  );
  
}

export default MinistriesHero
