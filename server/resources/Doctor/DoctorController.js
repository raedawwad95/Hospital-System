var Doctor = require('./Doctor.js');

//retrieve .. find and retrieve data
exports.retrieve=function(req,res){
	Doctor.find({},function(err,data){
		if(err){
			res.send(err);
		}
		res.json(data);
	});
}

// create new Doctor 
exports.create=function(req,res){

	var doctor =new Doctor(req.body);
	console.log(doctor)
	doctor.save(function(err,data){
		console.log(data)
		res.json(data)
	});
}

//Update doctor information 
exports.update=function(req,res){
	var updDoc ={
	password: req.body.password,
	fullName: req.body.fullName,
	imageOfDoctor: req.body.imageOfDoctor,
	imageOfId: req.body.imageOfId,
	nationalId: req.body.nationalId,
	hospitalId: req.body.hospitalId,
	spicilityStatus: req.body.spicilityStatus,

	}
	//update doctor information 
	Doctor.update({'userName':"raedawwwwad"},
		{$set:updDoc},
		function(err,data){
		res.json(data);
	});
}


