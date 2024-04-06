// api/volunteers/:id
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VolunteerDetails() {
  const { id } = useParams();
  const [volunteer, setVolunteer] = useState(null);
  const navigate = useNavigate();

  const base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const response = await fetch(`${base_url}/api/volunteers/${id}`);
        const data = await response.json();
        setVolunteer(data);
      } catch (error) {
        console.error("Error fetching volunteer details:", error);
      }
    };

    fetchVolunteer();
  }, [id]);

  const handleAccept = async () => {
    try {
      await fetch(`${base_url}/api/volunteers/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "accepted" }),
      });
      alert("Volunteer status updated: Accepted");
      // navigate("/applications");
    } catch (error) {
      console.error("Error updating volunteer status:", error);
    }
  };

  const handlePending = async () => {
    try {
      await fetch(`${base_url}/api/volunteers/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "pending" }),
      });
      alert("Volunteer status updated: Pending");
      // navigate("/applications");
    } catch (error) {
      console.error("Error updating volunteer status:", error);
    }
  };

  const handleReject = async () => {
    try {
      await fetch(`${base_url}/api/volunteers/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "rejected" }),
      });
      alert("Volunteer status updated: Rejected");
      // navigate("/applications");
    } catch (error) {
      console.error("Error updating volunteer status:", error);
    }
  };

  if (!volunteer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-4xl shadow sanspro mx-auto p-8 dark:dark-bg black-text dark:white-text">
        <h1 className="text-3xl font-bold black-text playfair mb-4 dark:white-text">
          <button
            className="mx-6 w-12 h-12 hover:bg-gray-300  rounded-full group"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-right-from-bracket text-2xl leading-9 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
          </button>
          Volunteer Details
        </h1>
        <ul className="list-disc list-inside rounded-lg p-6 mb-6">
          {Object.entries(volunteer)
            .slice(1, -3)
            .map(([key, value]) => (
              <li key={key} className="border-b border-gray-200 pb-2 mt-2">
                <strong className="font-semibold">{key}:</strong>{" "}
                {key === "availableDays" ? value.join(", ") : value}
              </li>
            ))}
        </ul>

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
      </div>
    </div>
  );
}

export default VolunteerDetails;
