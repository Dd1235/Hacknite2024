const Volunteer = require("../models/volunteerModel");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

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
const updateStatus = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such application " });
  }
  const newStatus = req.body.status;
  const volunteer = await Volunteer.findOneAndUpdate(
    { _id: id },
    { status: newStatus }
  );
  if (!volunteer) {
    return res.status(404).json({ error: "No such application " });
  }

  res.status(200).json(workout);
};

const getAllApplications = async (req, res) => {
  const volunteers = await Volunteer.find({}).sort({ createdAt: -1 });
  res.status(200).json(volunteers);
};

const getPendingApplications = async (req, res) => {
  const volunteers = await Volunteer.find({ status: "pending" }).sort({
    createdAt: -1,
  });
  res.status(200).json(volunteers);
};

const getAcceptedApplications = async (req, res) => {
  const volunteers = await Volunteer.find({ status: "accepted" }).sort({
    createdAt: -1,
  });
  res.status(200).json(volunteers);
};

const getNumberOfAcceptedApplications = async (req, res) => {
  const numberOfAcceptedApplications = await Volunteer.countDocuments({
    status: "accepted",
  });
  res.status(200).json({ numberOfAcceptedApplications });
};
const getNumberOfPendingApplications = async (req, res) => {
  const numberOfPendingApplications = await Volunteer.countDocuments({
    status: "pending",
  });
  res.status(200).json({ numberOfPendingApplications });
};

module.exports = {
  createVolunteer,
  updateStatus,
  getAllApplications,
  getPendingApplications,
  getAcceptedApplications,
  getNumberOfAcceptedApplications,
  getNumberOfPendingApplications,
};
