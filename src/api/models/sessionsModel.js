const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sessionsSchema = new Schema ({

    name:{
		type: String,
		required: true
	},

	year:{
		type: Number,
        	default: Date.now,
        	min: 2000,
        	max: Date.now
    }

});

mongoose.model('Sessions', sessionsSchema);
module.exports = mongoose.model('Sessions');
