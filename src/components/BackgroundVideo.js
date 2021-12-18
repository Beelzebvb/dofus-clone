import React, { useState } from "react";

const BackgroundVideo = ({ introURL, introLoopURL }) => {
  const [loopVideo, setLoopVideo] = useState(false);

  return (
    <div className="bg-video-container">
      <video
        className="bg-video-container__video"
        src={introURL}
        autoPlay
        muted
        onEnded={() => setLoopVideo(true)}
      >
        Intro video
      </video>

      {loopVideo && (
        <video
          className="bg-video-container__video "
          src={introLoopURL}
          autoPlay
          muted
          loop
        >
          Intro video Loop
        </video>
      )}
    </div>
  );
};

export default BackgroundVideo;
