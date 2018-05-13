var mongoose = require('mongoose');
var db = require('../config.js');

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

exports.createDept=function(req,res){
	var Dept=new Departments({
		nameOfDept:req.body.nameOfDept,
		idOfDept:req.body.idOfDept
	})

	Dept.save(function(err,data){
		if(err){
			return err;
		}
		res.json("Department added");
	})

}

exports.retriveDepts=function(req,res){
	Departments.find({}).
	populate('doctorsId').
	exec(function(err,data){
		if(err){
			res.json('error')
		}
		res.json(data)
	})
	
}

exports.addDoctor=function(req,res){
	var query={idOfDept:req.body.idOfDept};
	console.log(req.body.docId)
		Departments.update(query,{$push:{'doctorsId':req.body.docId}}).
		populate('doctorsId').
		exec(function(err,data){
			if(err){
				res.send(err)
			}
			res.json(data)
		})
	
}



var Department=mongoose.model('Department',DepartmentSchema);
module.exports=Department

