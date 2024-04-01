import React, { useState } from "react";
import axios from "axios";

const EmailVerificationForm = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = async () => {
    try {
      await axios.post("/api/validate_email/send", { email });
      setOtpSent(true);
      setVerificationStatus("OTP has been sent to your email.");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setVerificationStatus("Failed to send OTP. Please try again.");
    }
  };

  const handleValidateOtp = async () => {
    try {
      const response = await axios.post("/api/validate_email/otp", {
        enteredOTP: otp,
      });
      setVerificationStatus(
        response.data.message || "Email successfully verified."
      );
    } catch (error) {
      console.error("Error validating OTP:", error);
      setVerificationStatus("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={otpSent}
        />
        {!otpSent && <button onClick={handleSendOtp}>Send OTP</button>}
      </div>
      {otpSent && (
        <div>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleValidateOtp}>Validate OTP</button>
        </div>
      )}
      <p>{verificationStatus}</p>
    </div>
  );
};

export default EmailVerificationForm;
