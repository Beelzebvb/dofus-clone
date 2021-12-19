import React from "react";
import { useEffect } from "react/cjs/react.production.min";

const SliderBtns = ({
  currentSlideIndex,
  setCurrentSlideIndex,
  min,
  max,
  interval = 3000,
}) => {
  const nextSlide = () => {
    let targetSlide = currentSlideIndex + 1 < max ? currentSlideIndex + 1 : 0;
    setCurrentSlideIndex(targetSlide);
  };

  const previousSlide = () => {
    let targetSlide =
      currentSlideIndex - 1 >= min ? currentSlideIndex - 1 : max - 1;
    setCurrentSlideIndex(targetSlide);
  };

  return (
    <div className="slider-btns-container">
      <div className="slider-btns-container__btns">
        <div
          onClick={previousSlide}
          className="slider-btns-container__btn slider-btns-container__btn--left"
        ></div>
        <div
          onClick={nextSlide}
          className="slider-btns-container__btn slider-btns-container__btn--right"
        ></div>
      </div>

      <div className="slider-btns-container__dots-container">
        <div className="slider-btns-container__dots">
          {[...Array(max - min)].map((x, i) => (
            <div
              onClick={() => {
                setCurrentSlideIndex(i);
              }}
              key={i}
              className={`slider-btns-container__dot ${
                currentSlideIndex === i
                  ? "slider-btns-container__dot--active"
                  : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderBtns;
