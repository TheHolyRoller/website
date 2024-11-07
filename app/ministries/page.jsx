'use client'
import React from 'react'
import mi from '../Styles/Ministries.module.css';




import Image from 'next/image';
import Blue from '../assets/PrayerNight/BluePrints.jpg'; 
import MinistriesHero from '../Components/Heros/MinistriesHero';
import ministry from '../assets/Ministry/FoodGiving.jpg'; 
import minXL from '../assets/Ministry/ministryXL.jpg'; 
import minMD from '../assets/Ministry/ministryMD.jpg'; 
import minSM from '../assets/Ministry/ministrySM.jpg'; 


import min from '../assets/Ministry/FoodBank.jpg'; 
import foodLG from '../assets/Ministry/ministry.jpg'; 
import poor from '../assets/Ministry/poor.jpg';
import blue from '../assets/PrayerNight/BluePrints.jpg'; 




// Import the dependencies for the media query here 


 
function Ministries() {
  return (
    
    <div id={mi.ministrymaincontainer}>


    <div className={mi.ministriesHero} >

      <MinistriesHero image={blue} title='Ministery To the Needy'  /> 
    </div>
      
      
    <div id={mi.ministrysubcontainer}>
    
    
    {/* Add in the Top Section Cards Container here */}
    
    <div id={mi.ministrytopsectioncontainer}>
    
    <div id={mi.ministrymainheadlinecontainer}>
    <div id={mi.ministrymainheadline}>
    
    {/* Add in the main Ministries Headline here  */}
    We are proud to support and partner with ministries birthed within our community and outside of it, all united with one goal: to bring hope to the hopeless and healing to broken places.  
  
      

    </div>
    </div>
    
    <div id={mi.ministrycardsheadlinecontainer}>
    <div id={mi.ministrycardsheadline}>
    
    {/* Add in the Cards Scripture Verse here  */}
    "Go into the world and announce the message of God's good news to all people." Mark 16:16
    
    
    
    </div>

    </div>
    
    
    {/* Add in the ministry Cards container here  */}
    
    <div id={mi.ministrycardscontainer}>
    
    <ul id={mi.ministrycardsgridcontainer}>
    
    {/* Add in each Grid item here which will just be a regular Image Card  */}
    
    {/* Add in the First Grid Item here  */}
    
    <li id={mi.ministrygriditemcard} className="mycard"  >
    
    {/* Add in the Card container here  */}
    
    <div id={mi.ministrygridcard }>
    
    
    {/* Add in the image Container here  */}
    
    <div id={mi.ministrygridcardimage}>
    
    <Image 
    
    id={mi.ministryfirstcardimage}
    src={poor} 
    width={500}
    height={300}    
    alt='not working'
    /> 
    
    </div>
        
    </div>
    
    </li>
    
    
    <li id={mi.ministrygriditemcard}>
    
    <div id={mi.ministrygridcard}>
     
     <div id={mi.ministrygridcardimage}>
    
    <Image 
    style={{outline: '0px solid lime', height: "303px", width: '456px',  }}
    id={mi.ministryfirstcardimage}
    src={min}
    width={500}

    height={300}    
    alt='not working'
    /> 

    </div>
    </div>
    
    </li>
    </ul>
    
    </div>
    </div>
    
    
    {/* Add in the ministry Text container section here  */}
    
    <div id={mi.ministrytextsectioncontainer}>
    
    <div id={mi.ministrytextsectionsubcontainer}>
    
    
    {/* Add in the main Headline container here  */}
    
    <div id={mi.ministrytextheadlinecontainer}>
    <div id={mi.ministrytextheadline}>
    
    {/* Add in the main headline here  */}
    Discipleship

    </div>
    </div>
    
    
    {/* Add in the Grid container for the Text blocks here  */}
    

    <div id={mi.ministrytextgridcontainer}>
    {/* Turn this into a grid container */}
    
    <div id={mi.ministrygridlist}> 

    <div id={mi.ministrygridlistitemone}>
    
    {/* Add in the first text container here  */}
    
    <div id={mi.ministryfirsttextcontainer}>
    
    {/* Add in the headline container here  */}
    <span id={mi.ministryfirsttextheadline}>
      
    Women of Purpose

    </span>
    
   
    
    <div id={mi.ministryfirsttext}>
    Women…..loved beyond measure, God’s chosen, precious treasure, strategically created by God to bring heaven to earth in our family, church, relationships, workplace and world.  This ministry is led by Amy Stoehr and her team of excited leaders and is celebrating almost 30 years of gathering, encouraging, equipping, mobilizing and uniting God’s brilliant women of every age, culture and background. You are invited!

    </div>
    
    
    {/* Add in the text container for the lower spaced out sections */}
    
    <div id={mi.ministryfirsttext}lower>
    
    Monthly Monday Night Studies: 6:308:00pm at The River. New Summer Series.
      
      
    </div>
    <div id={mi.ministryfirsttextlowertwo}>

    Women’s Connect:  Lead or Join a women’s Connect Group on prayer, young moms, career, exercise, dinner……you name it!
    
      
    </div>
    
    
    <div id={mi.ministryfirsttextlowerthree}>
    
    
    {/* Add in the headline container here  */}
    
    <div id={mi.ministryheadlinelowerthree}>
    
    Valor Men 

    
    </div>
      
    As part of the Valor Men’s Ministry, you will have the opportunity to grow, with other men, in a strong and committed walk with Jesus Christ. You will be inspired to become all that God has created you to be. We invite you to join us monthly for our Men’s Night on First Monday's, and weekly in our Men’s Connect Groups. We are participating in the Promise Keeper’s Movement this July and beyond
    
      
      
    </div>
    
    
    <div id={mi.ministryfirsttextlowerfour}>
    
    <div id={mi.ministryheadlinelowerfour}>
    
    Wedding Venue and Marriage Ministry
      
    </div>

    {/* Add in the text here  */}
    As the marriage goes, the family goes.  As the family goes, the church goes.  As the church goes, the community goes.  As the community goes, so the nation goes.  Couples Connect groups, marriage events and conferences and marriage resources help to strengthen the marriages and families of our church.  An important piece of our marriage ministry here at the church is our wedding venue.  Please view the link for our wedding venue website for a complete list of our services.
    

    
    </div>
    
      
      
      
    </div>
    
    
        
  {/* Ministry Grid List Item */}
    </div>
    
  
    <div id={mi.ministrygridlistitemtwo}>
    
    {/* Add in text container here  */}
      
    <div id={mi.ministryitemtwotextcontainer}>
    
    <div id={mi.ministryitemtwoheadline}>
    
    Connect Groups
    
      
    </div>
    <span id='ministryitemtwodash' >

    {/*  */}

    </span>
    
    <div id={mi.ministryitemtwotext}>
    
    River Connect Groups are a great way to make new friends, build strong relationships and grow spiritually in smaller groups on a regular basis. Whether it is through studying the Bible together, serving alongside one another, or sharing a common interest, you will enjoy the blessing of sharing life together at The River Connect Groups!  Sign up at the River Connect Center Sundays.
    
      
      
    </div>
    
    
      
    </div>
    
    
    {/* Add in the Second Text Container here  */}
      
      
    <div id={mi.ministryitemtwosecondtextcontainer}>
    
    <div id={mi.ministryitemsecondtwoheadline}>
    
    River Life Classes
    
      
    </div>
    <span id={mi.ministryitemsecondtwodash}>
    {/*  */}

    </span>
    
    <div id={mi.ministryitemtwosecondtext}>
    
    The River Life Track classes were designed with you in mind, and how we can make a difference united together.  Whether you are new to The River or have been attending for a while, you will love these four classes.  In the first class, we will share the history and vision of the church (101),  the second and third classes cover the foundations of the Christian faith and what we believe (102, 103) and the fourth covers how you and your family can connect and flourish as valued members of the church. (104). Classes meet after church Sundays.  Register at the Connect Center. 
    
    
    
      
      
    </div>

    
    
    
    
    
    
    {/* Add in the third text container here  */}
      
      
    
    
    
    </div>
    
    
    <div id={mi.ministryitemtwothirdtextcontainer}>

    <div id={mi.ministryheadlinethirdtext}>
      
    River Kids

    </div>
    
    {/* Add in the text here  */}
      
    We believe that teaching children to love God and others takes place in both the home and in the church. For this reason we seek to partner with parents (the greatest teachers of all) and teachers in a plan to present amazing Sunday lessons that are reenforced throughout the week.  Through fun experiences, meaningful worship, understandable teaching and ministry that encourages kids to participate, we present Bible teaching in a powerful, relevant way, creating moments which children will never forget. Our goal is to raise up a generation of purpose, passion, prayer and power…children who know their God, know they are loved and are ignited to love this world.
    
      
      
      
      
    </div>
    
    
        
  {/* Ministry Grid List Item */}
    </div>
        
        
     {/* Ministry Grid List  */}
    </div>
        
    
  
    
        
        
    {/* Ministry Text Grid container  */}
    </div>
    
    
    
    {/* Ministry Text Sub container  */}
    </div>

    {/* Ministry Text Section container */}
    </div>
        
  {/* Ministry Sub container */}
    </div>
    
    {/* Ministry main container  */}
    </div>
  );
  
  
}

export default Ministries
