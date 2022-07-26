const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    
    img: { type: String,},
    title: { type: String, required: true, unique: true },
    resource: { type: String, required: true, },
    content: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);