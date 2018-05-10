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
			console.log(err);
		}
		if(!ItDep){//not found Itdep
			res.json('No ItDepartment found')
		}else{//found Itdep and check the password by comparePassword method
			ItDep.comparePassword(req.body.password,function(err,isMatch){
				if(err){//err
					console.log(err);
				}
				if(!isMatch){//not match password
					res.json('not match password');
				}else{//if match password make session regenerate
					return req.session.regenerate(function(err){
						if(err){
							return console.log(err);
						}
						req.session.userName = ItDep.userName;
						res.json(ItDep);
					});
				}
			});
		}
	});
}
//logout 
exports.logout = function(req,res){
	req.session.destroy(function(){
		if(err){
			console.log(err);
		}
		    res.json("logged out")
	});
}