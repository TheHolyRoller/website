'use client'

/**  */

import React from 'react'

import gs from '../Styles/GiveSection.module.css'; 


function GiveSection() {
  return (
    <div id={gs.mainContainer} >
    <div id={gs.subContainer} >
    
    
    {/* Add in the headline container here  */}
    
    <div id={gs.headlineContainer} >
    <div id={gs.headline}>
    
    
    Would you like to contribute to more projects like these? 
    
    
    </div>

      
      
    </div>
    
    
    {/* Add in the Give button container section here  */}
    
    <div id={gs.giveButtonSection} >
    <div id={gs.giveButtonSubSection} >
    
    <div id={gs.giveButton} >



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
