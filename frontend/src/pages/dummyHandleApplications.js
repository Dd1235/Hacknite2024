import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RandomIcon from "../resources/chooseIcon";
import "./dummy.css";

function MainPage() {
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
    <div className="container mx-auto px-4 min-h-screen">
      <div className="bg-white py-4 px-6 rounded-md mb-6">
        <h1 className="text-3xl font-bold text-purple-600">
          Pending Applications
        </h1>
      </div>
      <div className="mt-6 grid gap-6">
        {pendingApplications.map((application) => (
          <div
            key={application._id}
            className="bg-white shadow-md rounded-md overflow-hidden relative"
          >
            <Link to={`/volunteer-form/${application._id}`} className="block">
              <div className="grid-container p-4 relative">
                <div className="grid-item icon">
                  <RandomIcon />
                </div>
                <div className="grid-item details">
                  <h2 className="text-xl font-semibold mb-2">
                    {application.firstName} {application.lastName}
                  </h2>
                  <p className="text-gray-600">{application.email}</p>
                </div>
                <div className="grid-item gradient-bg absolute inset-1.5 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 hover:opacity-100 rounded-md transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
