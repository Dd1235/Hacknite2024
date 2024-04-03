const express = require("express");
const router = express.Router();
const { monthlyAverages } = require("../controllers/chartController");
const {
  makeDonation,
  totalAmount,
} = require("../controllers/donationController");

// /api/donations
router.post("/", makeDonation);

router.get("/chart", monthlyAverages);
router.get("/totalAmount", totalAmount);
module.exports = router;
