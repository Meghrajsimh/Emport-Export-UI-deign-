import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./Slider.css"

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
      <div className="slider-info">
      <div className="absolute left-[50px] w-[550px] flex flex-col items-left justify-between h-[186px] bottom-[55px] z-50">
        <div className="h-[23px] flex flex-row">
          <div className="w-[4px] color"></div>
          <div
            className="w-[244px] flex justify-center items-center"
            style={{ background: "rgba(4, 28, 55, 0.5) " }}
          >
            <div className="text-[14px] text-white font-heading-text">
              Logistics & Supply Chain Solutions
            </div>
          </div>
        </div>
        <div className="text-[40px] text-left font-bold leading-[48px] text-white font-heading-text">
          Your Gateway to any Destination in the World
        </div>

        <div className="flex flex-row mt-[18px] gap-8">
      
            <div className="relative flex items-center justify-center h-[60px] w-[194px] overflow-hidden color Hover">
              <div className="z-10 absolute h-[52px] w-[52px] bg-white rounded-full hover:left-[74px] hover:top-[-43px] left-[159px] top-[36px] hover:h-[206px] hover:w-[206px] transition-all duration-300"></div>
              <div className="z-20 relative font-heading-text text-[16px]">
                Explore More
              </div>
            </div>
            <div className="relative flex items-center justify-center h-[60px] w-[194px] overflow-hidden bg-[#091242] Hover">
              <div className="z-10 absolute h-[52px] w-[52px] bg-white opacity-50 rounded-full hover:left-[74px] hover:top-[-43px] left-[159px] top-[36px] hover:h-[206px] hover:w-[206px] transition-all duration-300"></div>
              <div className="z-20 relative text-white font-heading-text text-[16px]">
                Request Quote
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Slider;
