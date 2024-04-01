const otpGenerator = require("otp-generator");

//  /api/validate_email/send and /api/validate_email/otp

let otpStore = {};

const { sendOTP } = require("../controllers/otpController");

const express = require("express");

const router = express.Router();

const emailoptsend = async (req, res) => {
  try {
    const otp = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });
    const email = req.body.email;
    otpStore[email] = { otp, timestamp: new Date().getTime() };
    sendOTP(email, otp);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// if correct otp redirect to volunteer page
const verifyOTP = async (req, res) => {
  const { enteredOTP } = req.body;
  const otpRecord = otpStore[email];
  if (
    otpRecord &&
    enteredOTP === otpRecord.otp &&
    new Date().getTime() - otpRecord.timestamp < 600000
  ) {
    delete otpStore[email];
    res.status(200).json({ message: "OTP verified successfully", email });
  } else {
    res.status(400).json({ error: "Invalid or expired OTP" });
  }
};

router.post("/send", emailoptsend);
router.post("/verify", verifyOTP);

module.exports = router;
