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
    prefix,
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
    city,
    state,
    country,
    zipCode,
  } = req.body;

  try {
    const newVolunteer = await Volunteer.create({
      prefix,
      firstName,
      lastName,
      birthDate,
      email,
      phoneNumber,
      address,
      city,
      state,
      country,
      zipCode,
    });

    await newVolunteer.save();

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
