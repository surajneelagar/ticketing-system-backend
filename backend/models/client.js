const mongoose = require('mongoose');


const clientSchema = mongoose.model('client', new mongoose.Schema({
    clientId : { type: Number, required: true },
    name : { type: String, required: true },
    email : { type: String, required: true },
    password : { type: String, required: true },
    company : { type:  String, required: true},
    phone : { type: Number, required: true},
    address : { type: String, required: true}
},{timeseries: true}))


module.exports.clientSchema = clientSchema;