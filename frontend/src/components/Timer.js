import React, { useEffect, useState } from "react";

const Timer = ({ start }) => {
  const [time, setTime] = useState(600); // 10 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (start) {
      setIsRunning(true);
      setTime(600);
    } else {
      setIsRunning(false);
      setTime(0);
    }
  }, [start]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            // Perform any action when the timer reaches 0
            setIsRunning(false);
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <span className="text-base">
      {minutes}:{seconds}
    </span>
  );
};

export default Timer;
