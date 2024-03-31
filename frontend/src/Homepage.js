import React, { useState, useEffect, props } from "react";
import { Link } from "react-router-dom";
import FullImgPara from "./components/FullImgPara";
import Hero from "./components/Hero";
import Images from "./components/Images";
import ParaRow from "./components/ParaRow";
import TextRow from "./components/TextRow";
import line from "./line.png";
import drkline from "./drkline.png";
import Mission from "./components/Mission";
import CompanyTrust from "./components/CompanyTrust";

export default function Homepage(props) {
  return (
    <div className="dark:dark-bg">
      <Hero
        title="Welcome to EduReach India Foundation"
        text="At EduReach India Foundation, we believe that education is the key to unlocking a brighter future. We are a nonprofit organization dedicated to eradicating illiteracy and providing quality education to rural communities across India."
        bttnText1="Normal mode"
        bttnText2="Death mode"
        image="https://media.gettyimages.com/id/1286549098/photo/indian-village-girl-operating-laptop-computer-system-seating-at-home-corridor.jpg?s=2048x2048&w=gi&k=20&c=0fhFyA8s6cAxQsn2Aabdk_5LUbTzXVIwWolzuaiScpQ="
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
        style={{ backgroundColor: "#BF735A" }}
      ></img>
      <div className="h-[10vh] flex justify-start">
        <img
          src="https://cdn.dribbble.com/users/4281/screenshots/1523012/media/0673c6f8b4e00a30cfa5423eca6b5be2.png"
          className="absolute -z-[1] w-32 md:w-40 lg:w-60 dark:hidden"
        />
      </div>
      <Mission
        title="Our Mission"
        text="We believe that education is the key to unlocking a brighter future and empowering individuals to build a better life for themselves and their communities"
      />
      <div className="h-[10vh] flex justify-end relative">
        <img
          src="https://cdn.dribbble.com/users/4281/screenshots/6797345/tiny_dood.png"
          className="absolute -z-[1] w-40 -top-10 md:w-60 md:-top-20 lg:w-1/5 lg:-top-32"
        />
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
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
      ></img>
      <div className="h-[10vh] flex">
        <img
          src="https://i.pinimg.com/originals/00/49/30/00493024b6a6629e0d0e385defb0fbdf.jpg"
          className="absolute -z-[1] w-32 lg:w-44 ml-8"
        />
      </div>
      <TextRow text="Together, we can make a difference in the lives of thousands of children and adults in rural India. Join us in our mission to build a brighter future through education." />
      <div className="h-[10vh] flex justify-end relative">
        {" "}
        <img
          src="https://i.pinimg.com/564x/a6/6e/89/a66e89ef97eaf8824d8f8822d491659f.jpg"
          className="absolute -z-[1] -top-20 w-40 lg:w-44 mr-8"
        />
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="mint-1-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:mint-2-bg"
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
      ></img>
      <CompanyTrust />
    </div>
  );
}
