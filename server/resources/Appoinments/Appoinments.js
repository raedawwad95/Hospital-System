var mongoose =require('mongoose');
var db=require('../../db');

var AppoinmetSchema =mongoose.Schema({
	date:{
		type:String,
		required:true
	},
	hour:{
		type:String,
		required:true
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


