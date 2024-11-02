import React from 'react';
import YouTube from 'react-youtube';

const VideoEmbed = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };
  

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoEmbed;
 