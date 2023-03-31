const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { clientSchema } = require('../models/client')



router.get('/', async (req,res) => {
    userList = await clientSchema.find();
    res.send(userList).json

});


// router.post('/register', async(req, res) => {
//     let client = new clientSchema({
//         client_id : req.body.client_id,
//         full_name : req.body.full_name,
//         email_id : req.body.email_id,
//         password : bcrypt.hashSync(req.body.password, 10),
//         company : req.body.company,
//         phone_no : req.body.phone_no,
//         address : req.body.address
//     });
//     client = await client.save();
//     res.send(client);
// });

router.post("/register", (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
      const user = new clientSchema({
        clientId : req.body.clientId,
        name : req.body.name,
        email : req.body.email,
        password : hash,
        company : req.body.company,
        phone : req.body.phone,
        address : req.body.address
      });
      user
        .save()
        .then(result => {
          res.status(201).json({
            message: "User created!",
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    });
  });


// router.post('/login', async(req, res) => {
//    clientSchema.findOne({ email : req.body.email})
//    .then(user => {
//     console.log(user);
//     if(!user){
//         return res.status(401).json({
//             message: "User not found"
//         })
//     }
//     return bcrypt.compare(req.body.password, user.password)
//    })
//    .then(result => {
//     if(!result){
//         return res.status(401).json({
//             message: "User not found"
//         })
//     }
//     const token = jwt.sign(
//             {email: user.email, userId: user._id}, 
//             'ticketing_system_application',
//             {expiresIn: "1h"}
//         );
//         res.status(200).json({
//             token:token,
//             message: "login"
//         });
//     })
//    .catch(err =>{
//         return res.status(401).json({
//             message: "Not found"
//         });
//    });
// });

router.post('/login', (req,res) => {
      // if(!req.body.email) {
      //     res.status(400)
      //     return res.json({error : "Email is invalid"})
      // }
      const checkEmailValidity = clientSchema.find(ele => ele.email === req.body.email)
      const checkPassowrdValidity = clientSchema.findOne(ele => ele.password === bcrypt.hashSync(req.body.password))
     console.log(checkPassowrdValidity)
      if(checkEmailValidity && checkPassowrdValidity){
          // res.sendStatus(200)
          res.send("1")
          return res.json({
              message : "login"
          })
      }else{
          res.send("0")
  
      }
   })   

module.exports = router