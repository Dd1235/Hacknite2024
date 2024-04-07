import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login, error, isLoading } = useLogin();
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);

      if (!error) {
        navigate("/applications");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form
      className="max-w-md mx-auto mt-10 space-y-4 bg-white p-8 shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-semibold text-center">Log In</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email address:
        </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          type={passwordVisible ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-600"
        >
          {passwordVisible ? "Hide" : "Show"}
        </button>
      </div>

      <button
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-300"
      >
        Log in
      </button>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <div className="text-center mt-4">
        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Forgot Password?
        </button>
      </div>
    </form>
  );
};

export default Login;
