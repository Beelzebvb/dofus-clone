import React, { useEffect, useState } from "react";
import SliderBtns from "./SliderBtns";

import Universe_01_Background from "../../assets/universe_01.jpg";
import Universe_02_Background from "../../assets/universe_02.jpg";
import Universe_03_Background from "../../assets/universe_03.jpg";

import Universe_01_Text from "../../assets/universe_01_text.png";
import Universe_02_Text from "../../assets/universe_02_text.png";
import Universe_03_Text from "../../assets/universe_03_text.png";

const UniverseSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <div className="slider-md-container slider-container">
      <SliderBtns
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        min={0}
        max={3}
      />
      <div
        className="slider-container__slides"
        style={{
          transform: `translateX(-${(currentSlideIndex * 100) / 3}%)`,
          width: `${3}00vw`,
        }}
      >
        <div className="slider-container__slide">
          <div
            className="slider-container__slide__content"
            id="slider-universe-01"
          >
            <div className="slider-container__slide__content__text">
              <h2>La légende des DOFUS</h2>
              <p>
                Plongez dans un univers médiéval fantastique où dragons, héros
                et divinités se disputent les précieux Dofus.
              </p>
              <p>
                Partez en quête de ces oeufs de dragon dérobés par des forces
                maléfiques.
              </p>
              <p>Débloquez leurs pouvoirs et égalez la puissance des Dieux !</p>
            </div>
          </div>
          <img
            className="slider-container__slide__bg"
            src={Universe_01_Background}
            alt="universe 01"
          />
        </div>
        <div className="slider-container__slide">
          <div
            className="slider-container__slide__content"
            id="slider-universe-02"
          >
            <div className="slider-container__slide__content__text">
              <h2>Combats tactiques</h2>
              <p>
                Affrontez seul ou à plusieurs des monstres de plus en plus
                robustes dans une mécanique au tour par tour.
              </p>
            </div>
          </div>
          <img
            className="slider-container__slide__bg"
            src={Universe_02_Background}
            alt="universe 02"
          />
        </div>
        <div className="slider-container__slide">
          <div
            className="slider-container__slide__content"
            id="slider-universe-03"
          >
            <div className="slider-container__slide__content__text">
              <h2>Aventures et donjons</h2>
              <p>
                De nombreux donjons aux décors, histoires et boss originaux vous
                attendent <br />
                pour mettre à rude épreuve votre force, votre ténacité et votre
                stratégie.
              </p>
            </div>
          </div>
          <img
            className="slider-container__slide__bg"
            src={Universe_03_Background}
            alt="universe 03"
          />
        </div>
      </div>
    </div>
  );
};

export default UniverseSlider;
