import React, { useState, useEffect } from "react";

const DonationOperations = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const response = await fetch("/api/donations/totalAmount");
        const data = await response.json();
        if (data.success) {
          setTotalAmount(data.totalAmount);
        } else {
          setError(data.error || "Failed to fetch the total amount");
        }
      } catch (error) {
        setError(error.error || "Failed to fetch the total amount");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTotalAmount();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md bg-white">
      <h1 className="text-xl font-semibold text-center mb-4">
        Total Donation Amount
      </h1>
      <p className="text-lg text-gray-700">
        {totalAmount
          ? `The total donation amount is: Rs.${totalAmount.toLocaleString()}`
          : "No donations found."}
      </p>
    </div>
  );
};

export default DonationOperations;
