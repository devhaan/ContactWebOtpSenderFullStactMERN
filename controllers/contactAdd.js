const Contact = require("../model/Contact");

module.exports.contactadd = (req, res) => {
  Contact.countDocuments({ phone: req.body.contactPhone }, function (err, count) {
    if (count > 0) {
      return res.json({ success: " Already Present Duplicates Not Allowed" });
    }else{
           Contact.create(
      { name: req.body.contactName, phone: req.body.contactPhone },
      (err, ) => {
        if (err) return res.json({ error: err });
        else return res.json({success: "Added Successfully"});
      }
    );
    }
  });
 
};
