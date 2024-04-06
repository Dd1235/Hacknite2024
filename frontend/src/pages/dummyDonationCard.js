// api/volunteers/:id
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DonationDetails() {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);
  const navigate = useNavigate();

  const base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await fetch(`${base_url}/api/donations/${id}`);
        const data = await response.json();
        setDonation(data);
      } catch (error) {
        console.error("Error fetching Donation details:", error);
      }
    };

    fetchDonation();
  }, [id]);

  return (
    <div>
      <div>
        <div className="max-w-4xl shadow sanspro mx-auto p-8 dark:dark-bg black-text dark:white-text">
          <h1 className="text-3xl font-bold black-text playfair mb-4 dark:white-text">
            <button
              className="mx-6 w-12 h-12 hover:bg-gray-300  rounded-full group"
              onClick={() => navigate(-1)}
            >
              <i className="fa-solid fa-right-from-bracket text-2xl leading-9 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            </button>
            Donation Details
          </h1>
          <ul className="list-disc list-inside rounded-lg p-6 mb-6">
            {Object.entries(donation).map(([key, value]) => (
              <li key={key} className="border-b border-gray-200 pb-2 mt-2">
                <strong className="font-semibold">{key}:</strong>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DonationDetails;
