import React from "react";
import FullImgPara from "../components/FullImgPara";
import Hero from "../components/Hero";
import Images from "../components/Images";
import ParaRow from "../components/ParaRow";
import TextRow from "../components/TextRow";
import line from "../resources/line.png";
import drkline from "../resources/drkline.png";
import Mission from "../components/Mission";
import CompanyTrust from "../components/CompanyTrust";
import useScrollAnimation from "../components/useScrollAnimation";
import DonorShoutout from "../components/DonorShoutout";
import NewsletterSignup from "../components/NewsletterSignup";

export default function Homepage(props) {
  const { ref: missionRef, isVisible: isMissionVisible } = useScrollAnimation();
  const { ref: mission2Ref, isVisible: isMission2Visible } =
    useScrollAnimation();

  return (
    <div className="dark:dark-bg">
      <Hero
        title="Welcome to EduReach India Foundation"
        text="At EduReach India Foundation, we believe that education is the key to unlocking a brighter future. We are a nonprofit organization dedicated to eradicating illiteracy and providing quality education to rural communities across India."
        bttnText1="Donate Now!"
        bttnText2="Volunteer with us!"
        image="https://media.gettyimages.com/id/1286549098/photo/indian-village-girl-operating-laptop-computer-system-seating-at-home-corridor.jpg?s=2048x2048&w=gi&k=20&c=0fhFyA8s6cAxQsn2Aabdk_5LUbTzXVIwWolzuaiScpQ="
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
        style={{ backgroundColor: "#BF735A" }}
        alt="line"
        id="OurMission"
      ></img>
      <div className="h-[10vh] flex justify-start">
        <img
          src="https://cdn.dribbble.com/users/4281/screenshots/1523012/media/0673c6f8b4e00a30cfa5423eca6b5be2.png"
          className="absolute -z-[1] w-32 md:w-40 lg:w-60 dark:hidden"
          alt="doodle"
        />
      </div>
      <div
        ref={missionRef}
        className={`fade-in-component ${isMissionVisible ? "visible" : ""}`}
      >
        <Mission
          title="Our Mission"
          text="We believe that education is the key to unlocking a brighter future and empowering individuals to build a better life for themselves and their communities"
        />
      </div>
      <div className="h-[10vh] flex justify-end relative">
        <img
          src="https://cdn.dribbble.com/users/4281/screenshots/6797345/tiny_dood.png"
          className="absolute -z-[1] w-40 -top-10 md:w-60 md:-top-20 lg:w-1/5 lg:-top-32"
          alt="doodle"
        />
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
        alt="line"
        id="OurApproach"
      ></img>
      <ParaRow
        title="Our Approach"
        text1="At EduReach India Foundation, we take a holistic approach to education, focusing not only on academic learning but also on life skills, health, and community development."
        text2="Join us in our approach to education and community development. Together, we can create a brighter future for rural communities across India."
        text3="Key Elements of Our Approach"
        text4="• Quality Education: Ensuring access to quality education in rural schools through teacher training and resources."
        text5="• Community Engagement: Engaging with communities to raise awareness and encourage participation in education."
        text6="• Empowerment: Empowering individuals with life skills for personal and community development."
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
        alt="line"
      ></img>
      <Images
        image1="https://imgs.search.brave.com/ELk9d51wvhH5L1CVKHi12rEXNr4pzAEDZIJT-kPs854/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cm9vbXRvcmVhZC5v/cmcvbWVkaWEvczVp/Zmpsc3IvMW5lcGFs/LmpwZz9jcm9wPTAs/MC4wMjgwMzIyNzAw/NDk3OTQzODIsMCww/LjAyNjc2MjI1MDQ5/ODE1MDkzMiZjcm9w/bW9kZT1wZXJjZW50/YWdlJndpZHRoPTcz/MCZoZWlnaHQ9NDYw/JnJuZD0xMzI3NTUx/MjE2NTQ3MzAwMDAm/Zm9ybWF0PXdlYnAm/cXVhbGl0eT04MA"
        AR1="252 / 158"
        image2="https://imgs.search.brave.com/yLmlsmZNDqp5JmRnmnvPqBx9lL96Uirgw6uG16E3dQs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXRl/cmFjeWluZGlhLm9y/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMi9PVVItVklT/SU9OLmpwZw"
        AR2="252 / 147"
        title1=""
        text1="Education is a journey filled with joy and discovery. At EduReach, we believe that every child deserves the opportunity to learn, grow, and laugh together."
        title2=""
        text2="Our vision at EduReach India Foundation is to empower rural children to pursue their dreams fearlessly. Through our programs, we aim to break barriers and stereotypes, opening doors to diverse fields like science."
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-2-bg"
        alt=""
      ></img>
      <div className="h-[10vh] flex">
        <img
          src="https://i.pinimg.com/564x/42/ab/ac/42abac19815b7c25ff405e549e5358f7.jpg"
          className="absolute -z-[1] w-32 lg:w-44 ml-8"
          alt=""
        />
      </div>
      <div
        ref={mission2Ref}
        className={`fade-in-component ${isMission2Visible ? "visible" : ""}`}
      >
        <TextRow text="Together, we can make a difference in the lives of thousands of children and adults in rural India. Join us in our mission to build a brighter future through education." />
      </div>
      <div className="h-[10vh] flex justify-end relative">
        {" "}
        <img
          src="https://i.pinimg.com/564x/fd/5e/96/fd5e96e50aa1591acc56274935c2fc5d.jpg"
          className="absolute -z-[1] -top-20 w-40 lg:w-44 mr-8"
          alt=""
        />
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="mint-1-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-2-bg"
        alt=""
        id="OurImpact"
      ></img>
      <FullImgPara
        title="Our Impact"
        AR="363 / 181"
        image="https://images.yourstory.com/cs/5/98c65090592f11ea9f62339ce853ca75/Image0ch0-1584983422706.jpg?mode=crop&crop=faces&ar=2:1?width=1200&q=75"
        text1="Since our inception, we have reached over 100 villages and impacted the lives of more than 10,000 individuals. Our programs have led to a significant increase in literacy rates and educational attainment in the communities we serve."
        text2=""
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="mint-1-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-2-bg"
        alt=""
      ></img>
      <CompanyTrust />
      <img
        src={props.isDarkMode ? drkline : line}
        className="mint-1-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-2-bg"
        alt=""
      ></img>
      {/* <div className="sanspro black-text dark:white-text h-[50vh] mint-1-bg dark:mint-3-bg flex flex-col gap-5 items-center justify-center">
        <div className="uppercase text-sm sm:text-base font-semibold">
          Stay Involved
        </div>
        <div className="w-4/5 text-center font-bold text-4xl sm:text-5xl playfair tracking-wide">
          Never miss a chance to help
        </div>
        <form className="w-4/5 mt-3 sm:w-3/5 lg:w-2/5 flex items-center">
          <input
            type="email"
            className="text-sm sm:text-base black-text h-12 w-4/5 rounded-l-full px-5"
            placeholder="Subscrible for email updates"
          />
          <input
            type="submit"
            className="h-12 text-sm sm:text-base w-1/5 rounded-r-full border-4 mint-2-border dark:border-white dark:white-text dark:hover:mint-3-text font-semibold mint-2-text hover:white-bg cursor-pointer"
          />
        </form>
      </div> */}
      <NewsletterSignup />
      <img
        src={props.isDarkMode ? drkline : line}
        className="mint-1-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-2-bg"
        alt=""
      ></img>
      <DonorShoutout />
    </div>
  );
}
