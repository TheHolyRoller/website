        'use client'
        import React from 'react'

        import l from '../Styles/YouTube.module.css'; 
        import { FaBeer } from "react-icons/fa";
        import { FaFacebook} from 'react-icons/fa'; 
        import { FaYoutube} from 'react-icons/fa'; 
        import LiveHero from '../Components/Heros/LiveHero'; 
        import Link from 'next/link';
        import YouTube from 'react-youtube'; 
        import VideoEmbed from '../Components/VideoEmbed'; 
        import Hero from '../Components/Heros/MinistriesHero'; 
        import Live from '../assets/Live.jpg'; 
        import Production from '../assets/Production.jpg'; 




        // video id 
        // gJnmaQXFaqI

    
        function YoutubeCTA() {
        return (

            
            <div id={l.componentcontainer} >
            
            {/* <LiveHero id={l.livehero} /> */}
            <Hero image={Production} title='Live' /> 

            
            <div id={l.componentsubcontainer} >
            
            {/* Add in the text section container  */}
            
            <div id={l.textsectioncontainer}>
            
            <div id={l.headlinecontainer}>
            
            <div id={l.textsectionheadline}>
                
            Join us for live Services Three Times a Week 
            
            
            </div>
            
            <div id={l.infotextcontainer}>
            
            <div id={l.infotext}>
            
            Get filled with the Word of God and the true Gospel Spoken from the Heart. The 
            Albanian Service is Friday Morning 7 am, the English Service is on Tuesday from 9pm to 10pm and the final service is on Kisha Online. 

            </div>
            
            {/* Add in the CTA text here  */}
            
            <div id={l.ctaTextContainer} >
            
            <div id={l.ctaText} >
            
            Join Live 
                
            </div>
            
                
            </div>

                
            </div>

                
            </div>

            
            
            
            {/* Text Section Container */}
            </div>
            
            {/* Add in the Youtube Section Container  */}
            
            <div id={l.livelinksectioncontainer}>
            
            <div id={l.livelinklistcontainer}>
            
            {/* Add in the list her  */}
            <ul id={l.livelinklist}> 
            
            
            <li id={l.livelistitem}>
            
            {/* Add in the Icon here  */}
            
            {/* Create the button for the Live here  */}
            
            <button id={l.livelinkbtn}>


            <FaYoutube id={l.youtubelink}  />

            </button> 
            
            
            
            {/* Add in the Link to Facebook Live here  */}
                
            </li>
            <li id={l.livelistitem}>
            
            {/* Create the CTA Button here  */}
            <button id={l.livelinkbtn}>


{/* <FaYoutube id='youtubelink' /> */}
            <FaFacebook id={l.facebooklink} />

</button> 
            
          
                            

            </li>
            </ul>
                
            </div>

            
            </div>


            
            {/* __________+++___ */}
            
            
            
            <div id={l.youtubesectioncontainer}>
            
            <div id={l.youtubesection}>
            
            <div id={l.youtubevideo} >
                
                <VideoEmbed  videoId="gJnmaQXFaqI" />
            
                
            </div>
                
            </div>
                
                
            </div>
            
            
            {/* Component subcontainer */}
            </div>
            
            
            {/* Add in the Link Section container here  */}
            
            
            
            {/* Youtube  */}
            {/* Component Container */}
            </div>
        )
        }
        
        export default YoutubeCTA
