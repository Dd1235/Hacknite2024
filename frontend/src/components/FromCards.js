import React from "react";
import { Link } from "react-router-dom";

export default function FromCards() {
  return (
    <div className="sanspro black-text flex justify-center">
      <div className="flex flex-col md:flex-row gap-5 lg:gap-10 w-[90%] items-center justify-center pb-10 ">
        <div className="max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Volunteer Your Time
          </h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            Join us in making a difference in rural communities across India by
            volunteering with EduReach India Foundation.
          </p>
          <Link
            to="/volunteer-form"
            className="inline-flex items-center px-4 py-3 text-sm font-semibold text-center mint-2-text mint-2-border border-4 rounded-full hover:mint-2-bg hover:white-text"
          >
            Volunteer
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className="max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Donate to Our Cause
          </h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            Your donation can help us expand our reach and impact more lives in
            rural India, every donation makes a difference.
          </p>
          <Link
            to="/donate-form"
            className="font-semibold inline-flex items-center px-4 py-3 text-sm text-center mint-2-text mint-2-border border-4 rounded-full hover:mint-2-bg hover:white-text"
          >
            Donate
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div className="max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Partner with Us
          </h5>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            If you represent a institution that shares our values and goals,
            consider partnering with EduReach.
          </p>
          <Link
            to="/partner-form"
            className="inline-flex items-center px-4 py-3 text-sm font-semibold text-center mint-2-text mint-2-border border-4 rounded-full hover:mint-2-bg hover:white-text"
          >
            Partner
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
