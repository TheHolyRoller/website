import React from 'react'

import im from '../../Styles/ImageTextCard.module.css';
import Image from 'next/image';
// import { image } from '@nextui-org/theme';


function ImageTextCard({ image, title, text }) {
  return (
  
  
  
    <div id={im.cardMainContainer}>
    
    <div id={im.cardContainer} >
    
    
    <div id={im.imageContainer} >
    <div id={im.cardImage} >
    {/* {props.image} */}
    {/* Try adding in an image tag here  */}

    <Image  className={im.image} src={image} alt='ministry' width={50} height={50}/>

    


    </div>
    </div>
    
    
    {/* Add in the text container here  */}
    
    <div id={im.cardTextContainer}>
    
    <div id={im.cardHeadlineContainer}>
    
    <div id={im.cardHeadline}>
    
    {/* Groups  */}
    
    {title}

    </div>
    
    </div>
    
    {/* Add in the text sub container here  */}
    
    <div id={im.cardTextSubContainer}>
    
    <div id={im.cardText}>
    {text}
    {/* Our group of small networks that meet regularly across the midlands  */}
    
        
    </div>
        
    </div>
        
    </div>

    </div>

    </div>
  )
}

export default ImageTextCard
