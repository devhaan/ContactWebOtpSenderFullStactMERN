const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'hello hehehsdfrgt',  
         messagingServiceSid: 'MG75fe6ab26783566338831e830e93e386',      
         to: '+919111283017' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();