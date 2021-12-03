import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import intro from "../assets/intro.mp4";
import intro_loop from "../assets/intro_loop.mp4";
import BottomMenu from "../components/BottomMenu";

const PreHome = () => {
  return (
    <div className="ph-container">
      <div className="w-screen h-screen">
        <BackgroundVideo introURL={intro} introLoopURL={intro_loop} />
        <BottomMenu />
      </div>
    </div>
  );
};

export default PreHome;
