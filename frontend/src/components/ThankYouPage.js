import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ThankYouPage = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div>
      <Navbar />
      <div
        className={"thank-you-page-container"}
        style={{
          padding: "40px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1
          className="font-semibold"
          style={{ fontSize: "2.5rem", marginBottom: "20px" }}
        >
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
          <p style={{ fontSize: "1rem", color: "black" }}>
            We deeply appreciate your support.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
