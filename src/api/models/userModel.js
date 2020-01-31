const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let userSchema = new Schema ({

	status:{
        	type: String,
		required: true
	},

	name_user:{
		type: String,
		required: true
	},
	mail_user:{
		type: String,
		required: true
	},
	password_user:{
		type: String,
		required: true
	}

});

mongoose.model('User', userSchema);
module.exports = mongoose.model('User');
