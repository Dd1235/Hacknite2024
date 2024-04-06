import React from "react";

function DonationDetails({ donation }) {
  const formatKey = (key) => {
    return (
      key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")
    );
  };

  const formatValue = (key, value) => {
    if (key === "createdAt") {
      return new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return value;
  };

  return (
    <div>
      <div>
        <div className="max-w-4xl shadow sanspro mx-auto p-8 dark:dark-bg black-text dark:white-text">
          <h1 className="text-3xl font-bold black-text playfair mb-4 dark:white-text">
            Donation Details
          </h1>
          <ul className="list-disc list-inside rounded-lg p-6 mb-6">
            {Object.entries(donation).map(([key, value]) => {
              if (key === "_id" || key === "__v") return null;

              return (
                <li key={key} className="border-b border-gray-200 pb-2 mt-2">
                  <strong className="font-semibold">{formatKey(key)}:</strong>{" "}
                  {formatValue(key, value)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DonationDetails;
