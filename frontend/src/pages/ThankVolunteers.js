import React from "react";
import NyanCat from "../components/NyanCat";

export default function ThankVolunteers() {
  return (
    <div className="h-screen">
      <div className="text-left gap-10 white-text sanspro h-screen flex flex-col items-center justify-center">
        <h1 className="playfair text-5xl w-4/5 sm:text-7xl font-bold z-10 py-2 sm:py-4">
          Thank You!
        </h1>
        <p className="text-sm sm:text-lg w-4/5 z-10">
          Your form is pending.
          <br /> You will a recieve an email if your form is approved.
        </p>
      </div>
      <NyanCat />
    </div>
  );
}
