import React from 'react'
import cc from '../../Styles/Card1.module.css'; 
import Image from 'next/image';



function Card1(props) {
  return (
    <div id={cc.mainCardContainer}>
    
    <div id={cc.backgroundContainer} >
      {/* {props.image} */}

      <div className={cc.imageContainer}>

    <Image src={props.image} alt='ministry' width={50} height={50}/>

      </div>
    
    <div id={cc.textContainer} >
    
    Toy Offering 
    {props.title}
    
    
    
    </div>
    
    
    
    
    </div>
    
    
    
    
    </div>
  )
}

export default Card1