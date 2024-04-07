import React, { useState, useEffect } from "react";
import StatsWidget from "../components/StatsWidget";
import DashList from "../components/DashList.js";
import { Link } from "react-router-dom";
import VolunteerPiChart from "../charts/VolunteerPiChart";
import { updateApplicationData } from "../charts/data.js";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import VolunteerDash from "../charts/VolunteerDash.js";
import LogoutButton from "../components/LogoutButton.js";

function MainPage(props) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

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
  const [showApp, setShowApp] = useState([]);
  const [isApp, setIsApp] = useState(false);
  const [deetsHeading, setDeetsHeading] = useState("Volunteer Details");

  let touchStartX = 0;
  let touchEndX = 0;
  let newApplicationData = [
    { name: "Accepted Applications", value: 0 },
    { name: "Rejected Applications", value: 1 },
    { name: "Pending Applications", value: 0 },
  ];
  let base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  const handleTouchStart = (e) => {
    // console.log(e);
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    // console.log(e);
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    // console.log(touchEndX);
    if (touchEndX == 0) {
      return;
    }
    const difference = touchEndX - touchStartX;
    if (difference > 50) {
      setIsSidebar(true); // Swipe right
      // console.log("Hi", difference);
    } else if (difference < -50) {
      setIsSidebar(false); // Swipe left
      // console.log("hello", difference);
    } else {
      console.log(difference);
    }
  };

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

  function filterItemsByStatus(items, status, index, update) {
    const newData = items.filter((item) => item.status === status);
    newApplicationData[index].value = newData.length;
    if (update) {
      setCurrent(newData);
    }
    return newData;
  }

  const getAllApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/all`);
      const data = await response.json();
      // console.log(data);
      // data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      // console.log(data, "hi");
      setApplications(data);
      setAcceptedApplications(filterItemsByStatus(data, "accepted", 0, false));
      setRejectedApplications(filterItemsByStatus(data, "rejected", 1, false));
      setPendingApplications(filterItemsByStatus(data, "pending", 2, true));
      updateApplicationData(newApplicationData);
      setHeading("Pending Applications");
    } catch (error) {
      console.error("Error getting all applications:", error);
    }
  };

  // const getAcceptedApplications = async () => {
  //   try {
  //     const response = await fetch(`${base_url}/api/volunteers/accepted`);
  //     const data = await response.json();
  //     setAcceptedApplications(data);
  //     newApplicationData[0].value = data.length;
  //   } catch (error) {
  //     console.error("Error getting accepted applications:", error);
  //   }
  // };

  // const getRejectedApplications = async () => {
  //   try {
  //     const response = await fetch(`${base_url}/api/volunteers/rejected`);
  //     const data = await response.json();
  //     setRejectedApplications(data);
  //     newApplicationData[1].value = data.length;
  //   } catch (error) {
  //     console.error("Error getting rejected applications:", error);
  //   }
  // };

  // const getPendingApplications = async () => {
  //   try {
  //     const response = await fetch(`${base_url}/api/volunteers/pending`);
  //     const data = await response.json();
  //     setPendingApplications(data);
  //     setCurrent(data);
  //     newApplicationData[2].value = data.length;
  //     updateApplicationData(newApplicationData);
  //   } catch (error) {
  //     console.error("Error getting number of pending applications:", error);
  //   }
  // };

  const getAllDonations = async () => {
    try {
      const response = await fetch(`${base_url}/api/donations/all`);
      const data = await response.json();

      setDonations(data);
    } catch (error) {
      setError((prevError) => prevError + " " + error.message);
    }
  };

  const handleAccept = async () => {
    try {
      await fetch(`${base_url}/api/volunteers/${showApp._id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "accepted" }),
      });
      alert("Volunteer status updated: Accepted");
      await getAllApplications();
      // navigate("/applications");
    } catch (error) {
      console.error("Error updating volunteer status:", error);
    }
  };

  const handlePending = async () => {
    try {
      await fetch(`${base_url}/api/volunteers/${showApp._id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "pending" }),
      });
      alert("Volunteer status updated: Pending");
      await getAllApplications();
      // navigate("/applications");
    } catch (error) {
      console.error("Error updating volunteer status:", error);
    }
  };

  const handleReject = async () => {
    try {
      await fetch(`${base_url}/api/volunteers/${showApp._id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "rejected" }),
      });
      alert("Volunteer status updated: Rejected");
      await getAllApplications();
      // navigate("/applications");
    } catch (error) {
      console.error("Error updating volunteer status:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      return (
        <div className="max-w-md mx-auto mt-10 text-center">
          <p className="mb-4 text-lg font-semibold text-gray-700">
            You are not authorized to access this page.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            Go to Login Page
          </button>
        </div>
      );
    }
    const fetchData = async () => {
      await fetchTotalAmount();
      await fetchUniqueDonorsCount();
      await getAllApplications();
      // await getAcceptedApplications();
      // await getRejectedApplications();
      // await getPendingApplications();
      await getAllDonations();

      setIsLoading(false);
    };

    fetchData();
  }, [user]);

  if (isLoading)
    return (
      <div className="text-center dark:dark-bg text-xl h-screen w-screen flex items-center justify-center flex-col dark:text-white">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 dark:fill-white"
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
          <span className="sr-only">Loading...</span>
        </div>
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );

  const Main = () => {
    return (
      <div>
        <div className="dark:dark-bg">
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
                ? "fixed top-0 left-0 z-40 w-64 h-screen lg:translate-x-0"
                : "-translate-x-full fixed top-0 left-0 z-40 w-64 h-screen lg:translate-x-0"
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
                      setDeetsHeading("Donor Details");
                      setIsSidebar(false);
                      window.scrollTo({ top: 0, behavior: "auto" });
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
                      setDeetsHeading("Volunteer Details");
                      setIsSidebar(false);
                      window.scrollTo({ top: 0, behavior: "auto" });
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
                      setDeetsHeading("Volunteer Details");
                      setIsSidebar(false);
                      window.scrollTo({ top: 0, behavior: "auto" });
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
                      setDeetsHeading("Volunteer Details");
                      setIsSidebar(false);
                      window.scrollTo({ top: 0, behavior: "auto" });
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
                      setDeetsHeading("Volunteer Details");
                      setIsSidebar(false);
                      window.scrollTo({ top: 0, behavior: "auto" });
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
                <LogoutButton />
                <button
                  id="theme-toggle"
                  type="button"
                  onClick={() => {
                    props.setIsDarkMode((prev) => !prev);
                  }}
                  className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
                  <span className="ms-3">
                    Switch to {props.isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
                <button className=" flex lg:hidden w-full justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <i className="fa-solid fa-right-from-bracket  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                </button>
              </ul>
            </div>
          </aside>

          <div className="p-4 lg:ml-64" onClick={() => setIsSidebar(false)}>
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
                <DashList
                  applications={current}
                  heading={heading}
                  setShowApp={setShowApp}
                  setIsApp={setIsApp}
                />
                <div className="w-full lg:w-1/4 h-fit lg:pb-10 flex-col sm:flex-row lg:flex-col mint-1-bg dark:mint-3-bg flex justify-center lg:justify-start items-center rounded-lg">
                  <div className="w-full sm:w-1/2 lg:w-44 lg:h-44 h-72 my-10">
                    <VolunteerPiChart />
                    <div className="text-center dark:text-white font-semibold">
                      Applications Chart
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-full h-72 my-10">
                    <VolunteerDash
                      count={acceptedApplications.length}
                      isDarkMode={props.isDarkMode}
                    />
                    <div className="text-center dark:text-white font-semibold">
                      Volunteers Chart 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ApplicantCard = () => {
    return (
      <div className="dark:dark-bg h-screen">
        <div className="dark:dark-bg">
          <div className="sm:max-w-4xl shadow sanspro mx-auto p-8 dark:dark-bg black-text dark:white-text">
            <h1 className="text-3xl text-center sm:text-left dark:white-text font-bold black-text playfair mb-4 dark:white-text">
              <button
                className="sm:mx-6 w-12 h-12 hover:bg-gray-300 rounded-full group"
                onClick={() => setIsApp(false)}
              >
                <i className="fa-solid fa-right-from-bracket text-2xl leading-9 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
              </button>
              {deetsHeading}
            </h1>
            <ul className="list-disc list-inside rounded-lg p-6 mb-6">
              {deetsHeading === "Volunteer Details"
                ? Object.entries(showApp)
                    .slice(1, -3)
                    .map(([key, value]) => (
                      <li
                        key={key}
                        className="border-b border-gray-200 pb-2 mt-2"
                      >
                        <strong className="font-semibold">{key}:</strong>{" "}
                        {key === "availableDays" ? value.join(", ") : value}
                      </li>
                    ))
                : Object.entries(showApp)
                    .slice(1, -2)
                    .map(([key, value]) => (
                      <li
                        key={key}
                        className="border-b border-gray-200 pb-2 mt-2"
                      >
                        <strong className="font-semibold">{key}:</strong>{" "}
                        {key === "availableDays" ? value.join(", ") : value}
                      </li>
                    ))}
            </ul>

            {deetsHeading === "Volunteer Details" ? (
              <div className="flex justify-between">
                <button
                  onClick={handleAccept}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Accept
                </button>
                <button
                  onClick={handlePending}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Pending
                </button>

                <button
                  onClick={handleReject}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Reject
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {isApp ? <ApplicantCard /> : <Main />}
    </div>
  );
}

export default MainPage;
