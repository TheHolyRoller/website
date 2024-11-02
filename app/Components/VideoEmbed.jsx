import React from 'react';
import YouTube from 'react-youtube';

const VideoEmbed = ({ videoId }) => {
  const opts = {
    height: '90vh',
    width: '70vw',
    playerVars: {
      autoplay: 0,
    },
  };
  

  return <YouTube videoId={videoId}  />;
};

export default VideoEmbed;
 