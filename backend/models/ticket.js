const mongoose = require('mongoose');

const ticketSchema = mongoose.model('ticket', new mongoose.Schema({
    ticket_id : { type: Number, require: true},
    subject : { type: String, require: true },
    description : { type: String, require: true },
    priority_level : { type: String, require: true },
    status : { type: String, require: true },
    assigned_staff: { type: String, require: true },
    creation_by: { type: String, require: true },
    // creation_date and update_date will be added automatically
    // creation_date: { type: Date, default: Date.now },
    // last_updated: { type: Date },
    attachments:{ data: Buffer, contentType: String }
},{timestamps: true}))

module.exports.ticketSchema = ticketSchema;

