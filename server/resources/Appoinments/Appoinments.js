var mongoose =require('mongoose');
var db=require('../../db');

var AppoinmetSchema =mongoose.Schema({
	day:{
		type:Date,
		required: true
	},
	from:{
		type:Number,
		required: true
	},
	// to:{
	// 	type:Number,
	// 	required: true
	// },
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