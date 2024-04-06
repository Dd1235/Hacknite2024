import React from "react";
import HeadingRow from "../components/HeadingRow";
import line from "../resources/line.png";
import drkline from "../resources/drkline.png";
import Mission from "../components/Mission";
import Bullets from "../components/Bullets";
import Gallery from "../components/Gallery";
import SmallHeading from "../components/SmallHeading";
import ThreePara from "../components/ThreePara";
import useScrollAnimation from "../components/useScrollAnimation";

export default function Projects(props) {
  const { ref: involveRef, isVisible: isInvolveVisible } = useScrollAnimation();
  const { ref: projectRef, isVisible: isProjectVisible } = useScrollAnimation();

  return (
    <div className="dark:dark-bg">
      <Gallery />
      <img
        src={props.isDarkMode ? drkline : line}
        className="bg-amber-800 h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
        alt=""
      ></img>
      <div className="h-[5vh] flex ">
        <img
          src="https://i.pinimg.com/564x/54/42/df/5442df1c5503a20b46b7ab5e7a80aeec.jpg"
          alt=""
          className="absolute -z-[1] w-20 sm:w-24 md:w-32 lg:w-44 ml-2 sm:ml-8"
        />
      </div>
      <div
        ref={projectRef}
        className={`fade-in-component ${isProjectVisible ? "visible" : ""}`}
      >
        <HeadingRow
          title="Projects"
          text="You can support our projects by volunteering your time, donating to our cause, or partnering with us. Together, we can make a difference in the lives of individuals and communities in rural India."
          isDarkMode={props.isDarkMode}
        />
      </div>
      <div className="h-[5vh] relative flex justify-end">
        <img
          src="https://i.pinimg.com/564x/04/14/36/041436d58510f46d972414d3d2109c74.jpg"
          alt=""
          className="absolute -z-[1] -top-14 sm:-top-16 md:-top-24 lg:-top-32 w-24 sm:w-28 md:w-36 lg:w-44 mr-8"
        />
      </div>
      <img
        src={props.isDarkMode ? drkline : line}
        className="bg-amber-800 h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
        alt=""
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
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
        alt=""
      ></img>
      <div className="h-[10vh] flex justify-center relative">
        <img
          src="https://i.pinimg.com/564x/50/2e/e3/502ee362c57841b0c1cb3d20483d9d1d.jpg"
          className="absolute -z-[1] h-20 top-10 md:h-24 md:top-10 dark:hidden"
          alt=""
        />
      </div>
      <SmallHeading text="Upcoming Events" />
      <ThreePara
        title1="BookWise Campaign Program"
        text1="Join us for a literacy drive in Jhunjhunu, where we will be distributing books and educational materials to children in need. Volunteers are welcome!"
        date1="- April 15, 2024"
        title2="Teacher Training Workshop"
        text2="Our next teacher training workshop will focus on innovative teaching methods for rural schools. Educators and school administrators are encouraged to attend."
        date2="- May 5, 2024"
        title3="Digital Learning Center Inauguration"
        text3="We are excited to inaugurate a new digital learning center in Kathmandu, providing access to computers and the internet for students in rural communities."
        date3="- June 10, 2024"
        isDarkMode={props.isDarkMode}
      />
      <img
        src={props.isDarkMode ? drkline : line}
        className="grey-bg h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px] dark:lgtgrey-bg"
        alt=""
      ></img>
      <div className="h-[10vh] flex">
        <img
          src="https://i.pinimg.com/564x/ae/82/31/ae82314951534e7e027d67bdf5e8a31f.jpg"
          alt=""
          className="absolute -z-[1] w-20 sm:w-24 md:w-32 lg:w-44 ml-2 sm:ml-8 brightness-110"
        />
      </div>
      <div
        ref={involveRef}
        className={`fade-in-component ${isInvolveVisible ? "visible" : ""}`}
      >
        <Mission
          title="Get Involved"
          text="You can support our projects by volunteering your time, donating to our cause, or partnering with us. Together, we can make a difference in the lives of individuals and communities in rural India."
          btn={true}
          btnText="Join us"
          link="/get-involved"
        />
      </div>
      <div className="h-[5vh] relative flex justify-end">
        <img
          src="https://i.pinimg.com/564x/80/7e/f3/807ef3c93dfca755772176fcd0f78a33.jpg"
          alt=""
          className="absolute -z-[1] -top-14 sm:-top-16 md:-top-24 lg:-top-32 w-20 sm:w-20 md:w-28 lg:w-36 mr-8"
        />
      </div>
    </div>
  );
}
