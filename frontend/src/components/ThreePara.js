import React from "react";
import PropTypes from "prop-types";

export default function ThreePara(props) {
  return (
    <div className="black-text dark:white-text z-10 sanspro three-para flex items-center justify-center h-fit py-5 flex-col gap-5 sm:py-7 md:h-[45vh] md:flex-row lg:items-start lg:h-fit lg:py-20 relative">
      <div className="w-[90%] text-center sm:text-justify sm:w-[80%] md:w-[27%] md:h-2/3 lg:h-4/5 relative flex flex-col items-center">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block svg-border absolute w-[250px] h-[250px] opacity-75 -z-[1]"
        >
          <path
            d="M81.5,64Q73,78,57,84.5Q41,91,29,78.5Q17,66,11,47Q5,28,22,15.5Q39,3,56.5,11Q74,19,82,34.5Q90,50,81.5,64Z"
            stroke="none"
            fill={props.isDarkMode ? "#298373" : "#44b7a1"}
          ></path>
          <path
            d="M81.5,64Q73,78,57,84.5Q41,91,29,78.5Q17,66,11,47Q5,28,22,15.5Q39,3,56.5,11Q74,19,82,34.5Q90,50,81.5,64Z"
            transform="translate(0.45 -3.98)"
            stroke={props.isDarkMode ? "#004d44" : "#2c796b"}
            strokeWidth="1"
            fill="none"
          ></path>
        </svg>

        <div className="playfair font-bold w-full text-2xl sm:text-3xl md:text-center md:text-3xl lg:text-4xl">
          {props.title1}
        </div>
        <div className="text-sm w-full text-right sm:text-xs lg:text-sm">
          {props.date1}
        </div>
        <div className="text-sm pt-4 sm:text-sm lg:text-lg">{props.text1}</div>
      </div>
      <div className="w-[90%] text-center sm:text-justify sm:w-[80%] md:w-[27%] md:h-2/3 lg:h-4/5 relative flex flex-col items-center">
        <svg
          className="hidden md:block svg-border absolute w-[250px] h-[250px] opacity-75 -z-[1]"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M88.5,63.5Q82,77,70,86.5Q58,96,42,94Q26,92,20,77.5Q14,63,8.5,48Q3,33,16.5,24Q30,15,43,14.5Q56,14,71,17Q86,20,90.5,35Q95,50,88.5,63.5Z"
            stroke="none"
            fill={props.isDarkMode ? "#298373" : "#44b7a1"}
          ></path>
          <path
            d="M88.5,63.5Q82,77,70,86.5Q58,96,42,94Q26,92,20,77.5Q14,63,8.5,48Q3,33,16.5,24Q30,15,43,14.5Q56,14,71,17Q86,20,90.5,35Q95,50,88.5,63.5Z"
            transform="translate(-0.21 -6.22)"
            stroke={props.isDarkMode ? "#004d44" : "#2c796b"}
            strokeWidth="1"
            fill="none"
          ></path>
        </svg>
        <div className="playfair font-bold w-full text-2xl sm:text-3xl md:text-center md:text-3xl lg:text-4xl">
          {props.title2}
        </div>
        <div className="text-sm w-full text-right sm:text-xs lg:text-sm">
          {props.date2}
        </div>
        <div className="text-sm pt-4 sm:text-sm lg:text-lg">{props.text2}</div>
      </div>
      <div className="w-[90%] text-center sm:text-justify sm:w-[80%] md:w-[27%] md:h-2/3 lg:h-4/5 relative flex flex-col items-center">
        <svg
          className="hidden md:block svg-border absolute w-[250px] h-[250px] opacity-75 -z-[1]"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M88,61.5Q78,73,67.5,82Q57,91,43.5,87.5Q30,84,20,74Q10,64,11.5,50.5Q13,37,22.5,28.5Q32,20,45.5,11Q59,2,69.5,13Q80,24,89,37Q98,50,88,61.5Z"
            stroke="none"
            fill={props.isDarkMode ? "#298373" : "#44b7a1"}
          ></path>
          <path
            d="M88,61.5Q78,73,67.5,82Q57,91,43.5,87.5Q30,84,20,74Q10,64,11.5,50.5Q13,37,22.5,28.5Q32,20,45.5,11Q59,2,69.5,13Q80,24,89,37Q98,50,88,61.5Z"
            transform="translate(-4.8 -3.05)"
            stroke={props.isDarkMode ? "#004d44" : "#2c796b"}
            strokeWidth="1"
            fill="none"
          ></path>
        </svg>
        <div className="playfair font-bold w-full text-2xl sm:text-3xl md:text-center md:text-3xl lg:text-4xl">
          {props.title3}
        </div>
        <div className="text-sm w-full text-right sm:text-xs lg:text-sm">
          {props.date3}
        </div>
        <div className="text-sm pt-4 sm:text-sm lg:text-lg">{props.text3}</div>
      </div>
    </div>
  );
}

ThreePara.propTypes = {
  title: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

ThreePara.defaultProps = {
  title: "Enter text here.",
  text1:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatibus repudiandae commodi consequatur itaque cum id, inventore reprehenderit ea labore. Vitae inventore laboriosam similique quisquam molestiae nobis ab, voluptates alias?",
  text2:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eius quis culpa, aut quae eum.",
};
