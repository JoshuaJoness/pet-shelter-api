const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	User.findOne({ name: req.body.name }).then(data => {
		let match = bcrypt.compareSync(req.body.password, data.password)
		if (match) {
			let obj = data.toObject()
			let token = jwt.sign(obj, 'secret')
			res.send(token)
		}
	}).catch(err => {
		res.send('err')
		console.log(err);
	})
}
