'use client'
/** 



Okay so let's just talk things through. So I want to create a page that uses Youtube Links and Videos so create a playlist so that people can watch all the ministry material Dad Makes. 


This should be quite straight forward I just need to get the design and 

styling right. 


So let's start with the layout. 

First of all there is the Navbar, Header and the Footer. 

Then in between is the ministry material. 

Okay so there should be a main headline 

and then there should be the first line of videos. 

This line of videos will also have it's own header to denote the 

category of material. 



Then there should be the row of videos. 

If there are a lot in one category then there should be a horizontal 


scroll bar so that the user can scroll through them. 


To denote each video there will be a thumbnail with the title and the 

image. 

Okay so that should be the youtube ministry material page done. 


I just need to get it done and then work on polishing it 
































                                                                                        


















*/


import React from 'react';

import mm from '../Styles/MinistryMaterial.module.css'; 



function MinistryMaterial() {
  return (
    <div id={mm.mainContainer} >
    
    <div id={mm.subContainer}>
      
    
    <div id={mm.headlinecontainer} >
    
    <div id={mm.headline}>
    
    We are Renewal, a dynamic, family church with people of all ages
    
    
    </div>

        
    </div>
    
    
    {/* Add in the Youtube Section container here  */}
    
    <div id={mm.youtubeSectionContainer} >
    
    <div id={mm.youtubeSection}>

    
    {/* Add in the first row here  */}
    
    <div id={mm.youtubeRowContainer} >
    
    
    <div id={mm.youtubeRow} >

    
    <div id={mm.youtubeVideoSlideContainer} >
    
    <div id={mm.youtubeVideoSlide} >
    
    {/* Add in the list here  */}
    
    <ul id={mm.youtubeVideoList}>
    
    <div id={mm.youtubeRowTitleContainer}>
    
    <div id={mm.youtubeRowTitle}>
    
    Walking in the Spirit 
    
    
    </div>

        
    </div>
    
    <li id={mm.youtubeVideoListItem}>
    
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
   
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    </ul>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div id={mm.youtubeRowContainer} >
    
    
    <div id={mm.youtubeRow} >
    
    <div id={mm.youtubeVideoSlideContainer} >
    
    <div id={mm.youtubeVideoSlide} >
    
    {/* Add in the list here  */}
    
    <ul id={mm.youtubeVideoList}>
    
     
    <div id={mm.youtubeRowTitleContainer}>
    
    <div id={mm.youtubeRowTitle}>
    
    Walking in the Spirit 
    
    
    </div>

        
    </div>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    <li id={mm.youtubeVideoListItem}>
    
    {/* Add in the video container here  */}
    
    <div id={mm.videoContainer}>
    
    <div id={mm.youtubeVideo}>
    
    {/* Video  */}

    </div>

    </div>
    </li>
    </ul>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    
    </div>
  );
  
}

export default MinistryMaterial
