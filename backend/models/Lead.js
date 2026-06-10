const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: String,

    email: String,

    phone: String,

    requirement: String,

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Qualified",
        "Won",
        "Lost"
      ],
      default: "New"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Lead", leadSchema);