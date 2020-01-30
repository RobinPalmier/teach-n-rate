const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let rateSchema = new Schema ({
    
    message:{
		type: String,
		required: "Content require"
    },

    
    rate:{
		type: String,
		required: "Rate require"
    },

    user_id:{
		type: String,
		required: true
    },

    modules_id:{
		type: String,
		required: true
    }
    

});

mongoose.model('Rate', rateSchema);
module.exports = mongoose.model('Rate');