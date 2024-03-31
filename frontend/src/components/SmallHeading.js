import React, { props } from "react";

export default function SmallHeading(props) {
  return (
    <div className="black-text dark:white-text transform-scale flex items-end justify-center">
      <div className="sanspro w-4/5 text-center text-base md:text-lg lg:text-xl uppercase font-semibold">
        {props.text}
      </div>
    </div>
  );
}
