require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const donationRoutes = require("./routes/donations");

// Middlewares
// app.use(cors());
app.use(express.json()); // for parsing application/json

app.use("/api/donations", donationRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
