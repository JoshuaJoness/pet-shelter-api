const mongoose = require('mongoose')

const Pet = mongoose.model('pet',
	{
		name: {
			type: String,
			require: [true, "Pet's name is required"]
		},
		type: {
			type: String,
			require: [true, "Pet's type is required"]
		},
		breed: {
			type: String,
			require: [true, "Pet's breed is required"]
		},
		location: {
			type: String,
			require: [true, "Pet's location is required"]
		},
		latitude: {
			type: String,
			require: [true, "Pet's latitude is required"]
		},
		longitude: {
			type: String,
			require: [true, "Pet's longitude is required"]
		},
	}
)

module.exports = Pet
