import React, { useState, props } from "react";

export default function Accordion(props) {
  const [selected, setSelected] = useState(null);

  const HandleAcc = () => {
    selected ? setSelected(null) : setSelected(1);
  };

  return (
    <div className="z-10 relative black-text dark:white-text sanspro">
      <div
        className={"w-[95%] sm:w-[90%] md:w-4/5 mx-auto rounded-md " + props.bg}
      >
        <ul className="shadow-box">
          <li className="relative">
            <button
              type="button"
              className="w-full px-8 py-6 text-left"
              onClick={HandleAcc}
            >
              <div className="flex items-center justify-between font-semibold">
                <span>{props.title}</span>
                <svg
                  className={
                    selected
                      ? "w-3 h-3 shrink-0"
                      : "w-3 h-3 rotate-180 shrink-0"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </div>
            </button>

            <div
              className={
                selected
                  ? "relative overflow-hidden transition-all duration-700 border-t border-pink-900 dark:border-white max-h-96"
                  : "relative overflow-hidden transition-all duration-700 border-pink-900  dark:border-white max-h-0"
              }
            >
              <div className="p-6">
                <p>{props.text}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
