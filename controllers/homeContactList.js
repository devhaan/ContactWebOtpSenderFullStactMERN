const Contact = require("../model/Contact");

module.exports.listProvider = (req, res) => {
  Contact.find({}, (err, data) => {
    if (err) return res.json({ error: err });
    else {
      return res.json(data);
    }
  });
};
