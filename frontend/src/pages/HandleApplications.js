import React, { useState, useEffect } from "react";
import StatsWidget from "../components/StatsWidget";
import DashList from "./DashList";
import { Link } from "react-router-dom";
import VolunteerPiChart from "../charts/VolunteerPiChart";
import { updateApplicationData } from "../charts/data.js";

function MainPage() {
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

  let newApplicationData = [
    { name: "Accepted Applications", value: 0 },
    { name: "Rejected Applications", value: 1 },
    { name: "Pending Applications", value: 0 },
  ];

  const fetchTotalAmount = async () => {
    try {
      const response = await fetch("/api/donations/totalAmount");
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
      const response = await fetch("/api/donations/donors/count");
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
      const response = await fetch("/api/volunteers/all");
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error getting all applications:", error);
    }
  };

  const getAcceptedApplications = async () => {
    try {
      const response = await fetch("/api/volunteers/accepted");
      const data = await response.json();
      setAcceptedApplications(data);
      newApplicationData[0].value = data.length;
    } catch (error) {
      console.error("Error getting accepted applications:", error);
    }
  };

  const getRejectedApplications = async () => {
    try {
      const response = await fetch("/api/volunteers/rejected");
      const data = await response.json();
      setRejectedApplications(data);
      newApplicationData[1].value = data.length;
    } catch (error) {
      console.error("Error getting rejected applications:", error);
    }
  };

  const getPendingApplications = async () => {
    try {
      const response = await fetch("/api/volunteers/pending");
      const data = await response.json();
      setPendingApplications(data);
      setCurrent(data);
      newApplicationData[2].value = data.length;
      updateApplicationData(newApplicationData);
    } catch (error) {
      console.error("Error getting number of pending applications:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTotalAmount();
      await fetchUniqueDonorsCount();
      await getAllApplications();
      await getAllApplications();
      await getAcceptedApplications();
      await getRejectedApplications();
      await getPendingApplications();

      setHeading("Pending Applications");

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
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
                  onClick={() => {}}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <i className="fa-solid fa-heart  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                  <span className="ms-3">Donors</span>
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
              className=" flex lg:hidden w-full justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => setIsSidebar(false)}
            >
              <i class="fa-solid fa-right-from-bracket  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
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
              <div className="w-1/4 h-screen mint-1-bg flex justify-center rounded-lg">
                <div className="w-44 h-44 my-10">
                  <VolunteerPiChart />
                  <div className="text-center font-semibold">
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
