const express     = require('express')
const mongoose    = require('mongoose')
const morgan      = require('morgan')
const bodyParser  = require('body-parser')
const app = express()
// const UserRouter = require('./models/userRegistartion')
/* username : ticketingsystem , password : a6krmaSGoX3O6CL6 */

// mongoose.connect( 'mongodb+srv://ticketingsystem:a6krmaSGoX3O6CL6@cluster0.hppktsf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
// const db = mongoose.connection

// db.on('error',(err) =>{
//   console.log(err)
// })
// db.once('open', () => {
//   console.log('Connacted to Database');
// })

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server in running on port ${PORT}`)
})

// app.use('/api/userRegistartion', require('./routes/userRegistartion'));
// app.use('/api/login', require('./routes/login'));

app.get('/',(req,res) => {
  res.json('Working')
})
