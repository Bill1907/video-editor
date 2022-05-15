import React, {useEffect, useRef} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface VideoPlayerProps {
  options: videojs.PlayerOptions
}

const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false
    }
  }
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({options}) => {
  const videoNode = useRef<any>();
  const player = useRef<videojs.Player>();

  useEffect(() => {
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options,
    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return <video ref={videoNode} className="video-js" />;
};

export default VideoPlayer