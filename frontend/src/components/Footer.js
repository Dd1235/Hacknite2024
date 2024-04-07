import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="sanspro footer mint-1-bg dark:mint-3-bg h-fit py-10 lg:py-20 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-4 black-text dark:white-text">
          <ul className="w-[30%] lg:w-[23%] flex flex-col justify-start items-start gap-1 lg:gap-3 text-sm lg:text-base">
            <div className="uppercase text-sm lg:text-lg font-semibold mint-3-text dark:mint-1-text mb-2">
              About EduReach
            </div>
            <HashLink smooth to="/#OurMission">
              <li>Our Mission</li>
            </HashLink>
            <HashLink smooth to="/#OurApproach">
              <li>Our Approach</li>
            </HashLink>
            <HashLink smooth to="/#OurImpact">
              <li>Our Impact</li>
            </HashLink>
            <HashLink smooth to="/meet-our-team#OurTeam">
              <li>Our Team</li>
            </HashLink>
            <HashLink smooth to="/get-involved#OurPartnerships">
              <li>Partnerships</li>
            </HashLink>
            <HashLink smooth to="/about-us#OurReports">
              <li>Financial Reports</li>
            </HashLink>
          </ul>
          <ul className="w-[30%] lg:w-[23%] flex flex-col justify-start items-start gap-1 lg:gap-3 text-sm lg:text-base">
            <div className="uppercase text-sm lg:text-lg font-semibold mint-3-text dark:mint-1-text mb-2">
              Contact Us
            </div>
            <li>
              <a href="https://maps.app.goo.gl/ZPQ3Shq6qu8aCQXd9">
                EduReach India Foundation
              </a>
            </li>
            <li>123 Main Street, Bangalore</li>
            <li>Rural India </li>
            <li>Email: fruitygoosedeath@outlook.com</li>
            <li>Phone: +91 123 456 7890</li>
          </ul>
          <ul className="w-[30%] lg:w-[23%] flex flex-col justify-start items-start gap-1 lg:gap-3 text-sm lg:text-base">
            <div className="uppercase text-sm lg:text-lg font-semibold mint-3-text dark:mint-1-text mb-2">
              Get Involved
            </div>
            <Link to="/volunteer-form">
              <li>Volunteer</li>
            </Link>
            <Link to="/donate-form">
              <li>Donate</li>
            </Link>
            <Link to="/partner-form">
              <li>Partner</li>
            </Link>
            <Link to="/donate-form">
              <li>Fundraise</li>
            </Link>
            <li>Corporate Social Responsibility</li>
            <HashLink smooth to="/get-involved#OurTeam">
              <li>Join Our Team</li>
            </HashLink>
          </ul>
          <ul className="w-[30%] lg:w-[23%] flex flex-col justify-start items-start gap-1 lg:gap-3 text-sm lg:text-base">
            <div className="uppercase text-sm lg:text-lg font-semibold mint-3-text dark:mint-1-text mb-2">
              Other Pages
            </div>
            <li>
              <Link to="/oops">OOPS page</Link>
            </li>
            <li>
              <Link to="/thank-you-volunteer">Volunteer TY</Link>
            </li>
            <li>
              <Link to="/thank-you-donation">Donation TY</Link>
            </li>
            <li>
              <Link to="/forgot-password">Forgot Password</Link>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                SUPER AWESOME THING
              </a>
            </li>
          </ul>
        </div>
        <div className="text-2xl flex mint-1-text dark:mint-3-text gap-4">
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-f w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i className="fa-brands fa-youtube w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fa-brands fa-twitter w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i className="fa-brands fa-linkedin w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
        </div>
        <Link to="/applications" className="btn m-0">
          Admin Control
        </Link>
        <div className="mint-1-text w-4/5 dark:white-text black-text text-center text-sm md:text-base">
          Copyright © 2024 EduReach India Foundation. All rights reserved.
        </div>
      </div>
    </div>
  );
}
