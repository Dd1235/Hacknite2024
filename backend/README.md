# Backend Repository

This repository contains the server-side code and logic for our prototype NGO site made for an intra college hackathon(Hacknite) for freshmen students of IIIT Bangalore. It is hosted on render. The site itself is hosted on vercel [here](https://frontend-hacknite.vercel.app/).
The frontend repository could be found [here](https://github.com/Dd1235/Frontend_hacknite?tab=readme-ov-file)

## Environment Variables

Before running the backend, make sure to configure the following environment variables:

- `MONGODB_URI`: Your MongoDB connection URI.
- `PORT`: The port number for the server.
- `SMTP_USER`: Your SMTP username (outlook only) for sending emails
- `SMTP_PASS`: Your SMTP password for sending emails.
- `SECRET`: Your secret key for JWT token generation.

You can set these environment variables in a `.env` file in the root directory of the project. Ensure not to commit sensitive information to version control.

## Getting Started

To get started with the backend, follow these steps:

1. Clone the repository to your local machine

2. Install the necessary dependencies by running:

   ```bash
   npm install
   ```

3. Start the server by running:

   ```bash
   npm start
   ```

   This will deploy the development server on `localhost:4000`.
# API Reference

This section provides a detailed reference to the API endpoints available in the project, including the request methods, paths, and a brief description of what each endpoint does.

## User Endpoints

- `POST /api/user/login`: Authenticates a user and returns a token.
- `POST /api/user/signup`: Registers a new user.
- `POST /api/user/reset-password`: Initiates a password reset for a user.

## Donations Endpoints

- `POST /api/donations`: Records a new donation.
- `GET /api/donations/chart`: Fetches monthly donation averages.
- `GET /api/donations/totalAmount`: Retrieves the total amount of donations.
- `GET /api/donations/donors/count`: Counts the number of unique donors.
- `GET /api/donations/getrecent/:n`: Retrieves the most recent `n` donations.
- `GET /api/donations/all`: Fetches all donations.
- `GET /api/donations/:id`: Fetches a specific donation by ID.

## Volunteer Endpoints

- `POST /api/volunteers`: Submits a new volunteer application.
- `GET /api/volunteers/peryear`: Retrieves volunteer applications per year.
- `PATCH /api/volunteers/:id/status`: Updates the status of a volunteer application.
- `GET /api/volunteers/all`: Fetches all volunteer applications.
- `GET /api/volunteers/pending`: Retrieves all pending volunteer applications.
- `GET /api/volunteers/accepted`: Retrieves all accepted volunteer applications.
- `GET /api/volunteers/rejected`: Retrieves all rejected volunteer applications.
- `GET /api/volunteers/accepted/count`: Counts all accepted volunteer applications.
- `GET /api/volunteers/pending/count`: Counts all pending volunteer applications.
- `GET /api/volunteers/:id`: Fetches a specific volunteer application by ID.
- `GET /api/volunteers/rejected/count`: Counts all rejected volunteer applications.

## Partner Endpoints

- `POST /api/partners`: Registers a new partner.
- `GET /api/partners/stats`: Retrieves statistics about partners.

## Email Verification Endpoints

- `POST /api/validate_email/send`: Sends an OTP for email verification.
- `POST /api/validate_email/verify`: Verifies an OTP for email validation.

## Password Reset Endpoints

- `POST /api/reset/send-otp`: Sends an OTP for password reset.
- `POST /api/reset/verify-otp`: Verifies an OTP for password reset.

Ensure to replace `<id>`, `<n>`, and other placeholder values with actual data as required by your requests.


## License

This project is licensed under the [MIT License](https://frontend-hacknite.vercel.app/oops).
