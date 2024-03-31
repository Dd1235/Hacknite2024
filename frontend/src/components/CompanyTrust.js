import React, { useEffect, useRef } from "react";
import logo1 from "./logo-1.webp";
import logo2 from "./logo-2.webp";
import logo3 from "./logo-3.webp";
import logo4 from "./logo-4.svg";
import logo5 from "./logo-5.webp";
import logo6 from "./logo-6.png";
import "./CompanyTrust.css"; // Import CSS file for animation styles
import Slider from "react-infinite-logo-slider";

const Component = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14">
      <div className="playfair font-bold text-center w-4/5 black-text dark:white-text  text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10">
        Trusted by over 20,000 brands
      </div>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        <Slider.Slide>
          <img src={logo1} alt="logo1" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={logo2} alt="logo2" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={logo3} alt="logo3" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={logo4} alt="logo4" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={logo5} alt="logo5" className="w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src={logo6} alt="logo6" className="w-36" />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default Component;
