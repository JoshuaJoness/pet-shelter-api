const Pet = require('../models/Pet')

module.exports = (req, res) => {
	console.log('********************', req.body);
	Pet.create(req.body)
		.then(data => {
			res.send(data)
	}).catch (err => {
		console.log(err)
	})
}
