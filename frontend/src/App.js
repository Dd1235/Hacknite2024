import "./App.css";
import React, { useState, useEffect } from "react";
import "./fonts/font.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CallToAction from "./components/CallToAction";
import Navbar from "./components/Navbar";
import top from "./resources/top.png";
import drktop from "./resources/drktop.png";
import line from "./resources/line.png";
import drkline from "./resources/drkline.png";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import MeetOurTeam from "./pages/MeetOurTeam";
import Projects from "./pages/Projects";
import FAQs from "./pages/FAQs";
import GetInvolved from "./pages/GetInvolved";
import ErrorPage from "./pages/ErrorPage";
import DonateForm from "./pages/DonateForm";
import ThankYouPage from "./pages/ThankYouPage";
import VolunteerForm from "./pages/VolunteerForm";
import PartnerForm from "./pages/PartnerForm";
import VolunteerManagement from "./pages/dummyVolunteerOperations";
import ThankVolunteers from "./pages/ThankVolunteers";
import DonationOperations from "./pages/DonationOperations";
import MainPage from "./pages/HandleApplications";
import VolunteerDetails from "./pages/dummyVoluneerCard";
import PartnersStats from "./pages/dummyPartnerOperatons";
import NewsletterSignup from "./components/NewsletterSignup";
import { SpeedInsights } from "@vercel/speed-insights/react";

// im development mode in package.json change "proxy" : "http://localhost:4000"
// "vite": "^5.2.6"
// removed
function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const router = createBrowserRouter([
    {
      path: "/newsletter-signup",
      element: (
        <>
          <NewsletterSignup />
        </>
      ),
    },
    {
      path: "/partner-stats",
      element: (
        <>
          <PartnersStats />
        </>
      ),
    },
    {
      path: "/volunteer-form/:id",
      element: (
        <>
          <VolunteerDetails />
        </>
      ),
    },
    {
      path: "/applications",
      element: (
        <>
          <MainPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </>
      ),
    },
    {
      path: "/donation-operations",
      element: (
        <>
          <DonationOperations />
        </>
      ),
    },

    {
      path: "/volunteer-management",
      element: (
        <>
          <VolunteerManagement />
        </>
      ),
    },
    {
      path: "/thank-you-donation",
      element: (
        <>
          <Navbar
            title="EduReach"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <ThankYouPage isDarkMode={isDarkMode} />
          <Footer />
        </>
      ),
    },
    {
      path: "/thank-you-volunteer",
      element: (
        <>
          <Navbar
            title="EduReach"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <ThankVolunteers />
          <Footer />
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <Navbar
            title="EduReach"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <Homepage isDarkMode={isDarkMode} />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            alt="children"
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            alt="top"
            className="mint-1-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
          ></img>
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/about-us",
      element: (
        <>
          <Navbar
            title="EduReach"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <AboutUs isDarkMode={isDarkMode} />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            alt="children"
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            alt="top"
            className="mint-1-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
          ></img>
          <Footer />
        </>
      ),
    },
    {
      path: "/meet-our-team",
      element: (
        <>
          <Navbar
            title="EduReach"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <MeetOurTeam isDarkMode={isDarkMode} />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            alt="children"
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            alt="top"
            className="mint-1-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
          ></img>
          <Footer />
        </>
      ),
    },
    {
      path: "/projects",
      element: (
        <>
          <Navbar
            title="EduReach"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <Projects isDarkMode={isDarkMode} />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            alt="children"
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            alt="top"
            className="mint-1-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
          ></img>
          <Footer />
        </>
      ),
    },
    {
      path: "/get-involved",
      element: (
        <>
          <Navbar
            title="EduReach"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <GetInvolved isDarkMode={isDarkMode} />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            alt="children"
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            alt="top"
            className="mint-1-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
          ></img>
          <Footer />
        </>
      ),
    },
    {
      path: "/faqs",
      element: (
        <>
          <Navbar
            title="EduReach"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          <FAQs isDarkMode={isDarkMode} />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            alt="children"
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            alt="line"
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            alt="top"
            className="mint-1-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
          ></img>
          <Footer />
        </>
      ),
    },
    {
      path: "/donate-form",
      element: (
        <>
          <DonateForm />
        </>
      ),
    },
    {
      path: "/volunteer-form",
      element: (
        <>
          <VolunteerForm />
        </>
      ),
    },
    {
      path: "/partner-form",
      element: (
        <>
          <PartnerForm />
        </>
      ),
    },
  ]);
  return (
    <div className="dark:dark-bg">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
