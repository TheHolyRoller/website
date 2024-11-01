import React from 'react'
import cc from '../../Styles/Card1.module.css'; 
import Image from 'next/image';



function Card1({ image, title, text }) {
  return (
    <div id={cc.mainCardContainer}>
    
    <div id={cc.backgroundContainer} >

      <div id={cc.imageContainer}>
      </div>

    <Image id={cc.image}  src={image} alt='ministry' width={50} height={50}/>

    
    <div id={cc.textContainer} >
    
    Toy Offering 
    {title}
    
    </div>
    
    </div>
    
    </div>
  )
}

export default Card1