var Doctor = require('./Doctor.js');

exports.retrieve=function(req,res){
	Doctor.find({},function(err,data){
		if(err){
			res.send(err);
		}
		res.json(data);
	})
}

exports.create=function(req,res){
	var doctor =new Doctor(req.body);
	doctor.save(req.body,function(err,data){
		res.json(data)
	})
}
