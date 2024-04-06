import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function VolunteerDash(props) {
  const data = [
    { month: "Jan", volunteers: 17 },
    { month: "Feb", volunteers: 15 },
    { month: "Mar", volunteers: 18 },
    { month: "Apr", volunteers: 0 },
  ];

  data[3].volunteers = data[3].volunteers + props.count;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: -20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" stroke="#fff" />
        <YAxis yAxisId="left" orientation="left" stroke="#fff" />
        <Tooltip />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="volunteers"
          fill={props.isDarkMode ? "#bae3ff" : "#0088FE"}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default VolunteerDash;
