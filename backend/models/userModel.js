const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// since using this keyword, we can't use arrow function
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields are required!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid email!");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character!"
    );
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use!");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields are required!");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("User not found!");
  }
  // compare with hashed password
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Invalid credentials!");
  }
  return user;
};

module.exports = mongoose.model("UserAdmin", userSchema);
