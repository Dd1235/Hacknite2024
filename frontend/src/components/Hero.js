import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Hero(props) {
  return (
    <div className="block relative h-screen">
      <div className="z-0 w-full h-full absolute flex items-start justify-center overflow-hidden">
        <img
          className="max-h-[163%] w-auto max-w-none brightness-75 dark:brightness-50"
          src={props.image}
          style={{ aspectRatio: 626 / 417 }}
        />
      </div>
      <div className="z-10 relative h-full pt-12 w-full flex flex-col justify-center items-center box-border sm:h-full lg:w-[65vw] lg:ml-[26vw] lg:pl-48">
        <h1 className="playfair transform-scale text-white font-bold text-center w-[90vw] text-4xl sm:w-[80vw] sm:text-6xl lg:w-full lg:text-7xl lg:text-right">
          {props.title}
        </h1>
        <p className="sanspro mt-4 text-white font-semibold text-center w-[80vw] text-sm sm:text-base lg:text-lg lg:pl-10 lg:w-full lg:text-right">
          {props.text}
        </p>
        <div className="sanspro flex gap-4 w-full my-6 justify-center lg:justify-end lg:gap-6">
          <Link to="/donate-form" className="btn">
            {props.bttnText1}
          </Link>
          <Link to="/volunteer-form" className="btn">
            {props.bttnText2}
          </Link>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  bttnText1: PropTypes.string,
  bttnText2: PropTypes.string,
};

Hero.defaultProps = {
  image: "https://wallpapercave.com/wp/wp5485154.jpg",
  title: "Enter text here. This is the hero page",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatibus repudiandae commodi consequatur itaque cum id, inventore reprehenderit ea labore. Vitae inventore laboriosam similique quisquam molestiae nobis ab, voluptates alias?",
  bttnText1: "Button-1",
  bttnText2: "Button-2",
};
