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
      path: "/thank-you",
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
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            className="mint-2-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
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
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            className="mint-2-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
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
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            className="mint-2-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
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
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            className="mint-2-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
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
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            className="mint-2-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
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
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <CallToAction
            image="https://media.gettyimages.com/id/181891488/photo/group-of-running-happy-indian-children-desert-village-india.jpg?s=2048x2048&w=gi&k=20&c=v4Swj556ZiE9FRm_kD5ZhWaLH4_kff_qfAcVnjwkPkI="
            AR="708 / 398"
            title="Help Support Jhunjhunu"
            text="Support our mission to empower rural communities through education. Donate now to make a difference!"
            bttnText="Donate Now"
          />
          <img
            src={isDarkMode ? drkline : line}
            className="h-6 w-full sm:h-6 md:h-[30px] lg:h-[50px]"
            style={{ backgroundColor: "#6E6E6E" }}
          ></img>
          <div className="h-[10vh] dark:dark-bg"></div>
          <img
            src={isDarkMode ? drktop : top}
            className="mint-2-bg dark:mint-3-bg h-6 w-full sm:h-10 md:h-[35px] lg:h-[55px]"
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
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
