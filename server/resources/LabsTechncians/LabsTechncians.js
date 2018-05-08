var mongoose = require('mongoose');

var LabsTechnciansSchema = mongoose.Schema({
	userName:{
		type:String, 
		unique:true,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	fullName:{
		type:String,
		required:true
	},
	id:{
		type:Number

	},
	imageOfId:{
		type:String,
		required:true
	},
	techncianImage:{
		type:String,
		required:true
	},
	workHour:{
		type:Number,
		required:true
	}
	
});

var LabsTechncians = mongoose.model('LabsTechncians', LabsTechnciansSchema);

module.exports = LabsTechncians;