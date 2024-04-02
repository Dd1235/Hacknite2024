import React from "react";
import { Link } from "react-router-dom";

export default function VolunteerForm() {
  return (
    <div className="sanspro mint-1-bg dark:dark-bg flex justify-center items-center gap-5 py-8 flex-col lg:flex-row lg:h-screen">
      <div className="w-[90%] sm:w-4/5 md:w-3/5 lg:max-w-lg lg:h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src="https://imgs.search.brave.com/NJpisH3_WUL0T_mLLW6_4jk6-z9hjiTra9ByCQHb0W0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pdmhx/LmltZ2l4Lm5ldC9p/bWFnZXMvZ2FsbGVy/eS92b2x1bnRlZXIt/aW4taW5kaWEtZGVs/aGkvdGVhY2hpbmct/dm9sdW50ZWVyLWlu/ZGlhLWl2aHEuanBn/P3c9NTQwJmg9MzYw/JmZpdD1jcm9wJmNy/b3A9ZmFjZXMsY2Vu/dGVyJmF1dG89Zm9y/bWF0LGNvbXByZXNz/JnE9ODU"
          alt=""
        />
        <div className="p-5">
          <h5 className="playfair mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Your Time Will Make a Difference Now
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Millions of children in rural India lack access to quality
            education, healthcare, and basic necessities. With your support,
            EduReach India Foundation is changing that. Every moment you
            volunteer goes directly to a child in need, providing them with
            education, healthcare, and hope for a brighter future. Join us in
            making a difference. Volunteer today.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-3 py-2 lg:text-lg hover:mint-2-bg hover:white-text font-medium text-center mint-2-text rounded-full mint-2-border border-4"
          >
            Go back to home
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
      </div>

      <form className="w-[90%] sm:w-4/5 md:w-3/5 lg:w-[600px] px-5 py-8 bg-white border dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-lg shadow lg:h-full lg:overflow-auto">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name-voluteer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name-volunteer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="last_name-volunteer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name-volunteer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              for="birthdate-volunteer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Birth Date
            </label>
            <input
              type="date"
              id="birthdate-volunteer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="phone-volunteer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="text"
              id="phone-volunteer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91**********"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <h1 className="mb-6 text-lg dark:white-text">Education background</h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="college_name-volunteer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              College/School
            </label>
            <input
              type="text"
              id="college_name-volunteer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="International Institute of Information Technology"
            />
          </div>
          <div>
            <label
              for="Department_name-volunteer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Department/Field
            </label>
            <input
              type="text"
              id="Department_name-volunteer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="iMtech"
            />
          </div>
        </div>
        <h1 className="mb-6 text-lg dark:white-text">Occupation</h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="company_name-volunteer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company_name-volunteer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Avtar Bijli Company"
            />
          </div>
          <div>
            <label
              for="Position_name-volunteer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Department/Position
            </label>
            <input
              type="text"
              id="Position_name-volunteer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Avtar"
            />
          </div>
        </div>
        <hr className="mb-6" />
        <div className="mb-6">
          <label
            for="Note-volunteer"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Do you have any volunteering experience? If yes, please describe.
          </label>
          <textarea
            id="Note-volunteer"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="mb-6">
          <p className="ms-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Select your available days
          </p>
          <div className="ms-2 grid gap-2 mb-6 md:grid-cols-2">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mondays
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tuesdays
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Wednesdays
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Thursdays
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Fridays
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Saturdays
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sundays
              </label>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label
            for="schedule-volunteer"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Additional notes about your schedule
          </label>
          <textarea
            id="schedule-volunteer"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
