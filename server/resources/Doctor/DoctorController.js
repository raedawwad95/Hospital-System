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
  Doctor.findOne({userName:req.session.userName}).exec(function (err,doctor){
    if(err){
	  console.error(err);
	}
	if(!doctor){//doctor not found
	  console.error("No doctor found");
	} else {
	  doctor.password = req.body.password;
	  doctor.save();
	  res.json("Updated");
	}
})
}
//function for login
exports.login = function(req,res){
  Doctor.findOne({userName:req.body.userName}).exec(function (err,doctor){

	if(err){
	  console.error(err);
	}
	if(!doctor){
	  console.error("No doctor found");
	}else{ 
	  doctor.comparePassword(req.body.password,function(err,isMatch){
		if(err){
		  console.error(err);
		}
	    if(!isMatch){
		  console.error("Wrong password");
		}else{ 
		  return req.session.regenerate(function(err){
		if(err){ 
		  return console.error(err)
		}
		  req.session.userName = doctor.userName;
	      req.session.doctorType = doctor.doctorType;
	      req.session.ID = doctor._id;
	      console.log(doctor)
	      res.json(doctor);
		  });
		}

	  });
	}
});
}
// Logout function 
exports.logout=function(req,res){
	req.session.destroy(function(err){
		if(err){
			return console.log(err)
		}
		res.redirect('/Doctor');
	});
}
//retrive patient from user 
exports.retrievePatient=function(req,res){
  var userName=req.params.userNamePatient;
  User.findOne({"username":userName},function(err,data){
	if(err){
	  console.log(err);
	}
	  res.json(data)
	});
}
// check the type of logedin user 
exports.isLogin = function(req, res) {
  if (req.session.doctorType === "d") {
	res.json(true);
  } else {
	console.error("not a doctor");
	res.status(500)
 	res.json('error')
  }
}
// Retrive one Doctor by user name 
exports.retrieveOne=function(req,res){
  Doctor.findOne({userName : req.session.userName},function(err,data){
	if(err){
	  res.send(err);
	}
		
	  res.json(data);
  });
}
//Delete doctor 
exports.deleteOne=function(req,res){
  var userName=req.params.userNameDoctor;
  Doctor.findOneAndRemove({userName:userName},function(err,deleted){

	if(err){
	  console.log("error");
	 }

	res.send(deleted)
  })
}
exports.retrieveDoctor=function(req,res){
  console.log(req.params.doctorId)
  Doctor.findOne({_id : req.params.doctorId},function(err,data){
  	
	if(err){
	  res.send(err);
	}
	res.json(data);
	});
}