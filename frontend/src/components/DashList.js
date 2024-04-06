import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RandomIcon from "../resources/chooseIcon";

export default function DashList(props) {
  return (
    <div className="lg:w-4/5 black-text shadow rounded-lg p-2">
      <div className="dark:white-text py-4 px-6 rounded-md mb-6">
        <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold playfair leading-5">
          {props.heading}
        </h1>
      </div>
      <div className="md:mt-6 flex flex-col gap-5">
        {props.applications.map((application) => (
          <div
            key={application._id}
            className="flex flex-col sm:flex-row h-fit sm:py-0 py-5 items-center justify-between w-full shadow rounded-md overflow-hidden relative"
          >
            <div
              to={`/volunteer-form/${application._id}`}
              className="flex h-fit justify-between p-4  flex-col gap-4 sm:gap-0 sm:flex-row items-center"
            >
              <div className="h-12">
                <RandomIcon />
              </div>
              <div className="details dark:white-text flex flex-col px-5 items-center sm:items-start">
                <div className="md:text-base lg:text-xl leading-3 font-semibold mb-2">
                  {application.firstName} {application.lastName}
                </div>
                <div className="text-gray-600 dark:text-gray-200">
                  {application.email}
                </div>
              </div>
            </div>
            <Link
              to={`/volunteer-form/${application._id}`}
              className="h-fit mx-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Review
            </Link>
          </div>
        ))}
        {props.applications.length ? (
          <></>
        ) : (
          <p className="text-center">No items to display</p>
        )}
      </div>
    </div>
  );
}
