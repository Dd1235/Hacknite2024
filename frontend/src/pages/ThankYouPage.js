import React, { props } from "react";
import { useLocation } from "react-router-dom";

// can use png images instead of gradients for background images
import image from "../resources/cool-background.png";

const ThankYouPage = (props) => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div>
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

          backgroundColor: props.isDarkMode ? "#065f12" : "#00e921",
          // backgroundImage: `url(${image})`,
          backgroundImage: props.isDarkMode
            ? "linear-gradient(160deg, #065f12 0%, #23b3a4 50%, #ffffff 100%)"
            : "linear-gradient(160deg, #00e921 0%, #2eb7a8 50%, #ffffff 100%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color: props.isDarkMode ? "White" : "Black",
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
    </div>
  );
};

export default ThankYouPage;
