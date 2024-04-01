import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="sanspro footer mint-1-bg dark:mint-3-bg h-fit py-10 lg:py-20 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-4 black-text dark:white-text">
          <ul className="w-[30%] lg:w-[23%] flex flex-col justify-start items-start gap-1 lg:gap-3 text-sm lg:text-base">
            <li className="uppercase text-sm lg:text-lg font-semibold mint-3-text dark:mint-1-text mb-2">
              About EduReach
            </li>
            <li>Our Mission</li>
            <li>Our Approach</li>
            <li>Our Impact</li>
            <li>Our Team</li>
            <li>Partnerships</li>
            <li>Financial Reports</li>
          </ul>
          <ul className="w-[30%] lg:w-[23%] flex flex-col justify-start items-start gap-1 lg:gap-3 text-sm lg:text-base">
            <li className="uppercase text-sm lg:text-lg font-semibold mint-3-text dark:mint-1-text mb-2">
              Contact Us
            </li>
            <li>EduReach India Foundation</li>
            <li>123 Main Street, Bangalore</li>
            <li>Rural India</li>
            <li>Email: info@edureachindia.org</li>
            <li>Phone: +91 123 456 7890</li>
          </ul>
          <ul className="w-[30%] lg:w-[23%] flex flex-col justify-start items-start gap-1 lg:gap-3 text-sm lg:text-base">
            <li className="uppercase text-sm lg:text-lg font-semibold mint-3-text dark:mint-1-text mb-2">
              Literacy Program
            </li>
            <li>Literacy Programs</li>
            <li>Teacher Training</li>
            <li>Digital Learning Centers</li>
            <li>Scholarships</li>
            <li>Community Development</li>
          </ul>
          <ul className="w-[30%] lg:w-[23%] flex flex-col justify-start items-start gap-1 lg:gap-3 text-sm lg:text-base">
            <li className="uppercase text-sm lg:text-lg font-semibold mint-3-text dark:mint-1-text mb-2">
              Get Involved
            </li>
            <li>Volunteer</li>
            <li>Donate</li>
            <li>Partner</li>
            <li>Fundraise</li>
            <li>Corporate Social Responsibility</li>
            <li>Join Our Team</li>
          </ul>
        </div>
        <div className="text-2xl flex mint-1-text dark:mint-3-text gap-4">
          <a href="/about">
            <i className="fa-brands fa-instagram w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
          <a href="/mission">
            <i className="fa-brands fa-facebook-f w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
          <a href="/approach">
            <i className="fa-brands fa-youtube w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
          <a href="/impact">
            <i className="fa-brands fa-twitter w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
          <a href="/team">
            <i className="fa-brands fa-linkedin w-10 h-10 mint-3-bg dark:mint-1-bg hover:dark:white-bg rounded-full flex items-center justify-center cursor-pointer hover:mint-2-bg transform-scale"></i>
          </a>
        </div>
        <div className="mint-1-text w-4/5 dark:white-text black-text text-center text-sm md:text-base">
          Copyright © 2024 EduReach India Foundation. All rights reserved.
        </div>
      </div>
    </div>
  );
}
