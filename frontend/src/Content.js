import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CallToAction from "./components/CallToAction";
import Navbar from "./components/Navbar";
import top from "./top.png";
import Footer from "./components/Footer";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import MeetOurTeam from "./MeetOurTeam";
import Projects from "./Projects";
import FAQs from "./FAQs";
import GetInvolved from "./GetInvolved";
import ErrorPage from "./components/ErrorPage";
import React from "react";

export default function Content() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/meet-our-team",
      element: <MeetOurTeam />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/get-involved",
      element: <GetInvolved />,
    },
    {
      path: "/faqs",
      element: <FAQs />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
