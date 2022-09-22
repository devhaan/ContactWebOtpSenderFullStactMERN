const express = require('express'); // include express
const port = 8000;
const bodyParser = require('body-parser');
const db=require('./config/mongoose');





app=express();
// adding parser in res we have details in that we have out data in header we will add data to in res to handle storing in body..
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',require('./routes'));



// listen the request on port 8000
app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log('Express js server is up');
})