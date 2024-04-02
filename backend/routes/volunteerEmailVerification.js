//  /api/validate_email/send and /api/validate_email/otp

const express = require("express");

const router = express.Router();

const {
  emailoptsend,
  verifyOTP,
} = require("../controllers/emailVerificatonController");

// if correct otp redirect to volunteer page

router.post("/send", emailoptsend);
router.post("/verify", verifyOTP);

module.exports = router;
