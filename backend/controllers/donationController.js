var nodeoutlook = require("nodejs-nodemailer-outlook");
const { parsePhoneNumberFromString } = require("libphonenumber-js");
const Donation = require("../models/donationModel");

const isValidPhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  return phoneNumber ? phoneNumber.isValid() : false;
};

async function sendEmailOutlook(donation) {
  nodeoutlook.sendEmail({
    auth: {
      user: `${process.env.SMTP_USER}`,
      pass: `${process.env.SMTP_PASS}`,
    },
    from: `${process.env.SMTP_USER}`,
    to: `${donation.email}`,
    subject: `Thank you for your donation!`,
    html: `<b>Dear ${donation.firstName},</b><br>Thank you for your generous donation of Rs. ${donation.amount}. Your support helps us continue our mission.`,
    text: `Dear ${donation.firstName},\nThank you for your generous donation of Rs. ${donation.amount}. Your support helps us continue our mission.`,
    replyTo: `${donation.email}`,

    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
}
const getRecentDonations = async (req, res) => {
  const n = parseInt(req.params.n, 10);

  if (!n || n < 1) {
    return res
      .status(400)
      .json({ error: "Invalid number of donations requested" });
  }

  try {
    const donations = await Donation.find({}).sort({ createdAt: -1 }).limit(n);
    const totalDonations = await Donation.countDocuments();

    if (donations.length < n) {
      return res.json({
        success: true,
        message: `Only ${donations.length} donations found out of requested ${n}.`,
        totalDonations: totalDonations,
        donations: donations,
      });
    }

    res.json({
      success: true,
      totalDonations: totalDonations,
      donations: donations,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const makeDonation = async (req, res) => {
  const validPhoneNumber = isValidPhoneNumber(req.body.phoneNumber);
  if (!validPhoneNumber) {
    return res.status(400).json({ error: "Invalid phone number" });
  }

  const { firstName, lastName, email, phoneNumber, amount, message } = req.body;
  if (amount < 1) {
    return res.status(400).json({ error: "Invalid donation amount" });
  }

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
    // await sendThankYouEmail(donation);
    await sendEmailOutlook(donation);
    res.status(200).json(donation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const totalAmount = async (req, res) => {
  try {
    const total = await Donation.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);

    if (total.length > 0) {
      res.json({ success: true, totalAmount: total[0].totalAmount });
    } else {
      res.json({ success: false, message: "No donations found." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const numberofUniqueDonors = async (req, res) => {
  try {
    const uniqueDonorsCount = await Donation.aggregate([
      {
        $group: {
          _id: "$email",
        },
      },
      {
        $count: "uniqueDonors",
      },
    ]);

    if (uniqueDonorsCount.length > 0) {
      res.json({ success: true, count: uniqueDonorsCount[0].uniqueDonors });
    } else {
      res.json({ success: true, count: 0, message: "No donors found." });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find({}).sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    console.log("Error fetching all donations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getDonationById = async (id) => {
  try {
    const donation = await Donation.findById(id);
    if (!donation) {
      console.log("Donation not found!");
      return null;
    }
    console.log("Donation found:", donation);
    return donation;
  } catch (error) {
    console.error("Error fetching donation by ID:", error);
    return null;
  }
};

module.exports = {
  makeDonation,
  totalAmount,
  numberofUniqueDonors,
  getRecentDonations,
  getAllDonations,
  getDonationById,
};

// to instead use breva, don't delete this comment!
// const nodemailer = require("nodemailer");
// async function sendThankYouEmail(donation) {
//   const transporter = nodemailer.createTransport({
//     host: "smtp-relay.brevo.com",
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//       user:
//       pass:
//     },
//   });

//   let mailOptions = {
//     from: `Edureach <${process.env.SMTP_USER}>`,
//     to: donation.email,
//     subject: "Thank you for your donation!",
//     text: `Dear ${donation.firstName},\nThank you for your generous donation of Rs. ${donation.amount}. Your support helps us continue our mission.`,
//     html: `<b>Dear ${donation.firstName},</b><br>Thank you for your generous donation of ${donation.amount}. Your support helps us continue our mission.`,
//   };

//   let info = await transporter.sendMail(mailOptions);

//   console.log(info);
// }
