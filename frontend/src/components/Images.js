import React from "react";
import PropTypes from "prop-types";

export default function Images(props) {
  return (
    <div className="sanspro overflow-hidden flex items-center justify-center h-[80vh] flex-col gap-7 sm:h-[90vh] md:flex-row md:h-[50vh] md:gap-10 lg:h-[60vh]">
      <div className="images rounded-lg relative overflow-hidden flex items-center justify-center transform-scale h-[35%] w-4/5 md:h-3/5 md:w-2/5">
        <img
          src={props.image1}
          alt="A beautiful scenery"
          className="rounded-lg w-auto max-h-[155%] max-w-none absolute dark:brightness-75"
          style={{ aspectRatio: props.AR1 }}
        />
        <div className="images-text z-[1] flex-col text-center text-white items-center justify-center hidden">
          <p className="add-shadow z-[1] font-bold text-2xl sm:text-3xl">
            {props.title1}
          </p>
          <p className="text-xs w-3/4 pt-2 sm:text-sm lg:text-base">
            {props.text1}
          </p>
        </div>
      </div>
      <div className="images rounded-lg relative overflow-hidden flex items-center justify-center transform-scale h-[35%] w-4/5 md:h-3/5 md:w-2/5">
        <img
          src={props.image2}
          alt="A beautiful scenery"
          className="rounded-lg w-auto max-h-[140%] max-w-none absolute dark:brightness-75"
          style={{ aspectRatio: props.AR2 }}
        />
        <div className="images-text z-[1] flex-col text-center text-white items-center justify-center hidden">
          <p className="add-shadow z-[1] font-bold text-2xl sm:text-3xl">
            {props.title2}
          </p>
          <p className="text-xs w-3/4 pt-2 sm:text-sm lg:text-base">
            {props.text2}
          </p>
        </div>
      </div>
    </div>
  );
}

Images.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

Images.defaultProps = {
  image: "https://wallpapercave.com/wp/wp5485154.jpg",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias natus doloribus facere tenetur recusandae perferendis.",
  title: "Title",
};
