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
