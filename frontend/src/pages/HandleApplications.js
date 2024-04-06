import React, { useState, useEffect } from "react";
import StatsWidget from "../components/StatsWidget";
import DashList from "../components/DashList.js";
import { Link } from "react-router-dom";
import VolunteerPiChart from "../charts/VolunteerPiChart";
import { updateApplicationData } from "../charts/data.js";

function MainPage(props) {
  const [isSidebar, setIsSidebar] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [uniqueDonors, setUniqueDonors] = useState(0);
  const [applications, setApplications] = useState([]);
  const [acceptedApplications, setAcceptedApplications] = useState([]);
  const [rejectedApplications, setRejectedApplications] = useState([]);
  const [pendingApplications, setPendingApplications] = useState([]);
  const [current, setCurrent] = useState([]);
  const [heading, setHeading] = useState("");
  const [donations, setDonations] = useState([]);

  let newApplicationData = [
    { name: "Accepted Applications", value: 0 },
    { name: "Rejected Applications", value: 1 },
    { name: "Pending Applications", value: 0 },
  ];

  let base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  const fetchTotalAmount = async () => {
    try {
      const response = await fetch(`${base_url}/api/donations/totalAmount`);
      const data = await response.json();
      if (data.success) {
        setTotalAmount(data.totalAmount);
      } else {
        throw new Error(data.message || "Failed to fetch the total amount");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchUniqueDonorsCount = async () => {
    try {
      const response = await fetch(`${base_url}/api/donations/donors/count`);
      const data = await response.json();
      if (data.success) {
        setUniqueDonors(data.count);
      } else {
        throw new Error(data.message || "Failed to fetch unique donors count");
      }
    } catch (error) {
      setError((prevError) => prevError + " " + error.message);
    }
  };

  const getAllApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/all`);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error getting all applications:", error);
    }
  };

  const getAcceptedApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/accepted`);
      const data = await response.json();
      setAcceptedApplications(data);
      newApplicationData[0].value = data.length;
    } catch (error) {
      console.error("Error getting accepted applications:", error);
    }
  };

  const getRejectedApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/rejected`);
      const data = await response.json();
      setRejectedApplications(data);
      newApplicationData[1].value = data.length;
    } catch (error) {
      console.error("Error getting rejected applications:", error);
    }
  };

  const getPendingApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/pending`);
      const data = await response.json();
      setPendingApplications(data);
      setCurrent(data);
      newApplicationData[2].value = data.length;
      updateApplicationData(newApplicationData);
    } catch (error) {
      console.error("Error getting number of pending applications:", error);
    }
  };

  const getAllDonations = async () => {
    try {
      const response = await fetch(`${base_url}/api/donations/all`);
      const data = await response.json();

      setDonations(data);
    } catch (error) {
      setError((prevError) => prevError + " " + error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTotalAmount();
      await fetchUniqueDonorsCount();
      await getAllApplications();
      await getAcceptedApplications();
      await getRejectedApplications();
      await getPendingApplications();
      await getAllDonations();

      setHeading("Pending Applications");

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="text-center text-xl h-screen w-screen flex items-center justify-center flex-col dark:text-white">
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 dark:fill-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );

  return (
    <div>
      <div>
        <button
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setIsSidebar(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className={
            isSidebar
              ? "fixed top-0 left-0 z-40 w-64 h-screen transition-transform lg:translate-x-0"
              : "-translate-x-full fixed top-0 left-0 z-40 w-64 h-screen transition-transform lg:translate-x-0"
          }
          aria-label="Sidebar"
        >
          <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <i className="fa-solid fa-house text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                  <span className="ms-3">Homepage</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrent(donations);
                    setHeading("All Donations");
                  }}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <i className="fa-solid fa-heart  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                  <span className="ms-3">Donors</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {donations.length}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrent(applications);
                    setHeading("All Applications");
                  }}
                  className="flex w-full items-center justify-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <i className="fa-solid fa-users text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                  <span className="ms-3">All Applications</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {applications.length}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrent(acceptedApplications);
                    setHeading("Accepted Application");
                  }}
                  className="flex w-full items-center justify-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <i className="fa-solid fa-square-check  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Accepted Applications
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {acceptedApplications.length}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrent(rejectedApplications);
                    setHeading("Rejected Applications");
                  }}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <i className="fa-solid fa-square-xmark  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Rejected Applications
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {rejectedApplications.length}
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrent(pendingApplications);
                    setHeading("Pending Applications");
                  }}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <i className="fa-solid fa-clock  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Pending Applications
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {pendingApplications.length}
                  </span>
                </button>
              </li>
            </ul>
            <button
              id="theme-toggle"
              type="button"
              onClick={() => {
                props.setIsDarkMode((prev) => !prev);
              }}
              className="black-text w-fit dark:white-text hover:white-bg dark:hover:bg-gray-700 rounded-full text-sm p-2.5"
            >
              {props.isDarkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
            <button
              className=" flex lg:hidden w-full justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => setIsSidebar(false)}
            >
              <i className="fa-solid fa-right-from-bracket  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            </button>
          </div>
        </aside>

        <div className="p-4 lg:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="flex items-center justify-center h-fit sm:h-32 mb-4 rounded">
              <StatsWidget
                totalAmount={totalAmount}
                uniqueDonors={uniqueDonors}
                acceptedApplications={acceptedApplications.length}
                rejectedApplications={rejectedApplications.length}
                pendingApplications={pendingApplications.length}
              />
            </div>
            <div className="flex w-full lg:flex-row flex-col rounded-lg gap-5">
              <DashList applications={current} heading={heading} />
              <div className="w-1/4 h-screen mint-1-bg dark:mint-3-bg flex justify-center rounded-lg">
                <div className="w-44 h-44 my-10">
                  <VolunteerPiChart />
                  <div className="text-center dark:text-white font-semibold">
                    Applications Chart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
