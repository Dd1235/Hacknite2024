import React from "react";

const DogIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.5 47.5"
      id="dog"
      className="h-10 w-10"
    >
      <defs>
        <clipPath id="a">
          <path d="M0 38h38V0H0v38Z"></path>
        </clipPath>
      </defs>
      <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path fill="#dd2e44" d="M16 7V4s0-3 3-3 3 3 3 3v3h-6Z"></path>
        <path
          fill="#272b2b"
          d="M15 35c.041 3-14 2-14-8 0-4 0-14 3-14 4 0 10.945 18 11 22M23 35c-.041 3 14 2 14-8 0-4 0-14-3-14-4 0-10.945 18-11 22"
        ></path>
        <path
          fill="#ccd6dd"
          d="M32 15c0-7-4-7-4-7H10s-4 0-4 7c0 0 1 22 13 22s13-22 13-22"
        ></path>
        <path
          fill="#8899a6"
          d="M24 14.975V15H14v-.025a5.499 5.499 0 1 1 5-8.631A5.49 5.49 0 0 1 23.5 4a5.5 5.5 0 0 1 .5 10.975"
        ></path>
        <path
          fill="#272b2b"
          d="M12 21s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM22 21s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM16 13c-1-1 2-4 3-4s4 3 3 4-5 1-6 0"
        ></path>
      </g>
    </svg>
  );
};

export default DogIcon;