import React, { useEffect, useState } from "react";
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
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  let base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  const fetchTotalAmount = async () => {
    try {
      const response = await fetch(`${base_url}/api/donations/totalAmount`);
      const data = await response.json();
      if (data.success) {
        setTotalAmount(data.totalAmount);
      } else {
        throw new Error(data.message || "Failed to fetch the total amount");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTotalAmount();
      setIsLoading(false);
    };

    fetchData();
  }, []);

  let data = [
    {
      year: "2014",
      beneficiaries: 751,
      communities: 21,
      schools: 6,
    },
    {
      year: "2015",
      beneficiaries: 1300,
      communities: 26,
      schools: 8,
    },
    {
      year: "2016",
      beneficiaries: 2174,
      communities: 33,
      schools: 10,
    },
    {
      year: "2017",
      beneficiaries: 2426,
      communities: 38,
      schools: 16,
    },
    {
      year: "2018",
      beneficiaries: 3181,
      communities: 42,
      schools: 19,
    },
    {
      year: "2019",
      beneficiaries: 4119,
      communities: 49,
      schools: 22,
    },
    {
      year: "2020",
      beneficiaries: 3881,
      communities: 56,
      schools: 23,
    },
    {
      year: "2021",
      beneficiaries: 4812,
      communities: 65,
      schools: 28,
    },
    {
      year: "2022",
      beneficiaries: 5516,
      communities: 66,
      schools: 29,
    },
    {
      year: "2023",
      beneficiaries: 5428,
      communities: 74,
      schools: 34,
    },
    {
      year: "2024",
      beneficiaries: 1300,
      communities: 10,
      schools: 5,
    },
  ];

  if (isLoading) return <div className="text-center text-lg">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );

  data[10].beneficiaries =
    data[10].beneficiaries + Math.floor(totalAmount / 500);
  data[10].communities = data[10].communities + Math.floor(totalAmount / 12500);
  data[10].schools = data[10].schools + Math.floor(totalAmount / 20000);

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
        <YAxis yAxisId="left" orientation="left" stroke="#0088FE" />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#00C49F"
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
