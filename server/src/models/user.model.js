const mongoose = require('mongoose')
const { isEmail } = require('validator')

const Schema = mongoose.Schema

// id is created by mongo

const UserSchema = new Schema({
	address: {
		city: String,
		street: String,
		number: Number,
		zipcode: String,
		geolocation: {
			lat: String,
			long: String
		}
	},
	email: {
		type: String,
		required: [true, 'Please enter an email'],
		unique: true,
		lowercase: true,
		validate: [isEmail, 'Please enter a valid email']
	},
	name: {
		firstname: {
			type: String,
			required: true
		},
		lastname: {
			type: String,
			required: true
		}
	},
	password: {
		type: String,
		required: [true, 'Please enter a valid password'],
		minlength: [6, 'Minimum password length must be 6 characters']
	},
	username: {
		type: String,
		required: true
	},
	register_date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('User', UserSchema)
