'use client'

import {  Spacer } from "@nextui-org/react"

import Image from "next/image.js";

// import Worship from '../assets/Worship.jpg'; 
import Worship from '../assets/PrayerNight/Worship.jpg'; 



import '../Styles/content.css'; 
import { LocationCity } from "@mui/icons-material"; 

import { FaSearchLocation } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

import LocationOnIcon from '@mui/icons-material/LocationOn';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



import React from 'react'

import Link from 'next/link';
import { TypeFormatFlags } from 'typescript';

import { Typography } from '@mui/material';

import { Facebook } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Footer from '../footer/Footer.tsx'; 
import SingupModal from '../Components/SingupModal.jsx'; 

import HeroComponent from '../Components/HeroComponent.jsx'; 
import ImageText from "./ImageText.jsx";
import GivingHero from "./GivingHero.jsx";

import HomeHero from '../Components/Heros/HomeHero.jsx'; 

import ContactForm from '../contactform/ContactForm'; 

import Card1 from '../Components/Cards/Card1'; 
import Card2 from './Cards/Card2'




import TextCard1 from '../Components/Cards/TextCard1';

import ImageTextCard from '../Components/Cards/ImageTextCard'; 

import MinistryMaterial from '../Components/MinistryMaterial'; 

// Import the static assets here 
import outreach from '../assets/Outreach/OutReachLake.jpg'
import outreachHand from '../assets/Outreach/Outreachhands.jpg'; 

import future from '../assets/Vision/Future.jpg'; 

import prayer from '../assets/PrayerNight/WomenPrayingLG.jpg';
import singlePrayer from '../assets/PrayerNight/WomanPrayBible.jpg'; 

import kidsCamp from '../assets/KidsCamp/KidsParachute.jpg';
import Bible from '../assets/PrayerNight/BibleCoffee.jpg'; 


import mission from '../assets/Vision/Mission.jpg'; 
import vision from '../assets/Vision/Future.jpg'; 
import eye from '../assets/Vision/VisionEyes.jpg'; 
import values from '../assets/Vision/Ingegrity.jpg'; 



function LandingPage() {



  // Create the object here to Loop through for the Cards 
  const cardObject = [


    {id: 1, title: 'Outreach', image: outreach}, 

    {id: 2, title: 'About Us', image: future }




  ]

  const largeCard = [

    {id: 1, title: 'Night of Prayer', image: prayer }, 
    {id:2, title:'Kids Camp', image:kidsCamp}, 
    {id:3, title: 'Ministry Material', image:Bible}




  ];

  const textCard = [

    {id: 1, title: 'Mission', text: 'Read more about our Mission Statement for the Balkans', image:mission }, 
    {id: 2, title: 'Vision', text: 'Learn more about our Vision for the Albania and the Kingdom of God', image: eye}, 
    {id: 3, title: 'Values', text: 'Learn more about our values and our beliefs', image:values },


  ]







  return (
    <div id='landing-page-main-container' >
    <HomeHero/> 
    <section id="mission-section" style={{position: "relative", zIndex: "20"}} >
  
  <div id="mission-text" >
  
  
  We are Renewal, a dynamic, family church with people of all ages

  </div>

    <div id="mission-paragraph"  >
    Renewal has a rich history spanning over 50 years and today is 
    home to many people from across the Midlands. We are a dynamic, 
    family church with people of all ages and from all walks of life and 
    you are welcome to join us.
    
    
  
  
    <SingupModal/> 


    </div>
    
    
  </section>
    
    {/* Add in the first card section here  */}
    <article id="text-cards">

    <div id='content-main-headline'   >
      Fulfilling the Great Commission 
    </div>
    
    

    
    {/* Construct the Grid here  */}
    <div id='landing-grid-container' >
    
    
    {/* <div id='landing-grid-sub-container' > */}
    

    
    <div id='landing-grid-one' >

      
      
    <div id='grid-item-container' >
    
    <Link href='/outreach'>
    <Card2  id='grid-card-one' />
    
    </Link>

    </div>
    
        
        
    </div>
    <div id='landing-grid-one' >
    
    {/* Add in Each Grid Item here  */}
    
    
    <div id='grid-item-two-container' >

    <Link href='/about'>
      
    <Card2 id='grid-card-two'/>
    
    </Link>


    </div>
    
        
        
    </div>
    
    
    {/* ---Add in the sub container here ----- */}
    
    
    
    {/* </div> */}
    
    </div>
    
    
    {/* Add in the second grid here  */}
    
    <div id='landing-second-grid' >
    
    {/* Add in the first grid item here  */}
    
    <div id='second-landing-item-one' >
    
    <Link href='/nightofprayer'>
    
    <TextCard1/> 
    
    </Link>
    
    </div>
    <div id='second-landing-item-two' >

      
         <Link href='/kidscamp'>
    
    <TextCard1/> 
    
    </Link>
    
    </div>
      
    <div id='second-landing-item-three' >
      
    
    
    <Link href='/ministrymaterial'>
    
    <TextCard1/> 
    
    </Link>

    
    </div>
      

      
    </div>
    
    

  </article>
  
  


    
    {/* Add in the second card section here  */}
    
    <article id="card-section">
    
    
    <div id="headline-container" className='getInvolvedContainer' >
    
    <div id="card-headline" className='getInvolved' >
    Get Involved 
    </div>
     
    
    <div id="text-container">
      There are many ways you can get involved with the Renewal Family 
        
        
      </div>
    </div>
    
    
    {/* Add in the Second grid here  */}
    
    <div id='landing-grid-container-two'>
    
    
    
    <div id='landing-grid-sub-container-two'>
    
    <div id='landing-grid-two' >
    
    {/* Add in Each Grid Item here  */}
    
    <div id='grid-item-container-two' >
    

    <Link href='/mission'>

    <ImageTextCard/> 
    
    </Link>
     
        
    </div>
    <div id='grid-item-container-two' >
    
    {/* Add in the Card here  */}
    <Link href='/vision'>

    <ImageTextCard/> 
    
    </Link>
        
    </div>
    <div id='grid-item-container-two' >
    <Link href='/values'>

<ImageTextCard/> 

</Link>
        
    </div>
    </div>

    </div>
    
    
    </div>
    
    
    {/*  */}
    
    
    
    
    
    </article>
    
    
    {/* Add in the Youtube Section here  */}
    
    <div id='youtubeSectionContainer'>
    
    
    
      {/* <MinistryMaterial/>  */}
      
      
    </div>


    <ContactForm/> 
    
    
    </div>
  )
}

export default LandingPage