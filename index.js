const express = require('express')
const app = express ()
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// Middleware
app.use(cors({credentials: true}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/pet', require('./controllers/postPet'))
app.get('/pet', require('./controllers/getPets'))
app.get('/pet/:id', require('./controllers/getPet'))

app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
	res.render('index')
})

app.listen(process.env.PORT, () => {
	console.log(`Ready on port 4000`);
})
