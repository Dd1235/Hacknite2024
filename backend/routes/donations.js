const express = require("express");
const router = express.Router();
const { monthlyAverages } = require("../controllers/chartController");
const {
  makeDonation,
  totalAmount,
  numberofUniqueDonors,
  getRecentDonations,
  getAllDonations,
  getDonationById,
} = require("../controllers/donationController");

// /api/donations
router.post("/", makeDonation);

router.get("/chart", monthlyAverages);
router.get("/totalAmount", totalAmount);
router.get("/donors/count", numberofUniqueDonors);
router.get("/getrecent/:n", getRecentDonations);
router.get("/all", getAllDonations);
router.get("/:id", getDonationById);
module.exports = router;
