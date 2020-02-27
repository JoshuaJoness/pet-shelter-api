const express = require('express')
const app = express ()
const mongoose = require('mongoose')
const database = require('./database')

app.listen('4000', () => {
	console.log(`Ready on port 4000`);
})
