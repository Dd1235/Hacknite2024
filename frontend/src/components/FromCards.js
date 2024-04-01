import React from "react";
import { Link } from "react-router-dom";

export default function FromCards() {
  return (
    <div className="sanspro black-text flex justify-center">
      <div className="flex flex-col md:flex-row gap-5 lg:gap-10 w-[90%] items-center justify-center pb-10 ">
        <div class="max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Volunteer Your Time
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Join us in making a difference in rural communities across India by
            volunteering with EduReach India Foundation.
          </p>
          <Link
            to="/volunteer-form"
            class="inline-flex items-center px-4 py-3 text-sm font-semibold text-center mint-2-text mint-2-border border-4 rounded-full hover:mint-2-bg hover:white-text"
          >
            Volunteer
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div class="max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Donate to Our Cause
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Your donation can help us expand our reach and impact more lives in
            rural India, every donation makes a difference.
          </p>
          <Link
            to="/donate-form"
            class="font-semibold inline-flex items-center px-4 py-3 text-sm text-center mint-2-text mint-2-border border-4 rounded-full hover:mint-2-bg hover:white-text"
          >
            Donate
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <div class="max-w-sm p-6 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Partner with Us
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            If you represent a institution that shares our values and goals,
            consider partnering with EduReach.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-4 py-3 text-sm font-semibold text-center mint-2-text mint-2-border border-4 rounded-full hover:mint-2-bg hover:white-text"
          >
            Partner
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
