
import { LocationCity } from "@mui/icons-material"; 

import { FaSearchLocation } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";


 
import  Grid  from "@nextui-org/react";

import Card from "@nextui-org/react"; 
import Row from "@nextui-org/react"; 
import Text from "@nextui-org/react"; 
import Col from "@nextui-org/react"; 
import Button from "@nextui-org/react"; 
// import {  Col,  Button,  } from "@nextui-org/react";

import LocationOnIcon from '@mui/icons-material/LocationOn';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



import React from 'react'



// import Link from 'next/link';
import { TypeFormatFlags } from 'typescript';

import { Typography } from '@mui/material';

import { Facebook } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTube from "@mui/icons-material/YouTube";
import Link from "next/link";


import ft from '../Styles/footer.module.css'; 



function Footer() {
  return (

    
    
  <div id={ft.footermaincontainer }>
    
  <footer id={ft.footercontainer}>
  
  <section id={ft.footersectioncontainer }>
  
  
  
  {/* GRID CONTAINER!#!! */}
  <div id={ft.sectionlistcontainer} >
  
    
  
  {/* Add in the list here  */}
  <div id={ft.listcontainer} >
  <ul id={ft.sectionlist}>
    {/* Add in the first list item here  */}
    <li id={ft.sectionlistitem}>
    
    <div id={ft.headlinecontainer} >
  <text id={ft.sectionheadline} style={{pointerEvents: 'none', cursor: 'none'}}  >
    Contact Us 

  </text>
  </div>


    {/* Add in the Anchor Tag here  */}
    {/* Add in the phone number here  */}
    <text id={ft.listphonetext} style={{pointerEvents: 'auto'}}  >
    <Link href='tel:+355762053987' >
    0121 711 7300
    </Link>
    </text>
    
    {/* Add in the Phone number here  */}
      
      {/* Add in the social media list here  */}
      
      
      
    </li>
    
    <li className={ft.emailcontact}  id={ft.sectionlistitem} >
    
    <text className={ft.emailcontact}  id={ft.listtext} >
    <Link href='mailto:wakeleyfamily@gmail.com' >
    hello@renewalcc.com
    </Link>
    </text>
      
    </li>
    
    <li>
    </li>

    <li id={ft.socialmediaitem} >
    
    {/* Add in the social media list here  */}
    
    <ul id={ft.sociallist} >
    
    <li id={ft.socialitem} >
    
    <Link href='https://www.facebook.com/' target="_blank" >
    
      <Facebook id={ft.footersocialicon} style={{fontSize: '2rem', color: 'white'}}/>
      
    </Link>

      
    </li>
    
    <li id={ft.socialitem} >
    
    
    
    
    <div id={ft.iconcontainer} >
    
    <Link href='https://www.instagram.com/' target="_blank" >
    <InstagramIcon id={ft.footersocialicon}  style={{ fontSize: '2rem', marginBottom: '5px'}} />
    </Link>
      
    </div>
    
    </li>
    
    <li id={ft.socialitem} > 
      {/* Add in the icon and anchor tag here  */}
      
      
      <Link href='https://www.youtube.com/' target="_blank">
      <YouTubeIcon id={ft.footersocialicon}  style={{fontSize: '2.3rem', transform: 'scale(1.15)'}} />
      </Link>
    </li>
    </ul>
    </li>
  </ul>
  </div>

  
  <div id={ft.secondsectioncontainer} >
  

  
  <ul id={ft.secondsectionlist} >
    {/* Add in the list item here  */}
    <li id={ft.secondsectionitem} >

    
    <div id={ft.secondsectiontext} >

    
    <text id={ft.locationicon}  style={{pointerEvents: 'auto', cursor: 'pointer'}}   >
    <Link href='https://maps.app.goo.gl/as1QU93MeDEDWxxB7' target="_blank" >
    <LocationOnIcon id={ft.locationiconfa}  style={{color: "#6465ff"}} />
    </Link>

    </text>
    <text id={ft.meetinglocation}>
      Cerrik 


    </text>
    
    {/* Add in the time and day information here  */}
    <text id={ft.meetinginfo}>
            
    Sunday  10AM    
    </text>

    </div>

    </li>
    
    
    <li id={ft.secondsectionitem} >
    
    <div id={ft.sectionitemcontainer}>
    
    <text id={ft.locationicon} >
    <Link href='https://maps.app.goo.gl/as1QU93MeDEDWxxB7' target="_blank">

      <LocationOnIcon id={ft.locationiconfa}  style={{color: "#6465ff"}} />
    </Link>

    </text>
    
    <text id={ft.meetinglocation} >
    Elbasan 
      
    </text>
    
    {/* Add in the Time and day info here  */}
    <text id={ft.meetinginfo} >

    Wednesday5pm 
    </text>
      
      
    </div>

    </li>
    
    
    <li id={ft.secondsectionitem}>
      <text id={ft.locationicon} >
      
    <Link href='https://maps.app.goo.gl/as1QU93MeDEDWxxB7' target="_blank" >
      <LocationOnIcon id={ft.locationiconfa}  style={{color: "#6465ff"}} />

    </Link>
        
      </text>
      
      
    <text id={ft.meetinglocation}>
      Xherie   
    </text>
    
    
    <text id={ft.meetinginfo }>
    Tuesday6pm 

    </text>
    
      
    </li>
    
    
    {/* Add in the online service details here  */}
    
    <li id={ft.secondsectionitem} >
    
    <text id={ft.locationicon} >
    <Link href='https://maps.app.goo.gl/rEhVhSwnYHoWGyqRA' target="_blank" >
    <LocationOnIcon id={ft.locationiconfa}  style={{color: "#6465ff"}} />

    </Link>

      
    </text>
    
    <text id={ft.meetinglocation} >
      <Link href='./live'>
      Online 
      </Link>
    </text>
    
    <text id={ft.meetinginfo }>
      Sunday7am 

    </text>
      
    </li>
    
  </ul>
    
    
  </div>
  
  {/* Add in the third section in here  */}
 
  
  </div>
    
  </section>
  
  <div id={ft.bottomsectioncontainer}>
  
  
  <ul id={ft.bottomsectionlist} >
    
  {/* Add in the list items here  */}
  <li id={ft.bottomsectionitem} >
  <Link href='./contact'>
  CONTACT 
  </Link>
  

  </li>
  <li id={ft.bottomsectionitem} >
  <Link href='./live'>
  LIVE 
   </Link>
  

  </li>
  <li id={ft.bottomsectionitem} >
  <Link href='./ministries' >
  PROJECTS  
  </Link>
  

  </li>
  {/*  */}
  <li  className={ft.missionstatementitem} id={ft.bottomsectionitem} >
  <Link href='./mission' >
  MISSION STATEMENT  
  </Link>
  

  </li>

  </ul>

  </div>
  
  

  <div id={ft.copyrightinfocontainer} 
  
  
  
  >

  <div id={ft.copyrightinfo} style={{backgroundColor: '#161822'}} >
    
  © 2023 Renewal Christian Centre Ltd | All Rights Reserved | Charity No. 1117019 | Registered in England & Wales No. 5996380.   


  </div>
  </div>
  
  
  <div id={ft.taglinecontainer} style={{backgroundColor: '#161822'}} >
    
  <div id={ft.ministrytagline} style={{backgroundColor: '#161822'}} > 

  renewal. 
    
  </div>
  </div>

  </footer>
  
</div> 
  );
  
  
  
  
}

export default Footer
