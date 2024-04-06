import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../resources/Vector.png";
import drkLogo from "../resources/Vector-blk.png";

export default function Navbar(props) {
  const [activeElement, setActiveElement] = useState("Homepage");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const HandleNav = (id) => {
    setActiveElement(id);

    // goose chaged, now you go to the top of the page when you click on a nav item, can have smooth behaviour too
    window.scrollTo({ top: 0, behavior: "auto" });
    // goose changed
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("navbar").classList.add("mint-1-bg");
    document.getElementById("navbar").classList.add("dark:mint-3-bg");
  };

  useEffect(() => {
    const scrollFunction = () => {
      if (!isMenuOpen) {
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          document.getElementById("navbar").classList.add("mint-1-bg");
          document.getElementById("navbar").classList.add("dark:mint-3-bg");
        } else {
          document.getElementById("navbar").classList.remove("mint-1-bg");
          document.getElementById("navbar").classList.remove("dark:mint-3-bg");
        }
      } else {
        document.getElementById("navbar").classList.add("mint-1-bg");
      }
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Update activeElement based on the current location
    const pathname = location.pathname;
    const id = ids.find((item) => item.path === pathname)?.id;
    if (id) {
      setActiveElement(id);
    }
  }, [location]);

  const ids = [
    { id: "Homepage", path: "/" },
    { id: "AboutUs", path: "/about-us" },
    { id: "MeetOurTeam", path: "/meet-our-team" },
    { id: "Projects", path: "/projects" },
    { id: "GetInvolved", path: "/get-involved" },
    { id: "FAQs", path: "/faqs" },
  ];

  return (
    <div>
      <nav
        className="fixed w-full z-20 top-0 start-0 dark:mint-3-bg"
        id="navbar"
      >
        <div className="sanspro font-bold max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link to="/">
              <div className="playfair flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src={props.isDarkMode ? Logo : drkLogo}
                  className="h-8"
                  alt="Flowbite Logo"
                />
                <span className="black-text self-center text-2xl font-semibold whitespace-nowrap dark:white-text">
                  {props.title}
                </span>
              </div>
            </Link>
            <button
              id="theme-toggle"
              type="button"
              onClick={() => {
                props.setIsDarkMode((prev) => !prev);
              }}
              className="black-text dark:white-text hover:white-bg dark:hover:mint-2-bg rounded-full text-sm p-2.5"
            >
              {props.isDarkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm black-text rounded-lg md:hidden hover:mint-1-bg focus:outline-none focus:ring-2 focus:ring-white dark:white-text dark:hover:mint-2-bg"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleMenu}
              id="navbar-button"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              isMenuOpen
                ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
                : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-sticky"
          >
            <ul
              className="font-semibold flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
              id="nav-list"
            >
              {ids.map(({ id, path }) => (
                <li key={id}>
                  <Link
                    to={path}
                    className={`block py-2 px-3 ${
                      activeElement === id
                        ? "mint-3-text white-bg md:dark:white-text"
                        : "text-gray-500 dark:white-text dark:hover:mint-2-bg md:dark:text-gray-300"
                    } rounded ${
                      activeElement === id
                        ? "md:bg-transparent md:black-text"
                        : "hover:mint-3-text hover:white-bg md:hover:bg-transparent md:hover:black-text"
                    } md:p-0 md:dark:hover:bg-transparent`}
                    id={id}
                    onClick={() => {
                      HandleNav(id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
