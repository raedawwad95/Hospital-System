var mongoose = require('mongoose');
var db = require('../../db');

var DepartmentSchema=mongoose.Schema({
	nameOfDept:String,
	idOfDept:{type:Number,required:true , index: {unique: true}},
	doctorsId:[Number]
})


var Department=mongoose.model('Department',DepartmentSchema);
module.exports=Department

