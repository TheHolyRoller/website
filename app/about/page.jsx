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
import Hero from '../Components/Heros/MinistriesHero'; 
import about from '../assets/LakeLG.jpg'; 



function AboutUs() {
  return (
    <div id={a.mainContainer}>


    <Hero  image={about} title='About Us' /> 

    
    
    <div id={a.mainSubContainer} >
    
    
    {/* Add in the here component here  */}
    
    
    
    {/* add in the headline container here  */}
    
    <div id={a.firstHeadlineContainer}>
    
    <div id={a.firstHeadline} style={{display:'none'}} >
    
    First Headline 
    
    </div>
      
      
    </div>
    
    
    {/* Add iin the first section container here  */}
    
    
    <div id={a.startedMainContainer} >
    <div id={a.startedMainSubContainer} >
    
    {/* Add in the headline container here  */}
    
    <div id={a.startedHeadlineContainer} >
    <div id={a.startedHeadline}>

      {/* {title} */}
    
    {/* Started Headline  */}
    
    </div>
    

      
    </div>
    
    
    {/* Add in the component container here  */}
    
    <div id={a.startedCardContainer} >
    <div id={a.startedCardSubContainer} style={{outline: '0px solid lime'}} >


    <TextImage  image={about} title='Gods call' text={'The Wakeley family, guided by faith, felt a strong calling from God to serve the people of Albania. With open hearts, they dedicated themselves to supporting local communities, sharing hope, and fostering growth. Driven by love and compassion, the Wakeleys continue to uplift and connect with the Albanian people, honoring God’s mission'} /> 

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
    
    <div id={a.imageGridContainer} >
 
    {/* <Images/> 
    <Images/> 
    <Images/> 
    <Images id={a.lastImage} />  */}
    


      
      
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
      
      Back into the years Past...
      
      
    </div>
        

      
      
    </div>
    
    
    
    
    <div id={a.headedComponent} >
    
    {/* Headed Component  */}
      <StaggeredGrid/> 
      
      
      
    </div>
    
    
    

    </div>
    
    


    </div>
    
    
    
      
    </div>

    
    </div>
  )
}

export default AboutUs

