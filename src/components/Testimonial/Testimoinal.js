import React from "react";
import "./Testimoinal.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import man1 from "../../images/man1.png";
import man2 from "../../images/man2.png";
import plane1 from "../../images/plane1.png";
import move from "../../images/Moving.svg";
import box from "../../images/Box.svg";
import ship from "../../images/Ship.svg";
import glob from "../../images/Glob.svg";
import head from "../../images/Headphone.svg";
import clock from "./Clock.svg";
import coin from "../../images/Coin.svg";

import Comments from "./Comment";
const Testimoinal = () => {
   
  return (
    <div className="testimonial">
      <div className="testimonialtop">
        <div className="testimonialTitle">
          <div className="testimonailtitle1">
            <div className="testimonial-title-box"></div>
            <h5>Testimoinal</h5>
          </div>
          <div className="testimonialTitle2">
            <h1>What Our Customer Say</h1>
            <div className="arrow">
              <BsFillArrowLeftCircleFill className="arrow1" />
              <BsFillArrowRightCircleFill className="arrow2" />
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="comment1">
            <Comments
              src={man1}
              name="Kathleen Smith"
              company="Fuel Company"
              info="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
            />
          </div>
          <div className="comment2">
            <Comments
              src={man2}
              name="John Martin"
              company="Restoration Company"
              info="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
            />
          </div>
        </div>
      </div>
      <div className="testimonialDown">
        <div className="testimonialDown-left">
          <img src={plane1} />
          <div className="mihir">
            <div className="mihirImage">
              <img src={move} />
              <p>Moving your products across borders</p>
            </div>
          </div>
        </div>
        <div className="testimonialDown-right">
          <div className="h-[23px] flex flex-row testimonialDown-right-title">
            <div className="w-[6px] color"></div>
            <div
              className="w-[98px] flex justify-center items-center"
              style={{ background: "rgba(232, 232, 232, 0.5) " }}
            >
              <div className="text-[14px] text-black font-heading-text">
                Why Choose
              </div>
            </div>
          </div>
          <div className="text-[35px] mt-[210px] ml-[5px] text-left font-semibold leading-[42px] text-black font-heading-text">
            We create opportunity to reach potential
          </div>
          <div className="text-[16px] mt-[12px] ml-[6px]  flex flex-col gap-[12px] text-left text-[#666C89] fontColor">
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-8 mt-[40px]">
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full  color">
                  <img src={box} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  Safe Package
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full  color">
                  <img src={ship} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  Ship Everyware
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full  color">
                  <img src={glob} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  Global Tracking
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full  color">
                  <img src={head} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  24/7 Support
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full color">
                  <img src={clock} alt="box" />
                </div>
                <div className="text-[20px] font-heading-text text-[#1C1F35] font-medium">
                  In Time Delivery
                </div>
              </div>
              <div className="h-[63px] flex items-center justify-start gap-2">
                <div className="h-[63px] w-[63px] flex items-center justify-center rounded-full  color">
                  <img src={coin} alt="box" />
                </div>
                <div className="text-[20px] text-left font-heading-text text-[#1C1F35] font-medium">
                  Transparant Pricing
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoinal;
