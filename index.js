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
app.post('/signup', require('./controllers/postSignup'))
app.post('/login', require('./controllers/postLogin'))

app.listen(process.env.PORT, () => {
	console.log(`Ready on port ${process.env.PORT}`);
})
