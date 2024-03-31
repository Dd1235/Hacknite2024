require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const donationRoutes = require("./routes/donations");
const volunteerRoutes = require("./routes/volunteers");

// Middlewares
// app.use(cors());
app.use(express.json()); // for parsing application/json

app.use("/api/donations", donationRoutes);
app.use("/api/volunteer", volunteerRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
