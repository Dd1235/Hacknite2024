// api/volunteers/:id
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DonationDetails() {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);
  const navigate = useNavigate();

  const base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await fetch(`${base_url}/api/donations/${id}`);
        const data = await response.json();
        setDonation(data);
      } catch (error) {
        console.error("Error fetching Donation details:", error);
      }
    };

    fetchDonation();
  }, [id]);

  //   if (!donation) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <h1>Donation Details</h1>
    </div>
  );
}

export default DonationDetails;
