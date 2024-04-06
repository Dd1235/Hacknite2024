import React from "react";

function DonationDetails(props) {
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
      <h1>coming to the right place</h1>
    </div>
  );
}

export default DonationDetails;
