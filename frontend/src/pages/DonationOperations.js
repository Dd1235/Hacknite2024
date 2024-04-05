import React, { useState, useEffect } from "react";

const DonationOperations = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [uniqueDonors, setUniqueDonors] = useState(0);
  const [recentDonations, setRecentDonations] = useState([]);
  const [donations, setDonations] = useState([]);

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

  const getAllDonations = async () => {
    try {
      const response = await fetch("/api/donations/all");
      const data = await response.json();
      if (data.success) {
        setDonations(data.donations);
      } else {
        throw new Error(data.message || "Failed to fetch all donations");
      }
    } catch (error) {
      setError((prevError) => prevError + " " + error.message);
    }
  };

  const fetchRecentDonations = async () => {
    try {
      const response = await fetch("/api/donations/getrecent/4"); // Adjust the URL as needed
      const data = await response.json();
      if (data.success) {
        setRecentDonations(data.donations);
      } else {
        throw new Error(data.message || "Failed to fetch recent donations");
      }
    } catch (error) {
      setError((prevError) => prevError + " " + error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTotalAmount();
      await fetchUniqueDonorsCount();
      await fetchRecentDonations();
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
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md bg-white">
      <h1 className="text-xl font-semibold text-center mb-4">
        Donations Overview
      </h1>
      <p className="text-lg text-gray-700">
        Total donation amount: Rs{totalAmount.toLocaleString()}
      </p>
      <p className="text-lg text-gray-700">
        Total unique donors: {uniqueDonors}
      </p>
      <div>
        <h2 className="text-lg font-semibold text-center mb-2">
          Recent Donations
        </h2>
        {recentDonations.length > 0 ? (
          <ul>
            {recentDonations.map((donation, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{donation.firstName}</span>:{" "}
                {donation.message}
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent donations to display.</p>
        )}
      </div>
    </div>
  );
};

export default DonationOperations;
