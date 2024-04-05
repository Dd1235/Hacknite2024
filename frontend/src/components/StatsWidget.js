import React from "react";

export default function StatsWidget(props) {
  return (
    <div className="sanspro mint-1-bg flex py-7 h-full w-full justify-evenly rounded-md">
      <div className="w-52 border-r-4 mint-2-border pl-1">
        <div className="transform-scale font-semibold font-sm">
          Total Donations
        </div>
        <div className="text-3xl font-semi-bold">₹63,802</div>
      </div>
      <div className="w-52 border-r-4 mint-2-border pl-1">
        <div className="transform-scale font-base">Unique Donors</div>
        <div className="text-3xl font-semi-bold">15</div>
      </div>
      <div className="w-52 border-r-4 mint-2-border pl-1">
        <div className="transform-scale font-base">Accepted Applications</div>
        <div className="text-3xl font-semi-bold">15</div>
      </div>
      <div className="w-52 border-r-4 mint-2-border pl-1">
        <div className="transform-scale font-base">Rejected Applications</div>
        <div className="text-3xl font-semi-bold">9</div>
      </div>
      <div className="w-52 mint-2-border pl-1">
        <div className="transform-scale  font-base">Pending Applications</div>
        <div className="text-3xl font-semi-bold">5</div>
      </div>
    </div>
  );
}
