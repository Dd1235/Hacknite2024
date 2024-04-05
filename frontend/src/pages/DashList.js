import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RandomIcon from "../resources/chooseIcon";
import "./dummy.css";

export default function DashList() {
  const [pendingApplications, setPendingApplications] = useState([]);

  const getPendingApplications = async () => {
    try {
      const response = await fetch("/api/volunteers/pending");
      const data = await response.json();
      setPendingApplications(data);
    } catch (error) {
      console.error("Error getting pending applications:", error);
    }
  };

  useEffect(() => {
    getPendingApplications();
  }, []);

  return (
    <div className="w-4/5">
      <div className="bg-white py-4 px-6 rounded-md mb-6">
        <h1 className="text-5xl font-bold playfair leading-5">
          Pending Applications
        </h1>
      </div>
      <div className="mt-6 flex flex-col gap-5">
        {pendingApplications.map((application) => (
          <div
            key={application._id}
            className="white-bg flex items-center justify-between w-full shadow rounded-md overflow-hidden relative"
          >
            <div
              to={`/volunteer-form/${application._id}`}
              className="flex h-fit justify-between p-4 items-center"
            >
              <div className="h-12">
                {/* <RandomIcon /> */}
                <img
                  src="https://imgs.search.brave.com/P5j5skedf0VuXGKMjbgFBtCJOel6f5gmw1cLFtzp8Hw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA1Lzcw/LzVjLzA1NzA1Yzk5/YmI0M2NmNWZkM2Y2/MDMyOGU0NzYzM2E5/LmpwZw"
                  alt=""
                  className="h-full"
                />
              </div>
              <div className="details flex flex-col px-5">
                <div className="text-xl leading-3 font-semibold mb-2">
                  {application.firstName} {application.lastName}
                </div>
                <div className="text-gray-600">{application.email}</div>
              </div>
            </div>
            <Link
              to={`/volunteer-form/${application._id}`}
              className="h-fit mx-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Review
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
