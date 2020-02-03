const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let userSchema = new Schema ({

	status:{
        type: String,
		required: true
	},
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	sessions_id:{
		type: String,
		required: true
	}

});

mongoose.model('User', userSchema);
module.exports = mongoose.model('User');
