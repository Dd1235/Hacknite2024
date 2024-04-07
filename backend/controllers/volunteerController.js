const Volunteer = require("../models/volunteerModel");
const { parsePhoneNumberFromString } = require("libphonenumber-js");
const mongoose = require("mongoose");
var nodeoutlook = require("nodejs-nodemailer-outlook");

async function sendEmail(volunteer) {
  let emailContent = {};

  if (volunteer.status === "accepted") {
    emailContent = {
      subject: `Welcome aboard, ${volunteer.firstName}!`,
      html: `<b>Dear ${volunteer.firstName},</b><br>We are thrilled to welcome you aboard as a volunteer. Thank you for joining us in our mission.`,
      text: `Dear ${volunteer.firstName},\nWe are thrilled to welcome you aboard as a volunteer. Thank you for joining us in our mission.`,
    };
  } else if (volunteer.status === "rejected") {
    emailContent = {
      subject: `Regarding your volunteer application`,
      html: `<b>Dear ${volunteer.firstName},</b><br>We regret to inform you that your volunteer application has been rejected. Thank you for your interest in volunteering with us.`,
      text: `Dear ${volunteer.firstName},\nWe regret to inform you that your volunteer application has been rejected. Thank you for your interest in volunteering with us.`,
    };
  } else {
    return;
  }

  nodeoutlook.sendEmail({
    auth: {
      user: `${process.env.SMTP_USER}`,
      pass: `${process.env.SMTP_PASS}`,
    },
    from: `${process.env.SMTP_USER}`,
    to: volunteer.email,
    replyTo: volunteer.email,
    ...emailContent,
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
}

const isValidPhoneNumber = (value) => {
  if (typeof value !== "string") {
    return false;
  }
  const phoneNumber = parsePhoneNumberFromString(value);
  return phoneNumber ? phoneNumber.isValid() : false;
};

const createVolunteer = async (req, res) => {
  const validPhoneNumber = isValidPhoneNumber(req.body.phoneNumber);
  if (!validPhoneNumber) {
    return res.status(400).json({ error: "Invalid phone number" });
  }

  const {
    firstName,
    lastName,
    birthDate,
    phoneNumber,
    email,
    college,
    field,
    company,
    position,
    experience,
    availableDays,
    notes,
  } = req.body;

  try {
    const newVolunteer = await Volunteer.create({
      firstName,
      lastName,
      birthDate,
      phoneNumber,
      email,
      college,
      field,
      company,
      position,
      experience,
      availableDays,
      notes,
      status: "pending",
    });

    // await newVolunteer.save();

    res.status(201).json({
      message: "Volunteer application successfully",
      volunteer: newVolunteer,
    });
  } catch (error) {
    if (error.code === 11000) {
      // check for duplicate key error
      const errorMessage = `The email address '${email}' is already in use. Please use a different email.`;
      return res.status(409).json({ error: errorMessage });
    }
    console.error(error);
    res
      .status(500)
      .json({ error: "An unexpected error has occured, please try again." });
  }
};
// /volunteers/:id/updateStatus
// make a patch request to update status of volunteer from pending to accepted or rejected
const getVolunteerById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such application " });
  }
  const volunteer = await Volunteer.findById(id);
  if (!volunteer) {
    return res.status(404).json({ error: "No such application " });
  }
  res.status(200).json(volunteer);
};
const updateStatus = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such application " });
  }
  const newStatus = req.body.status;
  try {
    const volunteer = await Volunteer.findOneAndUpdate(
      { _id: id },
      { status: newStatus },
      { new: true }
    );
    if (!volunteer) {
      return res.status(404).json({ error: "No such application... " });
    }
    await sendEmail(volunteer);

    res.status(200).json(volunteer);
  } catch (error) {
    console.error("Error updating volunteer status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllApplications = async (req, res) => {
  try {
    const volunteers = await Volunteer.find({}).sort({ updatedAt: -1 });
    res.status(200).json(volunteers);
  } catch (error) {
    console.error("Error fetching all applications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getPendingApplications = async (req, res) => {
  try {
    const volunteers = await Volunteer.find({ status: "pending" }).sort({
      createdAt: -1,
    });
    res.status(200).json(volunteers);
  } catch (error) {
    console.error("Error fetching pending applications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAcceptedApplications = async (req, res) => {
  const volunteers = await Volunteer.find({ status: "accepted" }).sort({
    createdAt: -1,
  });
  res.status(200).json(volunteers);
};

const getRejectedApplications = async (req, res) => {
  const volunteers = await Volunteer.find({ status: "rejected" }).sort({
    createdAt: -1,
  });
  res.status(200).json(volunteers);
};

const getNumberOfAcceptedApplications = async (req, res) => {
  const count = await Volunteer.countDocuments({
    status: "accepted",
  });
  res.status(200).json({ count });
};

const getNumberOfRejectedApplications = async (req, res) => {
  const count = await Volunteer.countDocuments({
    status: "rejected",
  });
  res.status(200).json({ count });
};
const getNumberOfPendingApplications = async (req, res) => {
  const count = await Volunteer.countDocuments({
    status: "pending",
  });
  res.status(200).json({ count });
};
const getPerYear = async (req, res) => {
  try {
    const applicationsPerYear = await Volunteer.aggregate([
      {
        $match: { status: "accepted" },
      },
      {
        $addFields: {
          convertedDate: {
            $cond: {
              if: { $eq: [{ $type: "$createdAt" }, "string"] },
              then: { $dateFromString: { dateString: "$createdAt" } },
              else: "$createdAt",
            },
          },
        },
      },
      {
        $project: {
          year: { $year: "$convertedDate" },
        },
      },
      {
        $group: {
          _id: "$year",
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    console.log("succesfully sent");
    res.status(200).json(applicationsPerYear);
  } catch (error) {
    console.error("Error fetching applications per year:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createVolunteer,
  updateStatus,
  getAllApplications,
  getPendingApplications,
  getAcceptedApplications,
  getNumberOfAcceptedApplications,
  getNumberOfPendingApplications,
  getVolunteerById,
  getPerYear,
  getNumberOfRejectedApplications,
  getRejectedApplications,
};
