import React, { useState, useEffect } from "react";

const PartnersStats = () => {
  const [stats, setStats] = useState({ totalPartners: 0, partnersPerYear: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/partners/stats");
        if (!response.ok) throw new Error("Failed to fetch stats");

        const data = await response.json();
        setStats(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">
        Partners Statistics
      </h2>
      <p className="text-xl mb-4">
        Total Partners:{" "}
        <span className="font-semibold">{stats.totalPartners}</span>
      </p>
      <div>
        <h3 className="text-xl font-bold mb-2">Partners Created Per Year:</h3>
        {stats.partnersPerYear.length > 0 ? (
          <ul className="list-disc pl-5">
            {stats.partnersPerYear.map(({ _id, count }) => (
              <li key={_id} className="text-lg mb-1">
                Year {_id}:{" "}
                <span className="font-semibold">{count} partners</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default PartnersStats;
