const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email already exists."],
    required: [true, "Please provide an email."],
  },
  username: {
    type: String,
    unique: [true, "Username already exists."],
    required: [true, "Please provide a username."],
  },
  password: { type: String, required: [true, "Please provide a password."] },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
