
const OtpLog=require("../model/OtpLogTimeSheet")
module.exports.messageLog = (req, res) => {
 OtpLog.find({},(err,messageLog) => {
    if(err) return res.json({ error: err});
    else res.json(messageLog);
 })

  
};
