var ItDepartment = require('./ItDepartment.js');

exports.create = function(req,res){
	var newItDepartment = new ItDepartment(req.body);
	newItDepartment.save(function(err,data){
		if(err){
			res.json(err);
		}
		res.json(data);
	})
}

exports.retrieve= function(req,res){
	ItDepartment.find({},function(err,data){
		if(err){
			res.json(err);
		}
		res.json(data);

	})
}