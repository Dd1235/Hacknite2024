import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedCounter = () => {
  return (
    <div className="h-fit flex flex-col justify-center items-center">
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div className="text-4xl text-center">
            Trusted by over{" "}
            {isVisible ? <CountUp start={0} end={500} duration={0.7} /> : "0"}{" "}
            companies
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default AnimatedCounter;
