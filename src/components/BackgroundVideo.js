import React, { useState } from "react";

const BackgroundVideo = ({ introURL, introLoopURL }) => {
  const [loopVideo, setLoopVideo] = useState(false);

  return (
    <div className="bg-video-container">
      {!loopVideo ? (
        <video
          className="h-screen w-full object-cover"
          src={introURL}
          autoPlay
          muted
          onEnded={() => setLoopVideo(true)}
        >
          Intro video
        </video>
      ) : (
        <video
          className="h-screen w-full object-cover"
          src={introLoopURL}
          autoPlay
          muted
          loop
        >
          Intro video
        </video>
      )}
    </div>
  );
};

export default BackgroundVideo;
