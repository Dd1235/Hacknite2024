import React from "react";
import HeadingRow from "../components/HeadingRow";
import line from "../resources/line.png";
import drkline from "../resources/drkline.png";
import Quote from "../components/Quote";
import FromCards from "../components/FromCards";
import Mission from "../components/Mission";
import VolunteerPartnerChart from "../charts/VolunteerPartnerChart";

export default function GetInvolved(props) {
  return (
    <div className="dark:dark-bg">
      <div className="flex flex-col items-center justify-end overflow-hidden">
        <div className="h-[15vh]"></div>
        <svg
          className="absolute h-[100%] max-w-none w-auto self-end"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="1440"
          height="560"
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
        >
          <g mask='url("#SvgjsMask1010")' fill="none">
            <path
              d="M1464 560L0 560 L0 357.78Q42.8 280.58, 120 323.38Q187.93 271.31, 240 339.23Q281.15 260.38, 360 301.53Q451.54 273.06, 480 364.6Q518.88 283.49, 600 322.37Q645.84 248.21, 720 294.04Q778.28 280.33, 792 338.61Q868.13 294.74, 912 370.87Q943.14 282.01, 1032 313.15Q1113 274.15, 1152 355.15Q1180.29 263.44, 1272 291.73Q1319.49 267.22, 1344 314.71Q1430.99 281.7, 1464 368.69z"
              fill="rgba(32, 98, 90, 1)"
            ></path>
            <path
              d="M1512 560L0 560 L0 420.33Q8.83 357.16, 72 365.99Q102.7 324.69, 144 355.39Q234.46 325.85, 264 416.31Q334.44 366.75, 384 437.19Q413.56 346.75, 504 376.3Q530.8 331.1, 576 357.89Q677.15 339.04, 696 440.2Q737.44 361.64, 816 403.09Q881.63 348.73, 936 414.36Q960.33 366.69, 1008 391.01Q1094.74 357.75, 1128 444.49Q1131.28 375.77, 1200 379.05Q1247.81 306.86, 1320 354.66Q1378.81 341.47, 1392 400.27Q1442.73 331, 1512 381.74z"
              fill="rgba(65, 208, 183, 1)"
            ></path>
            <path
              d="M1536 560L0 560 L0 432.49Q78.69 391.19, 120 469.88Q144.86 422.74, 192 447.59Q280.39 415.98, 312 504.36Q324.91 445.27, 384 458.19Q413.8 415.99, 456 445.78Q549.26 419.04, 576 512.31Q590.11 406.41, 696 420.52Q768.58 373.1, 816 445.68Q862.42 420.11, 888 466.53Q905.24 411.76, 960 429Q1008.91 405.91, 1032 454.83Q1088.65 439.49, 1104 496.14Q1174.79 446.93, 1224 517.72Q1243.5 417.22, 1344 436.72Q1389.59 410.31, 1416 455.9Q1505.11 425, 1536 514.11z"
              fill="rgba(192, 245, 235, 1)"
            ></path>
            <path
              d="M1560 560L0 560 L0 574.33Q62.19 516.52, 120 578.7Q137.32 524.02, 192 541.34Q234.97 464.31, 312 507.28Q357.22 480.5, 384 525.71Q426.36 496.07, 456 538.42Q500.05 462.47, 576 506.52Q662.44 472.96, 696 559.41Q743.3 486.71, 816 534.01Q857.28 455.29, 936 496.58Q1008.75 449.33, 1056 522.07Q1139.49 485.56, 1176 569.05Q1198.57 519.62, 1248 542.18Q1268.04 490.21, 1320 510.25Q1372.93 443.19, 1440 496.12Q1515.39 451.51, 1560 526.91z"
              fill={props.isDarkMode ? "#121212" : "white"}
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1010">
              <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
        <HeadingRow title="Join the cause" text="" idk={true} />
        <div className="h-[15vh]"></div>
      </div>
      <div className="h-[15vh]"></div>
      <Quote
        image="https://imgs.search.brave.com/k_UPbMp0MtO2x1EPCmMn3k-y4T5BOQxNgYl0tO8G7Tg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkxL2Fi/Lzg0LzkxYWI4NDlm/NWVlMTEzNmU4ODBj/ZjZiZjYxMGY0ZTdj/LmpwZw"
        title="Helping Hearts"
        text='"I am the kinda guy to look forward to volunteer at EduReach foundation every week. It is a special time for me because I know what I am doing helps makes a difference and is truly appreciated."'
        from="Drake"
        job="EduReach Volunteer"
        isDarkMode={props.isDarkMode}
        btn={true}
        invert={true}
      />
      <div className="h-[15vh]"></div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="mint-2-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
        alt="line"
        id="OurPartnerships"
      ></img>
      <div className="h-[70vh] py-10 sanspro black-text dark:white-text lg:px-20">
        <div className="text-base sm:text-lg uppercase font-semibold text-center sanspro">
          Active Volunteers and Partners over the Years
        </div>
        <VolunteerPartnerChart />
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="mint-2-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
        alt="line"
        id="OurTeam"
      ></img>
      <Mission title="Stay Involved" text="Never miss a chance to help" />
      <FromCards />
    </div>
  );
}
