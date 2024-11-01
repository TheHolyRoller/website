import Image from 'next/image'
import LandingPage from '../public/LandingPage'; 

import NightofPrayer from './Components/NightofPrayer'; 

import OutReach from './Components/OutReach'; 

import AboutUs from './Components/AboutUs'; 

import KidsImageCards from './Components/KidsImageCards'; 
import ImageTextBullet from './Components/ImageTextBullet'; 
import ImageTextCard from './Components/Cards/ImageTextCard'; 

import KidsCards from './Components/KidsCards'; 

import EventCard from './Components/EventCard'; 
import SignupForm from './Components/SignupForm';
import NewsLetterForm from './Components/NewsLetterForm'; 
import Mailchimp from './Components/Mailchimp';

import Images from './Components/Images'; 
import Video from './Components/Video'; 
import InfoCards from './Components/InfoCards'; 
import RightTextImage from './Components/RightTextImage'; 

import CTAComponent from './Components/CTAComponent'; 

import ImageText from './Components/ImageText'; 

import TextImage from './Components/TextImage'; 
import AboutImage from './Components/AboutImage'; 
import ImagesText from './Components/ImagesText'; 
import StargeredGrid from './Components/StargeredGrid'; 

import GiveSection from './Components/GiveSection'; 
import KidsCamp from './Components/KidsCamp'; 
import PropRender from './Components/PropRender'; 
import PropTest from './Components/PropTest'; 



require('dotenv').config();

// Audience id for mailchimp 
// 6ac8e7a420
// mailchimp api key 
// 1ad48d9949b54edf129610560d097d83-us21

export default function Home() {
  return (
   
   <div>
    
    <LandingPage/>

   </div>
   
  )
}
