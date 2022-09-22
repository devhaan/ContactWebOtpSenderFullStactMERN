const mongoose = require("mongoose");

const ContactData = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", ContactData);
module.exports = Contact;
