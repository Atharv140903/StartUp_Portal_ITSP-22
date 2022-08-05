const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema(
  {
    startuplogo: { type: String, required: true, unique: false },
    startupname: { type: String, required: true, unique: true },
    category: { type: Array, required: true, unique: false },
    date: { type: String, format:Date, required: true, unique: false },
    location: { type: String, required: true, unique: false },
    fundingtype: { type: String, required: true, unique: false },
    founders: { type: Array, required: true, unique: false },
    aboutcompany: { type: String, required: true, unique: false },
    employeeprofile: { type: String, required: true, unique: false },
    contactno: { type: Number, required: true, unique: false },
    companyemail: { type: String, required: true, unique: false },
    companywebsite: { type: String, required: true, unique: false },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Startup", StartupSchema);