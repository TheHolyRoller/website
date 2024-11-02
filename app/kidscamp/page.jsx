'use client'

import React from 'react'
import kk from '../Styles/KidsCamp.module.css'; 
import GivingHero from '../Components/GivingHero'; 
import KidsCards from '../Components/KidsCards'; 
import InfoCards from '../Components/InfoCards'; 
import ImageTextBullet from '../Components/ImageTextBullet'; 
import KidsImageCards from '../Components/KidsImageCards'; 
import Images from '../Components/Images'; 
import YoutubeCTA from '../Components/YoutubeCTA'; 
import YoutubeVideo from '../Components/YoutubeVideo'; 
import Hero from '../Components/Heros/MinistriesHero'; 
import camp from '../assets/KidsCamp/KidsParachute.jpg'; 

// Video ID 

import fire from '../assets/KidsCamp/fire.jpg'; 
import balloon from '../assets/KidsCamp/ballon.jpg'; 
import night from '../assets/KidsCamp/nightsky.jpg'; 


import hrt from '../assets/KidsCamp/GirlsHeartHands.jpg';
import running from '../assets/KidsCamp/KidsRunning.jpg'; 
import openfire from '../assets/KidsCamp/openfire.jpg'; 
import slide from '../assets/KidsCamp/slide.jpg'; 
import group from '../assets/KidsCamp/SummerCampImage.png'; 
import marshallow from '../assets/KidsCamp/marshmallow.jpg'; 
import { background } from '@chakra-ui/react';



  
function KidsCamp() {
  return (
  
    <div id={kk.mainContainer}>
    
    
    {/* Add in the hero component here  */}
    <Hero image={camp} alt='camp' title='Kids Camp' /> 

    

    <div id={kk.mainSubContainer}>

    
  <div id={kk.mainHeadlineContainer}>
  
  <div id={kk.mainHeadline} >
  
  
  <div id={kk.introTextContainer}>
  <div id={kk.introText}>
  
  Mirësevini në
    {/* Intro Text  */}
  
  </div>
  
{/* Add in the bold text container here  */}

  </div>
<div id={kk.boldTextContainer} >
<div id={kk.boldTextContainer} >

Klea Huta Summer Camp
{/* Bold Text  */}

</div>
  
  
</div>
  
  {/* Add in the supporting text container here  */}
  
  <div id={kk.supportingTextContainer} >
  <div id={kk.supportingText} >

  Një program i pasur me aktivitete, edukim, kreativitet dhe argëtim- Ku fëmijët zhvillojnë më tej talentet e tyre dhe marrin me vete kujtime që zgjasin për gjithë jetën.
  {/* Supporting Text  */}
  
  </div>
  
  

  </div>
  
  
  
  </div>
  
  

  </div>  
  
  {/* Add in the first component container here  */}
  
  <div id={kk.timelineCardsContainer}>
  <div id={kk.timelineCards}>
    
    <div id={kk.kidsCardGrid} style={{outline: '0px solid lime'}} >

    <KidsImageCards image={fire} title='Fires'/> 
  <KidsImageCards image={night} title='Night Skies'  /> 
      
    </div>


  </div>

  
  </div>
  
  {/* Add in the full screen size Image Text Section about what they are going to Learn  */}
  
  <div id={kk.learningSectionContainer} >
  <div id={kk.learningSectionSubContainer} >
  
  {/* Add in the component in here  */}
  
{/* Add in the prop template here  */}


  {/* <ImageTextBullet/>  */}
  
  
  </div>
  

  </div>
  
  
  {/* Add in the next Section Container here  */}
  
  {/* This will be the Text Image Cards Section on the activities of the camp.  */}
  
  {/* There could be two or even three rows of Cards about the activities  */}
  
  <div id={kk.activitiesMainContainer} >
  <div id={kk.activitiesSubContainer}>
  
  
  <div id={kk.activitiesHeadlineContainer} >
  <div id={kk.activitiesHeadline}>
  
  <div id={kk.HeadlineIntro} >
  

  </div>
    <span id={kk.headlineFirstIntro} >
  Rreth kampit
    </span>
    {/* Activities Headline  */}
  <div id={kk.activitiesIntroText} >
  
  {/* Rreth kampit */}
  Aktiviteti i kampit
  {/* Activities Intro Text  */}


    
  </div>  
    
    
    
  </div>

  </div>

  
  <div id={kk.activitiesCardGrid} >

    {/* Add in the kids cards here  */}
  
  {/* Prop Template Kids Cards 
  image title text 
  
  
  */}
  {/* fire
balloon
night
group */}
  
<KidsCards image={fire} title='Fires' text='enjoy camp Fires at night' /> 
<KidsCards  image={balloon} title='Fires' text='enjoy camp Fires at night'   /> 
<KidsCards image={night} title='Fires' text='enjoy camp Fires at night'   /> 
<KidsCards image={group} title='Fires' text='enjoy camp Fires at night'  /> 
    
  </div>
  
  
  
  
  </div>
    
  </div>
  
  
  {/* Add in the gallery component here  */}
  
  <div id={kk.galleryComponentContainer} >
  <div id={kk.galleryComponent} >

    {/* Add in the headline container here  */}
    
    <div id={kk.galleryHeadlineContainer} >
    <div id={kk.galleryHeadline}>

    {/* Gallery Headline  */}
    Vitet e Mëparshme

    
    </div>
    
    </div>

      
      <div id={kk.imageGridContainer} >
    
    {/* Props template text='' supportingText='' image='' imageItem */}

    {/* hrt
running
openfire
 */}
    <Images image={running} />
    <Images image={hrt} />
    <Images image={openfire} />
    {/* <Images/> */}
    
        
        
        
      </div>
      
      
      
    
  </div>
    

    
  </div>
  
  
  
  {/* Add in the youtube component container here  */}
  
  <div id={kk.youtubeComponentContainer} >
  <div id={kk.youtubeComponent} >
    
   <div id={kk.youtubeContainer} >
    
    {/* Embed the video here  */}
   {/* <YoutubeVideo/>  */}


   </div> 
    
    
    
    
  </div>

    
    
  </div>
  
  
    {/* Add in the Main Info Cards Section container here  */}
    
    <div id={kk.infoCardsSectionContainer} >
    <div id={kk.infoCardsSection} >
    
    
    {/* Add in the headline container here  */}
    
    <div id={kk.infoCardsHeadlineContainer} >
    <div id={kk.infoCardsHeadline}>


    Mirësevini
    
    </div>

      
    </div>

    
    <div id={kk.infoCards} >
    
    


    <div id={kk.infoGridContainer} >
      {/* 
      Props Template 
      icon='' address='' addressOne='' addressTwo='' addressThree=''
      
      */}


      <InfoCards style={{backgroundColor: 'brown'}} /> 
      <InfoCards /> 
      
      
    </div>
    
      
    </div>
    
    
    </div>
    
    
    
    </div>
  
      
    </div>
    
    {/* KidsCamp */}
    
    
    
    </div>
  )
}

export default KidsCamp
