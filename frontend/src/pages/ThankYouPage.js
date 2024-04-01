import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div>
      <div className="wrapper thank-you-page-container black-text dark:white-text sanspro h-screen flex flex-col items-center justify-center">
        <svg
          className="heart"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="101.7px"
          height="87.6px"
          viewBox="0 0 101.7 87.6"
          enableBackground="new 0 0 101.7 87.6"
        >
          <path
            d="M51,12.8c0-0.1-0.1-0.1-0.1-0.2c0,0.1-0.1,0.1-0.1,0.2C31-10.7,0,0.2,0,28.9c0,27.6,40.7,56.9,50.9,58.8
            c10.1-1.8,50.9-31.1,50.9-58.8C101.7,0.2,70.7-10.7,51,12.8z"
          />
        </svg>
        <svg
          className="heart"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="101.7px"
          height="87.6px"
          viewBox="0 0 101.7 87.6"
          enableBackground="new 0 0 101.7 87.6"
        >
          <path
            d="M51,12.8c0-0.1-0.1-0.1-0.1-0.2c0,0.1-0.1,0.1-0.1,0.2C31-10.7,0,0.2,0,28.9c0,27.6,40.7,56.9,50.9,58.8
            c10.1-1.8,50.9-31.1,50.9-58.8C101.7,0.2,70.7-10.7,51,12.8z"
          />
        </svg>
        <svg
          className="heart"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="101.7px"
          height="87.6px"
          viewBox="0 0 101.7 87.6"
          enableBackground="new 0 0 101.7 87.6"
        >
          <path
            d="M51,12.8c0-0.1-0.1-0.1-0.1-0.2c0,0.1-0.1,0.1-0.1,0.2C31-10.7,0,0.2,0,28.9c0,27.6,40.7,56.9,50.9,58.8
            c10.1-1.8,50.9-31.1,50.9-58.8C101.7,0.2,70.7-10.7,51,12.8z"
          />
        </svg>
        <svg
          className="heart"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="101.7px"
          height="87.6px"
          viewBox="0 0 101.7 87.6"
          enableBackground="new 0 0 101.7 87.6"
        >
          <path
            d="M51,12.8c0-0.1-0.1-0.1-0.1-0.2c0,0.1-0.1,0.1-0.1,0.2C31-10.7,0,0.2,0,28.9c0,27.6,40.7,56.9,50.9,58.8
            c10.1-1.8,50.9-31.1,50.9-58.8C101.7,0.2,70.7-10.7,51,12.8z"
          />
        </svg>
        <svg
          className="heart"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="101.7px"
          height="87.6px"
          viewBox="0 0 101.7 87.6"
          enableBackground="new 0 0 101.7 87.6"
        >
          <path
            d="M51,12.8c0-0.1-0.1-0.1-0.1-0.2c0,0.1-0.1,0.1-0.1,0.2C31-10.7,0,0.2,0,28.9c0,27.6,40.7,56.9,50.9,58.8
            c10.1-1.8,50.9-31.1,50.9-58.8C101.7,0.2,70.7-10.7,51,12.8z"
          />
        </svg>
        <h1 className="playfair text-5xl sm:text-7xl font-bold z-10 w-4/5 text-center py-2 sm:py-4">
          Thank You{name ? ` ${name}` : ""}!
        </h1>
        <p className="text-sm sm:text-lg z-10">
          Your donation has been received.
        </p>
        <div className="text-sm sm:text-lg text-justify z-10 w-4/5 lg:w-[70%] gap-2 sm:gap-4 flex flex-col py-3">
          <p>
            Thank you for your generous donation to the EduReach India
            Foundation. Your support means a lot to us and will help us make a
            real difference in the lives of children in rural India.
          </p>
          <p>
            Your donation will go towards providing education, healthcare, and
            basic necessities to those who need it most. With your help, we can
            empower individuals, transform communities, and create a brighter
            future for all.
          </p>
          <p>
            We will be sending you a confirmation email shortly. If you have any
            questions or need further information, please don't hesitate to
            contact us at info@edureachindia.org.
          </p>
          <p>
            Once again, thank you for your kindness and generosity. Together, we
            can make a positive impact that lasts a lifetime.
          </p>
          <p>
            Sincerely,
            <br />
            The EduReach India Foundation Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
