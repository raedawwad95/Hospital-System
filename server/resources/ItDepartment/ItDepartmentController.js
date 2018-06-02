var ItDepartment = require('./ItDepartment.js');

//create new ItDep
exports.create = function(req,res){
	var newItDepartment = new ItDepartment(req.body);
	newItDepartment.save(function(err,data){
		if(err){
			res.json(err);
		}
		res.json(data);
	});
}
//retrieve data
exports.retrieve= function(req,res){
	ItDepartment.find({},function(err,data){
		if(err){
			res.json(err);
		}
		res.json(data);

	});
}
//login
exports.login=function(req,res){
	ItDepartment.findOne({userName:req.body.userName}).exec(function(err,ItDep){
		if(err){//err
			console.error(err);
		}
		if(!ItDep){//not found Itdep
			console.error('No ItDepartment found')
		}else{//found Itdep and check the password by comparePassword method
			ItDep.comparePassword(req.body.password,function(err,isMatch){
				if(err){//err
					console.error(err);
				}
				if(!isMatch){//not match password
					console.error('not match password');
				}else{//if match password make session regenerate
					return req.session.regenerate(function(err){
						if(err){
							return console.log(err);
						}
						req.session.userName = ItDep.userName;
						req.session.adminType = ItDep.userType;
						res.json(ItDep);
					});
				}
			});
		}
	});
}
//logout 
exports.logout = function(req,res){
	req.session.destroy(function(err){
		if(err){
			console.log(err);
		}
		    res.redirect('/admin');
	});
}
//check the user type that logged in 
exports.isLogin = function(req, res) {
	if (req.session.adminType === "A") {
		res.json(true);
	} else {
		console.error("not Admin");
		res.status(500)
 		res.json('error')
	}
}