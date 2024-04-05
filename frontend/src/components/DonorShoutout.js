import React, { useEffect, useState } from "react";

export default function DonorShoutout() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [recentDonations, setRecentDonations] = useState([]);

  const getTime = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    const currentDate = new Date();

    const timeDifference = (currentDate - createdAtDate) / (1000 * 60); // Difference in minutes

    let timeAgo;

    if (timeDifference <= 5) {
      timeAgo = "5 minutes ago";
    } else if (timeDifference <= 10) {
      timeAgo = "10 minutes ago";
    } else if (timeDifference <= 60) {
      timeAgo = "an hour ago";
    } else if (timeDifference <= 120) {
      timeAgo = "few hours ago";
    } else if (timeDifference <= 1440) {
      timeAgo = "A day ago";
    } else {
      timeAgo = "Few days ago";
    }

    return timeAgo;
  };

  const fetchRecentDonations = async () => {
    try {
      const response = await fetch("/api/donations/getrecent/4"); // Adjust the URL as needed
      const data = await response.json();
      if (data.success) {
        setRecentDonations(data.donations);
      } else {
        throw new Error(data.message || "Failed to fetch recent donations");
      }
    } catch (error) {
      setError((prevError) => prevError + " " + error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchRecentDonations();
      console.log(recentDonations);
      // console.log(recentDonations[0].firstName);
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
    <div className=" break-words black-text flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl dark:white-text md:text-3xl lg:text-5xl font-bold playfair mt-5">
        Some Recent Donors
      </h1>
      <div className="h-fit py-20 md:w-4/5 lg:w[90%] flex-wrap dancing gap-20 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://imgs.search.brave.com/I-ESPwqsPPPl14R7_r2_KHQNaYQofcIyh2xmZsVL_34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhwNWkucG5n"
            className="w-80 absolute brightness-125"
          />
          <div className="flex flex-col items-center justify-between h-52">
            <div>
              <h6 className=" z-10 relative w-60 text-center text-2xl font-bold">
                ₹{recentDonations[0].amount}
              </h6>
              <h5 className="z-10 w-60 text-center relative mb-2 text-4xl font-bold tracking-tight">
                {recentDonations[0].firstName +
                  " " +
                  recentDonations[0].lastName}
              </h5>
              <p className="max-h-20 overflow-hidden z-10 w-60 relative mb-3 text-xl font-normal">
                "
                {recentDonations[0].message
                  ? recentDonations[0].message
                  : "..."}
                "
              </p>
            </div>
            <p className="z-10 w-40 sanspro text-right relative mb-3 text-sm font-normal">
              {getTime(recentDonations[0].createdAt)}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <img
            src="https://imgs.search.brave.com/I-ESPwqsPPPl14R7_r2_KHQNaYQofcIyh2xmZsVL_34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhwNWkucG5n"
            className="w-80 absolute brightness-125"
          />
          <div className="flex flex-col items-center justify-between h-52">
            <div>
              <h6 className=" z-10 relative w-60 text-center text-2xl font-bold">
                ₹{recentDonations[1].amount}
              </h6>
              <h5 className="z-10 w-60 text-center relative mb-2 text-4xl font-bold tracking-tight">
                {recentDonations[1].firstName +
                  " " +
                  recentDonations[1].lastName}
              </h5>
              <p className="max-h-20 overflow-hidden z-10 w-60 relative mb-3 text-xl font-normal">
                "
                {recentDonations[1].message
                  ? recentDonations[1].message
                  : "..."}
                "
              </p>
            </div>
            <p className="z-10 w-40 sanspro text-right relative mb-3 text-sm font-normal">
              {getTime(recentDonations[1].createdAt)}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <img
            src="https://imgs.search.brave.com/I-ESPwqsPPPl14R7_r2_KHQNaYQofcIyh2xmZsVL_34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhwNWkucG5n"
            className="w-80 absolute brightness-125"
          />
          <div className="flex flex-col items-center justify-between h-52">
            <div>
              <h6 className="z-10 relative w-60 text-center text-2xl font-bold">
                ₹{recentDonations[2].amount}
              </h6>
              <h5 className="z-10 w-60 text-center relative mb-2 text-4xl font-bold tracking-tight">
                {recentDonations[2].firstName +
                  " " +
                  recentDonations[2].lastName}
              </h5>
              <p className="max-h-20 overflow-hidden z-10 w-60 relative mb-3 text-xl font-normal">
                "
                {recentDonations[2].message
                  ? recentDonations[2].message
                  : "..."}
                "
              </p>
            </div>
            <p className="z-10 w-40 sanspro text-right relative mb-3 text-sm font-normal">
              {getTime(recentDonations[2].createdAt)}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-center flex-col">
          <img
            src="https://imgs.search.brave.com/I-ESPwqsPPPl14R7_r2_KHQNaYQofcIyh2xmZsVL_34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhwNWkucG5n"
            className="w-80 absolute brightness-125"
          />
          <div className="flex flex-col items-center justify-between h-52">
            <div>
              <h6 className=" z-10 relative w-60 text-center text-2xl font-bold">
                ₹{recentDonations[3].amount}
              </h6>
              <h5 className="z-10 w-60 text-center relative mb-2 text-4xl font-bold tracking-tight">
                {recentDonations[3].firstName +
                  " " +
                  recentDonations[3].lastName}
              </h5>
              <p className="max-h-20 overflow-hidden z-10 w-60 relative mb-3 text-xl font-normal">
                "
                {recentDonations[3].message
                  ? recentDonations[3].message
                  : "..."}
                "
              </p>
            </div>
            <p className="z-10 w-40 sanspro text-right relative mb-3 text-sm font-normal">
              {getTime(recentDonations[3].createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
