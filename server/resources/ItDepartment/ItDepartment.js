var mongoose = require('mongoose');
var ITSchema =mongoose.Schema({
	userName:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	}

});

var ItDepartments =mongoose.model('ITDepartments',ITSchema);

module.exports = ItDepartments;