# Frontend

This is the frontend repository for a intra college hackathon(Hacknite) for freshmen students of IIIT Bangalore.

This is a prototype NGO site created for the Hacknite hackathon. It is hosted [here](https://frontend-hacknite.vercel.app/) using Vercel.

## Getting Started

To get started with the frontend, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory
3. Install the required dependencies by running the following command:

   ```bash
   npm install
   ```

4. Start the development server by running the following command:

   ```bash
   npm start
   ```

   This will deploy the development server on `localhost:3000`.

5. The backend repository can be found [here](https://github.com/Dd1235/Backend_hacknite)

## URL Structures

- `/`: Homepage.
- `/about-us`: About Us page.
- `/meet-our-team`: Meet Our Team page.
- `/projects`: Projects page.
- `/get-involved`: Get Involved page.
- `/faqs`: FAQs page.
- `/donate-form`: Donation form page.
- `/volunteer-form`: Volunteer form page.
- `/partner-form`: Partner form page.
- `/forgot-password`: Forgot password page.
- `/login`: Login page if user is not logged in, otherwise redirects to `/applications`.
- `/applications`: Admin page to review volunteer applications if user is logged in, otherwise redirects to `/login`.
- `/thank-you-donation`: Thank you page for donations.
- `/thank-you-volunteer`: Thank you page for volunteers.

## License

This project is licensed under the [MIT License](https://frontend-hacknite.vercel.app/oops).
