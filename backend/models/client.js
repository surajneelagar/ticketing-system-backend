const mongoose = require('mongoose');


const clientSchema = mongoose.model('client', new mongoose.Schema({
    client_id : { type: Number, required: true },
    full_name : { type: String, required: true },
    email_id : { type: String, required: true },
    password : { type: String, required: true },
    company : { type:  String, required: true},
    phone_no : { type: Number, required: true},
    address : { type: String, required: true}
},{timeseries: true}))


module.exports.clientSchema = clientSchema;