import React, { props } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CallToAction(props) {
  return (
    <div className="sanspro block">
      <div className="w-full h-[55vh] font-light overflow-hidden absolute flex items-start justify-center -z-[1]">
        <img
          className="w-auto max-w-none max-h-[122vh] -z-[1] saturate-200 grayscale brightness-50 dark:brightness-75"
          src={props.image}
          style={{ aspectRatio: props.AR }}
        />
      </div>
      <div className="add-shadow w-full h-[55vh] text-white flex flex-col items-center justify-center">
        <div className="playfair transform-scale w-4/5 text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {props.title}
        </div>
        <div className="font-semibold w-4/5 text-center text-base pt-2 sm:text-lg lg:text-xl">
          {props.text}
        </div>
        <Link to="/donate-form" className="btn2 mt-3">
          {props.bttnText}
        </Link>
      </div>
    </div>
  );
}

CallToAction.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  bttnText: PropTypes.string,
};

CallToAction.defaultProps = {
  image: "https://wallpapercave.com/wp/wp5485154.jpg",
  title: "Enter text here.",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eius quis culpa, aut quae eum.",
  bttnText: "Button",
};
