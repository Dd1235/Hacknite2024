import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PartnerForm() {
  const navigate = useNavigate();

  let base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  const [institution, setInstitution] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const partnerData = {
      institution,
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
    };

    try {
      const response = await fetch(`${base_url}/api/partners`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(partnerData),
      });

      if (!response.ok) {
        setError(
          `An error with status ${response.status} has occured: ${response.error}`
        );
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Partner form submitted successfully");
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setError((prevState) => prevState + error);
    }
  };

  return (
    <div className="black-text dark:white-text sanspro mint-1-bg dark:dark-bg flex justify-center items-center gap-5 py-8 flex-col lg:flex-row lg:h-screen">
      <div className="w-[90%] sm:w-4/5 md:w-3/5 lg:max-w-lg lg:h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src="https://imgs.search.brave.com/GOSM0pPJpvo2F-Dbjd9ehqHn3_07gUgi6Y_JgfjILQE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8w/NC8yOC8wNC80OC9u/Z28tbmVhci1tZS02/MjEyOTc5XzY0MC5q/cGc"
          alt=""
        />
        <div className="p-5">
          <h5 className="playfair mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Your Partnership Will Make a Difference Now
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Every partnership with us goes directly to a child in need,
            providing them with education, healthcare, and hope for a brighter
            future. Join us in making a difference. Partner with us today.
          </p>
          <Link
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-3 py-2 lg:text-lg hover:mint-2-bg hover:white-text font-medium text-center mint-2-text rounded-full mint-2-border border-4"
          >
            Go back
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

      <form
        className="w-[90%] sm:w-4/5 md:w-3/5 lg:w-[600px] px-5 py-8 bg-white border dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-lg shadow lg:h-full lg:overflow-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="institution_name-partner"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Institution name
          </label>
          <input
            type="text"
            id="first_name-partner"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>
        <h1 className="mb-6 text-lg dark:white-text">Contact Person</h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              // htmlFor="first_name-voluteer"
              htmlFor="first_name-partner"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name-partner"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="last_name-partner"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name-partner"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="phone-partner"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contact phone
            </label>
            <input
              type="text"
              id="phone-partner"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91**********"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="schedule-partner"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="schedule-partner"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <div className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </div>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}
