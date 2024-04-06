const UserAdmin = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (_id) => {
  // no sensitive info to be passed in the first argument which is the payload
  return jwt.sign({ _id: _id }, process.env.SECRET, {
    expiresIn: "3d", // user remains logged in for 3 days
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserAdmin.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserAdmin.signup(email, password);

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const resetPassword = async (req, res) => {
  const { email, token, newPassword } = req.body;

  try {
    const user = await UserAdmin.findOne({
      email: email,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      throw new Error("Password reset token is invalid or has expired.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password has been updated." });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, signupUser, resetPassword };
