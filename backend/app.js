const express     = require('express')
const mongoose    = require('mongoose')
const morgan      = require('morgan')
const bodyParser  = require('body-parser')
const app = express()

/* username : ticketingsystem , password : a6krmaSGoX3O6CL6 */
mongoose.connect( 'mongodb+srv://ticketingsystem:a6krmaSGoX3O6CL6@cluster0.hppktsf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error',(err) =>{
  console.log(err)
})
db.once('open', () => {
  console.log('Connacted to Database');
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server in running on port ${PORT}`)
})

app.use('/api/ticket', require('./routes/ticket'));
app.use('/api/client', require('./routes/client'))


app.get('/',(req,res) => {
  res.json('Working')
})
