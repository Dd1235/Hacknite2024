import React from "react";
import HeadingRow from "../components/HeadingRow";
import TextRow from "../components/TextRow";
import line from "../resources/line.png";
import drkline from "../resources/drkline.png";
import Mission from "../components/Mission";
import Team from "../components/Team";
import Quote from "../components/Quote";
import SmallHeading from "../components/SmallHeading";
import ThreePara from "../components/ThreePara";
import useScrollAnimation from "../components/useScrollAnimation";

export default function MeetOurTeam(props) {
  const { ref: teamRef, isVisible: isTeamVisible } = useScrollAnimation();

  return (
    <div className="dark:dark-bg">
      <div className="overflow-hidden relative">
        <svg className="w-full absolute" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="bg_pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="40"
                cy="50"
                r="10"
                fill={props.isDarkMode ? "#5eceba" : "#d0fff6"}
                opacity="1"
              ></circle>
              <circle
                cx="60"
                cy="50"
                r="10"
                fill={props.isDarkMode ? "#5eceba" : "#d0fff6"}
                opacity="1"
              ></circle>{" "}
              <circle
                cx="50"
                cy="40"
                r="10"
                fill={props.isDarkMode ? "#5eceba" : "#d0fff6"}
                opacity="1"
              ></circle>
              <circle
                cx="50"
                cy="60"
                r="10"
                fill={props.isDarkMode ? "#5eceba" : "#d0fff6"}
                opacity="1"
              ></circle>{" "}
              <circle
                cx="50"
                cy="50"
                r="5"
                fill={props.isDarkMode ? "#17433e" : "#6ae1cc"}
                opacity="1"
              ></circle>{" "}
              <circle
                cx="8"
                cy="8"
                r="10"
                fill={props.isDarkMode ? "#5eceba" : "#d0fff6"}
                opacity="1"
              ></circle>{" "}
              <circle
                cx="92"
                cy="8"
                r="10"
                fill={props.isDarkMode ? "#5eceba" : "#d0fff6"}
                opacity="1"
              ></circle>{" "}
              <circle
                cx="8"
                cy="92"
                r="10"
                fill={props.isDarkMode ? "#5eceba" : "#d0fff6"}
                opacity="1"
              ></circle>
              <circle
                cx="92"
                cy="92"
                r="10"
                fill={props.isDarkMode ? "#5eceba" : "#d0fff6"}
                opacity="1"
              ></circle>{" "}
              <circle
                cx="0"
                cy="0"
                r="5"
                fill={props.isDarkMode ? "#17433e" : "#6ae1cc"}
                opacity="1"
              ></circle>{" "}
              <circle
                cx="100"
                cy="0"
                r="5"
                fill={props.isDarkMode ? "#17433e" : "#6ae1cc"}
                opacity="1"
              ></circle>{" "}
              <circle
                cx="0"
                cy="100"
                r="5"
                fill={props.isDarkMode ? "#17433e" : "#6ae1cc"}
                opacity="1"
              ></circle>
              <circle
                cx="100"
                cy="100"
                r="5"
                fill={props.isDarkMode ? "#17433e" : "#6ae1cc"}
                opacity="1"
              ></circle>
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={props.isDarkMode ? "#121212" : "#ffffff"}
            opacity="1"
          ></rect>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#bg_pattern)"
            opacity="1"
          ></rect>
        </svg>
        <div className="h-10 sm:h-[10vh]"></div>
        <HeadingRow
          title="Meet Our Team"
          text="Meet the passionate individuals behind EduReach India Foundation who are dedicated to making a difference in the lives of others."
          isDarkMode={props.isDarkMode}
        />
        <div className="sm:h-[10vh]"></div>
      </div>

      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
        alt=""
      ></img>
      <TextRow
        text="Our team is made up of dedicated individuals who are passionate about education and community development. From our volunteers on the ground to our board members and advisors, everyone at EduReach India Foundation is committed to making a difference."
        bg={props.isDarkMode ? "drkgrey-bg" : "grey-bg"}
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
        alt=""
      ></img>
      <div className="h-[10vh]"></div>
      <Quote
        image="https://imgs.search.brave.com/EKLXhhnU_TaoEFBVmIDqi4iu8HC_XSBU0__naZ_Tc5I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzcxL0xhbmFfRGVs/X1JleV9DYW5uZXNf/MjAxMi5qcGc"
        title="Lana Del Rey, Founder & CEO"
        text="Acclaimed singer-songwriter and our CEO, leads our foundation with a vision to empower individuals through art and music education, inspiring creativity and fostering talent to create a more expressive world."
        invert={false}
        isDarkMode={props.isDarkMode}
      />
      <div className="h-[20vh] sm:h-[10vh]"></div>
      <Quote
        image="https://imgs.search.brave.com/WqmF7jxIJar0M0FYmHDKi-lf1BcSYM4_D6-ffXrMU8A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZiL2Jj/LzFjL2ZiYmMxY2M3/NzlkY2E1NTA4NzBm/MDUzOWVmY2UzZDhh/LmpwZw"
        title="Fawad Khan, Educational Director"
        text="With a background in acting, Fawad is committed to enhancing educational opportunities for individuals in rural communities across India. He oversees the development and implementation of our educational programs"
        invert={true}
        isDarkMode={props.isDarkMode}
      />
      <div className="h-[10vh]" id="OurTeam"></div>
      <SmallHeading text="And Finally meet the web dev team" />
      <Team />
      <div className="h-[10vh]"></div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-3-bg"
        alt=""
      ></img>
      <div
        ref={teamRef}
        className={`fade-in-component ${isTeamVisible ? "visible" : ""}`}
      >
        <Mission
          title="Join our Team"
          text="Interested in joining our team and making a difference in rural communities across India? Check out our current job openings and volunteer opportunities."
          btn={true}
          isDarkMode={props.isDarkMode}
          btnText="Volunteer with us!"
          link="/volunteer-form"
        />
      </div>
      <div className="relative flex justify-end">
        <img
          src="https://i.pinimg.com/564x/9b/5a/20/9b5a20ef51fbac452b07f22dbdaa3e11.jpg"
          className="absolute -z-[1] w-24 -top-20 md:w-32 md:-top-28 lg:w-56 lg:-top-52 brightness-110"
          alt=""
        />
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-3-bg"
        alt=""
      ></img>
      <ThreePara
        title1="Volunteer"
        title2="Donate"
        title3="Partner"
        text1="As a volunteer, you'll have the opportunity to work alongside our dedicated team and community members, gaining valuable experience and making lifelong connections."
        text2="We rely on the generosity of donors like you to continue our work and make a positive impact in rural communities."
        text3="By partnering with EduReach India Foundation, you'll have the opportunity to align your brand with a reputable nonprofit organization."
      />
      <div className="md:h-[10vh] flex justify-evenly"></div>
    </div>
  );
}
