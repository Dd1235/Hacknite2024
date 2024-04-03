import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useDonation = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  const submitForm = async (
    firstName,
    lastName,
    email,
    phoneNumber,
    amount,
    message
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        amount,
        message,
      }),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      // Redirect to the thank you page
      history("/thank-you-donation", { state: { name: firstName } });
    }
  };

  return { submitForm, isLoading, error };
};
