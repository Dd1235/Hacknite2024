import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function DonationTrendChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/donations/chart", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="_id" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="averageDonation" stroke="#8884d8" />
    </LineChart>
  );
}

export default DonationTrendChart;

// Path: /charts
