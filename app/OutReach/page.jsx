'use client'

import React from 'react'

import oo from '../Styles/OutReach.module.css'; 

import GivingHero from '../Components/GivingHero'; 

// import GivingHero from './GivingHero'; 
import ImageText from '../Components/ImageText'; 
import KidsCards from '../Components/KidsCards'; 
import InfoCards from '../Components/InfoCards'; 

import Images from '../Components/Images'; 
import RightTextImage from '../Components/RightTextImage'; 
import TextImage from '../Components/TextImage'; 



import MaterialCards from '../Components/MuiCard'; 
import GiveSection from '../Components/GiveSection'; 

import OutReachCards from '../Components/OutReachCards'; 
import Hero from '../Components/Heros/MinistriesHero'; 
import outreach from '../../public/OutReachLake.jpg'; 
import reach from '../../public/Outreachhands.jpg';
import smallBusiness from '../assets/Give/Smalbusiness.jpg'; 



import stud from '../assets/Give/student.jpg'; 
import student from '../assets/Give/studentSunny.jpg'; 
import stu from '../assets/Give/StudentsBlackPoor.jpg'; 



function OutReach() {
  return (
    
    
    <div id={oo.mainContainer}>
    
    <div id={oo.mainSubContainer}>
    
    {/* Add in the Hero component here  */}
    <Hero image={reach} title='Outreach' /> 


    <div id={oo.contentContainer}>
    
    <div id={oo.contentSubContainer}>
    
    {/* Add in the headline container here  */}
    
    <div id={oo.headlineContainer}>
    
    <div id={oo.headlineSubCotnainer}>
    
    <div id={oo.firstHeadline}>
    

    
    <div id={oo.headlineDiv} >
      

    {/* Sharing the Gospel  */}
    Building the community
      
    </div>  
    
    
    <div id={oo.headlineTextContainer}>
    
    <div id={oo.headlineText}>
    
    "As followers of Christ, we are called to love and serve one another, bearing each other’s burdens in faith and fellowship. Scripture reminds us, ‘Let us not love in word or talk but in deed and in truth’ (1 John 3:18). Helping our brothers and sisters in Christ means walking alongside them in both joy and struggle, strengthening each other through prayer, encouragement, and support. In doing so, we embody the love of Christ, who taught us to be a family united by faith, building each other up so that together we may grow stronger in Him.
   
    </div>
    

    
    </div>

        
    </div>
        
        
    </div>
    

    
    </div>
    
    {/* Add in the first section container here  */}
    
    
    <div id={oo.businessSectionContainer}>
    
    <div id={oo.businessSection}>
    
    {/* Add in the headline container here  */}
    
    
    
    
    {/* Add in the Image Text CTA here  */}
    
    <div id={oo.businessCTAContainer}>
    
    {/* This is where the image Text CTA Cards will go  */}
    <div id={oo.businessCTA}>
    
    <div id={oo.businessHeadlineContainer}>
    
    <div id={oo.businessHeadline}>
    
    {/* Sponsoring Businesses  */}
        

        
    </div>
        
        
    </div>
      
   
    {/* <RightTextImage image={smallBusiness}   title='Helping Small Businesses' text="At Renewal, we believe in empowering Albanian small businesses. As a family, supporting these businesses is more than just a passion; it’s a commitment to our community." */}



    {/* />  */}
    
    
    
    </div>

        
        
    </div>
    
    
    </div>

        
        
    </div>
    
    
    <div id={oo.scholarSecondSectionContainer}>
    <div id={oo.scholarSecondSectionSubContainer}>
    
    
    {/* Add in the headline container here  */}
    
    <div id={oo.scholarHeadlineContainer}>
    <div id={oo.scholarHeadlineSubContainer}>
    
    <div id={oo.scholarHeadline}>
        
        Sponsoring Students 

        
    {/* Scholar Headline          */}
    <div id={oo.scholarTextContainer}>
    
    <div id={oo.scholarText}>
    
    
    </div>

        
    </div>
    
        
    </div>

        
        
    </div>

        
        
    </div>
    
    
    {/* Add in the Cards Section container here  */}
    
    <div id={oo.scholarCardsSectionContainer}>
    
    <div id={oo.scholarCardsSubContainer}>
    
    <div id={oo.scholarCards}>
    
    
    
    <div id={oo.scholarGridContainer} >


    <OutReachCards image={stud}  /> 
    <OutReachCards image={student} /> 
    <OutReachCards image={stu} /> 
      
    </div>
    


    </div>
    

    
    </div>
    

    
    </div>
    
    
    
    </div>
    
    
    
    
        
        
    </div>
    

    
    {/* Add in the third section container here  */}
    
    
    {/* This will be about the counselling and testimonies  */}
    
    
    <div id={oo.counsellingTestimoniesMainContainer}>
    <div id={oo.counsellingTestimoniesSubContainer}>
    
    {/* Add in the headline container here  */}
    
    <div id={oo.counsellingHeadlineContainer}>
    <div id={oo.counsellingHeadlineSubContainer}>
    
    <div id={oo.counsellingHeadline}>
    
      Helping People find Homes 

        
    </div>

    
    </div>
    
    
    
    </div>

    <div id={oo.mainText} >

    As missionaries, we have helped people find a place they can call home by offering support, warmth, and spiritual guidance to create a sense of belonging and love.




    </div>





    {/* Add in the Card Section container here  */}
    
    <div id={oo.counsellingCardSectionContainer}>
    <div id={oo.counsellingCardSectionSubContainer}>
    
    <div id={oo.counsellingCards}>
      
  
        <TextImage  image={smallBusiness} style={{outline: '5px solid blue'}} /> 
        
    </div>

    
    </div>

        
        
    </div>
    
    
    
    </div>
    
    
    
        
        
    </div>
    
    
    
    <div id={oo.farmingSectionContainer}>
    <div id={oo.farmingSectionSubContainer}>
    
    {/* Add in the Headline Container here  */}
    
    <div id={oo.farmingHeadlineContainer}>
    <div id={oo.farmingHeadlineSubContainer}>
    <div id={oo.farmingHeadline}>
      
      {/* Ministry to the Poor  */}
    
    </div>

    </div>

    </div>
    
    
    {/* Add in the farming Card Section here  */}
    
    <div id={oo.farmingCardContainer}>
    
    <div id={oo.farmingCardSubContainer}>
    
    {/* Turn this into a Grid container  */}
    <div id={oo.farmingCards}>
    
    {/* Add in the Grid container here  */}
    
    <div id={oo.farmingGrid} >
       {/* 
Prop template Material Cards 

image text title 

*/}
{/*     
    <MaterialCards/> 
    <MaterialCards/> 
    <MaterialCards/> 
    <MaterialCards/>  */}
      
    </div>
    
    </div>

    </div>
        
    </div>
        
        
    </div>

    </div>
    
    
    
    
    <div id={oo.foodDistributionSectionContainer} >
    <div id={oo.foodDistributionSectionSubContainer} >
    
    
    {/* Add in the headline container here  */}
    
    <div id={oo.foodHeadlineContainer}>
    
    <div id={oo.foodHeadline}>
      
    </div>
      
      
    </div>
    
    
    
    {/* Add in the Card Element container here  */}
    
    <div id={oo.foodCardsContainer} >
    <div id={oo.foodCardsSubContainer} >
    
    <div id={oo.foodCards}>
      
    </div>
    
    
    </div>
      

      
    </div>
    
    
    </div>

      
      
      
    </div>
    
    
    {/* Add in the give CTA Section container here  */}
    
    <div id={oo.giveCTASectionContainer} >
    <div id={oo.giveCTASectionSubContainer} >
    
    
    
    {/* Add in the headline container  */}
    
    <div id={oo.giveHeadlineContainer} >
    <div id={oo.giveHeadlineSubContainer} >
    
    <div id={oo.giveHeadline} >
    
    <GiveSection/> 
    
    
    
    
    </div>

    
    </div>

      
      
    </div>
      
      
      
    </div>
      

      
    </div>
    

    </div>
    
    </div>
    
    </div>
    
    
    </div>

    
  )
}

export default OutReach 