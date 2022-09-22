const express= require('express')
const upload = require("multer")();
const router = express.Router();

//controllers

const homeContactList=require("../controllers/homeContactList");
const contactDetails=require("../controllers/contactDetails");
const messageSender=require("../controllers/messege_sender")
const messageLogger=require("../controllers/messageLogger")
const contactAdd=require("../controllers/contactAdd")



console.log("router is up");
//routes
router.get("/", homeContactList.listProvider);
router.post("/contactdetails",upload.any(), contactDetails.contactDetails);
router.post("/contactmessege",upload.any(), messageSender.messageSend);
router.get("/contactmessegeLog", messageLogger.messageLog);
router.post("/contactadd",upload.any(), contactAdd.contactadd);






module.exports = router;

