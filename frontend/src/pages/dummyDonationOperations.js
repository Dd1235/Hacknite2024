import React, { useState, useEffect } from "react";

const DonationOperations = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [uniqueDonors, setUniqueDonors] = useState(0);

  const fetchTotalAmount = async () => {
    try {
      const response = await fetch("/api/donations/totalAmount");
      const data = await response.json();
      if (data.success) {
        setTotalAmount(data.totalAmount);
      } else {
        throw new Error(data.error || "Failed to fetch the total amount");
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
        throw new Error(data.error || "Failed to fetch unique donors count");
      }
    } catch (error) {
      setError((prevError) => prevError + " " + error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTotalAmount();
      await fetchUniqueDonorsCount();
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
    </div>
  );
};

export default DonationOperations;
