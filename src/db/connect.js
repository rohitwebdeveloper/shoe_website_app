const mongoose = require('mongoose');
const mongodb = "mongodb://127.0.0.1:27017/clientinfo";
mongoose.set('strictQuery', true);
mongoose.connect(mongodb,(err)=>{
    if (err) {
        console.log('unable to connect to the server');
    }
    else{
        console.log('congratulations connection successfull');
    }
})