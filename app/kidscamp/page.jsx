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



  
function KidsCamp() {
  return (
  
    <div id={kk.mainContainer}>
    
    
    {/* Add in the hero component here  */}
    <GivingHero/> 
    

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
    
    <div id={kk.kidsCardGrid} >
    
    
    {/* Add in the props template here  */}
{/* Prop template Kids Image Cards 

    Image title text 

*/}
  
    <KidsImageCards/> 
  <KidsImageCards/> 
      
    </div>


  </div>

  
  </div>
  
  {/* Add in the full screen size Image Text Section about what they are going to Learn  */}
  
  <div id={kk.learningSectionContainer} >
  <div id={kk.learningSectionSubContainer} >
  
  {/* Add in the component in here  */}
  
{/* Add in the prop template here  */}


  <ImageTextBullet/> 
  
  
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
  
<KidsCards/> 
<KidsCards/> 
<KidsCards/> 
<KidsCards/> 
    
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
    <Images  />
    <Images/>
    <Images/>
    {/* <Images/> */}
    
        
        
        
      </div>
      
      
      
    
  </div>
    

    
  </div>
  
  
  
  {/* Add in the youtube component container here  */}
  
  <div id={kk.youtubeComponentContainer} >
  <div id={kk.youtubeComponent} >
    
   <div id={kk.youtubeContainer} >
   
   <YoutubeVideo/> 


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
      <InfoCards/> 
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
