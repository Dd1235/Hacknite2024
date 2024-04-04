import React, { props, useState } from "react";
import { Link } from "react-router-dom";
import useScrollAnimation from "../components/useScrollAnimation";

function QuoteImg(props) {
  if (props.invert) {
    return (
      <>
        <img
          src={props.image}
          className="transform-scale w-[90%] hidden sm:w-2/5 sm:block"
        />
      </>
    );
  } else {
    return <></>;
  }
}

export default function Quote(props) {
  const { ref: quoteRef, isVisible: isQuoteVisible } = useScrollAnimation();

  return (
    <div>
      <div className="z-10 sanspro h-fit sm:h-[50vh] md:h-[70vh] w-full overflow-hidden flex flex-col sm:flex-row items-center justify-center sm:gap-10 black-text dark:white-text">
        <QuoteImg image={props.image} invert={!props.invert} />
        <div className="h-48 w-48 z-10 rounded-full overflow-hidden flex sm:hidden justify-center items-center">
          <img src={props.image} className="transform-scale w-full" />
        </div>
        <div className="w-[90%] sm:w-2/5 flex flex-col justify-center items-center">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-[90%] sm:h-auto sm:w-2/5 opacity-75"
          >
            <path
              d="M81.5,64Q73,78,57,84.5Q41,91,29,78.5Q17,66,11,47Q5,28,22,15.5Q39,3,56.5,11Q74,19,82,34.5Q90,50,81.5,64Z"
              stroke="none"
              fill={props.isDarkMode ? "#44b7a1" : "#b8fff3"}
            ></path>
            <path
              d="M81.5,64Q73,78,57,84.5Q41,91,29,78.5Q17,66,11,47Q5,28,22,15.5Q39,3,56.5,11Q74,19,82,34.5Q90,50,81.5,64Z"
              transform="translate(0.45 -3.98)"
              stroke={props.isDarkMode ? "#2c796b" : "#7aa9a1"}
              strokeWidth="1"
              fill="none"
            ></path>
          </svg>
          <div
            ref={quoteRef}
            className={`z-10 w-full flex flex-col justify-center items-center fade-in-component ${
              isQuoteVisible ? "visible" : ""
            }`}
          >
            <div className="z-10 font-semibold sm:w-full sm:text-left uppercase pt-4 sm:pt-0 text-base md:text-lg tracking-wide">
              {props.title}
            </div>
            <div className="z-10 text-xl md:text-2xl text-center sm:text-left lg:text-3xl font-light md:leading-[2.5rem] lg:leading-[3rem] tracking-wide lg:tracking-wider py-4">
              {props.text}
            </div>
            <div className="z-10 tracking-wide sm:w-full sm:text-left font-light text-sm md:text-base">
              {props.from}
            </div>
            <div className="z-10 tracking-wide sm:w-full sm:text-left font-light text-sm md:text-base">
              {props.job}
            </div>
            <Link
              to="/volunteer-form"
              className={props.btn ? "btn mt-2 z-10 cursor-pointer" : "hidden"}
            >
              Volunteer with Us!
            </Link>
          </div>
        </div>
        <QuoteImg image={props.image} invert={props.invert} />
      </div>
    </div>
  );
}
