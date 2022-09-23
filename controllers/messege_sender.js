const accountSid = "AC3ac***********************25b";
const authToken = "93ad34**********************4a17";
const client = require("twilio")(accountSid, authToken);
const OtpLog=require("../model/OtpLogTimeSheet")
module.exports.messageSend = (req, res) => {
  client.messages
    .create({
      body: req.body.message,
      messagingServiceSid: "MG75fe6ab26783566338831e830e93e386",
      to: req.body.number,
    })
    .then((message) => console.log("SEND MESSAGE TO CONTACT"))
    .done();
    let time=new Date();
   OtpLog.create({name:req.body.name,phone:req.body.number,time:time,message:req.body.message},(err, message) => {
    if(err) return res.json({error:err});
    else{return res.json({success:"Send successfully"})}
   });

  
};
