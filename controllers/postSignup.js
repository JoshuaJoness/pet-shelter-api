const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	User.findOne({ name: req.body.name }, (err, existingUser) => {
		if (existingUser == null) {
			req.body.password = bcrypt.hashSync(req.body.password, 10)
			User.create(req.body)
				.then(data => {
					let obj = data.toObject()
					let token = jwt.sign(obj, 'secret')
					console.log(token);
					res.send(token)
			}).catch (err => {
				console.log(err)
			})
		} else {
			res.send('Sorry, that name already exists. Please choose another.')
		}
	})
}
