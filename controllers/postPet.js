const Pet = require('../models/Pet')

module.exports = (req, res) => {
	console.log('Checking to see what I receive from the request body', req.body);
	Pet.findOne({ name: req.body.name }, (err, existingPet) => {
		if (existingPet == null) {
			Pet.create(req.body)
				.then(data => {
					res.send(data)
			}).catch (err => {
				console.log(err)
			})
		} else {
			res.send('Sorry, name already exists!')
		}
	})
}
