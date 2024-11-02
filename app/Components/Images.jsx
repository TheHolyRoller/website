import React from 'react'

import Image from 'next/image';
import image from '../Styles/Images.module.css'; 


function Images({image}) {
  return (
    
    <div id={image.mainContainer} >
    <div id={image.subContainer} >
    
    <div id={image.imageContainer} >
    
    <div id={image.mainImage}>
    

      <Image id={image.mainImage}  src={image} alt='img'/>



    </div>
        
        
    </div>

        
        
    </div>
    
    
    </div>
  )
}

export default Images
