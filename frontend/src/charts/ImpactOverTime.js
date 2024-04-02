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

function ImpactOverTime() {
  let data = [
    {
      year: "2010",
      beneficiaries: 900,
      communities: 20,
      schools: 5,
    },
    {
      year: "2011",
      beneficiaries: 1400,
      communities: 25,
      schools: 7,
    },
    {
      year: "2012",
      beneficiaries: 2100,
      communities: 30,
      schools: 10,
    },
    {
      year: "2013",
      beneficiaries: 2400,
      communities: 35,
      schools: 12,
    },
    {
      year: "2014",
      beneficiaries: 2900,
      communities: 40,
      schools: 15,
    },
    {
      year: "2015",
      beneficiaries: 3800,
      communities: 45,
      schools: 18,
    },
    {
      year: "2016",
      beneficiaries: 3500,
      communities: 50,
      schools: 20,
    },
    {
      year: "2017",
      beneficiaries: 4600,
      communities: 55,
      schools: 22,
    },
    {
      year: "2018",
      beneficiaries: 5200,
      communities: 60,
      schools: 25,
    },
    {
      year: "2019",
      beneficiaries: 5000,
      communities: 65,
      schools: 28,
    },
    {
      year: "2020",
      beneficiaries: 6000,
      communities: 70,
      schools: 30,
    },
  ];

  const generateRealisticData = (data) => {
    return data.map(
      (
        { year, beneficiaries, communities, schools, healthcare_centers },
        index
      ) => ({
        year,
        beneficiaries:
          beneficiaries + Math.round(Math.random() * 300) - 150 + index * 50,
        communities:
          communities + Math.round(Math.random() * 5) - 2 + index * 1,
        schools: schools + Math.round(Math.random() * 3) - 1 + index * 0.5,
      })
    );
  };

  data = generateRealisticData(data);

  // Add random deviation to each data point
  const randomizeData = (data) => {
    return data.map(
      ({ year, beneficiaries, communities, schools, healthcare_centers }) => ({
        year,
        beneficiaries: beneficiaries + Math.round(Math.random() * 1000),
        communities: communities + Math.round(Math.random() * 10),
        schools: schools + Math.round(Math.random() * 5),
        healthcare_centers: healthcare_centers + Math.round(Math.random() * 3),
      })
    );
  };

  const randomizedData = randomizeData(data);

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
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#82ca9d"
          domain={[0, 200]}
        />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="beneficiaries" fill="#0088FE" />
        <Bar yAxisId="right" dataKey="communities" stackId="a" fill="#00C49F" />
        <Bar yAxisId="right" dataKey="schools" stackId="a" fill="#FFBB28" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ImpactOverTime;
