import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function ForgotPassword() {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  let navigate = useNavigate();
  const { dispatch } = useAuthContext();

  let base_url =
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}`
      : "";

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${base_url}/api/reset/send-otp`, {
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
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
      } else {
        setMessage(data.error || "An error occurred while sending OTP.");
      }
    } catch (error) {
      setMessage("Failed to send OTP. Please try again later.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${base_url}/api/reset/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, enteredOTP: otp }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsOtpVerified(true);
        setMessage("OTP verified successfully.");
      } else {
        setMessage(data.error || "An error occurred during OTP verification.");
      }
    } catch (error) {
      setMessage("Failed to verify OTP. Please try again later.");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${base_url}/api/user/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword: password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Password changed successfully.");
        navigate("/login");
      } else {
        setMessage(
          data.error || "An error occurred while changing the password."
        );
      }
    } catch (error) {
      setMessage("Failed to change the password. Please try again later.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (!isOtpSent) {
    return (
      <div className="max-w-md mx-auto my-10 p-6 shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
        <form onSubmit={handleSendOtp} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send OTP
          </button>
        </form>
        {message && <p className="text-red-500 mt-2">{message}</p>}
      </div>
    );
  } else if (isOtpSent && !isOtpVerified) {
    return (
      <div className="max-w-md mx-auto my-10 p-6 shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Verify OTP
          </button>
        </form>
        {message && <p className="text-red-500 mt-2">{message}</p>}
      </div>
    );
  } else {
    return (
      <div className="max-w-md mx-auto my-10 p-6 shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Set New Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
            >
              {passwordVisible ? "Hide" : "Show"}
            </span>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Change Password
          </button>
        </form>
        {message && <p className="text-red-500 mt-2">{message}</p>}
      </div>
    );
  }
}

export default ForgotPassword;
