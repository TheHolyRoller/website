import React from 'react'

import yy from '../Styles/YoutubeVideo.module.css'; 
import YouTube from 'react-youtube'; 
import VideoEmbed from '../Components/VideoEmbed'; 


function YoutubeVideo() {
  return (
    <div id={yy.mainContainer} >
    
    <div id={yy.subContainer} >
    
    
    <div id={yy.VideoContainer} >
    
    {/* <VideoEmbed  videoId="2TyIde4hTa0" style={{width:'100%', height:'100%'}}  /> */}



    <div className="relative w-full pb-[56.25%] overflow-hidden">
      <iframe
        src={`https://www.youtube.com/watch?v=2TyIde4hTa0&t=5s`}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>

        
    </div>

    
    
    </div>
    
    
    
    </div>
  )
}

export default YoutubeVideo
