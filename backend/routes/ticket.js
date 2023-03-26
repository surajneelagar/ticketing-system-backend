const express = require('express');
const router = express.Router();
const fs = require('fs');
const { ticketSchema } = require('../models/ticket')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'uploads')
    },
    filename: (req,file,cb) =>{
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage})

function randomTicketId(min, max){
    let randomNumber = Math.floor(Math.random()* (max - min) )+ min;
    return randomNumber;
}

router.get('/', async (req,res) => {
    ticketList = await ticketSchema.find();
    res.send(ticketList)
});

router.post('/', upload.single('testImage') ,async (req,res) => {
    let ticket = new ticketSchema({
        ticket_id : randomTicketId(1000, 9999),
        subject : req.body.subject,
        description : req.body.description,
        priority_level : req.body.priority_level,
        status : req.body.status,
        assigned_staff: req.body.assigned_staff,
        creation_by: req.body.creation_by,
        attachments: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType: "image/png"
        },
    });
    ticket = await ticket.save()
    res.send(ticket)
})

module.exports = router