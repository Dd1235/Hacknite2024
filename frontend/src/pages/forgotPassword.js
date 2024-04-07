import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Logo from "../resources/Vector.png";
import drkLogo from "../resources/Vector-blk.png";

function ForgotPassword(props) {
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
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src={props.isDarkMode ? Logo : drkLogo}
              alt="logo"
            />
            EduReach
          </div>
          <form
            onSubmit={handleSendOtp}
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <i
                  onClick={() => navigate(-1)}
                  className="fa-solid fa-right-from-bracket cursor-pointer mr-2 text-gray-500 transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                ></i>
                Forgot Password
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Send OTP
                </button>
                {message && <p className="text-red-500 mt-2">{message}</p>}
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  } else if (isOtpSent && !isOtpVerified) {
    return (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src={props.isDarkMode ? Logo : drkLogo}
              alt="logo"
            />
            EduReach
          </div>
          <form
            onSubmit={handleVerifyOtp}
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <i
                  onClick={() => navigate(-1)}
                  className="fa-solid fa-right-from-bracket cursor-pointer mr-2 text-gray-500 transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                ></i>
                Enter OTP
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    name="otp"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
                <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Verify OTP
                </button>
                {message && <p className="text-red-500 mt-2">{message}</p>}
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  } else {
    return (
      // <div className="max-w-md mx-auto my-10 p-6 shadow rounded">
      //   <h2 className="text-xl font-semibold mb-4">Set New Password</h2>
      //   <form onSubmit={handleChangePassword} className="space-y-4">
      //     <div className="relative">
      //       <input
      //         type={passwordVisible ? "text" : "password"}
      //         placeholder="Enter new password"
      //         value={password}
      //         onChange={(e) => setPassword(e.target.value)}
      //         required
      //         className="w-full p-2 border rounded"
      //       />
      //       <span
      //         onClick={togglePasswordVisibility}
      //         className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
      //       >
      //         {passwordVisible ? "Hide" : "Show"}
      //       </span>
      //     </div>
      //     <button
      //       type="submit"
      //       className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      //     >
      //       Change Password
      //     </button>
      //   </form>
      //   {message && <p className="text-red-500 mt-2">{message}</p>}
      // </div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src={props.isDarkMode ? Logo : drkLogo}
              alt="logo"
            />
            EduReach
          </div>
          <form
            onSubmit={handleChangePassword}
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Set New Password
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter Password
                  </label>
                  <div className="relative flex w-full justify-end top-2 px-3">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute text-sm text-gray-600"
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    placeholder={passwordVisible ? "1234567" : "••••••••"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Change Password
                </button>
                {message && <p className="text-red-500 mt-2">{message}</p>}
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ForgotPassword;
