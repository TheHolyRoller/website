'use client'



import React from 'react'


import at from '../Styles/ActivitiesComponent.module.css'; 

import KidsCards from './KidsCards'; 


function ActivitiesComponent(props) {
  return (
    <div id={at.mainContainer} >
    <div id={at.mainSubContainer} >
    
    {/* Add in the Grid container here  */}
    
    
    <div id={at.gridContainer} >
    
    
    {/* Add in the first Grid item here  */}
    
    <div id={at.gridItem}>
    
    
    {/* Add in the props template here */}
    <KidsCards/> 
    
        
    </div>
    <div id={at.gridItem}>
    
    {/* Add in the Card here  */}
    <KidsCards/> 
    
        
    </div>
    <div id={at.gridItem}>
    
    <KidsCards/> 
    
        
        
    </div>
    <div id={at.gridItem}>
    
    <KidsCards/> 
    
        
    </div>
    
    

        
    </div>
    
    
    
    </div>
    

    
    
    
    </div>
  )
}

export default ActivitiesComponent