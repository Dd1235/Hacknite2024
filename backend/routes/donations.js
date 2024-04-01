const express = require("express");
const router = express.Router();
const { monthlyAverages } = require("../controllers/chartController");
const { makeDonation } = require("../controllers/donationController");

router.post("/", makeDonation);

router.get("/chart", monthlyAverages);

module.exports = router;
