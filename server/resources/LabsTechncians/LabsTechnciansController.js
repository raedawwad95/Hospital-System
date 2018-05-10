var LabsTechncians = require('./LabsTechncians');

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



exports.login = function (req, res) {
	LabsTechncians.findOne({username: req.body.username}).exec(function (err, user) {
		if (err) {
			console.error(err);
		} 
		if (!user) { // if user not found response
			res.json("No user found");
		} else { // when find user check password by calling method comparePassword
			user.comparePassword(req.body.password, function(err, isMatch) {
				if (err) {
					console.error(err);
				}
				if (!isMatch) { // password not match case
					res.json("Wrong password");
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

exports.logout = function (req, res) {
	req.session.destroy(function(err) {
		if (err) {
			return console.log(err);
		}
		res.json("logged out")
	})
};

