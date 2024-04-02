const Donation = require("../models/donationModel");

const monthlyAverages = async (req, res) => {
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
};

module.exports = { monthlyAverages };
