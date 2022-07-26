const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {

    username: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false }, 
    rollno: { type: String, required: true, unique: true },
    department: { type: String, required: true, unique: false },
    address: { type: String, required: true, unique: false},
    contactno: { type: Number, required: true, unique: false },
    profileimg: { type: String, unique: false },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);