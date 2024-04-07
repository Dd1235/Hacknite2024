# Hacknite Project (Edureach - Prototype NGO site)

This project consists of the frontend and backend code for a prototype NGO site created for an intra-college hackathon (Hacknite) for freshmen students at IIIT Bangalore.

## Quick Links

- **Frontend Demo:** [https://frontend-hacknite.vercel.app/](https://frontend-hacknite.vercel.app/) Hosted on vercel
- **Backend Service:** Hosted on Render (no public URL provided)

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed:

- Node.js and npm

### Setting Up

1. Clone this repository to your local machine:
2. Navigate to the project directory

## Environment Variables

Before running the backend, make sure to configure the following environment variables in you backend folder:

- `MONGODB_URI`: Your MongoDB connection URI.
- `PORT`: The port number for the server.
- `SMTP_USER`: Your SMTP username (outlook only) for sending emails
- `SMTP_PASS`: Your SMTP password for sending emails.
- `SECRET`: Your secret key for JWT token generation.

You can set these environment variables in a `.env` file in the root directory of the project. Ensure not to commit sensitive information to version control.

# Backend

1. Navigate to frontend directory by running:

   ```bash
   cd backend
   ```

2. Install the required dependencies by running the following command:

   ```bash
   npm install
   ```

3. Start the development server by running the following command:

   ```bash
   npm start
   ```

   This will deploy the development server on `localhost:4000`.

# Frontend

1. Navigate to frontend directory by running:
   ```bash
   cd frontend
   ```
2. Install the required dependencies by running the following command:

   ```bash
   npm install
   ```

3. Start the development server by running the following command:

   ```bash
   npm start
   ```

   This will deploy the development server on `localhost:3000`.
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

