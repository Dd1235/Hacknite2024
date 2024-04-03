import React, { useState } from "react";

function VolunteerManagement() {
  const [applications, setApplications] = useState([]);

  const getAllApplications = async () => {
    try {
      const response = await fetch("/api/volunteers/all");
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error getting all applications:", error);
    }
  };

  const getPendingApplications = async () => {
    try {
      const response = await fetch("/api/volunteers/pending");
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error getting pending applications:", error);
    }
  };

  const getAcceptedApplications = async () => {
    try {
      const response = await fetch("/api/volunteers/accepted");
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error getting accepted applications:", error);
    }
  };

  const getNumberOfAcceptedApplications = async () => {
    try {
      const response = await fetch("/api/volunteers/accepted/count");
      const data = await response.json();
      alert(`Number of accepted applications: ${data.count}`);
    } catch (error) {
      console.error("Error getting number of accepted applications:", error);
    }
  };

  const getNumberOfPendingApplications = async () => {
    try {
      const response = await fetch("/api/volunteers/pending/count");
      const data = await response.json();
      alert(`Number of pending applications: ${data.count}`);
    } catch (error) {
      console.error("Error getting number of pending applications:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
        Volunteer Application Management
      </h1>

      <div className="flex flex-wrap mb-4">
        <button
          className="mr-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={getAllApplications}
        >
          Get All Applications
        </button>
        <button
          className="mr-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={getPendingApplications}
        >
          Get Pending Applications
        </button>
        <button
          className="mr-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={getAcceptedApplications}
        >
          Get Accepted Applications
        </button>
        <button
          className="mr-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={getNumberOfAcceptedApplications}
        >
          Get Number of Accepted Applications
        </button>
        <button
          className="mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={getNumberOfPendingApplications}
        >
          Get Number of Pending Applications
        </button>
      </div>

      <h2 className="text-xl font-bold mb-2">Applications:</h2>
      <ul>
        {applications.map((application) => (
          <li key={application._id} className="mb-2">
            {application.firstName} {application.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VolunteerManagement;
