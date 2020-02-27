const Pet = require('../models/Pet')

module.exports = (req, res) => {
	Pet.find({})
  .then(data => {
		res.send(data)
	}).catch(err => {
		console.log(err);
	})
}
