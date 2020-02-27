const Pet = require('../models/Pet')

module.exports = (req, res) => {
	console.log('******');
	Pet.find({})
  .then(data => {
		res.send(data)
	}).catch(err => {
		console.log(err);
	})
}
