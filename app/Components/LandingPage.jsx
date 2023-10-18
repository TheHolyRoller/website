'use client'

import {  Spacer } from "@nextui-org/react"

import Image from "next/image.js";

import Worship from '../assets/Worship.jpg'; 


import '../Styles/content.css'; 
import {TextCard1} from '../Components/Cards/TextCard1.js'; 

import { LocationCity } from "@mui/icons-material"; 

import { FaSearchLocation } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

import { Grid } from "@nextui-org/react";
import { Card, Row, Text } from "@nextui-org/react";

import {  Col,  Button,  } from "@nextui-org/react";

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



import { Card1 } from '../Components/Cards/Card1.js'; 
import { Card2 } from '../Components/Cards/Card2.js'; 
import { Card3 } from '../Components/Cards/Card3.js'; 
import { Card4 } from '../Components/Cards/Card4.js'; 
import { Card5 } from '../Components/Cards/Card5.js'; 


import Footer from '../footer/Footer.tsx'; 
import SingupModal from '../Components/SingupModal.jsx'; 

import {NewSignupModal} from '../Components/NewSignupModal.js'; 

import HeroComponent from '../Components/HeroComponent.jsx'; 

// import YouTubeCTA from '../Components/YoutubeCTA.jsx'; 
import ImageText from "./ImageText.jsx";
import TextCard2 from '../Components/Cards/TextCard2.js'; 
import NewCard from '../Components/Cards/NewCard.jsx'; 

import GivingHero from "./GivingHero.jsx";

import HomeHero from '../Components/Heros/HomeHero.jsx'; 

import ContactForm from '../ContactForm/ContactForm'; 


function LandingPage() {
  return (
    <div>
    {/* LandingPage */}
    
    {/* Add in the hero section here  */}
    
    
    <HomeHero/> 
    
    
    
    {/* Add in the Headline Text section here  */}
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
    
    

   {/* Add in the Grid Container here  */}
   {/* <Grid.Container gap={3} justify="center">
      <Grid xs={12} sm={3}>

        <Card1 />
      </Grid>
      <Grid xs={12} sm={3}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={3}>
       

      
        <Card3 />
      </Grid>
      <Grid xs={12} sm={5}>
        {/* <CardRenderer/> */}
        {/* <Card4/> 
        
        
      </Grid>
      <Grid xs={12} sm={5}>
        <Card5 />
      </Grid>
    </Grid.Container>  */}
    
    {/* Construct the Grid here  */}
    <div id='landing-grid-container' >
    <div id='landing-grid-one' >
    
    {/* Add in Each Grid Item here  */}
    
    <div id='grid-item-container' >
    
    {/* Add in the Card here  */}
        
        
    </div>
    
        
        
    </div>

    
    </div>
    
    

  </article>
  
  

    
    {/* Add in the second card section here  */}
    
    <article id="card-section">
    
    <div id="headline-container">
    
    <div id="card-headline" style={{fontSize: "2rem", fontWeight: "900", color: "#00c670"}}  >
    Get Involved 
    </div>
     
    
    <div id="text-container" style={{color: "#888888"}}  >
      There are many ways you can get involved with the Renewal Family 
        
      </div>
    </div>
    
    
    {/* Add in the Second grid here  */}
    
    <div id='landing-grid-container-two' >
    <div id='landing-grid-two' >
    
    {/* Add in Each Grid Item here  */}
    
    <div id='grid-item-container-two' >
    
    {/* Add in the Card here  */}
     <TextCard1/> 
     
        
    </div>
    </div>

    
    </div>
    
    
    
    </article>
    
    

    <ContactForm/> 
    
    
    </div>
  )
}

export default LandingPage