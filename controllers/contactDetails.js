const Contact = require("../model/Contact");


module.exports.contactDetails = (req, res) => {


  Contact.find({name: req.body.contactName},(err, contact) => {
    if(err) return res.json({ error: err});
    else return res.json(contact);
  })


};
