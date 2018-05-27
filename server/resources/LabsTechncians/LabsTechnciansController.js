var LabsTechncians = require('./LabsTechncians');
var LabsResult=require('../LabsResult/LabsResult')
var User=require('../User/Users')

//create function to creat lab Techncians panel
exports.Create = function (req, res) {
  var labObj={
		userName:req.body.username,
		password:req.body.password,
		fullName:req.body.fullName,
		id:req.body.id,
	    imageOfId:req.body.imageOfId,
		workHour:req.body.workHour,
		personalImgUrl:req.body.personalImgUrl,
		gender:req.body.gender
	}
	
	var newLabTech= new LabsTechncians(labObj);
	newLabTech.save(function(err,data){
		if (err){
			 console.error(err);
		}
		res.send(data)
	});
};
//Retrive all lab Techncian 
 exports.Retrive=function(req,res){
 	LabsTechncians.find(function(err,data){
			if(err){
			return console.error(err);
		}

		res.json(data)
 	});
 };

//Update Techncians information 
exports.update=function(req,res){
	LabsTechncians.findOne({userName:req.session.userName}).exec(function (err,tech){
		if(err){
			console.error(err);
		}
		if(!tech){//doctor not found
			console.error("No tech found");
		} else {
			tech.password = req.body.password;
			tech.save();
			res.json("Updated");
		}
	})

}
// login function for the Techncians 
exports.login = function (req, res) {
	LabsTechncians.findOne({userName: req.body.userName}).exec(function (err, tech) {
		if (err) {
			console.error(err);
		} 
		if (!tech) { // if tech not found response
			console.error("No user found");
		} else { // check the password   comparePassword function 
			tech.comparePassword(req.body.password, function(err, isMatch) {
				if (err) {
					console.error(err);
				}
				if (!isMatch) { // password not match case
					console.error("Wrong password");
				} else { // if true generate  a seassion
					return req.session.regenerate(function(err) {
		        		if (err) {
		        			return console.error(err);
		        		}
		        		req.session.userName = tech.userName;
		        		req.session.techncianType = tech.techncianType;
		        	    req.session.ID = tech._id;
		        		res.json(tech);
					});
				}
			});
		}
	});
};
//Check if the logeddin is a Techncians 
exports.isLogin = function(req, res) {
	if (req.session.doctorType === "T") {
		res.json(true);
	} else {
		console.error("not a tech");
		res.status(404)
 		res.json('error')
	}
}
// logout from the session 
exports.logout = function (req, res) {
	req.session.destroy(function(err) {
		if (err) {
			return console.log(err);
		}
		res.json("logged out")
	});
};

// add a patient using populate 
exports.addPatient=function(req,res){
	var query={tech:req.body.id};
	
	LabsTechncians.update(query,{$push:{'patientId':req.body.patientId}})
	.populate('patientId')
	.exec(function(err,data){
		if(err){
			console.error(err)
		}
		res.json(data)
	})
}

//add patient result by the lab Techncian
exports.PatientResult=function(req,res){
	var patientId=req.params.patientId
	LabsResult.findOne({"patientId":patientId},function(err,data){
		if(err){
			console.error(err)
		}
		res.json(data)
	})
}
//delete lab techncian 
exports.deleteOne=function(req,res){
	var userName=req.params.userNameLabTech;
	LabsTechncians.findOneAndRemove({userName:userName},function(err,deleted){
		if(err){
			console.log(error)
		}
		res.send(deleted)
	})
}
//retrive one lab techncian 
exports.retrieveOne=function(req,res){
	LabsTechncians.findOne({userName : req.session.userName},function(err,data){
		if(err){
			res.send(err);
		}
		res.json(data);
	});
} 
