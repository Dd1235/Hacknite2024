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
      user: "fruitygoosedeath@outlook.com",
      pass: "Fruitygoose@123",
    },
    from: "fruitygoosedeath@outlook.com",
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
module.exports = {
  makeDonation,
  totalAmount,
  numberofUniqueDonors,
  getRecentDonations,
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
//       user: "deepya1235@gmail.com",
//       pass: "xsmtpsib-04bd79881415694db953f1f20cd7b68219256d6590a5a5d4ed6416d131e6bfdf-2OIaqJYswUrEGCvt",
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
