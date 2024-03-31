import React from "react";
import PropTypes from "prop-types";

function Image(props) {
  if (props.invert) {
    return (
      <div className="overflow-hidden flex items-center justify-center h-[46%] w-[90%] sm:w-4/5 md:h-full md:w-1/2">
        <img
          src={props.image}
          alt="A beautiful scenery"
          className="max-h-[130%] w-auto max-w-none"
          style={{ aspectRatio: props.AR }}
        />
      </div>
    );
  } else {
    return <></>;
  }
}

export default function FullImgPara(props) {
  return (
    <div
      className={
        props.invert
          ? "overflow-hidden mint-1-bg dark:mint-3-bg black-text flex items-center justify-center h-[80vh] flex-col gap-7 sm:h-[90vh] md:justify-end md:h-[40vh] md:flex-row lg:h-[50vh]"
          : "overflow-hidden mint-1-bg dark:mint-3-bg black-text dark:white-text flex items-center justify-center h-[80vh] flex-col gap-7 sm:h-[90vh] md:justify-start md:h-[40vh] md:flex-row lg:h-[50vh]"
      }
    >
      <Image invert={!props.invert} image={props.image} />
      <div className="sanspro text-center w-[90%] sm:text-justify sm:w-4/5 md:w-2/5">
        <div className="playfair font-bold w-full text-2xl sm:text-3xl md:text-3xl lg:text-5xl">
          {props.title}
        </div>
        <div className="text-sm pt-4 sm:text-base lg:text-lg md:w-full">
          {props.text1}
        </div>
        <div className="text-xs pt-4 sm:text-sm lg:text-base md:w-full">
          {props.text2}
        </div>
      </div>
      <Image invert={props.invert} image={props.image} />
    </div>
  );
}

FullImgPara.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  invert: PropTypes.bool,
};

FullImgPara.defaultProps = {
  image: "https://wallpapercave.com/wp/wp5485154.jpg",
  title: "Enter text here.",
  text1:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatibus repudiandae commodi consequatur itaque cum id, inventore reprehenderit ea labore. Vitae inventore laboriosam similique quisquam molestiae nobis ab, voluptates alias?",
  text2:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi eius quis culpa, aut quae eum.",
  invert: false,
};
