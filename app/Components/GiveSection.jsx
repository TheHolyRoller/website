'use client'

/**  */

import React from 'react'

import gs from '../Styles/GiveSection.module.css'; 



function GiveSection(props) {
  return (
    <div id={gs.mainContainer} >
    <div id={gs.subContainer} >


    <div id={gs.headlineContainer} >
    <div id={gs.headline}>
    {/* {props.text} */}
    Would you like to contribute to more projects like these? 
    
    </div>

      
      
    </div>
    
    
    {/* Add in the Give button container section here  */}
    
    <div id={gs.giveButtonSection} >
    <div id={gs.giveButtonSubSection} >
    
    <div id={gs.giveButton} >

    {/* {props.buttonText} */}

      {/* Add in the button here  */}
      Give 
      
      
      
    </div>

      
      
    </div>
    
    
    
    </div>
    
    </div>
    
    </div>
  )
}

export default GiveSection
