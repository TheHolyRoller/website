import React from 'react'
import PropTest from '../Components/PropTest'; 

function PropRender() {
  return (
    <div>PropRender
    
    {/* add in the prop test here  */}
    <PropTest title='Prop testing will this work' style={{outline: '20px slid lime'}} /> 
    
    
    </div>
  )
}

export default PropRender