const express = require("express");
const Donation = require("../models/donationModel");
const router = express.Router();
const { parsePhoneNumberFromString } = require("libphonenumber-js");
const isValidPhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  return phoneNumber ? phoneNumber.isValid() : false;
};
router.post(
  "/",

  async (req, res) => {
    const validPhoneNumber = isValidPhoneNumber(req.body.phoneNumber);
    if (!validPhoneNumber) {
      return res.status(400).json({ error: "Invalid phone number" });
    }

    const { firstName, lastName, email, phoneNumber, amount, message } =
      req.body;

    try {
      const donation = await Donation.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        amount,
        message,
      });
      await donation.save();
      res.status(200).json(donation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.get("/chart", async (req, res) => {
  try {
    const monthlyAverages = await Donation.aggregate([
      {
        $group: {
          _id: { $month: "$date" },
          averageDonation: { $avg: "$amount" },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    res.json(monthlyAverages);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
