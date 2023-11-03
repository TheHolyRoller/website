'use client'
import React from 'react'

import nn from '../Styles/NightOfPrayer.module.css'; 

import MuiCard from '../Components/MuiCard'; 

// import MuiCard from '../Components/MuiCard'; 
import InfoCards from '../Components/InfoCards'; 
import Images from '../Components/Images'; 
import KidsCards from '../Components/KidsCards'; 
import AboutImage from '../Components/AboutImage'; 

  import ImageText from '../Components/ImageText'; 
  import GivingHero from '../Components/GivingHero'; 
  import ImagesText from '../Components/ImagesText'; 
  import TextImage from '../Components/TextImage'; 
  
   
import RightTextImage from '../Components/RightTextImage'; 
import OutReachCards from '../Components/OutReachCards'; 


 export default function NightOfNight() {
  
  
  return (
  
    <div id={nn.mainContainer} >
    
    <GivingHero/> 
    
    
    
    <div id={nn.mainSubContainer} >
    

    <div id={nn.contentContainer} >
    
    <div id={nn.contentSubContainer}>
    
    {/* Add in the headline container here  */}
    
    <div id={nn.headlineContainer}>
    
    
    <div id={nn.headlineSubCotnainer} >
    
    <div id={nn.firstHeadline} >
    {/* First Headline  */}
    
    
    <div id={nn.headlineTextContainer} >
    
    <div id={nn.headlineText} >
    
    {/* Main Headline Text  */}
    Join us for a Night of Prayer 
    
    
    </div>
    

    
    </div>

        
    </div>
        
        
    </div>
    

    
    </div>
    
    {/* Add in the first section container here  */}
    
    
    <div id={nn.nightSectionContainer} >
    
    <div id={nn.nightSection} >
    
    {/* Add in the headline container here  */}
    
    <div id={nn.nightHeadlineContainer} >
    
    <div id={nn.nightHeadline} >
    
    {/* Night Headline  */}
    
    
        

        
    </div>
        
        
    </div>
    
    
    {/* Add in the Image Text CTA here  */}
    
    <div id={nn.nightCTAContainer} >
    
    {/* This is where the image Text CTA Cards will go  */}
    <div id={nn.nightCTA} >
        
        {/* Prop template Right Text Image 
        image, text, supportingText, 
        
        */}
        <RightTextImage/> 
        
        
    
    </div>

        
        
    </div>
    
    
    </div>

        
        
    </div>
    
    

    
    
    <div id={nn.prayerSecondSectionContainer} >
    <div id={nn.prayerSecondSectionSubContainer} >
    
    
    {/* Add in the headline container here  */}
    
    <div id={nn.prayerHeadlineContainer} >
    <div id={nn.prayerHeadlineSubContainer} >
    
    <div id={nn.prayerHeadline} >
        
    {/* Prayer Headline          */}
    <div id={nn.prayerTextContainer} >
    
    <div id={nn.prayerText}>
    
    Pray with Us 

    
    </div>

        
    </div>
    
        
    </div>

        
        
    </div>

        
        
    </div>
    
    
    {/* Add in the Cards Section container here  */}
    
    <div id={nn.prayerCardsSectionContainer} >
    
    <div id={nn.prayerCardsSubContainer} >
    
    <div id={nn.prayerCards}>
    
    {/* Prayer Cards */}
    
    {/* Add in the prayer cards here  */}
    
    {/* Add in the Card Grid here  */}
    
    <div id={nn.prayerGridContainer} >

{/* 
Prop template Mui Cards 

image text title 

*/}
    <MuiCard/> 
    <MuiCard/> 
    <MuiCard/> 
      
      
    </div>
    
    
        
        
        
    </div>
    

    
    </div>
    

    
    </div>
    
    
    
    </div>
    
    
    
    
        
        
    </div>
    

    
    {/* Add in the third section container here  */}
    
    
    {/* This will be about the teaching and testimonies  */}
    
    
    <div id={nn.teachingTestimoniesMainContainer}>
    <div id={nn.teachingTestimoniesSubContainer}>
    
    {/* Add in the headline container here  */}
    
    <div id={nn.teachingHeadlineContainer} >
    <div id={nn.teachingHeadlineSubContainer}>
    
    <div id={nn.teachingHeadline} >
    
    
    {/* Teaching Headline  */}
    
    Enjoy Great Teaching  
    
    </div>

    
    </div>
    
    
    
    </div>

    {/* Add in the Card Section container here  */}
    
    <div id={nn.teachingCardSectionContainer} >
    <div id={nn.teachingCardSectionSubContainer}>
    
    <div id={nn.teachingCards} >

        {/* Teaching Cards  */}
        
        {/* Add in the Text Image CTA Section here  */}
        
        {/* Props Template 
        image, text, values 
        
        
        */}
        <TextImage/> 
        
        
        {/* Add in the material UI Cards here  */}
        

        
    </div>

    
    
    
    
    </div>

        
        
    </div>
    
    
    
    </div>
    
    
    
        
        
    </div>
    
    
    
    {/* Add in the fourth section here  */}
    
    <div id={nn.worshipSectionMainContainer} >
    <div id={nn.worshipSectionSubContainer} >
    
    {/* Add in the worship headline container here  */}
    
    <div id={nn.worshipHeadlineContainer} >
    <div id={nn.worshipHeadlineSubContainer} >
    
    <div id={nn.worshipHeadline} >
    
    {/* Worship Headline  */}
    Worship with Women of God 
    
    </div>

    
    </div>
        
        
    </div>
    
{/*     
    <div id={nn.worshipInfoHeadline} >

        See you There! 
        
        
      </div> */}
    
    
    {/* Add in the worship Section Cards here  */}
    
    <div id={nn.worshipSectionCardsContainer}>
    <div id={nn.worshipSectionCardsSubContainer}>
    <div id={nn.worshipSectionCards}>
      
      {/* Add in the Grid container here  */}
      
      
      {/* <div id={nn.worshipInfoHeadline} >

        See you There! 
        
        
      </div> */}
      
      <div id={nn.worshipGridContainer} >
      
      {/* <InfoCards/>  */}

      
      {/* Add in the outreach cards here  */}
      {/* Props template OutReach Cards 
      
      image title text 
      
      
      
      */}
      <OutReachCards/> 
      <OutReachCards/> 
      <OutReachCards/> 
      
      

        
      </div>

      
    {/* Worship Cards  */}
    </div>

    </div>
        
    </div>
    
    
    </div>
    
    
    
    </div>
    
    
    
    {/* Add in the detail section container here  */}
    
    
    <div id={nn.detailsSectionContainer} >
    <div id={nn.detailsSectionSubContainer} >
    
    <div id={nn.detailsHeadlineContainer} >
    <div id={nn.detailsHeadlineSubContainer} >
    <div id={nn.detailsHeadline} >
    
    {/* Details Headline  */}
    
    See you there!
    
    
    </div>
    
    
    </div>

    
    
    </div>
    
    
    {/* Add in the details Card Section here  */}
    
    <div id={nn.detailsCardContainer} >
    
    <div id={nn.detailsCardSubContainer} >
    
    
    {/* Turn this into a Grid container  */}
    <div id={nn.detailsCards}>
    
    {/* Details Cards  */}
    
    <div id={nn.infoCardsGrid} >
    
    {/* Props template Info Cards 
    icon, addressOne addressTwo addressThree 
    
    */}
    
    <InfoCards/> 
    <InfoCards/> 
      
      
    </div>
    

    
    
    
    </div>
    
    

    </div>

        
        
    </div>
        
        
    </div>
    {/* NightOfNight */}

    </div>
    
    
    {/* Add in the prayer request section here  */}
    
    <div id={nn.requestSectionContainer} >
    <div id={nn.requestSectionSubContainer} >
    
    
    {/* Add in the Section headline container here  */}
    
    <div id={nn.requestHeadlineContainer} >
    
    <div id={nn.requestHeadline} >
    
    {/* request headline  */}
      
      
    </div>
    

    
    </div>
    
    
    {/* Add in the prayer Request element  */}
    <div id={nn.prayerRequestComponent} >
    
    {/* Prayer Reqsuest Component  */}
    
    
      
      
    </div>
    
    
    
    </div>

      
      
      
    </div>
    


    </div>
    </div>
    </div>
    </div>    
    
  )
  
}