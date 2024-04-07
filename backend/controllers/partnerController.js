const Partner = require("../models/partnerModel");

const createPartner = async (req, res) => {
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
      error: error,
    });
  }
};

const partnerStats = async (req, res) => {
  try {
    const totalPartners = await Partner.countDocuments();

    const partnersPerYear = await Partner.aggregate([
      {
        $group: {
          _id: { $year: "$createdAt" },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({
      totalPartners,
      partnersPerYear,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  createPartner,
  partnerStats,
};
