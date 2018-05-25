var Users = require('./Users');

exports.create = function (req, res) {
	var user = new Users(req.body);
	user.save(function(err, user) {
		if (err) {
			console.error(err);
		}
		res.redirect('/login');
	})
};

exports.login = function (req, res) {
	Users.findOne({username: req.body.username}).exec(function (err, user) {
		if (err) {
			console.error(err);
		} 
		if (!user) { // if user not found response
			console.error("No user found");
		} else { // when find user check password by calling method comparePassword
			user.comparePassword(req.body.password, function(err, isMatch) {
				if (err) {
					console.error(err);
				}
				if (!isMatch) { // password not match case
					console.error("Wrong password");
				} else { // if match, go and generate seassion
					return req.session.regenerate(function(err) {
		        		if (err) {
		        			return console.error(err);
		        		}
		        		req.session.username = user.username;
		        		req.session.userType = user.userType;
		        		res.json(user);
					});
				}
			});
		}
	});
};

exports.loginNative = function (req, res) {
	Users.findOne({username: req.body.username}).exec(function (err, user) {
		if (err) {
			console.error(err);
		} 
		if (!user) { // if user not found response
			res.send({success: false, message: 'User Not found'})
		} else { // when find user check password by calling method comparePassword
			user.comparePassword(req.body.password, function(err, isMatch) {
				if (err) {
					console.error(err);
				}
				if (!isMatch) { // password not match case
					res.send({success: false, message: 'Password Wrong'})
				} else { // if match, go and generate seassion
					return req.session.regenerate(function(err) {
		        		if (err) {
		        			return console.error(err);
		        		}
		        		res.send({success: true, username: user.username})
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
	})
}
exports.retriveAllPatient = function (req, res) {
	Users.find({},function(err,users){
		if(err){
			console.error(err);
		}
		res.json(users);
	})
		}
exports.retrive = function (req, res) {
	Users.find({username:req.params.username})
		.populate({
			path:'medicalRecords',
			populate: {
				path: "doctorId",
				select: "fullName"
			}
		})
		.populate({
			path:'labResults',
			populate: {
				path: "labTechnicianId",
				select: "fullName"
			}
		})
		.exec(function (err, user) {
			if (err) {
				console.error(err);
			}
			if (!user) {
				res.json('no user');
			} else {
				res.json(user);
			}
		})
}

exports.isLogin = function(req, res) {
	if (req.session.userType === "P") {
		res.json(true);

	} else {
		console.error("not Login");
		res.status(500)
 		res.json('error')
	}
}

exports.getLoginData = function(req, res) {
	Users.findOne({username: req.session.username}).exec(function(err, user) {
		if (err) {
			console.error(err);
		}
		if (!user) {
			console.error("no user found");
		} else {
			console.log('welcome')
			res.json(user);
		}
	})
}