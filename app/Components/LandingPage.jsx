'use client'

import {  Spacer } from "@nextui-org/react"

import Image from "next/image.js";

// import Worship from '../assets/Worship.jpg'; 
import Worship from '../assets/PrayerNight/Worship.jpg'; 
// import Worship from '../app/assets/PrayerNight/Worship.jpg';



import '../Styles/content.css'; 
// import '../app/Styles/content.css';

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
import SingupModal from './SingupModal.jsx'; 

import HeroComponent from './HeroComponent.jsx'; 
import ImageText from "./ImageText.jsx";
import GivingHero from "./GivingHero.jsx";

import HomeHero from './Heros/HomeHero.jsx'; 

// import ContactForm from '../app/contact/ContactForm.jsx'; 
import ContactForm from '../contact/ContactForm.jsx'; 


import Card1 from './Cards/Card1.jsx'; 
import Card2 from './Cards/Card2.jsx'



import TextCard1 from './Cards/TextCard1.jsx';

import ImageTextCard from './Cards/ImageTextCard.jsx'; 

import MinistryMaterial from './MinistryMaterial.jsx'; 

import outreach from '../assets/Outreach/HandCircle.jpg';

import about from '../../public/Future.jpg'; 
import prayer from '../assets/PrayerNight/WomenPrayingLG.jpg'; 
import kidscamp from '../assets/KidsCamp/KidsRunning.jpg'; 
import Bible from '../assets/PrayerNight/BibleCoffee.jpg'; 
import mission from '../../public/Mission.jpg'; 
import vision from '../../public/VisionEyes.jpg'; 
import values from '../../public/Ingegrity.jpg'; 




function LandingPage() {

  


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
    
    

    
    <div id='landing-grid-container' >
    


    
    <div id='landing-grid-one' >

      
      
    <div id='grid-item-container' >
    
    <Link href='/outreaches'>
    <Card2  id='grid-card-one' image={outreach}  title='Outreach'  />
    
    </Link>




    </div>
    
        
        
    </div>
    <div id='landing-grid-one' >
    
    
    
    <div id='grid-item-two-container' >

    <Link href='/about'>
      

    <Card2 id='grid-card-two' image={about}  title='About Us' />
    
    </Link>


    </div>
        
    </div>
    
    
    </div>
    
    
    <div id='landing-second-grid' >
    
    {/* Add in the first grid item here  */}
    
    <div id='second-landing-item-one' style={{outline:'0px solid lime'}}  >
    
    <Link href='/nightofprayer' image={prayer} title='Night of Prayer'  >
    
    <TextCard1  image={prayer} title="Night of Prayer"  /> 
    
    </Link>
    
    </div>
    <div id='second-landing-item-two' >

      
         <Link href='/kidscamp'>
    
    <TextCard1 image={kidscamp} title="Kids Camp"  /> 
    
    </Link>
    
    </div>
      
    <div id='second-landing-item-three' >
      
    <a href="https://www.youtube.com/watch?v=gJnmaQXFaqI&t=11s" target="_blank" rel="noopener noreferrer">
    <TextCard1 image={Bible} title='Ministry Material' /> 
</a>
    
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
    
    <div id='grid-item-container-two' >
    

    <Link href='/mission'>

    <ImageTextCard image={mission} title='Our Mission' text="Read More About our Mission for the Future of the Kingdom of God in Albania"  /> 
    
    
    </Link>
     
        
    </div>
    <div id='grid-item-container-two' >
    
    {/* Add in the Card here  */}
    <Link href='/vision'>

    <ImageTextCard image={vision} title="Our Vision" text='Read more about our vision for our outreach in the Balkans and Beyond'/> 
    

    </Link>
        
    </div>
    <div id='grid-item-container-two' >
    <Link href='/values'>


<ImageTextCard image={values} title="Our Values" text="Read more about our values and what we believe in from Gods Word"  /> 

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