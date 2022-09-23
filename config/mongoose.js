
const DB='*******************************************'

const mongoose = require('mongoose');

mongoose.connect(DB,{})
.then(()=>{
    console.log('Connected to Mongo');
})
.catch(err =>{
    console.log('Error connecting to Mongo');
});
