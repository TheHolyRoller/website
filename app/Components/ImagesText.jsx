'use client'

import Image from 'next/image';
import React from 'react'

import BluePrints from '../assets/PrayerNight/BluePrints.jpg'; 
import { Typography } from '@mui/material';
import mt from '../Styles/ImagesText.module.css';
import road from '../assets/Road.jpg'; 
import car from '../assets/car.jpg'; 
import valley from '../assets/valley.jpg'; 




function ImagesText({image, imageOne, imageTwo, title, text}) {

  return (


    <div id={mt.backgroundcontainer} >
    
    <div id={mt.componentcontainer} >
    
    <div id={mt.componentsubcontainer}>
    
    {/* Add in the list to organise and arrange the component */}
    <ul id={mt.componentsectionlist}>
    
    
    <li id={mt.listcomponentitem}>
    
    
    {/* No styling so far  */}
    <div id={mt.imagesectioncontainer}>
    
    {/* Add in the subcontainer here  */}
    <div id={mt.imagesubcontainer}>

      {/* {props.image} */}
      
    <Image
    src={road}
    id={mt.image}
    width={700}
    height={1200} 
    alt='alt'
    
    /> 

    
    </div>
        
    </div>
        
        

    </li>
    
    
    
    
    <li id={mt.textlistitem}>
    
    {/* Add in the text section container here  */}
    <div id={mt.textsectioncontainer}>
     
    <div id={mt.textsectionsubcontainer}>
    
    
    
    {/* Add in the Text container here  */}
    <div id={mt.textsectionblockcontainer}>
    
    {/* Add in the container for the text block here  */}
    
    {/*  */}
    <div id={mt.textsectioncontainer}> 
    
    {/* Add in the container for the text here  */}
       
    {/* Add in the container for the Header here  */}
    <Typography id={mt.textsectiontypography}>
    <h1 id={mt.textsectionheader}>
        The Future 

        
    </h1>
        
        
    </Typography>


    <div id={mt.toptextcontainer}>
    
    {/* {props.text} */}
    
    {/* The River Church for Change continued to grow and expand into 4 different suites at the storefronts on the south side of Portland Road. In March 2020, when many churches closed down - we stayed open. The church is ESSENTIAL! Like Hebrews 10:25 says,  */}
    The future of our Christian ministry in Albania is filled with hope and purpose. We aim to deepen our connections, expand outreach, and empower local believers to share their faith. Through education, discipleship, and community service, we envision a flourishing Albanian church that transforms lives and shines God’s light across generations.
    
    {/* Renewal’s values are what we do alongside what we believe. */}
    
    <div id={mt.middleTextcontainer} >
    
    {/* {props.mainText} */}
    {/* "Let us not give up the habit of meeting together, as some are doing.
Instead, let us encourage one another all the more,
since you see that the Day of the Lord is coming nearer. " */}
        “For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.”
        
        
    </div>
    
    
    <div id={mt.bottomtextcontainer}>
    
    {/* {props.supportingText} */}
    {/* We were outgrowing the building, so we moved across the street and met in the parking lot, during the summer, until we gained occupancy of our new building.  */}
    God has faithfully guided us as we’ve grown. When we outgrew our original building, we moved across the street and gathered in the parking lot during the summer. This transition strengthened our unity as we awaited our new space, trusting God’s provision for our ministry’s futureF
    
        
    {/* Read more about our values here. */}
    </div>
    </div>
    
    
    <div id={mt.imagesSectionContainer} >
    
    
    {/* add in the Image list here  */}
    <ul id={mt.imageList} >
    
    <li id={mt.imageListItem} >
    
    <div className={mt.imageOne}  id={mt.listImage}   style={{outline: '0px solid lime'}} >



        
    </div>
    
    </li>
    <li id={mt.imageListItem}>
    
    <div className={mt.imageTwo}  id={mt.listImage} >
    
    {/* <Image src={imageOne} alt='future' /> */}

        
</div>

    </li>
    

    </ul>

    

    
    </div>
    
    
   
  
        
    </div>  
    {/* <div id='buttontextsectioncontainer' style={{marginBottom: '20vh'}}   >

<button> <h1>Hi </h1></button> 
 
 
</div>  */}
    
   
        
    </div>
    
    
    {/* Add in the button section container here  */}

   

    
    {/* Text Sub Container  */}
    </div>

    {/* Text Section Main Container */}
    </div>

        
    </li> 
        
    {/* Component Section list  */}
    </ul>
        
    {/* Add in the main Image container here  */}
 

    
    {/* Component Sub Container   */}
    </div>
    
    
    
    {/* Component Container  */}
    </div>

    <div id={mt.visibletext}>

    </div>
      
      {/* Background Container  */}
    </div>
  );
  
}

export default ImagesText
