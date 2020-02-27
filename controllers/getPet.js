const Pet = require('../models/Pet')

module.exports = (req,res) => {
	Pet.findById(req.params.id)
	.then(data => {
			res.send(data)
		}).catch(err => {
			console.log(err);
		})
}
