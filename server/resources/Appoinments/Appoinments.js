var mongoose =require('mongoose');
var db=require('../../db');

var AppoinmetSchema =mongoose.Schema({
	month:{
		type:Number,
		required:true
	},
	day:{
		type:Number,
		required: true
	},
	hour:{
		type:Number,
		required: true
	},
	year:{
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


// {
//     "day" : "23",
//     "month" : "5",
//     "year":"2018",
//     "hour" : "11",
//     "doctorId" : "5aff2b34c1629c5397f1fc35",
//     "userId" : "5afda34d8cd8f1090c6c4e16"
// }
