import React from "react";

export default function StatsWidget(props) {
  return (
    <div className="sanspro mint-1-bg dark:mint-3-bg dark:white-text sm:flex grid grid-cols-2 gap-3 sm:gap-1 text-center py-7 h-full px-5 sm:px-0 w-full justify-evenly rounded-md">
      <div className="sm:w-52 border-r-4 mint-2-border flex flex-col justify-center items-center">
        <div className="font-semibold text-sm lg:text-base w-4/5">
          Total Donations
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
          ₹{props.totalAmount}
        </div>
      </div>
      <div className="sm:w-52 border-r-4 mint-2-border flex flex-col justify-center items-center">
        <div className="font-semibold text-sm lg:text-base w-4/5">
          Unique Donors
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {props.uniqueDonors}
        </div>
      </div>
      <div className="sm:w-52 border-r-4 mint-2-border flex flex-col justify-center items-center">
        <div className="font-semibold text-sm lg:text-base w-4/5">
          Accepted Applications
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {props.acceptedApplications}
        </div>
      </div>
      <div className="sm:w-52 border-r-4 mint-2-border flex flex-col justify-center items-center">
        <div className="font-semibold text-sm lg:text-base w-4/5">
          Rejected Applications
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {props.rejectedApplications}
        </div>
      </div>
      <div className="sm:w-52 border-r-4 sm:border-r-0 mint-2-border flex flex-col justify-center items-center">
        <div className="font-semibold text-sm lg:text-base w-4/5">
          Pending Applications
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {props.pendingApplications}
        </div>
      </div>
    </div>
  );
}
