const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let userSchema = new Schema ({

	status:{
        type: String,
		required: true
	}

});

mongoose.model('User', userSchema);
module.exports = mongoose.model('User');
