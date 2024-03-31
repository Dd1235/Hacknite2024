import React from "react";
import PropTypes from "prop-types";

export default function ImgParaRow(props) {
  return (
    <div className="sanspro overflow-hidden black-text dark:white-text grey-bg dark:drkgrey-bg flex items-center justify-center h-[70vh] flex-col gap-7 sm:h-[80vh] md:h-[40vh] md:gap-10 md:flex-row lg:h-[55vh]">
      <div className="rounded-lg transform-scale overflow-hidden flex items-center justify-center h-[46%] w-[90%] sm:w-4/5 md:h-4/5 md:w-2/5 lg:h-[300px]">
        <img
          src={props.image}
          alt="A beautiful scenery"
          className="max-h-[120%] w-auto max-w-none rounded-lg"
          style={{ aspectRatio: props.AR }}
        />
      </div>
      <div className="text-center w-[90%] sm:text-justify sm:w-4/5 md:w-2/5">
        <div className="playfair font-bold w-full text-3xl sm:text-3xl md:text-3xl lg:text-5xl">
          {props.title}
        </div>
        <div className="text-sm pt-2 sm:text-base lg:text-lg">
          {props.text1}
        </div>
        <div className="text-sm pt-2 sm:text-base lg:text-lg">
          {props.text2}
        </div>
      </div>
    </div>
  );
}

ImgParaRow.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

ImgParaRow.defaultProps = {
  image: "https://wallpapercave.com/wp/wp5485154.jpg",
  title: "Enter text here.",
  text1:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatibus repudiandae commodi consequatur itaque cum id, inventore reprehenderit ea labore. Vitae inventore laboriosam similique quisquam molestiae nobis ab, voluptates alias?",
  text2:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eius quis culpa, aut quae eum.",
};
