import React from "react";
import HeadingRow from "../components/HeadingRow";
import Accordion from "../components/Accordion";

export default function FAQs(props) {
  return (
    <div className="overflow-hidden relative dark:dark-bg">
      <svg
        className="w-full absolute hidden sm:block opacity-75"
        viewBox="0 0 400 900"
      >
        <defs>
          <pattern
            id="bg_pattern"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="20"
              y="0"
              width="20"
              height="100"
              fill={props.isDarkMode ? "#3ec7ae" : "#c0f5eb"}
            ></rect>{" "}
            <rect
              x="70"
              y="0"
              width="20"
              height="100"
              fill={props.isDarkMode ? "#20625a" : "#89ead9"}
            ></rect>
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={props.isDarkMode ? "#121212" : "#ffffff"}
        ></rect>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#bg_pattern)"
        ></rect>
      </svg>
      <div className="h-[40vh] sm:hidden sm:h-[5vh] flex items-center justify-center">
        <HeadingRow
          title="FAQs"
          text="Frequently Asked Questions"
          isDarkMode={props.isDarkMode}
        />
      </div>
      <div className="sm:h-[10vh]"></div>
      <div className="hidden sm:block">
        <HeadingRow
          title="FAQs"
          text="Frequently Asked Questions"
          isDarkMode={props.isDarkMode}
        />
      </div>
      <div className="sm:h-[10vh]"></div>
      <div className="flex flex-col gap-2">
        <Accordion
          title="Q: What is EduReach India Foundation?"
          text="EduReach India Foundation is a non-profit organization dedicated to empowering rural communities through education and community development initiatives. We work to improve literacy rates, provide access to quality education, and enhance the overall quality of life for individuals in rural India."
          bg="pink-bg"
        />
        <Accordion
          title="Q: How does EduReach India Foundation make a difference?"
          text="We make a difference by implementing various projects and programs that address the specific needs of rural communities. Our initiatives include literacy programs, teacher training workshops, digital learning centers, scholarship programs, and community development projects. Through these efforts, we aim to empower individuals and transform communities."
          bg="drkpink-bg"
        />
        <Accordion
          title="Q: How can I get involved with EduReach India Foundation?"
          text="There are several ways to get involved with our foundation. You can volunteer your time, donate to our cause, participate in our fundraising events, or partner with us. Your support helps us expand our reach and impact more lives in rural India."
          bg="pink-bg"
        />
        <Accordion
          title="Q: Can I donate to a specific project or program?"
          text="A: Yes, you can choose to donate to a specific project or program that aligns with your interests. We offer donation options for our various initiatives, allowing you to support the cause that matters most to you."
          bg="drkpink-bg"
        />
        <Accordion
          title="Q: How does EduReach India Foundation ensure transparency and accountability?"
          text="A: We are committed to transparency and accountability in all our operations. We regularly publish financial reports, project updates, and impact assessments on our website. We also adhere to strict financial management practices and undergo regular audits to ensure that donor funds are used responsibly."
          bg="pink-bg"
        />
        <Accordion
          title="Q: What impact has EduReach India Foundation had so far?"
          text="Since our inception, we have made a significant impact in rural communities across India. We have improved literacy rates, provided access to quality education, and enhanced healthcare services. We have also empowered individuals to become agents of change in their communities, creating a ripple effect of positive change."
          bg="drkpink-bg"
        />
        <Accordion
          title="Q: How does EduReach India Foundation measure its impact?"
          text="A: We measure our impact through various metrics, including literacy rates, school enrollment rates, academic performance, healthcare access, and community development indicators. We also collect feedback from program participants and stakeholders to assess the effectiveness of our initiatives."
          bg="pink-bg"
        />
        <Accordion
          title="Q: How can I stay updated on EduReach India Foundation's work?"
          text="A: You can stay updated on our work by subscribing to our newsletter, following us on social media, and visiting our website regularly. We also share updates and success stories through these channels to keep our supporters informed and engaged."
          bg="drkpink-bg"
        />
        <Accordion
          title="Q: Does EduReach India Foundation work with other organizations?"
          text="A: Yes, we collaborate with other non-profit organizations, government agencies, and corporate partners to maximize our impact. These partnerships allow us to leverage resources, share expertise, and implement projects on a larger scale."
          bg="pink-bg"
        />
        <Accordion
          title="Q: How can I contact EduReach India Foundation for more information?"
          text="A: You can contact us through our website's contact form, email us at info@edureachindia.org, or call us at [phone number]. Our team will be happy to provide you with more information and answer any questions you may have."
          bg="drkpink-bg"
        />
        <Accordion
          title="Q: Can I volunteer with EduReach India Foundation if I live outside of India?"
          text="A: Yes, we welcome volunteers from around the world who are passionate about our cause. While some volunteer opportunities may require you to be physically present in India, there are also remote volunteering options available. Please contact us for more information on how you can contribute from afar."
          bg="pink-bg"
        />
        <Accordion
          title="Q: How does EduReach India Foundation ensure sustainability in its projects?"
          text="A: We prioritize sustainability in all our projects by working closely with local communities and stakeholders. We involve community members in the planning and implementation of projects, ensuring that they are invested in the long-term success of the initiatives. We also focus on capacity building and knowledge transfer, empowering communities to continue the work even after our direct involvement ends."
          bg="drkpink-bg"
        />
      </div>
      <div className="h-[30vh]"></div>
    </div>
  );
}
