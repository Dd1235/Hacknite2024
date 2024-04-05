const express = require("express");
const Partner = require("../models/partnerModel");
const {
  createPartner,
  partnerStats,
} = require("../controllers/partnerController");

const router = express.Router();

router.post("/", createPartner);

router.get("/stats", partnerStats);

module.exports = router;
