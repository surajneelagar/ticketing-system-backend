const express = require('express');
const router = express.Router()
const clientSchema = require('../models/client')


router.post('/registartion', async(req, res) => {
    let client = new clientSchema({
        client_id : res.body.client,
        full_name : res.body.full_name,
        email_id : res.body.email_id,
        password : res.body.password,
        company : res.body.company,
        phone_no :res.body.phone_no,
        address :res.body.address
    });
    client = await client.save();
    res.send(client);
});


router.post('/login', async(req, res) => {
   
});


module.exports = router