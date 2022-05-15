import React from 'react';
import './App.scss';
import VideoPlayer from '../Video/Video';

const videoJsOptions = {
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4"
    }
  ]
};

function App() {
  return (
    <div className="App">
      <VideoPlayer options={videoJsOptions}/>
    </div>
  );
}

export default App;
