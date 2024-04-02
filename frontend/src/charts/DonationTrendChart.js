import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
} from "recharts";

function DonationTrendChart() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("/api/donations/monthly_chart", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then(setData)
  //     .catch(console.error);
  // }, []);

  // return (
  //   <LineChart width={600} height={300} data={data}>
  //     <CartesianGrid stroke="#ccc" />
  //     <XAxis dataKey="_id" />
  //     <YAxis />
  //     <Tooltip />
  //     <Line type="monotone" dataKey="averageDonation" stroke="#8884d8" />
  //   </LineChart>
  // );

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="h-screen">
      <ResponsiveContainer width="50%" height="50%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Area type="monotone" dataKey="pv" stroke="#891a9d" fill="#891a91" />
          <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="#82ca91" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DonationTrendChart;

// Path: /charts
