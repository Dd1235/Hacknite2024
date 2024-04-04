import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function VolunteerForm() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, setCollege] = useState("");
  const [field, setField] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);
  const [notes, setNotes] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  // const navigate = useNavigate();

  const handleMondayChange = (e) => {
    setMonday(e.target.checked);
  };

  const handleTuesdayChange = (e) => {
    setTuesday(e.target.checked);
  };

  const handleWednesdayChange = (e) => {
    setWednesday(e.target.checked);
  };
  const handleThursdayChange = (e) => {
    setThursday(e.target.checked);
  };
  const handleFridayChange = (e) => {
    setFriday(e.target.checked);
  };
  const handleSaturdayChange = (e) => {
    setSaturday(e.target.checked);
  };
  const handleSundayChange = (e) => {
    setSunday(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const availableDays = [
      monday && "Monday",
      tuesday && "Tuesday",
      wednesday && "Wednesday",
      thursday && "Thursday",
      friday && "Friday",
      saturday && "Saturday",
      sunday && "Sunday",
    ].filter(Boolean);

    const volunteerData = {
      firstName,
      lastName,
      birthDate,
      phoneNumber,
      email,
      college,
      field,
      company,
      position,
      experience,
      availableDays,
      notes,
    };

    try {
      const response = await fetch("api/volunteers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(volunteerData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Volunteer application submitted successfully.");
      } else {
        alert(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Failed to submit volunteer application:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const response = await fetch("api/validate_email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (response.ok) {
      setIsOtpSent(true);
      setMessage("OTP has been sent to your email.");
    } else {
      setMessage(data.error || "An error occurred while sending OTP.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/validate_email/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, enteredOTP: otp }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage("OTP verified successfully.");
      document.getElementById("email-verification").classList.add("hidden");
      document.getElementById("volunteer-form").classList.remove("hidden");
    } else {
      setMessage(data.error || "An error occurred during OTP verification.");
    }
  };

  return (
    <div className="black-text dark:white-text sanspro mint-1-bg dark:dark-bg flex justify-center items-center gap-5 py-8 flex-col lg:flex-row lg:h-screen">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div
        id="email-verification"
        className=" w-[90%] sm:w-4/5 md:w-3/5 lg:w-[600px] px-5 py-8 bg-white border dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-lg shadow lg:h-full lg:overflow-auto"
      >
        <h1 className="mb-6 text-lg dark:white-text">
          Confirm Your Email Address for Volunteer Sign Up
        </h1>
        <h1 className="dark:white-text">
          Thank you for your interest in volunteering with us to make a
          difference in the lives of others. Before you can proceed with your
          volunteer sign-up, we need to verify your email address.
        </h1>
        <h1 className="dark:white-text">
          Once your email address is verified, you will be redirected to the
          volunteer sign-up form to complete your registration process.
        </h1>
        <hr className="my-3" />
        <h1 className="mb-3">Email Verification</h1>
        {!isOtpSent ? (
          <form onSubmit={handleSendOtp}>
            <div className="mb-3">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>
            <div className="mb-3">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Otp
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Verify OTP
            </button>
          </form>
        )}
        {message && <p>{message}</p>}
      </div>

      <form
        id="volunteer-form"
        className="hidden w-[90%] sm:w-4/5 md:w-3/5 lg:w-[600px] px-5 py-8 bg-white border dark:bg-gray-800 dark:border-gray-700 border-gray-200 rounded-lg shadow lg:h-full lg:overflow-auto"
        onSubmit={handleSubmit}
      >
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
              onChange={(e) => setFirstName(e.target.value)}
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
              onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setBirthDate(e.target.value)}
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
              onChange={(e) => setPhoneNumber(e.target.value)}
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
            // placeholder="john.doe@company.com"
            // required
            value={email || ""}
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
              onChange={(e) => setCollege(e.target.value)}
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
              onChange={(e) => setField(e.target.value)}
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
              onChange={(e) => setCompany(e.target.value)}
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
              onChange={(e) => setPosition(e.target.value)}
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
            onChange={(e) => setExperience(e.target.value)}
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
                onChange={handleMondayChange}
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
                onChange={handleTuesdayChange}
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
                onChange={handleWednesdayChange}
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
                onChange={handleThursdayChange}
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
                onChange={handleFridayChange}
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
                onChange={handleSaturdayChange}
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
                onChange={handleSundayChange}
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
            onChange={(e) => setNotes(e.target.value)}
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
