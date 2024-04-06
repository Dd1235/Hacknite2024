require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const donationRoutes = require("./routes/donations");
// const volunteerRoutes = require("./routes/volunteers");
const verifyEmail = require("./routes/volunteerEmailVerification");
const volunteerRoutes = require("./routes/volunteers");
const partnerRoutes = require("./routes/partners");
const userRoutes = require("./routes/user");
const resetPasswordRoutes = require("./routes/resetPassword");

// Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json

app.use("/api/donations", donationRoutes);
app.use("/api/validate_email", verifyEmail);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/user", userRoutes);
app.use("/api/reset", resetPasswordRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
