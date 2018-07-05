var mongoose = require('mongoose');
var db = require('../../db');
// Departments Schema 
var DepartmentSchema=mongoose.Schema({
	nameOfDept:{
		type:String,
		index:{
			unique:true
		}
	},
	idOfDept:{
		type:Number,
		required:true, 
		index: {
			unique: true
		}
	},
	doctorsId:[{type: mongoose.Schema.Types.ObjectId, ref: 'Doctors'}]
})
var Department=mongoose.model('Department',DepartmentSchema);

module.exports=Department

