import React from "react";
import PropTypes from "prop-types";

export default function HeadingRow(props) {
  return (
    <div className="sanspro z-10 relative flex items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center h-fit w-[90%] py-10 md:py-16 lg:h-fit lg:py-20">
        <p
          className={
            props.idk || props.isDarkMode
              ? "playfair mint-1-text font-extrabold text-center add-shadow w-full transform-scale text-4xl sm:text-8xl md:text-8xl lg:text-[8rem]"
              : "bg-title w-full transform-scale text-4xl sm:text-8xl md:text-8xl lg:text-[8rem]"
          }
        >
          {props.title}
        </p>
        <p className="w-full black-text dark:white-text text-center text-sm sm:text-base lg:text-lg">
          {props.text}
        </p>
      </div>
    </div>
  );
}

HeadingRow.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

HeadingRow.defaultProps = {
  title: "Title.",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo expedita eum laudantium, quibusdam explicabo.",
};
