const mongoose = require('mongoose')

const User = mongoose.model('user',
	{
		name: {
			type: String,
			require: [true, "Your name is required"]
		},
		password: {
			type: String,
			require: [true, "A password is required"]
		}
	}
)

module.exports = User
