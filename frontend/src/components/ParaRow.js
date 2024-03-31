import React from "react";
import PropTypes from "prop-types";

export default function ParaRow(props) {
  return (
    <div className="sanspro black-text overflow-hidden grey-bg dark:drkgrey-bg dark:white-text relative flex items-center justify-center h-[80vh] flex-col sm:h-[65vh] md:flex-row md:h-[60vh] md:gap-10">
      <div className="text-center w-[90%] sm:w-4/5 sm:text-justify md:w-2/5">
        <div className="playfair font-bold w-full text-3xl sm:text-3xl md:text-3xl lg:text-5xl">
          {props.title}
        </div>
        <div className="text-sm pt-4 sm:text-base lg:text-lg">
          {props.text1}
        </div>
        <div className="text-sm pt-2 sm:text-base lg:text-lg">
          {props.text2}
        </div>
      </div>
      <div className="text-center w-[90%] sm:w-4/5 sm:text-justify md:w-2/5">
        <div className="text-base font-semibold pt-2 sm:text-lg lg:text-xl">
          {props.text3}
        </div>
        <div className="text-sm pt-2 sm:text-base lg:text-lg">
          {props.text4}
        </div>
        <div className="text-sm pt-2 sm:text-base lg:text-lg">
          {props.text5}
        </div>
        <div className="text-sm pt-2 sm:text-base lg:text-lg">
          {props.text6}
        </div>
      </div>
    </div>
  );
}

ParaRow.propTypes = {
  title: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

ParaRow.defaultProps = {
  title: "Enter text here.",
  text1:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatibus repudiandae commodi consequatur itaque cum id, inventore reprehenderit ea labore. Vitae inventore laboriosam similique quisquam molestiae nobis ab, voluptates alias?",
  text3:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatibus repudiandae commodi consequatur itaque cum id, inventore reprehenderit ea labore. Vitae inventore laboriosam similique quisquam molestiae nobis ab, voluptates alias?",
  text2:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eius quis culpa, aut quae eum.",
  text4:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eius quis culpa, aut quae eum.",
  text5:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eius quis culpa, aut quae eum.",
  text6:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eius quis culpa, aut quae eum.",
};
