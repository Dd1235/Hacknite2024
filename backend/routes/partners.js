const express = require("express");
const Partner = require("../models/partnerModel");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/", async (req, res) => {
  const { institution, firstName, lastName, phoneNumber, email, message } =
    req.body;
  try {
    const newPartner = await Partner.create({
      institution,
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
      status: "pending",
    });
    res.status(200).json({
      message: "Partner registered successfully.",
      partner: newPartner,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
