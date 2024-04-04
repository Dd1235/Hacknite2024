import React, { props } from "react";

export default function Bullets(props) {
  return (
    <div className="sanspro h-fit flex items-center justify-center py-10 lg:py-20 overflow-hidden">
      <svg
        className="absolute hidden sm:block lg:h-[170%] opacity-75"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M77.5,64Q66,78,49.5,78.5Q33,79,22.5,64.5Q12,50,19.5,30Q27,10,47,15.5Q67,21,78,35.5Q89,50,77.5,64Z"
          stroke="none"
          fill={props.isDarkMode ? "#4284ca" : "#95cbf5"}
        ></path>
        <path
          d="M77.5,64Q66,78,49.5,78.5Q33,79,22.5,64.5Q12,50,19.5,30Q27,10,47,15.5Q67,21,78,35.5Q89,50,77.5,64Z"
          transform="translate(2.7 0.49)"
          stroke={props.isDarkMode ? "#19355b" : "#6387a3"}
          strokeWidth="1"
          fill="none"
        ></path>
      </svg>
      <div className="z-10 flex black-text dark:white-text flex-col items-center justify-center gap-12 md:gap-16 lg:gap-20 w-10/12">
        <div className="playfair font-bold tracking-wide text-center text-2xl md:text-3xl lg:text-5xl">
          {props.mainTitle}
        </div>
        <ul className="flex flex-col gap-8 md:gap-10 list-disc">
          <li className="text-sm md:text-base lg:text-lg">
            <span className="uppercase block font-semibold">
              {props.title1}
            </span>
            {props.text1}
          </li>
          <li className="text-sm md:text-base lg:text-lg">
            <span className="uppercase block font-semibold">
              {props.title2}
            </span>
            {props.text2}
          </li>
          <li className="text-sm md:text-base lg:text-lg">
            <span className="uppercase block font-semibold">
              {props.title3}
            </span>
            {props.text3}
          </li>
          <li className="text-sm md:text-base lg:text-lg">
            <span className="uppercase block font-semibold">
              {props.title4}
            </span>
            {props.text4}
          </li>
          <li className="text-sm md:text-base lg:text-lg">
            <span className="uppercase block font-semibold">
              {props.title5}
            </span>
            {props.text5}
          </li>
        </ul>
      </div>
    </div>
  );
}
