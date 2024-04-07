import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedCounter = () => {
  return (
    <div
      style={{
        height: "2vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "100vh" }}></div>
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ fontSize: "48px", textAlign: "center" }}>
            Trusted by over{" "}
            {isVisible ? <CountUp start={0} end={20000} duration={1} /> : "0"}{" "}
            companies
          </div>
        )}
      </VisibilitySensor>

      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default AnimatedCounter;
