// api/volunteers/:id
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VolunteerDetails() {
  const { id } = useParams();
  const [volunteer, setVolunteer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const response = await fetch(`/api/volunteers/${id}`);
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
      await fetch(`/api/volunteers/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "accepted" }),
      });
      alert("Volunteer accepted");
      navigate("/applications");
    } catch (error) {
      console.error("Error accepting volunteer:", error);
    }
  };

  const handleReject = async () => {
    try {
      await fetch(`/api/volunteers/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "rejected" }),
      });
      alert("Volunteer rejected");
      navigate("/applications");
    } catch (error) {
      console.error("Error rejecting volunteer:", error);
    }
  };

  if (!volunteer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Volunteer Details
        </h1>
        <ul className="list-disc list-inside bg-white shadow-md rounded-lg p-6 mb-6">
          {Object.entries(volunteer)
            .slice(1, -3)
            .map(([key, value]) => (
              <li key={key} className="border-b border-gray-200 pb-2 mt-2">
                <strong className="font-semibold">{key}:</strong>{" "}
                {key === "availableDays" ? value.join(", ") : value}
              </li>
            ))}
        </ul>

        <div className="flex justify-between space-x-4">
          <button
            onClick={handleAccept}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Accept
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
