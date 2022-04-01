const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please add fullname"],
    trim: true,
  },
  userName: {
    type: String,
    required: [true, "Please add user name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please add email"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please add password"],
    trim: true,
  },
  token: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
