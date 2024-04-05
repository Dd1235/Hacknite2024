import React, { useState } from "react";

function VolunteerManagement() {
  const [applications, setApplications] = useState([]);
  const [volunteersPerYear, setVolunteersPerYear] = useState([]);

  // read this
  // this sets applications to data, which is an array of volunteer applications
  // you have to use the names of fields like in the model to access them
  // like application.firstName, application.birthDate, etc. go through backend/models/volunteerModel
  // use hooks to set the states, like i have done in the other form is possible

  const base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  const getVolunteersPerYear = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/peryear`);
      const data = await response.json();
      setVolunteersPerYear(data);
    } catch (error) {
      console.error("Error getting volunteers per year:", error);
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

  const getPendingApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/pending`);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error getting pending applications:", error);
    }
  };

  const getAcceptedApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/accepted`);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error getting accepted applications:", error);
    }
  };

  const getRejectedApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/rejected`);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error getting rejected applications:", error);
    }
  };

  const getNumberOfAcceptedApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/accepted/count`);
      const data = await response.json();
      alert(`Number of accepted applications: ${data.count}`);
    } catch (error) {
      console.error("Error getting number of accepted applications:", error);
    }
  };

  const getNumberOfPendingApplications = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/pending/count`);
      const data = await response.json();
      alert(`Number of pending applications: ${data.count}`);
    } catch (error) {
      console.error("Error getting number of pending applications:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Volunteer Application Management
      </h1>

      <div className="flex flex-wrap justify-center mb-4 gap-2">
        <button
          onClick={getAllApplications}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Get All Applications
        </button>
        <button
          onClick={getPendingApplications}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Get Pending Applications
        </button>
        <button
          onClick={getAcceptedApplications}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Get Accepted Applications
        </button>
        <button
          onClick={getRejectedApplications}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Get Rejected Applications
        </button>
        <button
          onClick={getNumberOfAcceptedApplications}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Count Accepted Applications
        </button>
        <button
          onClick={getNumberOfPendingApplications}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Count Pending Applications
        </button>
        <button
          onClick={getVolunteersPerYear}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          Get Volunteers Per Year
        </button>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-2">Applications:</h2>
        <ul className="list-disc pl-5">
          {applications.map((application) => (
            <li key={application._id} className="mb-2">
              {application.firstName} {application.lastName} -{" "}
              {application.status}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Volunteers Per Year:</h2>
        {volunteersPerYear.length > 0 ? (
          <ul className="list-disc pl-5">
            {volunteersPerYear.map((yearData) => (
              <li key={yearData._id} className="mb-2">
                Year {yearData._id}: {yearData.count} volunteers
              </li>
            ))}
          </ul>
        ) : (
          <p>No volunteer applications accepted!</p>
        )}
      </section>
    </div>
  );
}

export default VolunteerManagement;
