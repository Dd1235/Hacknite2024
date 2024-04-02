import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function EmailVerification() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const response = await fetch("api/validate_email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (response.ok) {
      setIsOtpSent(true);
      setMessage("OTP has been sent to your email.");
    } else {
      setMessage(data.error || "An error occurred while sending OTP.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/validate_email/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, enteredOTP: otp }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage("OTP verified successfully.");
      navigate("/volunteer-form", { state: { email: email } });
    } else {
      setMessage(data.error || "An error occurred during OTP verification.");
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      {!isOtpSent ? (
        <form onSubmit={handleSendOtp}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default EmailVerification;
