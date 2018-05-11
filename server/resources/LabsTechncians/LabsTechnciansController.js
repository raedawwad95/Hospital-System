var LabsTechncians = require('./LabsTechncians');
var LabsResult=require('../LabsResult/LabsResult')

exports.Create = function (req, res) {
 
	var newLabTech= new LabsTechncians(req.body);
	newLabTech.save(function(err,data){
		if (err){
			 console.error(err);
		}
		res.redirect('/login');
	});
};

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
	var updateTechncians ={
	userName:req.body.userName,
	password:req.body.password,
	fullName:req.body.fullName,
	personalImgUrl: req.body.personalImgUrl
	}
	//update Techncians information 
	LabsTechncians.update({"userName":req.body.userName},
		{$set:updateTechncians},
		function(err,data){
		res.json(data);
	});
}

exports.login = function (req, res) {
	LabsTechncians.findOne({userName: req.body.userName}).exec(function (err, tech) {
		if (err) {
			console.error(err);
		} 
		if (!tech) { // if tech not found response
			res.json("No user found");
		} else { // check the password   comparePassword function 
			tech.comparePassword(req.body.password, function(err, isMatch) {
				if (err) {
					console.error(err);
				}
				if (!isMatch) { // password not match case
					res.json("Wrong password");
				} else { // if true generate  a seassion
					return req.session.regenerate(function(err) {
		        		if (err) {
		        			return console.error(err);
		        		}
		        		req.session.userName = tech.userName;
		        		req.session.techncianType = tech.techncianType;
		        		res.json(tech);
					});
				}
			});
		}
	});
};

exports.logout = function (req, res) {
	req.session.destroy(function(err) {
		if (err) {
			return console.log(err);
		}
		res.json("logged out")
	});
};


exports.PatientResult=function(req,res){
	var patientId=req.params.patientId
	LabsResult.findOne({"patientId":patientId},function(err,data){
		if(err){
			console.error(err)
		}
		res.json(data)
	})
}
