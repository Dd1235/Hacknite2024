import React, { props } from "react";
import HeadingRow from "../components/HeadingRow";
import line from "../resources/line.png";
import drkline from "../resources/drkline.png";
import Mission from "../components/Mission";
import Bullets from "../components/Bullets";
import Gallery from "../components/Gallery";

export default function Projects(props) {
  return (
    <div className="dark:dark-bg">
      <Gallery />
      <img
        src={props.isDarkMode ? drkline : line}
        className="bg-amber-800 h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
      ></img>
      <HeadingRow
        title="Projects"
        text="You can support our projects by volunteering your time, donating to our cause, or partnering with us. Together, we can make a difference in the lives of individuals and communities in rural India."
        isDarkMode={props.isDarkMode}
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="bg-amber-800 h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
      ></img>
      <div className="h-[10vh]"></div>
      <Bullets
        mainTitle="Our Projects"
        title1="Literacy Program"
        text1="Our literacy program aims to improve literacy rates in rural communities by providing access to quality education and resources. Through this program, we have established learning centers, trained teachers, and distributed educational materials to thousands of students."
        title2="TEACHER TRAINING INITIATIVE"
        text2="Our teacher training initiative focuses on enhancing the skills and knowledge of teachers in rural areas. We conduct workshops, seminars, and training sessions to equip teachers with effective teaching techniques and strategies"
        title3="DIGITAL LEARNING CENTERS"
        text3="Our digital learning centers provide access to computers and the internet for students in rural communities. These centers offer online educational resources, computer literacy classes, and digital skills training."
        title4="SCHOLARSHIP PROGRAM"
        text4="Our scholarship program supports talented students from low-income families to pursue higher education. We provide financial assistance, mentorship, and career guidance to help these students achieve their academic and career goals."
        title5="Community Development Projects"
        text5="In addition to education-focused projects, we also undertake community development projects to improve infrastructure, healthcare, and sanitation in rural villages. These projects aim to enhance the overall quality of life for community members."
      />
      <div className="h-[10vh]"></div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
      ></img>
      <Mission
        title="Get Involved"
        text="You can support our projects by volunteering your time, donating to our cause, or partnering with us. Together, we can make a difference in the lives of individuals and communities in rural India."
        btn={true}
        btnText="Join us"
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
      ></img>
      <div className="h-[10vh]"></div>
    </div>
  );
}
