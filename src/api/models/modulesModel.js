const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let modulesSchema = new Schema ({

	module_name:{
		type: String,
		required: true
    },
    
    teacher_id:{
        type: String,
        default:required
    },

    sessions_id:{
        type: String,
        default:required
    },

    starting_date:{
		type: Date,
		default: Date.now
    },

    end_date:{
        type: Date,
        default: Date.now
    }

});

mongoose.model('Modules', modulesSchema);
module.exports = mongoose.model('Modules');
