var Medical = require('./Medical');

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
	Medical.find({patientId: req.body.patientId}).exec(function (err, data) {
		if (err) {
			console.error(err);
		} else if (!data) {
			res.json("No mdeical recorde found, check patient id");
		} else {
			res.json(data);
		}
	});
};