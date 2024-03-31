import React from "react";
import PropTypes from "prop-types";

export default function TextRow(props) {
  return (
    <div
      className={
        "flex items-center justify-center h-[30vh] lg:h-[35vh] black-text dark:white-text " +
        props.bg
      }
    >
      <p className="sanspro text-sm text-justify w-10/12 sm:text-lg lg:text-2xl">
        {props.text}
      </p>
    </div>
  );
}

TextRow.propTypes = {
  text: PropTypes.string,
};

TextRow.defaultProps = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci iusto quae sapiente delectus ipsa cum, voluptatum assumenda eius, tenetur, laborum repudiandae perferendis odit corporis voluptates! Nobis minima iste voluptas.",
  bg: "",
};
