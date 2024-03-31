import React from "react";
import { useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div
      className="thank-you-page-container"
      style={{
        padding: "40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Thank You{name ? ` ${name}` : ""}!
      </h1>
      <p style={{ fontSize: "1.25rem" }}>Your donation has been received.</p>
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontSize: "1rem" }}>We deeply appreciate your support.</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
