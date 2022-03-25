import React, { useState } from "react";
import SliderBtns from "./SliderBtns";

import Screens_01 from "../../assets/Screens_dofus_1.jpg";
import Screens_02 from "../../assets/Screens_dofus_2.jpg";
import Screens_03 from "../../assets/Screens_dofus_3.jpg";
import Screens_04 from "../../assets/Screens_dofus_4.jpg";
import Screens_05 from "../../assets/Screens_dofus_5.jpg";
import Screens_06 from "../../assets/Screens_dofus_6.jpg";
import Screens_07 from "../../assets/Screens_dofus_7.jpg";


const MediaSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="slider-md-container slider-container slider-container__media">
      <SliderBtns
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        min={0}
        max={8}
      />
      <div
        className="slider-container__slides"
        style={{
          transform: `translateX(-${(currentSlideIndex * 100) / 8}%)`,
          width: `${8}00vw`,
        }}
      >
        <div className="slider-container__slide">
          <div className="bg-slide-video">
            <iframe id="intro-video" width="876" height="507" src="https://www.youtube.com/embed/1BDovKwipg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="slider-container__slide">
          <div className="bg-slide-screen">
            <img src={Screens_01} alt="" />
          </div>
        </div>
        <div className="slider-container__slide">
          <div className="bg-slide-screen">
            <img src={Screens_02} alt="" />
          </div>
        </div>
        <div className="slider-container__slide">
          <div className="bg-slide-screen">
            <img src={Screens_03} alt="" />
          </div>
        </div>
        <div className="slider-container__slide">
          <div className="bg-slide-screen">
            <img src={Screens_04} alt="" />
          </div>
        </div>
        <div className="slider-container__slide">
          <div className="bg-slide-screen">
            <img src={Screens_05} alt="" />
          </div>
        </div>
        <div className="slider-container__slide">
          <div className="bg-slide-screen">
            <img src={Screens_06} alt="" />
          </div>
        </div>
        <div className="slider-container__slide">
          <div className="bg-slide-screen">
            <img src={Screens_07} alt="" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default MediaSlider;
