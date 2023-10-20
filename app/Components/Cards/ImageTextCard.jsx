import React from 'react'

import im from '../../Styles/ImageTextCard.module.css';



function ImageTextCard() {
  return (
  
  
    <div id={im.cardMainContainer}>
    
    <div id={im.cardContainer} >
    
    
    <div id={im.imageContainer} >
    <div id={im.cardImage} >
    
    {/* Try adding in an image tag here  */}
    
    </div>
    </div>
    
    
    {/* Add in the text container here  */}
    
    <div id={im.cardTextContainer}>
    
    <div id={im.cardHeadlineContainer}>
    
    <div id={im.cardHeadline}>
    
    Groups 
    

    </div>
    
    </div>
    
    {/* Add in the text sub container here  */}
    
    <div id={im.cardTextSubContainer}>
    
    <div id={im.cardText}>
    
    Our group of small networks that meet regularly across the midlands 
    
        
    </div>
        
    </div>
        
    </div>
    
    

    </div>
    


    </div>
  )
}

export default ImageTextCard
