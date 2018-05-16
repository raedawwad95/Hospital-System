var mongoose =require('mongoose');
var db=require('../../db');

var AppoinmetSchema =mongoose.Schema({
	day:{
		type:Number,
		index:{
			unique:true
		}
	},
	from:{
		type:Number,
		index:{
			unique:true
		}
	},
	to:{
		type:Number,
		index:{
			unique:true
		}
	},
	doctorId:{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Doctors'
    },
    userId:{
    	type:mongoose.Schema.Types.ObjectId,
    	ref: 'Users'
    }
})


var Appoinment =mongoose.model('Appoinment',AppoinmetSchema);

module.exports=Appoinment;