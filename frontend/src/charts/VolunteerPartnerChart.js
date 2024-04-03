import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function VolunteerPartnerChart() {
  const data = [
    { year: 2010, volunteers: 100, partners: 5 },
    { year: 2011, volunteers: 120, partners: 8 },
    { year: 2012, volunteers: 150, partners: 10 },
    { year: 2013, volunteers: 180, partners: 12 },
    { year: 2014, volunteers: 200, partners: 15 },
    { year: 2015, volunteers: 220, partners: 18 },
    { year: 2016, volunteers: 250, partners: 20 },
    { year: 2017, volunteers: 280, partners: 22 },
    { year: 2018, volunteers: 300, partners: 25 },
    { year: 2019, volunteers: 320, partners: 28 },
    { year: 2020, volunteers: 350, partners: 30 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#0088FE"
          domain={[0, 400]}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#00C49F"
          domain={[0, 40]}
        />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="volunteers" fill="#0088FE" />
        <Bar yAxisId="right" dataKey="partners" stackId="a" fill="#00C49F" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default VolunteerPartnerChart;
