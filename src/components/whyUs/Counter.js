import React from "react";
import "./Counter.css"
const Counter = () => {
  return (
    <>
      <div className="flex flex-col h-[143px] w-full  items-center justify-between mt-[100px] mb-[90px]">
        <div className="w-[1020px] h-[2px]  bgColor"></div>
        <div className=" flex flex-row items-center justify-evenly w-[1020px] h-[139px] ">
          <div className="flex flex-row gap-4 items-center justify-evenly h-[60px]">
            <div className="text-[50px] font-heading-text font-semibold">
              1000
            </div>
            <div className="h-[17px] w-[17px]  counter"></div>
            <div className="text-[20px] font-body-text font-medium">
              Delivered Packages
            </div>
          </div>
          <div className="w-[2px] bg-[#D5D5D5] h-full bgColor"></div>
          <div className="flex flex-row gap-4 items-center justify-evenly h-[60px]">
            <div className="text-[50px] font-heading-text font-semibold">
              3000
            </div>
            <div className="h-[17px] w-[17px]  counter"></div>
            <div className="text-[20px] font-body-text font-medium">
              Satisfied Clients
            </div>
          </div>
        </div>
        <div className="w-[1020px] h-[2px] bg-[#D5D5D5]"></div>
      </div>
    </>
  );
};

export default Counter;
