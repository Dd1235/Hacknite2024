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

## License

This project is licensed under the [MIT License](https://frontend-hacknite.vercel.app/oops).
