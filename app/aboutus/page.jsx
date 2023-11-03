'use client'

import React from 'react'

import a from '../Styles/AboutUs.module.css'; 
import ImagesText from '../Components/ImagesText'; 
import ImageText from '../Components/ImageText'; 
// import Images from '../Components/Images'; 
import StaggeredGrid from '../Components/StargeredGrid'; 
import TextImage from '../Components/TextImage'; 

import Images from '../Components/Images'; 
import GiveHero from '../Components/GivingHero'; 



function AboutUs() {
  return (
    <div id={a.mainContainer}>
    
    
    {/* Add in the hero Component in here  */}
    
    <GiveHero/> 
    
    
    <div id={a.mainSubContainer} >
    
    
    {/* Add in the here component here  */}
    
    
    
    {/* add in the headline container here  */}
    
    <div id={a.firstHeadlineContainer}>
    
    <div id={a.firstHeadline} >
    
    {/* First Headline  */}
    
    </div>
      
      
    </div>
    
    
    {/* Add iin the first section container here  */}
    
    
    <div id={a.startedMainContainer} >
    <div id={a.startedMainSubContainer} >
    
    {/* Add in the headline container here  */}
    
    <div id={a.startedHeadlineContainer} >
    <div id={a.startedHeadline}>
    
    
    {/* Started Headline  */}
    
    </div>
    

      
    </div>
    
    
    {/* Add in the component container here  */}
    
    <div id={a.startedCardContainer} >
    <div id={a.startedCardSubContainer}>
    
    {/* Add in the imported UI component here  */}
    
    {/* Started Sub Container  */}

    {/* Add in the image Text component here  */}
    
    {/* <ImageText/>  */}
    <TextImage/> 
    


    </div>
    

    </div>
    
    
    </div>
    

    
    </div>
    
    
    {/* Add in the second section container here  */}
    
    <div id={a.goingMainContainer} >
    <div id={a.goingSubContainer} >
    
    {/* Add in the headline container here  */}
    
    <div id={a.goingHeadlineContainer} >
    <div id={a.goingHeadlineSubContainer} >
    
    
    {/* Going Headline  */}
    
    </div>

      
    </div>
    
    {/* Add in the component container here  */}
    
    <div id={a.goingComponentContainer} >
    
    
    {/* Going Component  */}
    
    
    {/* Add in the images here  */}
    {/* <ImagesText/>  */}
    
    
    
    
    
    {/* Add in a grid container here for the images  */}
    
    <div id={a.imagGridContainer} >
 
    <Images/> 
    <Images/> 
    <Images/> 
    <Images id={a.lastImage} /> 
    


      
      
    </div>
    
    
    

    </div>
    
    {/* Add in the image section container here  */}
    
    <div id={a.goingImageContainer} >
    <div id={a.goingImageSubContainer} >
    
    
    {/* Going Images  */}

    
    <ImagesText/> 
    
    
       {/* <Images/>  */}
    {/* Add in a grid container here with the images  */}
    
    
    
    </div>
    
    
    
    </div>
    
    
    </div>  
    
    
      
      
    </div>  
    
    
    
    {/* Add in the next section container here  */}
    
    
    <div id={a.headedMainContainer} >
    <div id={a.headedMainSubContainer} >
    
    
    {/* Add in the headline container here  */}
    
    <div id={a.headedHeadlineContainer} >
    <div id={a.headedHeadline} >
      
      {/* Headed Headline  */}
      
      
      
      
    </div>
      

      
      
    </div>
    
    
    <div id={a.headedComponent} >
    
    {/* Headed Component  */}
      <StaggeredGrid/> 
      
      
      
    </div>
    
    
    

    </div>
    
    


    </div>
    
    
    
      
    </div>
    
    
    AboutUs
    
    
    </div>
  )
}

export default AboutUs

