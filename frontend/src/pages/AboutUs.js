import React, { props } from "react";
import HeadingRow from "../components/HeadingRow";
import ImgParaRow from "../components/ImgParaRow";
import TextRow from "../components/TextRow";
import line from "../resources/line.png";
import drkline from "../resources/drkline.png";
import Quote from "../components/Quote";
import Mission from "../components/Mission";
import ImpactOverTime from "../charts/ImpactOverTime";
import useScrollAnimation from "../components/useScrollAnimation";

export default function AboutUs(props) {
  const { ref: mottoRef, isVisible: isMottoVisible } = useScrollAnimation();
  return (
    <div className="dark:dark-bg">
      <div className="overflow-hidden relative flex flex-col items-center justify-center">
        <svg
          className="absolute hidden md:block md:-left-1/2 md:top-40 lg:w-4/5 lg:-left-1/4 lg:top-32"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83,59Q68,68,59,75Q50,82,37.5,78.5Q25,75,14.5,62.5Q4,50,12,35Q20,20,35,13.5Q50,7,58,20.5Q66,34,82,42Q98,50,83,59Z"
            stroke="none"
            fill={props.isDarkMode ? "#4284ca" : "#95cbf5"}
          ></path>
          <path
            d="M83,59Q68,68,59,75Q50,82,37.5,78.5Q25,75,14.5,62.5Q4,50,12,35Q20,20,35,13.5Q50,7,58,20.5Q66,34,82,42Q98,50,83,59Z"
            transform="translate(3.77 -3.04)"
            stroke={props.isDarkMode ? "#19355b" : "#6387a3"}
            strokeWidth="1"
            fill="none"
          ></path>
        </svg>

        <svg
          className="absolute w-[90%] opacity-50 md:opacity-100 md:left-[60%] md:-top-40 lg:w-4/5 lg:left-1/2 md: lg:-top-[550px]"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M82,65Q86,80,70,75Q54,70,43,75.5Q32,81,20,73Q8,65,7,49.5Q6,34,23,33Q40,32,48.5,20Q57,8,67,17.5Q77,27,77.5,38.5Q78,50,82,65Z"
            stroke="none"
            fill={props.isDarkMode ? "#4284ca" : "#95cbf5"}
          ></path>
          <path
            d="M82,65Q86,80,70,75Q54,70,43,75.5Q32,81,20,73Q8,65,7,49.5Q6,34,23,33Q40,32,48.5,20Q57,8,67,17.5Q77,27,77.5,38.5Q78,50,82,65Z"
            transform="translate(-0.45 4.81)"
            stroke={props.isDarkMode ? "#19355b" : "#6387a3"}
            strokeWidth="1"
            fill="none"
          ></path>
        </svg>
        <div className="h-[10vh] lg:h-[15vh]"></div>
        <HeadingRow
          title="About us"
          text="EduReach India Foundation is a nonprofit organization dedicated to eradicating illiteracy and promoting education in rural communities across India. Our mission is to empower individuals through education, providing them with the tools and resources they need to build a better future for themselves and their communities."
          isDarkMode={props.isDarkMode}
        />
        <div className="h-[10vh] lg::h-[15vh]"></div>
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:drkgrey-bg"
      ></img>
      {/* <div className="h-[5vh]"></div> */}
      <div className="h-[10vh] flex justify-start">
        <img
          src="https://i.pinimg.com/564x/54/8a/69/548a698bc60f033c7eb78e65a076f70e.jpg"
          className="absolute -z-[1] w-24 md:w-28 ml-6 lg:ml-10 lg:w-40 dark:hidden"
        />
      </div>
      <div
        ref={mottoRef}
        className={`fade-in-component ${isMottoVisible ? "visible" : ""}`}
      >
        <Mission
          title="Our Motto"
          text='"Empowering Minds and Transforming Communities"'
        />
      </div>
      <div className="h-[10vh] flex justify-end relative">
        <img
          src="https://i.pinimg.com/564x/28/83/a8/2883a84d0e22adf825e7602eb333cf22.jpg"
          className="absolute -z-[1] w-40 -top-14 md:w-52 md:-top-20 lg:w-64 lg:-top-32"
        />
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
      ></img>
      <ImgParaRow
        image="https://imgs.search.brave.com/fV7ahbabVa5GjaTGPHqldr4VnaqpMLUJSWff_YJ2R-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk2LzU0Lzc3/LzM2MF9GXzQ5NjU0/Nzc0OV9kdmNLcVFp/Z3NFdTdtb0hvNWsx/UDV1QUcydWVSY3dW/aS5qcGc"
        AR="503 / 327"
        title="Our Story"
        text1="EduReach India Foundation was founded in 2005 by a group of passionate individuals. Inspired by the desire to make a positive impact in rural India, they set out to address the issue of illiteracy and lack of educational opportunities in underserved communities."
        text2=""
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
      ></img>
      <div className="h-[70vh] py-10 sanspro black-text dark:white-text lg:px-20">
        <div className="text-base sm:text-lg uppercase font-semibold text-center sanspro">
          Our Impact Over Time
        </div>
        <ImpactOverTime />
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-3-bg"
      ></img>
      <div className="h-[20vh]"></div>
      <Quote
        image="https://imgs.search.brave.com/4Odo8bsdjMnVGtyN6LGJ-62KwK-eqVzZDtDdNMZ-YUs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FjLzU0/L2Y4L2FjNTRmODBj/MTY4ZjE0YzkwMDI2/NTQwZWUwM2I4ZDhi/LmpwZw"
        title="Providing Hope"
        text='"Barbz, stay in school. Don’t you ever be lazy, don’t ever complain about hard work. Work hard it pays off"'
        from="Nicki Minaj"
        job="Director of EduReach India"
        isDarkMode={props.isDarkMode}
      />
      <div className="h-[20vh]"></div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="mint-1-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-3-bg"
      ></img>
      <TextRow
        text="With the reader's help, we strive to overcome obstacles and empower rural communities through education, healthcare, and sustainable development"
        bg={props.isDarkMode ? "mint-3-bg" : "mint-1-bg"}
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="mint-1-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-3-bg"
      ></img>
      <div className="h-[20vh]"></div>
    </div>
  );
}

{
  /* <div className="h-[10vh] flex justify-center relative">
        <img
          src="https://i.pinimg.com/564x/50/2e/e3/502ee362c57841b0c1cb3d20483d9d1d.jpg"
          className="absolute -z-[1] h-20 top-10 md:h-24 md:top-10 dark:hidden"
        />
      </div>
      <SmallHeading text="Past Events" />
      <ThreePara
        title1="Healthy Living Initiatives"
        text1="Our health camp offered free medical check-ups and consultations to over 200 individuals in Mohali, promoting health and wellness in the community."
        date1="- March 20, 2024"
        title2="Community Clean-Up Drive "
        text2="Volunteers came together to clean up the streets and public spaces in Vaishakapatnam, promoting environmental awareness and community pride."
        date2="- February 5, 2024"
        title3="Art and Music Workshop"
        text3="Children from local schools participated in a creative workshop, where they learned about art and music, fostering creativity and self-expression."
        date3="- January 15, 2024"
        isDarkMode={props.isDarkMode}
      /> */
}
