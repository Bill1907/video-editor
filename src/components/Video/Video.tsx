import React from "react";
import ReactPlayer from 'react-player'

const Video = () => {

  return <div>
    <ReactPlayer
      className='react-player'
      url={'https://www.youtube.com/watch?v=6xAAObSyTdM'}
      controls={true}
    />
  </div>
};

export default Video