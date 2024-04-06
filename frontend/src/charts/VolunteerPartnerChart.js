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

function VolunteerPartnerChart() {
  const [volunteersPerYear, setVolunteersPerYear] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  let base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  const getVolunteersPerYear = async () => {
    try {
      const response = await fetch(`${base_url}/api/volunteers/peryear`);
      const data = await response.json();
      setVolunteersPerYear(data);
    } catch (error) {
      console.error("Error getting volunteers per year:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getVolunteersPerYear();
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const data = [
    { year: 2014, volunteers: 94, partners: 5 },
    { year: 2015, volunteers: 129, partners: 8 },
    { year: 2016, volunteers: 145, partners: 10 },
    { year: 2017, volunteers: 173, partners: 12 },
    { year: 2018, volunteers: 218, partners: 15 },
    { year: 2019, volunteers: 200, partners: 18 },
    { year: 2020, volunteers: 256, partners: 20 },
    { year: 2021, volunteers: 292, partners: 22 },
    { year: 2022, volunteers: 300, partners: 25 },
    { year: 2023, volunteers: 332, partners: 28 },
    { year: 2024, volunteers: 140, partners: 9 },
  ];

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;

  if (error)
    return (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );

  data[10].volunteers = data[10].volunteers + volunteersPerYear[0].count;

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
