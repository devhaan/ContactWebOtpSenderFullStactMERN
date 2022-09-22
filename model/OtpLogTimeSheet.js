const mongoose = require("mongoose");

const OtpLogData = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  time: {
    type: Date,
  },
  message: { type: String },
});

const OtpLog = mongoose.model("OtpLog", OtpLogData);
module.exports = OtpLog;
