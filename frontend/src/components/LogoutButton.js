import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const LogoutButton = () => {
  const { dispatch } = useAuthContext();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
    }
  };

  return (
    <button
      className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      onClick={handleLogout}
    >
      <i className="fa-solid fa-power-off  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
      <span className="ms-3">Logout</span>
    </button>
  );
};

export default LogoutButton;
