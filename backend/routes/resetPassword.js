const express = require("express");
const router = express.Router();

const {
  emailoptsend,
  verifyOTP,
} = require("../controllers/emailResetController");

router.post("/send-otp", emailoptsend);

router.post("/verify-otp", verifyOTP);

module.exports = router;
