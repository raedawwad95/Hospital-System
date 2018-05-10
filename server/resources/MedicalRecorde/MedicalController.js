var Medical = require('./Medical');
var Users = require('../User/Users');

exports.create = function (req, res) {
	var mid = new Medical(req.body);
	mid.save(function (err, user) {
	    if (err) {
	    	return console.error(err);	
	    } 
	    res.json('Record saved');
	});
};

exports.search = function (req, res) {
	// search by patientId ?? still need to check it later
	Medical.findOne({patientId: req.body.patientId}).exec(function (err, data) {
		if (err) {
			console.error(err);
		} else if (!data) {
			res.json("No mdeical recorde found, check patient id");
		} else {
			res.json(data);
		}
	});
};

exports.addRecord = function (req, res) {
	Users.findOne({username: req.body.username}).exec(function (err, user) {
		if (err) {
			console.error(err);
		} else if (!user) {
			res.json("No user found, please check username");
		} else {
			var obj = {
				description: req.body.description,
				image: req.body.image,
				patientId: user._id,
				doctorId: req.body.doctorId
			}
			var mid = new Medical(obj);
			mid.save();
			user.medicalRecords.push(mid._id);
			user.save(function(err) {
				if (err) {
					console.error(err)
				}
			})
			res.json("Record been saved in database");
		}
	});
}