const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    name:{
        type: String,
        defined:true,
    },
    email:{
        defined:true,
        type:String,
        lowercase:true,
        unique:true,
    },
    message:{
        type:String,
        defined:true,
    }
});

const Client = new mongoose.model('Client', clientSchema);

module.exports = Client;