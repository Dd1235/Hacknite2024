const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  // no sensitive info to be passed in the first argument which is the payload
  return jwt.sign({ _id: _id }, process.env.SECRET, {
    expiresIn: "3d", // user remains logged in for 3 days
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, signupUser };
