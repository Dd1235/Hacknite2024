import React from "react";

export default function StatsWidget(props) {
  return (
    <div className="mint-1-bg flex py-7 h-full w-full justify-evenly rounded-md">
      <div className="w-52 border-r-4 mint-2-border px-2">
        <div className="transform-scale font-semibold font-lg">
          Total Donations
        </div>
        <div className="text-3xl font-bold">₹63,802</div>
      </div>
      <div className="w-52 border-r-4 mint-2-border px-2">
        <div className="transform-scale font-semibold font-lg">
          Unique Donors
        </div>
        <div className="text-3xl font-bold">15</div>
      </div>
      <div className="w-52 border-r-4 mint-2-border px-2">
        <div className="transform-scale font-semibold font-lg">
          Accepted Applications
        </div>
        <div className="text-3xl font-bold">15</div>
      </div>
      <div className="w-52 border-r-4 mint-2-border px-2">
        <div className="transform-scale font-semibold font-lg">
          Rejected Applications
        </div>
        <div className="text-3xl font-bold">9</div>
      </div>
      <div className="w-52 mint-2-border px-2">
        <div className="transform-scale font-semibold font-lg">
          Pending Applications
        </div>
        <div className="text-3xl font-bold">5</div>
      </div>
    </div>
  );
}
