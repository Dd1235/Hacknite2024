const otpGenerator = require("otp-generator");
const OTP = require("../models/otpModel");

const { sendOTP } = require("./otpController");
const { Volunteer } = require("../models/volunteerModel");

const emailoptsend = async (req, res) => {
  try {
    const otp = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });
    const email = req.body.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const volunteerExists = await Volunteer.findOne({ email });
    if (volunteerExists) {
      return res
        .status(409)
        .json({ error: "Volunteer application already exists" });
    }

    const expiresAt = new Date(new Date().getTime() + 10 * 60000); // OTP expires in 10 minutes

    const upsertData = { otp, expiresAt };
    await OTP.findOneAndUpdate({ email }, upsertData, {
      upsert: true,
      new: true,
    });

    await sendOTP(email, otp);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const verifyOTP = async (req, res) => {
  const { email, enteredOTP } = req.body;
  try {
    const otpRecord = await OTP.findOne({ email });
    if (!otpRecord) {
      return res
        .status(400)
        .json({ error: "OTP has not been requested for this email" });
    }

    if (enteredOTP === otpRecord.otp && new Date() <= otpRecord.expiresAt) {
      await OTP.deleteOne({ email });
      res.status(200).json({ message: "OTP verified successfully", email });
    } else {
      res.status(400).json({ error: "Invalid or expired OTP" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { emailoptsend, verifyOTP };
