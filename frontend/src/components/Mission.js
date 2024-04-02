import React from "react";
import { Link } from "react-router-dom";

export default function Mission(props) {
  return (
    <div className="black-text flex flex-col items-center justify-center h-fit py-5 lg:py-10 dark:white-text">
      <div className="sanspro uppercase font-semibold tracking-wide text-xs md:text-sm lg:text-base">
        {props.title}
      </div>
      <div className="sanspro text-base text-center tracking-wide w-[90%] sm:text-xl md:text-2xl lg:w-9/12 lg:leading-[3.3rem] lg:text-4xl">
        {props.text}
      </div>
      <Link
        to={props.link}
        className={
          props.btn
            ? "btn mt-2 cursor-pointer hover:mint-2-bg hover:white-text"
            : "btn mt-2 cursor-pointer hover:mint-2-bg hover:white-text hidden"
        }
      >
        {props.btnText}
      </Link>
    </div>
  );
}
