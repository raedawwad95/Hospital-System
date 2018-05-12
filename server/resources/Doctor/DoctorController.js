var Doctor = require('./Doctor.js');
var User = require('../User/Users')

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
	var doctorObj={
		userName:req.body.userName,
		password:req.body.password,
		fullName:req.body.fullName,
		imageOfDoctor:req.body.imageOfDoctor,
	    imageOfId:req.body.imageOfId,
		nationalId:req.body.nationalId,
		hospitalId:req.body.hospitalId,
		department:req.body.department,
		spicilityStatus:req.body.spicilityStatus,
		hoursOfWork:req.body.hoursOfWork,
		gender:req.body.gender
	}

	var doctor =new Doctor(doctorObj);
	doctor.save(function(err,data){
		res.json(data)
	});
}

//Update doctor information 
exports.update=function(req,res){
	var updDoc ={
	password: req.body.password,
	imageOfDoctor: req.body.imageOfDoctor
	}
	//update doctor information 
	Doctor.update({"userName":req.body.userName},
		{$set:updDoc},
		function(err,data){
		res.send(data);
	});
}

//function for login

exports.login = function(req,res){
	Doctor.findOne({userName:req.body.userName}).exec(function (err,doctor){
		if(err){
			console.log(err);
		}
		if(!doctor){//Not found user
			res.json("No doctor found");
		}else{ //found user check password  by comparePassword method
			doctor.comparePassword(req.body.password,function(err,isMatch){
				if(err){
					console.log(err);
				}
				if(!isMatch){//not match
					res.json("Wrong password");
				}else{ 
					return req.session.regenerate(function(err){
						if(err){ //if match generate seassion
							return console.log(err)
						}
						req.session.userName = doctor.userName;
					    req.session.doctorType = doctor.doctorType;
					    res.json(doctor);
					});
				}
			});
		}
	});
}

exports.logout=function(req,res){
	req.session.destroy(function(err){
		if(err){
			return console.log(err)
		}
		res.json("logged out")
	});
}
exports.retrievePatient=function(req,res){
	var userName=req.params.userNamePatient;
	console.log(userName)
	User.findOne({"username":userName},function(err,data){
		if(err){
			console.log(err);
		}
		res.json(data)
	});
}


