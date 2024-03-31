import React from "react";
import logo1 from "./logo-1.webp";
import logo2 from "./logo-2.webp";
import logo3 from "./logo-3.webp";
import logo4 from "./logo-4.svg";
import logo5 from "./logo-5.webp";
import logo6 from "./logo-6.png";

export default function CompanyTrust() {
  return (
    <div className="flex flex-col items-center justify-center py-14">
      <div className="playfair font-bold text-center w-4/5 black-text dark:white-text  text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Trusted by over 20,000 brands
      </div>
      <div className="flex flex-col items-center justify-center w-3/5 gap-5 sm:gap-10 mt-10 md:mt-20">
        <div className="flex flex-row gap-5 sm:gap-10">
          <div className="white-bg rounded-md transform-scale h-16 w-16 sm:h-32 sm:w-32 overflow-hidden flex justify-center items-center">
            <img src={logo1} className="h-14 sm:h-28 sm:w-24" />
          </div>
          <div className="white-bg rounded-md transform-scale h-16 w-16 sm:h-32 sm:w-32 overflow-hidden flex justify-center items-center">
            <img src={logo2} className="h-14 sm:h-28 sm:w-52 max-w-none" />
          </div>
          <div className="white-bg rounded-md transform-scale h-16 w-16 sm:h-32 sm:w-32 overflow-hidden flex justify-center items-center">
            <img src={logo3} className="w-14 sm:w-32 sm:h-8" />
          </div>
        </div>
        <div className="flex flex-row gap-5 sm:gap-10">
          <div className="white-bg rounded-md transform-scale h-16 w-16 sm:h-32 sm:w-32 overflow-hidden flex justify-center items-center">
            <img src={logo4} className="w-14 sm:w-28 max-h-none" />
          </div>
          <div className="white-bg rounded-md transform-scale h-16 w-16 sm:h-32 sm:w-32 overflow-hidden flex justify-center items-center">
            <img src={logo5} className="h-14 sm:h-28" />
          </div>
          <div className="white-bg rounded-md transform-scale h-16 w-16 sm:h-32 sm:w-32 overflow-hidden flex justify-center items-center">
            <img src={logo6} className="h-14 sm:h-28" />
          </div>
        </div>
      </div>
    </div>
  );
}
