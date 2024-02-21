const mongoose = require("mongoose");

// Create User Schema
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
    isOnline: Boolean,
  },
  { timestamps: true }
);

// Model
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
